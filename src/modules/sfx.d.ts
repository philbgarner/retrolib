import SfxDefinition from './SfxDefinition'

export interface OnEndedFunction { (sfx: SfxDefinition): void }

export function sfxManifestFromJSON(json: object[]): void

export function isPlaying(name: string): boolean

export function getSfx(name: string): HTMLAudioElement

export function playSfx(name: string, onEnded: OnEndedFunction): Promise<void>

export function loadSfx(filename: string): Promise< HTMLAudioElement>

export function loadAllSfx(): Promise<PromiseSettledResult<HTMLAudioElement>[]>