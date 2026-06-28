//! Boids simulation (SPEC §5.3). Fixed-size storage allocated once at
//! construction; no heap allocation in the per-frame update loop. Pure `core` /
//! `alloc` — no I/O, no rendering.

extern crate alloc;
use alloc::vec::Vec;

use crate::math::{clampf, smoothstep, Vec2};
use crate::params::Params;
use crate::pinch::PinchState;

/// One boid's mutable state.
#[derive(Clone, Copy, Debug, Default)]
pub struct Boid {
    pub position: Vec2,
    pub velocity: Vec2,
    pub acceleration: Vec2,
}

/// Tiny deterministic PRNG (SplitMix32-ish). Used only to seed the initial flock
/// layout; the update loop is fully deterministic and allocation-free.
struct Rng {
    state: u32,
}

impl Rng {
    fn new(seed: u32) -> Self {
        Rng {
            state: seed ^ 0x9E37_79B9,
        }
    }

    /// Next float in `[0, 1)`.
    fn next_f32(&mut self) -> f32 {
        // xorshift32
        let mut x = self.state;
        x ^= x << 13;
        x ^= x >> 17;
        x ^= x << 5;
        self.state = x;
        (x >> 8) as f32 / (1u32 << 24) as f32
    }

    fn range(&mut self, lo: f32, hi: f32) -> f32 {
        lo + (hi - lo) * self.next_f32()
    }
}

/// The simulation: boids + params + smoothed pinch signal + a contiguous render
/// buffer the renderer can read directly.
pub struct Sim {
    width: f32,
    height: f32,
    boids: Vec<Boid>,
    params: Params,
    pinch: PinchState,
    /// `[x, y, vx, vy]` per boid, refreshed each `update`. Lets the JS side build
    /// a `Float32Array` view over wasm memory with zero copying.
    render_buf: Vec<f32>,
}

impl Sim {
    /// Create a flock of `count` boids spread across the world, with small random
    /// initial velocities. Deterministic for a given `(width, height, count)`.
    pub fn new(width: f32, height: f32, count: usize) -> Self {
        let seed = (width as u32)
            .wrapping_mul(73_856_093)
            ^ (height as u32).wrapping_mul(19_349_663)
            ^ (count as u32).wrapping_mul(83_492_791);
        let mut rng = Rng::new(seed | 1);

        let mut boids = Vec::with_capacity(count);
        for _ in 0..count {
            let position = Vec2::new(rng.range(0.0, width), rng.range(0.0, height));
            let angle = rng.range(0.0, core::f32::consts::TAU);
            let speed = rng.range(0.5, 2.0);
            let velocity = Vec2::new(libm::cosf(angle) * speed, libm::sinf(angle) * speed);
            boids.push(Boid {
                position,
                velocity,
                acceleration: Vec2::ZERO,
            });
        }

        let render_buf = alloc::vec![0.0f32; count * 4];

        Sim {
            width,
            height,
            boids,
            params: Params::default(),
            pinch: PinchState::new(),
            render_buf,
        }
    }

    pub fn params(&self) -> &Params {
        &self.params
    }

    pub fn set_params(&mut self, params: Params) {
        self.params = params;
    }

    pub fn boids(&self) -> &[Boid] {
        &self.boids
    }

    pub fn pinch_state(&self) -> &PinchState {
        &self.pinch
    }

    /// Resize the world (e.g. on canvas resize). Positions are clamped in.
    pub fn resize(&mut self, width: f32, height: f32) {
        self.width = width;
        self.height = height;
    }

    /// Feed raw landmark positions (world pixels) into the smoothed pinch math.
    /// Call before [`Sim::update`] each frame.
    #[allow(clippy::too_many_arguments)]
    pub fn feed_landmarks(
        &mut self,
        thumb: Vec2,
        index: Vec2,
        wrist: Vec2,
        middle_mcp: Vec2,
        detected: bool,
    ) {
        self.pinch
            .update(thumb, index, wrist, middle_mcp, detected, &self.params);
    }

    /// Advance the simulation one step using the current smoothed pinch signal.
    /// `dt` is a frame-time scale (1.0 == nominal 60 FPS step); pass the measured
    /// `dt * 60` so behavior is frame-rate independent.
    pub fn step(&mut self, dt: f32) {
        let p = self.pinch.p;
        let midpoint = self.pinch.midpoint;

        let t1 = smoothstep(0.0, 0.5, p);
        let t2 = smoothstep(0.5, 1.0, p);

        let n = self.boids.len();
        for i in 0..n {
            let acc = self.steer(i, p, t1, t2, midpoint);
            self.boids[i].acceleration = acc;
        }

        // Integrate.
        let max_speed = self.params.max_speed;
        for b in self.boids.iter_mut() {
            b.velocity = b.velocity.add(b.acceleration.scale(dt)).limit(max_speed);
            b.position = b.position.add(b.velocity.scale(dt));
            b.acceleration = Vec2::ZERO;
            wrap(&mut b.position, self.width, self.height);
        }

        self.refresh_render_buf();
    }

    /// Compute the total steering acceleration for boid `i`.
    fn steer(&self, i: usize, _p: f32, t1: f32, t2: f32, midpoint: Vec2) -> Vec2 {
        let me = self.boids[i];
        let pr = self.params.perception;
        let sr = self.params.sep_radius;
        let pr_sq = pr * pr;
        let sr_sq = sr * sr;

        let mut sep = Vec2::ZERO;
        let mut ali = Vec2::ZERO;
        let mut coh = Vec2::ZERO;
        let mut flock_count = 0u32;
        let mut sep_count = 0u32;

        // Single neighbor pass gathers separation / alignment / cohesion at once.
        for (j, other) in self.boids.iter().enumerate() {
            if j == i {
                continue;
            }
            let offset = me.position.sub(other.position);
            let d_sq = offset.len_sq();

            if d_sq < sr_sq && d_sq > 1e-9 {
                // Separation: push away, weighted by 1/distance.
                let d = libm::sqrtf(d_sq);
                sep = sep.add(offset.scale(1.0 / (d * d)));
                sep_count += 1;
            }
            if d_sq < pr_sq {
                ali = ali.add(other.velocity);
                coh = coh.add(other.position);
                flock_count += 1;
            }
        }

        let mut separation = Vec2::ZERO;
        if sep_count > 0 {
            separation = self.steer_toward(sep, me.velocity);
        }

        let mut alignment = Vec2::ZERO;
        let mut cohesion = Vec2::ZERO;
        if flock_count > 0 {
            let inv = 1.0 / flock_count as f32;
            let avg_vel = ali.scale(inv);
            alignment = self.steer_toward(avg_vel, me.velocity);

            let centroid = coh.scale(inv);
            cohesion = self.steer_toward(centroid.sub(me.position), me.velocity);
        }

        // Pinch-driven targets.
        let arrive = self.arrive(me, midpoint);
        let orbit = self.orbit(me, midpoint);

        let flock = alignment
            .scale(self.params.w_ali)
            .add(cohesion.scale(self.params.w_coh))
            .scale(1.0 - t1);
        let follow = arrive.scale(t1 * (1.0 - t2));
        let orbit_f = orbit.scale(t2);

        // Separation is ALWAYS on so the flock never collapses to a point.
        separation
            .scale(self.params.w_sep)
            .add(flock)
            .add(follow)
            .add(orbit_f)
    }

    /// Classic Reynolds steer: turn a desired direction into a force that nudges
    /// `velocity` toward `desired @ max_speed`, clamped to `max_force`.
    #[inline]
    fn steer_toward(&self, desired_dir: Vec2, velocity: Vec2) -> Vec2 {
        if desired_dir.len_sq() < 1e-12 {
            return Vec2::ZERO;
        }
        let desired = desired_dir.with_len(self.params.max_speed);
        desired.sub(velocity).limit(self.params.max_force)
    }

    /// Arrive(target): seek the target but decelerate inside `ARRIVE_RADIUS`.
    fn arrive(&self, me: Boid, target: Vec2) -> Vec2 {
        let to_target = target.sub(me.position);
        let d = to_target.len();
        if d < 1e-6 {
            return Vec2::ZERO;
        }
        let speed = if d < self.params.arrive_radius {
            self.params.max_speed * (d / self.params.arrive_radius)
        } else {
            self.params.max_speed
        };
        let desired = to_target.with_len(speed);
        desired.sub(me.velocity).limit(self.params.max_force)
    }

    /// Orbit(center): radial spring toward the orbit ring + tangential motion.
    fn orbit(&self, me: Boid, center: Vec2) -> Vec2 {
        let radial = me.position.sub(center);
        let d = radial.len();
        if d < 1e-6 {
            // Degenerate at the exact center: nudge outward deterministically.
            return Vec2::new(self.params.max_force, 0.0);
        }
        let radial_n = radial.scale(1.0 / d);
        // Spring pulls toward the ring radius (negative = inward when outside).
        let f_radial = radial_n.scale(-self.params.k_spring * (d - self.params.orbit_radius));
        let tangent = Vec2::new(-radial_n.y, radial_n.x).scale(self.params.orbit_speed);
        let desired = tangent.add(f_radial);
        desired.sub(me.velocity).limit(self.params.max_force)
    }

    fn refresh_render_buf(&mut self) {
        for (i, b) in self.boids.iter().enumerate() {
            let o = i * 4;
            self.render_buf[o] = b.position.x;
            self.render_buf[o + 1] = b.position.y;
            self.render_buf[o + 2] = b.velocity.x;
            self.render_buf[o + 3] = b.velocity.y;
        }
    }

    pub fn render_buf(&self) -> &[f32] {
        &self.render_buf
    }
}

/// Wrap a position toroidally within `[0, w) x [0, h)`.
#[inline]
fn wrap(p: &mut Vec2, w: f32, h: f32) {
    if w > 0.0 {
        if p.x < 0.0 {
            p.x += w;
        } else if p.x >= w {
            p.x -= w;
        }
        p.x = clampf(p.x, 0.0, w);
    }
    if h > 0.0 {
        if p.y < 0.0 {
            p.y += h;
        } else if p.y >= h {
            p.y -= h;
        }
        p.y = clampf(p.y, 0.0, h);
    }
}
