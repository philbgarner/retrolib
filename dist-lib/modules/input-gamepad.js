import { settings, InputState, handleInputPressed, handleInputReleased, inputMaps } from "./input";
/**
 *
 * Globals
 *
 */
export var axisState = {};
export var buttonsState = {};
export var buttonsMap = {};
export var axisMap = {};
export var gamepadsTimestamps = {};
export var gamepadConnected = function () { };
export var gamepadDisconnected = function () { };
export var gamepadUpdated = function () { };
export function resetButtonsState() {
    buttonsState = {};
}
export function resetGamepadTimestamps() {
    gamepadsTimestamps = {};
}
export function setGamepadTimestamps(gamepadNumber, timestamp) {
    gamepadsTimestamps[gamepadNumber] = timestamp;
}
export function setGamepadUpdated(fn) {
    gamepadUpdated = fn;
}
export function setGamepadConnected(fn) {
    gamepadConnected = fn;
}
export function setGamepadDisconnected(fn) {
    gamepadDisconnected = fn;
}
/**
 * Reset button mappings to defaults.
 */
export function resetGamepadButtonMappings() {
    buttonsMap = { 'action': 0, 'cancel': 1 };
}
export function resetGamepadAxisMappings() {
    axisMap = { 'leftJoystick': [0, 1], 'rightJoystick': [3, 4], 'dPad': [6, 7], 'trigger': [2, 5] };
}
/**
 *
 *  Gamepad Input Functions
 *
 */
export function onGamepadConnected(fn) {
    gamepadConnected = fn;
}
export function onGamepadDisconnected(fn) {
    gamepadDisconnected = fn;
}
export function onGamepadUpdated(fn) {
    gamepadUpdated = fn;
}
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
                        var state = getAxisData(map.mapKey)[g.index];
                        // Handle left/right/up/down released axis scenarios, if true break the for-loop
                        // so the changed input value we just set doesn't trigger a condition below and
                        // undo that setting we just made.
                        if (map.axisCheckDirection < 0 && map.axisPlane === 'x' && state.x > -settings.axisPressedThreshold
                            && axisState[map.parent] === InputState.Pressed) {
                            axisState[map.parent] = InputState.Released;
                            handleInputReleased(map.parent, g.index);
                            break;
                        }
                        else if (map.axisCheckDirection > 0 && map.axisPlane === 'x' && state.x < settings.axisPressedThreshold
                            && axisState[map.parent] === InputState.Pressed) {
                            axisState[map.parent] = InputState.Released;
                            handleInputReleased(map.parent, g.index);
                            break;
                        }
                        if (map.axisCheckDirection < 0 && map.axisPlane === 'y' && state.y > -settings.axisPressedThreshold
                            && axisState[map.parent] === InputState.Pressed) {
                            axisState[map.parent] = InputState.Released;
                            handleInputReleased(map.parent, g.index);
                            break;
                        }
                        else if (map.axisCheckDirection > 0 && map.axisPlane === 'y' && state.y < settings.axisPressedThreshold
                            && axisState[map.parent] === InputState.Pressed) {
                            axisState[map.parent] = InputState.Released;
                            handleInputReleased(map.parent, g.index);
                            break;
                        }
                        // Handle left/right/up/down pressed axis scenarios.
                        if (map.axisCheckDirection < 0 && map.axisPlane === 'x' && state.x < -settings.axisPressedThreshold
                            && axisState[map.parent] !== InputState.Pressed) {
                            axisState[map.parent] = InputState.Pressed;
                            handleInputPressed(map.parent, g.index);
                            break;
                        }
                        else if (map.axisCheckDirection > 0 && map.axisPlane === 'x' && state.x > settings.axisPressedThreshold
                            && axisState[map.parent] !== InputState.Pressed) {
                            axisState[map.parent] = InputState.Pressed;
                            handleInputPressed(map.parent, g.index);
                            break;
                        }
                        if (map.axisCheckDirection < 0 && map.axisPlane === 'y' && state.y < -settings.axisPressedThreshold
                            && axisState[map.parent] !== InputState.Pressed) {
                            axisState[map.parent] = InputState.Pressed;
                            handleInputPressed(map.parent, g.index);
                            break;
                        }
                        else if (map.axisCheckDirection > 0 && map.axisPlane === 'y' && state.y > settings.axisPressedThreshold
                            && axisState[map.parent] !== InputState.Pressed) {
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
export function getGamepads() {
    return navigator.getGamepads().sort(function (a, b) { return a.index - b.index; });
}
export function getMappedButtonIndex(inputName) {
    return buttonsMap[inputName] !== undefined ? buttonsMap[inputName] : null;
}
export function getMappedButtons() {
    var inputMap = [];
    Object.keys(buttonsMap).forEach(function (key) {
        var rel = { inputName: key, button: buttonsMap[key] };
        inputMap.push(rel);
    });
    return inputMap;
}
export function setMappedButton(inputName, buttonIndex) {
    buttonsMap[inputName] = buttonIndex;
}
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
export function getAxisInputState(inputName) {
    return axisState[inputName];
}
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