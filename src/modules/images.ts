import ImageDefinition from "./ImageDefinition"
import Rect from "./Rect"

const images : Array<ImageDefinition> = []

/**
 * Populate images manifest with JSON list of definitions.
 * @param json JSON representation of image definitions.
 */
function imageManifestFromJSON(json: Array<object>): void {
    json.forEach(((def: object) => images.push(ImageDefinition.fromJSON(def))))
}
// Canvas 2d context.
var ctx: CanvasRenderingContext2D = null

// Set the canvas 2d context.
function setContext(context: CanvasRenderingContext2D): void {
    ctx = context
}

// Returns the canvas 2d context.
function getContext(): CanvasRenderingContext2D {
    return ctx
}

// Return loaded image object from the list.
function getImage(name: string): HTMLImageElement {
    let img = images.filter(f => f.name === name)
    return img.length > 0 ? img[0].image : null
}

// Returns the full list of image objects.
function getImages(): Array<ImageDefinition> {
    return images
}

/**
 * Draws an image at x,y coordinates on the canas.
 * @param {string} name 
 * @param {number} x 
 * @param {number} y 
 * @param {object} srcRect 
 * @param {boolean} flipped 
 */
function drawImage(name: string, x: number, y: number, srcRect: Rect, flipped: boolean): void {
    drawImageCtx(getContext(), name, x, y, srcRect, flipped)
}

/**
 * Raw image drawing function (use drawImage unless you want to draw to another 2d context).
 * @param {object} context Canvas 2d context.
 * @param {string} name 
 * @param {number} x 
 * @param {number} y 
 * @param {object} srcRect 
 * @param {boolean} flipped 
 */
function drawImageCtx(context: CanvasRenderingContext2D, name: string, x: number, y: number, srcRect: Rect, flipped: boolean): void {
    let img: ImageDefinition[] = images.filter(f => f.name === name)
    if (img.length > 0) {
        try {
            if (srcRect) {
                if (flipped) {
                    context.save()
                    context.scale(-1, 1)
                    context.drawImage(img[0].image, srcRect.x, srcRect.y, srcRect.w, srcRect.h, -x - srcRect.w, y, srcRect.w, srcRect.h)    
                    context.restore()
                } else {
                    context.drawImage(img[0].image, srcRect.x, srcRect.y, srcRect.w, srcRect.h, x, y, srcRect.w, srcRect.h)    
                }
            } else {
                if (flipped) {
                    context.save()
                    context.scale(-1, 1)
                    context.drawImage(img[0].image, x - srcRect.w, y, srcRect.w, srcRect.h)    
                    context.restore()
                } else {
                    context.drawImage(img[0].image, x, y)
                }
            }
        } catch {}
    }
}

/**
 * Load Image
 * @param {string} filename 
 * @returns 
 */
function loadImage(filename: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        let img: HTMLImageElement = new Image()
        img.onload = (e) => {
            resolve(img)
        }
        img.onerror = (e) => {
            console.error(`Failed to load file ${filename}:`, e)
            reject(null)
        }
        let image: ImageDefinition[] = images.filter(f => f.filename === filename)
        if (image.length > 0) {
            img.src = filename
        } else {
            console.error(`Image definition matching filename ${filename} not found.`)
            reject(null)
        }
    })
}

/**
 * Load all images in the images list.
 * @returns 
 */
function loadAllImages(): Promise<PromiseSettledResult<any>[]> {
    let promises: Promise<any>[] = []
    for (let i in images) {
        let image: ImageDefinition = images[i]
        promises.push(new Promise((resolve, reject) => loadImage(image.filename).then(r => {
            image.image = r
            resolve(r)
        }).catch(e => console.error('Failed to load', image.filename, e))))
    }
    return Promise.allSettled(promises)
}

export { loadAllImages, loadImage, drawImage, getImage, getImages, setContext, drawImageCtx, getContext, imageManifestFromJSON }
