import { font } from "../retrolib"
import { Rect } from "../retrolib"
import { ColorRGBA } from "./font"
import Scene from "./scene"
import { InputHandlerFunction, AnimationFrameFunction, TransitionEffect } from "./scenes"

export interface onEndedFunction {
    (line: DialogLine): void
}

export type DialogLine = {
    speaker: string,
    color: ColorRGBA,
    text: string,
    onEnded?: onEndedFunction
}

export type CutsceneDialog = {
    lines: DialogLine[],
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

    constructor(id: string, active: boolean, nextSceneId: string, dialogs: CutsceneDialog[]) {
        const animationFrame: AnimationFrameFunction = (delta: number) => {
            if (this.dialogs !== undefined && this.dialogs[this.dialogNumber] !== undefined) {
                const line = this.dialogs[this.dialogNumber].lines[this.lineNumber]
                if (!this.pauseLetterIncrement && this.dialogNumber < this.dialogs.length && line !== undefined) {
                    if (this.elapsed >= this.lastLetterTimestamp + this.letterSpeed) {
                        this.characterNumber++
                        if (this.lineNumber < this.dialogs[this.dialogNumber].lines.length
                        && line.text.slice(this.characterNumber, this.characterNumber + 1) === ' '
                        && font.textWidth(line.text.slice(0, this.characterNumber)) < this.dialogs[this.dialogNumber].rect.w) {
                            this.lastSpaceNumber = this.characterNumber
                        }
                        this.lastLetterTimestamp = this.elapsed
                    }
                    if (this.characterNumber >= line.text.length) {
                        this.pauseLetterIncrement = true
                        this.characterNumber = line.text.length
                        setTimeout(() => {
                            if (line.onEnded) {
                                line.onEnded(line)
                            }
                            this.lineNumber++
                            this.characterNumber = 0
                            this.lastSpaceNumber = 0
                            this.pauseLetterIncrement = false
                            if (this.lineNumber >= this.dialogs[this.dialogNumber].lines.length) {
                                this.lineNumber = 0
                                this.dialogNumber++
                                if (this.dialogNumber >= this.dialogs.length) {
                                    setTimeout(() => this.TransitionTo(this.nextSceneId, TransitionEffect.Fade, 200, 16), this.dialogPauseTime)
                                }
                            }
        
                        }, this.linePauseTime)
                    }
                }
                if (this.dialogNumber < this.dialogs.length && this.lineNumber <= this.dialogs[this.dialogNumber].lines.length - 1) {
                    // If the current line would overflow the width, wrap from the last space character.
                    let linesUpTo = line.text.slice(0, this.characterNumber)
                    if (font.textWidth(linesUpTo) >= this.dialogs[this.dialogNumber].rect.w) {
                        line.text = line.text.slice(0, this.lastSpaceNumber) + '\n' + line.text.slice(this.lastSpaceNumber + 1)
                    }
                    font.drawText(this.dialogs[this.dialogNumber].rect.x, this.dialogs[this.dialogNumber].rect.y, line.text.slice(0, this.characterNumber), line.color)
                }
            }
        }
        super(id, animationFrame, active, () => {}, () => {}, () => {})

        this.handleInput = (input: string, amt: number, released: boolean) => {
            if (['action', 'cancel'].includes(input) && !this.pauseLetterIncrement) {
                this.pauseLetterIncrement = true
                this.characterNumber = this.dialogs[this.dialogNumber].lines[this.lineNumber].text.length - 1
                // TODO: Iterate remaining characters up to the length instead of just jumping there calculating newlines to get
                // the correct text wrapping.
                setTimeout(() => {
                    this.lineNumber++
                    this.lastSpaceNumber = 0
                    this.pauseLetterIncrement = false
                }, this.linePauseTime)
            }
        }

        this.lineNumber = 0
        this.characterNumber = 0
        this.dialogs = dialogs
        this.color = { r: 225, g: 225, b: 225, a: 255 }
        this.nextSceneId = nextSceneId
    }
}

export default Cutscene