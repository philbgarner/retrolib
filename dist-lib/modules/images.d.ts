import ImageDefinition from "./ImageDefinition";
import Rect from "./rect";
/**
 * Populate images manifest with JSON list of definitions. Manifest is an array of objects
 * like { "name": "image id ref", "filename": "file_path/filename.ext" }
 * @param json JSON representation of image definitions.
 */
declare function imageManifestFromJSON(json: object[]): void;
/**
 *
 * @param imageName Image name/id to use for this asset.
 * @param filename Filename/path to image asset.
 */
export declare function addImageToManifest(imageName: string, filename: string): void;
declare function setContext(context: CanvasRenderingContext2D): void;
declare function getContext(): CanvasRenderingContext2D;
declare function getImage(name: string): HTMLImageElement;
declare function getImages(): ImageDefinition[];
/**
 * Draws an image at x,y coordinates on the canas.
 * @param {string} name
 * @param {number} x
 * @param {number} y
 * @param {object} srcRect
 * @param {boolean} flipped
 */
declare function drawImage(name: string, x: number, y: number, srcRect?: Rect, flipped?: boolean): void;
/**
 * Raw image drawing function (use drawImage unless you want to draw to another 2d context).
 * @param {object} context Canvas 2d context.
 * @param {string} name
 * @param {number} x
 * @param {number} y
 * @param {object} srcRect
 * @param {boolean} flipped
 */
declare function drawImageCtx(context: CanvasRenderingContext2D, name: string, x: number, y: number, srcRect?: Rect, flipped?: boolean): void;
/**
 * Load Image
 * @param {string} filename
 * @returns
 */
declare function loadImage(filename: string): Promise<HTMLImageElement>;
/**
 * Load all images in the images list.
 * @returns
 */
declare function loadAllImages(): Promise<PromiseSettledResult<HTMLImageElement>[]>;
export { loadAllImages, loadImage, drawImage, getImage, getImages, setContext, drawImageCtx, getContext, imageManifestFromJSON };
