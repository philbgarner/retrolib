/**
 *
 * Globals
 *
 */
/**
 *
 * Enums
 *
 */
export declare enum InputType {
    Keyboard = 0,
    GamepadButton = 1,
    GamepadAxis = 2
}
/**
 *
 * Types
 *
 */
export type InputMap = {
    type: InputType;
    mapKey: string;
    axisPlane: string;
    axisCheckDirection: number;
};
export type InputSettings = {
    axisPressedThreshold: number;
};
export interface KeyboardDownFunction {
    (event: KeyboardEvent): void;
}
export interface KeyboardReleaseFunction {
    (event: KeyboardEvent): void;
}
export interface GamepadUpdatedFunction {
    (gamepad: Gamepad): void;
}
export interface GamepadConnectedFunction {
    (event: GamepadEvent): void;
}
export interface GamepadDisonnectedFunction {
    (event: GamepadEvent): void;
}
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
 * Reset button mappings to defaults.
 */
export declare function resetGamepadButtonMappings(): void;
export declare function resetGamepadAxisMappings(): void;
export declare function resetKeyboardMappings(): void;
export declare function resetInputMaps(): void;
/**
 *
 *  Keyboard Input Functions
 *
 */
export declare function onKeyboardDown(fn: KeyboardDownFunction): void;
export declare function onKeyboardRelease(fn: KeyboardReleaseFunction): void;
export declare function keyboardDown(e: KeyboardEvent): void;
export declare function keyboardRelease(e: KeyboardEvent): void;
export declare function setMappedKey(inputName: string, key: string): void;
export declare function getMappedKey(inputName: string): string;
export declare function getMappedKeys(): KeyboardInputRelationship[];
export declare function getKeyState(stateKey: string): boolean;
export declare function getInputKeyState(inputName: string): boolean;
/**
 *
 *  Gamepad Input Functions
 *
 */
export declare function onGamepadConnected(fn: GamepadConnectedFunction): void;
export declare function onGamepadDisconnected(fn: GamepadDisonnectedFunction): void;
export declare function onGamepadUpdated(fn: GamepadUpdatedFunction): void;
export declare function gamepadsDidUpdate(): void;
export declare function getGamepads(): Gamepad[];
export declare function getMappedButtonIndex(inputName: string): number;
export declare function getMappedButtons(): GamepadInputRelationship[];
export declare function setMappedButton(inputName: string, buttonIndex: number): void;
export declare function getButtonState(inputName: string): GamepadButtonState[];
export declare function getAxisState(inputName: string): GamepadAxisState[];
/**
 * Whether or not the specified button or key that maps to inputName is pressed. Not used for axes or triggers.
 * @param inputName Input name mapped to a button.
 * @param gamepadNumber
 * @returns
 */
export declare function inputPressed(inputName: string, gamepadNumber?: number): boolean;
export declare function buttonPressed(inputName: string, gamepadNumber?: number): boolean;
export declare function axisPressed(inputName: string, axisPlane: number, direction: number, gamepadNumber?: number): boolean;
