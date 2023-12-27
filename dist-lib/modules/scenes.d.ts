import Scene from "./scene";
declare function addScene(scene: Scene): Scene;
export declare function getScene(sceneId: string): Scene;
declare function hasScene(id: string): boolean;
declare function activateScene(id: string): void;
declare function deActivateScene(id: string): void;
declare function handleInput(input: string, amt: number, released: boolean): void;
declare function handleAnimationFrame(timeStamp: number): void;
export { handleAnimationFrame, handleInput, addScene, activateScene, deActivateScene, hasScene };
