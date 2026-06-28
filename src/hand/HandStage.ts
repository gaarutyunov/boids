// Hand stage interface (SPEC §5.1). The only platform-specific detail the rest
// of the app sees is this contract: a frame in, normalized landmarks out. Swap
// the implementation per platform without touching the core or renderer.

export interface Landmark {
  x: number; // image-normalized [0,1]
  y: number; // image-normalized [0,1]
  z: number; // relative depth
}

export interface HandResult {
  detected: boolean;
  // 21 landmarks, image-normalized coords in [0,1]; z is relative depth.
  landmarks: Landmark[];
}

export interface HandStage {
  init(): Promise<void>;
  detect(frame: HTMLCanvasElement | HTMLVideoElement): Promise<HandResult>;
  /** Which ORT execution provider ended up active (for status display). */
  readonly backend: string;
}

// MediaPipe hand landmark indices that matter (SPEC §5.1).
export const LM_WRIST = 0;
export const LM_THUMB_TIP = 4;
export const LM_INDEX_TIP = 8;
export const LM_MIDDLE_MCP = 9;

// Standard 21-point hand skeleton connections (palm + five fingers), used by the
// renderer to draw the silhouette.
export const HAND_CONNECTIONS: ReadonlyArray<readonly [number, number]> = [
  // Thumb
  [0, 1], [1, 2], [2, 3], [3, 4],
  // Index
  [0, 5], [5, 6], [6, 7], [7, 8],
  // Middle
  [5, 9], [9, 10], [10, 11], [11, 12],
  // Ring
  [9, 13], [13, 14], [14, 15], [15, 16],
  // Pinky
  [13, 17], [17, 18], [18, 19], [19, 20],
  // Palm base
  [0, 17],
];

export const EMPTY_RESULT: HandResult = {
  detected: false,
  landmarks: [],
};
