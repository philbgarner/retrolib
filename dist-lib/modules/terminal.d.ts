import { FontData } from '../retrolib';
import { ColorRGBA } from './font';
export declare function setChangeTimestamp(): void;
export type TerminalCell = {
    x: number;
    y: number;
    color: ColorRGBA;
    bgColor: ColorRGBA;
    character: string;
};
export declare let cellData: TerminalCell[][];
export declare let emptyCellData: TerminalCell[][];
export declare function setTerminalBackground(color: ColorRGBA): void;
export declare function Draw(): void;
export declare function setCell(x: number, y: number, character: string, color: ColorRGBA, bgColor: ColorRGBA): void;
export declare function setCells(startX: number, startY: number, text: string, color: ColorRGBA | ColorRGBA[], bgColor: ColorRGBA): void;
export declare function setRect(x: number, y: number, w: number, h: number, color: ColorRGBA): void;
export declare function getCell(x: number, y: number): TerminalCell;
export declare enum BoxBorder {
    None = 0,
    Single = 1,
    Double = 2
}
export declare function drawBox(x: number, y: number, w: number, h: number, color: ColorRGBA, bgColor: ColorRGBA, borderStyle?: BoxBorder): void;
export declare function drawTitleBox(title: string, x: number, y: number, w: number, h: number, color: ColorRGBA, bgColor: ColorRGBA, borderStyle?: BoxBorder): void;
export declare function Initialize(): void;
export declare function clear(): void;
export declare function Dispose(): void;
export declare function setFont(fontData: FontData): void;
export declare function getFont(): FontData;
export declare function columnsCount(): number;
export declare function rowsCount(): number;
export declare function terminalWidth(width: number): number;
export declare function terminalHeight(height: number): number;
