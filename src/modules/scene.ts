import { getContext } from "./images"
import * as scenes from './scenes'

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

export enum TransitionEffect {
    Fade = 0,
    Instant,
}

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

        /**
     * Transition from one scene to another using a predefined effect.
     * @param sceneId Menu or Scene Id to transition to.
     * @param effect Which transition effect to take.
     * @param duration Time to take applying the effect while deactivating and activating scenes.
     * @param steps Amount of steps to divide the duration by and update the effect amount.
     */
    TransitionTo(sceneId: string, effect: TransitionEffect, duration: number, steps: number) {
        return new Promise<void>((resolve, reject) => {
            const sceneTo = scenes.getScene(sceneId)
            const sceneFrom = scenes.getScene(this.id)
            if (sceneTo) {
                sceneTo.opacity = 0
                sceneFrom.opacity = 1
                sceneFrom.pauseInput = true
                switch(effect) {
                    case TransitionEffect.Instant:
                        scenes.deActivateScene(this.id)
                        scenes.activateScene(sceneTo.id)
                        resolve()
                        break
                    case TransitionEffect.Fade:
                        let opacity = 1
                        let stepAmt = opacity / steps

                        // Run Fade In Loop
                        const fadeIn = () => {
                            if (opacity < 1) {
                                opacity += stepAmt
                                opacity = opacity > 1 ? 1 : opacity
                            } else {
                                opacity = 1
                                resolve()
                                return
                            }
                            sceneTo.opacity = opacity
                            setTimeout(fadeIn, (duration / 2) / steps)
                        }
                        
                        // Run Fade Out Loop
                        const fadeOut = () => {
                            if (opacity > 0) {
                                opacity -= stepAmt
                                opacity = opacity < 0 ? 0 : opacity
                            } else {
                                opacity = 0
                                sceneFrom.opacity = 1
                                sceneTo.opacity = 0
                                scenes.deActivateScene(sceneFrom.id)
                                scenes.activateScene(sceneTo.id)
                                fadeIn()
                                return
                            }
                            sceneFrom.opacity = opacity
                            setTimeout(fadeOut, (duration / 2) / steps)
                        }
                        fadeOut()
                        break
                }
            }
        })
    }
}

export default Scene