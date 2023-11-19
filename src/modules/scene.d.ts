export interface InputHandlerFunction {
    (input: string, amt: number, released: boolean): void;
}
export interface AnimationFrameFunction {
    (delta: number): void;
}
export interface OnActivateFunction {
    (): void;
}
export interface OnDeactivateFunction {
    (): void;
}
declare class Scene {
    id: string;
    animationFrame: AnimationFrameFunction;
    active: boolean;
    onActivate: OnActivateFunction;
    onDeactivate: OnDeactivateFunction;
    handleInput: InputHandlerFunction;
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
}
export default Scene;
