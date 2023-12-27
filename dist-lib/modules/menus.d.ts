import Menu, { OnInputFunction } from "./menu";
/**
 * Top to bottom layout or left to right.
 */
export declare enum LayoutDirection {
    TopDown = 0,
    LeftToRight = 1
}
/**
 * Optional argument with extra parameters for the layout function.
 */
export type LayoutExtras = {
    onInput: OnInputFunction;
};
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
export declare function LayoutMenu(id: string, options: string[], direction: LayoutDirection, margin: number, startX: number, startY: number, nextSceneId: string, prevSceneId: string, extras?: LayoutExtras): Menu;
