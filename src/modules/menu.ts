import Rect from "./rect"
import Scene, { AnimationFrameFunction } from "./scene"
import * as font from './font'
import * as input from './input'
import { LayoutDirection } from "./menus"

/**
 * Menu item.
 */
export type MenuOption = { 
    id: string,
    text: string,
    rect: Rect,
    onAction?: OnSelectionFunction,
    onCancel?: OnSelectionFunction
}

export interface OnSelectionFunction {
    (menu: Menu, option: MenuOption): void
}

/**
 * Menu Flavour of Scenes.
 */
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

    actionInput: string
    cancelInput: string

    /**
     * 
     * @param id Scene id.
     * @param active Whether or not the scene starts activated.
     * @param direction Layout direction.
     * @param options Menu options (items).
     */
    constructor(id: string, active: boolean, direction: LayoutDirection, options: MenuOption[]) {
        const animationFrame: AnimationFrameFunction = (delta: number) => {
            this.Draw(delta)
        }
        super(id, animationFrame, active, undefined, undefined, (event) => console.log('event', event))

        this.offsetX = 0
        this.offsetY = 0

        this.selectedOption = 0
        this.options = options
        this.color = { r: 128, g: 128, b: 128, a: 255 }
        this.selectedColor = { r: 245, g: 245, b: 245, a: 255 }
        this.selectSpeed = 0.1

        this.incrementSelectionInput = direction === LayoutDirection.TopDown ? 'down' : 'right'
        this.decrementSelectionInput = direction === LayoutDirection.TopDown ? 'up' : 'left'

        this.actionInput = 'action'
        this.cancelInput = 'cancel'
    }

    /**
     * Returns the currently selected menu option.
     */
    Selected(): MenuOption {
        return this.options[Math.floor(this.selectedOption)]
    }

    /**
     * Draw the menu.
     * @param delta 
     */
    // eslint-disable-next-line
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
        if (input.inputPressed(this.actionInput) && this.Selected().onAction) {
            this.Selected().onAction(this, this.Selected())
        }
        if (input.inputPressed(this.cancelInput) && this.Selected().onCancel) {
            this.Selected().onCancel(this, this.Selected())
        }

        this.options.forEach((option, index) => {
            const colr = Math.floor(this.selectedOption) === index ? this.selectedColor : this.color
            font.drawText(option.rect.x, option.rect.y, option.text, colr)
        })
    }
}

export default Menu