# Pinch-Boids — Development Specification

**Version:** 1.0
**Status:** Ready for development
**Target:** Browser demo (GitHub Pages), architected for later embedded port

-----

## 1. Project goal

A browser toy that uses the webcam to detect a hand and control a flock of boids by **pinching** the thumb and index finger:

- **Not pinching** → boids roam freely (classic flocking).
- **Starting to pinch** → boids are drawn toward the point between thumb and index fingertip.
- **Fully pinched** → boids orbit in a circle around that point.

The pinch amount is **continuous**, so the three behaviors blend smoothly rather than switching discretely.

The UI shows the boids and a **silhouette/skeleton of the detected hand only** — never the raw camera image.

The web page is the **demo**, not the final product. The eventual goal is an embedded build (camera + microcontroller/SBC driving a holographic or LED display). Therefore the design must isolate the hard-to-port parts from a portable simulation core.

-----

## 2. Scope

### In scope (v1)

- Single-hand detection.
- Pinch signal (thumb tip ↔ index tip): continuous pinch amount + midpoint target.
- Boids simulation with three blended behaviors.
- Canvas2D rendering of boids + hand silhouette.
- Runs entirely client-side, hosted on GitHub Pages.
- WebGPU inference with a CPU/Wasm fallback.

### Out of scope (v1)

- Multi-hand support.
- Gesture classification beyond pinch.
- 3D rendering.
- Vendor-specific NPU acceleration.
- The actual embedded build (only architectural readiness for it).

-----

## 3. Architecture

Four layers with **strict interface boundaries**. The portability strategy depends on these boundaries being respected.

```
┌─────────────────────────────────────────────────────────┐
│  Platform shell (JS/TS)                                   │
│  camera, canvas, animation loop, model loading            │
└───────────────┬─────────────────────────┬────────────────┘
                │                          │
        ┌───────▼────────┐         ┌───────▼──────────┐
        │  Hand stage     │         │  Renderer        │
        │  (swappable)    │         │  (swappable)     │
        │  ORT-Web+WebGPU │         │  Canvas2D        │
        └───────┬────────┘         └───────▲──────────┘
                │ HandResult               │ frame state
        ┌───────▼──────────────────────────┴──────────┐
        │  PORTABLE CORE (no_std Rust → Wasm)          │
        │  pinch math + boids simulation               │
        │  no I/O, no rendering, no allocation in loop  │
        └──────────────────────────────────────────────┘
```

**Rule:** the portable core never imports a browser API, an ML runtime, or a rendering API. It receives plain numbers in and returns plain numbers out. Everything platform-specific lives in the shell and the two swappable adapters.

-----

## 4. Locked technology decisions

|Concern               |Decision                                                                           |Rationale                                                                          |
|----------------------|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
|Hand model            |**MediaPipe `hand_landmark` as plain ONNX**                                        |Only small, proven hand-landmark model with a clean, vendor-neutral ONNX export.   |
|Model source          |**OpenCV Zoo** `handpose_estimation_mediapipe_2023feb.onnx` (float + int8 variants)|Open, vendor-neutral, includes quantized variants for later.                       |
|Browser inference     |**ONNX Runtime Web**, `executionProviders: ['webgpu','wasm']`                      |Vendor-neutral; WebGPU accel with automatic CPU fallback.                          |
|NOT used              |transformers.js                                                                    |No hand-landmark/keypoint pipeline exists.                                         |
|Portable core language|**Rust, `no_std`-compatible**, compiled to Wasm                                    |Same crate later targets embedded.                                                 |
|Boid count (v1)       |**~300–500**                                                                       |Canvas2D handles this comfortably; keeps it simple.                                |
|Rendering             |**Canvas2D**                                                                       |Simplest; sufficient at this boid count. Upgrade path: WebGPU compute.             |
|Hosting               |**GitHub Pages**, model in-repo (same-origin)                                      |No CORS, no COOP/COEP headers needed.                                              |
|Threading             |**Single-threaded Wasm**                                                           |Avoids `SharedArrayBuffer` / cross-origin-isolation headers GitHub Pages can’t set.|

-----

## 5. Component specifications

### 5.1 Hand stage (swappable adapter)

**Responsibility:** turn a camera frame into hand landmarks, behind a fixed interface.

**Interface (TypeScript):**

```ts
interface HandResult {
  detected: boolean;
  // 21 landmarks, image-normalized coords in [0,1]; z is relative depth
  landmarks: Array<{ x: number; y: number; z: number }>;
}

interface HandStage {
  init(): Promise<void>;
  detect(frame: VideoFrame | HTMLCanvasElement): Promise<HandResult>;
}
```

**Implementation (v1):**

- Capture via `getUserMedia({ video: { facingMode: 'user' } })` into a `<video>`.
- Preprocess each frame to the model input: **224×224×3** (OpenCV Zoo handpose model), normalized per the model card; mirror horizontally so the silhouette tracks like a mirror.
- Run inference via ORT-Web; parse output tensor `[1,63]` → 21 × (x,y,z).
- Landmark indices that matter: **thumb tip = 4**, **index tip = 8**, **wrist = 0**, **middle-finger MCP = 9** (used for scale normalization).
- If the model returns a presence/confidence score below threshold, set `detected: false`.

**Notes:**

- The OpenCV Zoo handpose model assumes a roughly cropped hand. For v1, run it on the full (square-cropped, centered) frame and accept reduced range; if tracking is unreliable, add the palm detector (`palm_detection_mediapipe_2023feb.onnx`) as a pre-stage and crop to the detected palm box. Treat this as an optional hardening step, not v1-blocking.
- Target ≥ 20 FPS for inference; if WebGPU is unavailable, accept the Wasm/CPU path.

### 5.2 Pinch math (in the portable core)

**Inputs:** the two relevant landmarks plus a scale reference, passed as plain floats.

**Computation:**

```
thumb  = landmark[4].xy
index  = landmark[8].xy
scale  = distance(landmark[0].xy, landmark[9].xy)   // wrist → middle MCP
raw_gap = distance(thumb, index) / scale            // scale-invariant
midpoint = (thumb + index) / 2
```

**Pinch amount** `p ∈ [0,1]`, where `p=0` is open and `p=1` is fully pinched:

```
p = clamp( (GAP_OPEN - raw_gap) / (GAP_OPEN - GAP_CLOSED), 0, 1 )
```

`GAP_OPEN` and `GAP_CLOSED` are tunable thresholds (see §9).

**Smoothing (mandatory — landmark output is noisy):**

- Exponential moving average on `p` and on `midpoint` each frame:
  `value = value + SMOOTH * (new - value)`.
- Use `smoothstep` when mapping `p` to behavior weights (§5.3) to soften transitions.

### 5.3 Boids simulation (the portable core)

**Per-boid state:** `position`, `velocity`, `acceleration` (2D). Fixed-size arrays, no heap allocation in the update loop (so it stays `no_std`/embedded-friendly).

**Per-frame update:**

1. For each boid, accumulate steering forces (below).
1. `velocity += acceleration`, clamp to `MAX_SPEED`.
1. `position += velocity`.
1. Reset `acceleration`.
1. Wrap or bounce at world bounds (choose wrap for v1).

**Steering primitives** (each force clamped to `MAX_FORCE`):

- **Separation** — average of `(self - neighbor)` over neighbors within `SEP_RADIUS`, weighted by `1/distance`; steer toward it.
- **Alignment** — steer toward average `velocity` of neighbors within `PERCEPTION`.
- **Cohesion** — seek the centroid of neighbors within `PERCEPTION`.
- **Arrive(target)** — seek `target`, but decelerate inside `ARRIVE_RADIUS`: speed scales with `distance/ARRIVE_RADIUS`.
- **Orbit(center)** — `radial = pos - center`, `d = |radial|`;
  - radial spring: `F_radial = K_SPRING * (d - ORBIT_RADIUS) * (-normalize(radial))`
  - tangential: `tangent = normalize((-radial.y, radial.x)) * ORBIT_SPEED`
  - `desired = tangent + F_radial`; steer toward it.

**Behavior blending by pinch amount `p`:**

|`p` range  |Behavior      |Forces active                                                                 |
|-----------|--------------|------------------------------------------------------------------------------|
|`0.0 – 0.5`|roam → follow |separation (constant) + fading {cohesion, alignment} + rising arrive(midpoint)|
|`0.5 – 1.0`|follow → orbit|separation (constant) + crossfade arrive(midpoint) → orbit(midpoint)          |

- Let `t1 = smoothstep(0, 0.5, p)` and `t2 = smoothstep(0.5, 1.0, p)`.
- `flock = (1 - t1) * (W_COH*cohesion + W_ALI*alignment)`
- `follow = t1 * (1 - t2) * arrive(midpoint)`
- `orbit_f = t2 * orbit(midpoint)`
- `acceleration = W_SEP*separation + flock + follow + orbit_f`
- **Separation is always on** so boids never collapse to a single point.
- When `detected == false`, force `p = 0` (pure roam) and let the midpoint decay.

**Neighbor search:** naïve O(n²) is acceptable at 300–500 boids. If boid count grows, add a uniform spatial grid (fixed-size, allocation-free) — also embedded-friendly.

**Core interface (Rust → Wasm, conceptual):**

```rust
// no_std core
pub struct Sim { /* boids, params */ }
impl Sim {
    pub fn new(width: f32, height: f32, count: usize) -> Self;
    pub fn update(&mut self, dt: f32, pinch: f32, mx: f32, my: f32, detected: bool);
    pub fn boids(&self) -> &[Boid];   // read-only view for the renderer
}
```

### 5.4 Renderer (swappable adapter)

**Responsibility:** draw the frame from core state + hand landmarks. No simulation logic here.

**Boids:** draw each as a small triangle oriented along its velocity. Optional faint trails via alpha-fade of the previous frame.

**Hand silhouette (v1 approach — landmark-derived, privacy-preserving):**

- Draw the 21 landmarks connected by the standard hand skeleton (palm + five fingers) as strokes.
- Optionally fill the **convex hull** of the 21 points for a solid silhouette feel, or draw rounded “capsule” strokes along each finger bone for a more hand-like outline.
- **Never** draw the camera image. The video element stays offscreen/hidden.
- Mirror to match user expectation.

**Alternative silhouette (deferred):** a segmentation mask gives a true outline but needs a second model — out of scope for v1.

### 5.5 Platform shell

- Owns the `requestAnimationFrame` loop.
- Each frame: get camera frame → `HandStage.detect()` → feed landmarks to core’s pinch math → `Sim.update()` → `Renderer.draw()`.
- Decouples inference rate from render rate if needed (inference may run slower than 60 FPS; reuse last `HandResult` between inferences).
- Handles model loading, WebGPU capability check, and graceful fallback messaging.

-----

## 6. Control loop (per animation frame)

```
1. frame ← camera
2. if inference_due: handResult ← HandStage.detect(frame)   // may be async/throttled
3. (p, midpoint, detected) ← pinchMath(handResult)           // in core, smoothed
4. Sim.update(dt, p, midpoint.x, midpoint.y, detected)        // in core
5. Renderer.draw(Sim.boids(), handResult.landmarks)
6. requestAnimationFrame → 1
```

-----

## 7. Repository structure

```
pinch-boids/
├─ .github/
│  └─ workflows/
│     ├─ deploy.yml         # production deploy → gh-pages branch root
│     └─ pr-preview.yml     # PR preview → gh-pages/pr-preview/pr-N/
├─ index.html              # entry; loads Wasm + model
├─ vite.config.ts          # MUST set base: './' (relative paths)
├─ src/
│  ├─ shell.ts             # camera, RAF loop, glue
│  ├─ hand/
│  │  ├─ HandStage.ts      # interface
│  │  └─ OrtWebHand.ts     # ORT-Web + WebGPU implementation
│  ├─ render/
│  │  ├─ Renderer.ts       # interface
│  │  └─ Canvas2DRenderer.ts
│  └─ core-wasm/           # JS bindings to the Rust core
├─ core/                   # Rust crate (no_std-friendly)
│  ├─ Cargo.toml
│  └─ src/lib.rs           # pinch math + boids; wasm-bindgen exports
├─ models/
│  └─ handpose_*.onnx      # in-repo, same-origin (~4MB float / smaller int8)
├─ public/                 # static assets
└─ README.md
```

**Build:** `wasm-pack` (or `trunk`) builds `core/` to Wasm; a bundler (Vite) builds the TS shell; output deployed to the `gh-pages` branch / Pages.

-----

## 8. Build & deployment

### 8.1 General

- **Static site**, no server. GitHub Pages serves `.wasm` and `.onnx` with correct MIME types.
- **Model in-repo** (same-origin) → no CORS. Float ONNX ~4 MB (well under the 100 MB file limit); use the int8 variant to shrink if desired.
- **No COOP/COEP needed** because we use single-threaded Wasm + WebGPU (no `SharedArrayBuffer`). If multi-threading is ever required, either add the `coi-serviceworker` shim or move to a host that sets the headers.
- **HTTPS** is provided by Pages (required for `getUserMedia`).
- Provide a non-WebGPU fallback path (ORT-Web `wasm` EP) and a clear message if the camera is denied.

### 8.2 Deployment model: branch-based Pages (required for PR previews)

**Decision (locked):** Use the **classic “deploy from a branch” model** — built files are pushed to a `gh-pages` branch, and GitHub Pages is configured to serve that branch from root.

**Why this and not the newer `actions/deploy-pages` artifact flow:** the artifact/`deploy-pages` flow publishes a *single* environment and cannot host per-PR previews. PR previews work by writing each PR’s build into a **subfolder of the `gh-pages` branch** (`pr-preview/pr-<N>/`) alongside the production build. Therefore the production deploy and the preview deploy must both target the same branch.

**Pages settings:** Repository → Settings → Pages → Build and deployment → **Source: Deploy from a branch** → Branch: **`gh-pages`** / folder: **`/ (root)`**.

**Resulting URLs:**

- Production: `https://<user>.github.io/<repo>/`
- PR preview: `https://<user>.github.io/<repo>/pr-preview/pr-<N>/`

### 8.3 CRITICAL: relative asset paths

Because previews are served from a **subfolder**, every asset reference (JS, Wasm, the `.onnx` model, CSS) **must be relative**, not absolute. An absolute path like `/assets/model.onnx` resolves to the domain root and breaks every preview.

- In `vite.config.ts` set **`base: './'`** so the bundler emits relative URLs.
- Load the model and Wasm with relative URLs (e.g., `new URL('../models/handpose.onnx', import.meta.url)`), never a leading-slash path.
- Acceptance check: a PR preview at `/pr-preview/pr-N/` must load the model and Wasm with zero 404s.

### 8.4 Production deploy workflow (`.github/workflows/deploy.yml`)

Builds on push to `main` and publishes to the `gh-pages` branch root.

```yaml
name: Deploy
on:
  push:
    branches: [main]
permissions:
  contents: write          # push to gh-pages branch
concurrency:
  group: pages-deploy
  cancel-in-progress: true
jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - uses: dtolnay/rust-toolchain@stable
        with: { targets: wasm32-unknown-unknown }
      - name: Install wasm-pack
        run: curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh
      - name: Build Wasm core
        run: wasm-pack build core --target web --out-dir ../src/core-wasm
      - name: Install & build site
        run: |
          npm ci
          npm run build       # vite build → ./dist  (base: './')
      - name: Deploy to gh-pages (root)
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          branch: gh-pages
          folder: dist
          clean: true
          # Preserve preview subfolders so deploys don't wipe open PR previews:
          clean-exclude: |
            pr-preview/
```

### 8.5 PR preview workflow (`.github/workflows/pr-preview.yml`)

Deploys each PR to `gh-pages/pr-preview/pr-<N>/`, updates on new commits, and removes the preview when the PR closes. Uses `rossjrw/pr-preview-action` (which wraps the same Pages-deploy action and posts a sticky comment with the preview link).

```yaml
name: PR Preview
on:
  pull_request:
    types: [opened, reopened, synchronize, closed]
permissions:
  contents: write          # write preview into gh-pages branch
  pull-requests: write     # post/update the preview-link comment
concurrency:
  group: pr-preview-${{ github.event.number }}
  cancel-in-progress: true
jobs:
  preview:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - uses: dtolnay/rust-toolchain@stable
        with: { targets: wasm32-unknown-unknown }
      - name: Install wasm-pack
        run: curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh

      # Build only when the PR is open (not needed on close → cleanup only)
      - name: Build
        if: github.event.action != 'closed'
        run: |
          wasm-pack build core --target web --out-dir ../src/core-wasm
          npm ci
          npm run build

      - name: Deploy / update / remove preview
        uses: rossjrw/pr-preview-action@v1
        with:
          source-dir: dist
          preview-branch: gh-pages
          umbrella-dir: pr-preview
          action: auto        # deploy on open/sync, remove on close
```

### 8.6 Notes & constraints

- **Workflow ordering:** the production `deploy.yml` uses `clean-exclude: pr-preview/` so a push to `main` does **not** delete in-flight PR previews. Conversely, `pr-preview-action` only touches its own `pr-preview/pr-<N>/` subfolder.
- **First run:** the `gh-pages` branch is created by the first successful deploy. Set the Pages source to `gh-pages` after that first run (or pre-create an empty `gh-pages` branch).
- **Permissions:** Settings → Actions → General → Workflow permissions must allow **read and write** (the workflows also request it explicitly).
- **Fork PRs:** the standard `pull_request` trigger gives fork PRs a read-only token, so previews for forked PRs won’t have write access to `gh-pages`. For a solo/team repo where PRs come from branches this is fine. If external-fork previews are needed later, that requires the `pull_request_target` pattern and careful handling of untrusted code — out of scope for v1.
- **Concurrency:** both workflows use concurrency groups so rapid pushes don’t race on the branch.

-----

## 9. Tunable parameters (starting values)

|Parameter              |Start|Notes                     |
|-----------------------|-----|--------------------------|
|`MAX_SPEED`            |3.0  |px/frame                  |
|`MAX_FORCE`            |0.05 |steering clamp            |
|`PERCEPTION`           |50   |flock neighbor radius (px)|
|`SEP_RADIUS`           |25   |px                        |
|`W_SEP`                |1.5  |separation weight         |
|`W_ALI`                |1.0  |alignment weight          |
|`W_COH`                |1.0  |cohesion weight           |
|`ARRIVE_RADIUS`        |120  |px, decel zone            |
|`ORBIT_RADIUS`         |80   |px                        |
|`ORBIT_SPEED`          |2.5  |tangential speed          |
|`K_SPRING`             |0.05 |radial spring stiffness   |
|`GAP_OPEN`             |1.2  |normalized gap = pinch p→0|
|`GAP_CLOSED`           |0.25 |normalized gap = pinch p→1|
|`SMOOTH` (p & midpoint)|0.3  |EMA factor                |
|`BOID_COUNT`           |400  |v1                        |

All exposed as a config object for live tuning during development.

-----

## 10. Milestones

**M0 — Skeleton.** Repo, build pipeline (Rust→Wasm + TS bundle), blank Canvas2D, `vite base: './'`, both GitHub Actions workflows wired up, `gh-pages` branch created, production deploy live, and a test PR confirms a working preview URL.

**M1 — Boids core.** Implement separation/alignment/cohesion in Rust; render roaming flock. No camera yet. *Done when:* a believable free-roaming flock renders at 60 FPS.

**M2 — Hand stage.** Camera + ORT-Web + WebGPU; log thumb/index landmarks; draw the hand skeleton silhouette. *Done when:* silhouette tracks the hand smoothly, no camera image shown.

**M3 — Pinch signal.** Compute scale-invariant `p` + midpoint with smoothing; on-screen debug readout. *Done when:* `p` moves cleanly 0→1 as fingers close, stable when still.

**M4 — Blended control.** Wire `p`/midpoint into the core; implement arrive + orbit + blending. *Done when:* open = roam, half-pinch = follow midpoint, full pinch = orbit, with smooth transitions.

**M5 — Polish & ship.** Fallbacks, tuning, trails, README, public Pages deploy.

-----

## 11. Acceptance criteria (definition of done, v1)

- Loads and runs on a WebGPU-capable desktop browser from the public GitHub Pages URL.
- Falls back to CPU/Wasm inference when WebGPU is absent (slower but functional).
- With no hand present, boids roam as a coherent flock.
- Bringing thumb and index together makes boids converge on the midpoint; fully closing makes them orbit it; releasing returns them to roaming — all transitions smooth, no visible snapping.
- The hand is shown only as a silhouette/skeleton; the camera image is never displayed.
- Boids and silhouette render at ≥ 30 FPS with 400 boids on a typical laptop.
- The Rust core compiles with no browser/runtime/render dependencies (verifiable by building it for a non-Wasm target).
- Opening a PR publishes a working preview at `/pr-preview/pr-N/` (model + Wasm load with no 404s); closing the PR removes it; merging to `main` updates production without deleting other open previews.

-----

## 12. Risks & fallbacks

|Risk                                                         |Mitigation                                                                                                 |
|-------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|
|OpenCV Zoo handpose model expects a cropped hand → poor range|Add palm-detector pre-crop (M2 hardening) or constrain usage to a centered hand.                           |
|Landmark jitter causes boid jitter                           |Mandatory EMA smoothing on `p` and midpoint; smoothstep on weights.                                        |
|ORT-Web is a heavy dependency                                |Acceptable for the demo; the clean interface lets a lighter detector replace it for embedded.              |
|WebGPU unavailable on some browsers                          |CPU/Wasm fallback; model is small enough to stay usable.                                                   |
|Pinch gesture hard to detect at full closure                 |Pinch amount is derived from continuous distance, not from a defect that vanishes — robust at full closure.|

-----

## 13. Portability notes (the embedded future — informational, not v1 work)

The whole design exists to make this possible later:

- The **boids + pinch math core is already portable** — `no_std` Rust, no allocation in the loop, no I/O. It recompiles for an embedded target and drives a holographic/LED display through a render trait instead of Canvas2D.
- The **hand stage is the only thing that must be re-implemented** per platform, behind the `HandStage` interface. Options for embedded:
  - Run the same ONNX/quantized model on an SBC/NPU board’s own runtime.
  - Re-implement the small model in **Burn** (Rust, ONNX import, `no_std`-capable) for one-language reuse.
  - Drop ML entirely and use a **classical skin-color + convexity-defect** pinch detector — tiny enough for a bare microcontroller.
- Because the core consumes only `(pinch, midpoint, detected)`, any of those detectors is a drop-in. **No simulation code changes when the hardware changes.**
