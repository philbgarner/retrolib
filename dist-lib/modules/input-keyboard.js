import { inputPressed, inputReleased } from "./input";
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
    keysState[e.key] = true;
    if (keysMap[e.key]) {
        console.log('keyboard down', e.key, keysMap[e.key], keysMap);
        inputPressed(keysMap[e.key]);
    }
    keyboardDownHandler(e);
}
export function keyboardRelease(e) {
    keysState[e.key] = false;
    inputReleased(e.key);
    keyboardReleaseHandler(e);
}
//# sourceMappingURL=input-keyboard.js.map