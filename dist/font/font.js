"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const defaultFont_json_1 = __importDefault(require("./defaultFont.json"));
const FontData_1 = __importDefault(require("./FontData"));
var fonts = {
    default: {}
};
function LoadFromJSON(font) {
    try {
        let fontData = Object.assign(new FontData_1.default(), defaultFont_json_1.default);
        fontData.image = new Image();
        fontData.image.src = 'data:image/png;base64,' + fontData.imagedata;
        return font;
    }
    catch (e) {
        throw new Error(e);
    }
}
//# sourceMappingURL=font.js.map