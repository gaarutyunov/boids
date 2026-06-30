//! Pinch-Boids portable core.
//!
//! Pinch math + boids simulation, written to be `no_std` and allocation-free in
//! the per-frame loop so the exact same crate can later target an embedded
//! device. The browser build layers a thin `wasm-bindgen` API on top (behind the
//! `wasm` feature); on any other target the core compiles with no browser,
//! runtime, or rendering dependencies — verifiable with:
//!
//! ```text
//! cargo build --manifest-path core/Cargo.toml --no-default-features
//! ```
//!
//! which builds the crate as `no_std` (only `libm` + `alloc`), proving it has no
//! browser/runtime/render dependencies. Tests run with `--features std`.

#![cfg_attr(not(feature = "std"), no_std)]

extern crate alloc;

pub mod math;
pub mod params;
pub mod pinch;
pub mod sim;

pub use math::Vec2;
pub use params::Params;
pub use pinch::PinchState;
pub use sim::{Boid, Sim};

// ---------------------------------------------------------------------------
// Browser (wasm-bindgen) API. Compiled only with the `wasm` feature so the core
// itself stays free of any platform dependency.
// ---------------------------------------------------------------------------

#[cfg(feature = "wasm")]
mod wasm_api {
    use super::*;
    use wasm_bindgen::prelude::*;

    /// Order of values expected by [`WasmSim::set_params`]. Mirror this in TS.
    /// 0:max_speed 1:max_force 2:perception 3:sep_radius 4:w_sep 5:w_ali
    /// 6:w_coh 7:arrive_radius 8:orbit_radius 9:orbit_speed 10:k_spring
    /// 11:gap_open 12:gap_closed 13:smooth
    pub const PARAM_COUNT: usize = 14;

    #[wasm_bindgen]
    pub struct WasmSim {
        inner: Sim,
    }

    #[wasm_bindgen]
    impl WasmSim {
        #[wasm_bindgen(constructor)]
        pub fn new(width: f32, height: f32, count: usize) -> WasmSim {
            WasmSim {
                inner: Sim::new(width, height, count),
            }
        }

        /// Resize the simulation world.
        pub fn resize(&mut self, width: f32, height: f32) {
            self.inner.resize(width, height);
        }

        /// Feed the four pinch-relevant landmarks (world pixels) + detection flag.
        #[allow(clippy::too_many_arguments)]
        pub fn feed_landmarks(
            &mut self,
            thumb_x: f32,
            thumb_y: f32,
            index_x: f32,
            index_y: f32,
            wrist_x: f32,
            wrist_y: f32,
            middle_mcp_x: f32,
            middle_mcp_y: f32,
            detected: bool,
        ) {
            self.inner.feed_landmarks(
                Vec2::new(thumb_x, thumb_y),
                Vec2::new(index_x, index_y),
                Vec2::new(wrist_x, wrist_y),
                Vec2::new(middle_mcp_x, middle_mcp_y),
                detected,
            );
        }

        /// Advance one step. `dt` is the frame-time scale (1.0 == 60 FPS step).
        pub fn step(&mut self, dt: f32) {
            self.inner.step(dt);
        }

        /// Number of boids.
        pub fn boid_count(&self) -> usize {
            self.inner.boids().len()
        }

        /// Pointer to the `[x, y, vx, vy] * boid_count` render buffer in wasm
        /// memory. Build a `Float32Array(memory.buffer, ptr, boid_count*4)`.
        pub fn boids_ptr(&self) -> *const f32 {
            self.inner.render_buf().as_ptr()
        }

        /// Length (in f32 elements) of the render buffer.
        pub fn boids_len(&self) -> usize {
            self.inner.render_buf().len()
        }

        // --- debug / smoothed pinch readout ---
        pub fn pinch_amount(&self) -> f32 {
            self.inner.pinch_state().p
        }
        pub fn midpoint_x(&self) -> f32 {
            self.inner.pinch_state().midpoint.x
        }
        pub fn midpoint_y(&self) -> f32 {
            self.inner.pinch_state().midpoint.y
        }
        pub fn detected(&self) -> bool {
            self.inner.pinch_state().detected
        }

        /// Bulk-set tunable params from a fixed-order array (see [`PARAM_COUNT`]).
        /// No-op if the slice length doesn't match.
        pub fn set_params(&mut self, values: &[f32]) {
            if values.len() != PARAM_COUNT {
                return;
            }
            let p = Params {
                max_speed: values[0],
                max_force: values[1],
                perception: values[2],
                sep_radius: values[3],
                w_sep: values[4],
                w_ali: values[5],
                w_coh: values[6],
                arrive_radius: values[7],
                orbit_radius: values[8],
                orbit_speed: values[9],
                k_spring: values[10],
                gap_open: values[11],
                gap_closed: values[12],
                smooth: values[13],
            };
            self.inner.set_params(p);
        }
    }
}

#[cfg(feature = "wasm")]
pub use wasm_api::WasmSim;

// ---------------------------------------------------------------------------
// Standalone `no_std` runtime support. Only compiled when building the crate as
// a final artifact without `std` (i.e. the portability proof / a real embedded
// build). A browser build uses `std` (via the `wasm` feature) and never sees
// this; tests use `std` too. The bump allocator is intentionally minimal — it
// satisfies the one-time construction-time allocation and never frees, matching
// the "no heap churn in the loop" contract. A concrete embedded target would
// swap in its own allocator + panic handler.
// ---------------------------------------------------------------------------
#[cfg(all(not(feature = "std"), not(test)))]
mod no_std_rt {
    use core::alloc::{GlobalAlloc, Layout};
    use core::cell::UnsafeCell;
    use core::sync::atomic::{AtomicUsize, Ordering};

    const HEAP_SIZE: usize = 1 << 20; // 1 MiB scratch arena

    #[repr(align(16))]
    struct Heap(UnsafeCell<[u8; HEAP_SIZE]>);
    // Single-threaded Wasm / embedded use; access is serialized by the atomic.
    unsafe impl Sync for Heap {}

    static HEAP: Heap = Heap(UnsafeCell::new([0; HEAP_SIZE]));
    static OFFSET: AtomicUsize = AtomicUsize::new(0);

    struct BumpAlloc;

    unsafe impl GlobalAlloc for BumpAlloc {
        unsafe fn alloc(&self, layout: Layout) -> *mut u8 {
            let (size, align) = (layout.size(), layout.align());
            loop {
                let cur = OFFSET.load(Ordering::Relaxed);
                let start = (cur + align - 1) & !(align - 1);
                let end = match start.checked_add(size) {
                    Some(e) => e,
                    None => return core::ptr::null_mut(),
                };
                if end > HEAP_SIZE {
                    return core::ptr::null_mut();
                }
                if OFFSET
                    .compare_exchange(cur, end, Ordering::SeqCst, Ordering::Relaxed)
                    .is_ok()
                {
                    return (HEAP.0.get() as *mut u8).add(start);
                }
            }
        }
        unsafe fn dealloc(&self, _ptr: *mut u8, _layout: Layout) {}
    }

    #[global_allocator]
    static ALLOC: BumpAlloc = BumpAlloc;

    #[panic_handler]
    fn panic(_info: &core::panic::PanicInfo) -> ! {
        loop {}
    }
}
