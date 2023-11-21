import defaultFont from './defaultFont.json'
import FontData from "./FontData"
import fontCodepage437 from './fonts/default.json'
import codelist from './codepage.js'
import { createCanvas, Image as canvasImage } from 'canvas'

import { getImage } from './images'

export type ColorRGBA = {
    r: number,
    g: number,
    b: number,
    a: number
}

const fonts = {
    default: {}
}

function LoadDefaultFonts() {
    fonts.default = LoadFromJSON(defaultFont)
}

function LoadFromJSON(font : object): FontData {
    try {
        const fontData = Object.assign(new FontData(), font)
        fontData.image = new Image()
        fontData.image.src = 'data:image/png;base64,' + fontData.imagedata
        return fontData
    } catch (e) {
        throw new Error(e)
    }
}

function Fonts(): FontData[] {
    if (Object.keys(fonts).length === 0) {
        LoadDefaultFonts()
    }
    return Object.keys(fonts).map(m => fonts[m])
}

function HexToRgba(hex: string): ColorRGBA {
    if (hex.length === 7) {
        hex += 'ff'
    } else if (hex.length === 8) {
        hex += '0'
    }
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
      a: parseInt(result[4], 16)
    } : null;
  }

function RgbaToHex(rgb: ColorRGBA): string {
    let r = rgb.r.toString(16)
    let g = rgb.g.toString(16)
    let b = rgb.b.toString(16)
    let a = rgb.a.toString(16)
    
    r = r.length === 1 ? '0' + r : r
    g = g.length === 1 ? '0' + g : g
    b = b.length === 1 ? '0' + b : b
    a = a.length === 1 ? '0' + a : a
    return `#${r}${g}${b}${a}`
}

function ColorLerp(color1, color2, t): ColorRGBA {
    return {
        r: parseInt(color1.r + (color2.r - color1.r) * t),
        g: parseInt(color1.g + (color2.g - color1.g) * t),
        b: parseInt(color1.b + (color2.b - color1.b) * t),
        a: color1.a
    }
}

function ImageToBase64(img: HTMLImageElement, outputFormat?: string) {
    let canvas: any = null
    outputFormat = outputFormat ? outputFormat : 'image/png'
    try {
        canvas = document.createElement('canvas')
    } catch {
        canvas = createCanvas(img.width, img.height)
    }
    let contx = canvas.getContext('2d');
    canvas.height = img.height
    canvas.width = img.width
    contx.drawImage(img, 0, 0)
    let data = canvas.toDataURL(outputFormat)
    let index = data.indexOf(';base64,') + ';base64,'.length
    return data.slice(index)
  }


/**
 * Loads bitmap from path (string param type) or uses Image to get the base64 image data and build a precompiled font JSON object.
 * @param bitmap 
 * @param max_y 
 * @param cw Character width. 
 * @param ch Character height.
 * @returns 
 */
function CodepageAndBitmaptoJSON(bitmap: any, max_y: number, cw: number, ch: number) {
    return new Promise((resolve, reject) => {
        try {
            let sx = 0      // Source X
            let sy = 0      // Source Y
            cw = cw ? cw : 9      // Character Width
            ch = ch ? ch : 16     // Character Height

            let codepage = []
            let imagedata = null
            let image = new Image()
            if (typeof bitmap === 'string') {
                imagedata = ImageToBase64(getImage(bitmap))
                image.src = 'data:image/png;base64,' + imagedata
            } else {
                image = bitmap
                imagedata = ImageToBase64(image)
            }
            max_y = max_y ? max_y : image.height
        
            for (let code = 0; code < 256; code++) {
                let codeitem = codelist.filter(f => f.codenumber === code)
                if (codeitem.length > 0) {
                    codeitem[0].rect = undefined // { x: sx, y: sy, w: cw, h: ch } //TODO: Make this a parameter to control whether we auto-generate rects
                    codepage.push(codeitem[0])
                }
                sx += cw
                if (sx >= image.width) {
                    sx = 0
                    if (max_y && sy + ch < max_y) {
                        sy += ch
                    }
                }
                
                if (sy >= image.height) {
                    sy = 0
                }
            }
            resolve({cwidth: cw, cheight: ch, codepage: codepage, imagedata: imagedata})
        }
        catch (e) {
            reject(e)
        }
    })
}

export { LoadFromJSON, LoadDefaultFonts, Fonts,
            ColorLerp, RgbaToHex, HexToRgba,
            ImageToBase64, CodepageAndBitmaptoJSON
        }