import { InputState, handleInputPressed, handleInputReleased } from "./input";
/**
 *
 * Globals
 *
 */
var keysState = {};
var keysMap = {};
var keyboardDownHandler = function () { };
var keyboardReleaseHandler = function () { };
export function resetKeysState() {
    keysState = {};
}
export function setMappedKey(inputName, key) {
    keysMap[inputName] = key;
}
export function getMappedKey(inputName) {
    if (keysMap[inputName]) {
        return keysMap[inputName];
    }
    return null;
}
/**
 *
 *  Keyboard Input Functions
 *
 */
export function resetKeyboardMappings() {
    keysMap = {
        'left': 'ArrowLeft',
        'right': 'ArrowRight',
        'up': 'ArrowUp',
        'down': 'ArrowDown',
        'action': ' ',
        'cancel': 'Escape'
    };
}
export function getMappedKeys() {
    var inputMap;
    Object.keys(keysMap).forEach(function (key) {
        var rel = { inputName: key, key: keysMap[key] };
        inputMap.push(rel);
    });
    return inputMap;
}
export function getKeyState(stateKey) {
    return keysState[stateKey];
}
export function getInputKeyState(inputName) {
    return getKeyState(getMappedKey(inputName));
}
export function onKeyboardDown(fn) {
    keyboardDownHandler = fn;
}
export function onKeyboardRelease(fn) {
    keyboardReleaseHandler = fn;
}
export function keyboardDown(e) {
    keysState[e.key] = InputState.Pressed;
    var inputs = [];
    Object.keys(keysMap).filter(function (input) { return keysMap[input] === e.key; }).forEach(function (input) { return inputs.push(input); });
    if (inputs.length > 0) {
        handleInputPressed(inputs[0]);
    }
    keyboardDownHandler(e);
}
export function keyboardRelease(e) {
    keysState[e.key] = InputState.Released;
    var inputs = [];
    Object.keys(keysMap).filter(function (input) { return keysMap[input] === e.key; }).forEach(function (input) { return inputs.push(input); });
    if (inputs.length > 0) {
        handleInputReleased(inputs[0]);
    }
    keyboardReleaseHandler(e);
}
//# sourceMappingURL=input-keyboard.js.map