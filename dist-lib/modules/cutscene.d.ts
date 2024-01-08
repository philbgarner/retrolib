import { Rect } from "../retrolib";
import { ColorRGBA } from "./font";
import Scene from "./scene";
export interface onEndedFunction {
    (line: DialogLine): void;
}
export type DialogLine = {
    speaker: string;
    color: ColorRGBA;
    text: string;
    onEnded?: onEndedFunction;
};
export type CutsceneDialog = {
    lines: DialogLine[];
    rect: Rect;
    skippable: boolean;
};
declare class Cutscene extends Scene {
    dialogs: CutsceneDialog[];
    dialogNumber: number;
    lineNumber: number;
    characterNumber: number;
    lastSpaceNumber: number;
    nextSceneId: string;
    color: ColorRGBA;
    letterSpeed: number;
    lastLetterTimestamp: number;
    pauseLetterIncrement: boolean;
    linePauseTime: number;
    dialogPauseTime: number;
    constructor(id: string, active: boolean, nextSceneId: string, dialogs: CutsceneDialog[]);
}
export default Cutscene;
