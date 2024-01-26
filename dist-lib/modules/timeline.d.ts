export interface TimelineEvent {
    eventName: string;
    elapsedTime: number;
    hasExecuted: boolean;
    callback: TimelineCallback;
}
export interface TimelineCallback {
    (event: TimelineEvent): void;
}
export interface OnTimelineEnded {
    (timeline: Timeline): void;
}
/**
 * Timeline class will be used by cutscenes to track
 * events and timing.  Put your event in the callback on the
 * timeline and call Update() every frame.
 */
export declare class Timeline {
    events: TimelineEvent[];
    elapsedTime: number;
    elapsedMaxTime: number;
    repeat: boolean;
    active: boolean;
    onEnded: OnTimelineEnded;
    addEvent(name: string, elapsedTime: number, callback: TimelineCallback): void;
    Update(delta: number): void;
}
