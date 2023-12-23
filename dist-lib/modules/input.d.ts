/**
 *
 * Globals
 *
 */
export declare let inputState: {
    [key: string]: InputState;
};
export declare let onInputReleased: InputReleasedFunction;
export declare let onInputPressed: InputPressedFunction;
/**
 * Input Released Event Handler. This gets called by keyboard/gamepad event handlers
 * when a state changes.
 * @param inputName
 * @param controller
 */
export declare function handleInputReleased(inputName: string, controller?: number): void;
/**
 * Input Pressed Event Handler.  This gets called by keyboard/gamepad event handlers
 * when a state changes.
 * @param inputName
 * @param controller
 */
export declare function handleInputPressed(inputName: string, controller?: number): void;
export declare let inputMaps: {
    [key: string]: InputMap[];
};
export declare const settings: InputSettings;
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
export declare enum InputState {
    Released = 0,
    Pressed = 1,
    Releasing = 2
}
/**
 *
 * Types
 *
 */
export type InputMap = {
    type: InputType;
    mapKey: string;
    parent: string;
    axisPlane: string;
    axisCheckDirection: number;
};
export type InputSettings = {
    axisPressedThreshold: number;
};
export interface InputReleasedFunction {
    (inputName: string, controller?: number): void;
}
export interface InputPressedFunction {
    (inputName: string, controller?: number): void;
}
export declare function initialize(): void;
/**
 * Reset button mappings to defaults.
 */
export declare function resetInputMaps(): void;
/**
 * Whether or not the specified button or key that maps to inputName is pressed. Not used for axes or triggers.
 * @param inputName Input name mapped to a button.
 * @param gamepadNumber
 * @returns
 */
export declare function inputPressed(inputName: string, gamepadNumber?: number): boolean;
/**
 * Whether or not the specified button or key that maps to inputName is released. Not used for axes or triggers.
 * @param inputName Input name mapped to a button.
 * @param gamepadNumber
 * @returns
 */
export declare function inputReleased(inputName: string, gamepadNumber?: number): boolean;
export declare function buttonPressed(inputName: string, gamepadNumber?: number): boolean;
export declare function buttonReleased(inputName: string, gamepadNumber?: number): boolean;
export declare function axisPressed(inputName: string, axisPlane: number, direction: number, gamepadNumber?: number): boolean;
