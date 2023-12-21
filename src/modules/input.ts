import * as scenes from './scenes'
import * as gamepad from './input-gamepad'
import * as keyboard from './input-keyboard'

/**
 * 
 * Globals
 * 
 */

export let inputState: { [key: string]: InputState } = {}

export let onInputReleased: InputReleasedFunction = () => {}
export let onInputPressed: InputPressedFunction = () => {}

/**
 * Input Released Event Handler. This gets called by keyboard/gamepad event handlers
 * when a state changes.
 * @param inputName 
 * @param controller 
 */
export function handleInputReleased(inputName: string, controller?: number) {
    // Call the pressed input callback function.
    console.log('handleInputReleased', inputName)
    onInputReleased(inputName, controller)
}

/**
 * Input Pressed Event Handler.  This gets called by keyboard/gamepad event handlers
 * when a state changes.
 * @param inputName 
 * @param controller 
 */
export function handleInputPressed(inputName: string, controller?: number) {
    // Call the pressed input callback function.
    console.log('handleInputPressed', inputName)
    onInputPressed(inputName, controller)
}

export let inputMaps: { [key: string]: InputMap[] }

export const settings: InputSettings = {
    axisPressedThreshold: 0.3
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
    parent: string,
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
        scenes.handleInput(inputName, 1, false)
    }
    onInputReleased = (inputName: string) => {
        scenes.handleInput(inputName, 0, true)
    }
}

/**
 * Reset button mappings to defaults.
 */
export function resetInputMaps() {
    inputMaps = {
        'left': [
            { parent: 'left', type: InputType.Keyboard, mapKey: 'ArrowLeft', axisPlane: '', axisCheckDirection: 0 },
            { parent: 'left', type: InputType.GamepadAxis, mapKey: 'leftJoystick', axisPlane: 'x', axisCheckDirection: -1 }],
        'right': [
            { parent: 'right', type: InputType.Keyboard, mapKey: 'ArrowRight', axisPlane: '', axisCheckDirection: 0 },
            { parent: 'right', type: InputType.GamepadAxis, mapKey: 'leftJoystick', axisPlane: 'x', axisCheckDirection: 1 }],
        'up': [
            { parent: 'up', type: InputType.Keyboard, mapKey: 'ArrowUp', axisPlane: '', axisCheckDirection: 0 },
            { parent: 'up', type: InputType.GamepadAxis, mapKey: 'leftJoystick', axisPlane: 'y', axisCheckDirection: -1 }],
        'down': [
            { parent: 'down', type: InputType.Keyboard, mapKey: 'ArrowDown', axisPlane: '', axisCheckDirection: 0},
            { parent: 'down', type: InputType.GamepadAxis, mapKey: 'leftJoystick', axisPlane: 'y', axisCheckDirection: 1 }],
        'action': [
            { parent: 'action', type: InputType.Keyboard, mapKey: ' ', axisPlane: '', axisCheckDirection: 0},
            { parent: 'action', type: InputType.GamepadButton, mapKey: 'action', axisPlane: '', axisCheckDirection: 0 }],
        'cancel': [
            { parent: 'cancel', type: InputType.Keyboard, mapKey: 'Escape', axisPlane: '', axisCheckDirection: 0},
            { parent: 'cancel', type: InputType.GamepadButton, mapKey: 'cancel', axisPlane: '', axisCheckDirection: 0 }],            
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
    // inputs.forEach(input => {
    //     if (input.type === InputType.Keyboard && keyboard.getInputKeyState(inputName) && inputState[inputName] !== InputState.Pressed) {
    //         ret = true
    //         inputState[inputName] = InputState.Pressed
    //     } else if (input.type === InputType.GamepadAxis && axisPressed(input.mapKey, input.axisPlane, input.axisCheckDirection, gamepadNumber) && inputState[inputName] !== InputState.Pressed) {
    //         ret = true
    //         inputState[inputName] = InputState.Pressed
    //     } else if (input.type === InputType.GamepadButton && buttonPressed(input.mapKey, gamepadNumber) && inputState[inputName] !== InputState.Pressed) {
    //         ret = true
    //         inputState[inputName] = InputState.Pressed
    //     }
    // })
    // if (ret) {
    //     onInputPressed(inputName, gamepadNumber)
    // }
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
    // inputs.forEach(input => {
    //     /**
    //      * TODO: This isn't working. let the gamepad/keyboard input modules implement their own events and just route them
    //      * here.
    //      */

    //     // if (input.type === InputType.Keyboard && !keyboard.getInputKeyState(inputName) && inputState[inputName] === InputState.Pressed) {
    //     //     ret = true
    //     // }
    //     // if (input.type === InputType.GamepadAxis && !axisPressed(input.mapKey, input.axisPlane, input.axisCheckDirection, gamepadNumber) && inputState[inputName] === InputState.Pressed) {
    //     //     ret = true
    //     // }
    //     if (input.type === InputType.GamepadButton && !buttonPressed(input.mapKey, gamepadNumber) && inputState[inputName] === InputState.Pressed) {
    //         ret = true
    //         inputState[inputName] = InputState.Released
    //     }
    // })
    // if (ret) {
    //     onInputReleased(inputName, gamepadNumber)
    // }
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