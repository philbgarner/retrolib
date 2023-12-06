/**
 * Helper class to store music tracks and deserialize them from JSON.
 */
declare class MusicDefinition {
    name: string;
    track: HTMLAudioElement;
    filename: string;
    static fromJSON(json: object): MusicDefinition & object;
}
export default MusicDefinition;
