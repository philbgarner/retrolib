/**
 * Helper class to store sound effects and deserialize them from JSON.
 */
class SfxDefinition {
    public name: string
    public sfx: HTMLAudioElement
    public filename: string

    public static fromJSON(json: object) {
        return Object.assign(new SfxDefinition(), json)
    }
}

export default SfxDefinition