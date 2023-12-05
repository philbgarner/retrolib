export interface InputHandlerFunction { (input: string, amt: number, released: boolean): void }
export interface AnimationFrameFunction { (delta: number): void }
export interface OnActivateFunction { (): void }
export interface OnDeactivateFunction { (): void }

/**
 * Scene classes know how to draw themselves with animationFrame and a handleInput callback
 * for keyboard/gamepad controls.
 */
class Scene {
    id: string
    animationFrame: AnimationFrameFunction
    active: boolean
    onActivate: OnActivateFunction
    onDeactivate: OnDeactivateFunction
    handleInput: InputHandlerFunction
    elapsed: number

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
        this.id = id
        this.animationFrame = animationFrame
        this.active = active
        this.onActivate = onActivate
        this.onDeactivate = onDeactivate
        this.handleInput = handleInput
        this.elapsed = 0
    }
}

export default Scene