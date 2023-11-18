import defaultFont from './font/defaultFont.json'
import FontData from "./font/FontData"

var fonts = {
    default: {}
}

function LoadDefaultFonts() {
    fonts.default = LoadFromJSON(defaultFont)
}

function LoadFromJSON(font : object) {
    try {
        let fontData = Object.assign(new FontData(), font)
        fontData.image = new Image()
        fontData.image.src = 'data:image/png;base64,' + fontData.imagedata
        return font
    } catch (e) {
        throw new Error(e)
    }
}

export { LoadFromJSON, LoadDefaultFonts }