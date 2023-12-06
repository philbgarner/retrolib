import Rect from "./Rect";
import Scene from "./scene";
import * as font from './font';
import { LayoutDirection } from "./menus";
export type MenuOption = {
    id: string;
    text: string;
    rect: Rect;
    onAction?: OnSelectionFunction;
    onCancel?: OnSelectionFunction;
};
export interface OnSelectionFunction {
    (menu: Menu, option: MenuOption): void;
}
/**
 * Menu Flavour of Scenes.
 */
declare class Menu extends Scene {
    offsetX: number;
    offsetY: number;
    options: MenuOption[];
    selectedOption: number;
    ctx: CanvasRenderingContext2D;
    color: font.ColorRGBA;
    selectedColor: font.ColorRGBA;
    selectSpeed: number;
    incrementSelectionInput: string;
    decrementSelectionInput: string;
    nextSceneId: string;
    prevSceneId: string;
    actionInput: string;
    cancelInput: string;
    constructor(id: string, active: boolean, direction: LayoutDirection, options: MenuOption[], nextSceneId: string, prevSceneId: string);
    /**
     * Returns the currently selected menu option.
     */
    Selected(): MenuOption;
    /**
     * Draw the menu.
     * @param delta
     */
    Draw(delta: number): void;
}
export default Menu;
