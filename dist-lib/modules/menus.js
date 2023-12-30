import Rect from "./rect";
import * as fonts from "./font";
import * as scenes from './scenes';
import { TransitionEffect } from './scene';
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
        menuOptions.push({ id: index.toString(), text: value, rect: new Rect(dx, dy, w, h) });
    });
    var menu = new Menu(id, true, direction, menuOptions);
    menu.itemInputHandler = function (menu, option, event) {
        // If defined in extras, go with a user-defined onInput event handler.
        if (extras && extras.onInput) {
            extras.onInput(menu, option, event);
        }
        else {
            console.log('default menu handling');
            if (event === MenuInputType.Selection && nextSceneId.length > 0) {
                console.log('selection');
                var nextScene = scenes.getScene(nextSceneId);
                if (nextScene && nextScene.TransitionTo) {
                    menu.TransitionTo(nextScene.id, TransitionEffect.Fade, 300, 100);
                }
            }
            if (event === MenuInputType.Cancel && prevSceneId.length > 0) {
                console.log('cancel');
                var prevScene = scenes.getScene(prevSceneId);
                if (prevScene && prevScene.TransitionTo) {
                    menu.TransitionTo(prevScene.id, TransitionEffect.Fade, 300, 100);
                }
            }
        }
    };
    return menu;
}
//# sourceMappingURL=menus.js.map