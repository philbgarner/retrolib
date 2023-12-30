import { inputMaps, InputState, handleInputPressed, handleInputReleased, inputPressed, inputReleased, InputType } from "./input"

/**
 * 
 * Globals
 * 
 */

let keysState: { [key: string]: InputState } = {}

let keyboardDownHandler: KeyboardDownFunction = () => {}
let keyboardReleaseHandler: KeyboardReleaseFunction = () => {}

export function resetKeysState() {
    keysState = {}
}

// export function setMappedKey(inputName: string, key: string): void {
//     keysMap[inputName] = key
// }

export function getMappedKey(inputName: string): string {
    let map = getMappedKeys().filter(f => f.inputName === inputName)
    if (map.length > 0) {
        return map[0].key
    }
    return null
}

export interface KeyboardDownFunction {
    (event: KeyboardEvent): void
}

export interface KeyboardReleaseFunction {
    (event: KeyboardEvent): void
}

export type KeyboardInputRelationship = {
    inputName: string,
    key: string
}

export function getMappedKeys(): KeyboardInputRelationship[] {
    let relationships: KeyboardInputRelationship[] = []
    Object.keys(inputMaps).forEach((inputName: string) => {
        inputMaps[inputName].filter(f => f.type === InputType.Keyboard).forEach((inputMap) => {
            const rel: KeyboardInputRelationship = { inputName: inputName, key: inputMap.mapKey }
            relationships.push(rel)
        })
    })
    return relationships
}

export function getKeyState(stateKey: string): InputState {
    return keysState[stateKey]
}

export function getInputKeyState(inputName: string): InputState {
    let ret = false
    getMappedKeys().filter(f => f.inputName === inputName).forEach(map => {
        if (getKeyState(map.key) === InputState.Pressed) {
            ret = true
        }
    })
    return ret ? InputState.Pressed : InputState.Released
}


export function onKeyboardDown(fn: KeyboardDownFunction) {
    keyboardDownHandler = fn
}

export function onKeyboardRelease(fn: KeyboardReleaseFunction) {
    keyboardReleaseHandler = fn
}

export function keyboardDown(e: KeyboardEvent): void {
    keysState[e.key] = InputState.Pressed
    const inputs = []
    //Object.keys(keysMap).filter(input => keysMap[input] === e.key).forEach(input => inputs.push(input))
    Object.keys(inputMaps).forEach(inputName => inputs.push(...inputMaps[inputName].filter(f => f.type === InputType.Keyboard && f.mapKey === e.key)))
    if (inputs.length > 0) {
        handleInputPressed(inputs[0])
    }
    keyboardDownHandler(e)
}

export function keyboardRelease(e: KeyboardEvent): void {
    keysState[e.key] = InputState.Released
    const inputs = []
    //Object.keys(keysMap).filter(input => keysMap[input] === e.key).forEach(input => inputs.push(input))
    Object.keys(inputMaps).forEach(inputName => inputs.push(...inputMaps[inputName].filter(f => f.type === InputType.Keyboard && f.mapKey === e.key)))
    if (inputs.length > 0) {
        handleInputReleased(inputs[0])
    }
    keyboardReleaseHandler(e)
}
