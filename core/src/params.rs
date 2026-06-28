//! Tunable simulation parameters. Starting values come straight from SPEC §9 and
//! are all exposed for live tuning from the JS shell.

/// All tunable knobs for the simulation. `Copy` so it can be passed by value and
/// swapped wholesale at runtime.
#[derive(Clone, Copy, Debug)]
pub struct Params {
    pub max_speed: f32,
    pub max_force: f32,
    pub perception: f32,
    pub sep_radius: f32,
    pub w_sep: f32,
    pub w_ali: f32,
    pub w_coh: f32,
    pub arrive_radius: f32,
    pub orbit_radius: f32,
    pub orbit_speed: f32,
    pub k_spring: f32,
    pub gap_open: f32,
    pub gap_closed: f32,
    pub smooth: f32,
}

impl Default for Params {
    fn default() -> Self {
        Params {
            max_speed: 3.0,
            max_force: 0.05,
            perception: 50.0,
            sep_radius: 25.0,
            w_sep: 1.5,
            w_ali: 1.0,
            w_coh: 1.0,
            arrive_radius: 120.0,
            orbit_radius: 80.0,
            orbit_speed: 2.5,
            k_spring: 0.05,
            gap_open: 1.2,
            gap_closed: 0.25,
            smooth: 0.3,
        }
    }
}
