export type KeyboardInputRelationship = {
    inputName: string;
    key: string;
};
export type GamepadInputRelationship = {
    inputName: string;
    button: number;
};
export type GamepadButtonState = {
    controller: number;
    inputName: string;
    value: number;
    pressed: boolean;
    touched: boolean;
};
export type GamepadAxisState = {
    controller: number;
    x: number;
    y: number;
};
export declare function initialize(): void;
/**
 *
 *  Keyboard Input Functions
 *
 */
export declare function onKeyboardDown(fn: Function): void;
export declare function onKeyboardRelease(fn: Function): void;
export declare function keyboardDown(e: KeyboardEvent): void;
export declare function keyboardRelease(e: KeyboardEvent): void;
export declare function setMappedKey(inputName: string, key: string): void;
export declare function getMappedKey(inputName: string): string;
export declare function getMappedKeys(): KeyboardInputRelationship[];
export declare function getKeyState(stateKey: string): boolean;
export declare function getInput(inputName: string): boolean;
/**
 *
 *  Gamepad Input Functions
 *
 */
export declare function onGamepadConnected(fn: Function): void;
export declare function onGamepadDisconnected(fn: Function): void;
export declare function onGamepadUpdated(fn: Function): void;
export declare function gamepadsDidUpdate(): void;
export declare function getGamepads(): Gamepad[];
export declare function getMappedButtonIndex(inputName: string): number;
export declare function getMappedAxisIndex(inputName: string): number;
export declare function getMappedButtons(): GamepadInputRelationship[];
export declare function getButtonState(inputName: string): GamepadButtonState[];
export declare function getAxisState(inputName: string): GamepadAxisState[];
