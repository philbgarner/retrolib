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
export var voronoiCells = [];
export var edges = [];
export var corners = [];
export var middles = [];
export var voronoiRegions = [];
// eslint-disable-next-line
export var generateCellFunction = function (cellTypes, x, y) {
    var cellType = cellTypes[randInt(0, cellTypes.length - 1)];
    return { name: cellType.name, group: cellType.group, colors: cellType.colors, bgColor: cellType.bgColor, characters: cellType.characters, blockMovement: cellType.blockMovement, blockVision: cellType.blockVision };
};
export function setGenerateCellFunction(generateFn) {
    generateCellFunction = generateFn;
}
export function GenerateCell(cellTypes, x, y) {
    return generateCellFunction(cellTypes, x, y);
}
/**
 * Default function for selecting the palette of cell types to pass to the generator.
 * @param x
 * @param y
 * @returns
 */
// eslint-disable-next-line
export var selectCellTypes = function (x, y) {
    return [
        { name: 'Block Wall', group: 'walls', colors: [{ r: 255, g: 255, b: 255, a: 255 }, { r: 200, g: 200, b: 200, a: 255 }], bgColor: null, characters: ['#'], blockVision: true, blockMovement: true },
        { name: "Stones", group: 'floors', colors: [{ r: 128, g: 128, b: 128, a: 255 }, { r: 200, g: 200, b: 200, a: 255 }], bgColor: null, characters: [',', '.'], blockMovement: false, blockVision: false },
        { name: "Grass", group: 'floors', colors: [{ r: 64, g: 128, b: 64, a: 255 }, { r: 32, g: 72, b: 32, a: 255 }], bgColor: null, characters: [',', '.'], blockMovement: false, blockVision: false }
    ];
};
export function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
}
export function GenerateCellsDungeonBSP(minWidth, minHeight, wallCellType) {
    // Initialize the grid with unexplored, unlit and blocked cells (unless otherwise specified).
    clearMap();
    wallCellType = wallCellType === undefined ? { name: 'Block Wall', group: 'walls', colors: [{ r: 255, g: 255, b: 255, a: 255 }, { r: 200, g: 200, b: 200, a: 255 }], bgColor: null, characters: ['#'], blockVision: true, blockMovement: true } : wallCellType;
    for (var y = 0; y < height; y++) {
        var cols = [];
        for (var x = 0; x < width; x++) {
            var cell = { x: x, y: y, light: 0, cellType: wallCellType };
            cols.push(cell);
        }
        mapCells.push(cols);
    }
    // Partition map space into leaves on a tree.
    var dungeon = {
        x: 0, y: 0, w: width, h: height,
        children: []
    };
    var zones = [];
    function divideSpace(leaf, depth, maxDepth) {
        if (leaf.w < minWidth || leaf.h < minHeight) {
            return;
        }
        depth = depth ? depth : 0;
        maxDepth = maxDepth ? maxDepth : 10;
        if (depth > maxDepth) {
            return;
        }
        function horizontal(pos) {
            var randPos = pos ? pos : randInt(minWidth, leaf.w - minWidth);
            var leafLeft = { x: leaf.x, y: leaf.y, w: randPos, h: leaf.h, children: [] };
            leaf.children.push(leafLeft);
            if (leafLeft.w > minWidth && leafLeft.x > 0) {
                divideSpace(leafLeft, depth + 1);
            }
            else if (leafLeft.h < minHeight && leafLeft.y > 0) {
                divideSpace(leafLeft, depth + 1);
            }
            var leafRight = { x: leaf.x + randPos, y: leaf.y, w: leaf.w - randPos, h: leaf.h, children: [] };
            console.log('horizontal', randPos, 'left', leafLeft, 'right', leafRight, 'children', leaf.children);
            leaf.children.push(leafRight);
            if (leafRight.w > minWidth && leafRight.x > 0) {
                divideSpace(leafRight, depth + 1);
            }
            else if (leafRight.h < minHeight && leafRight.y > 0) {
                divideSpace(leafRight, depth + 1);
            }
        }
        function vertical(pos) {
            var randPos = pos ? pos : randInt(minHeight, leaf.h - minHeight);
            var leafTop = { x: leaf.x, y: leaf.y, w: leaf.w, h: randPos, children: [] };
            leaf.children.push(leafTop);
            if (leafTop.h > minHeight && leafTop.y > 0) {
                divideSpace(leafTop, depth + 1);
            }
            else if (leafTop.w < minWidth && leafTop.x > 0) {
                divideSpace(leafTop, depth + 1);
            }
            var leafBottom = { x: leaf.x, y: leaf.y + randPos, w: leaf.w, h: leaf.h - randPos, children: [] };
            console.log('vertical', randPos, 'top', leafTop, 'right', leafBottom, 'children', leaf.children);
            leaf.children.push(leafBottom);
            if (leafBottom.h > minHeight && leafBottom.y > 0) {
                divideSpace(leafBottom, depth + 1);
            }
            else if (leafBottom.w < minWidth && leafBottom.x > 0) {
                divideSpace(leafBottom, depth + 1);
            }
        }
        if (leaf.h / leaf.w < 1) {
            horizontal();
        }
        else if (leaf.w / leaf.h < 1) {
            vertical();
        }
        else {
            var splitDir = randInt(0, 1) === 0 ? 'horizontal' : 'vertical';
            if (splitDir === 'horizontal') {
                horizontal();
            }
            else {
                vertical();
            }
        }
    }
    divideSpace(dungeon);
    // Iterate the rooms with no children on the hierarchy and use those zones
    // to dig cells in the map.
    var rooms = [];
    function listRooms(rms) {
        if (rms.children.length === 0) {
            rooms.push(rms);
        }
        else {
            rms.children.forEach(function (rm) {
                listRooms(rm);
            });
        }
    }
    listRooms(zones);
    console.log('rooms', rooms);
    rooms.forEach(function (room) {
        var x = randInt(1, room.w - 2);
        var y = randInt(1, room.h - 2);
        var w = randInt(0, room.w - x);
        var h = randInt(0, room.h - y);
        var roomRect = { x: x, y: y, w: w, h: h };
        for (var y_1 = 0; y_1 < roomRect.h; y_1++) {
            for (var x_1 = 0; x_1 < roomRect.w; x_1++) {
                setCell({ x: x_1, y: y_1, light: 1,
                    cellType: { name: 'Floor', group: 'floors', characters: ['.'], blockMovement: false, blockVision: false, colors: [{ r: 90, g: 90, b: 90, a: 255 }], bgColor: { r: 0, g: 0, b: 0, a: 255 } } });
            }
        }
    });
    return dungeon;
}
export function getVCell(x, y) {
    if (x < 0 || x > width - 1 || y < 0 || y > height - 1) {
        return null;
    }
    return voronoiCells[y][x];
}
/**
 * Calculate voronoi regions and populate the map based on the locations of region cells.
 * @param voronoiPointCoords Array of centre-points for each region to calculate.
 * @param voronoiPointGroups Group filter(s) to use from cell types palette for each region (Array position corresponds with coord index in first parameter). Multiple group filters separated by commas.
 * @param voronoiCellTypes Palette of cell types to use in the generator. Group property allows selecting certain cell types based on voronoi region.
 */
export function GenerateCellsVoronoi(width, height, voronoiPointCoords, voronoiPointGroups, voronoiCellTypes) {
    clearMap();
    Initialize(width, height, function () { return voronoiCellTypes; });
    var _loop_1 = function (y) {
        var cols = [];
        var _loop_2 = function (x) {
            var voronoi = voronoiPointCoords.filter(function (f) { return f.x === x && f.y === y; });
            if (voronoi.length > 0) {
                cols.push({ voronoiId: voronoi[0].id, distance: 0 });
            }
            else {
                cols.push({ voronoiId: -1, distance: width * height + 1 });
            }
        };
        for (var x = 0; x < width; x++) {
            _loop_2(x);
        }
        voronoiCells.push(cols);
    };
    // Initialize blank voronoi map.
    for (var y = 0; y < height; y++) {
        _loop_1(y);
    }
    // Iterate voronoi points and calculate their distance values,
    // overwriting them if less than the existing calculated distance.
    for (var _i = 0, voronoiPointCoords_1 = voronoiPointCoords; _i < voronoiPointCoords_1.length; _i++) {
        var vp = voronoiPointCoords_1[_i];
        for (var y = 0; y < height; y++) {
            for (var x = 0; x < width; x++) {
                var cell = voronoiCells[y][x];
                var dist = distance(vp.x, vp.y, x, y);
                if (dist < cell.distance) {
                    cell.distance = dist;
                    cell.voronoiId = vp.id;
                }
            }
        }
    }
    edges = [];
    corners = [];
    middles = [];
    // Now we iterate the map again, but this time we annotate the 
    // graph with edges and corners populated.
    for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
            var cell = getVCell(x, y);
            var cellEast = getVCell(x + 1, y);
            var cellWest = getVCell(x - 1, y);
            var cellNorth = getVCell(x, y - 1);
            var cellSouth = getVCell(x, y + 1);
            if (cell.voronoiId !== (cellEast === null || cellEast === void 0 ? void 0 : cellEast.voronoiId) || cell.voronoiId !== (cellWest === null || cellWest === void 0 ? void 0 : cellWest.voronoiId)
                || cell.voronoiId !== (cellNorth === null || cellNorth === void 0 ? void 0 : cellNorth.voronoiId) || cell.voronoiId !== (cellSouth === null || cellSouth === void 0 ? void 0 : cellSouth.voronoiId)) {
                var cornerCount = 0;
                cornerCount += cell.voronoiId !== (cellEast === null || cellEast === void 0 ? void 0 : cellEast.voronoiId) ? 1 : 0;
                cornerCount += cell.voronoiId !== (cellWest === null || cellWest === void 0 ? void 0 : cellWest.voronoiId) ? 1 : 0;
                cornerCount += cell.voronoiId !== (cellNorth === null || cellNorth === void 0 ? void 0 : cellNorth.voronoiId) ? 1 : 0;
                cornerCount += cell.voronoiId !== (cellSouth === null || cellSouth === void 0 ? void 0 : cellSouth.voronoiId) ? 1 : 0;
                var neighbourIds = [];
                if (cellEast && cellEast.voronoiId !== cell.voronoiId) {
                    neighbourIds.push(cellEast.voronoiId);
                }
                if (cellWest && cellWest.voronoiId !== cell.voronoiId) {
                    neighbourIds.push(cellWest.voronoiId);
                }
                if (cellSouth && cellSouth.voronoiId !== cell.voronoiId) {
                    neighbourIds.push(cellSouth.voronoiId);
                }
                if (cellNorth && cellNorth.voronoiId !== cell.voronoiId) {
                    neighbourIds.push(cellNorth.voronoiId);
                }
                edges.push({ id: cell.voronoiId, x: x, y: y, neighbouringRegions: Array.from(new Set(neighbourIds)) });
                if (cornerCount > 2) {
                    corners.push({ id: cell.voronoiId, x: x, y: y, neighbouringRegions: Array.from(new Set(neighbourIds)) });
                }
            }
            else {
                middles.push({ id: cell.voronoiId, x: x, y: y });
            }
        }
    }
    // Build region object with prebuilt cell data cached for fast lookups later.
    voronoiPointCoords.forEach(function (vp) {
        var region = { id: vp.id,
            coords: { id: vp.id, x: vp.x, y: vp.y },
            corners: corners.filter(function (f) { return f.id === vp.id; }),
            edges: edges.filter(function (f) { return f.id === vp.id; }),
            neighbours: Array.from(new Set(edges.filter(function (f) { return f.id !== vp.id; }).map(function (m) { return m.id; }))),
            middles: middles.filter(function (f) { return f.id === vp.id; })
        };
        voronoiRegions.push(region);
    });
    // Iterate regions and populate cells from cell types array.
    voronoiRegions.forEach(function (region, regionIndex) {
        region.middles.forEach(function (cell) {
            var cellTypes = voronoiCellTypes.filter(function (f) { return voronoiPointGroups[regionIndex].includes(f.group); });
            if (cellTypes.length > 0) {
                var mapCell = { x: cell.x, y: cell.y, cellType: cellTypes[randInt(0, cellTypes.length - 1)], light: 0 };
                if (mapCell.cellType.characters.length > 1) {
                    mapCell.cellType.characters = mapCell.cellType.characters.slice(randInt(0, mapCell.cellType.characters.length - 1));
                }
                if (mapCell.cellType.colors.length > 1) {
                    mapCell.cellType.colors = mapCell.cellType.colors.slice(randInt(0, mapCell.cellType.colors.length - 1));
                }
                setCell(mapCell);
            }
        });
        region.edges.forEach(function (cell) {
            var cellTypes = voronoiCellTypes.filter(function (f) { return f.group.includes(voronoiPointGroups[regionIndex]); });
            // If this is an edge cell we want to mix cell types of the two regions in the potential list
            // so you get a randomized blended edge.
            if (cell.neighbouringRegions.length > 0) {
                cellTypes = [];
                cell.neighbouringRegions.forEach(function (regionId) { return cellTypes = __spreadArray(__spreadArray([], cellTypes, true), voronoiCellTypes.filter(function (f) { return f.group.includes(voronoiPointGroups[regionId]); }), true); });
            }
            if (cellTypes.length > 0) {
                var mapCell = { x: cell.x, y: cell.y, cellType: cellTypes[randInt(0, cellTypes.length - 1)], light: 0 };
                if (mapCell.cellType.characters.length > 1) {
                    mapCell.cellType.characters = mapCell.cellType.characters.slice(randInt(0, mapCell.cellType.characters.length - 1));
                }
                if (mapCell.cellType.colors.length > 1) {
                    mapCell.cellType.colors = mapCell.cellType.colors.slice(randInt(0, mapCell.cellType.colors.length - 1));
                }
                setCell(mapCell);
            }
        });
    });
}
export function getRegion(id) {
    var regionIndex = voronoiRegions.findIndex(function (f) { return f.id === id; });
    if (regionIndex > -1) {
        return voronoiRegions[regionIndex];
    }
    return null;
}
export function clearMap() {
    mapCells = [];
    exploredCells = [];
    voronoiCells = [];
    voronoiRegions = [];
}
export function SelectCellTypes(x, y, selectFn) {
    if (selectFn) {
        return selectFn(x, y);
    }
    return selectCellTypes(x, y);
}
export function Initialize(mapWidth, mapHeight, selectCellTypesFunction) {
    clearMap();
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
                cell.cellType.characters = cell.cellType.characters.slice(randInt(0, cell.cellType.characters.length - 1));
            }
            if (cell.cellType.colors.length > 1) {
                cell.cellType.colors = cell.cellType.colors.slice(randInt(0, cell.cellType.colors.length - 1));
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
    mapCells.forEach(function (row) {
        row.forEach(function (cell) {
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
    catch (_a) {
        // Ignore no-empty lint rule.
    }
    return null;
}
export function setCell(mapCell) {
    try {
        mapCells[mapCell.y][mapCell.x] = mapCell;
    }
    catch (_a) {
        // Ignore no-empty lint rule.
    }
}
export function setExplored(x, y) {
    try {
        exploredCells[y][x] = true;
    }
    catch (_a) {
        // Ignore no-empty lint rule.
    }
}
export function isExplored(x, y) {
    try {
        return exploredCells[y][x];
    }
    catch (_a) {
        // Ignore no-empty lint rule.
    }
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
    // x = x + (viewRadius % 2 === 1 ? 0 : 1)
    // y = y + (viewRadius % 2 === 1 ? 0 : 1)
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
    for (var i = y - viewRadius; i < y + viewRadius + 1; i++) {
        for (var j = x - viewRadius; j < x + viewRadius + 1; j++) {
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
        var cell = getCell(x, y);
        if (cell === null || cell === void 0 ? void 0 : cell.cellType.blockVision) {
            cell.light = 1;
            if (cells.filter(function (f) { return f.x === x && f.y === y; }).length === 0) {
                cells.push(cell);
            }
        }
    }
    checkCardinal(x + 1, y);
    checkCardinal(x + 1, y + 1);
    checkCardinal(x, y + 1);
    checkCardinal(x + 1, y - 1);
    checkCardinal(x - 1, y + 1);
    cells.forEach(function (cell) {
        setExplored(cell.x, cell.y);
    });
    return cells;
}
//# sourceMappingURL=map.js.map