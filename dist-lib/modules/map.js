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
export function GenerateCellsDungeonBSP(minWidth, minHeight, maxWidth, maxHeight, wallCellType, maxIterations) {
    // Initialize the grid with unexplored, unlit and blocked cells (unless otherwise specified).
    clearMap();
    maxIterations = maxIterations === undefined ? 60 : maxIterations;
    wallCellType = wallCellType === undefined ? { name: 'Block Wall', group: 'walls', colors: [{ r: 255, g: 255, b: 255, a: 255 }, { r: 200, g: 200, b: 200, a: 255 }], bgColor: null, characters: ['#'], blockVision: true, blockMovement: true } : wallCellType;
    Initialize(width, height, function () { return [wallCellType]; });
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
        id: crypto.randomUUID(),
        x: 0, y: 0, w: width, h: height,
        parent: null,
        children: []
    };
    var deepestLeaf = 0;
    var zones = [];
    function divideSpace(leaf, depth, maxDepth) {
        var _a, _b;
        if (leaf.w < minWidth || leaf.h < minHeight) {
            return;
        }
        depth = depth ? depth : 0;
        maxDepth = maxDepth ? maxDepth : 8;
        if (depth > maxDepth) {
            return;
        }
        deepestLeaf = depth > deepestLeaf ? depth : deepestLeaf;
        function horizontal(iteration) {
            iteration = iteration === undefined ? 0 : iteration;
            if (iteration > maxIterations) {
                return;
            }
            var randPos = randInt(minWidth, leaf.w - 1 - minWidth);
            var leafLeft = { x: leaf.x, y: leaf.y, w: randPos, h: leaf.h, children: [], parent: leaf, id: crypto.randomUUID() };
            var leafRight = { x: leaf.x + randPos, y: leaf.y, w: leaf.w - randPos, h: leaf.h, children: [], parent: leaf, id: crypto.randomUUID() };
            if (leafLeft.w < minWidth || leafRight.w < minWidth) {
                return horizontal(iteration + 1);
            }
            return [leafLeft, leafRight];
        }
        function vertical(iteration) {
            iteration = iteration === undefined ? 0 : iteration;
            if (iteration > maxIterations) {
                return [];
            }
            var randPos = randInt(minHeight, leaf.h - 1 - minHeight);
            var leafTop = { x: leaf.x, y: leaf.y, w: leaf.w, h: randPos, children: [], parent: leaf, id: crypto.randomUUID() };
            var leafBottom = { x: leaf.x, y: leaf.y + randPos, w: leaf.w, h: leaf.h - randPos, children: [], parent: leaf, id: crypto.randomUUID() };
            if (leafTop.h < minHeight || leafBottom.h < minHeight) {
                return vertical(iteration + 1);
            }
            return [leafTop, leafBottom];
        }
        var splitDir = randInt(0, 1) === 0 ? 'horizontal' : 'vertical';
        if (splitDir === 'horizontal') {
            (_a = leaf.children).push.apply(_a, horizontal());
            leaf.children.forEach(function (child) { return divideSpace(child, depth + 1, maxDepth); });
        }
        else {
            (_b = leaf.children).push.apply(_b, vertical());
            leaf.children.forEach(function (child) { return divideSpace(child, depth + 1, maxDepth); });
        }
    }
    divideSpace(dungeon);
    // Iterate the rooms with no children on the hierarchy and use those zones
    // to dig cells in the map.
    function listRooms(rms) {
        if (rms.children.length === 0) {
            zones.push(rms);
        }
        else {
            rms.children.forEach(function (rm) {
                listRooms(rm);
            });
        }
    }
    listRooms(dungeon);
    var rooms = [];
    // Calculate rooms.
    zones.forEach(function (zone) {
        var w = zone.w - 2;
        var h = zone.h - 2;
        if (w > minWidth) {
            w = randInt(minWidth, maxWidth > zone.w - 2 ? zone.w - 2 : maxWidth);
        }
        if (h > minHeight) {
            h = randInt(minHeight, maxHeight > zone.h - 2 ? zone.h - 2 : maxHeight);
        }
        var x = randInt(1, zone.w - w - 1);
        var y = randInt(1, zone.h - h - 1);
        var roomRect = { x: zone.x + x, y: zone.y + y, w: w, h: h };
        var newRoom = { id: zone.id, x: roomRect.x, y: roomRect.y, w: roomRect.w, h: roomRect.h,
            connections: [], siblings: [], siblingIds: zone.parent.children.filter(function (f) { return f.id !== zone.id; }).map(function (m) { return m.id; }),
            floors: [], walls: [], doors: [] };
        // Calculate floors.
        for (var j = roomRect.y; j < roomRect.y + roomRect.h; j++) {
            for (var i = roomRect.x; i < roomRect.x + roomRect.w; i++) {
                newRoom.floors.push({ x: i, y: j });
            }
        }
        // Calculate Walls.
        for (var j = roomRect.y - 1; j < roomRect.y + roomRect.h + 1; j++) {
            newRoom.walls.push({ x: roomRect.x - 1, y: j });
            newRoom.walls.push({ x: roomRect.x + roomRect.w, y: j });
        }
        for (var i = roomRect.x; i < roomRect.x + roomRect.w; i++) {
            newRoom.walls.push({ x: i, y: roomRect.y - 1 });
            newRoom.walls.push({ x: i, y: roomRect.y + roomRect.h });
        }
        rooms.push(newRoom);
    });
    // Calculate siblings.
    rooms.forEach(function (room) {
        room.siblings = rooms.filter(function (f) { return room.siblingIds.includes(f.id); });
        console.log.apply(console, __spreadArray(['room', room.id, room.x, room.y], room.siblings.map(function (m) { return [m.x, m.y]; }), false));
    });
    rooms.forEach(function (compareFromRoom) {
        // Calculate doors and connecting corridors.
        var compareFromRoomMid = { x: compareFromRoom.x + compareFromRoom.w / 2, y: compareFromRoom.y + compareFromRoom.h / 2 };
        compareFromRoom.siblings
            .filter(function (f) { return f.connections.filter(function (c) { return c.startRoom.id === f.id || c.endRoom.id === f.id; }).length === 0; })
            .forEach(function (siblingRoom) {
            var midRoom = { x: siblingRoom.x + siblingRoom.w / 2, y: siblingRoom.y + siblingRoom.h / 2 };
            var diffX = midRoom.x - compareFromRoomMid.x;
            var diffY = midRoom.y - compareFromRoomMid.y;
            var connection = { startRoom: compareFromRoom, endRoom: siblingRoom, startDoor: null, endDoor: null, floors: [] };
            if (Math.abs(diffX) > Math.abs(diffY)) {
                // Horizontally aligned
                if (midRoom.x > compareFromRoomMid.x) {
                    // This room is to the right.
                    var wallsStart = compareFromRoom.walls.filter(function (f) { return f.x === compareFromRoom.x + compareFromRoom.w && f.y > siblingRoom.y && f.y < siblingRoom.y + siblingRoom.h; });
                    var wallStartCoords_1 = wallsStart[randInt(0, wallsStart.length - 1)];
                    if (wallStartCoords_1) {
                        var wallEndCoords = siblingRoom.walls.filter(function (f) { return f.x === siblingRoom.x - 1 && f.y === wallStartCoords_1.y && f.y > siblingRoom.y && f.y < siblingRoom.y + siblingRoom.h; });
                        console.log('right', wallStartCoords_1, wallEndCoords, siblingRoom);
                        if (wallEndCoords.length > 0) {
                            for (var l = wallStartCoords_1.x; l <= wallEndCoords[0].x; l++) {
                                compareFromRoom.floors.push({ x: l, y: wallStartCoords_1.y });
                                connection.startDoor = wallStartCoords_1;
                                connection.endDoor = wallEndCoords[0];
                                connection.floors.push({ x: l, y: wallStartCoords_1.y });
                            }
                        }
                    }
                }
                else {
                    // This room is to the left.
                    var wallsStart = compareFromRoom.walls.filter(function (f) { return f.x === compareFromRoom.x - 1 && f.y > siblingRoom.y && f.y < siblingRoom.y + siblingRoom.h; });
                    var wallStartCoords_2 = wallsStart[randInt(0, wallsStart.length - 1)];
                    if (wallStartCoords_2) {
                        var wallEndCoords = siblingRoom.walls.filter(function (f) { return f.x === siblingRoom.x + siblingRoom.w && f.y === wallStartCoords_2.y && f.y > siblingRoom.y && f.y < siblingRoom.y + siblingRoom.h; });
                        console.log('left', wallStartCoords_2, wallEndCoords, siblingRoom);
                        if (wallEndCoords.length > 0) {
                            for (var l = wallStartCoords_2.x + 1; l >= wallEndCoords[0].x; l--) {
                                compareFromRoom.floors.push({ x: l, y: wallStartCoords_2.y });
                                connection.startDoor = wallStartCoords_2;
                                connection.endDoor = wallEndCoords[0];
                                connection.floors.push({ x: l, y: wallStartCoords_2.y });
                            }
                        }
                    }
                }
            }
            else {
                // Vertically aligned
                console.log('vertically aligned', midRoom.y > compareFromRoomMid.y, midRoom.y, compareFromRoomMid.y);
                if (midRoom.y < compareFromRoomMid.y) {
                    // This room is to the bottom.
                    var wallsStart = compareFromRoom.walls.filter(function (f) { return f.y === compareFromRoom.y + compareFromRoom.h && f.x > siblingRoom.x && f.x < siblingRoom.x + siblingRoom.w; });
                    var wallStartCoords_3 = wallsStart[randInt(0, wallsStart.length - 1)];
                    if (wallStartCoords_3) {
                        var wallEndCoords = siblingRoom.walls.filter(function (f) { return f.y === siblingRoom.y - 1 && f.x === wallStartCoords_3.x && f.x > siblingRoom.x && f.x < siblingRoom.x + siblingRoom.w; });
                        console.log('bottom', wallStartCoords_3, wallEndCoords, siblingRoom);
                        if (wallEndCoords.length > 0) {
                            for (var l = wallStartCoords_3.y; l <= wallEndCoords[0].y; l++) {
                                compareFromRoom.floors.push({ x: wallStartCoords_3.x, y: l });
                                connection.startDoor = wallStartCoords_3;
                                connection.endDoor = wallEndCoords[0];
                                connection.floors.push({ x: wallStartCoords_3.x, y: l });
                            }
                        }
                    }
                }
                else {
                    // This room is to the top.
                    var wallsStart = compareFromRoom.walls.filter(function (f) { return f.y === compareFromRoom.y + compareFromRoom.h && f.x > siblingRoom.x && f.x < siblingRoom.x + siblingRoom.w; });
                    var wallStartCoords_4 = wallsStart[randInt(0, wallsStart.length - 1)];
                    if (wallStartCoords_4) {
                        var wallEndCoords = siblingRoom.walls.filter(function (f) { return f.y === siblingRoom.y - 1 && f.x === wallStartCoords_4.x && f.x > siblingRoom.x && f.x < siblingRoom.x + siblingRoom.w; });
                        console.log('top', wallStartCoords_4, wallEndCoords, siblingRoom);
                        if (wallEndCoords.length > 0) {
                            for (var l = wallStartCoords_4.y; l <= wallEndCoords[0].y; l++) {
                                compareFromRoom.floors.push({ x: wallStartCoords_4.x, y: l });
                                connection.startDoor = wallStartCoords_4;
                                connection.endDoor = wallEndCoords[0];
                                connection.floors.push({ x: wallStartCoords_4.x, y: l });
                            }
                        }
                    }
                }
            }
            compareFromRoom.connections.push(connection);
        });
    });
    // Dig out floors.
    rooms.forEach(function (room) {
        room.floors.forEach(function (floor) {
            setCell({ x: floor.x, y: floor.y, light: 1,
                cellType: { name: 'Floor', group: 'floors', characters: ['.'], blockMovement: false, blockVision: false, colors: [{ r: 90, g: 90, b: 90, a: 255 }], bgColor: { r: 0, g: 0, b: 0, a: 255 } } });
        });
    });
    return [dungeon, zones, rooms];
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
export function setAllExplored() {
    for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
            exploredCells[y][x] = true;
        }
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