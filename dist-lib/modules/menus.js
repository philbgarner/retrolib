import Rect from "./rect";
import * as fonts from "./font";
import * as scenes from './scenes';
import Menu, { MenuInputType } from "./menu";
/**
 * Top to bottom layout or left to right.
 */
export var LayoutDirection;
(function (LayoutDirection) {
    LayoutDirection[LayoutDirection["TopDown"] = 0] = "TopDown";
    LayoutDirection[LayoutDirection["LeftToRight"] = 1] = "LeftToRight";
})(LayoutDirection || (LayoutDirection = {}));
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
export function LayoutMenu(id, options, direction, margin, startX, startY, nextSceneId, prevSceneId, extras) {
    var menuOptions = [];
    var dx = startX;
    var dy = startY;
    options.forEach(function (value, index) {
        var w = fonts.textWidth(value);
        var h = fonts.textHeight(value);
        if (direction === LayoutDirection.TopDown) {
            dy += h + margin;
        }
        else if (direction === LayoutDirection.LeftToRight) {
            dx += w + margin;
        }
        // Default behaviour.
        var fnInput = function (menu, option, event) {
            if (event === MenuInputType.Selection) {
                if (scenes.hasScene(nextSceneId)) {
                    scenes.deActivateScene(id);
                    scenes.activateScene(nextSceneId);
                }
            }
            else if (event === MenuInputType.Cancel) {
                if (scenes.hasScene(prevSceneId)) {
                    scenes.deActivateScene(id);
                    scenes.activateScene(prevSceneId);
                }
            }
        };
        menuOptions.push({ id: index.toString(), text: value, rect: new Rect(dx, dy, w, h) });
    });
    var menu = new Menu(id, true, direction, menuOptions);
    if (extras) {
        // If defined in extras, go with a user-defined onInput event handler.
        if (extras.onInput) {
            menu.itemInputHandler = extras.onInput;
        }
    }
    return menu;
}
//# sourceMappingURL=menus.js.map