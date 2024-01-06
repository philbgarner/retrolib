import { Coordinates } from "../retrolib";
import { ColorRGBA } from "./font";
import Scene from "./scene";
import { InputHandlerFunction } from "./scenes";
export type CutsceneDialog = {
    speaker: string;
    lines: string[];
    coords: Coordinates;
    skippable: boolean;
};
declare class Cutscene extends Scene {
    dialog: CutsceneDialog;
    lineNumber: number;
    characterNumber: number;
    nextSceneId: string;
    color: ColorRGBA;
    letterSpeed: number;
    lastLetterTimestamp: number;
    pauseLetterIncrement: boolean;
    linePauseTime: number;
    handleItemInput: InputHandlerFunction;
    constructor(id: string, active: boolean, nextSceneId: string, dialog: CutsceneDialog);
}
export default Cutscene;
