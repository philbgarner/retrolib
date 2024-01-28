import { randInt } from "./random"
import { ColorRGBA } from "./font"

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
    return [{ name: `Empty (${x},${y})`, group: '', colors: [{ r: 128, g: 128, b: 128, a: 128 }], bgColor: null, characters: ['.', ','], blockMovement: false, blockVision: false }]
}

export function SelectCellTypes(x: number, y: number, selectFn?: SelectCellTypesFunction): CellType[] {
    if (selectFn) {
        return selectFn(x, y)
    }
    return selectCellTypes(x, y)
}

export let mapCells: CellType[][] = []

export function Initialize(width: number, height: number) {
    mapCells = []

    for (let y = 0; y < height; y++) {
        let cols: CellType[] = []
        for (let x = 0; x < width; x++) {
            cols.push(GenerateCell(SelectCellTypes(x, y), x, y))
        }
        mapCells.push(cols)
    }
}

export interface GetCellsFilterFunction {
    (cell: CellType): boolean
}

export function GetCells(filterFn: GetCellsFilterFunction): MapCell[] {
    const cells: MapCell[] = []
    mapCells.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            if (filterFn(cell)) {
                cells.push({ cellType: cell, x: colIndex, y: rowIndex })
            }
        })
    })
    return cells
}