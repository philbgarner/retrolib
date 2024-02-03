import { randInt } from "./random"
import { ColorRGBA } from "./font"

export let width: number
export let height: number
export let mapCells: MapCell[][] = []
export let exploredCells: boolean[][] = []

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

export let generateCellFunction: GenerateCellFunction = (cellTypes: CellType[], x: number, y: number): CellType => {
    const cellType: CellType = cellTypes[randInt(0, cellTypes.length)]
    return { name: cellType.name, group: cellType.group, colors: cellType.colors, bgColor: cellType.bgColor, characters: cellType.characters, blockMovement: cellType.blockMovement, blockVision: cellType.blockVision }
}

export function GenerateCell(cellTypes: CellType[], x: number, y: number): CellType {
    return generateCellFunction(cellTypes, x, y)
}

export interface SelectCellTypesFunction {
    (x: number, y: number): CellType[]
}

export let selectCellTypes: SelectCellTypesFunction = (x: number, y: number): CellType[] => {
    return [
            { name: 'Block Wall', group: 'walls', colors: [{ r: 255, g: 255, b: 255, a: 255}], bgColor: null, characters: ['#'], blockVision: true, blockMovement: true },
            { name: `Stones.`, group: 'floors', colors: [{ r: 128, g: 128, b: 128, a: 128 }], bgColor: null, characters: [',', '.'], blockMovement: false, blockVision: false }
        ]
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

export function Initialize(mapWidth: number, mapHeight: number) {
    mapCells = []
    exploredCells = []

    width = mapWidth
    height = mapHeight

    for (let y = 0; y < height; y++) {
        let cols: MapCell[] = []
        let expl: boolean[] = []
        for (let x = 0; x < width; x++) {
            cols.push({
                cellType: GenerateCell(SelectCellTypes(x, y), x, y),
                x: x, y: y,
                light: 0
            })
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
    mapCells.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
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
    } catch { }
    return null
}

export function setCell(mapCell: MapCell) {
    try {
        mapCells[mapCell.y][mapCell.x] = mapCell
    } catch { }
}

export function setExplored(x: number, y: number) {
    try {
        exploredCells[y][x] = true
    } catch { }
}

export function isExplored(x: number, y: number): boolean {
    try {
        return exploredCells[y][x]
    } catch { }
}

export function fov(viewRadius: number, x: number, y: number): MapCell[] {
    x = x + (viewRadius % 2 === 1 ? 0 : 1)
    y = y + (viewRadius % 2 === 1 ? 0 : 1)

    type FovSearchResult = {
        visible: boolean,
        block: boolean,
        cells: MapCell[]
    }

    function doFov(x: number, y: number, playerX: number, playerY: number): FovSearchResult {
        let checkedCells: MapCell[] = []
        let vx = playerX - x
        let vy = playerY - y
        let ox = x
        let oy = y
        let l = Math.sqrt((x * x) + (y * y))
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

    for (let i = y - viewRadius; i < y + viewRadius; i++) {
        for (let j = x - viewRadius; j < x + viewRadius; j++) {
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
        const cell = getCell(x, y - 1)
        if (cell?.cellType.blockVision) {
            cell.light = 1
            cells.push(cell)
        }
    }

    checkCardinal(x, y + 1)
    checkCardinal(x + 1, y)
    checkCardinal(x - 1, y)
    checkCardinal(x, y - 1)
    checkCardinal(x + 1, y + 1)
    checkCardinal(x + 1, y - 1)
    checkCardinal(x - 1, y + 1)
    checkCardinal(x - 1, y - 1)

    cells.forEach(cell => {
        setExplored(cell.x, cell.y)
    })
    return cells
}
