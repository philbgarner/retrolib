import Menu from "./menu";
export declare enum LayoutDirection {
    TopDown = 0,
    LeftToRight = 1
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
export declare function LayoutMenu(id: string, options: string[], direction: LayoutDirection, margin: number, startX: number, startY: number): Menu;
