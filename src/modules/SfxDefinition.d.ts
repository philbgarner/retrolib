/**
 * Helper class to store sound effects and deserialize them from JSON.
 */
declare class SfxDefinition {
    name: string;
    sfx: HTMLAudioElement;
    filename: string;
    static fromJSON(json: object): SfxDefinition & object;
}
export default SfxDefinition;
