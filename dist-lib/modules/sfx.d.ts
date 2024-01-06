import SfxDefinition from "./SfxDefinition";
export declare function setVolume(name: string, volume: number): void;
export declare function setGlobalVolume(volume: number): void;
export interface OnEndedFunction {
    (sfx: SfxDefinition): void;
}
/**
 * Populate sfx manifest with JSON list of definitions. Manifest is an arry of
 * objects matching format { "name": "sfx id ref", "filename": "./file_path/filename.ext" },
 * @param json JSON representation of image definitions.
 */
declare function sfxManifestFromJSON(json: object[]): void;
export declare function addSfxToManifest(sfxName: string, filename: string): void;
declare function isPlaying(name: string): boolean;
declare function getSfx(name: string): HTMLAudioElement;
declare function playSfx(name: string, onEnded?: OnEndedFunction): Promise<void>;
declare function loadSfx(filename: string): Promise<HTMLAudioElement>;
declare function loadAllSfx(): Promise<PromiseSettledResult<HTMLAudioElement>[]>;
export { loadAllSfx, loadSfx, playSfx, getSfx, isPlaying, sfxManifestFromJSON };
