import { canvasWidth, canvasHeight, font, appendCanvas } from '../retrolib';
var fnt = font.fonts()[0]; // Use codepage 437 by default.
var terminalW;
var terminalH;
var terminalBackground = null;
var changeTimestamp = 0;
var drawTimestamp = 0;
export var cellData = [];
export var emptyCellData = []; // Cache an empty version of terminal so clearing is quick.
var terminalCanvas = null;
var ctx = null;
export function Draw() {
    if (drawTimestamp === changeTimestamp) {
        return;
    }
    if (terminalBackground !== null) {
        ctx.fillStyle = font.rgbaToHex(terminalBackground);
        ctx.fillRect(0, 0, terminalW, terminalH);
    }
    else {
        ctx.clearRect(0, 0, terminalW, terminalH);
    }
    var dx = 0;
    var dy = 0;
    cellData.forEach(function (row, rowIndex) {
        row.forEach(function (cell, colIndex) {
            var data = cellData[rowIndex][colIndex];
            // Draw glyph centred in cell rect (handle variable-width fonts).
            var charWidth = font.textWidth(data.character, fnt);
            var diff = Math.floor((fnt.cwidth - charWidth) / 2);
            if (data.bgColor) {
                ctx.fillStyle = font.rgbaToHex(data.bgColor);
                ctx.fillRect(dx, dy, fnt.cwidth, fnt.cheight);
            }
            font.drawTextCtx(ctx, dx + diff, dy, data.character, data.color, fnt);
            dx += fnt.cwidth;
        });
        dy += fnt.cheight;
        dx = 0;
    });
    drawTimestamp = new Date().getMilliseconds();
    changeTimestamp = drawTimestamp;
}
export function setCell(x, y, character, color, bgColor) {
    try {
        cellData[y][x] = { character: character, x: x, y: y, color: color, bgColor: bgColor };
        changeTimestamp = new Date().getMilliseconds();
    }
    catch (_a) { }
}
export function setCells(startX, startY, text, color, bgColor) {
    text.split('').forEach(function (character, index) {
        var colr = null;
        if (Array.isArray(color)) {
            colr = color[index % color.length];
        }
        else {
            colr = color;
        }
        setCell(startX + index, startY, character, colr, bgColor);
    });
}
export function getCell(x, y) {
    try {
        return cellData[y][x];
    }
    catch (_a) { }
}
export function Initialize() {
    if (!terminalCanvas) {
        terminalCanvas = appendCanvas('terminalCanvas', canvasWidth, canvasHeight, true);
    }
    ctx = terminalCanvas.getContext('2d');
    terminalW = canvasWidth;
    terminalH = canvasHeight;
    terminalCanvas.style.zIndex = '2';
    changeTimestamp = 0;
    var data = [];
    for (var y = 0; y < rowsCount(); y++) {
        var cols = [];
        for (var x = 0; x < columnsCount(); x++) {
            cols.push({ x: x, y: y, color: { r: 255, g: 255, b: 255, a: 255 }, bgColor: null, character: ' ' });
        }
        data.push(cols);
    }
    cellData = data;
    emptyCellData = JSON.parse(JSON.stringify(data));
}
export function clear() {
    cellData = JSON.parse(JSON.stringify(emptyCellData));
}
export function Dispose() {
    document.removeChild(terminalCanvas);
    terminalCanvas = null;
    cellData = [];
    emptyCellData = [];
}
export function setFont(fontData) {
    fnt = fontData;
}
export function getFont() {
    return fnt;
}
export function columnsCount() {
    if (!fnt) {
        return 0;
    }
    return Math.floor(terminalW / fnt.cwidth);
}
export function rowsCount() {
    if (!fnt) {
        return 0;
    }
    return Math.floor(terminalH / fnt.cheight);
}
export function terminalWidth(width) {
    if (width === undefined) {
        return terminalW;
    }
    else {
        terminalW = width;
    }
}
export function terminalHeight(height) {
    if (height === undefined) {
        return terminalH;
    }
    else {
        terminalH = height;
    }
}
//# sourceMappingURL=terminal.js.map