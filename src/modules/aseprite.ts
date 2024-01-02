import { drawImage } from './images'

/**
 * Animation header section.
 */
export interface Animation {
    name:   string;
    frames: { [key: string]: FrameValue };
    meta:   Meta;
}

/**
 * Animation frame value object.
 */
export interface FrameValue {
    frame:            SpriteSourceSizeClass;
    rotated:          boolean;
    trimmed:          boolean;
    spriteSourceSize: SpriteSourceSizeClass;
    sourceSize:       Size;
    duration:         number;
}

/**
 * Animation source rect.
 */
export interface SpriteSourceSizeClass {
    x: number;
    y: number;
    w: number;
    h: number;
}

/**
 * Size object.
 */
export interface Size {
    w: number;
    h: number;
}

/**
 * Sprite metadata.
 */
export interface Meta {
    app:       string;
    version:   string;
    image:     string;
    format:    string;
    size:      Size;
    scale:     string;
    frameTags: FrameTag[];
    layers:    Layer[];
    slices:    any[];
}

/**
 * Sprite frame tags.
 */
export interface FrameTag {
    name:      string;
    from:      number;
    to:        number;
    direction: string;
}

/**
 * Sprite layers.
 */
export interface Layer {
    name:      string;
    opacity:   number;
    blendMode: string;
}

export interface SpriteEvent {
    (sprite: Aseprite): void
}

export interface Listener {
    name: string,
    frameNumber: number,
    fnEvent: SpriteEvent
}


/**
 * Sprite controller, a wrapper for Aseprite JSON export format.
 */
class Aseprite {
    name: string
    animation: Animation
    frames: {
        [key: string]: FrameValue
    }
    meta: Meta
    frameNumber: number
    elapsed: number
    frameElapsed: number
    direction: number

    listeners: Listener[]

    constructor(name: string, animation: Animation) {
        this.name = name

        this.animation = animation
        this.frames = animation.frames
        this.meta = animation.meta

        this.frameNumber = 0
        this.elapsed = 0
        this.frameElapsed = 0
        this.direction = 1

        this.listeners = [
            { name: 'ended', frameNumber: 0, fnEvent: () => {} }
        ]
    }

    CallListener(name: string, frameNumber: number) {
        if (this.HasListener(name, frameNumber)) {
            this.GetListener(name, frameNumber).fnEvent(this)
        }
    }

    GetListener(name: string, frameNumber: number) {
        if (this.HasListener(name, frameNumber)) {
            const listener =  this.listeners.filter(f => f.name === name && frameNumber === frameNumber)
            return listener.length === 0 ? null : listener[0]
        }
        return null
    }

    AddListener(name: string, frameNumber: number, callback: SpriteEvent) {
        if (!this.HasListener(name, frameNumber)) {
            this.listeners.push({ name: name, frameNumber: frameNumber, fnEvent: callback})
        }
    }
    
    HasListener(name: string, frameNumber: number) {
        return this.listeners.filter(f => f.name === name && frameNumber === frameNumber).length > 0 ? true : false
    }

    ClearListener(name: string, frameNumber: number) {
        if (this.HasListener(name, frameNumber)) {
            this.listeners = []
        }
    }

    Play() {
        this.direction = 1
    }

    PlayFromStart() {
        this.frameNumber = 0
        this.frameElapsed = 0
        this.direction = 1
        this.elapsed = 0
    }

    Pause() {
        this.direction = 0
    }

    FrameId(frameNumber: number) {
        let frameId = Object.keys(this.frames)[frameNumber]
        return frameId
    }

    Frame(frameNumber: number) {
        return this.frames[this.FrameId(frameNumber)]
    }

    CurrentFrameId() {
        return this.FrameId(this.frameNumber)
    }

    CurrentFrame() {
        return this.Frame(this.frameNumber)
    }

    FrameMetaTag(frameNumber: number) {
        let tag = this.meta.frameTags.filter(f => frameNumber >= f.from && frameNumber <= f.to)
        return tag.length > 0 ? tag[0] : null
    }

    MetaTag(frameTag: string) {
        return this.meta.frameTags.filter(f => f.name === frameTag)
    }

    Update(delta: number) {
        this.frameElapsed += delta * this.direction
        this.elapsed += delta * Math.abs(this.direction)
        let frame = this.CurrentFrame()
        let frameTag = this.FrameMetaTag(this.frameNumber)
        try {
            if (this.direction > 0 && this.frameElapsed >= frame.duration && frameTag.direction === 'forward') {
                this.frameNumber += this.direction
                this.frameElapsed = 0
            }
            
            if (this.frameNumber === Object.keys(this.frames).length - 1) {
                this.CallListener('ended', 0)
            }

            if (this.direction > 0 && this.frameElapsed >= frame.duration
            && frameTag.direction === 'pingpong' && frameTag.to === this.frameNumber) {
                this.direction = this.direction * -1
                this.frameNumber += this.direction
                this.frameElapsed = frame.duration
            } else if (this.direction > 0 && this.frameElapsed >= frame.duration
            && frameTag.direction === 'pingpong' && frameTag.to > this.frameNumber) {
                this.frameNumber += this.direction
                this.frameElapsed = 0
            }
            
            if (this.direction < 0 && this.frameElapsed <= 0
            && frameTag.direction === 'pingpong'
            && frameTag.from === this.frameNumber) {
                this.direction = this.direction * -1
                this.frameElapsed = 0
            } else if (this.direction < 0 && this.frameElapsed <= 0
            && frameTag.direction === 'pingpong'
            && frameTag.from < this.frameNumber) {
                this.frameNumber += this.direction
                this.frameElapsed = 0
            }

            if (this.HasListener('frame', this.frameNumber)) {
                this.CallListener('frame', this.frameNumber)
            }
        } catch (err) {
            console.log(err)
        }
    }

    Draw(x: number, y: number) {
        let frame = this.CurrentFrame()
        x = Math.floor(x) // Fractional numbers introduce anti-aliasing that breaks pixel feel on canvas contexts.
        y = Math.floor(y)
        drawImage(this.meta.image, x, y, { x: frame.frame.x, y: frame.frame.y, w: frame.frame.w, h: frame.frame.h }, false)
    }
}

export default Aseprite