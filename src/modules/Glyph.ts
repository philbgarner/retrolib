import Rect from "./Rect"

/**
 * Helper class to store Glyph (font symbol/codenumber and image Rect location).
 */
class Glyph {
    codenumber: number
    symbol: string
    description: string
    rect: Rect
}

export default Glyph