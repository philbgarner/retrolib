import { canvasWidth, canvasHeight, FontData, font, appendCanvas } from '../retrolib'
import { ColorRGBA } from './font'

let fnt: FontData = font.fonts()[0] // Use codepage 437 by default.
let terminalW: number
let terminalH: number
let terminalBackground: ColorRGBA = null

let changeTimestamp: number = 0
let drawTimestamp: number = 0

export type TerminalCell = {
    x: number,
    y: number,
    color: ColorRGBA,
    bgColor: ColorRGBA,
    character: string
}

export let cellData: TerminalCell[][] = []
export let emptyCellData: TerminalCell[][] = [] // Cache an empty version of terminal so clearing is quick.

let terminalCanvas: HTMLCanvasElement = null
let ctx: CanvasRenderingContext2D = null

export function setTerminalBackground(color: ColorRGBA) {
    terminalBackground = color
}

export function Draw() {
    if (drawTimestamp === changeTimestamp) {
        return
    }

    if (terminalBackground !== null) {
        ctx.fillStyle = font.rgbaToHex(terminalBackground)
        ctx.fillRect(0, 0, terminalW, terminalH)
    } else {
        ctx.clearRect(0, 0, terminalW, terminalH)
    }
    
    let dx = 0
    let dy = 0

    cellData.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            const data = cellData[rowIndex][colIndex]
            // Draw glyph centred in cell rect (handle variable-width fonts).
            const charWidth = font.textWidth(data.character, fnt)
            const diff = Math.floor((fnt.cwidth - charWidth) / 2)
            if (data.bgColor) {
                ctx.fillStyle = font.rgbaToHex(data.bgColor)
                ctx.fillRect(dx, dy, fnt.cwidth, fnt.cheight)
            }
            font.drawTextCtx(ctx, dx + diff, dy, data.character, data.color, fnt)
            dx += fnt.cwidth
        })
        dy += fnt.cheight
        dx = 0
    })

    drawTimestamp = new Date().getMilliseconds()
    changeTimestamp = drawTimestamp
}

export function setCell(x: number, y: number, character: string, color: ColorRGBA, bgColor: ColorRGBA) {
    try {
        cellData[y][x] = { character: character, x: x, y: y, color: color, bgColor: bgColor }
        changeTimestamp = new Date().getMilliseconds()
    } catch {
        // Ignore no-empty lint rule.
    }
}

export function setCells(startX: number, startY: number, text: string, color: ColorRGBA | ColorRGBA[], bgColor: ColorRGBA) {
    text.split('').forEach((character, index) => {
        let colr: ColorRGBA = null
        if (Array.isArray(color)) {
            colr = color[index % color.length]
        } else {
            colr = color
        }
        setCell(startX + index, startY, character, colr, bgColor)
    })
}

export function setRect(x1: number, x2: number, w: number, h: number, color: ColorRGBA) {
    for (let r = 0; r < h; r++) {
        setCells(x1, x2 + r, ' '.repeat(w), color, color)
    }
}

export function getCell(x: number, y: number): TerminalCell {
    try {
        return cellData[y][x]
    } catch {
        // Ignore no-empty lint rule.
    }
}

export function Initialize() {
    if (!terminalCanvas) {
        terminalCanvas = appendCanvas('terminalCanvas', canvasWidth, canvasHeight, true)
    }
    ctx = terminalCanvas.getContext('2d')
    terminalW = canvasWidth
    terminalH = canvasHeight
    terminalCanvas.style.zIndex = '2'
    changeTimestamp = 0

    const data: TerminalCell[][] = []
    for (let y = 0; y < rowsCount(); y++) {
        const cols: TerminalCell[] = []
        for (let x = 0; x < columnsCount(); x++) {
            cols.push({ x: x, y: y, color: { r: 255, g: 255, b: 255, a: 255 }, bgColor: null, character: ' ' })
        }
        data.push(cols)
    }
    cellData = data
    emptyCellData = JSON.parse(JSON.stringify(data))
}

export function clear() {
    cellData = JSON.parse(JSON.stringify(emptyCellData))
}

export function Dispose() {
    document.removeChild(terminalCanvas)
    terminalCanvas = null
    cellData = []
    emptyCellData = []
}

export function setFont(fontData: FontData) {
    fnt = fontData
}

export function getFont(): FontData {
    return fnt
}

export function columnsCount(): number {
    if (!fnt) {
        return 0
    }
    return Math.floor(terminalW / fnt.cwidth)
}

export function rowsCount(): number {
    if (!fnt) {
        return 0
    }
    return Math.floor(terminalH / fnt.cheight)
}

export function terminalWidth(width: number) {
    if (width === undefined) {
        return terminalW
    } else {
        terminalW = width
    }
}

export function terminalHeight(height: number) {
    if (height === undefined) {
        return terminalH
    } else {
        terminalH = height
    }
}

