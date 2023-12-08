import Rect from "./rect";
import * as fonts from "./font";
import Menu, { MenuOption } from "./menu";

export enum LayoutDirection {
    TopDown = 0,
    LeftToRight,
}

/**
 * Take a list of strings and create a menu with the options automatically laid out.
 * @param options 
 * @param direction 
 * @param margin 
 * @param startX 
 * @param startY 
 * @returns 
 */
export function LayoutMenu(id: string, options: string[], direction: LayoutDirection, margin: number, startX: number, startY: number): Menu {
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
    
    return new Menu(id, true, direction, menuOptions)
}