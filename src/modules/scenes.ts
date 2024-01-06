import Scene from "./scene"
import * as input from './input'
import { gamepadsDidUpdate } from "./input-gamepad"
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

export enum TransitionEffect {
    Fade = 0,
    Instant,
}

let start: number = null
const scenes: Scene[] = []
let ctx = null

function addScene(scene: Scene): Scene {
    scenes.push(scene)
    return scene
}

export function getScene(sceneId: string): Scene {
    const scene = scenes.filter(scene => scene.id === sceneId)
    return scene.length > 0 ? scene[0] : null
}

function hasScene(id: string): boolean {
    return scenes.filter(scene => scene.id === id).length > 0
}

function activateScene(id: string): void {
    const index: number = scenes.findIndex((s: Scene) => s.id === id)
    if (index > -1) {
        scenes[index].active = true
        scenes[index].pauseInput = false
        scenes[index].onActivate()
    }
}

function deActivateScene(id: string) {
    const index = scenes.findIndex(s => s.id === id)
    if (index > -1) {
        scenes[index].active = false
        scenes[index].onDeactivate()
    }
}

function handleInput(input: string, amt: number, released: boolean) {
    scenes.filter(f => f.active && !f.pauseInput).forEach(scene => {
        if (scene.handleInput) {
            scene.handleInput(input, amt, released)
        }
    })
}

function handleAnimationFrame(timeStamp: number) {
    window.requestAnimationFrame(handleAnimationFrame)
    if (start === null) {
        start = timeStamp - 16 // If we don't do this, the first frame timestamp is too long so we fake 60fps by subtracting 16.
                               // Could probably be improved.
    }
    const delta: number = timeStamp - start;
    start = timeStamp;

    // Check for gamepad updates, fire off 
    gamepadsDidUpdate()

    if (!ctx) {
        ctx = getContext()
    }
    let opacity = ctx.globalAlpha
    // Run animationFrame for each active scene.
    scenes.filter((f: Scene) => f.active).forEach((scene: Scene) => {
        scene.elapsed += delta
        ctx.globalAlpha = scene.opacity
        scene.animationFrame(delta)
    })
    ctx.globalAlpha = opacity
}

export { handleAnimationFrame, handleInput, addScene, activateScene, deActivateScene, hasScene }