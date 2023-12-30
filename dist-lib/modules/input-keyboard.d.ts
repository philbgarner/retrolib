import { InputState } from "./input";
export declare function resetKeysState(): void;
export declare function getMappedKey(inputName: string): string;
export interface KeyboardDownFunction {
    (event: KeyboardEvent): void;
}
export interface KeyboardReleaseFunction {
    (event: KeyboardEvent): void;
}
export type KeyboardInputRelationship = {
    inputName: string;
    key: string;
};
export declare function getMappedKeys(): KeyboardInputRelationship[];
export declare function getKeyState(stateKey: string): InputState;
export declare function getInputKeyState(inputName: string): InputState;
export declare function onKeyboardDown(fn: KeyboardDownFunction): void;
export declare function onKeyboardRelease(fn: KeyboardReleaseFunction): void;
export declare function keyboardDown(e: KeyboardEvent): void;
export declare function keyboardRelease(e: KeyboardEvent): void;
