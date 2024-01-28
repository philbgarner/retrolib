import { ColorRGBA } from "./modules/font"

export type CellType = {
    name: string,
    group: string,
    color: ColorRGBA | ColorRGBA[],
    bgColor: ColorRGBA,
    character: string
}

