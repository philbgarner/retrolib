/*import * as images from './modules/images'
import * as font from './modules/font'
import * as scenes from './modules/scenes'
import * as sfx from './modules/sfx'
import * as music from './modules/music'

import Scene from './modules/scene'
import FontData from './modules/FontData'
import Glyph from './modules/Glyph'
import ImageDefinition from './modules/ImageDefinition'
import SfxDefinition from './modules/SfxDefinition'
import Rect from './modules/Rect'*/

export type LibraryOptions = {
    buildCanvas: boolean,
    width: number,
    height: number,
    canvasId: string,
    autoResize: boolean
}

// Game Canvas metadata Globals.
export let gameCanvas: HTMLCanvasElement
export let canvasWidth: number
export let canvasHeight: number

export function resize(): void

export function prependCanvas(canvasId: string, width: number, height: number, autoResize: boolean): HTMLCanvasElement

/**
 * Initialize the retrolib engine.
 * @param options
 */
export function Initialize(options: LibraryOptions): void