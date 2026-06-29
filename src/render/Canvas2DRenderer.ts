// Canvas2D renderer (SPEC §5.4). Draws boids as velocity-oriented triangles with
// faint trails, plus a privacy-preserving hand silhouette derived purely from
// landmarks. The camera image is NEVER drawn.

import { HAND_CONNECTIONS, type HandResult } from '../hand/HandStage';
import type { FrameState, Renderer } from './Renderer';

const BG = '#0a0e14';
const TRAIL_ALPHA = 0.18; // lower = longer trails
const BOID_SIZE = 4.5;
const BOID_COLOR = '#7fd1ff';
const HAND_STROKE = 'rgba(120, 255, 200, 0.9)';
const HAND_FILL = 'rgba(120, 255, 200, 0.10)';
const HAND_JOINT = 'rgba(180, 255, 230, 0.95)';

export class Canvas2DRenderer implements Renderer {
  private readonly ctx: CanvasRenderingContext2D;
  private width = 0;
  private height = 0;
  public showDebug = true;
  public trails = true;

  constructor(private readonly canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) throw new Error('2D context unavailable');
    this.ctx = ctx;
  }

  resize(width: number, height: number, dpr: number): void {
    this.width = width;
    this.height = height;
    this.canvas.width = Math.round(width * dpr);
    this.canvas.height = Math.round(height * dpr);
    this.canvas.style.width = `${width}px`;
    this.canvas.style.height = `${height}px`;
    // Draw in CSS pixels (== world pixels) regardless of device pixel ratio.
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.ctx.fillStyle = BG;
    this.ctx.fillRect(0, 0, width, height);
  }

  draw(state: FrameState, hand: HandResult): void {
    const ctx = this.ctx;

    // Background / trails: fade the previous frame instead of clearing.
    if (this.trails) {
      ctx.fillStyle = withAlpha(BG, TRAIL_ALPHA);
      ctx.fillRect(0, 0, this.width, this.height);
    } else {
      ctx.fillStyle = BG;
      ctx.fillRect(0, 0, this.width, this.height);
    }

    this.drawBoids(state);
    if (hand.detected && hand.landmarks.length === 21) {
      this.drawHand(hand, state);
    }
    if (state.detected) {
      this.drawTarget(state);
    }
    if (this.showDebug) {
      this.drawDebug(state, hand);
    }
  }

  private drawBoids(state: FrameState): void {
    const ctx = this.ctx;
    const b = state.boids;
    ctx.fillStyle = BOID_COLOR;
    ctx.beginPath();
    const s = BOID_SIZE;
    for (let i = 0; i < state.boidCount; i++) {
      const o = i * 4;
      const x = b[o];
      const y = b[o + 1];
      const vx = b[o + 2];
      const vy = b[o + 3];
      const a = Math.atan2(vy, vx);
      const cos = Math.cos(a);
      const sin = Math.sin(a);
      // Triangle: tip forward, two tails behind. Built inline (no per-boid
      // save/restore) to keep 400 boids cheap.
      const tipX = x + cos * s;
      const tipY = y + sin * s;
      const leftX = x + cos * -s * 0.6 - sin * s * 0.5;
      const leftY = y + sin * -s * 0.6 + cos * s * 0.5;
      const rightX = x + cos * -s * 0.6 + sin * s * 0.5;
      const rightY = y + sin * -s * 0.6 - cos * s * 0.5;
      ctx.moveTo(tipX, tipY);
      ctx.lineTo(leftX, leftY);
      ctx.lineTo(rightX, rightY);
      ctx.closePath();
    }
    ctx.fill();
  }

  // Landmarks are in mirrored, image-normalized [0,1] coords (over the square
  // model crop); map to world px with the SAME uniform transform the shell feeds
  // to the core, so the silhouette and the boid target agree.
  private drawHand(hand: HandResult, state: FrameState): void {
    const ctx = this.ctx;
    const pts = hand.landmarks.map((l) => ({
      x: state.handOffsetX + l.x * state.handScale,
      y: state.handOffsetY + l.y * state.handScale,
    }));

    // Optional solid silhouette feel via convex hull fill.
    const hull = convexHull(pts);
    if (hull.length >= 3) {
      ctx.beginPath();
      ctx.moveTo(hull[0].x, hull[0].y);
      for (let i = 1; i < hull.length; i++) ctx.lineTo(hull[i].x, hull[i].y);
      ctx.closePath();
      ctx.fillStyle = HAND_FILL;
      ctx.fill();
    }

    // Skeleton bones as rounded capsule strokes.
    ctx.strokeStyle = HAND_STROKE;
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    for (const [a, b] of HAND_CONNECTIONS) {
      ctx.moveTo(pts[a].x, pts[a].y);
      ctx.lineTo(pts[b].x, pts[b].y);
    }
    ctx.stroke();

    // Joints.
    ctx.fillStyle = HAND_JOINT;
    for (const p of pts) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  private drawTarget(state: FrameState): void {
    const ctx = this.ctx;
    const x = state.midpointX;
    const y = state.midpointY;
    const r = 6 + state.pinch * 10;
    ctx.strokeStyle = `rgba(255, 200, 120, ${0.3 + 0.6 * state.pinch})`;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.stroke();
  }

  private drawDebug(state: FrameState, hand: HandResult): void {
    const ctx = this.ctx;
    ctx.fillStyle = 'rgba(220, 230, 240, 0.85)';
    ctx.font = '12px ui-monospace, Menlo, monospace';
    ctx.textBaseline = 'top';
    const lines = [
      `boids: ${state.boidCount}`,
      `hand: ${hand.detected ? 'detected' : '—'}`,
      `pinch p: ${state.pinch.toFixed(3)}`,
      `midpoint: ${state.midpointX.toFixed(0)}, ${state.midpointY.toFixed(0)}`,
    ];
    let y = 8;
    for (const line of lines) {
      ctx.fillText(line, 8, y);
      y += 15;
    }
  }
}

function withAlpha(hex: string, alpha: number): string {
  // hex like #0a0e14
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Andrew's monotone chain convex hull.
function convexHull(points: Array<{ x: number; y: number }>): Array<{ x: number; y: number }> {
  const pts = points.slice().sort((a, b) => (a.x === b.x ? a.y - b.y : a.x - b.x));
  if (pts.length < 3) return pts;
  const cross = (
    o: { x: number; y: number },
    a: { x: number; y: number },
    b: { x: number; y: number },
  ) => (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x);
  const lower: typeof pts = [];
  for (const p of pts) {
    while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], p) <= 0)
      lower.pop();
    lower.push(p);
  }
  const upper: typeof pts = [];
  for (let i = pts.length - 1; i >= 0; i--) {
    const p = pts[i];
    while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], p) <= 0)
      upper.pop();
    upper.push(p);
  }
  lower.pop();
  upper.pop();
  return lower.concat(upper);
}
