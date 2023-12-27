import * as scenes from './scenes';
import * as gamepad from './input-gamepad';
import * as keyboard from './input-keyboard';
/**
 *
 * Globals
 *
 */
export var inputState = {};
export var onInputReleased = function () { };
export var onInputPressed = function () { };
/**
 * Input Released Event Handler. This gets called by keyboard/gamepad event handlers
 * when a state changes.
 * @param inputName
 * @param controller
 */
export function handleInputReleased(inputName, controller) {
    // Call the pressed input callback function.
    onInputReleased(inputName, controller);
}
/**
 * Input Pressed Event Handler.  This gets called by keyboard/gamepad event handlers
 * when a state changes.
 * @param inputName
 * @param controller
 */
export function handleInputPressed(inputName, controller) {
    // Call the pressed input callback function.
    onInputPressed(inputName, controller);
}
export var inputMaps;
export var settings = {
    axisPressedThreshold: 0.3
};
/**
 *
 * Enums
 *
 */
export var InputType;
(function (InputType) {
    InputType[InputType["Keyboard"] = 0] = "Keyboard";
    InputType[InputType["GamepadButton"] = 1] = "GamepadButton";
    InputType[InputType["GamepadAxis"] = 2] = "GamepadAxis";
})(InputType || (InputType = {}));
export var InputState;
(function (InputState) {
    InputState[InputState["Released"] = 0] = "Released";
    InputState[InputState["Pressed"] = 1] = "Pressed";
    InputState[InputState["Releasing"] = 2] = "Releasing";
})(InputState || (InputState = {}));
export function initialize() {
    keyboard.resetKeysState();
    keyboard.resetKeyboardMappings();
    gamepad.resetGamepadButtonMappings();
    gamepad.resetGamepadAxisMappings();
    gamepad.resetButtonsState();
    inputMaps = {};
    resetInputMaps();
    gamepad.resetGamepadTimestamps();
    gamepad.onGamepadConnected(function () { });
    gamepad.onGamepadDisconnected(function () { });
    gamepad.onGamepadUpdated(function () { });
    window.removeEventListener('keydown', keyboard.keyboardDown);
    window.addEventListener('keydown', keyboard.keyboardDown);
    window.removeEventListener('keyup', keyboard.keyboardRelease);
    window.addEventListener('keyup', keyboard.keyboardRelease);
    window.ongamepadconnected = function (event) {
        gamepad.gamepadsTimestamps[event.gamepad.index] = 0;
        gamepad.gamepadConnected(event);
    };
    window.ongamepaddisconnected = function (event) {
        gamepad.gamepadDisconnected(event);
        gamepad.gamepadsTimestamps[event.gamepad.index] = undefined;
    };
    onInputPressed = function (inputName) {
        scenes.handleInput(inputName, 1, false);
    };
    onInputReleased = function (inputName) {
        scenes.handleInput(inputName, 0, true);
    };
}
/**
 * Reset button mappings to defaults.
 */
export function resetInputMaps() {
    inputMaps = {
        'left': [
            { parent: 'left', type: InputType.Keyboard, mapKey: 'ArrowLeft', axisPlane: '', axisCheckDirection: 0 },
            { parent: 'left', type: InputType.GamepadAxis, mapKey: 'leftJoystick', axisPlane: 'x', axisCheckDirection: -1 },
            { parent: 'left', type: InputType.GamepadAxis, mapKey: 'dPad', axisPlane: 'x', axisCheckDirection: -1 }
        ],
        'right': [
            { parent: 'right', type: InputType.Keyboard, mapKey: 'ArrowRight', axisPlane: '', axisCheckDirection: 0 },
            { parent: 'right', type: InputType.GamepadAxis, mapKey: 'leftJoystick', axisPlane: 'x', axisCheckDirection: 1 },
            { parent: 'right', type: InputType.GamepadAxis, mapKey: 'dPad', axisPlane: 'x', axisCheckDirection: 1 }
        ],
        'up': [
            { parent: 'up', type: InputType.Keyboard, mapKey: 'ArrowUp', axisPlane: '', axisCheckDirection: 0 },
            { parent: 'up', type: InputType.GamepadAxis, mapKey: 'leftJoystick', axisPlane: 'y', axisCheckDirection: -1 }
        ],
        'down': [
            { parent: 'down', type: InputType.Keyboard, mapKey: 'ArrowDown', axisPlane: '', axisCheckDirection: 0 },
            { parent: 'down', type: InputType.GamepadAxis, mapKey: 'leftJoystick', axisPlane: 'y', axisCheckDirection: 1 }
        ],
        'action': [
            { parent: 'action', type: InputType.Keyboard, mapKey: ' ', axisPlane: '', axisCheckDirection: 0 },
            { parent: 'action', type: InputType.GamepadButton, mapKey: 'action', axisPlane: '', axisCheckDirection: 0 }
        ],
        'cancel': [
            { parent: 'cancel', type: InputType.Keyboard, mapKey: 'Escape', axisPlane: '', axisCheckDirection: 0 },
            { parent: 'cancel', type: InputType.GamepadButton, mapKey: 'cancel', axisPlane: '', axisCheckDirection: 0 }
        ],
    };
}
/**
 * Whether or not the specified button or key that maps to inputName is pressed. Not used for axes or triggers.
 * @param inputName Input name mapped to a button.
 * @param gamepadNumber
 * @returns
 */
export function inputPressed(inputName, gamepadNumber) {
    gamepadNumber = gamepadNumber === undefined ? 0 : gamepadNumber;
    return buttonPressed(inputName, gamepadNumber) || keyboard.getInputKeyState(inputName) === InputState.Pressed || gamepad.getAxisInputState(inputName) === InputState.Pressed;
}
/**
 * Whether or not the specified button or key that maps to inputName is released. Not used for axes or triggers.
 * @param inputName Input name mapped to a button.
 * @param gamepadNumber
 * @returns
 */
export function inputReleased(inputName, gamepadNumber) {
    gamepadNumber = gamepadNumber === undefined ? 0 : gamepadNumber;
    return buttonReleased(inputName, gamepadNumber) || keyboard.getInputKeyState(inputName) === InputState.Released || gamepad.getAxisInputState(inputName) === InputState.Released;
}
export function buttonPressed(inputName, gamepadNumber) {
    gamepadNumber = gamepadNumber === undefined ? 0 : gamepadNumber;
    var button = gamepad.getButtonState(inputName)[gamepadNumber];
    if (button && button.pressed) {
        return true;
    }
    return false;
}
export function buttonReleased(inputName, gamepadNumber) {
    gamepadNumber = gamepadNumber === undefined ? 0 : gamepadNumber;
    var button = gamepad.getButtonState(inputName)[gamepadNumber];
    if (button && button.pressed) {
        return false;
    }
    return true;
}
export function axisPressed(inputName, axisPlane, direction, gamepadNumber) {
    gamepadNumber = gamepadNumber === undefined ? 0 : gamepadNumber;
    var state = gamepad.getAxisData(inputName)[gamepadNumber];
    if (state) {
        if (direction < 0 && state[axisPlane] < 0 && state[axisPlane] <= -settings.axisPressedThreshold) {
            return true;
        }
        else if (direction > 0 && state[axisPlane] > 0 && state[axisPlane] >= settings.axisPressedThreshold) {
            return true;
        }
    }
    return false;
}
//# sourceMappingURL=input.js.map