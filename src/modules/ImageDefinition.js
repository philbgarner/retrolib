class ImageDefinition {
    name;
    image;
    filename;
    static fromJSON(json) {
        return Object.assign(new ImageDefinition(), json);
    }
}
export default ImageDefinition;
//# sourceMappingURL=ImageDefinition.js.map