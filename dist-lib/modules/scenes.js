import { gamepadsDidUpdate } from "./input-gamepad";
var start = null;
var scenes = [];
function addScene(scene) {
    scenes.push(scene);
    return scene;
}
function hasScene(id) {
    return scenes.filter(function (scene) { return scene.id === id; }).length > 0;
}
function activateScene(id) {
    var index = scenes.findIndex(function (s) { return s.id === id; });
    if (index > -1) {
        scenes[index].active = true;
        scenes[index].onActivate();
    }
}
function deActivateScene(id) {
    var index = scenes.findIndex(function (s) { return s.id === id; });
    if (index > -1) {
        scenes[index].active = false;
        scenes[index].onDeactivate();
    }
}
function handleInput(input, amt, released) {
    scenes.filter(function (f) { return f.active; }).forEach(function (scene) {
        if (scene.handleInput) {
            scene.handleInput(input, amt, released);
        }
    });
}
function handleAnimationFrame(timeStamp) {
    window.requestAnimationFrame(handleAnimationFrame);
    if (start === null) {
        start = timeStamp - 16; // If we don't do this, the first frame timestamp is too long so we fake 60fps by subtracting 16.
        // Could probably be improved.
    }
    var delta = timeStamp - start;
    start = timeStamp;
    // Check for gamepad updates, fire off 
    gamepadsDidUpdate();
    // Run animationFrame for each active scene.
    scenes.filter(function (f) { return f.active; }).forEach(function (scene) {
        scene.elapsed += delta;
        scene.animationFrame(delta);
    });
}
export { handleAnimationFrame, handleInput, addScene, activateScene, deActivateScene, hasScene };
//# sourceMappingURL=scenes.js.map