import { gamepadsDidUpdate } from "./input-gamepad";
import { getContext } from "./images";
import { canvasHeight, canvasWidth } from "../retrolib";
export var TransitionEffect;
(function (TransitionEffect) {
    TransitionEffect[TransitionEffect["Fade"] = 0] = "Fade";
    TransitionEffect[TransitionEffect["Instant"] = 1] = "Instant";
})(TransitionEffect || (TransitionEffect = {}));
var start = null;
var scenes = [];
var ctx = null;
export function getScenes() {
    return scenes;
}
export function removeScene(sceneName) {
    scenes = scenes.filter(function (f) { return f.id !== sceneName; });
}
export function addScene(scene) {
    scenes.push(scene);
    return scene;
}
export function getScene(sceneId) {
    var scene = scenes.filter(function (scene) { return scene.id === sceneId; });
    return scene.length > 0 ? scene[0] : null;
}
export function hasScene(id) {
    return scenes.filter(function (scene) { return scene.id === id; }).length > 0;
}
export function activateScene(id) {
    var index = scenes.findIndex(function (s) { return s.id === id; });
    if (index > -1) {
        scenes[index].active = true;
        scenes[index].pauseInput = false;
        scenes[index].onActivate();
    }
}
export function deActivateScene(id) {
    var index = scenes.findIndex(function (s) { return s.id === id; });
    if (index > -1) {
        scenes[index].active = false;
        scenes[index].onDeactivate();
    }
}
export function handleInput(input, amt, released) {
    scenes.filter(function (f) { return f.active && !f.pauseInput; }).forEach(function (scene) {
        if (scene.handleInput) {
            scene.handleInput(input, amt, released);
        }
    });
}
export function handleAnimationFrame(timeStamp) {
    window.requestAnimationFrame(handleAnimationFrame);
    if (start === null) {
        start = timeStamp - 16; // If we don't do this, the first frame timestamp is too long so we fake 60fps by subtracting 16.
        // Could probably be improved.
    }
    var delta = timeStamp - start;
    start = timeStamp;
    // Check for gamepad updates, fire off 
    gamepadsDidUpdate();
    if (!ctx) {
        ctx = getContext();
    }
    var opacity = ctx.globalAlpha;
    // Run animationFrame for each active scene.
    scenes.filter(function (f) { return f.active; }).forEach(function (scene) {
        if (scene.clearFrame) {
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        }
        scene.elapsed += delta;
        ctx.globalAlpha = scene.opacity;
        scene.animationFrame(delta);
    });
    ctx.globalAlpha = opacity;
}
//# sourceMappingURL=scenes.js.map