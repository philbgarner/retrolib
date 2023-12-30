import { loadDefaultFonts } from './modules/font';
import * as images_1 from './modules/images';
export { images_1 as images };
import * as font_1 from './modules/font';
export { font_1 as font };
import * as scenes_1 from './modules/scenes';
export { scenes_1 as scenes };
import * as sfx_1 from './modules/sfx';
export { sfx_1 as sfx };
import * as music_1 from './modules/music';
export { music_1 as music };
import * as input_1 from './modules/input';
export { input_1 as input };
import * as gamepad_1 from './modules/input-gamepad';
export { gamepad_1 as gamepad };
import * as keyboard_1 from './modules/input-keyboard';
export { keyboard_1 as keyboard };
import * as menus_1 from './modules/menus';
export { menus_1 as menus };
import * as menu_1 from './modules/menu';
export { menu_1 as menu };
import Rect from './modules/rect';
import * as input from './modules/input';
import * as scenes from './modules/scenes';
import Scene from './modules/scene';
import Menu from './modules/menu';
import FontData from './modules/FontData';
import Glyph from './modules/Glyph';
import ImageDefinition from './modules/ImageDefinition';
import MusicDefinition from './modules/MusicDefinition';
import SfxDefinition from './modules/SfxDefinition';
import { setContext } from './modules/images';
/**
 * Canvas element to draw on.
 */
var gameCanvas = null;
/**
 * Canvas width (resolution x).
 */
var canvasWidth = 0;
/**
 * Canvas height (resolution y).
 */
var canvasHeight = 0;
/**
 * CSS for canvas background.
 */
var canvasBackground = 'transparent';
function resize() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    gameCanvas.style.display = 'block';
    gameCanvas.style.position = 'absolute';
    gameCanvas.style.width = width + 'px';
    gameCanvas.style.height = height + 'px';
    gameCanvas.style.top = '0px';
    gameCanvas.style.left = '0px';
    gameCanvas.style.background = canvasBackground;
    gameCanvas.style.imageRendering = 'pixelated';
}
function prependCanvas(canvasId, width, height, autoResize) {
    var canvas = document.createElement('canvas');
    canvas.id = canvasId;
    document.body.prepend(canvas);
    gameCanvas = canvas;
    canvas.width = width;
    canvas.height = height;
    canvasWidth = width;
    canvasHeight = height;
    if (autoResize) {
        addEventListener('resize', function () { return resize(); });
        resize();
    }
    return canvas;
}
/**
 * Set the canvas element's background value.
 * @param color CSS background for canvas element.
 */
function setCanvasBackground(color) {
    canvasBackground = color;
    if (gameCanvas) {
        gameCanvas.style.background = canvasBackground;
    }
}
/**
 * Initialize the retrolib engine.
 * @param canvasId Id attribute of existing canvas, or id attribute to give to created canvas element.
 * @param width X resolution.
 * @param height Y resolution.
 * @param buildCanvas Whether or not to create a canvas element.
 * @param autoResize Whether or not to autoresize the canvas to the window.
 */
function initialize(canvasId, width, height, buildCanvas, autoResize) {
    width = width ? width : 256;
    height = height ? height : 256;
    canvasId = canvasId ? canvasId : 'gamecanvas';
    if (gameCanvas === null && buildCanvas) {
        gameCanvas = prependCanvas(canvasId, width, height, autoResize);
    }
    else if (gameCanvas === null) {
        gameCanvas = document.getElementById(canvasId);
    }
    setContext(gameCanvas.getContext('2d'));
    loadDefaultFonts();
    // Register the scene controller's animation frame function with the window.
    // Now any scene objects you add with scenes.addScene() will be called as long
    // as they are active status.
    window.requestAnimationFrame(scenes.handleAnimationFrame);
    input.initialize();
}
export { initialize, setCanvasBackground, gameCanvas, canvasWidth, canvasHeight, Scene, Menu, Rect, FontData, Glyph, ImageDefinition, MusicDefinition, SfxDefinition };
//# sourceMappingURL=retrolib.js.map