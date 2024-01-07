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
    function Cutscene(id, active, nextSceneId, dialogs) {
        var _this = this;
        var animationFrame = function (delta) {
            if (_this.dialogs !== undefined) {
                if (!_this.pauseLetterIncrement) {
                    if (_this.elapsed >= _this.lastLetterTimestamp + _this.letterSpeed) {
                        _this.characterNumber++;
                        if (_this.dialogs[_this.dialogNumber].lines[_this.lineNumber].slice(_this.characterNumber, _this.characterNumber + 1) === ' ') {
                            _this.lastSpaceNumber = _this.characterNumber;
                        }
                        _this.lastLetterTimestamp = _this.elapsed;
                    }
                    if (_this.characterNumber >= _this.dialogs[_this.dialogNumber].lines[_this.lineNumber].length) {
                        _this.pauseLetterIncrement = true;
                        _this.characterNumber = _this.dialogs[_this.dialogNumber].lines[_this.lineNumber].length;
                        setTimeout(function () {
                            _this.lineNumber++;
                            _this.characterNumber = 0;
                            _this.lastSpaceNumber = 0;
                            _this.pauseLetterIncrement = false;
                        }, _this.linePauseTime);
                    }
                    if (_this.lineNumber >= _this.dialogs[_this.dialogNumber].lines.length) {
                        _this.pauseLetterIncrement = true;
                        _this.lineNumber = _this.dialogs[_this.dialogNumber].lines.length - 1;
                        _this.lastSpaceNumber = 0;
                        _this.dialogNumber++;
                        if (_this.dialogNumber >= _this.dialogs.length) {
                            setTimeout(function () { return _this.TransitionTo(_this.nextSceneId, TransitionEffect.Fade, 200, 16); }, _this.dialogPauseTime);
                        }
                        else {
                            _this.lineNumber = 0;
                            _this.characterNumber = 0;
                            _this.lastSpaceNumber = 0;
                        }
                    }
                }
                if (_this.dialogNumber < _this.dialogs.length && _this.lineNumber < _this.dialogs[_this.dialogNumber].lines.length) {
                    // If the current line would overflow the width, wrap from the last space character.
                    // TODO: Make this split on newlines and then get the max height.
                    var linesUpTo = _this.dialogs[_this.dialogNumber].lines[_this.lineNumber].slice(0, _this.characterNumber).split('\n');
                    console.log('lines up to', linesUpTo);
                    linesUpTo.forEach(function (lines) {
                        if (font.textWidth(lines) >= _this.dialogs[_this.dialogNumber].rect.w) {
                            _this.dialogs[_this.dialogNumber].lines[_this.lineNumber] = _this.dialogs[_this.dialogNumber].lines[_this.lineNumber].slice(0, _this.lastSpaceNumber) + '\n' + _this.dialogs[_this.dialogNumber].lines[_this.lineNumber].slice(_this.lastSpaceNumber + 1);
                        }
                    });
                    font.drawText(_this.dialogs[_this.dialogNumber].rect.x, _this.dialogs[_this.dialogNumber].rect.y, _this.dialogs[_this.dialogNumber].lines[_this.lineNumber].slice(0, _this.characterNumber), _this.color);
                }
            }
        };
        _this = _super.call(this, id, animationFrame, active, function () { }, function () { }, function () { }) || this;
        _this.dialogNumber = 0;
        _this.lineNumber = 0;
        _this.characterNumber = 0;
        _this.lastSpaceNumber = 0;
        _this.letterSpeed = 60;
        _this.lastLetterTimestamp = 0;
        _this.pauseLetterIncrement = false;
        _this.linePauseTime = 1500;
        _this.dialogPauseTime = 3000;
        _this.handleItemInput = function (input, amt, released) {
            if (['action', 'cancel'].includes(input) && !_this.pauseLetterIncrement) {
                _this.pauseLetterIncrement = true;
                _this.characterNumber = _this.dialogs[_this.dialogNumber].lines[_this.lineNumber].length - 1;
                setTimeout(function () {
                    _this.lineNumber++;
                    _this.lastSpaceNumber = 0;
                    _this.pauseLetterIncrement = false;
                }, _this.linePauseTime);
            }
        };
        _this.lineNumber = 0;
        _this.characterNumber = 0;
        _this.dialogs = dialogs;
        _this.color = { r: 225, g: 225, b: 225, a: 255 };
        _this.nextSceneId = nextSceneId;
        return _this;
    }
    return Cutscene;
}(Scene));
export default Cutscene;
//# sourceMappingURL=cutscene.js.map