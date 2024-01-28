import { ColorRGBA } from "./font";
export type CellType = {
    name: string;
    group: string;
    colors: ColorRGBA[];
    bgColor: ColorRGBA;
    characters: string[];
    blockVision: boolean;
    blockMovement: boolean;
};
export type MapCell = {
    cellType: CellType;
    x: number;
    y: number;
};
export interface GenerateCellFunction {
    (cellTypes: CellType[], x: number, y: number): CellType;
}
export declare let generateCellFunction: GenerateCellFunction;
export declare function GenerateCell(cellTypes: CellType[], x: number, y: number): CellType;
export interface SelectCellTypesFunction {
    (x: number, y: number): CellType[];
}
export declare let selectCellTypes: SelectCellTypesFunction;
export declare function SelectCellTypes(x: number, y: number, selectFn?: SelectCellTypesFunction): CellType[];
export declare let mapCells: CellType[][];
export declare function Initialize(width: number, height: number): void;
export interface GetCellsFilterFunction {
    (cell: CellType): boolean;
}
export declare function GetCells(filterFn: GetCellsFilterFunction): MapCell[];
