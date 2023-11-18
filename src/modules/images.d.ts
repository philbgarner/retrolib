import ImageDefinition from "./ImageDefinition"
import Rect from "./Rect"

/**
 * Populate images manifest with JSON list of definitions.
 * @param json JSON representation of image definitions.
 */
export function imageManifestFromJSON(json: Array<object>): void

// Set the canvas 2d context.
export function setContext(context: CanvasRenderingContext2D): void

// Returns the canvas 2d context.
export function getContext(): CanvasRenderingContext2D

// Return loaded image object from the list.
export function getImage(name: string): HTMLImageElement

// Returns the full list of image objects.
export function getImages(): Array<ImageDefinition>

/**
 * Draws an image at x,y coordinates on the canas.
 * @param {string} name 
 * @param {number} x 
 * @param {number} y 
 * @param {object} srcRect 
 * @param {boolean} flipped 
 */
export function drawImage(name: string, x: number, y: number, srcRect: Rect, flipped: boolean): void

/**
 * Raw image drawing function (use drawImage unless you want to draw to another 2d context).
 * @param {object} context Canvas 2d context.
 * @param {string} name 
 * @param {number} x 
 * @param {number} y 
 * @param {object} srcRect 
 * @param {boolean} flipped 
 */
export function drawImageCtx(context: CanvasRenderingContext2D, name: string, x: number, y: number, srcRect: Rect, flipped: boolean): void

/**
 * Load Image
 * @param {string} filename 
 * @returns 
 */
export function loadImage(filename: string): Promise<HTMLImageElement>

/**
 * Load all images in the images list.
 * @returns 
 */
export function loadAllImages(): Promise<PromiseSettledResult<any>[]>
