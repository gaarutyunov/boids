// Tunable parameters (SPEC §9). Starting values; all exposed as a single config
// object for live tuning during development.

export interface SimConfig {
  maxSpeed: number;
  maxForce: number;
  perception: number;
  sepRadius: number;
  wSep: number;
  wAli: number;
  wCoh: number;
  arriveRadius: number;
  orbitRadius: number;
  orbitSpeed: number;
  kSpring: number;
  gapOpen: number;
  gapClosed: number;
  smooth: number;
}

export const defaultConfig: SimConfig = {
  maxSpeed: 3.0,
  maxForce: 0.05,
  perception: 50,
  sepRadius: 25,
  wSep: 1.5,
  wAli: 1.0,
  wCoh: 1.0,
  arriveRadius: 120,
  orbitRadius: 80,
  orbitSpeed: 2.5,
  kSpring: 0.05,
  gapOpen: 1.2,
  gapClosed: 0.25,
  smooth: 0.3,
};

// MUST match the field order expected by the Rust core's `set_params`
// (see core/src/lib.rs PARAM_COUNT documentation).
export function configToParamArray(c: SimConfig): Float32Array {
  return new Float32Array([
    c.maxSpeed,
    c.maxForce,
    c.perception,
    c.sepRadius,
    c.wSep,
    c.wAli,
    c.wCoh,
    c.arriveRadius,
    c.orbitRadius,
    c.orbitSpeed,
    c.kSpring,
    c.gapOpen,
    c.gapClosed,
    c.smooth,
  ]);
}

export const BOID_COUNT = 400;

// Run inference at most this often (ms). Decouples inference rate from render
// rate (SPEC §5.5): the last HandResult is reused between inferences.
export const INFERENCE_INTERVAL_MS = 1000 / 30;
