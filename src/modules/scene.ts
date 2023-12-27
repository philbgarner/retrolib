import { getContext } from "./images"

/**
 * Callback function for input directed at the scene.
 */
export interface InputHandlerFunction { (input: string, amt: number, released: boolean): void }
/**
 * Callback function for the animation frame event.
 */
export interface AnimationFrameFunction { (delta: number): void }
/**
 * Callback function for the activation event.
 */
export interface OnActivateFunction { (): void }
/**
 * Callback function for the deactivate event.
 */
export interface OnDeactivateFunction { (): void }

/**
 * Scene classes know how to draw themselves with animationFrame and a handleInput callback
 * for keyboard/gamepad controls.
 */
class Scene {
    id: string
    ctx: CanvasRenderingContext2D
    animationFrame: AnimationFrameFunction
    active: boolean
    pauseInput: boolean
    onActivate: OnActivateFunction
    onDeactivate: OnDeactivateFunction
    /**
     * Callback function for input directed at the scene.
     */
    handleInput: InputHandlerFunction
    elapsed: number
    opacity: number

    /**
     * Create a new scene object.
     * @param id Scene name, unique identifier to fetch with.
     * @param animationFrame Scene's render/update callback.
     * @param active Whether or not the scene is initialized active.
     * @param onActivate Call this function when the scene activates.
     * @param onDeactivate Call this function when the scene deactivates.
     * @param handleInput This function gets called when the scene receives input.
     */
    constructor(id: string, animationFrame: AnimationFrameFunction, active: boolean, onActivate: OnActivateFunction, onDeactivate: OnDeactivateFunction, handleInput: InputHandlerFunction) {
        this.ctx = getContext()
        this.id = id
        this.animationFrame = animationFrame
        this.active = active
        this.onActivate = onActivate
        this.onDeactivate = onDeactivate
        this.handleInput = handleInput
        this.elapsed = 0
        this.opacity = 1
    }
}

export default Scene