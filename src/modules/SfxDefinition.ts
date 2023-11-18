class SfxDefinition {
    public name: string
    public sfx: HTMLAudioElement
    public filename: string

    public static fromJSON(json: object) {
        return Object.assign(new SfxDefinition(), json)
    }
}

export default SfxDefinition