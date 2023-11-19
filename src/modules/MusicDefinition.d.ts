declare class MusicDefinition {
    name: string;
    track: HTMLAudioElement;
    filename: string;
    static fromJSON(json: object): MusicDefinition & object;
}
export default MusicDefinition;
