let keysState: { [key: string]: boolean } = {}
let keysMap: { [key: string]: string } = {}

let buttonsMap: { [key: string]: number } = {}
let axisMap: { [key: string]: number } = {}
let gamepadsTimestamps: { [key: number]: number } = {}
let gamepadConnected: Function = (event: GamepadEvent) => {}
let gamepadDisconnected: Function = (event: GamepadEvent) => {}
let gamepadUpdated: Function = (gamepad: Gamepad) => {}

let keyboardDownHandler: Function = (event: GamepadEvent) => {}
let keyboardReleaseHandler: Function = (event: GamepadEvent) => {}

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
 * 
 *  Keyboard Input Functions
 * 
 */

export function onKeyboardDown(fn: Function) {
    keyboardDownHandler = fn
}

export function onKeyboardRelease(fn: Function) {
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
        let rel: KeyboardInputRelationship = { inputName: key, key: keysMap[key] }
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

export function onGamepadConnected(fn: Function) {
    gamepadConnected = fn
}

export function onGamepadDisconnected(fn: Function) {
    gamepadDisconnected = fn
}

export function onGamepadUpdated(fn: Function) {
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
    if (buttonsMap[inputName]) {
        return buttonsMap[inputName]
    }
    return null
}

export function getMappedAxisIndex(inputName: string): number {
    if (axisMap[inputName]) {
        return axisMap[inputName]
    }
    return null
}

export function getMappedButtons(): GamepadInputRelationship[] {
    let inputMap: GamepadInputRelationship[]
    Object.keys(keysMap).forEach((key: string) => {
        let rel: GamepadInputRelationship = { inputName: key, button: buttonsMap[key] }
        inputMap.push(rel)
    })
    return inputMap
}

export function getButtonState(inputName: string): GamepadButtonState[] {
    let states: GamepadButtonState[]
    getGamepads().forEach((g: Gamepad) => {
        let buttonIndex = getMappedButtonIndex(inputName)
        if (buttonIndex !== null) {
            let button = g.buttons[buttonIndex]
            let buttonState: GamepadButtonState = { controller: g.index, inputName: inputName, value: button.value, pressed: button.pressed, touched: button.touched }
            states.push(buttonState)
        }
    })
    return states.sort((a: GamepadButtonState, b: GamepadButtonState) => a.controller - b.controller)
}

export function getAxisState(inputName: string): GamepadAxisState[] {
    let states: GamepadAxisState[]
    getGamepads().forEach((g: Gamepad) => {
        if (axisMap[inputName] !== undefined) {
            let axisState: GamepadAxisState = { controller: g.index, x: g.axes[axisMap[inputName]][0], y: g.axes[axisMap[inputName]][1] }
            states.push(axisState)
        }
    })
    return states.sort((a: GamepadAxisState, b: GamepadAxisState) => a.controller - b.controller)
}