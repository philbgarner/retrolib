/**
 * Helper class to store images aand deserialize them from JSON.
 */
var ImageDefinition = /** @class */ (function () {
    function ImageDefinition() {
    }
    ImageDefinition.fromJSON = function (json) {
        return Object.assign(new ImageDefinition(), json);
    };
    return ImageDefinition;
}());
export default ImageDefinition;
//# sourceMappingURL=ImageDefinition.js.map