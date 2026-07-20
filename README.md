# Pinch-Boids

**Live:** [boids.garutyunov.com](https://boids.garutyunov.com/)

A browser toy that uses your webcam to detect a hand and control a flock of
[boids](https://en.wikipedia.org/wiki/Boids) by **pinching** thumb and index
finger:

- **Not pinching** → boids roam freely (classic flocking).
- **Starting to pinch** → boids are drawn toward the point between thumb and index.
- **Fully pinched** → boids orbit in a circle around that point.

The pinch amount is continuous, so the three behaviors blend smoothly. The UI
shows the boids and a **silhouette/skeleton of the detected hand only** — the raw
camera image is never displayed.

The web page is the demo; the architecture isolates a **portable simulation
core** (Rust, `no_std`-friendly) from the hard-to-port browser pieces so the same
core can later drive an embedded/holographic display. See
[`SPEC.md`](./SPEC.md) for the full specification.

## Architecture

Four layers with strict interface boundaries (SPEC §3):

```
Platform shell (TS)  — camera, RAF loop, model loading, glue   src/shell.ts
   ├─ Hand stage     — ORT-Web + WebGPU (swappable)            src/hand/
   ├─ Renderer       — Canvas2D (swappable)                    src/render/
   └─ Portable core  — pinch math + boids, no I/O, no_std      core/  (Rust→Wasm)
```

The core never imports a browser API, an ML runtime, or a rendering API. It
takes plain numbers in `(pinch, midpoint, detected)` and returns plain numbers
out (boid positions/velocities). Everything platform-specific lives in the shell
and the two swappable adapters.

## Layout

```
index.html              entry; loads the Wasm core + model
vite.config.ts          base: './'  (relative asset paths — required for previews)
src/
  shell.ts              camera, RAF loop, glue
  config.ts             tunable params (SPEC §9)
  hand/HandStage.ts     hand-stage interface + landmark constants
  hand/OrtWebHand.ts    ORT-Web + WebGPU implementation
  render/Renderer.ts    renderer interface
  render/Canvas2DRenderer.ts
  core-wasm/            generated wasm-pack output (gitignored; built on demand)
core/                   Rust crate (no_std-friendly): pinch math + boids
  src/math.rs           Vec2 + smoothstep/clamp (libm)
  src/params.rs         tunable Params
  src/pinch.rs          scale-invariant pinch amount + EMA smoothing
  src/sim.rs            boids: separation/alignment/cohesion/arrive/orbit + blend
  src/lib.rs            module wiring + wasm-bindgen API + no_std runtime shims
  tests/core.rs         behavioral tests
models/                 handpose ONNX (in-repo, same-origin)
.github/workflows/      deploy.yml, pr-preview.yml, ci.yml
```

## Develop

Prerequisites: Node 20+, Rust stable with the `wasm32-unknown-unknown` target,
and [`wasm-pack`](https://rustwasm.github.io/wasm-pack/).

```bash
rustup target add wasm32-unknown-unknown
cargo install wasm-pack        # or use the official installer script

npm install
npm run build:wasm             # build the Rust core to src/core-wasm/
npm run dev                    # vite dev server (open the printed https/http URL)
```

> The camera requires a secure context. `localhost` counts as secure, so
> `npm run dev` works; deployed builds rely on GitHub Pages' HTTPS.

Production build:

```bash
npm run build                  # tsc --noEmit && vite build  ->  ./dist
npm run preview
```

### Live tuning

All parameters from SPEC §9 are exposed as a config object. In the browser
console:

```js
pinchBoids.applyConfig({ ...pinchBoids.getConfig(), orbitRadius: 120, wSep: 2.0 });
```

## The portable core

The boids + pinch math live in `core/`, written to be `no_std` and
allocation-free in the per-frame loop so the exact same crate can later target an
embedded device.

```bash
# Unit + behavioral tests:
cargo test --manifest-path core/Cargo.toml --features std

# Portability proof (SPEC §11): builds for a non-Wasm target with no
# browser/runtime/render dependencies (no_std; only libm + alloc).
cargo build --manifest-path core/Cargo.toml --no-default-features
```

The browser build is `wasm-pack build core --target web` (default features pull
in `std` + `wasm-bindgen`). On any other target the `wasm` feature is off and the
crate compiles as plain `no_std`, with a minimal bump allocator + panic handler
provided for standalone builds — exactly the seams an embedded target would
replace.

## Deploy (GitHub Pages, branch-based — required for PR previews)

Built files are pushed to a `gh-pages` branch; Pages serves that branch from
root (SPEC §8.2). This enables per-PR previews in subfolders.

- **Production:** `deploy.yml` builds on push to `main` and publishes to
  `gh-pages` root, preserving `pr-preview/` so deploys don't wipe open previews.
- **PR previews:** `pr-preview.yml` deploys each PR to
  `gh-pages/pr-preview/pr-<N>/`, updates on new commits, and removes it on close.

One-time setup after the first successful deploy:

1. Settings → Pages → Build and deployment → **Source: Deploy from a branch** →
   Branch **`gh-pages`** / folder **`/ (root)`**.
2. Settings → Actions → General → Workflow permissions → **Read and write**.

Resulting URLs:

- Production: [`https://boids.garutyunov.com/`](https://boids.garutyunov.com/)
- PR preview: `https://boids.garutyunov.com/pr-preview/pr-<N>/`

Because previews are served from a subfolder, **all asset paths are relative**
(`vite base: './'`, model/Wasm/ORT runtime loaded via relative URLs) so a preview
at `/pr-preview/pr-N/` loads everything with zero 404s.

## Model

`models/handpose_estimation_mediapipe_2023feb.onnx` (OpenCV Zoo, MediaPipe
handpose as plain ONNX). Kept in-repo so it's served same-origin (no CORS).

- Input `input_1`: float32 `[1,224,224,3]` (NHWC, RGB, normalized to `[0,1]`).
- Output `Identity`: float32 `[1,63]` — 21 landmarks (x,y in 224px space, z rel).
- Output `Identity_1`: float32 `[1,1]` — hand presence score (detection gate).

Inference runs via ONNX Runtime Web with `executionProviders: ['webgpu','wasm']`
— WebGPU acceleration with automatic CPU/Wasm fallback.

## License

MIT.
