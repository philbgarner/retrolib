export * as images from './modules/images';
export * as font from './modules/font';
export * as scenes from './modules/scenes';
export * as sfx from './modules/sfx';
export * as music from './modules/music';
export * as input from './modules/input';
export * as menus from './modules/menus';
import Scene from './modules/scene';
import Menu from './modules/menu';
declare let gameCanvas: HTMLCanvasElement;
declare let canvasWidth: number;
declare let canvasHeight: number;
declare function setCanvasBackground(color: string): void;
/**
 * Initialize the retrolib engine.
 */
declare function initialize(canvasId: string, width: number, height: number, buildCanvas: boolean, autoResize: boolean): void;
export { initialize, setCanvasBackground, gameCanvas, canvasWidth, canvasHeight, Scene, Menu };
