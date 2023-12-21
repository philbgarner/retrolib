/**
 * Helper class to store music tracks and deserialize them from JSON.
 */
var MusicDefinition = /** @class */ (function () {
    function MusicDefinition() {
    }
    MusicDefinition.fromJSON = function (json) {
        return Object.assign(new MusicDefinition(), json);
    };
    return MusicDefinition;
}());
export default MusicDefinition;
//# sourceMappingURL=MusicDefinition.js.map