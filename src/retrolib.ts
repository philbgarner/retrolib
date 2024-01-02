import { loadDefaultFonts } from './modules/font'

export * as images from './modules/images'
export * as font from './modules/font'
export * as scenes from './modules/scenes'
export * as sfx from './modules/sfx'
export * as music from './modules/music'
export * as input from './modules/input'
export * as gamepad from './modules/input-gamepad'
export * as keyboard from './modules/input-keyboard'
export * as menus from './modules/menus'
export * as menu from './modules/menu'
export * as aseprite from './modules/aseprite'

export { AnimationFrameFunction, InputHandlerFunction, OnDeactivateFunction, OnActivateFunction } from './modules/scene'
export { MenuOption } from './modules/menu'

import Rect from './modules/rect'
import * as input from './modules/input'
import * as scenes from './modules/scenes'
import Scene from './modules/scene'
import Menu from './modules/menu'
import FontData from './modules/FontData'
import Glyph from './modules/Glyph'
import Aseprite from './modules/aseprite'
import ImageDefinition from './modules/ImageDefinition'
import { OnSelectionFunction } from './modules/menu'
import MusicDefinition from './modules/MusicDefinition'
import SfxDefinition from './modules/SfxDefinition'
import { setContext } from './modules/images'

/**
 * X and Y coordinates.
 */
export type Coordinates = {
    x: number,
    y: number
}

/**
 * Canvas element to draw on.
 */
let gameCanvas: HTMLCanvasElement = null
/**
 * Canvas width (resolution x).
 */
let canvasWidth: number = 0
/**
 * Canvas height (resolution y).
 */
let canvasHeight: number = 0
/**
 * CSS for canvas background.
 */
let canvasBackground: string = 'transparent'

function resize(): void {
    const width = window.innerWidth
    const height = window.innerHeight
    gameCanvas.style.display = 'block'
    gameCanvas.style.position = 'absolute'
    gameCanvas.style.width = width + 'px'
    gameCanvas.style.height = height + 'px'
    gameCanvas.style.top = '0px'
    gameCanvas.style.left = '0px'
    gameCanvas.style.background = canvasBackground
    gameCanvas.style.imageRendering = 'pixelated'
}

function prependCanvas(canvasId: string, width: number, height: number, autoResize: boolean): HTMLCanvasElement {
    const canvas: HTMLCanvasElement = document.createElement('canvas') as HTMLCanvasElement

    canvas.id = canvasId
    document.body.prepend(canvas)
    gameCanvas = canvas
    canvas.width = width
    canvas.height = height

    canvasWidth = width
    canvasHeight = height

    if (autoResize) {
        addEventListener('resize', () => resize())
        resize()
    }

    return canvas
}

/**
 * Set the canvas element's background value.
 * @param color CSS background for canvas element.
 */
function setCanvasBackground(color: string) {
    canvasBackground = color
    if (gameCanvas) {
        gameCanvas.style.background = canvasBackground
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
function initialize(canvasId: string, width: number, height: number, buildCanvas: boolean, autoResize: boolean): void {
    width = width ? width : 256
    height = height ? height : 256
    canvasId = canvasId ? canvasId : 'gamecanvas'
    
    if (gameCanvas === null && buildCanvas) {
        gameCanvas = prependCanvas(canvasId, width, height, autoResize)
    } else if (gameCanvas === null) {
        gameCanvas = document.getElementById(canvasId) as HTMLCanvasElement
    }
    setContext(gameCanvas.getContext('2d'))

    loadDefaultFonts()

    // Register the scene controller's animation frame function with the window.
    // Now any scene objects you add with scenes.addScene() will be called as long
    // as they are active status.
    window.requestAnimationFrame(scenes.handleAnimationFrame)

    input.initialize()
}

export {
    initialize, setCanvasBackground,
    gameCanvas, canvasWidth, canvasHeight,
    Scene, Menu, Rect, FontData, Glyph, ImageDefinition, OnSelectionFunction, MusicDefinition, SfxDefinition, Aseprite
}
