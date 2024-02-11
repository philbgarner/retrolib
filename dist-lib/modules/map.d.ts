import { ColorRGBA } from "./font";
export declare let width: number;
export declare let height: number;
export declare let mapCells: MapCell[][];
export declare let exploredCells: boolean[][];
export declare let exploredCellCache: MapCell[];
export declare let voronoiCells: VoronoiCell[][];
export declare let edges: EdgeCoordinate[];
export declare let corners: EdgeCoordinate[];
export declare let middles: VoronoiCoordinate[];
export declare let voronoiRegions: VoronoiRegion[];
export type VoronoiCoordinate = {
    id: number;
    x: number;
    y: number;
};
export type EdgeCoordinate = {
    id: number;
    x: number;
    y: number;
    neighbouringRegions: number[];
};
export type VoronoiRegion = {
    id: number;
    coords: VoronoiCoordinate;
    edges: EdgeCoordinate[];
    corners: EdgeCoordinate[];
    neighbours: number[];
    middles: VoronoiCoordinate[];
};
export type VoronoiCell = {
    voronoiId: number;
    distance: number;
};
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
    light: number;
    x: number;
    y: number;
};
export interface GenerateCellFunction {
    (cellTypes: CellType[], x: number, y: number): CellType;
}
export declare let generateCellFunction: GenerateCellFunction;
export declare function setGenerateCellFunction(generateFn: GenerateCellFunction): void;
export declare function GenerateCell(cellTypes: CellType[], x: number, y: number): CellType;
export interface SelectCellTypesFunction {
    (x: number, y: number): CellType[];
}
/**
 * Default function for selecting the palette of cell types to pass to the generator.
 * @param x
 * @param y
 * @returns
 */
export declare let selectCellTypes: SelectCellTypesFunction;
export declare function distance(x1: number, y1: number, x2: number, y2: number): number;
export declare function GenerateCellsDungeonBSP(minWidth: number, minHeight: number, wallCellType?: CellType): void;
export declare function getVCell(x: number, y: number): VoronoiCell;
/**
 * Calculate voronoi regions and populate the map based on the locations of region cells.
 * @param voronoiPointCoords Array of centre-points for each region to calculate.
 * @param voronoiPointGroups Group filter(s) to use from cell types palette for each region (Array position corresponds with coord index in first parameter). Multiple group filters separated by commas.
 * @param voronoiCellTypes Palette of cell types to use in the generator. Group property allows selecting certain cell types based on voronoi region.
 */
export declare function GenerateCellsVoronoi(width: number, height: number, voronoiPointCoords: VoronoiCoordinate[], voronoiPointGroups: string[], voronoiCellTypes: CellType[]): void;
export declare function getRegion(id: number): VoronoiRegion;
export declare function clearMap(): void;
export declare function SelectCellTypes(x: number, y: number, selectFn?: SelectCellTypesFunction): CellType[];
export declare function Initialize(mapWidth: number, mapHeight: number, selectCellTypesFunction?: SelectCellTypesFunction): void;
export interface GetCellsFilterFunction {
    (cell: CellType): boolean;
}
export declare function getCells(filterFn: GetCellsFilterFunction): MapCell[];
export declare function getCell(x: number, y: number): MapCell;
export declare function setCell(mapCell: MapCell): void;
export declare function setExplored(x: number, y: number): void;
export declare function isExplored(x: number, y: number): boolean;
export declare function getExploredCells(): MapCell[];
export declare function fov(viewRadius: number, x: number, y: number): MapCell[];
