import Scene from "./scene";
/**
 * Callback function for input directed at the scene.
 */
export interface InputHandlerFunction {
    (input: string, amt: number, released: boolean): void;
}
/**
 * Callback function for the animation frame event.
 */
export interface AnimationFrameFunction {
    (delta: number): void;
}
/**
 * Callback function for the activation event.
 */
export interface OnActivateFunction {
    (): void;
}
/**
 * Callback function for the deactivate event.
 */
export interface OnDeactivateFunction {
    (): void;
}
export declare enum TransitionEffect {
    Fade = 0,
    Instant = 1
}
declare function addScene(scene: Scene): Scene;
export declare function getScene(sceneId: string): Scene;
declare function hasScene(id: string): boolean;
declare function activateScene(id: string): void;
declare function deActivateScene(id: string): void;
declare function handleInput(input: string, amt: number, released: boolean): void;
declare function handleAnimationFrame(timeStamp: number): void;
export { handleAnimationFrame, handleInput, addScene, activateScene, deActivateScene, hasScene };
