/**
 * Input state stored by input name.
 */
export declare const inputState: {
    [key: string]: InputState;
};
/**
 * Input released callback function.
 */
export declare let onInputReleased: InputReleasedFunction;
/**
 * Input pressed callback function.
 */
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
/**
 * Keyboard and Gamepad input name to key/button/axis relationships. Can map multiple inputs to the same input name.
 */
export declare let inputMaps: {
    [key: string]: InputMap[];
};
/**
 * Input settings global object.
 */
export declare const settings: InputSettings;
/**
 * Input types.
 */
export declare enum InputType {
    Keyboard = 0,
    GamepadButton = 1,
    GamepadAxis = 2
}
/**
 * Pressed/released status for inputs.
 */
export declare enum InputState {
    Released = 0,
    Pressed = 1
}
/**
 * Relationship of input names (mapKey) to axis states.
 */
export type InputMap = {
    type: InputType;
    mapKey: string;
    parent: string;
    axisPlane: string;
    axisCheckDirection: number;
};
/**
 * Input settings.
 */
export type InputSettings = {
    axisPressedThreshold: number;
};
/**
 * Callback function for when an input that was pressed is released.
 */
export interface InputReleasedFunction {
    (inputName: string, controller?: number): void;
}
/**
 * Callback function for when an iput that was released is now pressed.
 */
export interface InputPressedFunction {
    (inputName: string, controller?: number): void;
}
/**
 * Set the default states and mappings, set the event listeners and route input changes to the scenes' handleInput functions.
 */
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
/**
 * Whether or not a gamepad button mapped to the input name is pressed.
 * @param inputName Input name mapped to a button.
 * @param gamepadNumber Connected gamepad to check the pressed state on. If not specified it defaults to the first connected gamepad.
 * @returns
 */
export declare function buttonPressed(inputName: string, gamepadNumber?: number): boolean;
/**
 * Whether or not a gamepad button mapped to the input name is pressed.
 * @param inputName Input name mapped to a button.
 * @param gamepadNumber Connected gamepad to check the pressed state on. If not specified it defaults to the first connected gamepad.
 * @returns
 */
export declare function buttonReleased(inputName: string, gamepadNumber?: number): boolean;
/**
 * Whether or not a gamepad axis mapped to the input name is pressed.
 * @param inputName Input name mapped to a button.
 * @param gamepadNumber Connected gamepad to check the pressed state on. If not specified it defaults to the first connected gamepad.
 * @returns
 */
export declare function axisPressed(inputName: string, axisPlane: number, direction: number, gamepadNumber?: number): boolean;
