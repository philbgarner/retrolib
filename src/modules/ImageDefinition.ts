class ImageDefinition {
    public name: string
    public image: HTMLImageElement
    public filename: string

    public static fromJSON(json: object) {
        return Object.assign(new ImageDefinition(), json)
    }
}

export default ImageDefinition