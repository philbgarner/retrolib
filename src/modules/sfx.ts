import SfxDefinition from "./SfxDefinition"

const sfxVolume: number = 0.45

const sfxs: SfxDefinition[] = []

export interface OnEndedFunction { (sfx: SfxDefinition): void }

/**
 * Populate sfx manifest with JSON list of definitions. Manifest is an arry of
 * objects matching format { "name": "sfx id ref", "filename": "./file_path/filename.ext" },
 * @param json JSON representation of image definitions.
 */
function sfxManifestFromJSON(json: object[]): void {
    json.forEach(((def: object) => sfxs.push(SfxDefinition.fromJSON(def))))
}


function isPlaying(name: string): boolean {
    const sf = getSfx(name)
    if (sf) {
        return !sf.paused || sf.currentTime && sf.currentTime < sf.duration
    }
    return false
}

function getSfx(name: string): HTMLAudioElement {
    const sf: SfxDefinition[] = sfxs.filter(f => f.name === name)
    return sf.length > 0 ? sf[0].sfx : null
}


function playSfx(name: string, onEnded: OnEndedFunction): Promise<void> {
    return new Promise(resolve => {
        try {
            const sf = sfxs.filter(f => f.name === name)
            if (sf.length > 0) {
                if (!isPlaying(name)) {
                    sf[0].sfx.volume = sfxVolume
                    if (onEnded) {
                        sf[0].sfx.onended = () => {
                            onEnded(sf[0])
                            sf[0].sfx.onended = () => { resolve() }
                        }
                    } else {
                        sf[0].sfx.onended = () => { resolve() }
                    }
                    sf[0].sfx.play()
                } else {
                    sf[0].sfx.currentTime = 0
                }
            }
        } catch (e) {
            console.log('Error playing sfx', name, e)
        }
    })
}

function loadSfx(filename: string): Promise< HTMLAudioElement> {
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

function loadAllSfx(): Promise<PromiseSettledResult<HTMLAudioElement>[]> {
    return new Promise((resolveAll, rejectAll) => {
        const promises: Promise<HTMLAudioElement>[] = []
        for (const i in sfxs) {
            const sfx: SfxDefinition = sfxs[i]
            promises.push(new Promise(resolve => loadSfx(sfx.filename).then(r => {
                sfx.sfx = r
                resolve(r)
            }).catch(e => {
                console.error('Failed to load', sfx.filename, e)
                rejectAll('Failed to load' + sfx.filename + ':' + JSON.stringify(e))
            })))
        }
        return Promise.allSettled(promises)
    })
}

export { loadAllSfx, loadSfx, playSfx, getSfx, isPlaying, sfxManifestFromJSON }