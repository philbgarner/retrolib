import Rect from "./rect";
import Scene from "./scene";
import * as font from './font';
import { LayoutDirection } from "./menus";
/**
 * Menu item.
 */
export type MenuOption = {
    id: string;
    text: string;
    rect: Rect;
};
/**
 * Menu input type.
 */
export declare enum MenuInputType {
    Selection = 0,
    Cancel = 1,
    IncrementPrimary = 2,
    DecrementPrimary = 3,
    IncrementSecondary = 4,
    DecrementSecondary = 5
}
/**
 * Function that fires when the user presses either the 'action' or 'cancel' mapped inputs.
 */
export interface OnSelectionFunction {
    (menu: Menu, option: MenuOption): void;
}
/**
 * Function that fires when an input event occurs on a selected menu item.
 */
export interface OnInputFunction {
    (menu: Menu, option: MenuOption, event: MenuInputType): boolean;
}
/**
 * Menu Flavour of Scenes.
 */
declare class Menu extends Scene {
    offsetX: number;
    offsetY: number;
    options: MenuOption[];
    selectedOption: number;
    color: font.ColorRGBA;
    selectedColor: font.ColorRGBA;
    selectSpeed: number;
    incrementSelectionInput: string;
    decrementSelectionInput: string;
    actionInput: string;
    cancelInput: string;
    incrementSecondaryInput: string;
    decrementSecondaryInput: string;
    itemInputHandler: OnInputFunction;
    /**
     *
     * @param id Scene id.
     * @param active Whether or not the scene starts activated.
     * @param direction Layout direction.
     * @param options Menu options (items).
     * @param handleItemInput (Optional) Callback that executes when an input event occurs.
     */
    constructor(id: string, active: boolean, direction: LayoutDirection, options: MenuOption[], handleItemInput?: OnInputFunction);
    /**
     * Returns the currently selected menu option.
     */
    Selected(): MenuOption;
    /**
     * Decrement the selection (move up or left depending on orientation).
     * @param speed Adjust the selectSpeed specified on the menu by this factor.
     */
    DecrementSelection(speed?: number): void;
    /**
     * Increment the selection (move down or right depending on orientation).
     * @param speed Adjust the selectSpeed specified on the menu by this factor.
     */
    IncrementSelection(speed?: number): void;
    /**
     * Draw the menu.
     * @param delta
     */
    Draw(delta: number): void;
}
export default Menu;
