import defaultFont from './defaultFont.json'
import FontData from "./FontData"

const fonts = {
    default: {}
}

function LoadDefaultFonts() {
    fonts.default = LoadFromJSON(defaultFont)
}

function LoadFromJSON(font : object) {
    try {
        const fontData = Object.assign(new FontData(), font)
        fontData.image = new Image()
        fontData.image.src = 'data:image/png;base64,' + fontData.imagedata
        return font
    } catch (e) {
        throw new Error(e)
    }
}

export { LoadFromJSON, LoadDefaultFonts }