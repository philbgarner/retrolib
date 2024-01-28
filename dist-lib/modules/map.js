import { randInt } from "./random";
export var width;
export var height;
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
export function Initialize(mapWidth, mapHeight) {
    mapCells = [];
    width = mapWidth;
    height = mapHeight;
    for (var y = 0; y < height; y++) {
        var cols = [];
        for (var x = 0; x < width; x++) {
            cols.push(GenerateCell(SelectCellTypes(x, y), x, y));
        }
        mapCells.push(cols);
    }
}
export function getCells(filterFn) {
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
export function getCell(x, y) {
    try {
        return {
            cellType: mapCells[y][x],
            x: x, y: y
        };
    }
    catch (_a) { }
    return null;
}
export function fov(viewRadius, x, y) {
    function doFov(x, y, playerX, playerY) {
        var vx = x - playerX;
        var vy = y - playerY;
        var ox = x + 0.5;
        var oy = y + 0.5;
        var l = Math.sqrt((x * x) + (y * y));
        vx = vx / l;
        vy = vy / l;
        for (var i = 0; i < l; i++) {
            var cell = getCell(Math.floor(ox), Math.floor(oy));
            if (cell && cell.cellType.blockVision) {
                return false;
            }
            ox += vx;
            oy += vy;
        }
        return true;
    }
    var litCells = [];
    var halfRadius = viewRadius / 2;
    for (var i = -halfRadius; i < height - halfRadius; i++) {
        for (var j = -halfRadius; j < width - halfRadius; j++) {
            var cell = getCell(j, i);
            if (cell) {
                if (doFov(j, i, x, y)) {
                    litCells.push(cell);
                }
            }
        }
    }
    return litCells;
}
/*
void FOV()
{
  int i,j;
  float x,y,l;
  for(i=0;i<80;i++)for(j=0;j<25;j++)
  {
    MAP[i][j]= NOT_VISIBLE;//Pseudo code
    x=i-PLAYERX;
    y=j-PLAYERY;
    l=sqrt((x*x)+(y*y));
    if(l<VIEW_RADIUS)
      if(DoFov(i,j)==true)
        MAP[i][j] = VISIBLE;//Pseudo code, you understand.
  };
};
*/ 
//# sourceMappingURL=map.js.map