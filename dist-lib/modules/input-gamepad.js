/**
 *
 * Globals
 *
 */
export var buttonsState;
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
    axisMap = { 'leftAxis': [0, 1], 'rightAxis': [3, 4], 'dPad': [6, 7], 'trigger': [2, 5] };
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
export function getAxisState(inputName) {
    var states = [];
    getGamepads().forEach(function (g) {
        if (axisMap[inputName] !== undefined) {
            var axisState = { controller: g.index, x: g.axes[axisMap[inputName][0]], y: g.axes[axisMap[inputName][1]] };
            states.push(axisState);
        }
    });
    return states.sort(function (a, b) { return a.controller - b.controller; });
}
//# sourceMappingURL=input-gamepad.js.map