import { getContext } from "./images";
import * as scenes from './scenes';
import { TransitionEffect } from "./scenes";
/**
 * Scene fasses know how to draw themselves with animationFrame and a handleInput callback
 * for keyboard/gamepad controls.
 */
var Scene = /** @class */ (function () {
    /**
     * Create a new scene object.
     * @param id Scene name, unique identifier to fetch with.
     * @param animationFrame Scene's render/update callback.
     * @param active Whether or not the scene is initialized active.
     * @param onActivate Call this function when the scene activates.
     * @param onDeactivate Call this function when the scene deactivates.
     * @param handleInput This function gets called when the scene receives input.
     */
    function Scene(id, animationFrame, active, onActivate, onDeactivate, handleInput) {
        this.clearFrame = true;
        this.ctx = getContext();
        this.id = id;
        this.animationFrame = animationFrame;
        this.active = active;
        this.onActivate = onActivate;
        this.onDeactivate = onDeactivate;
        this.handleInput = handleInput;
        this.elapsed = 0;
        this.opacity = 1;
    }
    /**
 * Transition from one scene to another using a predefined effect.
 * @param sceneId Menu or Scene Id to transition to.
 * @param effect Which transition effect to take.
 * @param duration Time to take applying the effect while deactivating and activating scenes.
 * @param steps Amount of steps to divide the duration by and update the effect amount.
 */
    Scene.prototype.TransitionTo = function (sceneId, effect, duration, steps) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var sceneTo = scenes.getScene(sceneId);
            var sceneFrom = scenes.getScene(_this.id);
            if (sceneTo) {
                sceneTo.opacity = 0;
                sceneFrom.opacity = 1;
                sceneFrom.pauseInput = true;
                switch (effect) {
                    case TransitionEffect.Instant:
                        scenes.deActivateScene(_this.id);
                        scenes.activateScene(sceneTo.id);
                        resolve();
                        break;
                    case TransitionEffect.Fade:
                        var opacity_1 = 1;
                        var stepAmt_1 = opacity_1 / steps;
                        // Run Fade In Loop
                        var fadeIn_1 = function () {
                            if (opacity_1 < 1) {
                                opacity_1 += stepAmt_1;
                                opacity_1 = opacity_1 > 1 ? 1 : opacity_1;
                            }
                            else {
                                opacity_1 = 1;
                                resolve();
                                return;
                            }
                            sceneTo.opacity = opacity_1;
                            setTimeout(fadeIn_1, (duration / 2) / steps);
                        };
                        // Run Fade Out Loop
                        var fadeOut_1 = function () {
                            if (opacity_1 > 0) {
                                opacity_1 -= stepAmt_1;
                                opacity_1 = opacity_1 < 0 ? 0 : opacity_1;
                            }
                            else {
                                opacity_1 = 0;
                                sceneFrom.opacity = 1;
                                sceneTo.opacity = 0;
                                scenes.deActivateScene(sceneFrom.id);
                                scenes.activateScene(sceneTo.id);
                                fadeIn_1();
                                return;
                            }
                            sceneFrom.opacity = opacity_1;
                            setTimeout(fadeOut_1, (duration / 2) / steps);
                        };
                        fadeOut_1();
                        break;
                }
            }
        });
    };
    return Scene;
}());
export default Scene;
//# sourceMappingURL=scene.js.map