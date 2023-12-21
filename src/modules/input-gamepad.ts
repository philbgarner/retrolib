import { settings, InputState, handleInputPressed, handleInputReleased, inputMaps, InputMap } from "./input"

/**
 * 
 * Globals
 * 
 */

export let axisState: { [key: string]: InputState } = {}
export let buttonsState: { [key: string]: InputState } = {}
export let buttonsMap: { [key: string]: number } = {}
export let axisMap: { [key: string]: number[] } = {}
export let gamepadsTimestamps: { [key: number]: number } = {}
export let gamepadConnected: GamepadConnectedFunction = () => {}
export let gamepadDisconnected: GamepadDisonnectedFunction = () => {}
export let gamepadUpdated: GamepadUpdatedFunction = () => {}

export function resetButtonsState() {
    buttonsState = {}
}

export function resetGamepadTimestamps() {
    gamepadsTimestamps = {}
}

export function setGamepadTimestamps(gamepadNumber: number, timestamp: number) {
    gamepadsTimestamps[gamepadNumber] = timestamp
}

export function setGamepadUpdated(fn: GamepadUpdatedFunction) {
    gamepadUpdated = fn
}

export function setGamepadConnected(fn: GamepadConnectedFunction) {
    gamepadConnected = fn
}

export function setGamepadDisconnected(fn: GamepadDisonnectedFunction) {
    gamepadDisconnected = fn
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

/**
 * Reset button mappings to defaults.
 */
export function resetGamepadButtonMappings() {
    buttonsMap = { 'action': 0, 'cancel': 1 }
}

export function resetGamepadAxisMappings() {
    axisMap = { 'leftJoystick': [0, 1], 'rightJoystick': [3, 4], 'dPad': [6, 7], 'trigger': [2, 5] }
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
            Object.keys(axisMap).forEach(axis => {
                let maps: InputMap[] = []
                Object.keys(inputMaps).forEach(input => {
                    if (inputMaps[input].filter(f => f.mapKey === axis).length > 0) {
                        maps.push(...inputMaps[input].filter(f => f.mapKey === axis))
                    }
                })
                if (maps.length > 0) {
                    maps.forEach(map => {
                        // Handle left/right/up/down pressed axis scenarios.
                        let state = getAxisState(map.mapKey)[g.index]
                        if (map.axisCheckDirection < 0 && map.axisPlane === 'x' && state.x < -settings.axisPressedThreshold
                        && axisState[map.parent] !== InputState.Pressed) {
                            axisState[map.parent] = InputState.Pressed
                            handleInputPressed(map.parent, g.index)
                        }
                        if (map.axisCheckDirection > 0 && map.axisPlane === 'x' && state.x > settings.axisPressedThreshold
                        && axisState[map.parent] !== InputState.Pressed) {
                            axisState[map.parent] = InputState.Pressed
                            handleInputPressed(map.parent, g.index)
                        }
                        if (map.axisCheckDirection < 0 && map.axisPlane === 'y' && state.y < -settings.axisPressedThreshold
                        && axisState[map.parent] !== InputState.Pressed) {
                            axisState[map.parent] = InputState.Pressed
                            handleInputPressed(map.parent, g.index)
                        }
                        if (map.axisCheckDirection > 0 && map.axisPlane === 'y' && state.y > settings.axisPressedThreshold
                        && axisState[map.parent] !== InputState.Pressed) {
                            axisState[map.parent] = InputState.Pressed
                            handleInputPressed(map.parent, g.index)
                        }

                        // Handle left/right/up/down released axis scenarios.
                        if (map.axisCheckDirection < 0 && map.axisPlane === 'x' && state.x > -settings.axisPressedThreshold
                        && axisState[map.parent] === InputState.Pressed) {
                            axisState[map.parent] = InputState.Released
                            handleInputReleased(map.parent, g.index)
                        }
                        if (map.axisCheckDirection > 0 && map.axisPlane === 'x' && state.x < settings.axisPressedThreshold
                        && axisState[map.parent] === InputState.Pressed) {
                            axisState[map.parent] = InputState.Released
                            handleInputReleased(map.parent, g.index)
                        }
                        if (map.axisCheckDirection < 0 && map.axisPlane === 'y' && state.y > -settings.axisPressedThreshold
                        && axisState[map.parent] === InputState.Pressed) {
                            axisState[map.parent] = InputState.Released
                            handleInputReleased(map.parent, g.index)
                        }
                        if (map.axisCheckDirection > 0 && map.axisPlane === 'y' && state.y < settings.axisPressedThreshold
                        && axisState[map.parent] === InputState.Pressed) {
                            axisState[map.parent] = InputState.Released
                            handleInputReleased(map.parent, g.index)
                        }
                    })
                }
                //if (getAxisState(axis))
            })
            getMappedButtons().forEach(inputRel => {
                if (getButtonState(inputRel.inputName)[g.index].pressed && buttonsState[inputRel.inputName] !== InputState.Pressed) {
                    buttonsState[inputRel.inputName] = InputState.Pressed
                    handleInputPressed(inputRel.inputName, g.index)
                } else if (!getButtonState(inputRel.inputName)[g.index].pressed && buttonsState[inputRel.inputName] === InputState.Pressed) {
                    buttonsState[inputRel.inputName] = InputState.Released
                    handleInputReleased(inputRel.inputName, g.index)
                }
            })
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
    const inputMap: GamepadInputRelationship[] = []
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
    const states: GamepadButtonState[] = []
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
    const states: GamepadAxisState[] = []
    getGamepads().forEach((g: Gamepad) => {
        if (axisMap[inputName] !== undefined) {
            const axisState: GamepadAxisState = { controller: g.index, x: g.axes[axisMap[inputName][0]], y: g.axes[axisMap[inputName][1]] }
            states.push(axisState)
        }
    })
    return states.sort((a: GamepadAxisState, b: GamepadAxisState) => a.controller - b.controller)
}
