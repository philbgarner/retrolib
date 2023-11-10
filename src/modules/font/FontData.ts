import Glyph from "./Glyph"

class FontData {
    cwidth: number
    cheight: number
    imagedata: string
    codepage: Array<Glyph>
    image: HTMLImageElement
}

export default FontData