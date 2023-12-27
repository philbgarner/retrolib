import { InputState } from "./input";
/**
 * Current axes states as of the last updated frame by input name.
 */
export declare let axisState: {
    [key: string]: InputState;
};
/**
 * Current buttons state as of the last upated frame by input name.
 */
export declare let buttonsState: {
    [key: string]: InputState;
};
/**
 * List of input names (IE: action, cancel, etc.) and the button index number they map to.
 */
export declare let buttonsMap: {
    [key: string]: number;
};
/**
 * List of input names (IE: left/right/up/down) and the axis index number they map to.
 */
export declare let axisMap: {
    [key: string]: number[];
};
/**
 * Gamepad timestamp value as of last frame update.
 */
export declare let gamepadsTimestamps: {
    [key: number]: number;
};
/**
 * Event handler function for when a new gamepad is connected.
 */
export declare let gamepadConnected: GamepadConnectedFunction;
/**
 * Event handler function for when a gamepad is disconnected.
 */
export declare let gamepadDisconnected: GamepadDisonnectedFunction;
/**
 * Event handler function for when a gamepad has updated its state.
 */
export declare let gamepadUpdated: GamepadUpdatedFunction;
/**
 * Reset buttons state object to empty.
 */
export declare function resetButtonsState(): void;
/**
 * Reset gamepad timestamps to empty.
 */
export declare function resetGamepadTimestamps(): void;
/**
 * Set gamepad timestamp value by index.
 * @param gamepadNumber Gamepad/controller index.
 * @param timestamp Updated timestamp value.
 */
export declare function setGamepadTimestamps(gamepadNumber: number, timestamp: number): void;
/**
 * Callback function for updates.
 */
export interface GamepadUpdatedFunction {
    (gamepad: Gamepad): void;
}
/**
 * Callback function for connection event.
 */
export interface GamepadConnectedFunction {
    (event: GamepadEvent): void;
}
/**
 * Callback function for disconnection event.
 */
export interface GamepadDisonnectedFunction {
    (event: GamepadEvent): void;
}
/**
 * Button and input name relationships.
 */
export type GamepadInputRelationship = {
    inputName: string;
    button: number;
};
/**
 * Button state stored by input name.
 */
export type GamepadButtonState = {
    controller: number;
    inputName: string;
    value: number;
    pressed: boolean;
    touched: boolean;
};
/**
 * Gamepad axes x and y states.
 */
export type GamepadAxisState = {
    controller: number;
    x: number;
    y: number;
};
/**
 * Reset button mappings to defaults.
 */
export declare function resetGamepadButtonMappings(): void;
/**
 * Reset axis mappings to defaults.
 */
export declare function resetGamepadAxisMappings(): void;
/**
 * Set the callback for the gamepadconnected event.
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/gamepadconnected_event
 * @param fn Callback function for when a gamepad connects.
 */
export declare function onGamepadConnected(fn: GamepadConnectedFunction): void;
/** Set the callback for the gamepaddisconnected event.
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/gamepaddisconnected_event
 */
export declare function onGamepadDisconnected(fn: GamepadDisonnectedFunction): void;
/**
 * Set the callback for when a gamepad input or axis state has changed.
 * @param fn Callback function.
 */
export declare function onGamepadUpdated(fn: GamepadUpdatedFunction): void;
/**
 * Run once per frame to update internal state objects and trigger event callbacks.
 */
export declare function gamepadsDidUpdate(): void;
/**
 * Get the list of currently connected Gamepad typed objects.
 * https://developer.mozilla.org/en-US/docs/Web/API/Gamepad
 * @returns Array of gamepad objects in order by Gamepad.index property.
 */
export declare function getGamepads(): Gamepad[];
/**
 * Get the gamepad button index mapped to inputName.
 * @param inputName Input name.
 * @returns
 */
export declare function getMappedButtonIndex(inputName: string): number;
/**
 * List all input relationships mapped to the gamepad buttons.
 */
export declare function getMappedButtons(): GamepadInputRelationship[];
/**
 * Set a button mapping by input name.
 * @param inputName Input name.
 * @param buttonIndex Gamepad object's button index to assign to this input name.
 */
export declare function setMappedButton(inputName: string, buttonIndex: number): void;
/**
 * Get the current gamepad button state by input name.
 * @param inputName Input name.
 * @returns Current gamepad button state.
 */
export declare function getButtonState(inputName: string): GamepadButtonState[];
/**
 * Get the current axis input state by input name.
 * @param inputName Input name.
 * @returns Gamepad object's axis input state.
 */
export declare function getAxisInputState(inputName: string): InputState;
/**
 * Gets the current axis state data from the connected gamepads and returns a
 * transformed object showing only controller indices and x/y states.
 * @param inputName Input name.
 * @returns
 */
export declare function getAxisData(inputName: string): GamepadAxisState[];
