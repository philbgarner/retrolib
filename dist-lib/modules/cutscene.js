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
import { font } from "../retrolib";
import Scene from "./scene";
import { TransitionEffect } from "./scenes";
var Cutscene = /** @class */ (function (_super) {
    __extends(Cutscene, _super);
    function Cutscene(id, active, nextSceneId, dialog) {
        var _this = this;
        var animationFrame = function (delta) {
            if (_this.dialog === undefined) {
                return;
            }
            if (_this.elapsed >= _this.lastLetterTimestamp + _this.letterSpeed && !_this.pauseLetterIncrement) {
                _this.characterNumber++;
                _this.lastLetterTimestamp = _this.elapsed;
            }
            if (_this.characterNumber >= _this.dialog.lines[_this.lineNumber].length && !_this.pauseLetterIncrement) {
                _this.characterNumber = 0;
                _this.lineNumber++;
            }
            if (_this.lineNumber >= _this.dialog.lines.length) {
                _this.pauseLetterIncrement = true;
                setTimeout(function () { return _this.TransitionTo(_this.nextSceneId, TransitionEffect.Fade, 200, 16); }, _this.linePauseTime);
            }
            font.drawText(dialog.coords.x, dialog.coords.y, dialog.lines[_this.lineNumber].slice(0, _this.characterNumber), _this.color);
        };
        _this = _super.call(this, id, animationFrame, active, function () { }, function () { }, function () { }) || this;
        _this.lineNumber = 0;
        _this.characterNumber = 0;
        _this.letterSpeed = 60;
        _this.lastLetterTimestamp = 0;
        _this.pauseLetterIncrement = false;
        _this.linePauseTime = 600;
        _this.handleItemInput = function (input, amt, released) {
            if (['action', 'cancel'].includes(input) && !_this.pauseLetterIncrement) {
                _this.pauseLetterIncrement = true;
                setTimeout(function () {
                    _this.lineNumber++;
                    _this.pauseLetterIncrement = false;
                }, _this.linePauseTime);
            }
        };
        _this.lineNumber = 0;
        _this.characterNumber = 0;
        _this.dialog = dialog;
        _this.color = { r: 225, g: 225, b: 225, a: 255 };
        _this.nextSceneId = nextSceneId;
        return _this;
    }
    return Cutscene;
}(Scene));
export default Cutscene;
//# sourceMappingURL=cutscene.js.map