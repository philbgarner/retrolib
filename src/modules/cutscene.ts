import { font } from "../retrolib"
import { Coordinates } from "../retrolib"
import { ColorRGBA } from "./font"
import Scene from "./scene"
import { InputHandlerFunction, AnimationFrameFunction, TransitionEffect } from "./scenes"

export type CutsceneDialog = {
    speaker: string,
    lines: string[],
    coords: Coordinates,
    skippable: boolean
}

class Cutscene extends Scene {
    dialog: CutsceneDialog
    lineNumber: number = 0
    characterNumber: number = 0
    nextSceneId: string
    color: ColorRGBA
    letterSpeed: number = 60
    lastLetterTimestamp: number = 0
    pauseLetterIncrement: boolean = false
    linePauseTime: number = 600

    handleItemInput: InputHandlerFunction = (input: string, amt: number, released: boolean) => {
        if (['action', 'cancel'].includes(input) && !this.pauseLetterIncrement) {
            this.pauseLetterIncrement = true
            setTimeout(() => {
                this.lineNumber++
                this.pauseLetterIncrement = false
            }, this.linePauseTime)
        }
    }

    constructor(id: string, active: boolean, nextSceneId: string, dialog: CutsceneDialog) {
        const animationFrame: AnimationFrameFunction = (delta: number) => {
            if (this.dialog === undefined) {
                return
            }

            if (this.elapsed >= this.lastLetterTimestamp + this.letterSpeed && !this.pauseLetterIncrement) {
                this.characterNumber++
                this.lastLetterTimestamp = this.elapsed
            }
            if (this.characterNumber >= this.dialog.lines[this.lineNumber].length && !this.pauseLetterIncrement) {
                this.characterNumber = 0
                this.lineNumber++
            }
            if (this.lineNumber >= this.dialog.lines.length) {
                this.pauseLetterIncrement = true
                setTimeout(() => this.TransitionTo(this.nextSceneId, TransitionEffect.Fade, 200, 16), this.linePauseTime)
            }

            font.drawText(dialog.coords.x, dialog.coords.y, dialog.lines[this.lineNumber].slice(0, this.characterNumber), this.color)
        }
        super(id, animationFrame, active, () => {}, () => {}, () => {})
        this.lineNumber = 0
        this.characterNumber = 0
        this.dialog = dialog
        this.color = { r: 225, g: 225, b: 225, a: 255 }
        this.nextSceneId = nextSceneId
    }
}

export default Cutscene