import { InputState } from "./input";
/**
 *
 * Globals
 *
 */
export declare let buttonsState: {
    [key: string]: InputState;
};
export declare let buttonsMap: {
    [key: string]: number;
};
export declare let axisMap: {
    [key: string]: number[];
};
export declare let gamepadsTimestamps: {
    [key: number]: number;
};
export declare let gamepadConnected: GamepadConnectedFunction;
export declare let gamepadDisconnected: GamepadDisonnectedFunction;
export declare let gamepadUpdated: GamepadUpdatedFunction;
export declare function resetButtonsState(): void;
export declare function resetGamepadTimestamps(): void;
export interface GamepadUpdatedFunction {
    (gamepad: Gamepad): void;
}
export interface GamepadConnectedFunction {
    (event: GamepadEvent): void;
}
export interface GamepadDisonnectedFunction {
    (event: GamepadEvent): void;
}
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
/**
 * Reset button mappings to defaults.
 */
export declare function resetGamepadButtonMappings(): void;
export declare function resetGamepadAxisMappings(): void;
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
