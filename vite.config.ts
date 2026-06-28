import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// CRITICAL (SPEC §8.3): base must be relative so PR previews served from a
// subfolder (/pr-preview/pr-N/) resolve every asset (JS, Wasm, .onnx, ORT
// runtime) without leading-slash paths that would break under the subpath.
export default defineConfig({
  base: './',
  plugins: [
    // onnxruntime-web ships its Wasm/JSEP runtime as separate files that the ORT
    // loader fetches at runtime. Copy them next to the build output so they are
    // served same-origin (no CORS, no CDN) and reachable via a relative path.
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/onnxruntime-web/dist/*.{wasm,mjs}',
          dest: 'ort',
        },
      ],
    }),
  ],
  build: {
    target: 'es2022',
    assetsInlineLimit: 0, // never inline the model/wasm as data URIs
  },
  // Keep the ORT runtime out of Vite's dep pre-bundling; we load its assets
  // ourselves from ./ort/.
  optimizeDeps: {
    exclude: ['onnxruntime-web'],
  },
});
