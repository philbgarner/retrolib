import { handleInputPressed, handleInputReleased, inputPressed, inputReleased } from "./input"

/**
 * 
 * Globals
 * 
 */

let keysState: { [key: string]: boolean } = {}
let keysMap: { [key: string]: string } = {}

let keyboardDownHandler: KeyboardDownFunction = () => {}
let keyboardReleaseHandler: KeyboardReleaseFunction = () => {}

export function resetKeysState() {
    keysState = {}
}

export function setMappedKey(inputName: string, key: string): void {
    keysMap[inputName] = key
}

export function getMappedKey(inputName: string): string {
    if (keysMap[inputName]) {
        return keysMap[inputName]
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
    }
}

export function getMappedKeys(): KeyboardInputRelationship[] {
    let inputMap: KeyboardInputRelationship[]
    Object.keys(keysMap).forEach((key: string) => {
        const rel: KeyboardInputRelationship = { inputName: key, key: keysMap[key] }
        inputMap.push(rel)
    })
    return inputMap
}

export function getKeyState(stateKey: string): boolean {
    return keysState[stateKey]
}

export function getInputKeyState(inputName: string): boolean {
    return getKeyState(getMappedKey(inputName))
}


export function onKeyboardDown(fn: KeyboardDownFunction) {
    keyboardDownHandler = fn
}

export function onKeyboardRelease(fn: KeyboardReleaseFunction) {
    keyboardReleaseHandler = fn
}

export function keyboardDown(e: KeyboardEvent): void {
    keysState[e.key] = true
    const inputs = []
    Object.keys(keysMap).filter(input => keysMap[input] === e.key).forEach(input => inputs.push(input))
    if (inputs.length > 0) {
        handleInputPressed(inputs[0])
    }
    keyboardDownHandler(e)
}

export function keyboardRelease(e: KeyboardEvent): void {
    keysState[e.key] = false
    const inputs = []
    Object.keys(keysMap).filter(input => keysMap[input] === e.key).forEach(input => inputs.push(input))
    if (inputs.length > 0) {
        handleInputReleased(inputs[0])
    }
    keyboardReleaseHandler(e)
}
