import * as images from './modules/images';
import * as font from './modules/font';
import * as scenes from './modules/scenes';
import * as sfx from './modules/sfx';
import * as music from './modules/music';
import Scene from './modules/scene';
import FontData from './modules/FontData';
import Glyph from './modules/Glyph';
import ImageDefinition from './modules/ImageDefinition';
import SfxDefinition from './modules/SfxDefinition';
import Rect from './modules/Rect';
/**
 * Initialize the retrolib engine.
 * @param options
 */
declare function Initialize(buildCanvas: boolean, width: number, height: number, canvasId: string, autoResize: boolean): void;
/**
 * Bundle modules together into one single interface ready
 * for use in your project.
 */
export { images, font, scenes, sfx, music, // Modules
Scene, FontData, Glyph, ImageDefinition, SfxDefinition, Rect, // Classes/Interfaces
Initialize };
