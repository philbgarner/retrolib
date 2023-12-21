import * as scenes from './scenes';
import * as gamepad from './input-gamepad';
import * as keyboard from './input-keyboard';
/**
 *
 * Globals
 *
 */
export var onInputReleased = function () { };
export var onInputPressed = function () { };
var inputMaps;
var settings = {
    axisPressedThreshold: 0
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
    gamepad.setGamepadConnected(function () { });
    gamepad.setGamepadDisconnected(function () { });
    gamepad.setGamepadUpdated(function () { });
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
            { type: InputType.Keyboard, mapKey: 'ArrowLeft', axisPlane: '', axisCheckDirection: 0 },
            { type: InputType.GamepadAxis, mapKey: 'leftAxis', axisPlane: 'x', axisCheckDirection: -1 }
        ],
        'right': [
            { type: InputType.Keyboard, mapKey: 'ArrowRight', axisPlane: '', axisCheckDirection: 0 },
            { type: InputType.GamepadAxis, mapKey: 'leftAxis', axisPlane: 'x', axisCheckDirection: 1 }
        ],
        'up': [
            { type: InputType.Keyboard, mapKey: 'ArrowUp', axisPlane: '', axisCheckDirection: 0 },
            { type: InputType.GamepadAxis, mapKey: 'leftAxis', axisPlane: 'y', axisCheckDirection: -1 }
        ],
        'down': [
            { type: InputType.Keyboard, mapKey: 'ArrowDown', axisPlane: '', axisCheckDirection: 0 },
            { type: InputType.GamepadAxis, mapKey: 'leftAxis', axisPlane: 'y', axisCheckDirection: 1 }
        ],
        'action': [
            { type: InputType.Keyboard, mapKey: ' ', axisPlane: '', axisCheckDirection: 0 },
            { type: InputType.GamepadButton, mapKey: 'action', axisPlane: '', axisCheckDirection: 0 }
        ],
        'cancel': [
            { type: InputType.Keyboard, mapKey: 'Escape', axisPlane: '', axisCheckDirection: 0 },
            { type: InputType.GamepadButton, mapKey: 'cancel', axisPlane: '', axisCheckDirection: 0 }
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
    var inputs = [];
    Object.keys(inputMaps).filter(function (f) { return f === inputName; }).forEach(function (key) { return inputs.push.apply(inputs, inputMaps[key]); });
    var ret = false;
    inputs.forEach(function (input) {
        if (input.type === InputType.Keyboard && keyboard.getInputKeyState(inputName)) {
            ret = true;
        }
        else if (input.type === InputType.GamepadAxis && axisPressed(input.mapKey, input.axisPlane, input.axisCheckDirection, gamepadNumber)) {
            ret = true;
        }
        else if (input.type === InputType.GamepadButton && buttonPressed(input.mapKey, gamepadNumber)) {
            ret = true;
            // Handle button state so we can fire synthetic event callbacks.
            if (buttonsState[inputName] === undefined || buttonsState[inputName] === InputState.Released) {
                buttonsState[inputName] = InputState.Pressed
                // onInputPressed(inputName, gamepadNumber)
            }
        }
    });
    if (ret) {
        //onInputPressed(inputName, gamepadNumber);
    }
    return ret;
}
/**
 * Whether or not the specified button or key that maps to inputName is released. Not used for axes or triggers.
 * @param inputName Input name mapped to a button.
 * @param gamepadNumber
 * @returns
 */
export function inputReleased(inputName, gamepadNumber) {
    gamepadNumber = gamepadNumber === undefined ? 0 : gamepadNumber;
    var inputs = [];
    Object.keys(inputMaps).filter(function (f) { return f === inputName; }).forEach(function (key) { return inputs.push.apply(inputs, inputMaps[key]); });
    var ret = false;
    inputs.forEach(function (input) {
        if (input.type === InputType.Keyboard && !keyboard.getInputKeyState(inputName)) {
            ret = true;
        }
        else if (input.type === InputType.GamepadAxis && !axisPressed(input.mapKey, input.axisPlane, input.axisCheckDirection, gamepadNumber)) {
            ret = true;
        }
        else if (input.type === InputType.GamepadButton && !buttonPressed(input.mapKey, gamepadNumber)) {
            ret = true;
            // Handle button state so we can fire synthetic event callbacks.
            if (gamepad.buttonsState[inputName] === undefined || gamepad.buttonsState[inputName] === InputState.Releasing) {
                gamepad.buttonsState[inputName] = InputState.Released;
                //onInputReleased(inputName, gamepadNumber);
            }
        }
    });
    if (ret) {
        //onInputReleased(inputName, gamepadNumber);
    }
    return ret;
}
export function buttonPressed(inputName, gamepadNumber) {
    gamepadNumber = gamepadNumber === undefined ? 0 : gamepadNumber;
    var button = gamepad.getButtonState(inputName)[gamepadNumber];
    if (button && button.pressed) {
        return true;
    }
    return false;
}
export function axisPressed(inputName, axisPlane, direction, gamepadNumber) {
    gamepadNumber = gamepadNumber === undefined ? 0 : gamepadNumber;
    var state = gamepad.getAxisState(inputName)[gamepadNumber];
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
export function updateInputState() {
    gamepad.getGamepads().forEach(function (g, index) {
        Object.keys(inputMaps).forEach(function (key) {
            inputPressed(key, index);
            inputReleased(key, index);
        });
    });
}
//# sourceMappingURL=input.js.map