import { Rect } from "../retrolib";
import { ColorRGBA } from "./font";
import Scene from "./scene";
import { InputHandlerFunction } from "./scenes";
export type CutsceneDialog = {
    speaker: string;
    lines: string[];
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
    handleItemInput: InputHandlerFunction;
    constructor(id: string, active: boolean, nextSceneId: string, dialogs: CutsceneDialog[]);
}
export default Cutscene;
