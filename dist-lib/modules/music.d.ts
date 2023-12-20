import MusicDefinition from './MusicDefinition';
export interface OnEndedFunction {
    (sfx: MusicDefinition): void;
}
/**
 * Populate sfx manifest with JSON list of definitions.  Manifest is an arry of
 * objects matching format { "name": "track id ref", "filename": "./file_path/filename.ext" },
 * @param json JSON representation of image definitions.
 */
declare function musicManifestFromJSON(json: object[]): void;
/**
 * Whether or not the named track is currently playing.
 * @param name Music track asset id.
 * @returns
 */
declare function isPlaying(name: string): boolean;
/**
 * Get the named audio element.
 * @param name Music track asset id.
 * @returns
 */
declare function getTrack(name: string): HTMLAudioElement;
/**
 * Play specified track.
 * @param name Music track asset id.
 * @param onEnded Optional callback for when the track ends.
 * @returns
 */
declare function playTrack(name: string, onEnded?: OnEndedFunction): Promise<void>;
/**
 * Load track from location.
 * @param filename Path to audio asset.
 * @returns
 */
declare function loadTrack(filename: string): Promise<HTMLAudioElement>;
/**
 * Load all tracks that have been loaded into the manifest.
 * @returns
 */
declare function loadAllTracks(): Promise<PromiseSettledResult<HTMLAudioElement>[]>;
export { loadAllTracks, loadTrack, playTrack, getTrack, isPlaying, musicManifestFromJSON };
