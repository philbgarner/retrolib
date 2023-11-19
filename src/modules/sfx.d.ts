import SfxDefinition from "./SfxDefinition";
export interface OnEndedFunction {
    (sfx: SfxDefinition): void;
}
/**
 * Populate sfx manifest with JSON list of definitions.
 * @param json JSON representation of image definitions.
 */
declare function sfxManifestFromJSON(json: object[]): void;
declare function isPlaying(name: string): boolean;
declare function getSfx(name: string): HTMLAudioElement;
declare function playSfx(name: string, onEnded: OnEndedFunction): Promise<void>;
declare function loadSfx(filename: string): Promise<HTMLAudioElement>;
declare function loadAllSfx(): Promise<PromiseSettledResult<HTMLAudioElement>[]>;
export { loadAllSfx, loadSfx, playSfx, getSfx, isPlaying, sfxManifestFromJSON };
