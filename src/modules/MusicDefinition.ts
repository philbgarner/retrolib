/**
 * Helper class to store music tracks and deserialize them from JSON.
 */
class MusicDefinition {
    public name: string
    public track: HTMLAudioElement
    public filename: string

    public static fromJSON(json: object) {
        return Object.assign(new MusicDefinition(), json)
    }
}

export default MusicDefinition