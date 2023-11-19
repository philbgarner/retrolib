import MusicDefinition from './MusicDefinition';
export interface OnEndedFunction {
    (sfx: MusicDefinition): void;
}
/**
 * Populate sfx manifest with JSON list of definitions.
 * @param json JSON representation of image definitions.
 */
declare function musicManifestFromJSON(json: object[]): void;
declare function isPlaying(name: string): boolean;
declare function getTrack(name: string): HTMLAudioElement;
declare function playTrack(name: string, onEnded: OnEndedFunction): Promise<void>;
declare function loadTrack(filename: string): Promise<HTMLAudioElement>;
declare function loadAllTracks(): Promise<PromiseSettledResult<HTMLAudioElement>[]>;
export { loadAllTracks, loadTrack, playTrack, getTrack, isPlaying, musicManifestFromJSON };
