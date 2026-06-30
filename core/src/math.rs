//! Minimal 2D vector math, `no_std` (uses `libm` for the float ops that live in
//! `std` but not `core`).

use libm::{atan2f, sqrtf};

/// A plain 2D vector. `Copy`, no allocation, embedded-friendly.
#[derive(Clone, Copy, Debug, Default, PartialEq)]
pub struct Vec2 {
    pub x: f32,
    pub y: f32,
}

impl Vec2 {
    pub const ZERO: Vec2 = Vec2 { x: 0.0, y: 0.0 };

    #[inline]
    pub fn new(x: f32, y: f32) -> Self {
        Vec2 { x, y }
    }

    #[inline]
    pub fn add(self, o: Vec2) -> Vec2 {
        Vec2::new(self.x + o.x, self.y + o.y)
    }

    #[inline]
    pub fn sub(self, o: Vec2) -> Vec2 {
        Vec2::new(self.x - o.x, self.y - o.y)
    }

    #[inline]
    pub fn scale(self, s: f32) -> Vec2 {
        Vec2::new(self.x * s, self.y * s)
    }

    #[inline]
    pub fn dot(self, o: Vec2) -> f32 {
        self.x * o.x + self.y * o.y
    }

    #[inline]
    pub fn len_sq(self) -> f32 {
        self.dot(self)
    }

    #[inline]
    pub fn len(self) -> f32 {
        sqrtf(self.len_sq())
    }

    #[inline]
    pub fn angle(self) -> f32 {
        atan2f(self.y, self.x)
    }

    /// Unit vector; returns `ZERO` when the input is (near) zero length.
    #[inline]
    pub fn normalize(self) -> Vec2 {
        let l = self.len();
        if l > 1e-6 {
            self.scale(1.0 / l)
        } else {
            Vec2::ZERO
        }
    }

    /// Clamp magnitude to `max` without changing direction.
    #[inline]
    pub fn limit(self, max: f32) -> Vec2 {
        let l_sq = self.len_sq();
        if l_sq > max * max && l_sq > 1e-12 {
            self.scale(max / sqrtf(l_sq))
        } else {
            self
        }
    }

    /// Rescale to a fixed magnitude (keeps direction).
    #[inline]
    pub fn with_len(self, target: f32) -> Vec2 {
        self.normalize().scale(target)
    }
}

/// Euclidean distance between two points.
#[inline]
pub fn distance(a: Vec2, b: Vec2) -> f32 {
    a.sub(b).len()
}

/// `clamp(x, lo, hi)` for `f32` (avoids relying on `f32::clamp`, which is fine in
/// `core` but kept explicit here for clarity).
#[inline]
pub fn clampf(x: f32, lo: f32, hi: f32) -> f32 {
    if x < lo {
        lo
    } else if x > hi {
        hi
    } else {
        x
    }
}

/// Hermite smoothstep over `[edge0, edge1]`, returning 0..1.
#[inline]
pub fn smoothstep(edge0: f32, edge1: f32, x: f32) -> f32 {
    if (edge1 - edge0).abs() < 1e-9 {
        return if x < edge0 { 0.0 } else { 1.0 };
    }
    let t = clampf((x - edge0) / (edge1 - edge0), 0.0, 1.0);
    t * t * (3.0 - 2.0 * t)
}
