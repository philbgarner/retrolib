var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { randInt } from "./random";
export var width;
export var height;
export var mapCells = [];
export var exploredCells = [];
export var exploredCellCache;
export var generateCellFunction = function (cellTypes, x, y) {
    var cellType = cellTypes[randInt(0, cellTypes.length)];
    return { name: cellType.name, group: cellType.group, colors: cellType.colors, bgColor: cellType.bgColor, characters: cellType.characters, blockMovement: cellType.blockMovement, blockVision: cellType.blockVision };
};
export function GenerateCell(cellTypes, x, y) {
    return generateCellFunction(cellTypes, x, y);
}
export var selectCellTypes = function (x, y) {
    return [
        { name: 'Block Wall', group: 'walls', colors: [{ r: 255, g: 255, b: 255, a: 255 }, { r: 200, g: 200, b: 200, a: 255 }], bgColor: null, characters: ['#'], blockVision: true, blockMovement: true },
        { name: "Stones", group: 'floors', colors: [{ r: 128, g: 128, b: 128, a: 255 }, { r: 200, g: 200, b: 200, a: 255 }], bgColor: null, characters: [',', '.'], blockMovement: false, blockVision: false },
        { name: "Grass", group: 'floors', colors: [{ r: 64, g: 128, b: 64, a: 255 }, { r: 32, g: 72, b: 32, a: 255 }], bgColor: null, characters: [',', '.'], blockMovement: false, blockVision: false }
    ];
};
export function clearMap() {
    mapCells = [];
    exploredCells = [];
}
export function SelectCellTypes(x, y, selectFn) {
    if (selectFn) {
        return selectFn(x, y);
    }
    return selectCellTypes(x, y);
}
export function Initialize(mapWidth, mapHeight, selectCellTypesFunction) {
    mapCells = [];
    exploredCells = [];
    width = mapWidth;
    height = mapHeight;
    for (var y = 0; y < height; y++) {
        var cols = [];
        var expl = [];
        for (var x = 0; x < width; x++) {
            var cell = {
                cellType: GenerateCell(SelectCellTypes(x, y, selectCellTypesFunction), x, y),
                x: x, y: y,
                light: 0
            };
            if (cell.cellType.characters.length > 1) {
                cell.cellType.characters = cell.cellType.characters.slice(randInt(0, cell.cellType.characters.length));
            }
            if (cell.cellType.colors.length > 1) {
                cell.cellType.colors = cell.cellType.colors.slice(randInt(0, cell.cellType.colors.length));
            }
            cols.push(cell);
            expl.push(false);
        }
        mapCells.push(cols);
        exploredCells.push(expl);
    }
}
export function getCells(filterFn) {
    var cells = [];
    mapCells.forEach(function (row, rowIndex) {
        row.forEach(function (cell, colIndex) {
            if (filterFn(cell.cellType)) {
                cells.push(cell);
            }
        });
    });
    return cells;
}
export function getCell(x, y) {
    try {
        if (mapCells[y][x] === undefined) {
            return null;
        }
        else {
            return mapCells[y][x];
        }
    }
    catch (_a) { }
    return null;
}
export function setCell(mapCell) {
    try {
        mapCells[mapCell.y][mapCell.x] = mapCell;
    }
    catch (_a) { }
}
export function setExplored(x, y) {
    try {
        exploredCells[y][x] = true;
    }
    catch (_a) { }
}
export function isExplored(x, y) {
    try {
        return exploredCells[y][x];
    }
    catch (_a) { }
}
export function getExploredCells() {
    exploredCellCache = [];
    exploredCells.forEach(function (row, index) {
        row.forEach(function (cell, column) {
            if (isExplored(column, index)) {
                exploredCellCache.push(getCell(column, index));
            }
        });
    });
    return exploredCellCache;
}
export function fov(viewRadius, x, y) {
    x = x + (viewRadius % 2 === 1 ? 0 : 1);
    y = y + (viewRadius % 2 === 1 ? 0 : 1);
    function doFov(x, y, playerX, playerY) {
        var checkedCells = [];
        var vx = playerX - x;
        var vy = playerY - y;
        var ox = x;
        var oy = y;
        var l = Math.sqrt((x * x) + (y * y));
        vx = vx / l;
        vy = vy / l;
        var lightAmt = 1;
        for (var i = 0; i < l; i++) {
            var cell = getCell(Math.floor(ox), Math.floor(oy));
            if (cell && cell.cellType.blockVision) {
                checkedCells.forEach(function (each) { return each.light = 0; });
                lightAmt = 0;
                checkedCells.push(cell);
            }
            else if (cell) {
                cell.light += lightAmt;
                checkedCells.push(cell);
            }
            ox += vx;
            oy += vy;
        }
        var nearestWall = __spreadArray([], checkedCells, true).reverse().find(function (f) { return f.cellType.blockVision; });
        if (nearestWall) {
            nearestWall.light = 1;
            setCell(nearestWall);
        }
        return { visible: true, block: false, cells: checkedCells };
    }
    var cells = [];
    for (var i = y - viewRadius; i < y + viewRadius; i++) {
        for (var j = x - viewRadius; j < x + viewRadius; j++) {
            var cell = getCell(Math.floor(j), Math.floor(i));
            if (cell !== null) {
                var fovResult = doFov(Math.floor(j), Math.floor(i), x, y);
                if (cell.light > 0 && fovResult.visible) {
                    cells.push(cell);
                }
            }
            setCell(cell);
        }
    }
    function checkCardinal(x, y) {
        var cell = getCell(x, y - 1);
        if (cell === null || cell === void 0 ? void 0 : cell.cellType.blockVision) {
            cell.light = 1;
            cells.push(cell);
        }
    }
    checkCardinal(x, y + 1);
    checkCardinal(x + 1, y);
    checkCardinal(x - 1, y);
    checkCardinal(x, y - 1);
    checkCardinal(x + 1, y + 1);
    checkCardinal(x + 1, y - 1);
    checkCardinal(x - 1, y + 1);
    checkCardinal(x - 1, y - 1);
    cells.forEach(function (cell) {
        setExplored(cell.x, cell.y);
    });
    return cells;
}
//# sourceMappingURL=map.js.map