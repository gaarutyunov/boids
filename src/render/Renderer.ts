// Renderer interface (SPEC §5.4). Draws a frame from core boid state + hand
// landmarks. No simulation logic lives here. Swappable (Canvas2D now, WebGPU
// compute later).

import type { HandResult } from '../hand/HandStage';

export interface FrameState {
  // Flat boid buffer from the core: [x, y, vx, vy] per boid, in world pixels.
  boids: Float32Array;
  boidCount: number;
  // Smoothed pinch readout (for debug overlay + target marker).
  pinch: number;
  midpointX: number;
  midpointY: number;
  detected: boolean;
  // Uniform mapping from normalized [0,1] landmark coords to world px. Shared
  // with the shell so the drawn silhouette matches what's fed to the core.
  handOffsetX: number;
  handOffsetY: number;
  handScale: number;
}

export interface Renderer {
  resize(width: number, height: number, dpr: number): void;
  draw(state: FrameState, hand: HandResult): void;
}
