import { randInt } from "./random";
export var generateCellFunction = function (cellTypes, x, y) {
    var cellType = cellTypes[randInt(0, cellTypes.length - 1)];
    return { name: cellType.name, group: cellType.group, colors: cellType.colors, bgColor: cellType.bgColor, characters: cellType.characters, blockMovement: cellType.blockMovement, blockVision: cellType.blockVision };
};
export function GenerateCell(cellTypes, x, y) {
    return generateCellFunction(cellTypes, x, y);
}
export var selectCellTypes = function (x, y) {
    return [{ name: "Empty (".concat(x, ",").concat(y, ")"), group: '', colors: [{ r: 128, g: 128, b: 128, a: 128 }], bgColor: null, characters: ['.', ','], blockMovement: false, blockVision: false }];
};
export function SelectCellTypes(x, y, selectFn) {
    if (selectFn) {
        return selectFn(x, y);
    }
    return selectCellTypes(x, y);
}
export var mapCells = [];
export function Initialize(width, height) {
    mapCells = [];
    for (var y = 0; y < height; y++) {
        var cols = [];
        for (var x = 0; x < width; x++) {
            cols.push(GenerateCell(SelectCellTypes(x, y), x, y));
        }
        mapCells.push(cols);
    }
}
export function GetCells(filterFn) {
    var cells = [];
    mapCells.forEach(function (row, rowIndex) {
        row.forEach(function (cell, colIndex) {
            if (filterFn(cell)) {
                cells.push({ cellType: cell, x: colIndex, y: rowIndex });
            }
        });
    });
    return cells;
}
//# sourceMappingURL=map.js.map