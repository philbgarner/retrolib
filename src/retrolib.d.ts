export * as images from './modules/images';
export * as font from './modules/font';
export * as scenes from './modules/scenes';
export * as sfx from './modules/sfx';
export * as music from './modules/music';
declare function SetCanvasBackground(color: string): void;
/**
 * Initialize the retrolib engine.
 * @param options
 */
declare function Initialize(canvasId: string, width: number, height: number, buildCanvas: boolean, autoResize: boolean): void;
export { Initialize, SetCanvasBackground };
