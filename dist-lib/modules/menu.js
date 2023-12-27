var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import Scene from "./scene";
import * as font from './font';
import { LayoutDirection } from "./menus";
import { canvasHeight, canvasWidth } from "../retrolib";
import { getContext } from "./images";
export var MenuInputType;
(function (MenuInputType) {
    MenuInputType[MenuInputType["Selection"] = 0] = "Selection";
    MenuInputType[MenuInputType["Cancel"] = 1] = "Cancel";
    MenuInputType[MenuInputType["IncrementPrimary"] = 2] = "IncrementPrimary";
    MenuInputType[MenuInputType["DecrementPrimary"] = 3] = "DecrementPrimary";
    MenuInputType[MenuInputType["IncrementSecondary"] = 4] = "IncrementSecondary";
    MenuInputType[MenuInputType["DecrementSecondary"] = 5] = "DecrementSecondary";
})(MenuInputType || (MenuInputType = {}));
/**
 * Menu Flavour of Scenes.
 */
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    /**
     *
     * @param id Scene id.
     * @param active Whether or not the scene starts activated.
     * @param direction Layout direction.
     * @param options Menu options (items).
     */
    function Menu(id, active, direction, options) {
        var _this = this;
        var animationFrame = function (delta) {
            _this.Draw(delta);
        };
        _this = _super.call(this, id, animationFrame, active, undefined, undefined, function (event) { return console.log('event', event); }) || this;
        _this.ctx = getContext();
        _this.clearFrame = true;
        _this.offsetX = 0;
        _this.offsetY = 0;
        _this.selectedOption = 0;
        _this.options = options;
        _this.color = { r: 128, g: 128, b: 128, a: 255 };
        _this.selectedColor = { r: 245, g: 245, b: 245, a: 255 };
        _this.selectSpeed = 0.1;
        _this.incrementSelectionInput = direction === LayoutDirection.TopDown ? 'down' : 'right';
        _this.decrementSelectionInput = direction === LayoutDirection.TopDown ? 'up' : 'left';
        _this.incrementSecondaryInput = direction === LayoutDirection.TopDown ? 'right' : 'down';
        _this.decrementSecondaryInput = direction === LayoutDirection.TopDown ? 'left' : 'up';
        _this.actionInput = 'action';
        _this.cancelInput = 'cancel';
        _this.handleInput = function (input, amt, released) {
            // console.log('menu scene handleInput', input, amt, 'released', released)
            if (input === 'up' && released) {
                _this.DecrementSelection();
                // TODO: use the increment primary/secondary, etc.
            }
            else if (input === 'down' && released) {
                _this.IncrementSelection();
                // TODO: use the increment primary/secondary, etc.
            }
            else if (input === 'action' && released) {
                _this.Selected().onInput(_this, _this.Selected(), MenuInputType.Selection);
            }
            if (input === 'cancel' && released) {
                _this.Selected().onInput(_this, _this.Selected(), MenuInputType.Cancel);
            }
        };
        _this.onActivate = function () { };
        _this.onDeactivate = function () { };
        return _this;
    }
    /**
     * Returns the currently selected menu option.
     */
    Menu.prototype.Selected = function () {
        return this.options[Math.floor(this.selectedOption)];
    };
    /**
     * Decrement the selection (move up or left depending on orientation).
     * @param speed Adjust the selectSpeed specified on the menu by this factor.
     */
    Menu.prototype.DecrementSelection = function (speed) {
        speed = speed === undefined ? 1 : (this.selectSpeed * speed);
        this.selectedOption -= speed;
        if (this.selectedOption < 0) {
            this.selectedOption = this.options.length - 1;
        }
    };
    /**
     * Increment the selection (move down or right depending on orientation).
     * @param speed Adjust the selectSpeed specified on the menu by this factor.
     */
    Menu.prototype.IncrementSelection = function (speed) {
        speed = speed === undefined ? 1 : (this.selectSpeed * speed);
        this.selectedOption += speed;
        if (this.selectedOption >= this.options.length) {
            this.selectedOption = 0;
        }
    };
    /**
     * Draw the menu.
     * @param delta
     */
    // eslint-disable-next-line
    Menu.prototype.Draw = function (delta) {
        var _this = this;
        this.ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        this.options.forEach(function (option, index) {
            var colr = Math.floor(_this.selectedOption) === index ? _this.selectedColor : _this.color;
            font.drawText(option.rect.x, option.rect.y, option.text, colr);
        });
    };
    return Menu;
}(Scene));
export default Menu;
//# sourceMappingURL=menu.js.map