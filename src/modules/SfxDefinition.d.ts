declare class SfxDefinition {
    name: string;
    sfx: HTMLAudioElement;
    filename: string;
    static fromJSON(json: object): SfxDefinition & object;
}
export default SfxDefinition;
