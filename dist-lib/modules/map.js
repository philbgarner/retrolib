import { randInt } from "./random";
export var width;
export var height;
export var mapCells = [];
export var exploredCells = [];
export var generateCellFunction = function (cellTypes, x, y) {
    var cellType = cellTypes[randInt(0, cellTypes.length - 1)];
    return { name: cellType.name, group: cellType.group, colors: cellType.colors, bgColor: cellType.bgColor, characters: cellType.characters, blockMovement: cellType.blockMovement, blockVision: cellType.blockVision };
};
export function GenerateCell(cellTypes, x, y) {
    return generateCellFunction(cellTypes, x, y);
}
export var selectCellTypes = function (x, y) {
    return [{ name: "Empty (".concat(x, ",").concat(y, ")"), group: '', colors: [{ r: 128, g: 128, b: 128, a: 128 }], bgColor: null, characters: [','], blockMovement: false, blockVision: false }];
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
export function Initialize(mapWidth, mapHeight) {
    mapCells = [];
    exploredCells = [];
    width = mapWidth;
    height = mapHeight;
    for (var y = 0; y < height; y++) {
        var cols = [];
        var expl = [];
        for (var x = 0; x < width; x++) {
            cols.push({
                cellType: GenerateCell(SelectCellTypes(x, y), x, y),
                x: x, y: y,
                light: 0
            });
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
export function fov(viewRadius, x, y) {
    x = x + (viewRadius % 2 === 1 ? 1 : 0);
    y = y + (viewRadius % 2 === 1 ? 1 : 0);
    function doFov(x, y, playerX, playerY) {
        var checkedCells = [];
        var vx = playerX - x;
        var vy = playerY - y;
        var ox = x + 0.5;
        var oy = y + 0.5;
        var l = Math.sqrt((x * x) + (y * y));
        vx = vx / l;
        vy = vy / l;
        for (var i = 0; i < l; i++) {
            var cell = getCell(Math.floor(ox), Math.floor(oy));
            if (cell && cell.cellType.blockVision) {
                checkedCells.forEach(function (each) { return each.light = 0; });
                cell.light++;
                return { visible: true, block: true, cells: checkedCells };
            }
            else if (cell && !cell.cellType.blockVision) {
                cell.light++;
                checkedCells.push(cell);
            }
            ox += vx;
            oy += vy;
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
    cells.forEach(function (cell) {
        setExplored(cell.x, cell.y);
    });
    return cells;
}
//# sourceMappingURL=map.js.map