import { AnimationFrameFunction, OnActivateFunction, InputHandlerFunction, OnDeactivateFunction, TransitionEffect } from "./scenes";
/**
 * Scene fasses know how to draw themselves with animationFrame and a handleInput callback
 * for keyboard/gamepad controls.
 */
declare class Scene {
    id: string;
    ctx: CanvasRenderingContext2D;
    animationFrame: AnimationFrameFunction;
    active: boolean;
    pauseInput: boolean;
    onActivate: OnActivateFunction;
    onDeactivate: OnDeactivateFunction;
    /**
     * Callback function for input directed at the scene.
     */
    handleInput: InputHandlerFunction;
    elapsed: number;
    opacity: number;
    /**
     * Create a new scene object.
     * @param id Scene name, unique identifier to fetch with.
     * @param animationFrame Scene's render/update callback.
     * @param active Whether or not the scene is initialized active.
     * @param onActivate Call this function when the scene activates.
     * @param onDeactivate Call this function when the scene deactivates.
     * @param handleInput This function gets called when the scene receives input.
     */
    constructor(id: string, animationFrame: AnimationFrameFunction, active: boolean, onActivate: OnActivateFunction, onDeactivate: OnDeactivateFunction, handleInput: InputHandlerFunction);
    /**
 * Transition from one scene to another using a predefined effect.
 * @param sceneId Menu or Scene Id to transition to.
 * @param effect Which transition effect to take.
 * @param duration Time to take applying the effect while deactivating and activating scenes.
 * @param steps Amount of steps to divide the duration by and update the effect amount.
 */
    TransitionTo(sceneId: string, effect: TransitionEffect, duration: number, steps: number): Promise<void>;
}
export default Scene;
