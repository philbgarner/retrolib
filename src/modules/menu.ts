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
    onInput: OnInputFunction
}

export enum MenuInputType {
    Selection=0,
    Cancel,
    IncrementPrimary,
    DecrementPrimary,
    IncrementSecondary,
    DecrementSecondary
}

/**
 * Function that fires when the user presses either the 'action' or 'cancel' mapped inputs.
 */
export interface OnSelectionFunction {
    (menu: Menu, option: MenuOption): void
}

/**
 * Function that fires when an input event occurs on a selected menu item.
 */
export interface OnInputFunction {
    (menu: Menu, option: MenuOption, event: MenuInputType): void
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

    incrementSecondaryInput: string
    decrementSecondaryInput: string

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

        this.incrementSecondaryInput = direction === LayoutDirection.TopDown ? 'right' : 'down'
        this.decrementSecondaryInput = direction === LayoutDirection.TopDown ? 'left' : 'up'

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
            this.Selected().onInput(this, this.Selected(), MenuInputType.IncrementPrimary)
        }
        if (input.inputPressed(this.decrementSelectionInput)) {
            this.selectedOption += -1 * this.selectSpeed
            if (this.selectedOption <= 0) {
                this.selectedOption = this.options.length - 1
            }
            this.Selected().onInput(this, this.Selected(), MenuInputType.DecrementPrimary)
        }
        if (input.inputPressed(this.actionInput) && this.Selected().onInput) {
            this.Selected().onInput(this, this.Selected(), MenuInputType.Selection)
        }
        if (input.inputPressed(this.cancelInput) && this.Selected().onInput) {
            this.Selected().onInput(this, this.Selected(), MenuInputType.Cancel)
        }
        if (input.inputPressed(this.incrementSecondaryInput) && this.Selected().onInput) {
            this.Selected().onInput(this, this.Selected(), MenuInputType.IncrementSecondary)
        }
        if (input.inputPressed(this.decrementSecondaryInput) && this.Selected().onInput) {
            this.Selected().onInput(this, this.Selected(), MenuInputType.DecrementSecondary)
        }

        this.options.forEach((option, index) => {
            const colr = Math.floor(this.selectedOption) === index ? this.selectedColor : this.color
            font.drawText(option.rect.x, option.rect.y, option.text, colr)
        })
    }
}

export default Menu