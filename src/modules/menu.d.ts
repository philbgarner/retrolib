import Rect from "./Rect";
import Scene from "./scene";
import * as font from './font';
import { LayoutDirection } from "./menus";
export type MenuOption = {
    id: string;
    text: string;
    rect: Rect;
};
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
    constructor(id: string, active: boolean, direction: LayoutDirection, options: MenuOption[], nextSceneId: string, prevSceneId: string);
    Draw(delta: number): void;
}
export default Menu;
