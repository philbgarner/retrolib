import FontData from "./FontData"
import fontCodepage437 from './fonts/default.json'
import codelist from './codepage'
//import { createCanvas, Canvas } from 'canvas'
import { gameCanvas } from '../retrolib'

import { getImage } from './images'
import Rect from "./Rect"

let fontCanvas = null

export type ColorRGBA = {
    r: number,
    g: number,
    b: number,
    a: number
}

const fontList: FontData[] = []
function loadDefaultFonts(): void {
    const loadedFont: FontData = loadFromJSON(fontCodepage437)
    if (loadedFont) {
        fontList.push(loadedFont)
    }
}

function loadFromJSON(fontJson : object): FontData {
    try {
        const fontData = Object.assign(new FontData(), fontJson)
        fontData.image = new Image()
        fontData.image.src = 'data:image/png;base64,' + fontData.imagedata
        return fontData
    } catch (e) {
        throw new Error(e)
    }
}

function fonts(): FontData[] {
    if (Object.keys(fontList).length === 0) {
        loadDefaultFonts()
    }
    return Object.keys(fontList).map(m => fontList[m])
}

function hextToRgba(hex: string): ColorRGBA {
    if (hex.length === 7) {
        hex += 'ff'
    } else if (hex.length === 8) {
        hex += '0'
    }
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
      a: parseInt(result[4], 16)
    } : null;
  }

function rgbaToHex(rgb: ColorRGBA): string {
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

function colorLerp(color1: ColorRGBA, color2: ColorRGBA, t: number): ColorRGBA {
    return {
        r: Math.floor(color1.r + (color2.r - color1.r) * t),
        g: Math.floor(color1.g + (color2.g - color1.g) * t),
        b: Math.floor(color1.b + (color2.b - color1.b) * t),
        a: color1.a
    }
}

function imageToBase64(img: HTMLImageElement, outputFormat?: string) {
    outputFormat = outputFormat ? outputFormat : 'image/png'
    try {
        const canvas: HTMLCanvasElement = document.createElement('canvas')
        const contx = canvas.getContext('2d');
        canvas.height = img.height
        canvas.width = img.width
        contx.drawImage(img, 0, 0)
        const data = canvas.toDataURL(outputFormat)
        const index = data.indexOf(';base64,') + ';base64,'.length
        return data.slice(index)
    } catch {
        console.error('Cannot do this outside of the DOM yet.')
        /*
        const canvas: Canvas = createCanvas(img.width, img.height)
        const contx = canvas.getContext('2d');
        canvas.height = img.height
        canvas.width = img.width
        contx.drawImage(img, 0, 0)
        const data = canvas.toDataURL(outputFormat)
        const index = data.indexOf(';base64,') + ';base64,'.length
        return data.slice(index)*/
    }

  }


/**
 * Get base64 image data and build a precompiled font JSON object.
 * @param imageName 
 * @param max_y 
 * @param cw Character width. 
 * @param ch Character height.
 * @returns 
 */
function codepageAndBitmaptoJSON(imageName: string, max_y: number, cw: number, ch: number) {
    return new Promise((resolve, reject) => {
        try {
            let sx = 0      // Source X
            let sy = 0      // Source Y
            cw = cw ? cw : 9      // Character Width
            ch = ch ? ch : 16     // Character Height

            const codepage = []
            let imagedata = null
            const image = new Image()
            imagedata = imageToBase64(getImage(imageName))
            image.src = 'data:image/png;base64,' + imagedata
            max_y = max_y ? max_y : image.height
        
            for (let code = 0; code < 256; code++) {
                const codeitem = codelist.filter(f => f.codenumber === code)
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


function textHeight(text: string, font?: FontData) {
    if (!font && fontList.length > 0) {
        font = fontList[0]
    } else if (!font || fontList.length === 0) {
        throw new Error('Font parameter empty and default fonts are not loaded.')
    }
    try {
        if (text.length === 0) {
            return 0
        }
        const txt: string[] = text.split('\n')
        return txt.length * font.cheight
    } catch { return 0 }
}

function textWidth(text: string, font?: FontData) {
    if (!font && fontList.length > 0) {
        font = fontList[0]
    } else if (!font || fontList.length === 0) {
        throw new Error('Font parameter empty and default fonts are not loaded.')
    }
    try {
        if (text.length === 0) {
            return 0
        }
        let maxw = 0
        const txt = text.split('\n')
        for (const index in txt) {
            const line = txt[index]
            let linewidth = 0
            for (let char = 0; char < line.length; char++) {
                const glyph = font.codepage.filter(f => f.codenumber === line.charCodeAt(char))
                const rect = glyph.length > 0 ? glyph[0].rect : null
                if (rect) {
                    linewidth += rect.w
                } else {
                    linewidth += font.cwidth
                }
            }
            if (linewidth > maxw) {
                maxw = linewidth
            }
        }
        return maxw
    } catch { return 0 }
}


/**
 * Draws the specified text on the canvas.
 * 
 * @param {HTMLCanvasElement} ctx 2d context to draw text on.
 * @param {number} x Left location for text.
 * @param {number} y Top location for text
 * @param {string} text Text to be drawn on canvas.
 * @param {ColorRGBA} color Colour to use (white if undefined).
 * @param {FontData} font Font to use (default DOS codepage 437 font if undefined).
 * @param {object} effects Any effects and parameters to apply when rendering this text.
 */
function drawText(ctx: CanvasRenderingContext2D, x: number, y: number, text: string, color: ColorRGBA, font?: FontData/*, effects: object*/): Rect {
    
    if (typeof color === 'string') {
        color = hextToRgba(color)
    }

    if (text.length === 0) {
        return { x: x, y: y, w: 0, h: 0 }
    }
    
    //effects = effects ? effects : {}
    
    if (!font && fontList.length > 0) {
        font = fontList[0]
    } else if (!font || fontList.length === 0) {
        throw new Error('Font parameter empty and default fonts are not loaded.')
    }
    if (!color) {
        color = hextToRgba('#ffffffff')
    }
    
    if (!font || !font.codepage || !font.imagedata || !font.image || !font.cwidth || !font.cheight) {
        throw new Error('Invalid font or font not loaded.')
    }

    
    let textwidth = textWidth(text, font)
    const textheight = textHeight(text, font)

    if (!fontCanvas) {
        fontCanvas = document.createElement('canvas')
        fontCanvas.id = 'fontCanvas'
    }

    fontCanvas.width = textwidth
    fontCanvas.height = textheight
    const fontctx = fontCanvas.getContext('2d')
    fontctx.clearRect(0, 0, textwidth, textheight)
    
    let dx = 0
    let maxdx = 0

    const rows = text.split('\n')
    let dy = 0
    for (const rowIndex in rows) {
        const txt = rows[rowIndex]
        for (let index = 0; index < txt.length; index++) {
            const glyphs = font.codepage.filter(f => f.symbol === txt[index])
            let glyph = null
            if (glyphs.length === 0) {
                glyph = font.codepage.filter(f => f.codenumber === txt[index].charCodeAt(0))
            } else {
                glyph = glyphs[0]
            }
            const rect = glyph ? glyph.rect : null
            if (rect) {
                fontctx.drawImage(font.image, rect.x, rect.y, rect.w, rect.h, dx, dy, rect.w, rect.h)
                dx += rect.w
            } else {
                console.log('Error finding value in codepage for', txt[index], `(${txt[index].charCodeAt(0)})`)
            }
        }
        dy += font.cheight
        if (dx > maxdx) {
            maxdx = dx
        }
        dx = 0
    }
    textwidth = maxdx
    let imageData: ImageData = null
    if (textwidth > 0) {
        try {
            imageData = fontctx.getImageData(0, 0, textwidth, textheight)
        } catch {
            console.log('Error getting image data:', textwidth, textheight)
            return
        }
        const pixels: Uint8ClampedArray = imageData.data

        for (let py = 0; py < textheight; py++) {
            for (let px = 0; px < textwidth; px++) {
                const pixel = getPixelAtRgba(pixels, px, py, textwidth)
                // if (Object.keys(effects).length > 0) {
                //     let setDefaultPixel = true
                //     if (effects.gradient && pixel && pixel.a > 0) {
                //         const vertical = effects.gradient.horizontal ? false : true
                //         const lerpT = vertical ? py / textheight : px / textwidth
                //         const gradientColour: ColorRGBA = HexToRgba(effects.gradient.color)
                //         const lerpColr: ColorRGBA = ColorLerp(color, gradientColour, lerpT)
                //         SetPixelAtRgba(pixels, lerpColr, px, py, textwidth)
                //         setDefaultPixel = false
                //     }
                //     if (pixel && pixel.a > 0 && setDefaultPixel) {
                //         SetPixelAtRgba(pixels, color, px, py, textwidth)
                //     }
                // } else {
                    if (pixel && pixel.a > 0) {
                        setPixelAtRgba(pixels, color, px, py, textwidth)
                    }
                // }
            }
        }
        let newImageData = new ImageData(pixels, textwidth, textheight)

        fontctx.clearRect(0, 0, textwidth, textheight)
        // if (effects.background) {
        //     ctx.fillStyle = effects.background.colour
        //     ctx.fillRect(x, y, textwidth, textheight)
        // }
        fontctx.putImageData(newImageData, 0, 0)
        ctx.drawImage(fontCanvas, 0, 0, textwidth, textheight, x, y, textwidth, textheight)
    }
    return { x: x, y: y, w: textwidth, h: textheight }
}

function setPixelAtRgba(pixels: Uint8ClampedArray, color: ColorRGBA, x: number, y: number, pixelswidth: number) {
    const offset = (x + pixelswidth * y) * 4
    if (offset < 0 || offset >= pixels.length) {
        return false
    }
    pixels[offset] = color.r
    pixels[offset + 1] = color.g
    pixels[offset + 2] = color.b
    pixels[offset + 3] = color.a
    
    return true
}

function getPixelAtRgba(pixels: Uint8ClampedArray, x: number, y: number, pixelswidth: number): ColorRGBA {
    const offset = (x + pixelswidth * y) * 4
    if (offset < 0 || offset >= pixels.length) {
        return null
    }
    return { r: pixels[offset], g: pixels[offset + 1], b: pixels[offset + 2], a: pixels[offset + 3] }
}

export { loadFromJSON, loadDefaultFonts, fonts,
            colorLerp, rgbaToHex, hextToRgba,
            imageToBase64, codepageAndBitmaptoJSON,
            textHeight, textWidth,
            drawText
        }