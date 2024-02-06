import { randInt } from "./random"
import { ColorRGBA } from "./font"
import { Coordinates } from "../retrolib"

export let width: number
export let height: number
export let mapCells: MapCell[][] = []
export let exploredCells: boolean[][] = []
export let exploredCellCache: MapCell[]
export let voronoiCells: VoronoiCell[][] = []
export let edges: VoronoiCoordinate[] = []
export let corners: VoronoiCoordinate[] = []
export let middles: VoronoiCoordinate[] = []
export let voronoiRegions: VoronoiRegion[] = []

export type VoronoiCoordinate = {
    id: number,
    x: number,
    y: number
}

export type VoronoiRegion = {
    id: number,
    coords: VoronoiCoordinate,
    edges: VoronoiCoordinate[],
    corners: VoronoiCoordinate[],
    neighbours: number[],
    middles: VoronoiCoordinate[]
}

export type VoronoiCell = {
    voronoiId: number,
    distance: number,
}

export type CellType = {
    name: string,
    group: string,
    colors: ColorRGBA[],
    bgColor: ColorRGBA,
    characters: string[],
    blockVision: boolean,
    blockMovement: boolean
}

export type MapCell = {
    cellType: CellType,
    light: number,
    x: number
    y: number
}

export interface GenerateCellFunction {
    (cellTypes: CellType[], x: number, y: number): CellType
}

// eslint-disable-next-line
export let generateCellFunction: GenerateCellFunction = (cellTypes: CellType[], x: number, y: number): CellType => {
    const cellType: CellType = cellTypes[randInt(0, cellTypes.length - 1)]
    return { name: cellType.name, group: cellType.group, colors: cellType.colors, bgColor: cellType.bgColor, characters: cellType.characters, blockMovement: cellType.blockMovement, blockVision: cellType.blockVision }
}

export function setGenerateCellFunction(generateFn: GenerateCellFunction) {
    generateCellFunction = generateFn
}

export function GenerateCell(cellTypes: CellType[], x: number, y: number): CellType {
    return generateCellFunction(cellTypes, x, y)
}

export interface SelectCellTypesFunction {
    (x: number, y: number): CellType[]
}

/**
 * Default function for selecting the palette of cell types to pass to the generator.
 * @param x 
 * @param y 
 * @returns 
 */
// eslint-disable-next-line
export let selectCellTypes: SelectCellTypesFunction = (x: number, y: number): CellType[] => {
    return [
            { name: 'Block Wall', group: 'walls', colors: [{ r: 255, g: 255, b: 255, a: 255 }, { r: 200, g: 200, b: 200, a: 255 }], bgColor: null, characters: ['#'], blockVision: true, blockMovement: true },
            { name: `Stones`, group: 'floors', colors: [{ r: 128, g: 128, b: 128, a: 255 }, { r: 200, g: 200, b: 200, a: 255 }], bgColor: null, characters: [',', '.'], blockMovement: false, blockVision: false },
            { name: `Grass`, group: 'floors', colors: [{ r: 64, g: 128, b: 64, a: 255 }, { r: 32, g: 72, b: 32, a: 255 }], bgColor: null, characters: [',', '.'], blockMovement: false, blockVision: false }
        ]
}

export function distance(x1: number, y1: number, x2: number, y2: number) {
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
}

/**
 * Calculate voronoi regions and populate the map based on the locations of region cells.
 * @param voronoiPointCoords Array of centre-points for each region to calculate.
 * @param voronoiPointGroups Group filter(s) to use from cell types palette for each region (Array position corresponds with coord index in first parameter). Multiple group filters separated by commas.
 * @param voronoiCellTypes Palette of cell types to use in the generator. Group property allows selecting certain cell types based on voronoi region.
 */
export function GenerateCellsVoronoi(voronoiPointCoords: VoronoiCoordinate[], voronoiPointGroups: string[], voronoiCellTypes: CellType[]) {
    // Initialize blank voronoi map.
    voronoiCells = []
    voronoiRegions = []

    for (let y = 0; y < height; y++) {
        const cols: VoronoiCell[] = []
        for (let x = 0; x < width; x++) {
            const voronoi = voronoiPointCoords.filter(f => f.x === x && f.y === y)
            if (voronoi.length > 0) {
                cols.push({ voronoiId: voronoi[0].id, distance: 0 })
            } else {
                cols.push({ voronoiId: -1, distance: width * height + 1 })
            }
        }
        voronoiCells.push(cols)
    }

    // Iterate voronoi points and calculate their distance values,
    // overwriting them if less than the existing calculated distance.
    for (let vp of voronoiPointCoords) {
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const cell = voronoiCells[y][x]
                const dist = distance(vp.x, vp.y, x, y)
                if (dist < cell.distance) {
                    cell.distance = dist
                    cell.voronoiId = vp.id
                }
            }
        }
    }

    edges = []
    corners = []
    middles = []

    function getVCell(x: number, y: number) {
        if (x < 0 || x > width - 1 || y < 0 || y > height - 1) {
            return null
        }
        return voronoiCells[y][x]
    }

    // Now we iterate the map again, but this time we annotate the 
    // graph with edges and corners populated.
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const cell = getVCell(x, y)
            const cellEast = getVCell(x + 1, y)
            const cellWest = getVCell(x - 1, y)
            const cellNorth = getVCell(x, y - 1)
            const cellSouth = getVCell(x, y + 1)

            if (cell.voronoiId !== cellEast?.voronoiId || cell.voronoiId !== cellWest?.voronoiId
                || cell.voronoiId !== cellNorth?.voronoiId || cell.voronoiId !== cellSouth?.voronoiId) {
                    edges.push({ id: cell.voronoiId, x: x, y: y })
                    let cornerCount = 0
                    cornerCount += cell.voronoiId !== cellEast?.voronoiId ? 1 : 0
                    cornerCount += cell.voronoiId !== cellWest?.voronoiId ? 1 : 0
                    cornerCount += cell.voronoiId !== cellNorth?.voronoiId ? 1 : 0
                    cornerCount += cell.voronoiId !== cellSouth?.voronoiId ? 1 : 0
                    if (cornerCount > 2) {
                        corners.push({ id: cell.voronoiId, x: x, y: y })
                    }
                }
            else {
                middles.push({ id: cell.voronoiId, x: x, y: y })
            }
        }
    }

    // Build region object with prebuilt cell data cached for fast lookups later.
    voronoiPointCoords.forEach(vp => {
        const region: VoronoiRegion = { id: vp.id,
            coords: { id: vp.id, x: vp.x, y: vp.y },
            corners: corners.filter(f => f.id === vp.id),
            edges: edges.filter(f => f.id === vp.id),
            neighbours: Array.from(new Set(edges.filter(f => f.id !== vp.id).map(m => m.id))),
            middles: middles.filter(f => f.id === vp.id)
        }
        voronoiRegions.push(region)
    })

    // Iterate regions and populate cells from cell types array.
    voronoiRegions.forEach((region, regionIndex) => {
        region.middles.forEach(cell => {
            const mapCell = getCell(cell.x, cell.y)
            const cellTypes = voronoiCellTypes.filter(f => voronoiPointGroups[regionIndex].includes(f.group))
            if (cellTypes.length > 0) {
                Object.assign(mapCell.cellType, cellTypes[randInt(0, cellTypes.length - 1)])
                if (mapCell.cellType.characters.length > 1) {
                    mapCell.cellType.characters = mapCell.cellType.characters.slice(randInt(0, mapCell.cellType.characters.length - 1))
                }
                if (mapCell.cellType.colors.length > 1) {
                    mapCell.cellType.colors = mapCell.cellType.colors.slice(randInt(0, mapCell.cellType.colors.length - 1))
                }
                setCell(mapCell)
            }
        })

        region.edges.forEach(cell => {
            const mapCell = getCell(cell.x, cell.y)

            const cellTypes = voronoiCellTypes.filter(f => f.group.includes(voronoiPointGroups[regionIndex]))
// TODO: Calculate the neighbour Ids for the given cell and then push cell types from neighbouring regions.
            if (cellTypes.length > 0) {
                Object.assign(mapCell.cellType, cellTypes[randInt(0, cellTypes.length - 1)])
                if (mapCell.cellType.characters.length > 1) {
                    mapCell.cellType.characters = mapCell.cellType.characters.slice(randInt(0, mapCell.cellType.characters.length - 1))
                }
                if (mapCell.cellType.colors.length > 1) {
                    mapCell.cellType.colors = mapCell.cellType.colors.slice(randInt(0, mapCell.cellType.colors.length - 1))
                }
                setCell(mapCell)
            }
        })
    })
}

export function clearMap() {
    mapCells = []
    exploredCells = []
}

export function SelectCellTypes(x: number, y: number, selectFn?: SelectCellTypesFunction): CellType[] {
    if (selectFn) {
        return selectFn(x, y)
    }
    return selectCellTypes(x, y)
}

export function Initialize(mapWidth: number, mapHeight: number, selectCellTypesFunction?: SelectCellTypesFunction) {
    mapCells = []
    exploredCells = []

    width = mapWidth
    height = mapHeight

    for (let y = 0; y < height; y++) {
        const cols: MapCell[] = []
        const expl: boolean[] = []
        for (let x = 0; x < width; x++) {
            const cell = {
                cellType: GenerateCell(SelectCellTypes(x, y, selectCellTypesFunction), x, y),
                x: x, y: y,
                light: 0
            }
            if (cell.cellType.characters.length > 1) {
                cell.cellType.characters = cell.cellType.characters.slice(randInt(0, cell.cellType.characters.length - 1))
            }
            if (cell.cellType.colors.length > 1) {
                cell.cellType.colors = cell.cellType.colors.slice(randInt(0, cell.cellType.colors.length - 1))
            }
            cols.push(cell)
            expl.push(false)
        }
        mapCells.push(cols)
        exploredCells.push(expl)
    }
}

export interface GetCellsFilterFunction {
    (cell: CellType): boolean
}

export function getCells(filterFn: GetCellsFilterFunction): MapCell[] {
    const cells: MapCell[] = []
    mapCells.forEach((row) => {
        row.forEach((cell) => {
            if (filterFn(cell.cellType)) {
                cells.push(cell)
            }
        })
    })
    return cells
}

export function getCell(x: number, y: number): MapCell {
    try {
        if (mapCells[y][x] === undefined) {
            return null
        } else {
            return mapCells[y][x]
        }
    } catch {
        // Ignore no-empty lint rule.
    }
    return null
}

export function setCell(mapCell: MapCell) {
    try {
        mapCells[mapCell.y][mapCell.x] = mapCell
    } catch {
        // Ignore no-empty lint rule.
    }
}

export function setExplored(x: number, y: number) {
    try {
        exploredCells[y][x] = true
    } catch {
        // Ignore no-empty lint rule.
    }
}

export function isExplored(x: number, y: number): boolean {
    try {
        return exploredCells[y][x]
    } catch {
        // Ignore no-empty lint rule.
    }
}

export function getExploredCells(): MapCell[] {
    exploredCellCache = []
    exploredCells.forEach((row, index) => {
        row.forEach((cell, column) => {
            if (isExplored(column, index)) {
                exploredCellCache.push(getCell(column, index))
            }
        })
    })
    return exploredCellCache
}

export function fov(viewRadius: number, x: number, y: number): MapCell[] {
    // x = x + (viewRadius % 2 === 1 ? 0 : 1)
    // y = y + (viewRadius % 2 === 1 ? 0 : 1)

    type FovSearchResult = {
        visible: boolean,
        block: boolean,
        cells: MapCell[]
    }

    function doFov(x: number, y: number, playerX: number, playerY: number): FovSearchResult {
        const checkedCells: MapCell[] = []
        let vx = playerX - x
        let vy = playerY - y
        let ox = x
        let oy = y
        const l = Math.sqrt((x * x) + (y * y))
        vx = vx / l
        vy = vy / l

        let lightAmt = 1

        for (let i = 0; i < l; i++) {
            const cell = getCell(Math.floor(ox), Math.floor(oy))
            if (cell && cell.cellType.blockVision) {
                checkedCells.forEach(each => each.light = 0)
                lightAmt = 0
                checkedCells.push(cell)
            } else if (cell) {
                cell.light += lightAmt
                checkedCells.push(cell)
            }
            ox += vx
            oy += vy
        }
        
        const nearestWall = [...checkedCells].reverse().find(f => f.cellType.blockVision)
        if (nearestWall) {
            nearestWall.light = 1
            setCell(nearestWall)
        }
        return { visible: true, block: false, cells: checkedCells }
    }

    const cells: MapCell[] = []

    for (let i = y - viewRadius; i < y + viewRadius + 1; i++) {
        for (let j = x - viewRadius; j < x + viewRadius + 1; j++) {
            const cell = getCell(Math.floor(j), Math.floor(i))
            if (cell !== null) {
                const fovResult = doFov(Math.floor(j), Math.floor(i), x, y)

                if (cell.light > 0 && fovResult.visible) {
                    cells.push(cell)
                }
            }
            setCell(cell)
        }
    }

    function checkCardinal(x: number, y: number) {
        const cell = getCell(x, y)
        if (cell?.cellType.blockVision) {
            cell.light = 1
            if (cells.filter(f => f.x === x && f.y === y).length === 0) {
                cells.push(cell)
            }
        }
    }

    checkCardinal(x + 1, y)
    checkCardinal(x + 1, y + 1)
    checkCardinal(x, y + 1)
    checkCardinal(x + 1, y - 1)
    checkCardinal(x - 1, y + 1)

    cells.forEach(cell => {
        setExplored(cell.x, cell.y)
    })
    return cells
}
