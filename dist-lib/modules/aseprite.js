import { drawImage } from './images';
/**
 * Sprite controller, a wrapper for Aseprite JSON export format.
 */
var Aseprite = /** @class */ (function () {
    function Aseprite(name, animation) {
        this.name = name;
        this.animation = animation;
        this.frames = animation.frames;
        this.meta = animation.meta;
        this.frameNumber = 0;
        this.elapsed = 0;
        this.frameElapsed = 0;
        this.direction = 1;
        this.flipX = false;
        this.listeners = [
            { name: 'ended', frameNumber: 0, fnEvent: function () { } }
        ];
    }
    Aseprite.prototype.CallListener = function (name, frameNumber) {
        if (this.HasListener(name, frameNumber)) {
            this.GetListener(name, frameNumber).fnEvent(this);
        }
    };
    Aseprite.prototype.GetListener = function (name, frameNumber) {
        if (this.HasListener(name, frameNumber)) {
            var listener = this.listeners.filter(function (f) { return f.name === name && frameNumber === frameNumber; });
            return listener.length === 0 ? null : listener[0];
        }
        return null;
    };
    Aseprite.prototype.AddListener = function (name, frameNumber, callback) {
        if (!this.HasListener(name, frameNumber)) {
            this.listeners.push({ name: name, frameNumber: frameNumber, fnEvent: callback });
        }
    };
    Aseprite.prototype.HasListener = function (name, frameNumber) {
        return this.listeners.filter(function (f) { return f.name === name && frameNumber === frameNumber; }).length > 0 ? true : false;
    };
    Aseprite.prototype.ClearListener = function (name, frameNumber) {
        if (this.HasListener(name, frameNumber)) {
            this.listeners = [];
        }
    };
    Aseprite.prototype.Play = function () {
        this.direction = 1;
    };
    Aseprite.prototype.PlayFromStart = function () {
        this.frameNumber = 0;
        this.frameElapsed = 0;
        this.direction = 1;
        this.elapsed = 0;
    };
    Aseprite.prototype.Pause = function () {
        this.direction = 0;
    };
    Aseprite.prototype.FrameId = function (frameNumber) {
        var frameId = Object.keys(this.frames)[frameNumber];
        return frameId;
    };
    Aseprite.prototype.Frame = function (frameNumber) {
        return this.frames[this.FrameId(frameNumber)];
    };
    Aseprite.prototype.FrameCount = function () {
        return Object.keys(this.frames).length;
    };
    Aseprite.prototype.CurrentFrameId = function () {
        return this.FrameId(this.frameNumber);
    };
    Aseprite.prototype.CurrentFrame = function () {
        return this.Frame(this.frameNumber);
    };
    Aseprite.prototype.FrameMetaTag = function (frameNumber) {
        var tag = this.meta.frameTags.filter(function (f) { return frameNumber >= f.from && frameNumber <= f.to; });
        return tag.length > 0 ? tag[0] : null;
    };
    Aseprite.prototype.MetaTag = function (frameTag) {
        return this.meta.frameTags.filter(function (f) { return f.name === frameTag; });
    };
    Aseprite.prototype.Update = function (delta) {
        this.frameElapsed += delta * this.direction;
        this.elapsed += delta * Math.abs(this.direction);
        var frame = this.CurrentFrame();
        var frameTag = this.FrameMetaTag(this.frameNumber);
        try {
            if (this.direction > 0 && this.frameElapsed >= frame.duration && frameTag.direction === 'forward') {
                this.frameNumber += this.direction;
                this.frameElapsed = 0;
            }
            if (this.frameNumber === Object.keys(this.frames).length - 1) {
                this.CallListener('ended', 0);
            }
            if (this.direction > 0 && this.frameElapsed >= frame.duration
                && frameTag.direction === 'pingpong' && frameTag.to === this.frameNumber) {
                this.direction = this.direction * -1;
                this.frameNumber += this.direction;
                this.frameElapsed = frame.duration;
            }
            else if (this.direction > 0 && this.frameElapsed >= frame.duration
                && frameTag.direction === 'pingpong' && frameTag.to > this.frameNumber) {
                this.frameNumber += this.direction;
                this.frameElapsed = 0;
            }
            if (this.direction < 0 && this.frameElapsed <= 0
                && frameTag.direction === 'pingpong'
                && frameTag.from === this.frameNumber) {
                this.direction = this.direction * -1;
                this.frameElapsed = 0;
            }
            else if (this.direction < 0 && this.frameElapsed <= 0
                && frameTag.direction === 'pingpong'
                && frameTag.from < this.frameNumber) {
                this.frameNumber += this.direction;
                this.frameElapsed = 0;
            }
            if (this.frameNumber > frameTag.to && frameTag.direction === 'forward') {
                this.frameNumber = frameTag.from;
            }
            if (this.HasListener('frame', this.frameNumber)) {
                this.CallListener('frame', this.frameNumber);
            }
        }
        catch (err) {
            console.log(err);
        }
    };
    Aseprite.prototype.Draw = function (x, y) {
        var frame = this.CurrentFrame();
        x = Math.floor(x); // Fractional numbers introduce anti-aliasing that breaks pixel feel on canvas contexts.
        y = Math.floor(y);
        drawImage(this.meta.image, x, y, { x: frame.frame.x, y: frame.frame.y, w: frame.frame.w, h: frame.frame.h }, this.flipX);
    };
    return Aseprite;
}());
export { Aseprite };
//# sourceMappingURL=aseprite.js.map