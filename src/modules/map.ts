import { randInt } from "./random"
import { ColorRGBA } from "./font"

export let width: number
export let height: number

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

export function Initialize(mapWidth: number, mapHeight: number) {
    mapCells = []

    width = mapWidth
    height = mapHeight

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

export function getCells(filterFn: GetCellsFilterFunction): MapCell[] {
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

export function getCell(x: number, y: number): MapCell {
    try {
        if (mapCells[y][x] === undefined) {
            return null
        }
        return {
            cellType: mapCells[y][x],
            x: x, y: y
        }
    } catch {}
    return null
}

export function setCell(x: number, y: number, cellType: CellType) {
    try {
        mapCells[y][x] = cellType
    } catch {}
}

export function fov(viewRadius: number, x: number, y: number): MapCell[] {
    function doFov(x: number, y: number, playerX: number, playerY: number): boolean {
        let vx = x - playerX
        let vy = y - playerY
        let ox = x + 0.5
        let oy = y + 0.5
        let l = Math.sqrt((x * x) + (y * y))
        vx = vx / l
        vy = vy / l

        for (let i =0; i < l; i++) {
            const cell = getCell(Math.floor(ox), Math.floor(oy))
            if (cell && cell.cellType.blockVision) {
                return false
            }
            ox += vx
            oy += vy
        }
        return true
    }

    const litCells: MapCell[] = []
    const halfRadius = viewRadius / 2
    for (let i = y - halfRadius; i < y + halfRadius; i++) {
        for (let j = x - halfRadius; j < x + halfRadius; j++) {
            const cell = getCell(Math.floor(j), Math.floor(i))
            if (cell !== null) {
                if (doFov(Math.floor(j), Math.floor(i), x, y)) {
                    litCells.push(cell)
                }
            }
        }
    }
    return litCells
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