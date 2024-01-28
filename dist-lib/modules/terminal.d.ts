import { FontData } from '../retrolib';
import { ColorRGBA } from './font';
export type TerminalCell = {
    x: number;
    y: number;
    color: ColorRGBA;
    bgColor: ColorRGBA;
    character: string;
};
export declare let cellData: TerminalCell[][];
export declare let emptyCellData: TerminalCell[][];
export declare function Draw(): void;
export declare function setCell(x: number, y: number, character: string, color: ColorRGBA, bgColor: ColorRGBA): void;
export declare function setCells(startX: number, startY: number, text: string, color: ColorRGBA | ColorRGBA[], bgColor: ColorRGBA): void;
export declare function getCell(x: number, y: number): TerminalCell;
export declare function Initialize(): void;
export declare function Dispose(): void;
export declare function setFont(fontData: FontData): void;
export declare function getFont(): FontData;
export declare function columnsCount(): number;
export declare function rowsCount(): number;
export declare function terminalWidth(width: number): number;
export declare function terminalHeight(height: number): number;