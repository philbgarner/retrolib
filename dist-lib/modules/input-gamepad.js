import { settings, InputState, handleInputPressed, handleInputReleased, inputMaps } from "./input";
/**
 * Current axes states as of the last updated frame by input name.
 */
export var axisState = {};
/**
 * Current buttons state as of the last upated frame by input name.
 */
export var buttonsState = {};
/**
 * List of input names (IE: action, cancel, etc.) and the button index number they map to.
 */
export var buttonsMap = {};
/**
 * List of input names (IE: left/right/up/down) and the axis index number they map to.
 */
export var axisMap = {};
/**
 * Gamepad timestamp value as of last frame update.
 */
export var gamepadsTimestamps = {};
/**
 * Event handler function for when a new gamepad is connected.
 */
export var gamepadConnected = function () { };
/**
 * Event handler function for when a gamepad is disconnected.
 */
export var gamepadDisconnected = function () { };
/**
 * Event handler function for when a gamepad has updated its state.
 */
export var gamepadUpdated = function () { };
/**
 * Reset buttons state object to empty.
 */
export function resetButtonsState() {
    buttonsState = {};
}
/**
 * Reset gamepad timestamps to empty.
 */
export function resetGamepadTimestamps() {
    gamepadsTimestamps = {};
}
/**
 * Set gamepad timestamp value by index.
 * @param gamepadNumber Gamepad/controller index.
 * @param timestamp Updated timestamp value.
 */
export function setGamepadTimestamps(gamepadNumber, timestamp) {
    gamepadsTimestamps[gamepadNumber] = timestamp;
}
/**
 * Reset button mappings to defaults.
 */
export function resetGamepadButtonMappings() {
    buttonsMap = { 'action': 0, 'cancel': 1 };
}
/**
 * Reset axis mappings to defaults.
 */
export function resetGamepadAxisMappings() {
    axisMap = { 'leftJoystick': [0, 1], 'rightJoystick': [3, 4], 'dPad': [6, 7], 'trigger': [2, 5] };
}
/**
 * Set the callback for the gamepadconnected event.
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/gamepadconnected_event
 * @param fn Callback function for when a gamepad connects.
 */
export function onGamepadConnected(fn) {
    gamepadConnected = fn;
}
/** Set the callback for the gamepaddisconnected event.
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/gamepaddisconnected_event
 */
export function onGamepadDisconnected(fn) {
    gamepadDisconnected = fn;
}
/**
 * Set the callback for when a gamepad input or axis state has changed.
 * @param fn Callback function.
 */
export function onGamepadUpdated(fn) {
    gamepadUpdated = fn;
}
/**
 * Run once per frame to update internal state objects and trigger event callbacks.
 */
export function gamepadsDidUpdate() {
    getGamepads().forEach(function (g) {
        if (gamepadsTimestamps[g.index] !== undefined && gamepadsTimestamps[g.index] < g.timestamp) {
            gamepadUpdated(g);
            Object.keys(axisMap).forEach(function (axis) {
                var maps = [];
                Object.keys(inputMaps).forEach(function (input) {
                    if (inputMaps[input].filter(function (f) { return f.mapKey === axis; }).length > 0) {
                        maps.push.apply(maps, inputMaps[input].filter(function (f) { return f.mapKey === axis; }));
                    }
                });
                if (maps.length > 0) {
                    for (var _i = 0, maps_1 = maps; _i < maps_1.length; _i++) {
                        var map = maps_1[_i];
                        if (!isAxisPressed(map.parent) && axisState[map.parent] === InputState.Pressed) {
                            axisState[map.parent] = InputState.Released;
                            handleInputReleased(map.parent, g.index);
                            break;
                        }
                        if (isAxisPressed(map.parent) && axisState[map.parent] !== InputState.Pressed) {
                            axisState[map.parent] = InputState.Pressed;
                            handleInputPressed(map.parent, g.index);
                            break;
                        }
                    }
                }
            });
            getMappedButtons().forEach(function (inputRel) {
                if (getButtonState(inputRel.inputName)[g.index].pressed && buttonsState[inputRel.inputName] !== InputState.Pressed) {
                    buttonsState[inputRel.inputName] = InputState.Pressed;
                    handleInputPressed(inputRel.inputName, g.index);
                }
                else if (!getButtonState(inputRel.inputName)[g.index].pressed && buttonsState[inputRel.inputName] === InputState.Pressed) {
                    buttonsState[inputRel.inputName] = InputState.Released;
                    handleInputReleased(inputRel.inputName, g.index);
                }
            });
        }
        gamepadsTimestamps[g.index] = g.timestamp;
    });
}
export function isAxisPressed(inputName, controller) {
    controller = controller === undefined ? 0 : controller;
    var axes = Object.keys(axisMap);
    var _loop_1 = function (axis) {
        var maps = [];
        Object.keys(inputMaps).forEach(function (input) {
            if (inputMaps[input].filter(function (f) { return f.mapKey === axis && f.parent === inputName; }).length > 0) {
                maps.push.apply(maps, inputMaps[input].filter(function (f) { return f.mapKey === axis; }));
            }
        });
        if (maps.length > 0) {
            for (var _a = 0, maps_2 = maps; _a < maps_2.length; _a++) {
                var map = maps_2[_a];
                var state = getAxisData(map.mapKey)[controller];
                if (state) {
                    if (map.axisCheckDirection < 0 && map.axisPlane === 'x' && state.x < -settings.axisPressedThreshold) {
                        return { value: true };
                    }
                    else if (map.axisCheckDirection > 0 && map.axisPlane === 'x' && state.x > settings.axisPressedThreshold) {
                        return { value: true };
                    }
                    if (map.axisCheckDirection < 0 && map.axisPlane === 'y' && state.y < -settings.axisPressedThreshold) {
                        return { value: true };
                    }
                    else if (map.axisCheckDirection > 0 && map.axisPlane === 'y' && state.y > settings.axisPressedThreshold) {
                        return { value: true };
                    }
                }
            }
        }
    };
    //.forEach(axis => {
    for (var _i = 0, axes_1 = axes; _i < axes_1.length; _i++) {
        var axis = axes_1[_i];
        var state_1 = _loop_1(axis);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return false;
}
/**
 * Get the list of currently connected Gamepad typed objects.
 * https://developer.mozilla.org/en-US/docs/Web/API/Gamepad
 * @returns Array of gamepad objects in order by Gamepad.index property.
 */
export function getGamepads() {
    return navigator.getGamepads().sort(function (a, b) { return a.index - b.index; });
}
/**
 * Get the gamepad button index mapped to inputName.
 * @param inputName Input name.
 * @returns
 */
export function getMappedButtonIndex(inputName) {
    return buttonsMap[inputName] !== undefined ? buttonsMap[inputName] : null;
}
/**
 * List all input relationships mapped to the gamepad buttons.
 */
export function getMappedButtons() {
    var inputMap = [];
    Object.keys(buttonsMap).forEach(function (key) {
        var rel = { inputName: key, button: buttonsMap[key] };
        inputMap.push(rel);
    });
    return inputMap;
}
/**
 * Set a button mapping by input name.
 * @param inputName Input name.
 * @param buttonIndex Gamepad object's button index to assign to this input name.
 */
export function setMappedButton(inputName, buttonIndex) {
    buttonsMap[inputName] = buttonIndex;
}
/**
 * Get the current gamepad button state by input name.
 * @param inputName Input name.
 * @returns Current gamepad button state.
 */
export function getButtonState(inputName) {
    var states = [];
    getGamepads().forEach(function (g) {
        var buttonIndex = getMappedButtonIndex(inputName);
        if (buttonIndex !== null) {
            var button = g.buttons[buttonIndex];
            var buttonState = { controller: g.index, inputName: inputName, value: button.value, pressed: button.pressed, touched: button.touched };
            states.push(buttonState);
        }
    });
    return states.sort(function (a, b) { return a.controller - b.controller; });
}
/**
 * Get the current axis input state by input name.
 * @param inputName Input name.
 * @returns Gamepad object's axis input state.
 */
export function getAxisInputState(inputName) {
    return axisState[inputName];
}
/**
 * Gets the current axis state data from the connected gamepads and returns a
 * transformed object showing only controller indices and x/y states.
 * @param inputName Input name.
 * @returns
 */
export function getAxisData(inputName) {
    var states = [];
    getGamepads().forEach(function (g) {
        if (axisMap[inputName] !== undefined) {
            var axisState_1 = { controller: g.index, x: g.axes[axisMap[inputName][0]], y: g.axes[axisMap[inputName][1]] };
            states.push(axisState_1);
        }
    });
    return states.sort(function (a, b) { return a.controller - b.controller; });
}
//# sourceMappingURL=input-gamepad.js.map