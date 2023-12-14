import Rect from "./rect"
import * as fonts from "./font"
import * as scenes from './scenes'
import Menu, { MenuOption, OnInputFunction, MenuInputType } from "./menu"

export enum LayoutDirection {
    TopDown = 0,
    LeftToRight,
}

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
        // Default behaviour.
        let fnInput: OnInputFunction = (menu, option, event) => {
            if (event === MenuInputType.Selection) {
                if (scenes.hasScene(nextSceneId)) {
                    scenes.deActivateScene(id)
                    scenes.activateScene(nextSceneId)
                }
            } else if (event === MenuInputType.Cancel) {
                if (scenes.hasScene(prevSceneId)) {
                    scenes.deActivateScene(id)
                    scenes.activateScene(prevSceneId)
                }
            }
        }
        if (extras) {
            // If defined in extras, go with a user-defined onInput event handler.
            if (extras.onInput) {
                fnInput = extras.onInput
            }
        }
        menuOptions.push({ id: index.toString(), text: value, rect: new Rect(dx, dy, w, h), onInput: fnInput})
    })
    
    return new Menu(id, true, direction, menuOptions)
}