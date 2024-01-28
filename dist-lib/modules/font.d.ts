import FontData from "./FontData";
import Rect from "./rect";
/**
 * RGBA colour representation.
 */
export type ColorRGBA = {
    r: number;
    g: number;
    b: number;
    a: number;
};
declare function loadDefaultFonts(): void;
declare function loadFromJSON(fontJson: object): FontData;
declare function fonts(): FontData[];
declare function hexToRgba(hex: string): ColorRGBA;
declare function rgbaToHex(rgb: ColorRGBA): string;
declare function colorLerp(color1: ColorRGBA, color2: ColorRGBA, t: number): ColorRGBA;
declare function imageToBase64(img: HTMLImageElement, outputFormat?: string): string;
/**
 * Get base64 image data and build a precompiled font JSON object.
 * @param imageName
 * @param max_y
 * @param cw Character width.
 * @param ch Character height.
 * @returns
 */
declare function codepageAndBitmaptoJSON(imageName: string, max_y: number, cw: number, ch: number): Promise<unknown>;
declare function textHeight(text: string, font?: FontData): number;
declare function textWidth(text: string, font?: FontData): number;
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
 * @returns {Rect}
 */
export declare function drawTextCtx(context: CanvasRenderingContext2D, x: number, y: number, text: string, color: ColorRGBA, font?: FontData): Rect;
/**
 * Draws the specified text on the canvas.
 * @param x Left location for text.
 * @param y Top location for text.
 * @param text Text to be drawn on canvas.
 * @param color Colour to use (white if undefined).
 * @param font Font to use (default DOS codepage 437 font if undefined).
 * @returns Rect object with the x, y, width, height of the text drawn.
 */
declare function drawText(x: number, y: number, text: string, color: ColorRGBA, font?: FontData): Rect;
export declare function getCtx(): CanvasRenderingContext2D;
export declare function setCtx(context: CanvasRenderingContext2D): void;
export { loadFromJSON, loadDefaultFonts, fonts, colorLerp, rgbaToHex, hexToRgba, imageToBase64, codepageAndBitmaptoJSON, textHeight, textWidth, drawText };
