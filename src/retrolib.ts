import * as images from './modules/images'
import * as font from './modules/font'
import * as scenes from './modules/scenes'
import * as sfx from './modules/sfx'
import * as music from './modules/music'

import Scene from './modules/scene'
import FontData from './modules/FontData'
import Glyph from './modules/Glyph'
import ImageDefinition from './modules/ImageDefinition'
import SfxDefinition from './modules/SfxDefinition'
import Rect from './modules/Rect'

export type LibraryOptions = {
    buildCanvas: boolean,
    width: number,
    height: number,
    canvasId: string,
    autoResize: boolean
}

// Game Canvas metadata Globals.
let gameCanvas: HTMLCanvasElement = null
let canvasWidth: number = 0
let canvasHeight: number = 0

function resize(): void {
    let cSize : number = window.innerHeight > window.innerWidth ? window.innerWidth : window.innerHeight
    gameCanvas.style.display = 'block'
    gameCanvas.style.position = 'absolute'
    gameCanvas.style.width = cSize + 'px'
    gameCanvas.style.height = cSize + 'px'
    gameCanvas.style.top = window.innerHeight / 2 - cSize / 2  + 'px'
    gameCanvas.style.left = window.innerWidth / 2 - cSize / 2 + 'px'
    gameCanvas.style.background = 'transparent'
}

function prependCanvas(canvasId: string, width: number, height: number, autoResize: boolean): HTMLCanvasElement {
    let canvas: HTMLCanvasElement = document.createElement('canvas') as HTMLCanvasElement

    canvas.id = canvasId
    document.body.prepend(canvas)
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

function Initialize(options: LibraryOptions) {
    options.width = options.width ? options.width : 256
    options.height = options.height ? options.height : 256
    options.canvasId = options.canvasId ? options.canvasId : 'gamecanvas'
    
    if (gameCanvas === null && options.buildCanvas) {
        gameCanvas = prependCanvas(options.canvasId, options.width, options.height, options.autoResize)
    } else if (gameCanvas === null) {
        gameCanvas = document.getElementById(options.canvasId) as HTMLCanvasElement
    }
}

/**
 * Bundle modules together into one single interface ready
 * for use in your project.
 */

export {
    images, font, scenes, sfx, music, // Modules
    Scene, FontData, Glyph, ImageDefinition, SfxDefinition, Rect, // Classes/Interfaces
    Initialize
}