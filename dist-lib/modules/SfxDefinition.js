/**
 * Helper class to store sound effects and deserialize them from JSON.
 */
var SfxDefinition = /** @class */ (function () {
    function SfxDefinition() {
    }
    SfxDefinition.fromJSON = function (json) {
        return Object.assign(new SfxDefinition(), json);
    };
    return SfxDefinition;
}());
export default SfxDefinition;
//# sourceMappingURL=SfxDefinition.js.map