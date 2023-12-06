/**
 * Helper class to store images aand deserialize them from JSON.
 */
declare class ImageDefinition {
    name: string;
    image: HTMLImageElement;
    filename: string;
    static fromJSON(json: object): ImageDefinition & object;
}
export default ImageDefinition;
