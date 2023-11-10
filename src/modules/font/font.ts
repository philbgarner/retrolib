import defaultFont from './defaultFont.json'
import FontData from "./FontData"

var fonts = {
    default: {}
}

// function LoadDefaultFonts() {
//     fonts.default = LoadFromJSON(fontCodepage437)
// }

function LoadFromJSON(font : object) {
    try {
        let fontData = Object.assign(new FontData(), defaultFont)
        fontData.image = new Image()
        fontData.image.src = 'data:image/png;base64,' + fontData.imagedata
        return font
    } catch (e) {
        throw new Error(e)
    }
}