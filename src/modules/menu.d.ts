import Scene from "./scene";
declare class Menu extends Scene {
    offsetX: number;
    offsetY: number;
    menuOptions: string[];
    selectedOption: number;
    constructor(id: string, active: boolean, options: string[], nextSceneId: string, prevSceneId: string);
}
export default Menu;
