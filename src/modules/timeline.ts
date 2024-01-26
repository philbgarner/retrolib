export interface TimelineEvent {
    eventName: string,
    elapsedTime: number,
    hasExecuted: boolean,
    callback: TimelineCallback
}

export interface TimelineCallback {
    (event: TimelineEvent): void
}

export interface OnTimelineEnded {
    (timeline: Timeline): void
}

/**
 * Timeline class will be used by cutscenes to track
 * events and timing.  Put your event in the callback on the
 * timeline and call Update() every frame.
 */
export class Timeline {
    events: TimelineEvent[] = []
    elapsedTime: number = 0
    elapsedMaxTime: number = 0
    repeat: boolean = false
    active: boolean = true
    onEnded: OnTimelineEnded
       
    addEvent(name: string, elapsedTime: number, callback: TimelineCallback) {
        if (elapsedTime > this.elapsedMaxTime) {
            this.elapsedMaxTime = elapsedTime
        }
        this.events.push({ eventName: name, elapsedTime: elapsedTime, callback: callback, hasExecuted: false })
    }

    Update(delta: number) {
        if (!this.active) {
            return
        }

        this.elapsedTime += delta
        if (this.elapsedTime > this.elapsedMaxTime && this.repeat) {
            this.elapsedTime = 0
            if (this.onEnded) {
                this.onEnded(this)
            }
        } else if (this.elapsedTime > this.elapsedMaxTime && this.onEnded) {
            this.onEnded(this)
        }

        this.events.filter(f => !f.hasExecuted && f.elapsedTime <= this.elapsedTime).forEach(event => {
            event.hasExecuted = true
            event.callback(event)
        })
    }
}