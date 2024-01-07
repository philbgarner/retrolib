import { font } from "../retrolib"
import { Rect } from "../retrolib"
import { ColorRGBA } from "./font"
import Scene from "./scene"
import { InputHandlerFunction, AnimationFrameFunction, TransitionEffect } from "./scenes"

export type DialogLine = {
    speaker: string,
    color: ColorRGBA,
    line: string
}

export type CutsceneDialog = {
    lines: string[], // TODO: Switch this to use DialogLine.
    rect: Rect,
    skippable: boolean
}

class Cutscene extends Scene {
    dialogs: CutsceneDialog[]
    dialogNumber: number = 0
    lineNumber: number = 0
    characterNumber: number = 0
    lastSpaceNumber: number = 0
    nextSceneId: string
    color: ColorRGBA
    letterSpeed: number = 60
    lastLetterTimestamp: number = 0
    pauseLetterIncrement: boolean = false
    linePauseTime: number = 1500
    dialogPauseTime: number = 3000

    handleItemInput: InputHandlerFunction = (input: string, amt: number, released: boolean) => {
        if (['action', 'cancel'].includes(input) && !this.pauseLetterIncrement) {
            this.pauseLetterIncrement = true
            this.characterNumber = this.dialogs[this.dialogNumber].lines[this.lineNumber].length - 1
            setTimeout(() => {
                this.lineNumber++
                this.lastSpaceNumber = 0
                this.pauseLetterIncrement = false
            }, this.linePauseTime)
        }
    }

    constructor(id: string, active: boolean, nextSceneId: string, dialogs: CutsceneDialog[]) {
        const animationFrame: AnimationFrameFunction = (delta: number) => {
            if (this.dialogs !== undefined) {
                if (!this.pauseLetterIncrement && this.dialogNumber < this.dialogs.length && this.lineNumber < this.dialogs[this.dialogNumber].lines.length) {
                    if (this.elapsed >= this.lastLetterTimestamp + this.letterSpeed) {
                        this.characterNumber++
                        if (this.dialogs[this.dialogNumber].lines[this.lineNumber].slice(this.characterNumber, this.characterNumber + 1) === ' '
                        && font.textWidth(this.dialogs[this.dialogNumber].lines[this.lineNumber].slice(0, this.characterNumber)) < this.dialogs[this.dialogNumber].rect.w) {
                            this.lastSpaceNumber = this.characterNumber
                        }
                        this.lastLetterTimestamp = this.elapsed
                    }
                    if (this.characterNumber >= this.dialogs[this.dialogNumber].lines[this.lineNumber].length) {
                        this.pauseLetterIncrement = true
                        this.characterNumber = this.dialogs[this.dialogNumber].lines[this.lineNumber].length
                        setTimeout(() => {
                            this.lineNumber++
                            this.characterNumber = 0
                            this.lastSpaceNumber = 0

                            this.pauseLetterIncrement = false
                        }, this.linePauseTime)
                    }
                    if (this.lineNumber >= this.dialogs[this.dialogNumber].lines.length) {
                        this.pauseLetterIncrement = true
                        this.lineNumber = this.dialogs[this.dialogNumber].lines.length - 1
                        this.lastSpaceNumber = 0
                        this.dialogNumber++
                        if (this.dialogNumber >= this.dialogs.length) {
                            setTimeout(() => this.TransitionTo(this.nextSceneId, TransitionEffect.Fade, 200, 16), this.dialogPauseTime)
                        } else {
                            this.lineNumber = 0
                            this.characterNumber = 0
                            this.lastSpaceNumber = 0
                        }
                    }
                }

                if (this.dialogNumber < this.dialogs.length && this.lineNumber <= this.dialogs[this.dialogNumber].lines.length - 1) {
                    // If the current line would overflow the width, wrap from the last space character.
                    let linesUpTo = this.dialogs[this.dialogNumber].lines[this.lineNumber].slice(0, this.characterNumber)
                    if (font.textWidth(linesUpTo) >= this.dialogs[this.dialogNumber].rect.w) {
                        this.dialogs[this.dialogNumber].lines[this.lineNumber] = this.dialogs[this.dialogNumber].lines[this.lineNumber].slice(0, this.lastSpaceNumber) + '\n' + this.dialogs[this.dialogNumber].lines[this.lineNumber].slice(this.lastSpaceNumber + 1)
                    }
                    font.drawText(this.dialogs[this.dialogNumber].rect.x, this.dialogs[this.dialogNumber].rect.y, this.dialogs[this.dialogNumber].lines[this.lineNumber].slice(0, this.characterNumber), this.color)
                }
            }
        }
        super(id, animationFrame, active, () => {}, () => {}, () => {})
        this.lineNumber = 0
        this.characterNumber = 0
        this.dialogs = dialogs
        this.color = { r: 225, g: 225, b: 225, a: 255 }
        this.nextSceneId = nextSceneId
    }
}

export default Cutscene