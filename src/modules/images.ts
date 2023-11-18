import ImageDefinition from "./ImageDefinition"
import Rect from "./Rect"

const images: ImageDefinition[] = []

/**
 * Populate images manifest with JSON list of definitions.
 * @param json JSON representation of image definitions.
 */
function imageManifestFromJSON(json: object[]): void {
    json.forEach(((def: object) => images.push(ImageDefinition.fromJSON(def))))
}
// Canvas 2d context.
let ctx: CanvasRenderingContext2D = null

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
    const img = images.filter(f => f.name === name)
    return img.length > 0 ? img[0].image : null
}

// Returns the full list of image objects.
function getImages(): ImageDefinition[] {
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
    const img: ImageDefinition[] = images.filter(f => f.name === name)
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
        } catch {
            // empty
        }
    }
}

/**
 * Load Image
 * @param {string} filename 
 * @returns 
 */
function loadImage(filename: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        const img: HTMLImageElement = new Image()
        img.onload = () => {
            resolve(img)
        }
        img.onerror = (e: Event) => {
            console.error(`Failed to load file ${filename}:`, e)
            reject(null)
        }
        const image: ImageDefinition[] = images.filter(f => f.filename === filename)
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
function loadAllImages(): Promise<PromiseSettledResult<HTMLImageElement>[]> {
    const promises: Promise<HTMLImageElement>[] = []
    for (const i in images) {
        const image: ImageDefinition = images[i]
        promises.push(new Promise(resolve => loadImage(image.filename).then(r => {
            image.image = r
            resolve(r)
        }).catch(e => console.error('Failed to load', image.filename, e))))
    }
    return Promise.allSettled(promises)
}

export { loadAllImages, loadImage, drawImage, getImage, getImages, setContext, drawImageCtx, getContext, imageManifestFromJSON }
