import { randInt } from "./random"
import { ColorRGBA } from "./font"

export let width: number
export let height: number

function degreesToRads (deg) {
    return (deg * Math.PI) / 180.0
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
    visible: number,
    explored: boolean,
    x: number
    y: number
}

export interface GenerateCellFunction {
    (cellTypes: CellType[], x: number, y: number): CellType
}

export let generateCellFunction: GenerateCellFunction = (cellTypes: CellType[], x: number, y: number): CellType => {
    const cellType: CellType = cellTypes[randInt(0, cellTypes.length - 1)]
    return { name: cellType.name, group: cellType.group, colors: cellType.colors, bgColor: cellType.bgColor, characters: cellType.characters, blockMovement: cellType.blockMovement, blockVision: cellType.blockVision }
}

export function GenerateCell(cellTypes: CellType[], x: number, y: number): CellType {
    return generateCellFunction(cellTypes, x, y)
}

export interface SelectCellTypesFunction {
    (x: number, y: number): CellType[]
}

export let selectCellTypes: SelectCellTypesFunction = (x: number, y: number): CellType[] => {
    return [{ name: `Empty (${x},${y})`, group: '', colors: [{ r: 128, g: 128, b: 128, a: 128 }], bgColor: null, characters: [','], blockMovement: false, blockVision: false }]
}

export function clearMap() {

}

export function SelectCellTypes(x: number, y: number, selectFn?: SelectCellTypesFunction): CellType[] {
    if (selectFn) {
        return selectFn(x, y)
    }
    return selectCellTypes(x, y)
}

export let mapCells: MapCell[][] = []

export function Initialize(mapWidth: number, mapHeight: number) {
    mapCells = []

    width = mapWidth
    height = mapHeight

    for (let y = 0; y < height; y++) {
        let cols: MapCell[] = []
        for (let x = 0; x < width; x++) {
            cols.push({
                cellType: GenerateCell(SelectCellTypes(x, y), x, y),
                x: x, y: y,
                visible: 0, explored: false
            })
        }
        mapCells.push(cols)
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

export function fov(viewRadius: number, x: number, y: number): MapCell[] {
    x = x + (viewRadius % 2 === 1 ? 1 : 0)
    y = y + (viewRadius % 2 === 1 ? 1 : 0)

    type FovSearchResult = {
        visible: boolean,
        block: boolean,
        cells: MapCell[]
    }

    function doFov(x: number, y: number, playerX: number, playerY: number): FovSearchResult {
        let checkedCells: MapCell[] = []
        let vx = playerX - x
        let vy = playerY - y
        let ox = x + 0.5
        let oy = y + 0.5
        let l = Math.sqrt((x * x) + (y * y))
        vx = vx / l
        vy = vy / l

        for (let i = 0; i < l; i++) {
            const cell = getCell(Math.floor(ox), Math.floor(oy))
            if (cell && cell.cellType.blockVision) {
                cell.visible++
                return { visible: true, block: true, cells: checkedCells }
            } else if (cell && !cell.cellType.blockVision) {
                cell.visible++
                checkedCells.push(cell)
            }
            ox += vx
            oy += vy
        }
        return { visible: true, block: false, cells: checkedCells }
    }

    const cells = []

    for (let i = y - viewRadius; i < y + viewRadius; i++) {
        for (let j = x - viewRadius; j < x + viewRadius; j++) {
            const cell = getCell(Math.floor(j), Math.floor(i))
            if (cell !== null) {
                cell.visible = 0
                const fovResult = doFov(Math.floor(j), Math.floor(i), x, y)
                if (fovResult.visible) {
                    cell.visible++
                }
                if (fovResult.block) {
                    cell.visible = 0
                }
                
                if (cell.visible > 0) {
                    cells.push(cell)
                }
            }
            setCell(cell)
        }
    }

    return cells
}
