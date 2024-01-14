/**
 * Timeline class will be used by cutscenes to track
 * events and timing.  Put your event in the callback on the
 * timeline and call Update() every frame.
 */
var Timeline = /** @class */ (function () {
    function Timeline() {
        this.events = [];
        this.elapsedTime = 0;
        this.elapsedMaxTime = 0;
        this.repeat = false;
        this.active = true;
    }
    Timeline.prototype.addEvent = function (name, elapsedTime, callback) {
        if (elapsedTime > this.elapsedMaxTime) {
            this.elapsedMaxTime = elapsedTime;
        }
        this.events.push({ eventName: name, elapsedTime: elapsedTime, callback: callback, hasExecuted: false });
    };
    Timeline.prototype.Update = function (delta) {
        var _this = this;
        if (!this.active) {
            return;
        }
        this.elapsedTime += delta;
        if (this.elapsedTime > this.elapsedMaxTime && this.repeat) {
            this.elapsedTime = 0;
            if (this.onEnded) {
                this.onEnded(this);
            }
        }
        else if (this.elapsedTime > this.elapsedMaxTime && this.onEnded) {
            this.onEnded(this);
        }
        this.events.filter(function (f) { return !f.hasExecuted && f.elapsedTime <= _this.elapsedTime; }).forEach(function (event) {
            event.hasExecuted = true;
            event.callback(event);
        });
    };
    return Timeline;
}());
export { Timeline };
//# sourceMappingURL=timeline.js.map