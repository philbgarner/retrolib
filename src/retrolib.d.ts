export * as images from './modules/images';
export * as font from './modules/font';
export * as scenes from './modules/scenes';
export * as sfx from './modules/sfx';
export * as music from './modules/music';
declare function setCanvasBackground(color: string): void;
/**
 * Initialize the retrolib engine.
 * @param options
 */
declare function initialize(canvasId: string, width: number, height: number, buildCanvas: boolean, autoResize: boolean): void;
export { initialize, setCanvasBackground };
