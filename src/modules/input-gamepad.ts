import { settings, InputState, handleInputPressed, handleInputReleased, inputMaps, InputMap } from "./input"

/**
 * Current axes states as of the last updated frame by input name.
 */
export let axisState: { [key: string]: InputState } = {}
/**
 * Current buttons state as of the last upated frame by input name.
 */
export let buttonsState: { [key: string]: InputState } = {}
/**
 * List of input names (IE: action, cancel, etc.) and the button index number they map to.
 */
export let buttonsMap: { [key: string]: number } = {}
/**
 * List of input names (IE: left/right/up/down) and the axis index number they map to.
 */
export let axisMap: { [key: string]: number[] } = {}
/**
 * Gamepad timestamp value as of last frame update.
 */
export let gamepadsTimestamps: { [key: number]: number } = {}
/**
 * Event handler function for when a new gamepad is connected.
 */
export let gamepadConnected: GamepadConnectedFunction = () => {}
/**
 * Event handler function for when a gamepad is disconnected.
 */
export let gamepadDisconnected: GamepadDisonnectedFunction = () => {}
/**
 * Event handler function for when a gamepad has updated its state.
 */
export let gamepadUpdated: GamepadUpdatedFunction = () => {}

/**
 * Reset buttons state object to empty.
 */
export function resetButtonsState() {
    buttonsState = {}
}

/**
 * Reset gamepad timestamps to empty.
 */
export function resetGamepadTimestamps() {
    gamepadsTimestamps = {}
}

/**
 * Set gamepad timestamp value by index.
 * @param gamepadNumber Gamepad/controller index.
 * @param timestamp Updated timestamp value.
 */
export function setGamepadTimestamps(gamepadNumber: number, timestamp: number) {
    gamepadsTimestamps[gamepadNumber] = timestamp
}

/**
 * Callback function for updates.
 */
export interface GamepadUpdatedFunction {
    (gamepad: Gamepad): void
}

/**
 * Callback function for connection event.
 */
export interface GamepadConnectedFunction {
    (event: GamepadEvent): void
}

/**
 * Callback function for disconnection event.
 */
export interface GamepadDisonnectedFunction {
    (event: GamepadEvent): void
}

/**
 * Button and input name relationships.
 */
export type GamepadInputRelationship = {
    inputName: string,
    button: number
}

/**
 * Button state stored by input name.
 */
export type GamepadButtonState = {
    controller: number,
    inputName: string,
    value: number,
    pressed: boolean,
    touched: boolean
}

/**
 * Gamepad axes x and y states.
 */
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

/**
 * Reset axis mappings to defaults.
 */
export function resetGamepadAxisMappings() {
    axisMap = { 'leftJoystick': [0, 1], 'rightJoystick': [3, 4], 'dPad': [6, 7], 'trigger': [2, 5] }
}

/**
 * Set the callback for the gamepadconnected event.
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/gamepadconnected_event
 * @param fn Callback function for when a gamepad connects.
 */
export function onGamepadConnected(fn: GamepadConnectedFunction) {
    gamepadConnected = fn
}

/** Set the callback for the gamepaddisconnected event.
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/gamepaddisconnected_event
 */
export function onGamepadDisconnected(fn: GamepadDisonnectedFunction) {
    gamepadDisconnected = fn
}

/**
 * Set the callback for when a gamepad input or axis state has changed.
 * @param fn Callback function.
 */
export function onGamepadUpdated(fn: GamepadUpdatedFunction) {
    gamepadUpdated = fn
}

/**
 * Run once per frame to update internal state objects and trigger event callbacks.
 */
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
                    for (const map of maps) {
                        if (!isAxisPressed(map.parent) && axisState[map.parent] === InputState.Pressed) {
                            axisState[map.parent] = InputState.Released
                            handleInputReleased(map.parent, g.index)
                            break
                        }

                        if (isAxisPressed(map.parent) && axisState[map.parent] !== InputState.Pressed) {
                            axisState[map.parent] = InputState.Pressed
                            handleInputPressed(map.parent, g.index)
                            break
                        }
                    }
                }
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

export function isAxisPressed(inputName: string, controller?: number): boolean {
    controller = controller === undefined ? 0 : controller
    const axes = Object.keys(axisMap)
    //.forEach(axis => {
    for (const axis of axes) {
        let maps: InputMap[] = []
        Object.keys(inputMaps).forEach(input => {
            if (inputMaps[input].filter(f => f.mapKey === axis && f.parent === inputName).length > 0) {
                maps.push(...inputMaps[input].filter(f => f.mapKey === axis))
            }
        })
        if (maps.length > 0) {
            for (const map of maps) {
                let state = getAxisData(map.mapKey)[controller]
                if (state) {
                    if (map.axisCheckDirection < 0 && map.axisPlane === 'x' && state.x < -settings.axisPressedThreshold) {
                        return true
                    } else if (map.axisCheckDirection > 0 && map.axisPlane === 'x' && state.x > settings.axisPressedThreshold) {
                        return true
                    }
                    if (map.axisCheckDirection < 0 && map.axisPlane === 'y' && state.y < -settings.axisPressedThreshold) {
                        return true
                    } else if (map.axisCheckDirection > 0 && map.axisPlane === 'y' && state.y > settings.axisPressedThreshold) {
                        return true
                    }
                }
            }
        }
    }

    return false
}

/**
 * Get the list of currently connected Gamepad typed objects.
 * https://developer.mozilla.org/en-US/docs/Web/API/Gamepad
 * @returns Array of gamepad objects in order by Gamepad.index property.
 */
export function getGamepads(): Gamepad[] {
    return navigator.getGamepads().sort((a: Gamepad, b: Gamepad) => a.index - b.index)
}

/**
 * Get the gamepad button index mapped to inputName.
 * @param inputName Input name.
 * @returns 
 */
export function getMappedButtonIndex(inputName: string): number {
    return buttonsMap[inputName] !== undefined ? buttonsMap[inputName] : null
}

/**
 * List all input relationships mapped to the gamepad buttons.
 */
export function getMappedButtons(): GamepadInputRelationship[] {
    const inputMap: GamepadInputRelationship[] = []
    Object.keys(buttonsMap).forEach((key: string) => {
        const rel: GamepadInputRelationship = { inputName: key, button: buttonsMap[key] }
        inputMap.push(rel)
    })
    return inputMap
}

/**
 * Set a button mapping by input name.
 * @param inputName Input name.
 * @param buttonIndex Gamepad object's button index to assign to this input name.
 */
export function setMappedButton(inputName: string, buttonIndex: number): void {
    buttonsMap[inputName] = buttonIndex
}

/**
 * Get the current gamepad button state by input name.
 * @param inputName Input name.
 * @returns Current gamepad button state.
 */
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

/**
 * Get the current axis input state by input name.
 * @param inputName Input name.
 * @returns Gamepad object's axis input state.
 */
export function getAxisInputState(inputName: string): InputState {
    return axisState[inputName]
}

/**
 * Gets the current axis state data from the connected gamepads and returns a
 * transformed object showing only controller indices and x/y states.
 * @param inputName Input name.
 * @returns 
 */
export function getAxisData(inputName: string): GamepadAxisState[] {
    const states: GamepadAxisState[] = []
    getGamepads().forEach((g: Gamepad) => {
        if (axisMap[inputName] !== undefined) {
            const axisState: GamepadAxisState = { controller: g.index, x: g.axes[axisMap[inputName][0]], y: g.axes[axisMap[inputName][1]] }
            states.push(axisState)
        }
    })
    return states.sort((a: GamepadAxisState, b: GamepadAxisState) => a.controller - b.controller)
}
