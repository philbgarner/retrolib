import { createCanvas, Image as canvasImage } from 'canvas'
import fs from 'fs'
import fontCodepage437 from './fonts/default.json' assert {type: 'json'}
import codelist from './codepage.js'

let fonts = {}

function LoadDefaultFonts() {
    fonts.default = LoadFromJSON(fontCodepage437)
}

function Fonts(name) {
    if (Object.keys(fonts).length === 0) {
        LoadDefaultFonts()
    }
    if (!name) {
        return fonts
    } else {
        return fonts[name]
    }
}

let canvasEl = null

function base64(file) {
    let contents = fs.readFileSync(file)
    return Buffer.from(contents).toString('base64')
}

function ColourLerpRgb(colour1, colour2, t) {
    return {
        r: parseInt(colour1.r + (colour2.r - colour1.r) * t),
        g: parseInt(colour1.g + (colour2.g - colour1.g) * t),
        b: parseInt(colour1.b + (colour2.b - colour1.b) * t),
        a: colour1.a
    }
}

function HexToRgba(hex) {
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

function RgbaToHex(rgb) {
    let r = parseInt(rgb.r).toString(16)
    let g = parseInt(rgb.g).toString(16)
    let b = parseInt(rgb.b).toString(16)
    let a = parseInt(rgb.a).toString(16)
    
    r = r.length === 1 ? '0' + r : r
    g = g.length === 1 ? '0' + g : g
    b = b.length === 1 ? '0' + b : b
    a = a.length === 1 ? '0' + a : a
    return `#${r}${g}${b}${a}`
}

function Generate437(fileOut) {
    CodepageAndBitmaptoJSON('./fonts/Codepage-437.png').then((data) => {
        fs.writeFileSync(fileOut, JSON.stringify(data))
    })
}

function GenerateBlankCodepage(fileIn, max_y) {
    CodepageAndBitmaptoJSON('./src/fonts/' + fileIn, max_y).then((data) => {
        let file = fileIn.split('.')
        fs.writeFileSync(file[0] + '.json', JSON.stringify(data))
    })
}

function ImageToBase64(img, outputFormat) {
    let canvas
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
 * @param {string|Image} bitmap 
 * @param {int} max_y 
 * @param {int} cw Character width. 
 * @param {int} ch Character height.
 * @returns 
 */
function CodepageAndBitmaptoJSON(bitmap, max_y, cw, ch) {
    return new Promise((resolve, reject) => {
        try {
            let sx = 0      // Source X
            let sy = 0      // Source Y
            cw = cw ? cw : 9      // Character Width
            ch = ch ? ch : 16     // Character Height

            let codepage = []
            let imagedata
            let image = new Image()
            if (typeof bitmap === 'string') {
                imagedata = base64(bitmap)
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

function CalculateTextHeight(text, font) {
    try {
        if (text.length === 0) {
            return 0
        }
        text = text.split('\n')
        return text.length * font.cheight
    } catch { return 0 }
}

function CalculateTextWidth(text, font) {
    try {
        if (text.length === 0) {
            return 0
        }
        let maxw = 0
        text = text.split('\n')
        for (let t in text) {
            let txt = text[t]
            let linewidth = 0
            for (let char = 0; char < txt.length; char++) {
                let glyph = font.codepage.filter(f => f.codenumber === txt.charCodeAt(char))
                var rect = glyph.length > 0 ? glyph[0].rect : null
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
 * @param {string} colour Colour to use (white if undefined).
 * @param {object} font Font to use (default DOS codepage 437 font if undefined).
 * @param {object} effects Any effects and parameters to apply when rendering this text.
 */
function DrawText(ctx, x, y, text, colour, font, effects) {
    
    if (text.length === 0) {
        return { x: x, y: y, w: 0, h: 0 }
    }

    effects = effects ? effects : {}

    if (!font && Object.keys(fonts).length > 0) {
        font = fonts.default
    } else if (!font) {
        throw new Error('Font parameter empty and default fonts are not loaded.')
    }
    if (!colour) {
        colour = '#ffffffff'
    }

    if (!font || !font.codepage || !font.imagedata || !font.image || !font.cwidth || !font.cheight) {
        throw new Error('Invalid font or font not loaded.')
    }

    let textwidth = CalculateTextWidth(text, font)//font.cwidth * text.length
    let textheight = CalculateTextHeight(text, font)

    if (typeof text === 'number') {
        textwidth = font.cwidth
    }

    if (!canvasEl) {
        try {
            canvasEl = document.createElement('canvas')
        } catch {
            canvasEl = createCanvas(textwidth, textheight)
        }
    }
    canvasEl.width = textwidth
    canvasEl.height = textheight
    let fontctx = canvasEl.getContext('2d')
    fontctx.clearRect(0, 0, textwidth, textheight)
    
    let dx = 0
    let maxdx = 0
    if (typeof text === 'number') {
        let glyph = font.codepage.filter(f => f.codenumber === text)
        var rect = glyph.length > 0 ? glyph[0].rect : null
        if (rect) {
            fontctx.drawImage(font.image, rect.x, rect.y, rect.w, rect.h, dx, 0, rect.w, rect.h)
            dx += rect.w
        } else {
            console.log('Error finding value in codepage for', text)
            return
        }
    } else {
        let rows = text.split('\n')
        let dy = 0
        for (let r in rows) {
            let txt = rows[r]
            for (let t in txt) {
                let glyph = font.codepage.filter(f => f.symbol === txt[t])
                if (glyph.length === 0) {
                    glyph = font.codepage.filter(f => f.codenumber === txt[t].charCodeAt(0))
                }
                var rect = glyph.length > 0 ? glyph[0].rect : null
                if (rect) {
                    fontctx.drawImage(font.image, rect.x, rect.y, rect.w, rect.h, dx, dy, rect.w, rect.h)
                    dx += rect.w
                } else {
                    console.log('Error finding value in codepage for', txt[t], `(${txt[t].charCodeAt(0)})`)
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
    if (textwidth > 0) {
        try {
            var imageData = fontctx.getImageData(0, 0, textwidth, textheight)
        } catch {
            console.log('Error getting image data:', textwidth, textheight)
            return
        }
        var pixels = imageData.data

        let colr = HexToRgba(colour)
        for (let py = 0; py < textheight; py++) {
            for (let px = 0; px < textwidth; px++) {
                let pixel = GetPixelAtRgba(pixels, px, py, textwidth, textheight)
                if (Object.keys(effects).length > 0) {
                    let setDefaultPixel = true
                    if (effects.gradient && pixel && pixel.a > 0) {
                        let vertical = effects.gradient.horizontal ? false : true
                        let t = vertical ? py / textheight : px / textwidth
                        let gradientColour = HexToRgba(effects.gradient.colour ? effects.gradient.colour : '#ffffffff')
                        let lerpColr = ColourLerpRgb(colr, gradientColour, t)
                        SetPixelAtRgba(pixels, RgbaToHex(lerpColr), px, py, textwidth, textheight)
                        setDefaultPixel = false
                    }
                    if (pixel && pixel.a > 0 && setDefaultPixel) {
                        SetPixelAtRgba(pixels, colour, px, py, textwidth, textheight)
                    }
                } else {
                    if (pixel && pixel.a > 0) {
                        SetPixelAtRgba(pixels, colour, px, py, textwidth, textheight)
                    }
                }
            }
        }

        fontctx.clearRect(0, 0, textwidth, textheight)
        if (effects.background) {
            ctx.fillStyle = effects.background.colour
            ctx.fillRect(x, y, textwidth, textheight)
        }
        fontctx.putImageData(imageData, 0, 0)
        ctx.drawImage(canvasEl, 0, 0, textwidth, textheight, x, y, textwidth, textheight)
    }
    return { x: x, y: y, w: textwidth, h: textheight }
}

function SetPixelAtRgba(pixels, colour, x, y, pixelswidth, pixelsheight) {
    colour = HexToRgba(colour ? colour : '#00000000')
    let offset = (x + pixelswidth * y) * 4
    if (offset < 0 || offset >= pixels.length) {
        return false
    }
    pixels[offset] = colour.r
    pixels[offset + 1] = colour.g
    pixels[offset + 2] = colour.b
    pixels[offset + 3] = colour.a
    
    return true
}

function GetPixelAtRgba(pixels, x, y, pixelswidth, pixelsheight) {
    let offset = (x + pixelswidth * y) * 4
    if (offset < 0 || offset >= pixels.length) {
        return false
    }
    return { r: pixels[offset], g: pixels[offset + 1], b: pixels[offset + 2], a: pixels[offset + 3] }
}

function LoadFromJSON(font) {
    try {
        if (typeof font === 'string') {
            font = JSON.parse(font)
        }
        
        try {
            font.image = new canvasImage()
        } catch {
            font.image = new Image()
        }
        font.image.src = 'data:image/png;base64,' + font.imagedata
        return font
    } catch (e) {
        throw new Error(e)
    }
}

function LoadFromFile(filename) {
    try {
        let data = fs.readFileSync(filename).toString()
        return LoadFromJSON(data)
    } catch (e) {
        reject(e)
    }
}

export { DrawText, LoadFromJSON, LoadFromFile, Generate437, LoadDefaultFonts, Fonts, GenerateBlankCodepage, CodepageAndBitmaptoJSON, ImageToBase64, CalculateTextWidth, CalculateTextHeight }