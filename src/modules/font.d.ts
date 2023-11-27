import FontData from "./FontData";
import Rect from "./Rect";
export type ColorRGBA = {
    r: number;
    g: number;
    b: number;
    a: number;
};
declare function LoadDefaultFonts(): void;
declare function LoadFromJSON(fontJson: object): FontData;
declare function Fonts(): FontData[];
declare function HexToRgba(hex: string): ColorRGBA;
declare function RgbaToHex(rgb: ColorRGBA): string;
declare function ColorLerp(color1: ColorRGBA, color2: ColorRGBA, t: number): ColorRGBA;
declare function ImageToBase64(img: HTMLImageElement, outputFormat?: string): string;
/**
 * Get base64 image data and build a precompiled font JSON object.
 * @param imageName
 * @param max_y
 * @param cw Character width.
 * @param ch Character height.
 * @returns
 */
declare function CodepageAndBitmaptoJSON(imageName: string, max_y: number, cw: number, ch: number): Promise<unknown>;
declare function TextHeight(text: string, font?: FontData): number;
declare function TextWidth(text: string, font?: FontData): number;
/**
 * Draws the specified text on the canvas.
 *
 * @param {HTMLCanvasElement} ctx 2d context to draw text on.
 * @param {number} x Left location for text.
 * @param {number} y Top location for text
 * @param {string} text Text to be drawn on canvas.
 * @param {ColorRGBA} color Colour to use (white if undefined).
 * @param {FontData} font Font to use (default DOS codepage 437 font if undefined).
 * @param {object} effects Any effects and parameters to apply when rendering this text.
 */
declare function DrawText(ctx: CanvasRenderingContext2D, x: number, y: number, text: string, color: ColorRGBA, font?: FontData): Rect;
export { LoadFromJSON, LoadDefaultFonts, Fonts, ColorLerp, RgbaToHex, HexToRgba, ImageToBase64, CodepageAndBitmaptoJSON, TextHeight, TextWidth, DrawText };
