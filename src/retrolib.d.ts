export * as images from './modules/images';
export * as font from './modules/font';
export * as scenes from './modules/scenes';
export * as sfx from './modules/sfx';
export * as music from './modules/music';
/**
 * Initialize the retrolib engine.
 * @param options
 */
declare function Initialize(buildCanvas: boolean, width: number, height: number, canvasId: string, autoResize: boolean): void;
export { Initialize };
