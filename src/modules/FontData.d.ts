import Glyph from "./Glyph";
declare class FontData {
    cwidth: number;
    cheight: number;
    imagedata: string;
    codepage: Glyph[];
    image: HTMLImageElement;
}
export default FontData;
