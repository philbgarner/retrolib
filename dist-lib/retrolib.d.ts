export * as images from './modules/images';
export * as font from './modules/font';
export * as scenes from './modules/scenes';
export * as sfx from './modules/sfx';
export * as music from './modules/music';
export * as input from './modules/input';
export * as gamepad from './modules/input-gamepad';
export * as keyboard from './modules/input-keyboard';
export * as menus from './modules/menus';
export * as menu from './modules/menu';
export { AnimationFrameFunction, InputHandlerFunction, OnDeactivateFunction, OnActivateFunction } from './modules/scene';
export { MenuOption } from './modules/menu';
import Rect from './modules/rect';
import Scene from './modules/scene';
import Menu from './modules/menu';
import FontData from './modules/FontData';
import Glyph from './modules/Glyph';
import ImageDefinition from './modules/ImageDefinition';
import { OnSelectionFunction } from './modules/menu';
import MusicDefinition from './modules/MusicDefinition';
import SfxDefinition from './modules/SfxDefinition';
/**
 * Canvas element to draw on.
 */
declare let gameCanvas: HTMLCanvasElement;
/**
 * Canvas width (resolution x).
 */
declare let canvasWidth: number;
/**
 * Canvas height (resolution y).
 */
declare let canvasHeight: number;
/**
 * Set the canvas element's background value.
 * @param color CSS background for canvas element.
 */
declare function setCanvasBackground(color: string): void;
/**
 * Initialize the retrolib engine.
 * @param canvasId Id attribute of existing canvas, or id attribute to give to created canvas element.
 * @param width X resolution.
 * @param height Y resolution.
 * @param buildCanvas Whether or not to create a canvas element.
 * @param autoResize Whether or not to autoresize the canvas to the window.
 */
declare function initialize(canvasId: string, width: number, height: number, buildCanvas: boolean, autoResize: boolean): void;
export { initialize, setCanvasBackground, gameCanvas, canvasWidth, canvasHeight, Scene, Menu, Rect, FontData, Glyph, ImageDefinition, OnSelectionFunction, MusicDefinition, SfxDefinition };
