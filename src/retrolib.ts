import { LoadDefaultFonts } from './modules/font'

export * as images from './modules/images'
export * as font from './modules/font'
export * as scenes from './modules/scenes'
export * as sfx from './modules/sfx'
export * as music from './modules/music'

// Game Canvas metadata Globals.
let gameCanvas: HTMLCanvasElement = null
let canvasWidth: number = 0
let canvasHeight: number = 0
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

function setCanvasBackground(color: string) {
    canvasBackground = color
    if (gameCanvas) {
        gameCanvas.style.background = canvasBackground
    }
}

/**
 * Initialize the retrolib engine.
 * @param options
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

    LoadDefaultFonts()
}

export {
    initialize, setCanvasBackground,
    gameCanvas, canvasWidth, canvasHeight
}