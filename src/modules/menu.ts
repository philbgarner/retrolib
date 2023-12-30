import Rect from "./rect"
import Scene, { AnimationFrameFunction } from "./scene"
import * as font from './font'
import { LayoutDirection } from "./menus"
import { canvasHeight, canvasWidth, scenes } from "../retrolib"
import { getContext } from "./images"

/**
 * Menu item.
 */
export type MenuOption = { 
    id: string,
    text: string,
    rect: Rect
}

export enum TransitionEffect {
    Fade = 0,
    Instant,
}

/**
 * Menu input type.
 */
export enum MenuInputType {
    Selection = 0,
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
    color: font.ColorRGBA
    selectedColor: font.ColorRGBA
    clearFrame: boolean
    
    selectSpeed: number
    incrementSelectionInput: string
    decrementSelectionInput: string

    actionInput: string
    cancelInput: string

    incrementSecondaryInput: string
    decrementSecondaryInput: string

    itemInputHandler: OnInputFunction

    /**
     * 
     * @param id Scene id.
     * @param active Whether or not the scene starts activated.
     * @param direction Layout direction.
     * @param options Menu options (items).
     * @param handleItemInput (Optional) Callback that executes when an input event occurs.
     */
    constructor(id: string, active: boolean, direction: LayoutDirection, options: MenuOption[], handleItemInput?: OnInputFunction) {
        handleItemInput = handleItemInput ? handleItemInput : () => {}
        const animationFrame: AnimationFrameFunction = (delta: number) => {
            this.Draw(delta)
        }
        super(id, animationFrame, active, undefined, undefined, (event) => console.log('event', event))

        this.itemInputHandler = handleItemInput

        this.ctx = getContext()

        this.clearFrame = true

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

        this.handleInput = (input: string, amt: number, released: boolean) => {
            if (input === this.decrementSelectionInput && released) {
                this.DecrementSelection()
                this.itemInputHandler(this, this.Selected(), MenuInputType.DecrementPrimary)
            } else if (input === this.incrementSelectionInput && released) {
                this.IncrementSelection()
                this.itemInputHandler(this, this.Selected(), MenuInputType.IncrementPrimary)
            } else if (input === this.actionInput && released) {
                this.itemInputHandler(this, this.Selected(), MenuInputType.Selection)
            } else if (input === this.cancelInput && released) {
                this.itemInputHandler(this, this.Selected(), MenuInputType.Cancel)
            }

        }

        this.onActivate = () => {}
        this.onDeactivate = () => {}
    }

    /**
     * Transition from one scene to another using a predefined effect.
     * @param sceneId Menu or Scene Id to transition to.
     * @param effect Which transition effect to take.
     * @param duration Time to take applying the effect while deactivating and activating scenes.
     * @param steps Amount of steps to divide the duration by and update the effect amount.
     */
    TransitionTo(sceneId: string, effect: TransitionEffect, duration: number, steps: number) {
        return new Promise<void>((resolve, reject) => {
            const sceneTo = scenes.getScene(sceneId)
            const sceneFrom = scenes.getScene(this.id)
            if (sceneTo) {
                sceneTo.opacity = 0
                sceneFrom.pauseInput = true
                switch(effect) {
                    case TransitionEffect.Instant:
                        scenes.deActivateScene(this.id)
                        scenes.activateScene(sceneTo.id)
                        resolve()
                        break
                    case TransitionEffect.Fade:
                        let opacity = 1
                        let stepAmt = opacity / steps

                        // Run Fade In Loop
                        const fadeIn = () => {
                            if (opacity < 1) {
                                opacity += stepAmt
                            } else {
                                opacity = 1
                                resolve()
                                return
                            }
                            sceneTo.opacity = opacity
                            setTimeout(fadeIn, (duration / 2) / steps)
                        }
                        
                        // Run Fade Out Loop
                        const fadeOut = () => {
                            if (opacity > 0) {
                                opacity -= stepAmt
                            } else {
                                opacity = 0
                                scenes.deActivateScene(sceneFrom.id)
                                scenes.activateScene(sceneTo.id)
                                fadeIn()
                                return
                            }
                            sceneFrom.opacity = opacity
                            setTimeout(fadeOut, (duration / 2) / steps)
                        }
                        fadeOut()
                        break
                }
            }
        })
    }

    /**
     * Returns the currently selected menu option.
     */
    Selected(): MenuOption {
        return this.options[Math.floor(this.selectedOption)]
    }

    /**
     * Decrement the selection (move up or left depending on orientation).
     * @param speed Adjust the selectSpeed specified on the menu by this factor.
     */
    DecrementSelection(speed?: number): void {
        speed = speed === undefined ? 1 : (this.selectSpeed * speed)
        this.selectedOption -= speed
        if (this.selectedOption < 0) {
            this.selectedOption = this.options.length - 1
        }
    }

    /**
     * Increment the selection (move down or right depending on orientation).
     * @param speed Adjust the selectSpeed specified on the menu by this factor.
     */
    IncrementSelection(speed?: number): void {
        speed = speed === undefined ? 1 : (this.selectSpeed * speed)
        this.selectedOption += speed
        if (this.selectedOption >= this.options.length) {
            this.selectedOption = 0
        }
    }

    /**
     * Draw the menu.
     * @param delta 
     */
    // eslint-disable-next-line
    Draw(delta: number) {
        this.ctx.clearRect(0, 0, canvasWidth, canvasHeight)
        this.options.forEach((option, index) => {
            const colr = Math.floor(this.selectedOption) === index ? this.selectedColor : this.color
            font.drawText(option.rect.x, option.rect.y, option.text, colr)
        })
    }
}

export default Menu