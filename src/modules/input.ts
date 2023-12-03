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
    keysMap = {}
    resetGamepadButtonMappings()
    resetGamepadAxisMappings()
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

export function getInput(inputName: string) {
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