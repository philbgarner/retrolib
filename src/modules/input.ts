/**
 * 
 * Globals
 * 
 */

let keysState: { [key: string]: boolean } = {}
let keysMap: { [key: string]: string } = {}

let buttonsMap: { [key: string]: number } = {}
let axisMap: { [key: string]: number[] } = {}
let gamepadsTimestamps: { [key: number]: number } = {}
let gamepadConnected: GamepadConnectedFunction = () => {}
let gamepadDisconnected: GamepadDisonnectedFunction = () => {}
let gamepadUpdated: GamepadUpdatedFunction = () => {}

let keyboardDownHandler: KeyboardDownFunction = () => {}
let keyboardReleaseHandler: KeyboardReleaseFunction = () => {}

let inputMaps: { [key: string]: InputMap[] }

const settings: InputSettings = {
    axisPressedThreshold: 0
}

/**
 * 
 * Enums
 * 
 */

export enum InputType {
    Keyboard = 0,
    GamepadButton,
    GamepadAxis
}

/**
 * 
 * Types
 * 
 */

export type InputMap = {
    type: InputType,
    mapKey: string,
    axisPlane: string,
    axisCheckDirection: number
}


export type InputSettings = {
    axisPressedThreshold: number
}

export interface KeyboardDownFunction {
    (event: KeyboardEvent): void
}

export interface KeyboardReleaseFunction {
    (event: KeyboardEvent): void
}

export interface GamepadUpdatedFunction {
    (gamepad: Gamepad): void
}

export interface GamepadConnectedFunction {
    (event: GamepadEvent): void
}
export interface GamepadDisonnectedFunction {
    (event: GamepadEvent): void
}

export type KeyboardInputRelationship = {
    inputName: string,
    key: string
}
export type GamepadInputRelationship = {
    inputName: string,
    button: number
}
export type GamepadButtonState = {
    controller: number,
    inputName: string,
    value: number,
    pressed: boolean,
    touched: boolean
}
export type GamepadAxisState = {
    controller: number,
    x: number,
    y: number
}

export function initialize(): void {
    keysState = {}
    resetKeyboardMappings()
    resetGamepadButtonMappings()
    resetGamepadAxisMappings()
    inputMaps = {}
    resetInputMaps()
    gamepadsTimestamps = {}
    gamepadConnected = () => {}
    gamepadDisconnected = () => {}
    gamepadUpdated = () => {}
   
    window.removeEventListener('keydown', keyboardDown)
    window.addEventListener('keydown', keyboardDown)

    window.removeEventListener('keyup', keyboardRelease)
    window.addEventListener('keyup', keyboardRelease)

    window.ongamepadconnected = (event: GamepadEvent) => {
        gamepadsTimestamps[event.gamepad.index] = 0
        gamepadConnected(event)
    }
    window.ongamepaddisconnected = (event: GamepadEvent) => {
        gamepadDisconnected(event)
        gamepadsTimestamps[event.gamepad.index] = undefined
    }
}

/**
 * Reset button mappings to defaults.
 */
export function resetGamepadButtonMappings() {
    buttonsMap = { 'action': 0, 'cancel': 1 }
}

export function resetGamepadAxisMappings() {
    axisMap = { 'leftAxis': [0, 1], 'rightAxis': [3, 4], 'dPad': [6, 7], 'trigger': [2, 5] }
}

export function resetKeyboardMappings() {
    keysMap = {
        'left': 'ArrowLeft',
        'right': 'ArrowRight',
        'up': 'ArrowUp',
        'down': 'ArrowDown'
    }
}

export function resetInputMaps() {
    inputMaps = {
        'left': [
            { type: InputType.Keyboard, mapKey: 'ArrowLeft', axisPlane: '', axisCheckDirection: 0 },
            { type: InputType.GamepadAxis, mapKey: 'leftAxis', axisPlane: 'x', axisCheckDirection: -1 }],
        'right': [
            { type: InputType.Keyboard, mapKey: 'ArrowRight', axisPlane: '', axisCheckDirection: 0 },
            { type: InputType.GamepadAxis, mapKey: 'leftAxis', axisPlane: 'x', axisCheckDirection: 1 }],
        'up': [
            { type: InputType.Keyboard, mapKey: 'ArrowUp', axisPlane: '', axisCheckDirection: 0 },
            { type: InputType.GamepadAxis, mapKey: 'leftAxis', axisPlane: 'y', axisCheckDirection: -1 }],
        'down': [
            { type: InputType.Keyboard, mapKey: 'ArrowDown', axisPlane: '', axisCheckDirection: 0},
            { type: InputType.GamepadAxis, mapKey: 'leftAxis', axisPlane: 'y', axisCheckDirection: 1 }],
    }
}

/**
 * 
 *  Keyboard Input Functions
 * 
 */

export function onKeyboardDown(fn: KeyboardDownFunction) {
    keyboardDownHandler = fn
}

export function onKeyboardRelease(fn: KeyboardReleaseFunction) {
    keyboardReleaseHandler = fn
}

export function keyboardDown(e: KeyboardEvent): void {
    keysState[e.key] = true
    keyboardDownHandler(e)
}

export function keyboardRelease(e: KeyboardEvent): void {
    keysState[e.key] = false
    keyboardReleaseHandler(e)
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

/**
 * 
 *  Gamepad Input Functions
 * 
 */

export function onGamepadConnected(fn: GamepadConnectedFunction) {
    gamepadConnected = fn
}

export function onGamepadDisconnected(fn: GamepadDisonnectedFunction) {
    gamepadDisconnected = fn
}

export function onGamepadUpdated(fn: GamepadUpdatedFunction) {
    gamepadUpdated = fn
}

export function gamepadsDidUpdate() {
    getGamepads().forEach((g: Gamepad) => {
        if (gamepadsTimestamps[g.index] !== undefined && gamepadsTimestamps[g.index] < g.timestamp) {
            gamepadUpdated(g)
        }
        gamepadsTimestamps[g.index] = g.timestamp
    })
}

export function getGamepads(): Gamepad[] {
    return navigator.getGamepads().sort((a: Gamepad, b: Gamepad) => a.index - b.index)
}

export function getMappedButtonIndex(inputName: string): number {
    return buttonsMap[inputName] !== undefined ? buttonsMap[inputName] : null
}

export function getMappedButtons(): GamepadInputRelationship[] {
    let inputMap: GamepadInputRelationship[] = []
    Object.keys(buttonsMap).forEach((key: string) => {
        const rel: GamepadInputRelationship = { inputName: key, button: buttonsMap[key] }
        inputMap.push(rel)
    })
    return inputMap
}

export function setMappedButton(inputName: string, buttonIndex: number): void {
    buttonsMap[inputName] = buttonIndex
}

export function getButtonState(inputName: string): GamepadButtonState[] {
    let states: GamepadButtonState[] = []
    getGamepads().forEach((g: Gamepad) => {
        const buttonIndex = getMappedButtonIndex(inputName)
        if (buttonIndex !== null) {
            const button = g.buttons[buttonIndex]
            const buttonState: GamepadButtonState = { controller: g.index, inputName: inputName, value: button.value, pressed: button.pressed, touched: button.touched }
            states.push(buttonState)
        }
    })
    return states.sort((a: GamepadButtonState, b: GamepadButtonState) => a.controller - b.controller)
}

export function getAxisState(inputName: string): GamepadAxisState[] {
    let states: GamepadAxisState[] = []
    getGamepads().forEach((g: Gamepad) => {
        if (axisMap[inputName] !== undefined) {
            const axisState: GamepadAxisState = { controller: g.index, x: g.axes[axisMap[inputName][0]], y: g.axes[axisMap[inputName][1]] }
            states.push(axisState)
        }
    })
    return states.sort((a: GamepadAxisState, b: GamepadAxisState) => a.controller - b.controller)
}

/**
 * Whether or not the specified button or key that maps to inputName is pressed. Not used for axes or triggers.
 * @param inputName Input name mapped to a button.
 * @param gamepadNumber 
 * @returns 
 */
export function inputPressed(inputName: string, gamepadNumber?: number): boolean {
    gamepadNumber = gamepadNumber === undefined ? 0 : gamepadNumber
    const inputs = []
    Object.keys(inputMaps).filter(f => f === inputName).forEach(key => inputs.push(...inputMaps[key]))
    let ret: boolean = false
    inputs.forEach(input => {
        if (input.type === InputType.Keyboard && getInputKeyState(inputName)) {
            ret = true
        } else if (input.type === InputType.GamepadAxis && axisPressed(input.mapKey, input.axisPlane, input.axisCheckDirection, gamepadNumber)) {
            ret = true
        } else if (input.type === InputType.GamepadButton && buttonPressed(input.mapKey, gamepadNumber)) {
            ret = true
        }
    })
    return ret
}

export function buttonPressed(inputName: string, gamepadNumber?: number): boolean {
    gamepadNumber = gamepadNumber === undefined ? 0 : gamepadNumber
    const button = getButtonState(inputName)[gamepadNumber]
    if (button && button.pressed) {
        return true
    }
    return false
}

export function axisPressed(inputName: string, axisPlane: number, direction: number, gamepadNumber?: number): boolean {
    gamepadNumber = gamepadNumber === undefined ? 0 : gamepadNumber
    const state = getAxisState(inputName)[gamepadNumber]
    if (state) {
        if (direction < 0 && state[axisPlane] < 0 && state[axisPlane] <= -settings.axisPressedThreshold) {
            return true
        } else if (direction > 0 && state[axisPlane] > 0 && state[axisPlane] >= settings.axisPressedThreshold) {
            return true
        }
    }
    return false
}

