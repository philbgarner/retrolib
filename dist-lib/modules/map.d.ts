import { ColorRGBA } from "./font";
export declare let width: number;
export declare let height: number;
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
    visible: number;
    explored: boolean;
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
export declare function clearMap(): void;
export declare function SelectCellTypes(x: number, y: number, selectFn?: SelectCellTypesFunction): CellType[];
export declare let mapCells: MapCell[][];
export declare function Initialize(mapWidth: number, mapHeight: number): void;
export interface GetCellsFilterFunction {
    (cell: CellType): boolean;
}
export declare function getCells(filterFn: GetCellsFilterFunction): MapCell[];
export declare function getCell(x: number, y: number): MapCell;
export declare function setCell(mapCell: MapCell): void;
export declare function fov(viewRadius: number, x: number, y: number): MapCell[];
