import Glyph from "./Glyph";
/**
 * Helper class to store font data.
 */
declare class FontData {
    cwidth: number;
    cheight: number;
    imagedata: string;
    codepage: Glyph[];
    image: HTMLImageElement;
}
export default FontData;
