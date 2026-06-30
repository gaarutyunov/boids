//! Behavioral tests for the portable core. Run with the `std` feature:
//! `cargo test --manifest-path core/Cargo.toml --features std`.

use pinch_boids_core::math::{clampf, distance, smoothstep, Vec2};
use pinch_boids_core::{Params, Sim};

fn centroid(sim: &Sim) -> Vec2 {
    let b = sim.boids();
    let mut c = Vec2::ZERO;
    for boid in b {
        c = c.add(boid.position);
    }
    c.scale(1.0 / b.len() as f32)
}

#[test]
fn vec_math_basics() {
    let a = Vec2::new(3.0, 4.0);
    assert!((a.len() - 5.0).abs() < 1e-5);
    assert!((a.normalize().len() - 1.0).abs() < 1e-5);
    assert!(a.limit(2.0).len() <= 2.0 + 1e-5);
    assert!((distance(Vec2::new(0.0, 0.0), Vec2::new(0.0, 5.0)) - 5.0).abs() < 1e-5);
}

#[test]
fn smoothstep_endpoints() {
    assert_eq!(smoothstep(0.0, 1.0, -1.0), 0.0);
    assert_eq!(smoothstep(0.0, 1.0, 2.0), 1.0);
    assert!((smoothstep(0.0, 1.0, 0.5) - 0.5).abs() < 1e-6);
    assert_eq!(clampf(5.0, 0.0, 1.0), 1.0);
}

#[test]
fn boids_stay_in_bounds_when_roaming() {
    let mut sim = Sim::new(800.0, 600.0, 400);
    for _ in 0..600 {
        sim.feed_landmarks(Vec2::ZERO, Vec2::ZERO, Vec2::ZERO, Vec2::ZERO, false);
        sim.step(1.0);
    }
    for b in sim.boids() {
        assert!(b.position.x >= 0.0 && b.position.x <= 800.0, "x out of bounds: {}", b.position.x);
        assert!(b.position.y >= 0.0 && b.position.y <= 600.0, "y out of bounds: {}", b.position.y);
        assert!(b.velocity.len() <= sim.params().max_speed + 1e-3);
    }
}

#[test]
fn pinch_amount_responds_to_gap() {
    let mut sim = Sim::new(800.0, 600.0, 50);
    let params = *sim.params();
    // Hand geometry: wrist->middle MCP defines scale = 100px.
    let wrist = Vec2::new(400.0, 500.0);
    let mmcp = Vec2::new(400.0, 400.0); // scale = 100

    // Wide open: gap large -> p should settle near 0.
    let open_thumb = Vec2::new(300.0, 300.0);
    let open_index = Vec2::new(500.0, 300.0); // gap 200 / 100 = 2.0 > GAP_OPEN
    for _ in 0..100 {
        sim.feed_landmarks(open_thumb, open_index, wrist, mmcp, true);
    }
    assert!(sim.pinch_state().p < 0.05, "expected open p~0, got {}", sim.pinch_state().p);

    // Fully closed: gap tiny -> p should settle near 1.
    let close = Vec2::new(400.0, 300.0);
    for _ in 0..100 {
        sim.feed_landmarks(close, close, wrist, mmcp, true);
    }
    assert!(sim.pinch_state().p > 0.95, "expected closed p~1, got {}", sim.pinch_state().p);
    let _ = params;
}

#[test]
fn full_pinch_pulls_boids_toward_midpoint() {
    let mut sim = Sim::new(800.0, 600.0, 300);
    let wrist = Vec2::new(400.0, 520.0);
    let mmcp = Vec2::new(400.0, 420.0);
    let target = Vec2::new(400.0, 300.0); // midpoint of a fully closed pinch
    let start = distance(centroid(&sim), target);

    for _ in 0..400 {
        sim.feed_landmarks(target, target, wrist, mmcp, true);
        sim.step(1.0);
    }
    let end = distance(centroid(&sim), target);
    // Orbit keeps them off the exact point, but the cloud should be near the
    // orbit ring, much closer than where they started.
    assert!(end < start, "boids did not converge: start {start}, end {end}");
    assert!(end < sim.params().orbit_radius * 2.0, "boids not near orbit ring: {end}");
}

#[test]
fn set_params_takes_effect() {
    let mut sim = Sim::new(100.0, 100.0, 10);
    let mut p = Params::default();
    p.max_speed = 9.99;
    sim.set_params(p);
    assert!((sim.params().max_speed - 9.99).abs() < 1e-6);
}

#[test]
fn render_buffer_matches_boids() {
    let mut sim = Sim::new(200.0, 200.0, 5);
    sim.feed_landmarks(Vec2::ZERO, Vec2::ZERO, Vec2::ZERO, Vec2::ZERO, false);
    sim.step(1.0);
    let buf = sim.render_buf();
    assert_eq!(buf.len(), 5 * 4);
    for (i, b) in sim.boids().iter().enumerate() {
        assert_eq!(buf[i * 4], b.position.x);
        assert_eq!(buf[i * 4 + 1], b.position.y);
    }
}
