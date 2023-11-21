import FontData from "./FontData";
export type ColorRGBA = {
    r: number;
    g: number;
    b: number;
    a: number;
};
declare function LoadDefaultFonts(): void;
declare function LoadFromJSON(font: object): FontData;
declare function Fonts(): FontData[];
declare function HexToRgba(hex: string): ColorRGBA;
declare function RgbaToHex(rgb: ColorRGBA): string;
declare function ColorLerp(color1: any, color2: any, t: any): ColorRGBA;
declare function ImageToBase64(img: HTMLImageElement, outputFormat?: string): any;
/**
 * Loads bitmap from path (string param type) or uses Image to get the base64 image data and build a precompiled font JSON object.
 * @param bitmap
 * @param max_y
 * @param cw Character width.
 * @param ch Character height.
 * @returns
 */
declare function CodepageAndBitmaptoJSON(bitmap: any, max_y: number, cw: number, ch: number): Promise<unknown>;
export { LoadFromJSON, LoadDefaultFonts, Fonts, ColorLerp, RgbaToHex, HexToRgba, ImageToBase64, CodepageAndBitmaptoJSON };
