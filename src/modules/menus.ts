import Rect from "./rect"
import * as fonts from "./font"
import * as scenes from './scenes'
import { TransitionEffect } from './scenes'
import Menu, { MenuOption, OnInputFunction, MenuInputType } from "./menu"

/**
 * Top to bottom layout or left to right.
 */
export enum LayoutDirection {
    TopDown = 0,
    LeftToRight,
}

/**
 * Optional argument with extra parameters for the layout function.
 */
export type LayoutExtras = {
    onInput: OnInputFunction
}

/**
 * Take a list of strings and create a menu with the options automatically laid out.
 * @param options Items in the menu list.
 * @param direction TopDown (row) or LeftToRight (column) layout.
 * @param margin Number of pixels to add between options.
 * @param startX Top left coordinate of starting point.
 * @param startY Top left coordinate of starting point.
 * @param extras Extra options for layout (optional).
 * @returns 
 */
export function LayoutMenu(id: string, options: string[], direction: LayoutDirection, margin: number, startX: number, startY: number, nextSceneId: string, prevSceneId: string, extras?: LayoutExtras): Menu {
    const menuOptions: MenuOption[] = []
    let dx = startX
    let dy = startY
    options.forEach((value, index) => {
        const w: number = fonts.textWidth(value)
        const h: number = fonts.textHeight(value)
        if (direction === LayoutDirection.TopDown) {
            dy += h + margin
        } else if (direction === LayoutDirection.LeftToRight) {
            dx += w + margin
        }
        
        menuOptions.push({ id: index.toString(), text: value, rect: new Rect(dx, dy, w, h) })
    })
    
    const menu = new Menu(id, true, direction, menuOptions)
    menu.itemInputHandler = (menu, option, event) => {
        // If defined in extras, go with a user-defined onInput event handler.
        let handled = false
        if (extras && extras.onInput) {
            handled = extras.onInput(menu, option, event)
        } 
        if (!handled) {           
            if (event === MenuInputType.Selection && nextSceneId.length > 0) {
                console.log('selection')
                const nextScene: Menu = scenes.getScene(nextSceneId) as Menu
                if (nextScene && nextScene.TransitionTo) {
                    menu.TransitionTo(nextScene.id, TransitionEffect.Fade, 300, 100)
                }
            }
            if (event === MenuInputType.Cancel && prevSceneId.length > 0) {
                console.log('cancel')
                const prevScene: Menu = scenes.getScene(prevSceneId) as Menu
                if (prevScene && prevScene.TransitionTo) {
                    menu.TransitionTo(prevScene.id, TransitionEffect.Fade, 300, 100)
                }
            }
        }
        return false
    }
    return menu
}