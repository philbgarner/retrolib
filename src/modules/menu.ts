import Rect from "./Rect"
import Scene, { AnimationFrameFunction } from "./scene"
import * as font from './font'
import * as input from './input'
import { getContext } from "./images"
import { LayoutDirection } from "./menus"

export type MenuOption = { 
    id: string,
    text: string,
    rect: Rect
}

class Menu extends Scene {
    offsetX: number
    offsetY: number
    options: MenuOption[]
    selectedOption: number
    ctx: CanvasRenderingContext2D
    color: font.ColorRGBA
    selectedColor: font.ColorRGBA
    
    selectSpeed: number
    incrementSelectionInput: string
    decrementSelectionInput: string

    constructor(id: string, active: boolean, direction: LayoutDirection, options: MenuOption[], nextSceneId: string, prevSceneId: string) {
        const animationFrame: AnimationFrameFunction = (delta: number) => {

        }
        super(id, animationFrame, active, undefined, undefined, (event) => console.log('event', event))

        this.offsetX = 0
        this.offsetY = 0

        this.selectedOption = 0
        this.options = options
        this.ctx = getContext()
        this.color = { r: 128, g: 128, b: 128, a: 255 }
        this.selectedColor = { r: 245, g: 245, b: 245, a: 255 }
        this.selectSpeed = 0.1

        this.incrementSelectionInput = direction === LayoutDirection.TopDown ? 'down' : 'right'
        this.decrementSelectionInput = direction === LayoutDirection.TopDown ? 'up' : 'left'
    }

    Draw(delta: number) {
        if (input.inputPressed(this.incrementSelectionInput)) {
            this.selectedOption += 1 * this.selectSpeed
            if (this.selectedOption >= this.options.length) {
                this.selectedOption = 0
            }
        }
        if (input.inputPressed(this.decrementSelectionInput)) {
            this.selectedOption += -1 * this.selectSpeed
            if (this.selectedOption <= 0) {
                this.selectedOption = this.options.length - 1
            }
        }

        this.options.forEach((option, index) => {
            const colr = Math.floor(this.selectedOption) === index ? this.selectedColor : this.color
            font.drawText(this.ctx, option.rect.x, option.rect.y, option.text, colr)
        })
    }
}

export default Menu