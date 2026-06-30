// ORT-Web + WebGPU implementation of the HandStage (SPEC §5.1).
//
// Runs the OpenCV Zoo MediaPipe handpose model (plain ONNX) entirely client-side.
// Model I/O (verified against the .onnx graph):
//   input_1   : float32 [1, 224, 224, 3]  NHWC, RGB, normalized to [0,1]
//   Identity  : float32 [1, 63]           21 landmarks (x,y in 224px space, z rel)
//   Identity_1: float32 [1, 1]            hand presence score
//   Identity_2: float32 [1, 1]            handedness (unused)
//   Identity_3: float32 [1, 63]           world landmarks (unused)

import * as ort from 'onnxruntime-web';
import modelUrl from '../../models/handpose_estimation_mediapipe_2023feb.onnx?url';
import type { HandResult, HandStage, Landmark } from './HandStage';

const INPUT_SIZE = 224;
const NUM_LANDMARKS = 21;
const PRESENCE_THRESHOLD = 0.5;

function sigmoid(x: number): number {
  return 1 / (1 + Math.exp(-x));
}

export class OrtWebHand implements HandStage {
  private session: ort.InferenceSession | null = null;
  private _backend = 'uninitialized';

  // Reused offscreen buffers — no per-frame allocation churn.
  private readonly cropCanvas: HTMLCanvasElement;
  private readonly cropCtx: CanvasRenderingContext2D;
  private readonly inputData = new Float32Array(INPUT_SIZE * INPUT_SIZE * 3);

  constructor() {
    this.cropCanvas = document.createElement('canvas');
    this.cropCanvas.width = INPUT_SIZE;
    this.cropCanvas.height = INPUT_SIZE;
    const ctx = this.cropCanvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) throw new Error('2D context unavailable for hand preprocessing');
    this.cropCtx = ctx;
  }

  get backend(): string {
    return this._backend;
  }

  async init(): Promise<void> {
    // Serve the ORT Wasm/JSEP runtime from our own origin (copied into ./ort/ by
    // vite-plugin-static-copy). Absolute URL derived from the document so it
    // resolves correctly even under a /pr-preview/pr-N/ subpath.
    ort.env.wasm.wasmPaths = new URL('ort/', document.baseURI).href;
    // Single-threaded: GitHub Pages can't set the COOP/COEP headers that
    // SharedArrayBuffer threading needs (SPEC §4, §8.1).
    ort.env.wasm.numThreads = 1;

    const opts: ort.InferenceSession.SessionOptions = {
      graphOptimizationLevel: 'all',
    };

    // Prefer WebGPU; fall back to Wasm/CPU with a clear backend label.
    if (typeof navigator !== 'undefined' && navigator.gpu) {
      try {
        this.session = await ort.InferenceSession.create(modelUrl, {
          ...opts,
          executionProviders: ['webgpu'],
        });
        this._backend = 'webgpu';
        return;
      } catch (err) {
        console.warn('[hand] WebGPU init failed, falling back to wasm:', err);
      }
    }

    this.session = await ort.InferenceSession.create(modelUrl, {
      ...opts,
      executionProviders: ['wasm'],
    });
    this._backend = 'wasm';
  }

  async detect(frame: HTMLCanvasElement | HTMLVideoElement): Promise<HandResult> {
    if (!this.session) throw new Error('OrtWebHand.init() not called');

    this.preprocess(frame);
    const input = new ort.Tensor('float32', this.inputData, [1, INPUT_SIZE, INPUT_SIZE, 3]);

    const outputs = await this.session.run({ input_1: input });

    const landmarksT = outputs['Identity'];
    const presenceT = outputs['Identity_1'];
    if (!landmarksT || !presenceT) {
      return { detected: false, landmarks: [] };
    }

    const raw = presenceT.data as Float32Array;
    let presence = raw[0];
    // Robust to either a probability or a raw logit being emitted.
    if (presence < 0 || presence > 1) presence = sigmoid(presence);
    const detected = presence >= PRESENCE_THRESHOLD;

    const lm = landmarksT.data as Float32Array;
    const landmarks: Landmark[] = new Array(NUM_LANDMARKS);
    for (let i = 0; i < NUM_LANDMARKS; i++) {
      landmarks[i] = {
        x: lm[i * 3] / INPUT_SIZE,
        y: lm[i * 3 + 1] / INPUT_SIZE,
        z: lm[i * 3 + 2] / INPUT_SIZE,
      };
    }

    return { detected, landmarks };
  }

  // Center-crop the largest square from the frame, mirror it horizontally (so the
  // silhouette tracks like a mirror), scale to 224×224, and fill the NHWC RGB
  // [0,1] input buffer.
  private preprocess(frame: HTMLCanvasElement | HTMLVideoElement): void {
    const fw = frame instanceof HTMLVideoElement ? frame.videoWidth : frame.width;
    const fh = frame instanceof HTMLVideoElement ? frame.videoHeight : frame.height;
    const side = Math.min(fw, fh) || INPUT_SIZE;
    const sx = (fw - side) / 2;
    const sy = (fh - side) / 2;

    this.cropCtx.save();
    // Mirror: flip X about the canvas center.
    this.cropCtx.translate(INPUT_SIZE, 0);
    this.cropCtx.scale(-1, 1);
    this.cropCtx.drawImage(frame, sx, sy, side, side, 0, 0, INPUT_SIZE, INPUT_SIZE);
    this.cropCtx.restore();

    const { data } = this.cropCtx.getImageData(0, 0, INPUT_SIZE, INPUT_SIZE);
    const out = this.inputData;
    // RGBA (uint8) -> RGB float [0,1], channels-last.
    for (let p = 0, o = 0; p < data.length; p += 4, o += 3) {
      out[o] = data[p] / 255;
      out[o + 1] = data[p + 1] / 255;
      out[o + 2] = data[p + 2] / 255;
    }
  }
}
