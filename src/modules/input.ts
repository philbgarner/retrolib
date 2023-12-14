import * as scenes from './scenes'
import * as gamepad from './input-gamepad'
import * as keyboard from './input-keyboard'

/**
 * 
 * Globals
 * 
 */

export let onInputReleased: InputReleasedFunction = () => {}
export let onInputPressed: InputPressedFunction = () => {}

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

export enum InputState {
    Released=0,
    Pressed,
    Releasing
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

export interface InputReleasedFunction {
    (inputName: string, controller?: number): void
}
export interface InputPressedFunction {
    (inputName: string, controller?: number): void
}

export function initialize(): void {
    keyboard.resetKeysState()
    keyboard.resetKeyboardMappings()
    gamepad.resetGamepadButtonMappings()
    gamepad.resetGamepadAxisMappings()
    gamepad.resetButtonsState()
    inputMaps = {}
    resetInputMaps()
    gamepad.resetGamepadTimestamps()
    gamepad.setGamepadConnected(() => {})
    gamepad.setGamepadDisconnected(() => {})
    gamepad.setGamepadUpdated(() => {})
   
    window.removeEventListener('keydown', keyboard.keyboardDown)
    window.addEventListener('keydown', keyboard.keyboardDown)

    window.removeEventListener('keyup', keyboard.keyboardRelease)
    window.addEventListener('keyup', keyboard.keyboardRelease)

    window.ongamepadconnected = (event: GamepadEvent) => {
        gamepad.gamepadsTimestamps[event.gamepad.index] = 0
        gamepad.gamepadConnected(event)
    }
    window.ongamepaddisconnected = (event: GamepadEvent) => {
        gamepad.gamepadDisconnected(event)
        gamepad.gamepadsTimestamps[event.gamepad.index] = undefined
    }

    onInputPressed = (inputName: string) => {
        console.log('pressed', inputName)
        scenes.handleInput(inputName, 1, false)
    }
    onInputReleased = (inputName: string) => {
        console.log('released', inputName)
        scenes.handleInput(inputName, 0, true)
    }
}

/**
 * Reset button mappings to defaults.
 */
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
        'action': [
            { type: InputType.Keyboard, mapKey: ' ', axisPlane: '', axisCheckDirection: 0},
            { type: InputType.GamepadButton, mapKey: 'action', axisPlane: '', axisCheckDirection: 0 }],
        'cancel': [
            { type: InputType.Keyboard, mapKey: 'Escape', axisPlane: '', axisCheckDirection: 0},
            { type: InputType.GamepadButton, mapKey: 'cancel', axisPlane: '', axisCheckDirection: 0 }],            
    }
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
        if (input.type === InputType.Keyboard && keyboard.getInputKeyState(inputName)) {
            ret = true
        } else if (input.type === InputType.GamepadAxis && axisPressed(input.mapKey, input.axisPlane, input.axisCheckDirection, gamepadNumber)) {
            ret = true
        } else if (input.type === InputType.GamepadButton && buttonPressed(input.mapKey, gamepadNumber)) {
            ret = true
            // // Handle button state so we can fire synthetic event callbacks.
            // if (buttonsState[inputName] === undefined || buttonsState[inputName] === InputState.Released) {
            //     buttonsState[inputName] = InputState.Pressed
            //     onInputPressed(inputName, gamepadNumber)
            // }
        }
    })
    if (ret) {
        onInputPressed(inputName, gamepadNumber)
    }
    return ret
}


/**
 * Whether or not the specified button or key that maps to inputName is released. Not used for axes or triggers.
 * @param inputName Input name mapped to a button.
 * @param gamepadNumber 
 * @returns 
 */
export function inputReleased(inputName: string, gamepadNumber?: number): boolean {
    gamepadNumber = gamepadNumber === undefined ? 0 : gamepadNumber
    const inputs = []
    Object.keys(inputMaps).filter(f => f === inputName).forEach(key => inputs.push(...inputMaps[key]))
    let ret: boolean = false
    inputs.forEach(input => {
        if (input.type === InputType.Keyboard && !keyboard.getInputKeyState(inputName)) {
            ret = true
        } else if (input.type === InputType.GamepadAxis && !axisPressed(input.mapKey, input.axisPlane, input.axisCheckDirection, gamepadNumber)) {
            ret = true
        } else if (input.type === InputType.GamepadButton && !buttonPressed(input.mapKey, gamepadNumber)) {
            ret = true
            // Handle button state so we can fire synthetic event callbacks.
            if (gamepad.buttonsState[inputName] === undefined || gamepad.buttonsState[inputName] === InputState.Releasing) {
                gamepad.buttonsState[inputName] = InputState.Released
                onInputReleased(inputName, gamepadNumber)
            }
        }
    })
    if (ret) {
        onInputPressed(inputName, gamepadNumber)
    }
    return ret
}

export function buttonPressed(inputName: string, gamepadNumber?: number): boolean {
    gamepadNumber = gamepadNumber === undefined ? 0 : gamepadNumber
    const button = gamepad.getButtonState(inputName)[gamepadNumber]
    if (button && button.pressed) {
        return true
    }
    return false
}

export function axisPressed(inputName: string, axisPlane: number, direction: number, gamepadNumber?: number): boolean {
    gamepadNumber = gamepadNumber === undefined ? 0 : gamepadNumber
    const state = gamepad.getAxisState(inputName)[gamepadNumber]
    if (state) {
        if (direction < 0 && state[axisPlane] < 0 && state[axisPlane] <= -settings.axisPressedThreshold) {
            return true
        } else if (direction > 0 && state[axisPlane] > 0 && state[axisPlane] >= settings.axisPressedThreshold) {
            return true
        }
    }
    return false
}

export function updateInputState() {
    gamepad.getGamepads().forEach((g: Gamepad, index) => {
        Object.keys(inputMaps).forEach(key => {
            inputPressed(key, index)
            inputReleased(key, index)
        })
    })
}