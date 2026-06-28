// Platform shell (SPEC §5.5 / §6). Owns model loading, the camera, the
// requestAnimationFrame loop, and the glue between the swappable hand stage, the
// portable core, and the renderer. Inference is decoupled from render rate: the
// last HandResult is reused between (throttled, async) inferences.

import init, { WasmSim } from './core-wasm/pinch_boids_core.js';
import wasmUrl from './core-wasm/pinch_boids_core_bg.wasm?url';
import {
  BOID_COUNT,
  configToParamArray,
  defaultConfig,
  INFERENCE_INTERVAL_MS,
  type SimConfig,
} from './config';
import {
  EMPTY_RESULT,
  LM_INDEX_TIP,
  LM_MIDDLE_MCP,
  LM_THUMB_TIP,
  LM_WRIST,
  type HandResult,
  type HandStage,
} from './hand/HandStage';
import { OrtWebHand } from './hand/OrtWebHand';
import { Canvas2DRenderer } from './render/Canvas2DRenderer';
import type { FrameState } from './render/Renderer';

function setStatus(msg: string, kind: 'info' | 'error' | 'hidden' = 'info'): void {
  const el = document.getElementById('status');
  if (!el) return;
  if (kind === 'hidden') {
    el.style.display = 'none';
    return;
  }
  el.style.display = 'block';
  el.textContent = msg;
  el.classList.toggle('error', kind === 'error');
}

async function startCamera(video: HTMLVideoElement): Promise<void> {
  if (!navigator.mediaDevices?.getUserMedia) {
    throw new Error('getUserMedia is unavailable (needs HTTPS + a supported browser).');
  }
  const stream = await navigator.mediaDevices.getUserMedia({
    video: { facingMode: 'user', width: { ideal: 640 }, height: { ideal: 480 } },
    audio: false,
  });
  video.srcObject = stream;
  await video.play();
}

class Shell {
  private readonly video: HTMLVideoElement;
  private readonly renderer: Canvas2DRenderer;
  private readonly hand: HandStage;
  private sim: WasmSim;
  private wasmMemory: WebAssembly.Memory;

  private config: SimConfig = { ...defaultConfig };
  private worldW = 0;
  private worldH = 0;

  private lastHand: HandResult = EMPTY_RESULT;
  private inferenceInFlight = false;
  private lastInferenceAt = 0;
  private cameraReady = false;
  private lastFrameTime = 0;

  constructor(
    canvas: HTMLCanvasElement,
    video: HTMLVideoElement,
    sim: WasmSim,
    wasmMemory: WebAssembly.Memory,
    hand: HandStage,
  ) {
    this.video = video;
    this.sim = sim;
    this.wasmMemory = wasmMemory;
    this.hand = hand;
    this.renderer = new Canvas2DRenderer(canvas);
    this.applyConfig(this.config);

    window.addEventListener('resize', () => this.resize());
    this.resize();
  }

  applyConfig(cfg: SimConfig): void {
    this.config = cfg;
    this.sim.set_params(configToParamArray(cfg));
  }

  getConfig(): SimConfig {
    return { ...this.config };
  }

  setCameraReady(ready: boolean): void {
    this.cameraReady = ready;
  }

  private resize(): void {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.worldW = window.innerWidth;
    this.worldH = window.innerHeight;
    this.renderer.resize(this.worldW, this.worldH, dpr);
    this.sim.resize(this.worldW, this.worldH);
  }

  start(): void {
    const loop = (now: number) => {
      const dt = this.lastFrameTime ? (now - this.lastFrameTime) / 1000 : 1 / 60;
      this.lastFrameTime = now;
      this.frame(now, dt);
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  private frame(now: number, dtSeconds: number): void {
    // 1-2. Throttled, non-blocking inference. Reuse last result between runs.
    if (
      this.cameraReady &&
      !this.inferenceInFlight &&
      now - this.lastInferenceAt >= INFERENCE_INTERVAL_MS &&
      this.video.readyState >= 2
    ) {
      this.inferenceInFlight = true;
      this.lastInferenceAt = now;
      this.hand
        .detect(this.video)
        .then((res) => {
          this.lastHand = res;
        })
        .catch((err) => {
          console.error('[hand] inference error:', err);
          this.lastHand = EMPTY_RESULT;
        })
        .finally(() => {
          this.inferenceInFlight = false;
        });
    }

    // 3. Feed landmarks (world px) into the core's smoothed pinch math.
    const hand = this.lastHand;
    if (hand.detected && hand.landmarks.length === 21) {
      const t = hand.landmarks[LM_THUMB_TIP];
      const i = hand.landmarks[LM_INDEX_TIP];
      const w = hand.landmarks[LM_WRIST];
      const m = hand.landmarks[LM_MIDDLE_MCP];
      this.sim.feed_landmarks(
        t.x * this.worldW, t.y * this.worldH,
        i.x * this.worldW, i.y * this.worldH,
        w.x * this.worldW, w.y * this.worldH,
        m.x * this.worldW, m.y * this.worldH,
        true,
      );
    } else {
      this.sim.feed_landmarks(0, 0, 0, 0, 0, 0, 0, 0, false);
    }

    // 4. Advance the simulation. dt scaled so 1.0 == a nominal 60 FPS step.
    const dtScale = Math.min(dtSeconds * 60, 3); // clamp huge gaps (tab switch)
    this.sim.step(dtScale);

    // 5. Render directly from the wasm render buffer (zero-copy view).
    const ptr = this.sim.boids_ptr();
    const len = this.sim.boids_len();
    const boids = new Float32Array(this.wasmMemory.buffer, ptr, len);
    const state: FrameState = {
      boids,
      boidCount: this.sim.boid_count(),
      pinch: this.sim.pinch_amount(),
      midpointX: this.sim.midpoint_x(),
      midpointY: this.sim.midpoint_y(),
      detected: this.sim.detected(),
    };
    this.renderer.draw(state, hand);
  }
}

async function main(): Promise<void> {
  const canvas = document.getElementById('scene') as HTMLCanvasElement | null;
  const video = document.getElementById('cam') as HTMLVideoElement | null;
  if (!canvas || !video) throw new Error('missing #scene / #cam elements');

  // Load the portable core (Wasm).
  setStatus('Loading simulation core…');
  const wasm = await init({ module_or_path: wasmUrl });
  const sim = new WasmSim(window.innerWidth, window.innerHeight, BOID_COUNT);

  // Build the hand stage (model + ORT). Done before the camera so we can report
  // the chosen backend.
  setStatus('Loading hand model…');
  const hand = new OrtWebHand();
  await hand.init();

  const shell = new Shell(canvas, video, sim, wasm.memory, hand);
  shell.start(); // flock roams immediately, even before the camera grants.

  // Expose for live tuning from the dev console (SPEC §9).
  (window as unknown as Record<string, unknown>).pinchBoids = {
    getConfig: () => shell.getConfig(),
    applyConfig: (c: SimConfig) => shell.applyConfig(c),
    defaultConfig,
  };

  // Camera (HTTPS-gated). Failure is non-fatal: the flock keeps roaming.
  try {
    setStatus(`Requesting camera… (inference backend: ${hand.backend})`);
    await startCamera(video);
    shell.setCameraReady(true);
    setStatus('', 'hidden');
  } catch (err) {
    console.error('[camera]', err);
    setStatus(
      `Camera unavailable — flock will roam only.\n${(err as Error).message}`,
      'error',
    );
  }
}

main().catch((err) => {
  console.error(err);
  setStatus(`Failed to start: ${(err as Error).message}`, 'error');
});
