//! Pinch math (SPEC §5.2). Scale-invariant pinch amount + smoothed midpoint,
//! derived from four hand landmarks. Pure computation — no I/O.

use crate::math::{clampf, distance, Vec2};
use crate::params::Params;

/// Smoothed pinch signal fed to the simulation.
#[derive(Clone, Copy, Debug, Default)]
pub struct PinchState {
    /// Smoothed pinch amount in `[0, 1]` (0 = open, 1 = fully pinched).
    pub p: f32,
    /// Smoothed midpoint between thumb tip and index tip, in world pixels.
    pub midpoint: Vec2,
    /// Whether a hand was detected on the most recent update.
    pub detected: bool,
    initialized: bool,
}

impl PinchState {
    pub fn new() -> Self {
        PinchState::default()
    }

    /// Update the smoothed pinch signal from raw landmark positions (already in
    /// world pixels). `thumb` = landmark 4, `index` = landmark 8, `wrist` =
    /// landmark 0, `middle_mcp` = landmark 9.
    ///
    /// When `detected` is false the target pinch is forced to 0 (pure roam) and
    /// the midpoint simply decays toward its current value (i.e. holds).
    pub fn update(
        &mut self,
        thumb: Vec2,
        index: Vec2,
        wrist: Vec2,
        middle_mcp: Vec2,
        detected: bool,
        params: &Params,
    ) {
        self.detected = detected;
        let smooth = clampf(params.smooth, 0.0, 1.0);

        let (target_p, target_mid) = if detected {
            let scale = distance(wrist, middle_mcp).max(1e-3);
            let raw_gap = distance(thumb, index) / scale;
            let denom = (params.gap_open - params.gap_closed).max(1e-6);
            let p = clampf((params.gap_open - raw_gap) / denom, 0.0, 1.0);
            let mid = thumb.add(index).scale(0.5);
            (p, mid)
        } else {
            // No hand: relax to roam; hold the last midpoint so re-acquisition
            // doesn't snap.
            (0.0, self.midpoint)
        };

        if !self.initialized {
            // Seed the EMA so the first frame doesn't ramp from zero.
            self.p = target_p;
            self.midpoint = if detected { target_mid } else { Vec2::ZERO };
            self.initialized = true;
            return;
        }

        // Exponential moving average: value += SMOOTH * (new - value).
        self.p += smooth * (target_p - self.p);
        self.midpoint = self
            .midpoint
            .add(target_mid.sub(self.midpoint).scale(smooth));
    }
}
