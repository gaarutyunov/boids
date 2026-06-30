/// <reference types="vite/client" />

// Asset imports used in this project.
declare module '*.onnx?url' {
  const src: string;
  export default src;
}

// Minimal WebGPU presence check (avoids pulling in @webgpu/types just to feature-detect).
interface Navigator {
  readonly gpu?: unknown;
}
