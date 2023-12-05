import MusicDefinition from './MusicDefinition'

const sfxVolume: number = 0.45

const sfxs: MusicDefinition[] = []

export interface OnEndedFunction { (sfx: MusicDefinition): void }

/**
 * Populate sfx manifest with JSON list of definitions.  Manifest is an arry of
 * objects matching format { "name": "track id ref", "filename": "./file_path/filename.ext" },
 * @param json JSON representation of image definitions.
 */
function musicManifestFromJSON(json: object[]): void {
    json.forEach(((def: object) => sfxs.push(MusicDefinition.fromJSON(def))))
}


/**
 * Whether or not the named track is currently playing.
 * @param name Music track asset id.
 * @returns 
 */
function isPlaying(name: string): boolean {
    const sf = getTrack(name)
    if (sf) {
        return !sf.paused || sf.currentTime && sf.currentTime < sf.duration
    }
    return false
}

/**
 * Get the named audio element.
 * @param name Music track asset id.
 * @returns 
 */
function getTrack(name: string): HTMLAudioElement {
    const sf: MusicDefinition[] = sfxs.filter(f => f.name === name)
    return sf.length > 0 ? sf[0].track : null
}

/**
 * Play specified track.
 * @param name Music track asset id.
 * @param onEnded Optional callback for when the track ends.
 * @returns 
 */
function playTrack(name: string, onEnded?: OnEndedFunction): Promise<void> {
    return new Promise(resolve => {
        try {
            const sf = sfxs.filter(f => f.name === name)
            if (sf.length > 0) {
                if (!isPlaying(name)) {
                    sf[0].track.volume = sfxVolume
                    if (onEnded) {
                        sf[0].track.onended = () => {
                            onEnded(sf[0])
                            sf[0].track.onended = () => { resolve() }
                        }
                    } else {
                        sf[0].track.onended = () => { resolve() }
                    }
                    sf[0].track.play()
                } else {
                    sf[0].track.currentTime = 0
                }
            }
        } catch (e) {
            console.log('Error playing sfx', name, e)
        }
    })
}

/**
 * Load track from location.
 * @param filename Path to audio asset.
 * @returns 
 */
function loadTrack(filename: string): Promise<HTMLAudioElement> {
    return new Promise((resolve, reject) => {
        const sf: HTMLAudioElement = new Audio(filename)
        sf.oncanplaythrough = () => {
            resolve(sf)
        }
        sf.onerror = (e) => {
            console.error(`Failed to load file ${filename}:`, e)
            reject(e)
        }
    })
}

/**
 * Load all tracks that have been loaded into the manifest.
 * @returns 
 */
function loadAllTracks(): Promise<PromiseSettledResult<HTMLAudioElement>[]> {
    return new Promise((resolveAll, rejectAll) => {
        const promises: Promise<HTMLAudioElement>[] = []
        for (const i in sfxs) {
            const sfx: MusicDefinition = sfxs[i]
            promises.push(new Promise(resolve => loadTrack(sfx.filename).then(r => {
                sfx.track = r
                resolve(r)
            }).catch(e => {
                console.error('Failed to load', sfx.filename, e)
                rejectAll('Failed to load' + sfx.filename + ':' + JSON.stringify(e))
            })))
        }
        return Promise.allSettled(promises)
    })
}

export { loadAllTracks, loadTrack, playTrack, getTrack, isPlaying, musicManifestFromJSON }