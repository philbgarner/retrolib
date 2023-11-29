import Scene from "./scene"

let start: number = null
const scenes: Scene[] = []

function addScene(scene: Scene): Scene {
    scenes.push(scene)
    return scene
}

function activateScene(id: string): void {
    const index: number = scenes.findIndex((s: Scene) => s.id === id)
    if (index > -1) {
        scenes[index].active = true
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
    scenes.filter(f => f.active).forEach(scene => {
        scene.handleInput(input, amt, released)
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
    scenes.filter((f: Scene) => f.active).forEach((scene: Scene) => {
        scene.animationFrame(delta)
    })
}

export { handleAnimationFrame, handleInput, addScene, activateScene, deActivateScene }