/**
 * Animation header section.
 */
export interface Animation {
    name: string;
    frames: {
        [key: string]: FrameValue;
    };
    meta: Meta;
}
/**
 * Animation frame value object.
 */
export interface FrameValue {
    frame: SpriteSourceSizeClass;
    rotated: boolean;
    trimmed: boolean;
    spriteSourceSize: SpriteSourceSizeClass;
    sourceSize: Size;
    duration: number;
}
/**
 * Animation source rect.
 */
export interface SpriteSourceSizeClass {
    x: number;
    y: number;
    w: number;
    h: number;
}
/**
 * Size object.
 */
export interface Size {
    w: number;
    h: number;
}
/**
 * Sprite metadata.
 */
export interface Meta {
    app: string;
    version: string;
    image: string;
    format: string;
    size: Size;
    scale: string;
    frameTags: FrameTag[];
    layers: Layer[];
    slices: any[];
}
/**
 * Sprite frame tags.
 */
export interface FrameTag {
    name: string;
    from: number;
    to: number;
    direction: string;
}
/**
 * Sprite layers.
 */
export interface Layer {
    name: string;
    opacity: number;
    blendMode: string;
}
export interface SpriteEvent {
    (sprite: Aseprite): void;
}
export interface Listener {
    name: string;
    frameNumber: number;
    fnEvent: SpriteEvent;
}
/**
 * Sprite controller, a wrapper for Aseprite JSON export format.
 */
declare class Aseprite {
    name: string;
    animation: Animation;
    frames: {
        [key: string]: FrameValue;
    };
    meta: Meta;
    frameNumber: number;
    elapsed: number;
    frameElapsed: number;
    direction: number;
    listeners: Listener[];
    constructor(name: string, animation: Animation);
    CallListener(name: string, frameNumber: number): void;
    GetListener(name: string, frameNumber: number): Listener;
    AddListener(name: string, frameNumber: number, callback: SpriteEvent): void;
    HasListener(name: string, frameNumber: number): boolean;
    ClearListener(name: string, frameNumber: number): void;
    Play(): void;
    PlayFromStart(): void;
    Pause(): void;
    FrameId(frameNumber: number): string;
    Frame(frameNumber: number): FrameValue;
    CurrentFrameId(): string;
    CurrentFrame(): FrameValue;
    FrameMetaTag(frameNumber: number): FrameTag;
    MetaTag(frameTag: string): FrameTag[];
    Update(delta: number): void;
    Draw(x: number, y: number): void;
}
export default Aseprite;
