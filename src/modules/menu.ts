import Scene, { AnimationFrameFunction } from "./scene"
class Menu extends Scene {
    offsetX: number
    offsetY: number
    menuOptions: string[]
    selectedOption: number

    constructor(id: string, active: boolean, options: string[], nextSceneId: string, prevSceneId: string) {
        const animationFrame: AnimationFrameFunction = (delta: number) => {

        }
        super(id, animationFrame, active, undefined, undefined, (event) => console.log('event', event))

        this.offsetX = 0
        this.offsetY = 0

        this.selectedOption = 0
        this.menuOptions = options
    }
}

export default Menu