import Rect from "./Rect";
/**
 * Helper class to store Glyph (font symbol/codenumber and image Rect location).
 */
declare class Glyph {
    codenumber: number;
    symbol: string;
    description: string;
    rect: Rect;
}
export default Glyph;
