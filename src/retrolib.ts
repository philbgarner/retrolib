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
    // TODO: calculate the width to height ratio and scale cSize by that before setting values.
    const cSize : number = window.innerHeight > window.innerWidth ? window.innerWidth : window.innerHeight
    gameCanvas.style.display = 'block'
    gameCanvas.style.position = 'absolute'
    gameCanvas.style.width = cSize + 'px'
    gameCanvas.style.height = cSize + 'px'
    gameCanvas.style.top = window.innerHeight / 2 - cSize / 2  + 'px'
    gameCanvas.style.left = window.innerWidth / 2 - cSize / 2 + 'px'
    gameCanvas.style.background = canvasBackground
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
}

export {
    initialize, setCanvasBackground,
    gameCanvas, canvasWidth, canvasHeight
}