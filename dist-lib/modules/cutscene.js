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
            if (_this.dialogs !== undefined && _this.dialogs[_this.dialogNumber] !== undefined) {
                var line_1 = _this.dialogs[_this.dialogNumber].lines[_this.lineNumber];
                if (!_this.pauseLetterIncrement && _this.dialogNumber < _this.dialogs.length && line_1 !== undefined) {
                    if (_this.elapsed >= _this.lastLetterTimestamp + _this.letterSpeed) {
                        _this.characterNumber++;
                        if (_this.lineNumber < _this.dialogs[_this.dialogNumber].lines.length
                            && line_1.text.slice(_this.characterNumber, _this.characterNumber + 1) === ' '
                            && font.textWidth(line_1.text.slice(0, _this.characterNumber)) < _this.dialogs[_this.dialogNumber].rect.w) {
                            _this.lastSpaceNumber = _this.characterNumber;
                        }
                        _this.lastLetterTimestamp = _this.elapsed;
                    }
                    if (_this.characterNumber >= line_1.text.length) {
                        _this.pauseLetterIncrement = true;
                        _this.characterNumber = line_1.text.length;
                        setTimeout(function () {
                            if (line_1.onEnded) {
                                line_1.onEnded(line_1);
                            }
                            _this.lineNumber++;
                            _this.characterNumber = 0;
                            _this.lastSpaceNumber = 0;
                            _this.pauseLetterIncrement = false;
                            if (_this.lineNumber >= _this.dialogs[_this.dialogNumber].lines.length) {
                                _this.lineNumber = 0;
                                _this.dialogNumber++;
                                if (_this.dialogNumber >= _this.dialogs.length) {
                                    setTimeout(function () { return _this.TransitionTo(_this.nextSceneId, TransitionEffect.Fade, 200, 16); }, _this.dialogPauseTime);
                                }
                            }
                        }, _this.linePauseTime);
                    }
                }
                if (_this.dialogNumber < _this.dialogs.length && _this.lineNumber <= _this.dialogs[_this.dialogNumber].lines.length - 1) {
                    // If the current line would overflow the width, wrap from the last space character.
                    var linesUpTo = line_1.text.slice(0, _this.characterNumber);
                    if (font.textWidth(linesUpTo) >= _this.dialogs[_this.dialogNumber].rect.w) {
                        line_1.text = line_1.text.slice(0, _this.lastSpaceNumber) + '\n' + line_1.text.slice(_this.lastSpaceNumber + 1);
                    }
                    font.drawText(_this.dialogs[_this.dialogNumber].rect.x, _this.dialogs[_this.dialogNumber].rect.y, line_1.text.slice(0, _this.characterNumber), line_1.color);
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
        _this.handleInput = function (input, amt, released) {
            if (['action', 'cancel'].includes(input) && !_this.pauseLetterIncrement) {
                _this.pauseLetterIncrement = true;
                _this.characterNumber = _this.dialogs[_this.dialogNumber].lines[_this.lineNumber].text.length - 1;
                // TODO: Iterate remaining characters up to the length instead of just jumping there calculating newlines to get
                // the correct text wrapping.
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