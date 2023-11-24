import FontData from "./FontData"
import fontCodepage437 from './fonts/default.json'
import codelist from './codepage'
//import { createCanvas, Canvas } from 'canvas'
import { gameCanvas } from '../retrolib'

import { getImage } from './images'
import Rect from "./Rect"

export type ColorRGBA = {
    r: number,
    g: number,
    b: number,
    a: number
}

const fonts: FontData[] = []
function LoadDefaultFonts(): void {
    const loadedFont: FontData = LoadFromJSON(fontCodepage437)
    if (loadedFont) {
        fonts.push(loadedFont)
    }
}

function LoadFromJSON(fontJson : object): FontData {
    try {
        const fontData = Object.assign(new FontData(), fontJson)
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
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
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

function ColorLerp(color1: ColorRGBA, color2: ColorRGBA, t: number): ColorRGBA {
    return {
        r: Math.floor(color1.r + (color2.r - color1.r) * t),
        g: Math.floor(color1.g + (color2.g - color1.g) * t),
        b: Math.floor(color1.b + (color2.b - color1.b) * t),
        a: color1.a
    }
}

function ImageToBase64(img: HTMLImageElement, outputFormat?: string) {
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
 * Loads bitmap from path (string param type) or uses Image to get the base64 image data and build a precompiled font JSON object.
 * @param imageName 
 * @param max_y 
 * @param cw Character width. 
 * @param ch Character height.
 * @returns 
 */
function CodepageAndBitmaptoJSON(imageName: string, max_y: number, cw: number, ch: number) {
    return new Promise((resolve, reject) => {
        try {
            let sx = 0      // Source X
            let sy = 0      // Source Y
            cw = cw ? cw : 9      // Character Width
            ch = ch ? ch : 16     // Character Height

            const codepage = []
            let imagedata = null
            const image = new Image()
            imagedata = ImageToBase64(getImage(imageName))
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


function TextHeight(text: string, font: FontData) {
    try {
        if (text.length === 0) {
            return 0
        }
        const txt: string[] = text.split('\n')
        return txt.length * font.cheight
    } catch { return 0 }
}

function TextWidth(text: string, font: FontData) {
    try {
        if (text.length === 0) {
            return 0
        }
        let maxw = 0
        const txt = text.split('\n')
        for (const index in txt) {
            const txt = text[index]
            let linewidth = 0
            for (let char = 0; char < txt.length; char++) {
                const glyph = font.codepage.filter(f => f.codenumber === txt.charCodeAt(char))
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
 * @param {object} ctx 2d context from canvas element.
 * @param {number} x Left location for text.
 * @param {number} y Top location for text
 * @param {string} text Text to be drawn on canvas.
 * @param {string} color Colour to use (white if undefined).
 * @param {object} font Font to use (default DOS codepage 437 font if undefined).
 * @param {object} effects Any effects and parameters to apply when rendering this text.
 */
function DrawText(ctx: CanvasRenderingContext2D, x: number, y: number, text: string, color: ColorRGBA, font: FontData/*, effects: object*/): Rect {
    
    if (text.length === 0) {
        return { x: x, y: y, w: 0, h: 0 }
    }

    //effects = effects ? effects : {}

    if (!font && fonts.length > 0) {
        font = fonts[0]
    } else if (!font || fonts.length === 0) {
        throw new Error('Font parameter empty and default fonts are not loaded.')
    }
    if (!color) {
        color = HexToRgba('#ffffffff')
    }

    if (!font || !font.codepage || !font.imagedata || !font.image || !font.cwidth || !font.cheight) {
        throw new Error('Invalid font or font not loaded.')
    }

    let textwidth = TextWidth(text, font)//font.cwidth * text.length
    const textheight = TextHeight(text, font)

    if (typeof text === 'number') {
        textwidth = font.cwidth
    }

    gameCanvas.width = textwidth
    gameCanvas.height = textheight
    const fontctx = gameCanvas.getContext('2d')
    fontctx.clearRect(0, 0, textwidth, textheight)
    
    let dx = 0
    let maxdx = 0
    if (typeof text === 'number') {
        const glyph = font.codepage.filter(f => f.codenumber === text)
        const rect = glyph.length > 0 ? glyph[0].rect : null
        if (rect) {
            fontctx.drawImage(font.image, rect.x, rect.y, rect.w, rect.h, dx, 0, rect.w, rect.h)
            dx += rect.w
        } else {
            console.log('Error finding value in codepage for', text)
            return
        }
    } else {
        const rows = text.split('\n')
        let dy = 0
        for (const rowIndex in rows) {
            const txt = rows[rowIndex]
            for (let index = 0; index < txt.length; index++) {
                let glyph = font.codepage.filter(f => f.symbol === txt[index])
                if (glyph.length === 0) {
                    glyph = font.codepage.filter(f => f.codenumber === txt[index].charCodeAt(0))
                }
                const rect = glyph.length > 0 ? glyph[0].rect : null
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
                const pixel = GetPixelAtRgba(pixels, px, py, textwidth)
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
                        SetPixelAtRgba(pixels, color, px, py, textwidth)
                    }
                // }
            }
        }

        fontctx.clearRect(0, 0, textwidth, textheight)
        // if (effects.background) {
        //     ctx.fillStyle = effects.background.colour
        //     ctx.fillRect(x, y, textwidth, textheight)
        // }
        fontctx.putImageData(imageData, 0, 0)
        ctx.drawImage(gameCanvas, 0, 0, textwidth, textheight, x, y, textwidth, textheight)
    }
    return { x: x, y: y, w: textwidth, h: textheight }
}

function SetPixelAtRgba(pixels: Uint8ClampedArray, color: ColorRGBA, x: number, y: number, pixelswidth: number) {
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

function GetPixelAtRgba(pixels: Uint8ClampedArray, x: number, y: number, pixelswidth: number): ColorRGBA {
    const offset = (x + pixelswidth * y) * 4
    if (offset < 0 || offset >= pixels.length) {
        return null
    }
    return { r: pixels[offset], g: pixels[offset + 1], b: pixels[offset + 2], a: pixels[offset + 3] }
}

export { LoadFromJSON, LoadDefaultFonts, Fonts,
            ColorLerp, RgbaToHex, HexToRgba,
            ImageToBase64, CodepageAndBitmaptoJSON,
            TextHeight, TextWidth,
            DrawText
        }