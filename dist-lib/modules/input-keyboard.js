import { inputMaps, InputState, handleInputPressed, handleInputReleased, InputType } from "./input";
/**
 *
 * Globals
 *
 */
var keysState = {};
var keyboardDownHandler = function () { };
var keyboardReleaseHandler = function () { };
export function resetKeysState() {
    keysState = {};
}
// export function setMappedKey(inputName: string, key: string): void {
//     keysMap[inputName] = key
// }
export function getMappedKey(inputName) {
    var map = getMappedKeys().filter(function (f) { return f.inputName === inputName; });
    if (map.length > 0) {
        return map[0].key;
    }
    return null;
}
export function getMappedKeys() {
    var relationships = [];
    Object.keys(inputMaps).forEach(function (inputName) {
        inputMaps[inputName].filter(function (f) { return f.type === InputType.Keyboard; }).forEach(function (inputMap) {
            var rel = { inputName: inputName, key: inputMap.mapKey };
            relationships.push(rel);
        });
    });
    return relationships;
}
export function getKeyState(stateKey) {
    return keysState[stateKey];
}
export function getInputKeyState(inputName) {
    var ret = false;
    getMappedKeys().filter(function (f) { return f.inputName === inputName; }).forEach(function (map) {
        if (getKeyState(map.key) === InputState.Pressed) {
            ret = true;
        }
    });
    return ret ? InputState.Pressed : InputState.Released;
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
    //Object.keys(keysMap).filter(input => keysMap[input] === e.key).forEach(input => inputs.push(input))
    Object.keys(inputMaps).forEach(function (inputName) { return inputs.push.apply(inputs, inputMaps[inputName].filter(function (f) { return f.type === InputType.Keyboard && f.mapKey === e.key; })); });
    if (inputs.length > 0) {
        handleInputPressed(inputs[0].parent);
    }
    keyboardDownHandler(e);
}
export function keyboardRelease(e) {
    keysState[e.key] = InputState.Released;
    var inputs = [];
    //Object.keys(keysMap).filter(input => keysMap[input] === e.key).forEach(input => inputs.push(input))
    Object.keys(inputMaps).forEach(function (inputName) { return inputs.push.apply(inputs, inputMaps[inputName].filter(function (f) { return f.type === InputType.Keyboard && f.mapKey === e.key; })); });
    if (inputs.length > 0) {
        handleInputReleased(inputs[0].parent);
    }
    keyboardReleaseHandler(e);
}
//# sourceMappingURL=input-keyboard.js.map