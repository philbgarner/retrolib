(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["retrolib"] = factory();
	else
		root["retrolib"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/canvas/browser.js":
/*!****************************************!*\
  !*** ./node_modules/canvas/browser.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* globals document, ImageData */

const parseFont = __webpack_require__(/*! ./lib/parse-font */ "./node_modules/canvas/lib/parse-font.js")

exports.parseFont = parseFont

exports.createCanvas = function (width, height) {
  return Object.assign(document.createElement('canvas'), { width: width, height: height })
}

exports.createImageData = function (array, width, height) {
  // Browser implementation of ImageData looks at the number of arguments passed
  switch (arguments.length) {
    case 0: return new ImageData()
    case 1: return new ImageData(array)
    case 2: return new ImageData(array, width)
    default: return new ImageData(array, width, height)
  }
}

exports.loadImage = function (src, options) {
  return new Promise(function (resolve, reject) {
    const image = Object.assign(document.createElement('img'), options)

    function cleanup () {
      image.onload = null
      image.onerror = null
    }

    image.onload = function () { cleanup(); resolve(image) }
    image.onerror = function () { cleanup(); reject(new Error('Failed to load the image "' + src + '"')) }

    image.src = src
  })
}


/***/ }),

/***/ "./node_modules/canvas/lib/parse-font.js":
/*!***********************************************!*\
  !*** ./node_modules/canvas/lib/parse-font.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


/**
 * Font RegExp helpers.
 */

const weights = 'bold|bolder|lighter|[1-9]00'
const styles = 'italic|oblique'
const variants = 'small-caps'
const stretches = 'ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded'
const units = 'px|pt|pc|in|cm|mm|%|em|ex|ch|rem|q'
const string = '\'([^\']+)\'|"([^"]+)"|[\\w\\s-]+'

// [ [ <‘font-style’> || <font-variant-css21> || <‘font-weight’> || <‘font-stretch’> ]?
//    <‘font-size’> [ / <‘line-height’> ]? <‘font-family’> ]
// https://drafts.csswg.org/css-fonts-3/#font-prop
const weightRe = new RegExp(`(${weights}) +`, 'i')
const styleRe = new RegExp(`(${styles}) +`, 'i')
const variantRe = new RegExp(`(${variants}) +`, 'i')
const stretchRe = new RegExp(`(${stretches}) +`, 'i')
const sizeFamilyRe = new RegExp(
  `([\\d\\.]+)(${units}) *((?:${string})( *, *(?:${string}))*)`)

/**
 * Cache font parsing.
 */

const cache = {}

const defaultHeight = 16 // pt, common browser default

/**
 * Parse font `str`.
 *
 * @param {String} str
 * @return {Object} Parsed font. `size` is in device units. `unit` is the unit
 *   appearing in the input string.
 * @api private
 */

module.exports = str => {
  // Cached
  if (cache[str]) return cache[str]

  // Try for required properties first.
  const sizeFamily = sizeFamilyRe.exec(str)
  if (!sizeFamily) return // invalid

  // Default values and required properties
  const font = {
    weight: 'normal',
    style: 'normal',
    stretch: 'normal',
    variant: 'normal',
    size: parseFloat(sizeFamily[1]),
    unit: sizeFamily[2],
    family: sizeFamily[3].replace(/["']/g, '').replace(/ *, */g, ',')
  }

  // Optional, unordered properties.
  let weight, style, variant, stretch
  // Stop search at `sizeFamily.index`
  const substr = str.substring(0, sizeFamily.index)
  if ((weight = weightRe.exec(substr))) font.weight = weight[1]
  if ((style = styleRe.exec(substr))) font.style = style[1]
  if ((variant = variantRe.exec(substr))) font.variant = variant[1]
  if ((stretch = stretchRe.exec(substr))) font.stretch = stretch[1]

  // Convert to device units. (`font.unit` is the original unit)
  // TODO: ch, ex
  switch (font.unit) {
    case 'pt':
      font.size /= 0.75
      break
    case 'pc':
      font.size *= 16
      break
    case 'in':
      font.size *= 96
      break
    case 'cm':
      font.size *= 96.0 / 2.54
      break
    case 'mm':
      font.size *= 96.0 / 25.4
      break
    case '%':
      // TODO disabled because existing unit tests assume 100
      // font.size *= defaultHeight / 100 / 0.75
      break
    case 'em':
    case 'rem':
      font.size *= defaultHeight / 0.75
      break
    case 'q':
      font.size *= 96 / 25.4 / 4
      break
  }

  return (cache[str] = font)
}


/***/ }),

/***/ "./src/modules/FontData.ts":
/*!*********************************!*\
  !*** ./src/modules/FontData.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var FontData = /** @class */ (function () {
    function FontData() {
    }
    return FontData;
}());
exports["default"] = FontData;


/***/ }),

/***/ "./src/modules/ImageDefinition.ts":
/*!****************************************!*\
  !*** ./src/modules/ImageDefinition.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var ImageDefinition = /** @class */ (function () {
    function ImageDefinition() {
    }
    ImageDefinition.fromJSON = function (json) {
        return Object.assign(new ImageDefinition(), json);
    };
    return ImageDefinition;
}());
exports["default"] = ImageDefinition;


/***/ }),

/***/ "./src/modules/MusicDefinition.ts":
/*!****************************************!*\
  !*** ./src/modules/MusicDefinition.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var MusicDefinition = /** @class */ (function () {
    function MusicDefinition() {
    }
    MusicDefinition.fromJSON = function (json) {
        return Object.assign(new MusicDefinition(), json);
    };
    return MusicDefinition;
}());
exports["default"] = MusicDefinition;


/***/ }),

/***/ "./src/modules/SfxDefinition.ts":
/*!**************************************!*\
  !*** ./src/modules/SfxDefinition.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var SfxDefinition = /** @class */ (function () {
    function SfxDefinition() {
    }
    SfxDefinition.fromJSON = function (json) {
        return Object.assign(new SfxDefinition(), json);
    };
    return SfxDefinition;
}());
exports["default"] = SfxDefinition;


/***/ }),

/***/ "./src/modules/font.ts":
/*!*****************************!*\
  !*** ./src/modules/font.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CodepageAndBitmaptoJSON = exports.ImageToBase64 = exports.HexToRgba = exports.RgbaToHex = exports.ColorLerp = exports.Fonts = exports.LoadDefaultFonts = exports.LoadFromJSON = void 0;
var defaultFont_json_1 = __importDefault(__webpack_require__(/*! ./defaultFont.json */ "./src/modules/defaultFont.json"));
var FontData_1 = __importDefault(__webpack_require__(/*! ./FontData */ "./src/modules/FontData.ts"));
var codepage_js_1 = __importDefault(__webpack_require__(/*! ./codepage.js */ "./src/modules/codepage.js"));
var canvas_1 = __webpack_require__(/*! canvas */ "./node_modules/canvas/browser.js");
var images_1 = __webpack_require__(/*! ./images */ "./src/modules/images.ts");
var fonts = {
    default: {}
};
function LoadDefaultFonts() {
    fonts.default = LoadFromJSON(defaultFont_json_1.default);
}
exports.LoadDefaultFonts = LoadDefaultFonts;
function LoadFromJSON(font) {
    try {
        var fontData = Object.assign(new FontData_1.default(), font);
        fontData.image = new Image();
        fontData.image.src = 'data:image/png;base64,' + fontData.imagedata;
        return fontData;
    }
    catch (e) {
        throw new Error(e);
    }
}
exports.LoadFromJSON = LoadFromJSON;
function Fonts() {
    if (Object.keys(fonts).length === 0) {
        LoadDefaultFonts();
    }
    return Object.keys(fonts).map(function (m) { return fonts[m]; });
}
exports.Fonts = Fonts;
function HexToRgba(hex) {
    if (hex.length === 7) {
        hex += 'ff';
    }
    else if (hex.length === 8) {
        hex += '0';
    }
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
        a: parseInt(result[4], 16)
    } : null;
}
exports.HexToRgba = HexToRgba;
function RgbaToHex(rgb) {
    var r = rgb.r.toString(16);
    var g = rgb.g.toString(16);
    var b = rgb.b.toString(16);
    var a = rgb.a.toString(16);
    r = r.length === 1 ? '0' + r : r;
    g = g.length === 1 ? '0' + g : g;
    b = b.length === 1 ? '0' + b : b;
    a = a.length === 1 ? '0' + a : a;
    return "#".concat(r).concat(g).concat(b).concat(a);
}
exports.RgbaToHex = RgbaToHex;
function ColorLerp(color1, color2, t) {
    return {
        r: parseInt(color1.r + (color2.r - color1.r) * t),
        g: parseInt(color1.g + (color2.g - color1.g) * t),
        b: parseInt(color1.b + (color2.b - color1.b) * t),
        a: color1.a
    };
}
exports.ColorLerp = ColorLerp;
function ImageToBase64(img, outputFormat) {
    var canvas = null;
    outputFormat = outputFormat ? outputFormat : 'image/png';
    try {
        canvas = document.createElement('canvas');
    }
    catch (_a) {
        canvas = (0, canvas_1.createCanvas)(img.width, img.height);
    }
    var contx = canvas.getContext('2d');
    canvas.height = img.height;
    canvas.width = img.width;
    contx.drawImage(img, 0, 0);
    var data = canvas.toDataURL(outputFormat);
    var index = data.indexOf(';base64,') + ';base64,'.length;
    return data.slice(index);
}
exports.ImageToBase64 = ImageToBase64;
/**
 * Loads bitmap from path (string param type) or uses Image to get the base64 image data and build a precompiled font JSON object.
 * @param bitmap
 * @param max_y
 * @param cw Character width.
 * @param ch Character height.
 * @returns
 */
function CodepageAndBitmaptoJSON(bitmap, max_y, cw, ch) {
    return new Promise(function (resolve, reject) {
        try {
            var sx = 0; // Source X
            var sy = 0; // Source Y
            cw = cw ? cw : 9; // Character Width
            ch = ch ? ch : 16; // Character Height
            var codepage = [];
            var imagedata = null;
            var image = new Image();
            if (typeof bitmap === 'string') {
                imagedata = ImageToBase64((0, images_1.getImage)(bitmap));
                image.src = 'data:image/png;base64,' + imagedata;
            }
            else {
                image = bitmap;
                imagedata = ImageToBase64(image);
            }
            max_y = max_y ? max_y : image.height;
            var _loop_1 = function (code) {
                var codeitem = codepage_js_1.default.filter(function (f) { return f.codenumber === code; });
                if (codeitem.length > 0) {
                    codeitem[0].rect = undefined; // { x: sx, y: sy, w: cw, h: ch } //TODO: Make this a parameter to control whether we auto-generate rects
                    codepage.push(codeitem[0]);
                }
                sx += cw;
                if (sx >= image.width) {
                    sx = 0;
                    if (max_y && sy + ch < max_y) {
                        sy += ch;
                    }
                }
                if (sy >= image.height) {
                    sy = 0;
                }
            };
            for (var code = 0; code < 256; code++) {
                _loop_1(code);
            }
            resolve({ cwidth: cw, cheight: ch, codepage: codepage, imagedata: imagedata });
        }
        catch (e) {
            reject(e);
        }
    });
}
exports.CodepageAndBitmaptoJSON = CodepageAndBitmaptoJSON;


/***/ }),

/***/ "./src/modules/images.ts":
/*!*******************************!*\
  !*** ./src/modules/images.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.imageManifestFromJSON = exports.getContext = exports.drawImageCtx = exports.setContext = exports.getImages = exports.getImage = exports.drawImage = exports.loadImage = exports.loadAllImages = void 0;
var ImageDefinition_1 = __importDefault(__webpack_require__(/*! ./ImageDefinition */ "./src/modules/ImageDefinition.ts"));
var images = [];
/**
 * Populate images manifest with JSON list of definitions.
 * @param json JSON representation of image definitions.
 */
function imageManifestFromJSON(json) {
    json.forEach((function (def) { return images.push(ImageDefinition_1.default.fromJSON(def)); }));
}
exports.imageManifestFromJSON = imageManifestFromJSON;
// Canvas 2d context.
var ctx = null;
// Set the canvas 2d context.
function setContext(context) {
    ctx = context;
}
exports.setContext = setContext;
// Returns the canvas 2d context.
function getContext() {
    return ctx;
}
exports.getContext = getContext;
// Return loaded image object from the list.
function getImage(name) {
    var img = images.filter(function (f) { return f.name === name; });
    return img.length > 0 ? img[0].image : null;
}
exports.getImage = getImage;
// Returns the full list of image objects.
function getImages() {
    return images;
}
exports.getImages = getImages;
/**
 * Draws an image at x,y coordinates on the canas.
 * @param {string} name
 * @param {number} x
 * @param {number} y
 * @param {object} srcRect
 * @param {boolean} flipped
 */
function drawImage(name, x, y, srcRect, flipped) {
    drawImageCtx(getContext(), name, x, y, srcRect, flipped);
}
exports.drawImage = drawImage;
/**
 * Raw image drawing function (use drawImage unless you want to draw to another 2d context).
 * @param {object} context Canvas 2d context.
 * @param {string} name
 * @param {number} x
 * @param {number} y
 * @param {object} srcRect
 * @param {boolean} flipped
 */
function drawImageCtx(context, name, x, y, srcRect, flipped) {
    var img = images.filter(function (f) { return f.name === name; });
    if (img.length > 0) {
        try {
            if (srcRect) {
                if (flipped) {
                    context.save();
                    context.scale(-1, 1);
                    context.drawImage(img[0].image, srcRect.x, srcRect.y, srcRect.w, srcRect.h, -x - srcRect.w, y, srcRect.w, srcRect.h);
                    context.restore();
                }
                else {
                    context.drawImage(img[0].image, srcRect.x, srcRect.y, srcRect.w, srcRect.h, x, y, srcRect.w, srcRect.h);
                }
            }
            else {
                if (flipped) {
                    context.save();
                    context.scale(-1, 1);
                    context.drawImage(img[0].image, x - srcRect.w, y, srcRect.w, srcRect.h);
                    context.restore();
                }
                else {
                    context.drawImage(img[0].image, x, y);
                }
            }
        }
        catch (_a) {
            // empty
        }
    }
}
exports.drawImageCtx = drawImageCtx;
/**
 * Load Image
 * @param {string} filename
 * @returns
 */
function loadImage(filename) {
    return new Promise(function (resolve, reject) {
        var img = new Image();
        img.onload = function () {
            resolve(img);
        };
        img.onerror = function (e) {
            console.error("Failed to load file ".concat(filename, ":"), e);
            reject(null);
        };
        var image = images.filter(function (f) { return f.filename === filename; });
        if (image.length > 0) {
            img.src = filename;
        }
        else {
            console.error("Image definition matching filename ".concat(filename, " not found."));
            reject(null);
        }
    });
}
exports.loadImage = loadImage;
/**
 * Load all images in the images list.
 * @returns
 */
function loadAllImages() {
    var promises = [];
    var _loop_1 = function (i) {
        var image = images[i];
        promises.push(new Promise(function (resolve) { return loadImage(image.filename).then(function (r) {
            image.image = r;
            resolve(r);
        }).catch(function (e) { return console.error('Failed to load', image.filename, e); }); }));
    };
    for (var i in images) {
        _loop_1(i);
    }
    return Promise.allSettled(promises);
}
exports.loadAllImages = loadAllImages;


/***/ }),

/***/ "./src/modules/music.ts":
/*!******************************!*\
  !*** ./src/modules/music.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.musicManifestFromJSON = exports.isPlaying = exports.getTrack = exports.playTrack = exports.loadTrack = exports.loadAllTracks = void 0;
var MusicDefinition_1 = __importDefault(__webpack_require__(/*! ./MusicDefinition */ "./src/modules/MusicDefinition.ts"));
var sfxVolume = 0.45;
var sfxs = [];
/**
 * Populate sfx manifest with JSON list of definitions.
 * @param json JSON representation of image definitions.
 */
function musicManifestFromJSON(json) {
    json.forEach((function (def) { return sfxs.push(MusicDefinition_1.default.fromJSON(def)); }));
}
exports.musicManifestFromJSON = musicManifestFromJSON;
function isPlaying(name) {
    var sf = getTrack(name);
    if (sf) {
        return !sf.paused || sf.currentTime && sf.currentTime < sf.duration;
    }
    return false;
}
exports.isPlaying = isPlaying;
function getTrack(name) {
    var sf = sfxs.filter(function (f) { return f.name === name; });
    return sf.length > 0 ? sf[0].track : null;
}
exports.getTrack = getTrack;
function playTrack(name, onEnded) {
    return new Promise(function (resolve) {
        try {
            var sf_1 = sfxs.filter(function (f) { return f.name === name; });
            if (sf_1.length > 0) {
                if (!isPlaying(name)) {
                    sf_1[0].track.volume = sfxVolume;
                    if (onEnded) {
                        sf_1[0].track.onended = function () {
                            onEnded(sf_1[0]);
                            sf_1[0].track.onended = function () { resolve(); };
                        };
                    }
                    else {
                        sf_1[0].track.onended = function () { resolve(); };
                    }
                    sf_1[0].track.play();
                }
                else {
                    sf_1[0].track.currentTime = 0;
                }
            }
        }
        catch (e) {
            console.log('Error playing sfx', name, e);
        }
    });
}
exports.playTrack = playTrack;
function loadTrack(filename) {
    return new Promise(function (resolve, reject) {
        var sf = new Audio(filename);
        sf.oncanplaythrough = function () {
            resolve(sf);
        };
        sf.onerror = function (e) {
            console.error("Failed to load file ".concat(filename, ":"), e);
            reject(e);
        };
    });
}
exports.loadTrack = loadTrack;
function loadAllTracks() {
    return new Promise(function (resolveAll, rejectAll) {
        var promises = [];
        var _loop_1 = function (i) {
            var sfx = sfxs[i];
            promises.push(new Promise(function (resolve) { return loadTrack(sfx.filename).then(function (r) {
                sfx.track = r;
                resolve(r);
            }).catch(function (e) {
                console.error('Failed to load', sfx.filename, e);
                rejectAll('Failed to load' + sfx.filename + ':' + JSON.stringify(e));
            }); }));
        };
        for (var i in sfxs) {
            _loop_1(i);
        }
        return Promise.allSettled(promises);
    });
}
exports.loadAllTracks = loadAllTracks;


/***/ }),

/***/ "./src/modules/scenes.ts":
/*!*******************************!*\
  !*** ./src/modules/scenes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deActivateScene = exports.activateScene = exports.addScene = exports.handleInput = exports.handleAnimationFrame = void 0;
var start = null;
var scenes = [];
function addScene(scene) {
    scenes.push(scene);
    return scene;
}
exports.addScene = addScene;
function activateScene(id) {
    var index = scenes.findIndex(function (s) { return s.id === id; });
    if (index > -1) {
        scenes[index].active = true;
        scenes[index].onActivate();
    }
}
exports.activateScene = activateScene;
function deActivateScene(id) {
    var index = scenes.findIndex(function (s) { return s.id === id; });
    if (index > -1) {
        scenes[index].active = false;
        scenes[index].onDeactivate();
    }
}
exports.deActivateScene = deActivateScene;
function handleInput(input, amt, released) {
    scenes.filter(function (f) { return f.active; }).forEach(function (scene) {
        scene.handleInput(input, amt, released);
    });
}
exports.handleInput = handleInput;
function handleAnimationFrame(timeStamp) {
    window.requestAnimationFrame(handleAnimationFrame);
    if (start === null) {
        start = timeStamp - 16; // If we don't do this, the first frame timestamp is too long so we fake 60fps by subtracting 16
    }
    var delta = timeStamp - start;
    start = timeStamp;
    scenes.filter(function (f) { return f.active; }).forEach(function (scene) {
        scene.animationFrame(delta);
    });
}
exports.handleAnimationFrame = handleAnimationFrame;


/***/ }),

/***/ "./src/modules/sfx.ts":
/*!****************************!*\
  !*** ./src/modules/sfx.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sfxManifestFromJSON = exports.isPlaying = exports.getSfx = exports.playSfx = exports.loadSfx = exports.loadAllSfx = void 0;
var SfxDefinition_1 = __importDefault(__webpack_require__(/*! ./SfxDefinition */ "./src/modules/SfxDefinition.ts"));
var sfxVolume = 0.45;
var sfxs = [];
/**
 * Populate sfx manifest with JSON list of definitions.
 * @param json JSON representation of image definitions.
 */
function sfxManifestFromJSON(json) {
    json.forEach((function (def) { return sfxs.push(SfxDefinition_1.default.fromJSON(def)); }));
}
exports.sfxManifestFromJSON = sfxManifestFromJSON;
function isPlaying(name) {
    var sf = getSfx(name);
    if (sf) {
        return !sf.paused || sf.currentTime && sf.currentTime < sf.duration;
    }
    return false;
}
exports.isPlaying = isPlaying;
function getSfx(name) {
    var sf = sfxs.filter(function (f) { return f.name === name; });
    return sf.length > 0 ? sf[0].sfx : null;
}
exports.getSfx = getSfx;
function playSfx(name, onEnded) {
    return new Promise(function (resolve) {
        try {
            var sf_1 = sfxs.filter(function (f) { return f.name === name; });
            if (sf_1.length > 0) {
                if (!isPlaying(name)) {
                    sf_1[0].sfx.volume = sfxVolume;
                    if (onEnded) {
                        sf_1[0].sfx.onended = function () {
                            onEnded(sf_1[0]);
                            sf_1[0].sfx.onended = function () { resolve(); };
                        };
                    }
                    else {
                        sf_1[0].sfx.onended = function () { resolve(); };
                    }
                    sf_1[0].sfx.play();
                }
                else {
                    sf_1[0].sfx.currentTime = 0;
                }
            }
        }
        catch (e) {
            console.log('Error playing sfx', name, e);
        }
    });
}
exports.playSfx = playSfx;
function loadSfx(filename) {
    return new Promise(function (resolve, reject) {
        var sf = new Audio(filename);
        sf.oncanplaythrough = function () {
            resolve(sf);
        };
        sf.onerror = function (e) {
            console.error("Failed to load file ".concat(filename, ":"), e);
            reject(e);
        };
    });
}
exports.loadSfx = loadSfx;
function loadAllSfx() {
    return new Promise(function (resolveAll, rejectAll) {
        var promises = [];
        var _loop_1 = function (i) {
            var sfx = sfxs[i];
            promises.push(new Promise(function (resolve) { return loadSfx(sfx.filename).then(function (r) {
                sfx.sfx = r;
                resolve(r);
            }).catch(function (e) {
                console.error('Failed to load', sfx.filename, e);
                rejectAll('Failed to load' + sfx.filename + ':' + JSON.stringify(e));
            }); }));
        };
        for (var i in sfxs) {
            _loop_1(i);
        }
        return Promise.allSettled(promises);
    });
}
exports.loadAllSfx = loadAllSfx;


/***/ }),

/***/ "./src/retrolib.ts":
/*!*************************!*\
  !*** ./src/retrolib.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SetCanvasBackground = exports.Initialize = exports.music = exports.sfx = exports.scenes = exports.font = exports.images = void 0;
exports.images = __importStar(__webpack_require__(/*! ./modules/images */ "./src/modules/images.ts"));
exports.font = __importStar(__webpack_require__(/*! ./modules/font */ "./src/modules/font.ts"));
exports.scenes = __importStar(__webpack_require__(/*! ./modules/scenes */ "./src/modules/scenes.ts"));
exports.sfx = __importStar(__webpack_require__(/*! ./modules/sfx */ "./src/modules/sfx.ts"));
exports.music = __importStar(__webpack_require__(/*! ./modules/music */ "./src/modules/music.ts"));
// Game Canvas metadata Globals.
var gameCanvas = null;
var canvasWidth = 0;
var canvasHeight = 0;
var canvasBackground = 'transparent';
function resize() {
    // TODO: calculate the width to height ratio and scale cSize by that before setting values.
    var cSize = window.innerHeight > window.innerWidth ? window.innerWidth : window.innerHeight;
    gameCanvas.style.display = 'block';
    gameCanvas.style.position = 'absolute';
    gameCanvas.style.width = cSize + 'px';
    gameCanvas.style.height = cSize + 'px';
    gameCanvas.style.top = window.innerHeight / 2 - cSize / 2 + 'px';
    gameCanvas.style.left = window.innerWidth / 2 - cSize / 2 + 'px';
    gameCanvas.style.background = canvasBackground;
}
function prependCanvas(canvasId, width, height, autoResize) {
    var canvas = document.createElement('canvas');
    canvas.id = canvasId;
    document.body.prepend(canvas);
    gameCanvas = canvas;
    canvas.width = width;
    canvas.height = height;
    canvasWidth = width;
    canvasHeight = height;
    if (autoResize) {
        addEventListener('resize', function () { return resize(); });
        resize();
    }
    return canvas;
}
function SetCanvasBackground(color) {
    canvasBackground = color;
    gameCanvas.style.background = canvasBackground;
}
exports.SetCanvasBackground = SetCanvasBackground;
/**
 * Initialize the retrolib engine.
 * @param options
 */
function Initialize(canvasId, width, height, buildCanvas, autoResize) {
    width = width ? width : 256;
    height = height ? height : 256;
    canvasId = canvasId ? canvasId : 'gamecanvas';
    if (gameCanvas === null && buildCanvas) {
        gameCanvas = prependCanvas(canvasId, width, height, autoResize);
    }
    else if (gameCanvas === null) {
        gameCanvas = document.getElementById(canvasId);
    }
}
exports.Initialize = Initialize;


/***/ }),

/***/ "./src/modules/codepage.js":
/*!*********************************!*\
  !*** ./src/modules/codepage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
  {
    "codenumber": 0,
    "symbol": String.fromCharCode(parseInt('\u0000',16)),
    "description": "NULL CHAR"
  },
  {
    "codenumber": 1,
    "symbol": String.fromCharCode(parseInt('\u0001',16)),
    "description": "START OF HEADING"
  },
  {
    "codenumber": 2,
    "symbol": String.fromCharCode(parseInt('\u0002',16)),
    "description": "START OF TEXT"
  },
  {
    "codenumber": 3,
    "symbol": String.fromCharCode(parseInt('\u0003',16)),
    "description": "END OF TEXT"
  },
  {
    "codenumber": 4,
    "symbol": String.fromCharCode(parseInt('\u0004',16)),
    "description": "END OF TRANSMISSION"
  },
  {
    "codenumber": 5,
    "symbol": String.fromCharCode(parseInt('\u0005',16)),
    "description": "ENQUIRY"
  },
  {
    "codenumber": 6,
    "symbol": String.fromCharCode(parseInt('\u0006',16)),
    "description": "ACKNOWLEDGMENT"
  },
  {
    "codenumber": 7,
    "symbol": String.fromCharCode(parseInt('\u0007',16)),
    "description": "BELL"
  },
  {
    "codenumber": 8,
    "symbol": String.fromCharCode(parseInt('\u0008',16)),
    "description": "BACK SPACE"
  },
  {
    "codenumber": 9,
    "symbol": String.fromCharCode(parseInt('\u0009',16)),
    "description": "HORIZONTAL TAB"
  },
  {
    "codenumber": 10,
    "symbol": String.fromCharCode(parseInt('\u000A',16)),
    "description": "LINE FEED"
  },
  {
    "codenumber": 11,
    "symbol": String.fromCharCode(parseInt('\u000B',16)),
    "description": "VERTICAL TAB"
  },
  {
    "codenumber": 12,
    "symbol": String.fromCharCode(parseInt('\u000C',16)),
    "description": "FORM FEED"
  },
  {
    "codenumber": 13,
    "symbol": String.fromCharCode(parseInt('\u000D',16)),
    "description": "CARRIAGE RETURN"
  },
  {
    "codenumber": 14,
    "symbol": String.fromCharCode(parseInt('\u000E',16)),
    "description": "SHIFT OUT / X-ON"
  },
  {
    "codenumber": 15,
    "symbol": String.fromCharCode(parseInt('\u000F',16)),
    "description": "SHIFT IN / X-OFF"
  },
  {
    "codenumber": 16,
    "symbol": String.fromCharCode(parseInt('\u0010',16)),
    "description": "DATA LINE ESCAPE"
  },
  {
    "codenumber": 17,
    "symbol": String.fromCharCode(parseInt('\u0011',16)),
    "description": "DEVICE CONTROL 1 (OFT. XON)"
  },
  {
    "codenumber": 18,
    "symbol": String.fromCharCode(parseInt('\u0012',16)),
    "description": "DEVICE CONTROL 2"
  },
  {
    "codenumber": 19,
    "symbol": String.fromCharCode(parseInt('\u0013',16)),
    "description": "DEVICE CONTROL 3 (OFT. XOFF)"
  },
  {
    "codenumber": 20,
    "symbol": String.fromCharCode(parseInt('\u0014',16)),
    "description": "DEVICE CONTROL 4"
  },
  {
    "codenumber": 21,
    "symbol": String.fromCharCode(parseInt('\u0015',16)),
    "description": "NEGATIVE ACKNOWLEDGEMENT"
  },
  {
    "codenumber": 22,
    "symbol": String.fromCharCode(parseInt('\u0016',16)),
    "description": "SYNCHRONOUS IDLE"
  },
  {
    "codenumber": 23,
    "symbol": String.fromCharCode(parseInt('\u0017',16)),
    "description": "END OF TRANSMIT BLOCK"
  },
  {
    "codenumber": 24,
    "symbol": String.fromCharCode(parseInt('\u0018',16)),
    "description": "CANCEL"
  },
  {
    "codenumber": 25,
    "symbol": String.fromCharCode(parseInt('\u0019',16)),
    "description": "END OF MEDIUM"
  },
  {
    "codenumber": 26,
    "symbol": String.fromCharCode(parseInt('\u001A',16)),
    "description": "SUBSTITUTE"
  },
  {
    "codenumber": 27,
    "symbol": String.fromCharCode(parseInt('\u001B',16)),
    "description": "ESCAPE"
  },
  {
    "codenumber": 28,
    "symbol": String.fromCharCode(parseInt('\u001C',16)),
    "description": "FILE SEPARATOR"
  },
  {
    "codenumber": 29,
    "symbol": String.fromCharCode(parseInt('\u001D',16)),
    "description": "GROUP SEPARATOR"
  },
  {
    "codenumber": 30,
    "symbol": String.fromCharCode(parseInt('\u001E',16)),
    "description": "RECORD SEPARATOR"
  },
  {
    "codenumber": 31,
    "symbol": String.fromCharCode(parseInt('\u001F',16)),
    "description": "UNIT SEPARATOR"
  },
  
  {
    "codenumber": 32,
    "symbol": " ",
    "description": "SPACE"
  },
  {
    "codenumber": 33,
    "symbol": "!",
    "description": "EXCLAMATION MARK"
  },
  {
    "codenumber": 34,
    "symbol": "\"",
    "description": "QUOTATION MARK"
  },
  {
    "codenumber": 35,
    "symbol": "#",
    "description": "NUMBER SIGN"
  },
  {
    "codenumber": 36,
    "symbol": "$",
    "description": "DOLLAR SIGN"
  },
  {
    "codenumber": 37,
    "symbol": "%",
    "description": "PERCENT SIGN"
  },
  {
    "codenumber": 38,
    "symbol": "&",
    "description": "AMPERSAND"
  },
  {
    "codenumber": 39,
    "symbol": "'",
    "description": "APOSTROPHE"
  },
  {
    "codenumber": 40,
    "symbol": "(",
    "description": "LEFT PARENTHESIS"
  },
  {
    "codenumber": 41,
    "symbol": ")",
    "description": "RIGHT PARENTHESIS"
  },
  {
    "codenumber": 42,
    "symbol": "*",
    "description": "ASTERISK"
  },
  {
    "codenumber": 43,
    "symbol": "+",
    "description": "PLUS SIGN"
  },
  {
    "codenumber": 44,
    "symbol": ",",
    "description": "COMMA"
  },
  {
    "codenumber": 45,
    "symbol": "-",
    "description": "HYPHEN-MINUS"
  },
  {
    "codenumber": 46,
    "symbol": ".",
    "description": "FULL STOP"
  },
  {
    "codenumber": 47,
    "symbol": "/",
    "description": "SOLIDUS"
  },
  {
    "codenumber": 48,
    "symbol": "0",
    "description": "DIGIT ZERO"
  },
  {
    "codenumber": 49,
    "symbol": "1",
    "description": "DIGIT ONE"
  },
  {
    "codenumber": 50,
    "symbol": "2",
    "description": "DIGIT TWO"
  },
  {
    "codenumber": 51,
    "symbol": "3",
    "description": "DIGIT THREE"
  },
  {
    "codenumber": 52,
    "symbol": "4",
    "description": "DIGIT FOUR"
  },
  {
    "codenumber": 53,
    "symbol": "5",
    "description": "DIGIT FIVE"
  },
  {
    "codenumber": 54,
    "symbol": "6",
    "description": "DIGIT SIX"
  },
  {
    "codenumber": 55,
    "symbol": "7",
    "description": "DIGIT SEVEN"
  },
  {
    "codenumber": 56,
    "symbol": "8",
    "description": "DIGIT EIGHT"
  },
  {
    "codenumber": 57,
    "symbol": "9",
    "description": "DIGIT NINE"
  },
  {
    "codenumber": 58,
    "symbol": ":",
    "description": "COLON"
  },
  {
    "codenumber": 59,
    "symbol": ";",
    "description": "SEMICOLON"
  },
  {
    "codenumber": 60,
    "symbol": "<",
    "description": "LESS-THAN SIGN"
  },
  {
    "codenumber": 61,
    "symbol": "=",
    "description": "EQUALS SIGN"
  },
  {
    "codenumber": 62,
    "symbol": ">",
    "description": "GREATER-THAN SIGN"
  },
  {
    "codenumber": 63,
    "symbol": "?",
    "description": "QUESTION MARK"
  },
  {
    "codenumber": 64,
    "symbol": "@",
    "description": "COMMERCIAL AT"
  },
  {
    "codenumber": 65,
    "symbol": "A",
    "description": "LATIN CAPITAL LETTER A"
  },
  {
    "codenumber": 66,
    "symbol": "B",
    "description": "LATIN CAPITAL LETTER B"
  },
  {
    "codenumber": 67,
    "symbol": "C",
    "description": "LATIN CAPITAL LETTER C"
  },
  {
    "codenumber": 68,
    "symbol": "D",
    "description": "LATIN CAPITAL LETTER D"
  },
  {
    "codenumber": 69,
    "symbol": "E",
    "description": "LATIN CAPITAL LETTER E"
  },
  {
    "codenumber": 70,
    "symbol": "F",
    "description": "LATIN CAPITAL LETTER F"
  },
  {
    "codenumber": 71,
    "symbol": "G",
    "description": "LATIN CAPITAL LETTER G"
  },
  {
    "codenumber": 72,
    "symbol": "H",
    "description": "LATIN CAPITAL LETTER H"
  },
  {
    "codenumber": 73,
    "symbol": "I",
    "description": "LATIN CAPITAL LETTER I"
  },
  {
    "codenumber": 74,
    "symbol": "J",
    "description": "LATIN CAPITAL LETTER J"
  },
  {
    "codenumber": 75,
    "symbol": "K",
    "description": "LATIN CAPITAL LETTER K"
  },
  {
    "codenumber": 76,
    "symbol": "L",
    "description": "LATIN CAPITAL LETTER L"
  },
  {
    "codenumber": 77,
    "symbol": "M",
    "description": "LATIN CAPITAL LETTER M"
  },
  {
    "codenumber": 78,
    "symbol": "N",
    "description": "LATIN CAPITAL LETTER N"
  },
  {
    "codenumber": 79,
    "symbol": "O",
    "description": "LATIN CAPITAL LETTER O"
  },
  {
    "codenumber": 80,
    "symbol": "P",
    "description": "LATIN CAPITAL LETTER P"
  },
  {
    "codenumber": 81,
    "symbol": "Q",
    "description": "LATIN CAPITAL LETTER Q"
  },
  {
    "codenumber": 82,
    "symbol": "R",
    "description": "LATIN CAPITAL LETTER R"
  },
  {
    "codenumber": 83,
    "symbol": "S",
    "description": "LATIN CAPITAL LETTER S"
  },
  {
    "codenumber": 84,
    "symbol": "T",
    "description": "LATIN CAPITAL LETTER T"
  },
  {
    "codenumber": 85,
    "symbol": "U",
    "description": "LATIN CAPITAL LETTER U"
  },
  {
    "codenumber": 86,
    "symbol": "V",
    "description": "LATIN CAPITAL LETTER V"
  },
  {
    "codenumber": 87,
    "symbol": "W",
    "description": "LATIN CAPITAL LETTER W"
  },
  {
    "codenumber": 88,
    "symbol": "X",
    "description": "LATIN CAPITAL LETTER X"
  },
  {
    "codenumber": 89,
    "symbol": "Y",
    "description": "LATIN CAPITAL LETTER Y"
  },
  {
    "codenumber": 90,
    "symbol": "Z",
    "description": "LATIN CAPITAL LETTER Z"
  },
  {
    "codenumber": 91,
    "symbol": "[",
    "description": "LEFT SQUARE BRACKET"
  },
  {
    "codenumber": 92,
    "symbol": "",
    "description": "REVERSE SOLIDUS"
  },
  {
    "codenumber": 93,
    "symbol": "]",
    "description": "RIGHT SQUARE BRACKET"
  },
  {
    "codenumber": 94,
    "symbol": "^",
    "description": "CIRCUMFLEX ACCENT"
  },
  {
    "codenumber": 95,
    "symbol": "_",
    "description": "LOW LINE"
  },
  {
    "codenumber": 96,
    "symbol": "`",
    "description": "GRAVE ACCENT"
  },
  {
    "codenumber": 97,
    "symbol": "a",
    "description": "LATIN SMALL LETTER A"
  },
  {
    "codenumber": 98,
    "symbol": "b",
    "description": "LATIN SMALL LETTER B"
  },
  {
    "codenumber": 99,
    "symbol": "c",
    "description": "LATIN SMALL LETTER C"
  },
  {
    "codenumber": 100,
    "symbol": "d",
    "description": "LATIN SMALL LETTER D"
  },
  {
    "codenumber": 101,
    "symbol": "e",
    "description": "LATIN SMALL LETTER E"
  },
  {
    "codenumber": 102,
    "symbol": "f",
    "description": "LATIN SMALL LETTER F"
  },
  {
    "codenumber": 103,
    "symbol": "g",
    "description": "LATIN SMALL LETTER G"
  },
  {
    "codenumber": 104,
    "symbol": "h",
    "description": "LATIN SMALL LETTER H"
  },
  {
    "codenumber": 105,
    "symbol": "i",
    "description": "LATIN SMALL LETTER I"
  },
  {
    "codenumber": 106,
    "symbol": "j",
    "description": "LATIN SMALL LETTER J"
  },
  {
    "codenumber": 107,
    "symbol": "k",
    "description": "LATIN SMALL LETTER K"
  },
  {
    "codenumber": 108,
    "symbol": "l",
    "description": "LATIN SMALL LETTER L"
  },
  {
    "codenumber": 109,
    "symbol": "m",
    "description": "LATIN SMALL LETTER M"
  },
  {
    "codenumber": 110,
    "symbol": "n",
    "description": "LATIN SMALL LETTER N"
  },
  {
    "codenumber": 111,
    "symbol": "o",
    "description": "LATIN SMALL LETTER O"
  },
  {
    "codenumber": 112,
    "symbol": "p",
    "description": "LATIN SMALL LETTER P"
  },
  {
    "codenumber": 113,
    "symbol": "q",
    "description": "LATIN SMALL LETTER Q"
  },
  {
    "codenumber": 114,
    "symbol": "r",
    "description": "LATIN SMALL LETTER R"
  },
  {
    "codenumber": 115,
    "symbol": "s",
    "description": "LATIN SMALL LETTER S"
  },
  {
    "codenumber": 116,
    "symbol": "t",
    "description": "LATIN SMALL LETTER T"
  },
  {
    "codenumber": 117,
    "symbol": "u",
    "description": "LATIN SMALL LETTER U"
  },
  {
    "codenumber": 118,
    "symbol": "v",
    "description": "LATIN SMALL LETTER V"
  },
  {
    "codenumber": 119,
    "symbol": "w",
    "description": "LATIN SMALL LETTER W"
  },
  {
    "codenumber": 120,
    "symbol": "x",
    "description": "LATIN SMALL LETTER X"
  },
  {
    "codenumber": 121,
    "symbol": "y",
    "description": "LATIN SMALL LETTER Y"
  },
  {
    "codenumber": 122,
    "symbol": "z",
    "description": "LATIN SMALL LETTER Z"
  },
  {
    "codenumber": 123,
    "symbol": "{",
    "description": "LEFT CURLY BRACKET"
  },
  {
    "codenumber": 124,
    "symbol": "|",
    "description": "VERTICAL LINE"
  },
  {
    "codenumber": 125,
    "symbol": "}",
    "description": "RIGHT CURLY BRACKET"
  },
  {
    "codenumber": 126,
    "symbol": "~",
    "description": "TILDE"
  },
  {
    "codenumber": 127,
    "symbol": String.fromCharCode(parseInt('\u007F',16)),
    "description": "DELETE"
  },
  {
    "codenumber": 128,
    "symbol": "Ç",
    "description": "LATIN CAPITAL LETTER C WITH CEDILLA"
  },
  {
    "codenumber": 129,
    "symbol": "ü",
    "description": "LATIN SMALL LETTER U WITH DIAERESIS"
  },
  {
    "codenumber": 130,
    "symbol": "é",
    "description": "LATIN SMALL LETTER E WITH ACUTE"
  },
  {
    "codenumber": 131,
    "symbol": "â",
    "description": "LATIN SMALL LETTER A WITH CIRCUMFLEX"
  },
  {
    "codenumber": 132,
    "symbol": "ä",
    "description": "LATIN SMALL LETTER A WITH DIAERESIS"
  },
  {
    "codenumber": 133,
    "symbol": "à",
    "description": "LATIN SMALL LETTER A WITH GRAVE"
  },
  {
    "codenumber": 134,
    "symbol": "å",
    "description": "LATIN SMALL LETTER A WITH RING ABOVE"
  },
  {
    "codenumber": 135,
    "symbol": "ç",
    "description": "LATIN SMALL LETTER C WITH CEDILLA"
  },
  {
    "codenumber": 136,
    "symbol": "ê",
    "description": "LATIN SMALL LETTER E WITH CIRCUMFLEX"
  },
  {
    "codenumber": 137,
    "symbol": "ë",
    "description": "LATIN SMALL LETTER E WITH DIAERESIS"
  },
  {
    "codenumber": 138,
    "symbol": "è",
    "description": "LATIN SMALL LETTER E WITH GRAVE"
  },
  {
    "codenumber": 139,
    "symbol": "ï",
    "description": "LATIN SMALL LETTER I WITH DIAERESIS"
  },
  {
    "codenumber": 140,
    "symbol": "î",
    "description": "LATIN SMALL LETTER I WITH CIRCUMFLEX"
  },
  {
    "codenumber": 141,
    "symbol": "ì",
    "description": "LATIN SMALL LETTER I WITH GRAVE"
  },
  {
    "codenumber": 142,
    "symbol": "Ä",
    "description": "LATIN CAPITAL LETTER A WITH DIAERESIS"
  },
  {
    "codenumber": 143,
    "symbol": "Å",
    "description": "LATIN CAPITAL LETTER A WITH RING ABOVE"
  },
  {
    "codenumber": 144,
    "symbol": "É",
    "description": "LATIN CAPITAL LETTER E WITH ACUTE"
  },
  {
    "codenumber": 145,
    "symbol": "æ",
    "description": "LATIN SMALL LETTER AE"
  },
  {
    "codenumber": 146,
    "symbol": "Æ",
    "description": "LATIN CAPITAL LETTER AE"
  },
  {
    "codenumber": 147,
    "symbol": "ô",
    "description": "LATIN SMALL LETTER O WITH CIRCUMFLEX"
  },
  {
    "codenumber": 148,
    "symbol": "ö",
    "description": "LATIN SMALL LETTER O WITH DIAERESIS"
  },
  {
    "codenumber": 149,
    "symbol": "ò",
    "description": "LATIN SMALL LETTER O WITH GRAVE"
  },
  {
    "codenumber": 150,
    "symbol": "û",
    "description": "LATIN SMALL LETTER U WITH CIRCUMFLEX"
  },
  {
    "codenumber": 151,
    "symbol": "ù",
    "description": "LATIN SMALL LETTER U WITH GRAVE"
  },
  {
    "codenumber": 152,
    "symbol": "ÿ",
    "description": "LATIN SMALL LETTER Y WITH DIAERESIS"
  },
  {
    "codenumber": 153,
    "symbol": "Ö",
    "description": "LATIN CAPITAL LETTER O WITH DIAERESIS"
  },
  {
    "codenumber": 154,
    "symbol": "Ü",
    "description": "LATIN CAPITAL LETTER U WITH DIAERESIS"
  },
  {
    "codenumber": 155,
    "symbol": "¢",
    "description": "CENT SIGN"
  },
  {
    "codenumber": 156,
    "symbol": "£",
    "description": "POUND SIGN"
  },
  {
    "codenumber": 157,
    "symbol": "¥",
    "description": "YEN SIGN"
  },
  {
    "codenumber": 158,
    "symbol": "₧",
    "description": "PESETA SIGN"
  },
  {
    "codenumber": 159,
    "symbol": "ƒ",
    "description": "LATIN SMALL LETTER F WITH HOOK"
  },
  {
    "codenumber": 160,
    "symbol": "á",
    "description": "LATIN SMALL LETTER A WITH ACUTE"
  },
  {
    "codenumber": 161,
    "symbol": "í",
    "description": "LATIN SMALL LETTER I WITH ACUTE"
  },
  {
    "codenumber": 162,
    "symbol": "ó",
    "description": "LATIN SMALL LETTER O WITH ACUTE"
  },
  {
    "codenumber": 163,
    "symbol": "ú",
    "description": "LATIN SMALL LETTER U WITH ACUTE"
  },
  {
    "codenumber": 164,
    "symbol": "ñ",
    "description": "LATIN SMALL LETTER N WITH TILDE"
  },
  {
    "codenumber": 165,
    "symbol": "Ñ",
    "description": "LATIN CAPITAL LETTER N WITH TILDE"
  },
  {
    "codenumber": 166,
    "symbol": "ª",
    "description": "FEMININE ORDINAL INDICATOR"
  },
  {
    "codenumber": 167,
    "symbol": "º",
    "description": "MASCULINE ORDINAL INDICATOR"
  },
  {
    "codenumber": 168,
    "symbol": "¿",
    "description": "INVERTED QUESTION MARK"
  },
  {
    "codenumber": 169,
    "symbol": "⌐",
    "description": "REVERSED NOT SIGN"
  },
  {
    "codenumber": 170,
    "symbol": "¬",
    "description": "NOT SIGN"
  },
  {
    "codenumber": 171,
    "symbol": "½",
    "description": "VULGAR FRACTION ONE HALF"
  },
  {
    "codenumber": 172,
    "symbol": "¼",
    "description": "VULGAR FRACTION ONE QUARTER"
  },
  {
    "codenumber": 173,
    "symbol": "¡",
    "description": "INVERTED EXCLAMATION MARK"
  },
  {
    "codenumber": 174,
    "symbol": "«",
    "description": "LEFT-POINTING DOUBLE ANGLE QUOTATION MARK"
  },
  {
    "codenumber": 175,
    "symbol": "»",
    "description": "RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK"
  },
  {
    "codenumber": 176,
    "symbol": "░",
    "description": "LIGHT SHADE"
  },
  {
    "codenumber": 177,
    "symbol": "▒",
    "description": "MEDIUM SHADE"
  },
  {
    "codenumber": 178,
    "symbol": "▓",
    "description": "DARK SHADE"
  },
  {
    "codenumber": 179,
    "symbol": "│",
    "description": "BOX DRAWINGS LIGHT VERTICAL"
  },
  {
    "codenumber": 180,
    "symbol": "┤",
    "description": "BOX DRAWINGS LIGHT VERTICAL AND LEFT"
  },
  {
    "codenumber": 181,
    "symbol": "╡",
    "description": "BOX DRAWINGS VERTICAL SINGLE AND LEFT DOUBLE"
  },
  {
    "codenumber": 182,
    "symbol": "╢",
    "description": "BOX DRAWINGS VERTICAL DOUBLE AND LEFT SINGLE"
  },
  {
    "codenumber": 183,
    "symbol": "╖",
    "description": "BOX DRAWINGS DOWN DOUBLE AND LEFT SINGLE"
  },
  {
    "codenumber": 184,
    "symbol": "╕",
    "description": "BOX DRAWINGS DOWN SINGLE AND LEFT DOUBLE"
  },
  {
    "codenumber": 185,
    "symbol": "╣",
    "description": "BOX DRAWINGS DOUBLE VERTICAL AND LEFT"
  },
  {
    "codenumber": 186,
    "symbol": "║",
    "description": "BOX DRAWINGS DOUBLE VERTICAL"
  },
  {
    "codenumber": 187,
    "symbol": "╗",
    "description": "BOX DRAWINGS DOUBLE DOWN AND LEFT"
  },
  {
    "codenumber": 188,
    "symbol": "╝",
    "description": "BOX DRAWINGS DOUBLE UP AND LEFT"
  },
  {
    "codenumber": 189,
    "symbol": "╜",
    "description": "BOX DRAWINGS UP DOUBLE AND LEFT SINGLE"
  },
  {
    "codenumber": 190,
    "symbol": "╛",
    "description": "BOX DRAWINGS UP SINGLE AND LEFT DOUBLE"
  },
  {
    "codenumber": 191,
    "symbol": "┐",
    "description": "BOX DRAWINGS LIGHT DOWN AND LEFT"
  },
  {
    "codenumber": 192,
    "symbol": "└",
    "description": "BOX DRAWINGS LIGHT UP AND RIGHT"
  },
  {
    "codenumber": 193,
    "symbol": "┴",
    "description": "BOX DRAWINGS LIGHT UP AND HORIZONTAL"
  },
  {
    "codenumber": 194,
    "symbol": "┬",
    "description": "BOX DRAWINGS LIGHT DOWN AND HORIZONTAL"
  },
  {
    "codenumber": 195,
    "symbol": "├",
    "description": "BOX DRAWINGS LIGHT VERTICAL AND RIGHT"
  },
  {
    "codenumber": 196,
    "symbol": "─",
    "description": "BOX DRAWINGS LIGHT HORIZONTAL"
  },
  {
    "codenumber": 197,
    "symbol": "┼",
    "description": "BOX DRAWINGS LIGHT VERTICAL AND HORIZONTAL"
  },
  {
    "codenumber": 198,
    "symbol": "╞",
    "description": "BOX DRAWINGS VERTICAL SINGLE AND RIGHT DOUBLE"
  },
  {
    "codenumber": 199,
    "symbol": "╟",
    "description": "BOX DRAWINGS VERTICAL DOUBLE AND RIGHT SINGLE"
  },
  {
    "codenumber": 200,
    "symbol": "╚",
    "description": "BOX DRAWINGS DOUBLE UP AND RIGHT"
  },
  {
    "codenumber": 201,
    "symbol": "╔",
    "description": "BOX DRAWINGS DOUBLE DOWN AND RIGHT"
  },
  {
    "codenumber": 202,
    "symbol": "╩",
    "description": "BOX DRAWINGS DOUBLE UP AND HORIZONTAL"
  },
  {
    "codenumber": 203,
    "symbol": "╦",
    "description": "BOX DRAWINGS DOUBLE DOWN AND HORIZONTAL"
  },
  {
    "codenumber": 204,
    "symbol": "╠",
    "description": "BOX DRAWINGS DOUBLE VERTICAL AND RIGHT"
  },
  {
    "codenumber": 205,
    "symbol": "═",
    "description": "BOX DRAWINGS DOUBLE HORIZONTAL"
  },
  {
    "codenumber": 206,
    "symbol": "╬",
    "description": "BOX DRAWINGS DOUBLE VERTICAL AND HORIZONTAL"
  },
  {
    "codenumber": 207,
    "symbol": "╧",
    "description": "BOX DRAWINGS UP SINGLE AND HORIZONTAL DOUBLE"
  },
  {
    "codenumber": 208,
    "symbol": "╨",
    "description": "BOX DRAWINGS UP DOUBLE AND HORIZONTAL SINGLE"
  },
  {
    "codenumber": 209,
    "symbol": "╤",
    "description": "BOX DRAWINGS DOWN SINGLE AND HORIZONTAL DOUBLE"
  },
  {
    "codenumber": 210,
    "symbol": "╥",
    "description": "BOX DRAWINGS DOWN DOUBLE AND HORIZONTAL SINGLE"
  },
  {
    "codenumber": 211,
    "symbol": "╙",
    "description": "BOX DRAWINGS UP DOUBLE AND RIGHT SINGLE"
  },
  {
    "codenumber": 212,
    "symbol": "╘",
    "description": "BOX DRAWINGS UP SINGLE AND RIGHT DOUBLE"
  },
  {
    "codenumber": 213,
    "symbol": "╒",
    "description": "BOX DRAWINGS DOWN SINGLE AND RIGHT DOUBLE"
  },
  {
    "codenumber": 214,
    "symbol": "╓",
    "description": "BOX DRAWINGS DOWN DOUBLE AND RIGHT SINGLE"
  },
  {
    "codenumber": 215,
    "symbol": "╫",
    "description": "BOX DRAWINGS VERTICAL DOUBLE AND HORIZONTAL SINGLE"
  },
  {
    "codenumber": 216,
    "symbol": "╪",
    "description": "BOX DRAWINGS VERTICAL SINGLE AND HORIZONTAL DOUBLE"
  },
  {
    "codenumber": 217,
    "symbol": "┘",
    "description": "BOX DRAWINGS LIGHT UP AND LEFT"
  },
  {
    "codenumber": 218,
    "symbol": "┌",
    "description": "BOX DRAWINGS LIGHT DOWN AND RIGHT"
  },
  {
    "codenumber": 219,
    "symbol": "█",
    "description": "FULL BLOCK"
  },
  {
    "codenumber": 220,
    "symbol": "▄",
    "description": "LOWER HALF BLOCK"
  },
  {
    "codenumber": 221,
    "symbol": "▌",
    "description": "LEFT HALF BLOCK"
  },
  {
    "codenumber": 222,
    "symbol": "▐",
    "description": "RIGHT HALF BLOCK"
  },
  {
    "codenumber": 223,
    "symbol": "▀",
    "description": "UPPER HALF BLOCK"
  },
  {
    "codenumber": 224,
    "symbol": "α",
    "description": "GREEK SMALL LETTER ALPHA"
  },
  {
    "codenumber": 225,
    "symbol": "ß",
    "description": "LATIN SMALL LETTER SHARP S"
  },
  {
    "codenumber": 226,
    "symbol": "Γ",
    "description": "GREEK CAPITAL LETTER GAMMA"
  },
  {
    "codenumber": 227,
    "symbol": "π",
    "description": "GREEK SMALL LETTER PI"
  },
  {
    "codenumber": 228,
    "symbol": "Σ",
    "description": "GREEK CAPITAL LETTER SIGMA"
  },
  {
    "codenumber": 229,
    "symbol": "σ",
    "description": "GREEK SMALL LETTER SIGMA"
  },
  {
    "codenumber": 230,
    "symbol": "µ",
    "description": "MICRO SIGN"
  },
  {
    "codenumber": 231,
    "symbol": "τ",
    "description": "GREEK SMALL LETTER TAU"
  },
  {
    "codenumber": 232,
    "symbol": "Φ",
    "description": "GREEK CAPITAL LETTER PHI"
  },
  {
    "codenumber": 233,
    "symbol": "Θ",
    "description": "GREEK CAPITAL LETTER THETA"
  },
  {
    "codenumber": 234,
    "symbol": "Ω",
    "description": "GREEK CAPITAL LETTER OMEGA"
  },
  {
    "codenumber": 235,
    "symbol": "δ",
    "description": "GREEK SMALL LETTER DELTA"
  },
  {
    "codenumber": 236,
    "symbol": "∞",
    "description": "INFINITY"
  },
  {
    "codenumber": 237,
    "symbol": "φ",
    "description": "GREEK SMALL LETTER PHI"
  },
  {
    "codenumber": 238,
    "symbol": "ε",
    "description": "GREEK SMALL LETTER EPSILON"
  },
  {
    "codenumber": 239,
    "symbol": "∩",
    "description": "INTERSECTION"
  },
  {
    "codenumber": 240,
    "symbol": "≡",
    "description": "IDENTICAL TO"
  },
  {
    "codenumber": 241,
    "symbol": "±",
    "description": "PLUS-MINUS SIGN"
  },
  {
    "codenumber": 242,
    "symbol": "≥",
    "description": "GREATER-THAN OR EQUAL TO"
  },
  {
    "codenumber": 243,
    "symbol": "≤",
    "description": "LESS-THAN OR EQUAL TO"
  },
  {
    "codenumber": 244,
    "symbol": "⌠",
    "description": "TOP HALF INTEGRAL"
  },
  {
    "codenumber": 245,
    "symbol": "⌡",
    "description": "BOTTOM HALF INTEGRAL"
  },
  {
    "codenumber": 246,
    "symbol": "÷",
    "description": "DIVISION SIGN"
  },
  {
    "codenumber": 247,
    "symbol": "≈",
    "description": "ALMOST EQUAL TO"
  },
  {
    "codenumber": 248,
    "symbol": "°",
    "description": "DEGREE SIGN"
  },
  {
    "codenumber": 249,
    "symbol": "∙",
    "description": "BULLET OPERATOR"
  },
  {
    "codenumber": 250,
    "symbol": "·",
    "description": "MIDDLE DOT"
  },
  {
    "codenumber": 251,
    "symbol": "√",
    "description": "SQUARE ROOT"
  },
  {
    "codenumber": 252,
    "symbol": "ⁿ",
    "description": "SUPERSCRIPT LATIN SMALL LETTER N"
  },
  {
    "codenumber": 253,
    "symbol": "²",
    "description": "SUPERSCRIPT TWO"
  },
  {
    "codenumber": 254,
    "symbol": "■",
    "description": "BLACK SQUARE"
  }
]);

/***/ }),

/***/ "./src/modules/defaultFont.json":
/*!**************************************!*\
  !*** ./src/modules/defaultFont.json ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"cwidth":9,"cheight":16,"codepage":[{"codenumber":0,"symbol":"\\u0000","description":"NULL CHAR","rect":{"x":0,"y":0,"w":9,"h":16}},{"codenumber":1,"symbol":"\\u0000","description":"START OF HEADING","rect":{"x":9,"y":0,"w":9,"h":16}},{"codenumber":2,"symbol":"\\u0000","description":"START OF TEXT","rect":{"x":18,"y":0,"w":9,"h":16}},{"codenumber":3,"symbol":"\\u0000","description":"END OF TEXT","rect":{"x":27,"y":0,"w":9,"h":16}},{"codenumber":4,"symbol":"\\u0000","description":"END OF TRANSMISSION","rect":{"x":36,"y":0,"w":9,"h":16}},{"codenumber":5,"symbol":"\\u0000","description":"ENQUIRY","rect":{"x":45,"y":0,"w":9,"h":16}},{"codenumber":6,"symbol":"\\u0000","description":"ACKNOWLEDGMENT","rect":{"x":54,"y":0,"w":9,"h":16}},{"codenumber":7,"symbol":"\\u0000","description":"BELL","rect":{"x":63,"y":0,"w":9,"h":16}},{"codenumber":8,"symbol":"\\u0000","description":"BACK SPACE","rect":{"x":72,"y":0,"w":9,"h":16}},{"codenumber":9,"symbol":"\\u0000","description":"HORIZONTAL TAB","rect":{"x":81,"y":0,"w":9,"h":16}},{"codenumber":10,"symbol":"\\u0000","description":"LINE FEED","rect":{"x":90,"y":0,"w":9,"h":16}},{"codenumber":11,"symbol":"\\u0000","description":"VERTICAL TAB","rect":{"x":99,"y":0,"w":9,"h":16}},{"codenumber":12,"symbol":"\\u0000","description":"FORM FEED","rect":{"x":108,"y":0,"w":9,"h":16}},{"codenumber":13,"symbol":"\\u0000","description":"CARRIAGE RETURN","rect":{"x":117,"y":0,"w":9,"h":16}},{"codenumber":14,"symbol":"\\u0000","description":"SHIFT OUT / X-ON","rect":{"x":126,"y":0,"w":9,"h":16}},{"codenumber":15,"symbol":"\\u0000","description":"SHIFT IN / X-OFF","rect":{"x":135,"y":0,"w":9,"h":16}},{"codenumber":16,"symbol":"\\u0000","description":"DATA LINE ESCAPE","rect":{"x":144,"y":0,"w":9,"h":16}},{"codenumber":17,"symbol":"\\u0000","description":"DEVICE CONTROL 1 (OFT. XON)","rect":{"x":153,"y":0,"w":9,"h":16}},{"codenumber":18,"symbol":"\\u0000","description":"DEVICE CONTROL 2","rect":{"x":162,"y":0,"w":9,"h":16}},{"codenumber":19,"symbol":"\\u0000","description":"DEVICE CONTROL 3 (OFT. XOFF)","rect":{"x":171,"y":0,"w":9,"h":16}},{"codenumber":20,"symbol":"\\u0000","description":"DEVICE CONTROL 4","rect":{"x":180,"y":0,"w":9,"h":16}},{"codenumber":21,"symbol":"\\u0000","description":"NEGATIVE ACKNOWLEDGEMENT","rect":{"x":189,"y":0,"w":9,"h":16}},{"codenumber":22,"symbol":"\\u0000","description":"SYNCHRONOUS IDLE","rect":{"x":198,"y":0,"w":9,"h":16}},{"codenumber":23,"symbol":"\\u0000","description":"END OF TRANSMIT BLOCK","rect":{"x":207,"y":0,"w":9,"h":16}},{"codenumber":24,"symbol":"\\u0000","description":"CANCEL","rect":{"x":216,"y":0,"w":9,"h":16}},{"codenumber":25,"symbol":"\\u0000","description":"END OF MEDIUM","rect":{"x":225,"y":0,"w":9,"h":16}},{"codenumber":26,"symbol":"\\u0000","description":"SUBSTITUTE","rect":{"x":234,"y":0,"w":9,"h":16}},{"codenumber":27,"symbol":"\\u0000","description":"ESCAPE","rect":{"x":243,"y":0,"w":9,"h":16}},{"codenumber":28,"symbol":"\\u0000","description":"FILE SEPARATOR","rect":{"x":252,"y":0,"w":9,"h":16}},{"codenumber":29,"symbol":"\\u0000","description":"GROUP SEPARATOR","rect":{"x":261,"y":0,"w":9,"h":16}},{"codenumber":30,"symbol":"\\u0000","description":"RECORD SEPARATOR","rect":{"x":270,"y":0,"w":9,"h":16}},{"codenumber":31,"symbol":"\\u0000","description":"UNIT SEPARATOR","rect":{"x":279,"y":0,"w":9,"h":16}},{"codenumber":32,"symbol":" ","description":"SPACE","rect":{"x":0,"y":16,"w":9,"h":16}},{"codenumber":33,"symbol":"!","description":"EXCLAMATION MARK","rect":{"x":9,"y":16,"w":9,"h":16}},{"codenumber":34,"symbol":"\\"","description":"QUOTATION MARK","rect":{"x":18,"y":16,"w":9,"h":16}},{"codenumber":35,"symbol":"#","description":"NUMBER SIGN","rect":{"x":27,"y":16,"w":9,"h":16}},{"codenumber":36,"symbol":"$","description":"DOLLAR SIGN","rect":{"x":36,"y":16,"w":9,"h":16}},{"codenumber":37,"symbol":"%","description":"PERCENT SIGN","rect":{"x":45,"y":16,"w":9,"h":16}},{"codenumber":38,"symbol":"&","description":"AMPERSAND","rect":{"x":54,"y":16,"w":9,"h":16}},{"codenumber":39,"symbol":"\'","description":"APOSTROPHE","rect":{"x":63,"y":16,"w":9,"h":16}},{"codenumber":40,"symbol":"(","description":"LEFT PARENTHESIS","rect":{"x":72,"y":16,"w":9,"h":16}},{"codenumber":41,"symbol":")","description":"RIGHT PARENTHESIS","rect":{"x":81,"y":16,"w":9,"h":16}},{"codenumber":42,"symbol":"*","description":"ASTERISK","rect":{"x":90,"y":16,"w":9,"h":16}},{"codenumber":43,"symbol":"+","description":"PLUS SIGN","rect":{"x":99,"y":16,"w":9,"h":16}},{"codenumber":44,"symbol":",","description":"COMMA","rect":{"x":108,"y":16,"w":9,"h":16}},{"codenumber":45,"symbol":"-","description":"HYPHEN-MINUS","rect":{"x":117,"y":16,"w":9,"h":16}},{"codenumber":46,"symbol":".","description":"FULL STOP","rect":{"x":126,"y":16,"w":9,"h":16}},{"codenumber":47,"symbol":"/","description":"SOLIDUS","rect":{"x":135,"y":16,"w":9,"h":16}},{"codenumber":48,"symbol":"0","description":"DIGIT ZERO","rect":{"x":144,"y":16,"w":9,"h":16}},{"codenumber":49,"symbol":"1","description":"DIGIT ONE","rect":{"x":153,"y":16,"w":9,"h":16}},{"codenumber":50,"symbol":"2","description":"DIGIT TWO","rect":{"x":162,"y":16,"w":9,"h":16}},{"codenumber":51,"symbol":"3","description":"DIGIT THREE","rect":{"x":171,"y":16,"w":9,"h":16}},{"codenumber":52,"symbol":"4","description":"DIGIT FOUR","rect":{"x":180,"y":16,"w":9,"h":16}},{"codenumber":53,"symbol":"5","description":"DIGIT FIVE","rect":{"x":189,"y":16,"w":9,"h":16}},{"codenumber":54,"symbol":"6","description":"DIGIT SIX","rect":{"x":198,"y":16,"w":9,"h":16}},{"codenumber":55,"symbol":"7","description":"DIGIT SEVEN","rect":{"x":207,"y":16,"w":9,"h":16}},{"codenumber":56,"symbol":"8","description":"DIGIT EIGHT","rect":{"x":216,"y":16,"w":9,"h":16}},{"codenumber":57,"symbol":"9","description":"DIGIT NINE","rect":{"x":225,"y":16,"w":9,"h":16}},{"codenumber":58,"symbol":":","description":"COLON","rect":{"x":234,"y":16,"w":9,"h":16}},{"codenumber":59,"symbol":";","description":"SEMICOLON","rect":{"x":243,"y":16,"w":9,"h":16}},{"codenumber":60,"symbol":"<","description":"LESS-THAN SIGN","rect":{"x":252,"y":16,"w":9,"h":16}},{"codenumber":61,"symbol":"=","description":"EQUALS SIGN","rect":{"x":261,"y":16,"w":9,"h":16}},{"codenumber":62,"symbol":">","description":"GREATER-THAN SIGN","rect":{"x":270,"y":16,"w":9,"h":16}},{"codenumber":63,"symbol":"?","description":"QUESTION MARK","rect":{"x":279,"y":16,"w":9,"h":16}},{"codenumber":64,"symbol":"@","description":"COMMERCIAL AT","rect":{"x":0,"y":32,"w":9,"h":16}},{"codenumber":65,"symbol":"A","description":"LATIN CAPITAL LETTER A","rect":{"x":9,"y":32,"w":9,"h":16}},{"codenumber":66,"symbol":"B","description":"LATIN CAPITAL LETTER B","rect":{"x":18,"y":32,"w":9,"h":16}},{"codenumber":67,"symbol":"C","description":"LATIN CAPITAL LETTER C","rect":{"x":27,"y":32,"w":9,"h":16}},{"codenumber":68,"symbol":"D","description":"LATIN CAPITAL LETTER D","rect":{"x":36,"y":32,"w":9,"h":16}},{"codenumber":69,"symbol":"E","description":"LATIN CAPITAL LETTER E","rect":{"x":45,"y":32,"w":9,"h":16}},{"codenumber":70,"symbol":"F","description":"LATIN CAPITAL LETTER F","rect":{"x":54,"y":32,"w":9,"h":16}},{"codenumber":71,"symbol":"G","description":"LATIN CAPITAL LETTER G","rect":{"x":63,"y":32,"w":9,"h":16}},{"codenumber":72,"symbol":"H","description":"LATIN CAPITAL LETTER H","rect":{"x":72,"y":32,"w":9,"h":16}},{"codenumber":73,"symbol":"I","description":"LATIN CAPITAL LETTER I","rect":{"x":81,"y":32,"w":9,"h":16}},{"codenumber":74,"symbol":"J","description":"LATIN CAPITAL LETTER J","rect":{"x":90,"y":32,"w":9,"h":16}},{"codenumber":75,"symbol":"K","description":"LATIN CAPITAL LETTER K","rect":{"x":99,"y":32,"w":9,"h":16}},{"codenumber":76,"symbol":"L","description":"LATIN CAPITAL LETTER L","rect":{"x":108,"y":32,"w":9,"h":16}},{"codenumber":77,"symbol":"M","description":"LATIN CAPITAL LETTER M","rect":{"x":117,"y":32,"w":9,"h":16}},{"codenumber":78,"symbol":"N","description":"LATIN CAPITAL LETTER N","rect":{"x":126,"y":32,"w":9,"h":16}},{"codenumber":79,"symbol":"O","description":"LATIN CAPITAL LETTER O","rect":{"x":135,"y":32,"w":9,"h":16}},{"codenumber":80,"symbol":"P","description":"LATIN CAPITAL LETTER P","rect":{"x":144,"y":32,"w":9,"h":16}},{"codenumber":81,"symbol":"Q","description":"LATIN CAPITAL LETTER Q","rect":{"x":153,"y":32,"w":9,"h":16}},{"codenumber":82,"symbol":"R","description":"LATIN CAPITAL LETTER R","rect":{"x":162,"y":32,"w":9,"h":16}},{"codenumber":83,"symbol":"S","description":"LATIN CAPITAL LETTER S","rect":{"x":171,"y":32,"w":9,"h":16}},{"codenumber":84,"symbol":"T","description":"LATIN CAPITAL LETTER T","rect":{"x":180,"y":32,"w":9,"h":16}},{"codenumber":85,"symbol":"U","description":"LATIN CAPITAL LETTER U","rect":{"x":189,"y":32,"w":9,"h":16}},{"codenumber":86,"symbol":"V","description":"LATIN CAPITAL LETTER V","rect":{"x":198,"y":32,"w":9,"h":16}},{"codenumber":87,"symbol":"W","description":"LATIN CAPITAL LETTER W","rect":{"x":207,"y":32,"w":9,"h":16}},{"codenumber":88,"symbol":"X","description":"LATIN CAPITAL LETTER X","rect":{"x":216,"y":32,"w":9,"h":16}},{"codenumber":89,"symbol":"Y","description":"LATIN CAPITAL LETTER Y","rect":{"x":225,"y":32,"w":9,"h":16}},{"codenumber":90,"symbol":"Z","description":"LATIN CAPITAL LETTER Z","rect":{"x":234,"y":32,"w":9,"h":16}},{"codenumber":91,"symbol":"[","description":"LEFT SQUARE BRACKET","rect":{"x":243,"y":32,"w":9,"h":16}},{"codenumber":92,"symbol":"","description":"REVERSE SOLIDUS","rect":{"x":252,"y":32,"w":9,"h":16}},{"codenumber":93,"symbol":"]","description":"RIGHT SQUARE BRACKET","rect":{"x":261,"y":32,"w":9,"h":16}},{"codenumber":94,"symbol":"^","description":"CIRCUMFLEX ACCENT","rect":{"x":270,"y":32,"w":9,"h":16}},{"codenumber":95,"symbol":"_","description":"LOW LINE","rect":{"x":279,"y":32,"w":9,"h":16}},{"codenumber":96,"symbol":"`","description":"GRAVE ACCENT","rect":{"x":0,"y":48,"w":9,"h":16}},{"codenumber":97,"symbol":"a","description":"LATIN SMALL LETTER A","rect":{"x":9,"y":48,"w":9,"h":16}},{"codenumber":98,"symbol":"b","description":"LATIN SMALL LETTER B","rect":{"x":18,"y":48,"w":9,"h":16}},{"codenumber":99,"symbol":"c","description":"LATIN SMALL LETTER C","rect":{"x":27,"y":48,"w":9,"h":16}},{"codenumber":100,"symbol":"d","description":"LATIN SMALL LETTER D","rect":{"x":36,"y":48,"w":9,"h":16}},{"codenumber":101,"symbol":"e","description":"LATIN SMALL LETTER E","rect":{"x":45,"y":48,"w":9,"h":16}},{"codenumber":102,"symbol":"f","description":"LATIN SMALL LETTER F","rect":{"x":54,"y":48,"w":9,"h":16}},{"codenumber":103,"symbol":"g","description":"LATIN SMALL LETTER G","rect":{"x":63,"y":48,"w":9,"h":16}},{"codenumber":104,"symbol":"h","description":"LATIN SMALL LETTER H","rect":{"x":72,"y":48,"w":9,"h":16}},{"codenumber":105,"symbol":"i","description":"LATIN SMALL LETTER I","rect":{"x":81,"y":48,"w":9,"h":16}},{"codenumber":106,"symbol":"j","description":"LATIN SMALL LETTER J","rect":{"x":90,"y":48,"w":9,"h":16}},{"codenumber":107,"symbol":"k","description":"LATIN SMALL LETTER K","rect":{"x":99,"y":48,"w":9,"h":16}},{"codenumber":108,"symbol":"l","description":"LATIN SMALL LETTER L","rect":{"x":108,"y":48,"w":9,"h":16}},{"codenumber":109,"symbol":"m","description":"LATIN SMALL LETTER M","rect":{"x":117,"y":48,"w":9,"h":16}},{"codenumber":110,"symbol":"n","description":"LATIN SMALL LETTER N","rect":{"x":126,"y":48,"w":9,"h":16}},{"codenumber":111,"symbol":"o","description":"LATIN SMALL LETTER O","rect":{"x":135,"y":48,"w":9,"h":16}},{"codenumber":112,"symbol":"p","description":"LATIN SMALL LETTER P","rect":{"x":144,"y":48,"w":9,"h":16}},{"codenumber":113,"symbol":"q","description":"LATIN SMALL LETTER Q","rect":{"x":153,"y":48,"w":9,"h":16}},{"codenumber":114,"symbol":"r","description":"LATIN SMALL LETTER R","rect":{"x":162,"y":48,"w":9,"h":16}},{"codenumber":115,"symbol":"s","description":"LATIN SMALL LETTER S","rect":{"x":171,"y":48,"w":9,"h":16}},{"codenumber":116,"symbol":"t","description":"LATIN SMALL LETTER T","rect":{"x":180,"y":48,"w":9,"h":16}},{"codenumber":117,"symbol":"u","description":"LATIN SMALL LETTER U","rect":{"x":189,"y":48,"w":9,"h":16}},{"codenumber":118,"symbol":"v","description":"LATIN SMALL LETTER V","rect":{"x":198,"y":48,"w":9,"h":16}},{"codenumber":119,"symbol":"w","description":"LATIN SMALL LETTER W","rect":{"x":207,"y":48,"w":9,"h":16}},{"codenumber":120,"symbol":"x","description":"LATIN SMALL LETTER X","rect":{"x":216,"y":48,"w":9,"h":16}},{"codenumber":121,"symbol":"y","description":"LATIN SMALL LETTER Y","rect":{"x":225,"y":48,"w":9,"h":16}},{"codenumber":122,"symbol":"z","description":"LATIN SMALL LETTER Z","rect":{"x":234,"y":48,"w":9,"h":16}},{"codenumber":123,"symbol":"{","description":"LEFT CURLY BRACKET","rect":{"x":243,"y":48,"w":9,"h":16}},{"codenumber":124,"symbol":"|","description":"VERTICAL LINE","rect":{"x":252,"y":48,"w":9,"h":16}},{"codenumber":125,"symbol":"}","description":"RIGHT CURLY BRACKET","rect":{"x":261,"y":48,"w":9,"h":16}},{"codenumber":126,"symbol":"~","description":"TILDE","rect":{"x":270,"y":48,"w":9,"h":16}},{"codenumber":127,"symbol":"\\u0000","description":"DELETE","rect":{"x":279,"y":48,"w":9,"h":16}},{"codenumber":128,"symbol":"Ç","description":"LATIN CAPITAL LETTER C WITH CEDILLA","rect":{"x":0,"y":64,"w":9,"h":16}},{"codenumber":129,"symbol":"ü","description":"LATIN SMALL LETTER U WITH DIAERESIS","rect":{"x":9,"y":64,"w":9,"h":16}},{"codenumber":130,"symbol":"é","description":"LATIN SMALL LETTER E WITH ACUTE","rect":{"x":18,"y":64,"w":9,"h":16}},{"codenumber":131,"symbol":"â","description":"LATIN SMALL LETTER A WITH CIRCUMFLEX","rect":{"x":27,"y":64,"w":9,"h":16}},{"codenumber":132,"symbol":"ä","description":"LATIN SMALL LETTER A WITH DIAERESIS","rect":{"x":36,"y":64,"w":9,"h":16}},{"codenumber":133,"symbol":"à","description":"LATIN SMALL LETTER A WITH GRAVE","rect":{"x":45,"y":64,"w":9,"h":16}},{"codenumber":134,"symbol":"å","description":"LATIN SMALL LETTER A WITH RING ABOVE","rect":{"x":54,"y":64,"w":9,"h":16}},{"codenumber":135,"symbol":"ç","description":"LATIN SMALL LETTER C WITH CEDILLA","rect":{"x":63,"y":64,"w":9,"h":16}},{"codenumber":136,"symbol":"ê","description":"LATIN SMALL LETTER E WITH CIRCUMFLEX","rect":{"x":72,"y":64,"w":9,"h":16}},{"codenumber":137,"symbol":"ë","description":"LATIN SMALL LETTER E WITH DIAERESIS","rect":{"x":81,"y":64,"w":9,"h":16}},{"codenumber":138,"symbol":"è","description":"LATIN SMALL LETTER E WITH GRAVE","rect":{"x":90,"y":64,"w":9,"h":16}},{"codenumber":139,"symbol":"ï","description":"LATIN SMALL LETTER I WITH DIAERESIS","rect":{"x":99,"y":64,"w":9,"h":16}},{"codenumber":140,"symbol":"î","description":"LATIN SMALL LETTER I WITH CIRCUMFLEX","rect":{"x":108,"y":64,"w":9,"h":16}},{"codenumber":141,"symbol":"ì","description":"LATIN SMALL LETTER I WITH GRAVE","rect":{"x":117,"y":64,"w":9,"h":16}},{"codenumber":142,"symbol":"Ä","description":"LATIN CAPITAL LETTER A WITH DIAERESIS","rect":{"x":126,"y":64,"w":9,"h":16}},{"codenumber":143,"symbol":"Å","description":"LATIN CAPITAL LETTER A WITH RING ABOVE","rect":{"x":135,"y":64,"w":9,"h":16}},{"codenumber":144,"symbol":"É","description":"LATIN CAPITAL LETTER E WITH ACUTE","rect":{"x":144,"y":64,"w":9,"h":16}},{"codenumber":145,"symbol":"æ","description":"LATIN SMALL LETTER AE","rect":{"x":153,"y":64,"w":9,"h":16}},{"codenumber":146,"symbol":"Æ","description":"LATIN CAPITAL LETTER AE","rect":{"x":162,"y":64,"w":9,"h":16}},{"codenumber":147,"symbol":"ô","description":"LATIN SMALL LETTER O WITH CIRCUMFLEX","rect":{"x":171,"y":64,"w":9,"h":16}},{"codenumber":148,"symbol":"ö","description":"LATIN SMALL LETTER O WITH DIAERESIS","rect":{"x":180,"y":64,"w":9,"h":16}},{"codenumber":149,"symbol":"ò","description":"LATIN SMALL LETTER O WITH GRAVE","rect":{"x":189,"y":64,"w":9,"h":16}},{"codenumber":150,"symbol":"û","description":"LATIN SMALL LETTER U WITH CIRCUMFLEX","rect":{"x":198,"y":64,"w":9,"h":16}},{"codenumber":151,"symbol":"ù","description":"LATIN SMALL LETTER U WITH GRAVE","rect":{"x":207,"y":64,"w":9,"h":16}},{"codenumber":152,"symbol":"ÿ","description":"LATIN SMALL LETTER Y WITH DIAERESIS","rect":{"x":216,"y":64,"w":9,"h":16}},{"codenumber":153,"symbol":"Ö","description":"LATIN CAPITAL LETTER O WITH DIAERESIS","rect":{"x":225,"y":64,"w":9,"h":16}},{"codenumber":154,"symbol":"Ü","description":"LATIN CAPITAL LETTER U WITH DIAERESIS","rect":{"x":234,"y":64,"w":9,"h":16}},{"codenumber":155,"symbol":"¢","description":"CENT SIGN","rect":{"x":243,"y":64,"w":9,"h":16}},{"codenumber":156,"symbol":"£","description":"POUND SIGN","rect":{"x":252,"y":64,"w":9,"h":16}},{"codenumber":157,"symbol":"¥","description":"YEN SIGN","rect":{"x":261,"y":64,"w":9,"h":16}},{"codenumber":158,"symbol":"₧","description":"PESETA SIGN","rect":{"x":270,"y":64,"w":9,"h":16}},{"codenumber":159,"symbol":"ƒ","description":"LATIN SMALL LETTER F WITH HOOK","rect":{"x":279,"y":64,"w":9,"h":16}},{"codenumber":160,"symbol":"á","description":"LATIN SMALL LETTER A WITH ACUTE","rect":{"x":0,"y":80,"w":9,"h":16}},{"codenumber":161,"symbol":"í","description":"LATIN SMALL LETTER I WITH ACUTE","rect":{"x":9,"y":80,"w":9,"h":16}},{"codenumber":162,"symbol":"ó","description":"LATIN SMALL LETTER O WITH ACUTE","rect":{"x":18,"y":80,"w":9,"h":16}},{"codenumber":163,"symbol":"ú","description":"LATIN SMALL LETTER U WITH ACUTE","rect":{"x":27,"y":80,"w":9,"h":16}},{"codenumber":164,"symbol":"ñ","description":"LATIN SMALL LETTER N WITH TILDE","rect":{"x":36,"y":80,"w":9,"h":16}},{"codenumber":165,"symbol":"Ñ","description":"LATIN CAPITAL LETTER N WITH TILDE","rect":{"x":45,"y":80,"w":9,"h":16}},{"codenumber":166,"symbol":"ª","description":"FEMININE ORDINAL INDICATOR","rect":{"x":54,"y":80,"w":9,"h":16}},{"codenumber":167,"symbol":"º","description":"MASCULINE ORDINAL INDICATOR","rect":{"x":63,"y":80,"w":9,"h":16}},{"codenumber":168,"symbol":"¿","description":"INVERTED QUESTION MARK","rect":{"x":72,"y":80,"w":9,"h":16}},{"codenumber":169,"symbol":"⌐","description":"REVERSED NOT SIGN","rect":{"x":81,"y":80,"w":9,"h":16}},{"codenumber":170,"symbol":"¬","description":"NOT SIGN","rect":{"x":90,"y":80,"w":9,"h":16}},{"codenumber":171,"symbol":"½","description":"VULGAR FRACTION ONE HALF","rect":{"x":99,"y":80,"w":9,"h":16}},{"codenumber":172,"symbol":"¼","description":"VULGAR FRACTION ONE QUARTER","rect":{"x":108,"y":80,"w":9,"h":16}},{"codenumber":173,"symbol":"¡","description":"INVERTED EXCLAMATION MARK","rect":{"x":117,"y":80,"w":9,"h":16}},{"codenumber":174,"symbol":"«","description":"LEFT-POINTING DOUBLE ANGLE QUOTATION MARK","rect":{"x":126,"y":80,"w":9,"h":16}},{"codenumber":175,"symbol":"»","description":"RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK","rect":{"x":135,"y":80,"w":9,"h":16}},{"codenumber":176,"symbol":"░","description":"LIGHT SHADE","rect":{"x":144,"y":80,"w":9,"h":16}},{"codenumber":177,"symbol":"▒","description":"MEDIUM SHADE","rect":{"x":153,"y":80,"w":9,"h":16}},{"codenumber":178,"symbol":"▓","description":"DARK SHADE","rect":{"x":162,"y":80,"w":9,"h":16}},{"codenumber":179,"symbol":"│","description":"BOX DRAWINGS LIGHT VERTICAL","rect":{"x":171,"y":80,"w":9,"h":16}},{"codenumber":180,"symbol":"┤","description":"BOX DRAWINGS LIGHT VERTICAL AND LEFT","rect":{"x":180,"y":80,"w":9,"h":16}},{"codenumber":181,"symbol":"╡","description":"BOX DRAWINGS VERTICAL SINGLE AND LEFT DOUBLE","rect":{"x":189,"y":80,"w":9,"h":16}},{"codenumber":182,"symbol":"╢","description":"BOX DRAWINGS VERTICAL DOUBLE AND LEFT SINGLE","rect":{"x":198,"y":80,"w":9,"h":16}},{"codenumber":183,"symbol":"╖","description":"BOX DRAWINGS DOWN DOUBLE AND LEFT SINGLE","rect":{"x":207,"y":80,"w":9,"h":16}},{"codenumber":184,"symbol":"╕","description":"BOX DRAWINGS DOWN SINGLE AND LEFT DOUBLE","rect":{"x":216,"y":80,"w":9,"h":16}},{"codenumber":185,"symbol":"╣","description":"BOX DRAWINGS DOUBLE VERTICAL AND LEFT","rect":{"x":225,"y":80,"w":9,"h":16}},{"codenumber":186,"symbol":"║","description":"BOX DRAWINGS DOUBLE VERTICAL","rect":{"x":234,"y":80,"w":9,"h":16}},{"codenumber":187,"symbol":"╗","description":"BOX DRAWINGS DOUBLE DOWN AND LEFT","rect":{"x":243,"y":80,"w":9,"h":16}},{"codenumber":188,"symbol":"╝","description":"BOX DRAWINGS DOUBLE UP AND LEFT","rect":{"x":252,"y":80,"w":9,"h":16}},{"codenumber":189,"symbol":"╜","description":"BOX DRAWINGS UP DOUBLE AND LEFT SINGLE","rect":{"x":261,"y":80,"w":9,"h":16}},{"codenumber":190,"symbol":"╛","description":"BOX DRAWINGS UP SINGLE AND LEFT DOUBLE","rect":{"x":270,"y":80,"w":9,"h":16}},{"codenumber":191,"symbol":"┐","description":"BOX DRAWINGS LIGHT DOWN AND LEFT","rect":{"x":279,"y":80,"w":9,"h":16}},{"codenumber":192,"symbol":"└","description":"BOX DRAWINGS LIGHT UP AND RIGHT","rect":{"x":0,"y":96,"w":9,"h":16}},{"codenumber":193,"symbol":"┴","description":"BOX DRAWINGS LIGHT UP AND HORIZONTAL","rect":{"x":9,"y":96,"w":9,"h":16}},{"codenumber":194,"symbol":"┬","description":"BOX DRAWINGS LIGHT DOWN AND HORIZONTAL","rect":{"x":18,"y":96,"w":9,"h":16}},{"codenumber":195,"symbol":"├","description":"BOX DRAWINGS LIGHT VERTICAL AND RIGHT","rect":{"x":27,"y":96,"w":9,"h":16}},{"codenumber":196,"symbol":"─","description":"BOX DRAWINGS LIGHT HORIZONTAL","rect":{"x":36,"y":96,"w":9,"h":16}},{"codenumber":197,"symbol":"┼","description":"BOX DRAWINGS LIGHT VERTICAL AND HORIZONTAL","rect":{"x":45,"y":96,"w":9,"h":16}},{"codenumber":198,"symbol":"╞","description":"BOX DRAWINGS VERTICAL SINGLE AND RIGHT DOUBLE","rect":{"x":54,"y":96,"w":9,"h":16}},{"codenumber":199,"symbol":"╟","description":"BOX DRAWINGS VERTICAL DOUBLE AND RIGHT SINGLE","rect":{"x":63,"y":96,"w":9,"h":16}},{"codenumber":200,"symbol":"╚","description":"BOX DRAWINGS DOUBLE UP AND RIGHT","rect":{"x":72,"y":96,"w":9,"h":16}},{"codenumber":201,"symbol":"╔","description":"BOX DRAWINGS DOUBLE DOWN AND RIGHT","rect":{"x":81,"y":96,"w":9,"h":16}},{"codenumber":202,"symbol":"╩","description":"BOX DRAWINGS DOUBLE UP AND HORIZONTAL","rect":{"x":90,"y":96,"w":9,"h":16}},{"codenumber":203,"symbol":"╦","description":"BOX DRAWINGS DOUBLE DOWN AND HORIZONTAL","rect":{"x":99,"y":96,"w":9,"h":16}},{"codenumber":204,"symbol":"╠","description":"BOX DRAWINGS DOUBLE VERTICAL AND RIGHT","rect":{"x":108,"y":96,"w":9,"h":16}},{"codenumber":205,"symbol":"═","description":"BOX DRAWINGS DOUBLE HORIZONTAL","rect":{"x":117,"y":96,"w":9,"h":16}},{"codenumber":206,"symbol":"╬","description":"BOX DRAWINGS DOUBLE VERTICAL AND HORIZONTAL","rect":{"x":126,"y":96,"w":9,"h":16}},{"codenumber":207,"symbol":"╧","description":"BOX DRAWINGS UP SINGLE AND HORIZONTAL DOUBLE","rect":{"x":135,"y":96,"w":9,"h":16}},{"codenumber":208,"symbol":"╨","description":"BOX DRAWINGS UP DOUBLE AND HORIZONTAL SINGLE","rect":{"x":144,"y":96,"w":9,"h":16}},{"codenumber":209,"symbol":"╤","description":"BOX DRAWINGS DOWN SINGLE AND HORIZONTAL DOUBLE","rect":{"x":153,"y":96,"w":9,"h":16}},{"codenumber":210,"symbol":"╥","description":"BOX DRAWINGS DOWN DOUBLE AND HORIZONTAL SINGLE","rect":{"x":162,"y":96,"w":9,"h":16}},{"codenumber":211,"symbol":"╙","description":"BOX DRAWINGS UP DOUBLE AND RIGHT SINGLE","rect":{"x":171,"y":96,"w":9,"h":16}},{"codenumber":212,"symbol":"╘","description":"BOX DRAWINGS UP SINGLE AND RIGHT DOUBLE","rect":{"x":180,"y":96,"w":9,"h":16}},{"codenumber":213,"symbol":"╒","description":"BOX DRAWINGS DOWN SINGLE AND RIGHT DOUBLE","rect":{"x":189,"y":96,"w":9,"h":16}},{"codenumber":214,"symbol":"╓","description":"BOX DRAWINGS DOWN DOUBLE AND RIGHT SINGLE","rect":{"x":198,"y":96,"w":9,"h":16}},{"codenumber":215,"symbol":"╫","description":"BOX DRAWINGS VERTICAL DOUBLE AND HORIZONTAL SINGLE","rect":{"x":207,"y":96,"w":9,"h":16}},{"codenumber":216,"symbol":"╪","description":"BOX DRAWINGS VERTICAL SINGLE AND HORIZONTAL DOUBLE","rect":{"x":216,"y":96,"w":9,"h":16}},{"codenumber":217,"symbol":"┘","description":"BOX DRAWINGS LIGHT UP AND LEFT","rect":{"x":225,"y":96,"w":9,"h":16}},{"codenumber":218,"symbol":"┌","description":"BOX DRAWINGS LIGHT DOWN AND RIGHT","rect":{"x":234,"y":96,"w":9,"h":16}},{"codenumber":219,"symbol":"█","description":"FULL BLOCK","rect":{"x":243,"y":96,"w":9,"h":16}},{"codenumber":220,"symbol":"▄","description":"LOWER HALF BLOCK","rect":{"x":252,"y":96,"w":9,"h":16}},{"codenumber":221,"symbol":"▌","description":"LEFT HALF BLOCK","rect":{"x":261,"y":96,"w":9,"h":16}},{"codenumber":222,"symbol":"▐","description":"RIGHT HALF BLOCK","rect":{"x":270,"y":96,"w":9,"h":16}},{"codenumber":223,"symbol":"▀","description":"UPPER HALF BLOCK","rect":{"x":279,"y":96,"w":9,"h":16}},{"codenumber":224,"symbol":"α","description":"GREEK SMALL LETTER ALPHA","rect":{"x":0,"y":112,"w":9,"h":16}},{"codenumber":225,"symbol":"ß","description":"LATIN SMALL LETTER SHARP S","rect":{"x":9,"y":112,"w":9,"h":16}},{"codenumber":226,"symbol":"Γ","description":"GREEK CAPITAL LETTER GAMMA","rect":{"x":18,"y":112,"w":9,"h":16}},{"codenumber":227,"symbol":"π","description":"GREEK SMALL LETTER PI","rect":{"x":27,"y":112,"w":9,"h":16}},{"codenumber":228,"symbol":"Σ","description":"GREEK CAPITAL LETTER SIGMA","rect":{"x":36,"y":112,"w":9,"h":16}},{"codenumber":229,"symbol":"σ","description":"GREEK SMALL LETTER SIGMA","rect":{"x":45,"y":112,"w":9,"h":16}},{"codenumber":230,"symbol":"µ","description":"MICRO SIGN","rect":{"x":54,"y":112,"w":9,"h":16}},{"codenumber":231,"symbol":"τ","description":"GREEK SMALL LETTER TAU","rect":{"x":63,"y":112,"w":9,"h":16}},{"codenumber":232,"symbol":"Φ","description":"GREEK CAPITAL LETTER PHI","rect":{"x":72,"y":112,"w":9,"h":16}},{"codenumber":233,"symbol":"Θ","description":"GREEK CAPITAL LETTER THETA","rect":{"x":81,"y":112,"w":9,"h":16}},{"codenumber":234,"symbol":"Ω","description":"GREEK CAPITAL LETTER OMEGA","rect":{"x":90,"y":112,"w":9,"h":16}},{"codenumber":235,"symbol":"δ","description":"GREEK SMALL LETTER DELTA","rect":{"x":99,"y":112,"w":9,"h":16}},{"codenumber":236,"symbol":"∞","description":"INFINITY","rect":{"x":108,"y":112,"w":9,"h":16}},{"codenumber":237,"symbol":"φ","description":"GREEK SMALL LETTER PHI","rect":{"x":117,"y":112,"w":9,"h":16}},{"codenumber":238,"symbol":"ε","description":"GREEK SMALL LETTER EPSILON","rect":{"x":126,"y":112,"w":9,"h":16}},{"codenumber":239,"symbol":"∩","description":"INTERSECTION","rect":{"x":135,"y":112,"w":9,"h":16}},{"codenumber":240,"symbol":"≡","description":"IDENTICAL TO","rect":{"x":144,"y":112,"w":9,"h":16}},{"codenumber":241,"symbol":"±","description":"PLUS-MINUS SIGN","rect":{"x":153,"y":112,"w":9,"h":16}},{"codenumber":242,"symbol":"≥","description":"GREATER-THAN OR EQUAL TO","rect":{"x":162,"y":112,"w":9,"h":16}},{"codenumber":243,"symbol":"≤","description":"LESS-THAN OR EQUAL TO","rect":{"x":171,"y":112,"w":9,"h":16}},{"codenumber":244,"symbol":"⌠","description":"TOP HALF INTEGRAL","rect":{"x":180,"y":112,"w":9,"h":16}},{"codenumber":245,"symbol":"⌡","description":"BOTTOM HALF INTEGRAL","rect":{"x":189,"y":112,"w":9,"h":16}},{"codenumber":246,"symbol":"÷","description":"DIVISION SIGN","rect":{"x":198,"y":112,"w":9,"h":16}},{"codenumber":247,"symbol":"≈","description":"ALMOST EQUAL TO","rect":{"x":207,"y":112,"w":9,"h":16}},{"codenumber":248,"symbol":"°","description":"DEGREE SIGN","rect":{"x":216,"y":112,"w":9,"h":16}},{"codenumber":249,"symbol":"∙","description":"BULLET OPERATOR","rect":{"x":225,"y":112,"w":9,"h":16}},{"codenumber":250,"symbol":"·","description":"MIDDLE DOT","rect":{"x":234,"y":112,"w":9,"h":16}},{"codenumber":251,"symbol":"√","description":"SQUARE ROOT","rect":{"x":243,"y":112,"w":9,"h":16}},{"codenumber":252,"symbol":"ⁿ","description":"SUPERSCRIPT LATIN SMALL LETTER N","rect":{"x":252,"y":112,"w":9,"h":16}},{"codenumber":253,"symbol":"²","description":"SUPERSCRIPT TWO","rect":{"x":261,"y":112,"w":9,"h":16}},{"codenumber":254,"symbol":"■","description":"BLACK SQUARE","rect":{"x":270,"y":112,"w":9,"h":16}}],"imagedata":"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"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/retrolib.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGbEIsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3dkNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmV0cm9saWIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3JldHJvbGliLy4vbm9kZV9tb2R1bGVzL2NhbnZhcy9icm93c2VyLmpzIiwid2VicGFjazovL3JldHJvbGliLy4vbm9kZV9tb2R1bGVzL2NhbnZhcy9saWIvcGFyc2UtZm9udC5qcyIsIndlYnBhY2s6Ly9yZXRyb2xpYi8uL3NyYy9tb2R1bGVzL0ZvbnREYXRhLnRzIiwid2VicGFjazovL3JldHJvbGliLy4vc3JjL21vZHVsZXMvSW1hZ2VEZWZpbml0aW9uLnRzIiwid2VicGFjazovL3JldHJvbGliLy4vc3JjL21vZHVsZXMvTXVzaWNEZWZpbml0aW9uLnRzIiwid2VicGFjazovL3JldHJvbGliLy4vc3JjL21vZHVsZXMvU2Z4RGVmaW5pdGlvbi50cyIsIndlYnBhY2s6Ly9yZXRyb2xpYi8uL3NyYy9tb2R1bGVzL2ZvbnQudHMiLCJ3ZWJwYWNrOi8vcmV0cm9saWIvLi9zcmMvbW9kdWxlcy9pbWFnZXMudHMiLCJ3ZWJwYWNrOi8vcmV0cm9saWIvLi9zcmMvbW9kdWxlcy9tdXNpYy50cyIsIndlYnBhY2s6Ly9yZXRyb2xpYi8uL3NyYy9tb2R1bGVzL3NjZW5lcy50cyIsIndlYnBhY2s6Ly9yZXRyb2xpYi8uL3NyYy9tb2R1bGVzL3NmeC50cyIsIndlYnBhY2s6Ly9yZXRyb2xpYi8uL3NyYy9yZXRyb2xpYi50cyIsIndlYnBhY2s6Ly9yZXRyb2xpYi8uL3NyYy9tb2R1bGVzL2NvZGVwYWdlLmpzIiwid2VicGFjazovL3JldHJvbGliL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JldHJvbGliL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXRyb2xpYi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JldHJvbGliL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmV0cm9saWIvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXRyb2xpYi93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmV0cm9saWIvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInJldHJvbGliXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInJldHJvbGliXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgKCkgPT4ge1xucmV0dXJuICIsIi8qIGdsb2JhbHMgZG9jdW1lbnQsIEltYWdlRGF0YSAqL1xuXG5jb25zdCBwYXJzZUZvbnQgPSByZXF1aXJlKCcuL2xpYi9wYXJzZS1mb250JylcblxuZXhwb3J0cy5wYXJzZUZvbnQgPSBwYXJzZUZvbnRcblxuZXhwb3J0cy5jcmVhdGVDYW52YXMgPSBmdW5jdGlvbiAod2lkdGgsIGhlaWdodCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKSwgeyB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH0pXG59XG5cbmV4cG9ydHMuY3JlYXRlSW1hZ2VEYXRhID0gZnVuY3Rpb24gKGFycmF5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gIC8vIEJyb3dzZXIgaW1wbGVtZW50YXRpb24gb2YgSW1hZ2VEYXRhIGxvb2tzIGF0IHRoZSBudW1iZXIgb2YgYXJndW1lbnRzIHBhc3NlZFxuICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiBuZXcgSW1hZ2VEYXRhKClcbiAgICBjYXNlIDE6IHJldHVybiBuZXcgSW1hZ2VEYXRhKGFycmF5KVxuICAgIGNhc2UgMjogcmV0dXJuIG5ldyBJbWFnZURhdGEoYXJyYXksIHdpZHRoKVxuICAgIGRlZmF1bHQ6IHJldHVybiBuZXcgSW1hZ2VEYXRhKGFycmF5LCB3aWR0aCwgaGVpZ2h0KVxuICB9XG59XG5cbmV4cG9ydHMubG9hZEltYWdlID0gZnVuY3Rpb24gKHNyYywgb3B0aW9ucykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGNvbnN0IGltYWdlID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKSwgb3B0aW9ucylcblxuICAgIGZ1bmN0aW9uIGNsZWFudXAgKCkge1xuICAgICAgaW1hZ2Uub25sb2FkID0gbnVsbFxuICAgICAgaW1hZ2Uub25lcnJvciA9IG51bGxcbiAgICB9XG5cbiAgICBpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7IGNsZWFudXAoKTsgcmVzb2x2ZShpbWFnZSkgfVxuICAgIGltYWdlLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7IGNsZWFudXAoKTsgcmVqZWN0KG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgdGhlIGltYWdlIFwiJyArIHNyYyArICdcIicpKSB9XG5cbiAgICBpbWFnZS5zcmMgPSBzcmNcbiAgfSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG4vKipcbiAqIEZvbnQgUmVnRXhwIGhlbHBlcnMuXG4gKi9cblxuY29uc3Qgd2VpZ2h0cyA9ICdib2xkfGJvbGRlcnxsaWdodGVyfFsxLTldMDAnXG5jb25zdCBzdHlsZXMgPSAnaXRhbGljfG9ibGlxdWUnXG5jb25zdCB2YXJpYW50cyA9ICdzbWFsbC1jYXBzJ1xuY29uc3Qgc3RyZXRjaGVzID0gJ3VsdHJhLWNvbmRlbnNlZHxleHRyYS1jb25kZW5zZWR8Y29uZGVuc2VkfHNlbWktY29uZGVuc2VkfHNlbWktZXhwYW5kZWR8ZXhwYW5kZWR8ZXh0cmEtZXhwYW5kZWR8dWx0cmEtZXhwYW5kZWQnXG5jb25zdCB1bml0cyA9ICdweHxwdHxwY3xpbnxjbXxtbXwlfGVtfGV4fGNofHJlbXxxJ1xuY29uc3Qgc3RyaW5nID0gJ1xcJyhbXlxcJ10rKVxcJ3xcIihbXlwiXSspXCJ8W1xcXFx3XFxcXHMtXSsnXG5cbi8vIFsgWyA84oCYZm9udC1zdHlsZeKAmT4gfHwgPGZvbnQtdmFyaWFudC1jc3MyMT4gfHwgPOKAmGZvbnQtd2VpZ2h04oCZPiB8fCA84oCYZm9udC1zdHJldGNo4oCZPiBdP1xuLy8gICAgPOKAmGZvbnQtc2l6ZeKAmT4gWyAvIDzigJhsaW5lLWhlaWdodOKAmT4gXT8gPOKAmGZvbnQtZmFtaWx54oCZPiBdXG4vLyBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLWZvbnRzLTMvI2ZvbnQtcHJvcFxuY29uc3Qgd2VpZ2h0UmUgPSBuZXcgUmVnRXhwKGAoJHt3ZWlnaHRzfSkgK2AsICdpJylcbmNvbnN0IHN0eWxlUmUgPSBuZXcgUmVnRXhwKGAoJHtzdHlsZXN9KSArYCwgJ2knKVxuY29uc3QgdmFyaWFudFJlID0gbmV3IFJlZ0V4cChgKCR7dmFyaWFudHN9KSArYCwgJ2knKVxuY29uc3Qgc3RyZXRjaFJlID0gbmV3IFJlZ0V4cChgKCR7c3RyZXRjaGVzfSkgK2AsICdpJylcbmNvbnN0IHNpemVGYW1pbHlSZSA9IG5ldyBSZWdFeHAoXG4gIGAoW1xcXFxkXFxcXC5dKykoJHt1bml0c30pICooKD86JHtzdHJpbmd9KSggKiwgKig/OiR7c3RyaW5nfSkpKilgKVxuXG4vKipcbiAqIENhY2hlIGZvbnQgcGFyc2luZy5cbiAqL1xuXG5jb25zdCBjYWNoZSA9IHt9XG5cbmNvbnN0IGRlZmF1bHRIZWlnaHQgPSAxNiAvLyBwdCwgY29tbW9uIGJyb3dzZXIgZGVmYXVsdFxuXG4vKipcbiAqIFBhcnNlIGZvbnQgYHN0cmAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7T2JqZWN0fSBQYXJzZWQgZm9udC4gYHNpemVgIGlzIGluIGRldmljZSB1bml0cy4gYHVuaXRgIGlzIHRoZSB1bml0XG4gKiAgIGFwcGVhcmluZyBpbiB0aGUgaW5wdXQgc3RyaW5nLlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBzdHIgPT4ge1xuICAvLyBDYWNoZWRcbiAgaWYgKGNhY2hlW3N0cl0pIHJldHVybiBjYWNoZVtzdHJdXG5cbiAgLy8gVHJ5IGZvciByZXF1aXJlZCBwcm9wZXJ0aWVzIGZpcnN0LlxuICBjb25zdCBzaXplRmFtaWx5ID0gc2l6ZUZhbWlseVJlLmV4ZWMoc3RyKVxuICBpZiAoIXNpemVGYW1pbHkpIHJldHVybiAvLyBpbnZhbGlkXG5cbiAgLy8gRGVmYXVsdCB2YWx1ZXMgYW5kIHJlcXVpcmVkIHByb3BlcnRpZXNcbiAgY29uc3QgZm9udCA9IHtcbiAgICB3ZWlnaHQ6ICdub3JtYWwnLFxuICAgIHN0eWxlOiAnbm9ybWFsJyxcbiAgICBzdHJldGNoOiAnbm9ybWFsJyxcbiAgICB2YXJpYW50OiAnbm9ybWFsJyxcbiAgICBzaXplOiBwYXJzZUZsb2F0KHNpemVGYW1pbHlbMV0pLFxuICAgIHVuaXQ6IHNpemVGYW1pbHlbMl0sXG4gICAgZmFtaWx5OiBzaXplRmFtaWx5WzNdLnJlcGxhY2UoL1tcIiddL2csICcnKS5yZXBsYWNlKC8gKiwgKi9nLCAnLCcpXG4gIH1cblxuICAvLyBPcHRpb25hbCwgdW5vcmRlcmVkIHByb3BlcnRpZXMuXG4gIGxldCB3ZWlnaHQsIHN0eWxlLCB2YXJpYW50LCBzdHJldGNoXG4gIC8vIFN0b3Agc2VhcmNoIGF0IGBzaXplRmFtaWx5LmluZGV4YFxuICBjb25zdCBzdWJzdHIgPSBzdHIuc3Vic3RyaW5nKDAsIHNpemVGYW1pbHkuaW5kZXgpXG4gIGlmICgod2VpZ2h0ID0gd2VpZ2h0UmUuZXhlYyhzdWJzdHIpKSkgZm9udC53ZWlnaHQgPSB3ZWlnaHRbMV1cbiAgaWYgKChzdHlsZSA9IHN0eWxlUmUuZXhlYyhzdWJzdHIpKSkgZm9udC5zdHlsZSA9IHN0eWxlWzFdXG4gIGlmICgodmFyaWFudCA9IHZhcmlhbnRSZS5leGVjKHN1YnN0cikpKSBmb250LnZhcmlhbnQgPSB2YXJpYW50WzFdXG4gIGlmICgoc3RyZXRjaCA9IHN0cmV0Y2hSZS5leGVjKHN1YnN0cikpKSBmb250LnN0cmV0Y2ggPSBzdHJldGNoWzFdXG5cbiAgLy8gQ29udmVydCB0byBkZXZpY2UgdW5pdHMuIChgZm9udC51bml0YCBpcyB0aGUgb3JpZ2luYWwgdW5pdClcbiAgLy8gVE9ETzogY2gsIGV4XG4gIHN3aXRjaCAoZm9udC51bml0KSB7XG4gICAgY2FzZSAncHQnOlxuICAgICAgZm9udC5zaXplIC89IDAuNzVcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAncGMnOlxuICAgICAgZm9udC5zaXplICo9IDE2XG4gICAgICBicmVha1xuICAgIGNhc2UgJ2luJzpcbiAgICAgIGZvbnQuc2l6ZSAqPSA5NlxuICAgICAgYnJlYWtcbiAgICBjYXNlICdjbSc6XG4gICAgICBmb250LnNpemUgKj0gOTYuMCAvIDIuNTRcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnbW0nOlxuICAgICAgZm9udC5zaXplICo9IDk2LjAgLyAyNS40XG4gICAgICBicmVha1xuICAgIGNhc2UgJyUnOlxuICAgICAgLy8gVE9ETyBkaXNhYmxlZCBiZWNhdXNlIGV4aXN0aW5nIHVuaXQgdGVzdHMgYXNzdW1lIDEwMFxuICAgICAgLy8gZm9udC5zaXplICo9IGRlZmF1bHRIZWlnaHQgLyAxMDAgLyAwLjc1XG4gICAgICBicmVha1xuICAgIGNhc2UgJ2VtJzpcbiAgICBjYXNlICdyZW0nOlxuICAgICAgZm9udC5zaXplICo9IGRlZmF1bHRIZWlnaHQgLyAwLjc1XG4gICAgICBicmVha1xuICAgIGNhc2UgJ3EnOlxuICAgICAgZm9udC5zaXplICo9IDk2IC8gMjUuNCAvIDRcbiAgICAgIGJyZWFrXG4gIH1cblxuICByZXR1cm4gKGNhY2hlW3N0cl0gPSBmb250KVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgRm9udERhdGEgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRm9udERhdGEoKSB7XG4gICAgfVxuICAgIHJldHVybiBGb250RGF0YTtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBGb250RGF0YTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEltYWdlRGVmaW5pdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBJbWFnZURlZmluaXRpb24oKSB7XG4gICAgfVxuICAgIEltYWdlRGVmaW5pdGlvbi5mcm9tSlNPTiA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBJbWFnZURlZmluaXRpb24oKSwganNvbik7XG4gICAgfTtcbiAgICByZXR1cm4gSW1hZ2VEZWZpbml0aW9uO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEltYWdlRGVmaW5pdGlvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE11c2ljRGVmaW5pdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNdXNpY0RlZmluaXRpb24oKSB7XG4gICAgfVxuICAgIE11c2ljRGVmaW5pdGlvbi5mcm9tSlNPTiA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBNdXNpY0RlZmluaXRpb24oKSwganNvbik7XG4gICAgfTtcbiAgICByZXR1cm4gTXVzaWNEZWZpbml0aW9uO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IE11c2ljRGVmaW5pdGlvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFNmeERlZmluaXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2Z4RGVmaW5pdGlvbigpIHtcbiAgICB9XG4gICAgU2Z4RGVmaW5pdGlvbi5mcm9tSlNPTiA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBTZnhEZWZpbml0aW9uKCksIGpzb24pO1xuICAgIH07XG4gICAgcmV0dXJuIFNmeERlZmluaXRpb247XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gU2Z4RGVmaW5pdGlvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Db2RlcGFnZUFuZEJpdG1hcHRvSlNPTiA9IGV4cG9ydHMuSW1hZ2VUb0Jhc2U2NCA9IGV4cG9ydHMuSGV4VG9SZ2JhID0gZXhwb3J0cy5SZ2JhVG9IZXggPSBleHBvcnRzLkNvbG9yTGVycCA9IGV4cG9ydHMuRm9udHMgPSBleHBvcnRzLkxvYWREZWZhdWx0Rm9udHMgPSBleHBvcnRzLkxvYWRGcm9tSlNPTiA9IHZvaWQgMDtcbnZhciBkZWZhdWx0Rm9udF9qc29uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vZGVmYXVsdEZvbnQuanNvblwiKSk7XG52YXIgRm9udERhdGFfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Gb250RGF0YVwiKSk7XG52YXIgY29kZXBhZ2VfanNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb2RlcGFnZS5qc1wiKSk7XG52YXIgY2FudmFzXzEgPSByZXF1aXJlKFwiY2FudmFzXCIpO1xudmFyIGltYWdlc18xID0gcmVxdWlyZShcIi4vaW1hZ2VzXCIpO1xudmFyIGZvbnRzID0ge1xuICAgIGRlZmF1bHQ6IHt9XG59O1xuZnVuY3Rpb24gTG9hZERlZmF1bHRGb250cygpIHtcbiAgICBmb250cy5kZWZhdWx0ID0gTG9hZEZyb21KU09OKGRlZmF1bHRGb250X2pzb25fMS5kZWZhdWx0KTtcbn1cbmV4cG9ydHMuTG9hZERlZmF1bHRGb250cyA9IExvYWREZWZhdWx0Rm9udHM7XG5mdW5jdGlvbiBMb2FkRnJvbUpTT04oZm9udCkge1xuICAgIHRyeSB7XG4gICAgICAgIHZhciBmb250RGF0YSA9IE9iamVjdC5hc3NpZ24obmV3IEZvbnREYXRhXzEuZGVmYXVsdCgpLCBmb250KTtcbiAgICAgICAgZm9udERhdGEuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgZm9udERhdGEuaW1hZ2Uuc3JjID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwnICsgZm9udERhdGEuaW1hZ2VkYXRhO1xuICAgICAgICByZXR1cm4gZm9udERhdGE7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlKTtcbiAgICB9XG59XG5leHBvcnRzLkxvYWRGcm9tSlNPTiA9IExvYWRGcm9tSlNPTjtcbmZ1bmN0aW9uIEZvbnRzKCkge1xuICAgIGlmIChPYmplY3Qua2V5cyhmb250cykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIExvYWREZWZhdWx0Rm9udHMoKTtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGZvbnRzKS5tYXAoZnVuY3Rpb24gKG0pIHsgcmV0dXJuIGZvbnRzW21dOyB9KTtcbn1cbmV4cG9ydHMuRm9udHMgPSBGb250cztcbmZ1bmN0aW9uIEhleFRvUmdiYShoZXgpIHtcbiAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gNykge1xuICAgICAgICBoZXggKz0gJ2ZmJztcbiAgICB9XG4gICAgZWxzZSBpZiAoaGV4Lmxlbmd0aCA9PT0gOCkge1xuICAgICAgICBoZXggKz0gJzAnO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xuICAgIHJldHVybiByZXN1bHQgPyB7XG4gICAgICAgIHI6IHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpLFxuICAgICAgICBnOiBwYXJzZUludChyZXN1bHRbMl0sIDE2KSxcbiAgICAgICAgYjogcGFyc2VJbnQocmVzdWx0WzNdLCAxNiksXG4gICAgICAgIGE6IHBhcnNlSW50KHJlc3VsdFs0XSwgMTYpXG4gICAgfSA6IG51bGw7XG59XG5leHBvcnRzLkhleFRvUmdiYSA9IEhleFRvUmdiYTtcbmZ1bmN0aW9uIFJnYmFUb0hleChyZ2IpIHtcbiAgICB2YXIgciA9IHJnYi5yLnRvU3RyaW5nKDE2KTtcbiAgICB2YXIgZyA9IHJnYi5nLnRvU3RyaW5nKDE2KTtcbiAgICB2YXIgYiA9IHJnYi5iLnRvU3RyaW5nKDE2KTtcbiAgICB2YXIgYSA9IHJnYi5hLnRvU3RyaW5nKDE2KTtcbiAgICByID0gci5sZW5ndGggPT09IDEgPyAnMCcgKyByIDogcjtcbiAgICBnID0gZy5sZW5ndGggPT09IDEgPyAnMCcgKyBnIDogZztcbiAgICBiID0gYi5sZW5ndGggPT09IDEgPyAnMCcgKyBiIDogYjtcbiAgICBhID0gYS5sZW5ndGggPT09IDEgPyAnMCcgKyBhIDogYTtcbiAgICByZXR1cm4gXCIjXCIuY29uY2F0KHIpLmNvbmNhdChnKS5jb25jYXQoYikuY29uY2F0KGEpO1xufVxuZXhwb3J0cy5SZ2JhVG9IZXggPSBSZ2JhVG9IZXg7XG5mdW5jdGlvbiBDb2xvckxlcnAoY29sb3IxLCBjb2xvcjIsIHQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByOiBwYXJzZUludChjb2xvcjEuciArIChjb2xvcjIuciAtIGNvbG9yMS5yKSAqIHQpLFxuICAgICAgICBnOiBwYXJzZUludChjb2xvcjEuZyArIChjb2xvcjIuZyAtIGNvbG9yMS5nKSAqIHQpLFxuICAgICAgICBiOiBwYXJzZUludChjb2xvcjEuYiArIChjb2xvcjIuYiAtIGNvbG9yMS5iKSAqIHQpLFxuICAgICAgICBhOiBjb2xvcjEuYVxuICAgIH07XG59XG5leHBvcnRzLkNvbG9yTGVycCA9IENvbG9yTGVycDtcbmZ1bmN0aW9uIEltYWdlVG9CYXNlNjQoaW1nLCBvdXRwdXRGb3JtYXQpIHtcbiAgICB2YXIgY2FudmFzID0gbnVsbDtcbiAgICBvdXRwdXRGb3JtYXQgPSBvdXRwdXRGb3JtYXQgPyBvdXRwdXRGb3JtYXQgOiAnaW1hZ2UvcG5nJztcbiAgICB0cnkge1xuICAgICAgICBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB9XG4gICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgIGNhbnZhcyA9ICgwLCBjYW52YXNfMS5jcmVhdGVDYW52YXMpKGltZy53aWR0aCwgaW1nLmhlaWdodCk7XG4gICAgfVxuICAgIHZhciBjb250eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0O1xuICAgIGNhbnZhcy53aWR0aCA9IGltZy53aWR0aDtcbiAgICBjb250eC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcbiAgICB2YXIgZGF0YSA9IGNhbnZhcy50b0RhdGFVUkwob3V0cHV0Rm9ybWF0KTtcbiAgICB2YXIgaW5kZXggPSBkYXRhLmluZGV4T2YoJztiYXNlNjQsJykgKyAnO2Jhc2U2NCwnLmxlbmd0aDtcbiAgICByZXR1cm4gZGF0YS5zbGljZShpbmRleCk7XG59XG5leHBvcnRzLkltYWdlVG9CYXNlNjQgPSBJbWFnZVRvQmFzZTY0O1xuLyoqXG4gKiBMb2FkcyBiaXRtYXAgZnJvbSBwYXRoIChzdHJpbmcgcGFyYW0gdHlwZSkgb3IgdXNlcyBJbWFnZSB0byBnZXQgdGhlIGJhc2U2NCBpbWFnZSBkYXRhIGFuZCBidWlsZCBhIHByZWNvbXBpbGVkIGZvbnQgSlNPTiBvYmplY3QuXG4gKiBAcGFyYW0gYml0bWFwXG4gKiBAcGFyYW0gbWF4X3lcbiAqIEBwYXJhbSBjdyBDaGFyYWN0ZXIgd2lkdGguXG4gKiBAcGFyYW0gY2ggQ2hhcmFjdGVyIGhlaWdodC5cbiAqIEByZXR1cm5zXG4gKi9cbmZ1bmN0aW9uIENvZGVwYWdlQW5kQml0bWFwdG9KU09OKGJpdG1hcCwgbWF4X3ksIGN3LCBjaCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgc3ggPSAwOyAvLyBTb3VyY2UgWFxuICAgICAgICAgICAgdmFyIHN5ID0gMDsgLy8gU291cmNlIFlcbiAgICAgICAgICAgIGN3ID0gY3cgPyBjdyA6IDk7IC8vIENoYXJhY3RlciBXaWR0aFxuICAgICAgICAgICAgY2ggPSBjaCA/IGNoIDogMTY7IC8vIENoYXJhY3RlciBIZWlnaHRcbiAgICAgICAgICAgIHZhciBjb2RlcGFnZSA9IFtdO1xuICAgICAgICAgICAgdmFyIGltYWdlZGF0YSA9IG51bGw7XG4gICAgICAgICAgICB2YXIgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYml0bWFwID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGltYWdlZGF0YSA9IEltYWdlVG9CYXNlNjQoKDAsIGltYWdlc18xLmdldEltYWdlKShiaXRtYXApKTtcbiAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCcgKyBpbWFnZWRhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbWFnZSA9IGJpdG1hcDtcbiAgICAgICAgICAgICAgICBpbWFnZWRhdGEgPSBJbWFnZVRvQmFzZTY0KGltYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1heF95ID0gbWF4X3kgPyBtYXhfeSA6IGltYWdlLmhlaWdodDtcbiAgICAgICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGNvZGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZWl0ZW0gPSBjb2RlcGFnZV9qc18xLmRlZmF1bHQuZmlsdGVyKGZ1bmN0aW9uIChmKSB7IHJldHVybiBmLmNvZGVudW1iZXIgPT09IGNvZGU7IH0pO1xuICAgICAgICAgICAgICAgIGlmIChjb2RlaXRlbS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGVpdGVtWzBdLnJlY3QgPSB1bmRlZmluZWQ7IC8vIHsgeDogc3gsIHk6IHN5LCB3OiBjdywgaDogY2ggfSAvL1RPRE86IE1ha2UgdGhpcyBhIHBhcmFtZXRlciB0byBjb250cm9sIHdoZXRoZXIgd2UgYXV0by1nZW5lcmF0ZSByZWN0c1xuICAgICAgICAgICAgICAgICAgICBjb2RlcGFnZS5wdXNoKGNvZGVpdGVtWzBdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3ggKz0gY3c7XG4gICAgICAgICAgICAgICAgaWYgKHN4ID49IGltYWdlLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1heF95ICYmIHN5ICsgY2ggPCBtYXhfeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3kgKz0gY2g7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN5ID49IGltYWdlLmhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBzeSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZvciAodmFyIGNvZGUgPSAwOyBjb2RlIDwgMjU2OyBjb2RlKyspIHtcbiAgICAgICAgICAgICAgICBfbG9vcF8xKGNvZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzb2x2ZSh7IGN3aWR0aDogY3csIGNoZWlnaHQ6IGNoLCBjb2RlcGFnZTogY29kZXBhZ2UsIGltYWdlZGF0YTogaW1hZ2VkYXRhIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuQ29kZXBhZ2VBbmRCaXRtYXB0b0pTT04gPSBDb2RlcGFnZUFuZEJpdG1hcHRvSlNPTjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pbWFnZU1hbmlmZXN0RnJvbUpTT04gPSBleHBvcnRzLmdldENvbnRleHQgPSBleHBvcnRzLmRyYXdJbWFnZUN0eCA9IGV4cG9ydHMuc2V0Q29udGV4dCA9IGV4cG9ydHMuZ2V0SW1hZ2VzID0gZXhwb3J0cy5nZXRJbWFnZSA9IGV4cG9ydHMuZHJhd0ltYWdlID0gZXhwb3J0cy5sb2FkSW1hZ2UgPSBleHBvcnRzLmxvYWRBbGxJbWFnZXMgPSB2b2lkIDA7XG52YXIgSW1hZ2VEZWZpbml0aW9uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vSW1hZ2VEZWZpbml0aW9uXCIpKTtcbnZhciBpbWFnZXMgPSBbXTtcbi8qKlxuICogUG9wdWxhdGUgaW1hZ2VzIG1hbmlmZXN0IHdpdGggSlNPTiBsaXN0IG9mIGRlZmluaXRpb25zLlxuICogQHBhcmFtIGpzb24gSlNPTiByZXByZXNlbnRhdGlvbiBvZiBpbWFnZSBkZWZpbml0aW9ucy5cbiAqL1xuZnVuY3Rpb24gaW1hZ2VNYW5pZmVzdEZyb21KU09OKGpzb24pIHtcbiAgICBqc29uLmZvckVhY2goKGZ1bmN0aW9uIChkZWYpIHsgcmV0dXJuIGltYWdlcy5wdXNoKEltYWdlRGVmaW5pdGlvbl8xLmRlZmF1bHQuZnJvbUpTT04oZGVmKSk7IH0pKTtcbn1cbmV4cG9ydHMuaW1hZ2VNYW5pZmVzdEZyb21KU09OID0gaW1hZ2VNYW5pZmVzdEZyb21KU09OO1xuLy8gQ2FudmFzIDJkIGNvbnRleHQuXG52YXIgY3R4ID0gbnVsbDtcbi8vIFNldCB0aGUgY2FudmFzIDJkIGNvbnRleHQuXG5mdW5jdGlvbiBzZXRDb250ZXh0KGNvbnRleHQpIHtcbiAgICBjdHggPSBjb250ZXh0O1xufVxuZXhwb3J0cy5zZXRDb250ZXh0ID0gc2V0Q29udGV4dDtcbi8vIFJldHVybnMgdGhlIGNhbnZhcyAyZCBjb250ZXh0LlxuZnVuY3Rpb24gZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gY3R4O1xufVxuZXhwb3J0cy5nZXRDb250ZXh0ID0gZ2V0Q29udGV4dDtcbi8vIFJldHVybiBsb2FkZWQgaW1hZ2Ugb2JqZWN0IGZyb20gdGhlIGxpc3QuXG5mdW5jdGlvbiBnZXRJbWFnZShuYW1lKSB7XG4gICAgdmFyIGltZyA9IGltYWdlcy5maWx0ZXIoZnVuY3Rpb24gKGYpIHsgcmV0dXJuIGYubmFtZSA9PT0gbmFtZTsgfSk7XG4gICAgcmV0dXJuIGltZy5sZW5ndGggPiAwID8gaW1nWzBdLmltYWdlIDogbnVsbDtcbn1cbmV4cG9ydHMuZ2V0SW1hZ2UgPSBnZXRJbWFnZTtcbi8vIFJldHVybnMgdGhlIGZ1bGwgbGlzdCBvZiBpbWFnZSBvYmplY3RzLlxuZnVuY3Rpb24gZ2V0SW1hZ2VzKCkge1xuICAgIHJldHVybiBpbWFnZXM7XG59XG5leHBvcnRzLmdldEltYWdlcyA9IGdldEltYWdlcztcbi8qKlxuICogRHJhd3MgYW4gaW1hZ2UgYXQgeCx5IGNvb3JkaW5hdGVzIG9uIHRoZSBjYW5hcy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge251bWJlcn0geFxuICogQHBhcmFtIHtudW1iZXJ9IHlcbiAqIEBwYXJhbSB7b2JqZWN0fSBzcmNSZWN0XG4gKiBAcGFyYW0ge2Jvb2xlYW59IGZsaXBwZWRcbiAqL1xuZnVuY3Rpb24gZHJhd0ltYWdlKG5hbWUsIHgsIHksIHNyY1JlY3QsIGZsaXBwZWQpIHtcbiAgICBkcmF3SW1hZ2VDdHgoZ2V0Q29udGV4dCgpLCBuYW1lLCB4LCB5LCBzcmNSZWN0LCBmbGlwcGVkKTtcbn1cbmV4cG9ydHMuZHJhd0ltYWdlID0gZHJhd0ltYWdlO1xuLyoqXG4gKiBSYXcgaW1hZ2UgZHJhd2luZyBmdW5jdGlvbiAodXNlIGRyYXdJbWFnZSB1bmxlc3MgeW91IHdhbnQgdG8gZHJhdyB0byBhbm90aGVyIDJkIGNvbnRleHQpLlxuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgQ2FudmFzIDJkIGNvbnRleHQuXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtudW1iZXJ9IHhcbiAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gKiBAcGFyYW0ge29iamVjdH0gc3JjUmVjdFxuICogQHBhcmFtIHtib29sZWFufSBmbGlwcGVkXG4gKi9cbmZ1bmN0aW9uIGRyYXdJbWFnZUN0eChjb250ZXh0LCBuYW1lLCB4LCB5LCBzcmNSZWN0LCBmbGlwcGVkKSB7XG4gICAgdmFyIGltZyA9IGltYWdlcy5maWx0ZXIoZnVuY3Rpb24gKGYpIHsgcmV0dXJuIGYubmFtZSA9PT0gbmFtZTsgfSk7XG4gICAgaWYgKGltZy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoc3JjUmVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChmbGlwcGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnNjYWxlKC0xLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1nWzBdLmltYWdlLCBzcmNSZWN0LngsIHNyY1JlY3QueSwgc3JjUmVjdC53LCBzcmNSZWN0LmgsIC14IC0gc3JjUmVjdC53LCB5LCBzcmNSZWN0LncsIHNyY1JlY3QuaCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1nWzBdLmltYWdlLCBzcmNSZWN0LngsIHNyY1JlY3QueSwgc3JjUmVjdC53LCBzcmNSZWN0LmgsIHgsIHksIHNyY1JlY3Qudywgc3JjUmVjdC5oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZmxpcHBlZCkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnNhdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5zY2FsZSgtMSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltZ1swXS5pbWFnZSwgeCAtIHNyY1JlY3QudywgeSwgc3JjUmVjdC53LCBzcmNSZWN0LmgpO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltZ1swXS5pbWFnZSwgeCwgeSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChfYSkge1xuICAgICAgICAgICAgLy8gZW1wdHlcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuZHJhd0ltYWdlQ3R4ID0gZHJhd0ltYWdlQ3R4O1xuLyoqXG4gKiBMb2FkIEltYWdlXG4gKiBAcGFyYW0ge3N0cmluZ30gZmlsZW5hbWVcbiAqIEByZXR1cm5zXG4gKi9cbmZ1bmN0aW9uIGxvYWRJbWFnZShmaWxlbmFtZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJlc29sdmUoaW1nKTtcbiAgICAgICAgfTtcbiAgICAgICAgaW1nLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGZpbGUgXCIuY29uY2F0KGZpbGVuYW1lLCBcIjpcIiksIGUpO1xuICAgICAgICAgICAgcmVqZWN0KG51bGwpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgaW1hZ2UgPSBpbWFnZXMuZmlsdGVyKGZ1bmN0aW9uIChmKSB7IHJldHVybiBmLmZpbGVuYW1lID09PSBmaWxlbmFtZTsgfSk7XG4gICAgICAgIGlmIChpbWFnZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpbWcuc3JjID0gZmlsZW5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiSW1hZ2UgZGVmaW5pdGlvbiBtYXRjaGluZyBmaWxlbmFtZSBcIi5jb25jYXQoZmlsZW5hbWUsIFwiIG5vdCBmb3VuZC5cIikpO1xuICAgICAgICAgICAgcmVqZWN0KG51bGwpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLmxvYWRJbWFnZSA9IGxvYWRJbWFnZTtcbi8qKlxuICogTG9hZCBhbGwgaW1hZ2VzIGluIHRoZSBpbWFnZXMgbGlzdC5cbiAqIEByZXR1cm5zXG4gKi9cbmZ1bmN0aW9uIGxvYWRBbGxJbWFnZXMoKSB7XG4gICAgdmFyIHByb21pc2VzID0gW107XG4gICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICB2YXIgaW1hZ2UgPSBpbWFnZXNbaV07XG4gICAgICAgIHByb21pc2VzLnB1c2gobmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmV0dXJuIGxvYWRJbWFnZShpbWFnZS5maWxlbmFtZSkudGhlbihmdW5jdGlvbiAocikge1xuICAgICAgICAgICAgaW1hZ2UuaW1hZ2UgPSByO1xuICAgICAgICAgICAgcmVzb2x2ZShyKTtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBsb2FkJywgaW1hZ2UuZmlsZW5hbWUsIGUpOyB9KTsgfSkpO1xuICAgIH07XG4gICAgZm9yICh2YXIgaSBpbiBpbWFnZXMpIHtcbiAgICAgICAgX2xvb3BfMShpKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UuYWxsU2V0dGxlZChwcm9taXNlcyk7XG59XG5leHBvcnRzLmxvYWRBbGxJbWFnZXMgPSBsb2FkQWxsSW1hZ2VzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLm11c2ljTWFuaWZlc3RGcm9tSlNPTiA9IGV4cG9ydHMuaXNQbGF5aW5nID0gZXhwb3J0cy5nZXRUcmFjayA9IGV4cG9ydHMucGxheVRyYWNrID0gZXhwb3J0cy5sb2FkVHJhY2sgPSBleHBvcnRzLmxvYWRBbGxUcmFja3MgPSB2b2lkIDA7XG52YXIgTXVzaWNEZWZpbml0aW9uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTXVzaWNEZWZpbml0aW9uXCIpKTtcbnZhciBzZnhWb2x1bWUgPSAwLjQ1O1xudmFyIHNmeHMgPSBbXTtcbi8qKlxuICogUG9wdWxhdGUgc2Z4IG1hbmlmZXN0IHdpdGggSlNPTiBsaXN0IG9mIGRlZmluaXRpb25zLlxuICogQHBhcmFtIGpzb24gSlNPTiByZXByZXNlbnRhdGlvbiBvZiBpbWFnZSBkZWZpbml0aW9ucy5cbiAqL1xuZnVuY3Rpb24gbXVzaWNNYW5pZmVzdEZyb21KU09OKGpzb24pIHtcbiAgICBqc29uLmZvckVhY2goKGZ1bmN0aW9uIChkZWYpIHsgcmV0dXJuIHNmeHMucHVzaChNdXNpY0RlZmluaXRpb25fMS5kZWZhdWx0LmZyb21KU09OKGRlZikpOyB9KSk7XG59XG5leHBvcnRzLm11c2ljTWFuaWZlc3RGcm9tSlNPTiA9IG11c2ljTWFuaWZlc3RGcm9tSlNPTjtcbmZ1bmN0aW9uIGlzUGxheWluZyhuYW1lKSB7XG4gICAgdmFyIHNmID0gZ2V0VHJhY2sobmFtZSk7XG4gICAgaWYgKHNmKSB7XG4gICAgICAgIHJldHVybiAhc2YucGF1c2VkIHx8IHNmLmN1cnJlbnRUaW1lICYmIHNmLmN1cnJlbnRUaW1lIDwgc2YuZHVyYXRpb247XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydHMuaXNQbGF5aW5nID0gaXNQbGF5aW5nO1xuZnVuY3Rpb24gZ2V0VHJhY2sobmFtZSkge1xuICAgIHZhciBzZiA9IHNmeHMuZmlsdGVyKGZ1bmN0aW9uIChmKSB7IHJldHVybiBmLm5hbWUgPT09IG5hbWU7IH0pO1xuICAgIHJldHVybiBzZi5sZW5ndGggPiAwID8gc2ZbMF0udHJhY2sgOiBudWxsO1xufVxuZXhwb3J0cy5nZXRUcmFjayA9IGdldFRyYWNrO1xuZnVuY3Rpb24gcGxheVRyYWNrKG5hbWUsIG9uRW5kZWQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBzZl8xID0gc2Z4cy5maWx0ZXIoZnVuY3Rpb24gKGYpIHsgcmV0dXJuIGYubmFtZSA9PT0gbmFtZTsgfSk7XG4gICAgICAgICAgICBpZiAoc2ZfMS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1BsYXlpbmcobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2ZfMVswXS50cmFjay52b2x1bWUgPSBzZnhWb2x1bWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbkVuZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZl8xWzBdLnRyYWNrLm9uZW5kZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FbmRlZChzZl8xWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZl8xWzBdLnRyYWNrLm9uZW5kZWQgPSBmdW5jdGlvbiAoKSB7IHJlc29sdmUoKTsgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZl8xWzBdLnRyYWNrLm9uZW5kZWQgPSBmdW5jdGlvbiAoKSB7IHJlc29sdmUoKTsgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZl8xWzBdLnRyYWNrLnBsYXkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNmXzFbMF0udHJhY2suY3VycmVudFRpbWUgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHBsYXlpbmcgc2Z4JywgbmFtZSwgZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMucGxheVRyYWNrID0gcGxheVRyYWNrO1xuZnVuY3Rpb24gbG9hZFRyYWNrKGZpbGVuYW1lKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIHNmID0gbmV3IEF1ZGlvKGZpbGVuYW1lKTtcbiAgICAgICAgc2Yub25jYW5wbGF5dGhyb3VnaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJlc29sdmUoc2YpO1xuICAgICAgICB9O1xuICAgICAgICBzZi5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBmaWxlIFwiLmNvbmNhdChmaWxlbmFtZSwgXCI6XCIpLCBlKTtcbiAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cbmV4cG9ydHMubG9hZFRyYWNrID0gbG9hZFRyYWNrO1xuZnVuY3Rpb24gbG9hZEFsbFRyYWNrcygpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmVBbGwsIHJlamVjdEFsbCkge1xuICAgICAgICB2YXIgcHJvbWlzZXMgPSBbXTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgdmFyIHNmeCA9IHNmeHNbaV07XG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJldHVybiBsb2FkVHJhY2soc2Z4LmZpbGVuYW1lKS50aGVuKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICAgICAgc2Z4LnRyYWNrID0gcjtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHIpO1xuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gbG9hZCcsIHNmeC5maWxlbmFtZSwgZSk7XG4gICAgICAgICAgICAgICAgcmVqZWN0QWxsKCdGYWlsZWQgdG8gbG9hZCcgKyBzZnguZmlsZW5hbWUgKyAnOicgKyBKU09OLnN0cmluZ2lmeShlKSk7XG4gICAgICAgICAgICB9KTsgfSkpO1xuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpIGluIHNmeHMpIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsU2V0dGxlZChwcm9taXNlcyk7XG4gICAgfSk7XG59XG5leHBvcnRzLmxvYWRBbGxUcmFja3MgPSBsb2FkQWxsVHJhY2tzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlQWN0aXZhdGVTY2VuZSA9IGV4cG9ydHMuYWN0aXZhdGVTY2VuZSA9IGV4cG9ydHMuYWRkU2NlbmUgPSBleHBvcnRzLmhhbmRsZUlucHV0ID0gZXhwb3J0cy5oYW5kbGVBbmltYXRpb25GcmFtZSA9IHZvaWQgMDtcbnZhciBzdGFydCA9IG51bGw7XG52YXIgc2NlbmVzID0gW107XG5mdW5jdGlvbiBhZGRTY2VuZShzY2VuZSkge1xuICAgIHNjZW5lcy5wdXNoKHNjZW5lKTtcbiAgICByZXR1cm4gc2NlbmU7XG59XG5leHBvcnRzLmFkZFNjZW5lID0gYWRkU2NlbmU7XG5mdW5jdGlvbiBhY3RpdmF0ZVNjZW5lKGlkKSB7XG4gICAgdmFyIGluZGV4ID0gc2NlbmVzLmZpbmRJbmRleChmdW5jdGlvbiAocykgeyByZXR1cm4gcy5pZCA9PT0gaWQ7IH0pO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIHNjZW5lc1tpbmRleF0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgc2NlbmVzW2luZGV4XS5vbkFjdGl2YXRlKCk7XG4gICAgfVxufVxuZXhwb3J0cy5hY3RpdmF0ZVNjZW5lID0gYWN0aXZhdGVTY2VuZTtcbmZ1bmN0aW9uIGRlQWN0aXZhdGVTY2VuZShpZCkge1xuICAgIHZhciBpbmRleCA9IHNjZW5lcy5maW5kSW5kZXgoZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMuaWQgPT09IGlkOyB9KTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICBzY2VuZXNbaW5kZXhdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBzY2VuZXNbaW5kZXhdLm9uRGVhY3RpdmF0ZSgpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVBY3RpdmF0ZVNjZW5lID0gZGVBY3RpdmF0ZVNjZW5lO1xuZnVuY3Rpb24gaGFuZGxlSW5wdXQoaW5wdXQsIGFtdCwgcmVsZWFzZWQpIHtcbiAgICBzY2VuZXMuZmlsdGVyKGZ1bmN0aW9uIChmKSB7IHJldHVybiBmLmFjdGl2ZTsgfSkuZm9yRWFjaChmdW5jdGlvbiAoc2NlbmUpIHtcbiAgICAgICAgc2NlbmUuaGFuZGxlSW5wdXQoaW5wdXQsIGFtdCwgcmVsZWFzZWQpO1xuICAgIH0pO1xufVxuZXhwb3J0cy5oYW5kbGVJbnB1dCA9IGhhbmRsZUlucHV0O1xuZnVuY3Rpb24gaGFuZGxlQW5pbWF0aW9uRnJhbWUodGltZVN0YW1wKSB7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShoYW5kbGVBbmltYXRpb25GcmFtZSk7XG4gICAgaWYgKHN0YXJ0ID09PSBudWxsKSB7XG4gICAgICAgIHN0YXJ0ID0gdGltZVN0YW1wIC0gMTY7IC8vIElmIHdlIGRvbid0IGRvIHRoaXMsIHRoZSBmaXJzdCBmcmFtZSB0aW1lc3RhbXAgaXMgdG9vIGxvbmcgc28gd2UgZmFrZSA2MGZwcyBieSBzdWJ0cmFjdGluZyAxNlxuICAgIH1cbiAgICB2YXIgZGVsdGEgPSB0aW1lU3RhbXAgLSBzdGFydDtcbiAgICBzdGFydCA9IHRpbWVTdGFtcDtcbiAgICBzY2VuZXMuZmlsdGVyKGZ1bmN0aW9uIChmKSB7IHJldHVybiBmLmFjdGl2ZTsgfSkuZm9yRWFjaChmdW5jdGlvbiAoc2NlbmUpIHtcbiAgICAgICAgc2NlbmUuYW5pbWF0aW9uRnJhbWUoZGVsdGEpO1xuICAgIH0pO1xufVxuZXhwb3J0cy5oYW5kbGVBbmltYXRpb25GcmFtZSA9IGhhbmRsZUFuaW1hdGlvbkZyYW1lO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnNmeE1hbmlmZXN0RnJvbUpTT04gPSBleHBvcnRzLmlzUGxheWluZyA9IGV4cG9ydHMuZ2V0U2Z4ID0gZXhwb3J0cy5wbGF5U2Z4ID0gZXhwb3J0cy5sb2FkU2Z4ID0gZXhwb3J0cy5sb2FkQWxsU2Z4ID0gdm9pZCAwO1xudmFyIFNmeERlZmluaXRpb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9TZnhEZWZpbml0aW9uXCIpKTtcbnZhciBzZnhWb2x1bWUgPSAwLjQ1O1xudmFyIHNmeHMgPSBbXTtcbi8qKlxuICogUG9wdWxhdGUgc2Z4IG1hbmlmZXN0IHdpdGggSlNPTiBsaXN0IG9mIGRlZmluaXRpb25zLlxuICogQHBhcmFtIGpzb24gSlNPTiByZXByZXNlbnRhdGlvbiBvZiBpbWFnZSBkZWZpbml0aW9ucy5cbiAqL1xuZnVuY3Rpb24gc2Z4TWFuaWZlc3RGcm9tSlNPTihqc29uKSB7XG4gICAganNvbi5mb3JFYWNoKChmdW5jdGlvbiAoZGVmKSB7IHJldHVybiBzZnhzLnB1c2goU2Z4RGVmaW5pdGlvbl8xLmRlZmF1bHQuZnJvbUpTT04oZGVmKSk7IH0pKTtcbn1cbmV4cG9ydHMuc2Z4TWFuaWZlc3RGcm9tSlNPTiA9IHNmeE1hbmlmZXN0RnJvbUpTT047XG5mdW5jdGlvbiBpc1BsYXlpbmcobmFtZSkge1xuICAgIHZhciBzZiA9IGdldFNmeChuYW1lKTtcbiAgICBpZiAoc2YpIHtcbiAgICAgICAgcmV0dXJuICFzZi5wYXVzZWQgfHwgc2YuY3VycmVudFRpbWUgJiYgc2YuY3VycmVudFRpbWUgPCBzZi5kdXJhdGlvbjtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0cy5pc1BsYXlpbmcgPSBpc1BsYXlpbmc7XG5mdW5jdGlvbiBnZXRTZngobmFtZSkge1xuICAgIHZhciBzZiA9IHNmeHMuZmlsdGVyKGZ1bmN0aW9uIChmKSB7IHJldHVybiBmLm5hbWUgPT09IG5hbWU7IH0pO1xuICAgIHJldHVybiBzZi5sZW5ndGggPiAwID8gc2ZbMF0uc2Z4IDogbnVsbDtcbn1cbmV4cG9ydHMuZ2V0U2Z4ID0gZ2V0U2Z4O1xuZnVuY3Rpb24gcGxheVNmeChuYW1lLCBvbkVuZGVkKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgc2ZfMSA9IHNmeHMuZmlsdGVyKGZ1bmN0aW9uIChmKSB7IHJldHVybiBmLm5hbWUgPT09IG5hbWU7IH0pO1xuICAgICAgICAgICAgaWYgKHNmXzEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGlmICghaXNQbGF5aW5nKG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNmXzFbMF0uc2Z4LnZvbHVtZSA9IHNmeFZvbHVtZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9uRW5kZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNmXzFbMF0uc2Z4Lm9uZW5kZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FbmRlZChzZl8xWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZl8xWzBdLnNmeC5vbmVuZGVkID0gZnVuY3Rpb24gKCkgeyByZXNvbHZlKCk7IH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2ZfMVswXS5zZngub25lbmRlZCA9IGZ1bmN0aW9uICgpIHsgcmVzb2x2ZSgpOyB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNmXzFbMF0uc2Z4LnBsYXkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNmXzFbMF0uc2Z4LmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBwbGF5aW5nIHNmeCcsIG5hbWUsIGUpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnBsYXlTZnggPSBwbGF5U2Z4O1xuZnVuY3Rpb24gbG9hZFNmeChmaWxlbmFtZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciBzZiA9IG5ldyBBdWRpbyhmaWxlbmFtZSk7XG4gICAgICAgIHNmLm9uY2FucGxheXRocm91Z2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXNvbHZlKHNmKTtcbiAgICAgICAgfTtcbiAgICAgICAgc2Yub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgZmlsZSBcIi5jb25jYXQoZmlsZW5hbWUsIFwiOlwiKSwgZSk7XG4gICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgIH07XG4gICAgfSk7XG59XG5leHBvcnRzLmxvYWRTZnggPSBsb2FkU2Z4O1xuZnVuY3Rpb24gbG9hZEFsbFNmeCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmVBbGwsIHJlamVjdEFsbCkge1xuICAgICAgICB2YXIgcHJvbWlzZXMgPSBbXTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgdmFyIHNmeCA9IHNmeHNbaV07XG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJldHVybiBsb2FkU2Z4KHNmeC5maWxlbmFtZSkudGhlbihmdW5jdGlvbiAocikge1xuICAgICAgICAgICAgICAgIHNmeC5zZnggPSByO1xuICAgICAgICAgICAgICAgIHJlc29sdmUocik7XG4gICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBsb2FkJywgc2Z4LmZpbGVuYW1lLCBlKTtcbiAgICAgICAgICAgICAgICByZWplY3RBbGwoJ0ZhaWxlZCB0byBsb2FkJyArIHNmeC5maWxlbmFtZSArICc6JyArIEpTT04uc3RyaW5naWZ5KGUpKTtcbiAgICAgICAgICAgIH0pOyB9KSk7XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgaW4gc2Z4cykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGxTZXR0bGVkKHByb21pc2VzKTtcbiAgICB9KTtcbn1cbmV4cG9ydHMubG9hZEFsbFNmeCA9IGxvYWRBbGxTZng7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TZXRDYW52YXNCYWNrZ3JvdW5kID0gZXhwb3J0cy5Jbml0aWFsaXplID0gZXhwb3J0cy5tdXNpYyA9IGV4cG9ydHMuc2Z4ID0gZXhwb3J0cy5zY2VuZXMgPSBleHBvcnRzLmZvbnQgPSBleHBvcnRzLmltYWdlcyA9IHZvaWQgMDtcbmV4cG9ydHMuaW1hZ2VzID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL21vZHVsZXMvaW1hZ2VzXCIpKTtcbmV4cG9ydHMuZm9udCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9tb2R1bGVzL2ZvbnRcIikpO1xuZXhwb3J0cy5zY2VuZXMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vbW9kdWxlcy9zY2VuZXNcIikpO1xuZXhwb3J0cy5zZnggPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vbW9kdWxlcy9zZnhcIikpO1xuZXhwb3J0cy5tdXNpYyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9tb2R1bGVzL211c2ljXCIpKTtcbi8vIEdhbWUgQ2FudmFzIG1ldGFkYXRhIEdsb2JhbHMuXG52YXIgZ2FtZUNhbnZhcyA9IG51bGw7XG52YXIgY2FudmFzV2lkdGggPSAwO1xudmFyIGNhbnZhc0hlaWdodCA9IDA7XG52YXIgY2FudmFzQmFja2dyb3VuZCA9ICd0cmFuc3BhcmVudCc7XG5mdW5jdGlvbiByZXNpemUoKSB7XG4gICAgLy8gVE9ETzogY2FsY3VsYXRlIHRoZSB3aWR0aCB0byBoZWlnaHQgcmF0aW8gYW5kIHNjYWxlIGNTaXplIGJ5IHRoYXQgYmVmb3JlIHNldHRpbmcgdmFsdWVzLlxuICAgIHZhciBjU2l6ZSA9IHdpbmRvdy5pbm5lckhlaWdodCA+IHdpbmRvdy5pbm5lcldpZHRoID8gd2luZG93LmlubmVyV2lkdGggOiB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgZ2FtZUNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBnYW1lQ2FudmFzLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBnYW1lQ2FudmFzLnN0eWxlLndpZHRoID0gY1NpemUgKyAncHgnO1xuICAgIGdhbWVDYW52YXMuc3R5bGUuaGVpZ2h0ID0gY1NpemUgKyAncHgnO1xuICAgIGdhbWVDYW52YXMuc3R5bGUudG9wID0gd2luZG93LmlubmVySGVpZ2h0IC8gMiAtIGNTaXplIC8gMiArICdweCc7XG4gICAgZ2FtZUNhbnZhcy5zdHlsZS5sZWZ0ID0gd2luZG93LmlubmVyV2lkdGggLyAyIC0gY1NpemUgLyAyICsgJ3B4JztcbiAgICBnYW1lQ2FudmFzLnN0eWxlLmJhY2tncm91bmQgPSBjYW52YXNCYWNrZ3JvdW5kO1xufVxuZnVuY3Rpb24gcHJlcGVuZENhbnZhcyhjYW52YXNJZCwgd2lkdGgsIGhlaWdodCwgYXV0b1Jlc2l6ZSkge1xuICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjYW52YXMuaWQgPSBjYW52YXNJZDtcbiAgICBkb2N1bWVudC5ib2R5LnByZXBlbmQoY2FudmFzKTtcbiAgICBnYW1lQ2FudmFzID0gY2FudmFzO1xuICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgY2FudmFzV2lkdGggPSB3aWR0aDtcbiAgICBjYW52YXNIZWlnaHQgPSBoZWlnaHQ7XG4gICAgaWYgKGF1dG9SZXNpemUpIHtcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVzaXplKCk7IH0pO1xuICAgICAgICByZXNpemUoKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhbnZhcztcbn1cbmZ1bmN0aW9uIFNldENhbnZhc0JhY2tncm91bmQoY29sb3IpIHtcbiAgICBjYW52YXNCYWNrZ3JvdW5kID0gY29sb3I7XG4gICAgZ2FtZUNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kID0gY2FudmFzQmFja2dyb3VuZDtcbn1cbmV4cG9ydHMuU2V0Q2FudmFzQmFja2dyb3VuZCA9IFNldENhbnZhc0JhY2tncm91bmQ7XG4vKipcbiAqIEluaXRpYWxpemUgdGhlIHJldHJvbGliIGVuZ2luZS5cbiAqIEBwYXJhbSBvcHRpb25zXG4gKi9cbmZ1bmN0aW9uIEluaXRpYWxpemUoY2FudmFzSWQsIHdpZHRoLCBoZWlnaHQsIGJ1aWxkQ2FudmFzLCBhdXRvUmVzaXplKSB7XG4gICAgd2lkdGggPSB3aWR0aCA/IHdpZHRoIDogMjU2O1xuICAgIGhlaWdodCA9IGhlaWdodCA/IGhlaWdodCA6IDI1NjtcbiAgICBjYW52YXNJZCA9IGNhbnZhc0lkID8gY2FudmFzSWQgOiAnZ2FtZWNhbnZhcyc7XG4gICAgaWYgKGdhbWVDYW52YXMgPT09IG51bGwgJiYgYnVpbGRDYW52YXMpIHtcbiAgICAgICAgZ2FtZUNhbnZhcyA9IHByZXBlbmRDYW52YXMoY2FudmFzSWQsIHdpZHRoLCBoZWlnaHQsIGF1dG9SZXNpemUpO1xuICAgIH1cbiAgICBlbHNlIGlmIChnYW1lQ2FudmFzID09PSBudWxsKSB7XG4gICAgICAgIGdhbWVDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYW52YXNJZCk7XG4gICAgfVxufVxuZXhwb3J0cy5Jbml0aWFsaXplID0gSW5pdGlhbGl6ZTtcbiIsImV4cG9ydCBkZWZhdWx0IFtcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAwLFxuICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMDAnLDE2KSksXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIk5VTEwgQ0hBUlwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMSxcbiAgICBcInN5bWJvbFwiOiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KCdcXHUwMDAxJywxNikpLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJTVEFSVCBPRiBIRUFESU5HXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAyLFxuICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMDInLDE2KSksXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIlNUQVJUIE9GIFRFWFRcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDMsXG4gICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAwMycsMTYpKSxcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiRU5EIE9GIFRFWFRcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDQsXG4gICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAwNCcsMTYpKSxcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiRU5EIE9GIFRSQU5TTUlTU0lPTlwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogNSxcbiAgICBcInN5bWJvbFwiOiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KCdcXHUwMDA1JywxNikpLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJFTlFVSVJZXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiA2LFxuICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMDYnLDE2KSksXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkFDS05PV0xFREdNRU5UXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiA3LFxuICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMDcnLDE2KSksXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkJFTExcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDgsXG4gICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAwOCcsMTYpKSxcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiQkFDSyBTUEFDRVwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogOSxcbiAgICBcInN5bWJvbFwiOiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KCdcXHUwMDA5JywxNikpLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJIT1JJWk9OVEFMIFRBQlwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTAsXG4gICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAwQScsMTYpKSxcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiTElORSBGRUVEXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAxMSxcbiAgICBcInN5bWJvbFwiOiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KCdcXHUwMDBCJywxNikpLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJWRVJUSUNBTCBUQUJcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDEyLFxuICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMEMnLDE2KSksXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkZPUk0gRkVFRFwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTMsXG4gICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAwRCcsMTYpKSxcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ0FSUklBR0UgUkVUVVJOXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAxNCxcbiAgICBcInN5bWJvbFwiOiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KCdcXHUwMDBFJywxNikpLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJTSElGVCBPVVQgLyBYLU9OXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAxNSxcbiAgICBcInN5bWJvbFwiOiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KCdcXHUwMDBGJywxNikpLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJTSElGVCBJTiAvIFgtT0ZGXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAxNixcbiAgICBcInN5bWJvbFwiOiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KCdcXHUwMDEwJywxNikpLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJEQVRBIExJTkUgRVNDQVBFXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAxNyxcbiAgICBcInN5bWJvbFwiOiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KCdcXHUwMDExJywxNikpLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJERVZJQ0UgQ09OVFJPTCAxIChPRlQuIFhPTilcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDE4LFxuICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMTInLDE2KSksXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkRFVklDRSBDT05UUk9MIDJcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDE5LFxuICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMTMnLDE2KSksXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkRFVklDRSBDT05UUk9MIDMgKE9GVC4gWE9GRilcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDIwLFxuICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMTQnLDE2KSksXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkRFVklDRSBDT05UUk9MIDRcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDIxLFxuICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMTUnLDE2KSksXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIk5FR0FUSVZFIEFDS05PV0xFREdFTUVOVFwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMjIsXG4gICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAxNicsMTYpKSxcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiU1lOQ0hST05PVVMgSURMRVwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMjMsXG4gICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAxNycsMTYpKSxcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiRU5EIE9GIFRSQU5TTUlUIEJMT0NLXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAyNCxcbiAgICBcInN5bWJvbFwiOiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KCdcXHUwMDE4JywxNikpLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJDQU5DRUxcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDI1LFxuICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMTknLDE2KSksXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkVORCBPRiBNRURJVU1cIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDI2LFxuICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMUEnLDE2KSksXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIlNVQlNUSVRVVEVcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDI3LFxuICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMUInLDE2KSksXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkVTQ0FQRVwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMjgsXG4gICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAxQycsMTYpKSxcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiRklMRSBTRVBBUkFUT1JcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDI5LFxuICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMUQnLDE2KSksXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkdST1VQIFNFUEFSQVRPUlwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMzAsXG4gICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAxRScsMTYpKSxcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiUkVDT1JEIFNFUEFSQVRPUlwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMzEsXG4gICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAxRicsMTYpKSxcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiVU5JVCBTRVBBUkFUT1JcIlxuICB9LFxuICBcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAzMixcbiAgICBcInN5bWJvbFwiOiBcIiBcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiU1BBQ0VcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDMzLFxuICAgIFwic3ltYm9sXCI6IFwiIVwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJFWENMQU1BVElPTiBNQVJLXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAzNCxcbiAgICBcInN5bWJvbFwiOiBcIlxcXCJcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiUVVPVEFUSU9OIE1BUktcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDM1LFxuICAgIFwic3ltYm9sXCI6IFwiI1wiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJOVU1CRVIgU0lHTlwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMzYsXG4gICAgXCJzeW1ib2xcIjogXCIkXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkRPTExBUiBTSUdOXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAzNyxcbiAgICBcInN5bWJvbFwiOiBcIiVcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiUEVSQ0VOVCBTSUdOXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAzOCxcbiAgICBcInN5bWJvbFwiOiBcIiZcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiQU1QRVJTQU5EXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAzOSxcbiAgICBcInN5bWJvbFwiOiBcIidcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiQVBPU1RST1BIRVwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogNDAsXG4gICAgXCJzeW1ib2xcIjogXCIoXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkxFRlQgUEFSRU5USEVTSVNcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDQxLFxuICAgIFwic3ltYm9sXCI6IFwiKVwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJSSUdIVCBQQVJFTlRIRVNJU1wiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogNDIsXG4gICAgXCJzeW1ib2xcIjogXCIqXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkFTVEVSSVNLXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiA0MyxcbiAgICBcInN5bWJvbFwiOiBcIitcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiUExVUyBTSUdOXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiA0NCxcbiAgICBcInN5bWJvbFwiOiBcIixcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ09NTUFcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDQ1LFxuICAgIFwic3ltYm9sXCI6IFwiLVwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJIWVBIRU4tTUlOVVNcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDQ2LFxuICAgIFwic3ltYm9sXCI6IFwiLlwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJGVUxMIFNUT1BcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDQ3LFxuICAgIFwic3ltYm9sXCI6IFwiL1wiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJTT0xJRFVTXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiA0OCxcbiAgICBcInN5bWJvbFwiOiBcIjBcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiRElHSVQgWkVST1wiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogNDksXG4gICAgXCJzeW1ib2xcIjogXCIxXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkRJR0lUIE9ORVwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogNTAsXG4gICAgXCJzeW1ib2xcIjogXCIyXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkRJR0lUIFRXT1wiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogNTEsXG4gICAgXCJzeW1ib2xcIjogXCIzXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkRJR0lUIFRIUkVFXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiA1MixcbiAgICBcInN5bWJvbFwiOiBcIjRcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiRElHSVQgRk9VUlwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogNTMsXG4gICAgXCJzeW1ib2xcIjogXCI1XCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkRJR0lUIEZJVkVcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDU0LFxuICAgIFwic3ltYm9sXCI6IFwiNlwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJESUdJVCBTSVhcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDU1LFxuICAgIFwic3ltYm9sXCI6IFwiN1wiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJESUdJVCBTRVZFTlwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogNTYsXG4gICAgXCJzeW1ib2xcIjogXCI4XCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkRJR0lUIEVJR0hUXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiA1NyxcbiAgICBcInN5bWJvbFwiOiBcIjlcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiRElHSVQgTklORVwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogNTgsXG4gICAgXCJzeW1ib2xcIjogXCI6XCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkNPTE9OXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiA1OSxcbiAgICBcInN5bWJvbFwiOiBcIjtcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiU0VNSUNPTE9OXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiA2MCxcbiAgICBcInN5bWJvbFwiOiBcIjxcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEVTUy1USEFOIFNJR05cIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDYxLFxuICAgIFwic3ltYm9sXCI6IFwiPVwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJFUVVBTFMgU0lHTlwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogNjIsXG4gICAgXCJzeW1ib2xcIjogXCI+XCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkdSRUFURVItVEhBTiBTSUdOXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiA2MyxcbiAgICBcInN5bWJvbFwiOiBcIj9cIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiUVVFU1RJT04gTUFSS1wiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogNjQsXG4gICAgXCJzeW1ib2xcIjogXCJAXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkNPTU1FUkNJQUwgQVRcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDY1LFxuICAgIFwic3ltYm9sXCI6IFwiQVwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBBXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiA2NixcbiAgICBcInN5bWJvbFwiOiBcIkJcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgQlwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogNjcsXG4gICAgXCJzeW1ib2xcIjogXCJDXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIENcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDY4LFxuICAgIFwic3ltYm9sXCI6IFwiRFwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBEXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiA2OSxcbiAgICBcInN5bWJvbFwiOiBcIkVcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgRVwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogNzAsXG4gICAgXCJzeW1ib2xcIjogXCJGXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIEZcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDcxLFxuICAgIFwic3ltYm9sXCI6IFwiR1wiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBHXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiA3MixcbiAgICBcInN5bWJvbFwiOiBcIkhcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgSFwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogNzMsXG4gICAgXCJzeW1ib2xcIjogXCJJXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIElcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDc0LFxuICAgIFwic3ltYm9sXCI6IFwiSlwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBKXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiA3NSxcbiAgICBcInN5bWJvbFwiOiBcIktcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgS1wiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogNzYsXG4gICAgXCJzeW1ib2xcIjogXCJMXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIExcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDc3LFxuICAgIFwic3ltYm9sXCI6IFwiTVwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBNXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiA3OCxcbiAgICBcInN5bWJvbFwiOiBcIk5cIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgTlwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogNzksXG4gICAgXCJzeW1ib2xcIjogXCJPXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIE9cIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDgwLFxuICAgIFwic3ltYm9sXCI6IFwiUFwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBQXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiA4MSxcbiAgICBcInN5bWJvbFwiOiBcIlFcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgUVwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogODIsXG4gICAgXCJzeW1ib2xcIjogXCJSXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIFJcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDgzLFxuICAgIFwic3ltYm9sXCI6IFwiU1wiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBTXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiA4NCxcbiAgICBcInN5bWJvbFwiOiBcIlRcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgVFwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogODUsXG4gICAgXCJzeW1ib2xcIjogXCJVXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIFVcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDg2LFxuICAgIFwic3ltYm9sXCI6IFwiVlwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBWXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiA4NyxcbiAgICBcInN5bWJvbFwiOiBcIldcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgV1wiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogODgsXG4gICAgXCJzeW1ib2xcIjogXCJYXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIFhcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDg5LFxuICAgIFwic3ltYm9sXCI6IFwiWVwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBZXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiA5MCxcbiAgICBcInN5bWJvbFwiOiBcIlpcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgWlwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogOTEsXG4gICAgXCJzeW1ib2xcIjogXCJbXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkxFRlQgU1FVQVJFIEJSQUNLRVRcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDkyLFxuICAgIFwic3ltYm9sXCI6IFwiXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIlJFVkVSU0UgU09MSURVU1wiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogOTMsXG4gICAgXCJzeW1ib2xcIjogXCJdXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIlJJR0hUIFNRVUFSRSBCUkFDS0VUXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiA5NCxcbiAgICBcInN5bWJvbFwiOiBcIl5cIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ0lSQ1VNRkxFWCBBQ0NFTlRcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDk1LFxuICAgIFwic3ltYm9sXCI6IFwiX1wiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMT1cgTElORVwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogOTYsXG4gICAgXCJzeW1ib2xcIjogXCJgXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkdSQVZFIEFDQ0VOVFwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogOTcsXG4gICAgXCJzeW1ib2xcIjogXCJhXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBBXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiA5OCxcbiAgICBcInN5bWJvbFwiOiBcImJcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIEJcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDk5LFxuICAgIFwic3ltYm9sXCI6IFwiY1wiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgQ1wiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTAwLFxuICAgIFwic3ltYm9sXCI6IFwiZFwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgRFwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTAxLFxuICAgIFwic3ltYm9sXCI6IFwiZVwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgRVwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTAyLFxuICAgIFwic3ltYm9sXCI6IFwiZlwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgRlwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTAzLFxuICAgIFwic3ltYm9sXCI6IFwiZ1wiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgR1wiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTA0LFxuICAgIFwic3ltYm9sXCI6IFwiaFwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgSFwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTA1LFxuICAgIFwic3ltYm9sXCI6IFwiaVwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgSVwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTA2LFxuICAgIFwic3ltYm9sXCI6IFwialwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgSlwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTA3LFxuICAgIFwic3ltYm9sXCI6IFwia1wiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgS1wiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTA4LFxuICAgIFwic3ltYm9sXCI6IFwibFwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgTFwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTA5LFxuICAgIFwic3ltYm9sXCI6IFwibVwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgTVwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTEwLFxuICAgIFwic3ltYm9sXCI6IFwiblwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgTlwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTExLFxuICAgIFwic3ltYm9sXCI6IFwib1wiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgT1wiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTEyLFxuICAgIFwic3ltYm9sXCI6IFwicFwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgUFwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTEzLFxuICAgIFwic3ltYm9sXCI6IFwicVwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgUVwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTE0LFxuICAgIFwic3ltYm9sXCI6IFwiclwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgUlwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTE1LFxuICAgIFwic3ltYm9sXCI6IFwic1wiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgU1wiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTE2LFxuICAgIFwic3ltYm9sXCI6IFwidFwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgVFwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTE3LFxuICAgIFwic3ltYm9sXCI6IFwidVwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgVVwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTE4LFxuICAgIFwic3ltYm9sXCI6IFwidlwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgVlwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTE5LFxuICAgIFwic3ltYm9sXCI6IFwid1wiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgV1wiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTIwLFxuICAgIFwic3ltYm9sXCI6IFwieFwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgWFwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTIxLFxuICAgIFwic3ltYm9sXCI6IFwieVwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgWVwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTIyLFxuICAgIFwic3ltYm9sXCI6IFwielwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgWlwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTIzLFxuICAgIFwic3ltYm9sXCI6IFwie1wiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMRUZUIENVUkxZIEJSQUNLRVRcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDEyNCxcbiAgICBcInN5bWJvbFwiOiBcInxcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiVkVSVElDQUwgTElORVwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTI1LFxuICAgIFwic3ltYm9sXCI6IFwifVwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJSSUdIVCBDVVJMWSBCUkFDS0VUXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAxMjYsXG4gICAgXCJzeW1ib2xcIjogXCJ+XCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIlRJTERFXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAxMjcsXG4gICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDA3RicsMTYpKSxcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiREVMRVRFXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAxMjgsXG4gICAgXCJzeW1ib2xcIjogXCLDh1wiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBDIFdJVEggQ0VESUxMQVwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTI5LFxuICAgIFwic3ltYm9sXCI6IFwiw7xcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIFUgV0lUSCBESUFFUkVTSVNcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDEzMCxcbiAgICBcInN5bWJvbFwiOiBcIsOpXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBFIFdJVEggQUNVVEVcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDEzMSxcbiAgICBcInN5bWJvbFwiOiBcIsOiXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBBIFdJVEggQ0lSQ1VNRkxFWFwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTMyLFxuICAgIFwic3ltYm9sXCI6IFwiw6RcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIEEgV0lUSCBESUFFUkVTSVNcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDEzMyxcbiAgICBcInN5bWJvbFwiOiBcIsOgXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBBIFdJVEggR1JBVkVcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDEzNCxcbiAgICBcInN5bWJvbFwiOiBcIsOlXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBBIFdJVEggUklORyBBQk9WRVwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTM1LFxuICAgIFwic3ltYm9sXCI6IFwiw6dcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIEMgV0lUSCBDRURJTExBXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAxMzYsXG4gICAgXCJzeW1ib2xcIjogXCLDqlwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgRSBXSVRIIENJUkNVTUZMRVhcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDEzNyxcbiAgICBcInN5bWJvbFwiOiBcIsOrXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBFIFdJVEggRElBRVJFU0lTXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAxMzgsXG4gICAgXCJzeW1ib2xcIjogXCLDqFwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgRSBXSVRIIEdSQVZFXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAxMzksXG4gICAgXCJzeW1ib2xcIjogXCLDr1wiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgSSBXSVRIIERJQUVSRVNJU1wiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTQwLFxuICAgIFwic3ltYm9sXCI6IFwiw65cIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIEkgV0lUSCBDSVJDVU1GTEVYXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAxNDEsXG4gICAgXCJzeW1ib2xcIjogXCLDrFwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgSSBXSVRIIEdSQVZFXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAxNDIsXG4gICAgXCJzeW1ib2xcIjogXCLDhFwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBBIFdJVEggRElBRVJFU0lTXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAxNDMsXG4gICAgXCJzeW1ib2xcIjogXCLDhVwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBBIFdJVEggUklORyBBQk9WRVwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTQ0LFxuICAgIFwic3ltYm9sXCI6IFwiw4lcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgRSBXSVRIIEFDVVRFXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAxNDUsXG4gICAgXCJzeW1ib2xcIjogXCLDplwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgQUVcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDE0NixcbiAgICBcInN5bWJvbFwiOiBcIsOGXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIEFFXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAxNDcsXG4gICAgXCJzeW1ib2xcIjogXCLDtFwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgTyBXSVRIIENJUkNVTUZMRVhcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDE0OCxcbiAgICBcInN5bWJvbFwiOiBcIsO2XCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBPIFdJVEggRElBRVJFU0lTXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAxNDksXG4gICAgXCJzeW1ib2xcIjogXCLDslwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgTyBXSVRIIEdSQVZFXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAxNTAsXG4gICAgXCJzeW1ib2xcIjogXCLDu1wiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgVSBXSVRIIENJUkNVTUZMRVhcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDE1MSxcbiAgICBcInN5bWJvbFwiOiBcIsO5XCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBVIFdJVEggR1JBVkVcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDE1MixcbiAgICBcInN5bWJvbFwiOiBcIsO/XCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBZIFdJVEggRElBRVJFU0lTXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAxNTMsXG4gICAgXCJzeW1ib2xcIjogXCLDllwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBPIFdJVEggRElBRVJFU0lTXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAxNTQsXG4gICAgXCJzeW1ib2xcIjogXCLDnFwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBVIFdJVEggRElBRVJFU0lTXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAxNTUsXG4gICAgXCJzeW1ib2xcIjogXCLColwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJDRU5UIFNJR05cIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDE1NixcbiAgICBcInN5bWJvbFwiOiBcIsKjXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIlBPVU5EIFNJR05cIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDE1NyxcbiAgICBcInN5bWJvbFwiOiBcIsKlXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIllFTiBTSUdOXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAxNTgsXG4gICAgXCJzeW1ib2xcIjogXCLigqdcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiUEVTRVRBIFNJR05cIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDE1OSxcbiAgICBcInN5bWJvbFwiOiBcIsaSXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBGIFdJVEggSE9PS1wiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTYwLFxuICAgIFwic3ltYm9sXCI6IFwiw6FcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIEEgV0lUSCBBQ1VURVwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTYxLFxuICAgIFwic3ltYm9sXCI6IFwiw61cIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIEkgV0lUSCBBQ1VURVwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTYyLFxuICAgIFwic3ltYm9sXCI6IFwiw7NcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIE8gV0lUSCBBQ1VURVwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTYzLFxuICAgIFwic3ltYm9sXCI6IFwiw7pcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIFUgV0lUSCBBQ1VURVwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTY0LFxuICAgIFwic3ltYm9sXCI6IFwiw7FcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIE4gV0lUSCBUSUxERVwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTY1LFxuICAgIFwic3ltYm9sXCI6IFwiw5FcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgTiBXSVRIIFRJTERFXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAxNjYsXG4gICAgXCJzeW1ib2xcIjogXCLCqlwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJGRU1JTklORSBPUkRJTkFMIElORElDQVRPUlwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTY3LFxuICAgIFwic3ltYm9sXCI6IFwiwrpcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiTUFTQ1VMSU5FIE9SRElOQUwgSU5ESUNBVE9SXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAxNjgsXG4gICAgXCJzeW1ib2xcIjogXCLCv1wiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJJTlZFUlRFRCBRVUVTVElPTiBNQVJLXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAxNjksXG4gICAgXCJzeW1ib2xcIjogXCLijJBcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiUkVWRVJTRUQgTk9UIFNJR05cIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDE3MCxcbiAgICBcInN5bWJvbFwiOiBcIsKsXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIk5PVCBTSUdOXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAxNzEsXG4gICAgXCJzeW1ib2xcIjogXCLCvVwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJWVUxHQVIgRlJBQ1RJT04gT05FIEhBTEZcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDE3MixcbiAgICBcInN5bWJvbFwiOiBcIsK8XCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIlZVTEdBUiBGUkFDVElPTiBPTkUgUVVBUlRFUlwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTczLFxuICAgIFwic3ltYm9sXCI6IFwiwqFcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiSU5WRVJURUQgRVhDTEFNQVRJT04gTUFSS1wiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTc0LFxuICAgIFwic3ltYm9sXCI6IFwiwqtcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEVGVC1QT0lOVElORyBET1VCTEUgQU5HTEUgUVVPVEFUSU9OIE1BUktcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDE3NSxcbiAgICBcInN5bWJvbFwiOiBcIsK7XCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIlJJR0hULVBPSU5USU5HIERPVUJMRSBBTkdMRSBRVU9UQVRJT04gTUFSS1wiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTc2LFxuICAgIFwic3ltYm9sXCI6IFwi4paRXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkxJR0hUIFNIQURFXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAxNzcsXG4gICAgXCJzeW1ib2xcIjogXCLilpJcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiTUVESVVNIFNIQURFXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAxNzgsXG4gICAgXCJzeW1ib2xcIjogXCLilpNcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiREFSSyBTSEFERVwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTc5LFxuICAgIFwic3ltYm9sXCI6IFwi4pSCXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBMSUdIVCBWRVJUSUNBTFwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTgwLFxuICAgIFwic3ltYm9sXCI6IFwi4pSkXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBMSUdIVCBWRVJUSUNBTCBBTkQgTEVGVFwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTgxLFxuICAgIFwic3ltYm9sXCI6IFwi4pWhXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBWRVJUSUNBTCBTSU5HTEUgQU5EIExFRlQgRE9VQkxFXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAxODIsXG4gICAgXCJzeW1ib2xcIjogXCLilaJcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIFZFUlRJQ0FMIERPVUJMRSBBTkQgTEVGVCBTSU5HTEVcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDE4MyxcbiAgICBcInN5bWJvbFwiOiBcIuKVllwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgRE9XTiBET1VCTEUgQU5EIExFRlQgU0lOR0xFXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAxODQsXG4gICAgXCJzeW1ib2xcIjogXCLilZVcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIERPV04gU0lOR0xFIEFORCBMRUZUIERPVUJMRVwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTg1LFxuICAgIFwic3ltYm9sXCI6IFwi4pWjXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBET1VCTEUgVkVSVElDQUwgQU5EIExFRlRcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDE4NixcbiAgICBcInN5bWJvbFwiOiBcIuKVkVwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgRE9VQkxFIFZFUlRJQ0FMXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAxODcsXG4gICAgXCJzeW1ib2xcIjogXCLilZdcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIERPVUJMRSBET1dOIEFORCBMRUZUXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAxODgsXG4gICAgXCJzeW1ib2xcIjogXCLilZ1cIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIERPVUJMRSBVUCBBTkQgTEVGVFwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTg5LFxuICAgIFwic3ltYm9sXCI6IFwi4pWcXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBVUCBET1VCTEUgQU5EIExFRlQgU0lOR0xFXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAxOTAsXG4gICAgXCJzeW1ib2xcIjogXCLilZtcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIFVQIFNJTkdMRSBBTkQgTEVGVCBET1VCTEVcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDE5MSxcbiAgICBcInN5bWJvbFwiOiBcIuKUkFwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgTElHSFQgRE9XTiBBTkQgTEVGVFwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTkyLFxuICAgIFwic3ltYm9sXCI6IFwi4pSUXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBMSUdIVCBVUCBBTkQgUklHSFRcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDE5MyxcbiAgICBcInN5bWJvbFwiOiBcIuKUtFwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgTElHSFQgVVAgQU5EIEhPUklaT05UQUxcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDE5NCxcbiAgICBcInN5bWJvbFwiOiBcIuKUrFwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgTElHSFQgRE9XTiBBTkQgSE9SSVpPTlRBTFwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTk1LFxuICAgIFwic3ltYm9sXCI6IFwi4pScXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBMSUdIVCBWRVJUSUNBTCBBTkQgUklHSFRcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDE5NixcbiAgICBcInN5bWJvbFwiOiBcIuKUgFwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgTElHSFQgSE9SSVpPTlRBTFwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTk3LFxuICAgIFwic3ltYm9sXCI6IFwi4pS8XCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBMSUdIVCBWRVJUSUNBTCBBTkQgSE9SSVpPTlRBTFwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTk4LFxuICAgIFwic3ltYm9sXCI6IFwi4pWeXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBWRVJUSUNBTCBTSU5HTEUgQU5EIFJJR0hUIERPVUJMRVwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMTk5LFxuICAgIFwic3ltYm9sXCI6IFwi4pWfXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBWRVJUSUNBTCBET1VCTEUgQU5EIFJJR0hUIFNJTkdMRVwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMjAwLFxuICAgIFwic3ltYm9sXCI6IFwi4pWaXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBET1VCTEUgVVAgQU5EIFJJR0hUXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAyMDEsXG4gICAgXCJzeW1ib2xcIjogXCLilZRcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIERPVUJMRSBET1dOIEFORCBSSUdIVFwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMjAyLFxuICAgIFwic3ltYm9sXCI6IFwi4pWpXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBET1VCTEUgVVAgQU5EIEhPUklaT05UQUxcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDIwMyxcbiAgICBcInN5bWJvbFwiOiBcIuKVplwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgRE9VQkxFIERPV04gQU5EIEhPUklaT05UQUxcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDIwNCxcbiAgICBcInN5bWJvbFwiOiBcIuKVoFwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgRE9VQkxFIFZFUlRJQ0FMIEFORCBSSUdIVFwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMjA1LFxuICAgIFwic3ltYm9sXCI6IFwi4pWQXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBET1VCTEUgSE9SSVpPTlRBTFwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMjA2LFxuICAgIFwic3ltYm9sXCI6IFwi4pWsXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBET1VCTEUgVkVSVElDQUwgQU5EIEhPUklaT05UQUxcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDIwNyxcbiAgICBcInN5bWJvbFwiOiBcIuKVp1wiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgVVAgU0lOR0xFIEFORCBIT1JJWk9OVEFMIERPVUJMRVwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMjA4LFxuICAgIFwic3ltYm9sXCI6IFwi4pWoXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBVUCBET1VCTEUgQU5EIEhPUklaT05UQUwgU0lOR0xFXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAyMDksXG4gICAgXCJzeW1ib2xcIjogXCLilaRcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIERPV04gU0lOR0xFIEFORCBIT1JJWk9OVEFMIERPVUJMRVwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMjEwLFxuICAgIFwic3ltYm9sXCI6IFwi4pWlXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBET1dOIERPVUJMRSBBTkQgSE9SSVpPTlRBTCBTSU5HTEVcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDIxMSxcbiAgICBcInN5bWJvbFwiOiBcIuKVmVwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgVVAgRE9VQkxFIEFORCBSSUdIVCBTSU5HTEVcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDIxMixcbiAgICBcInN5bWJvbFwiOiBcIuKVmFwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgVVAgU0lOR0xFIEFORCBSSUdIVCBET1VCTEVcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDIxMyxcbiAgICBcInN5bWJvbFwiOiBcIuKVklwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgRE9XTiBTSU5HTEUgQU5EIFJJR0hUIERPVUJMRVwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMjE0LFxuICAgIFwic3ltYm9sXCI6IFwi4pWTXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBET1dOIERPVUJMRSBBTkQgUklHSFQgU0lOR0xFXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAyMTUsXG4gICAgXCJzeW1ib2xcIjogXCLilatcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIFZFUlRJQ0FMIERPVUJMRSBBTkQgSE9SSVpPTlRBTCBTSU5HTEVcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDIxNixcbiAgICBcInN5bWJvbFwiOiBcIuKVqlwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgVkVSVElDQUwgU0lOR0xFIEFORCBIT1JJWk9OVEFMIERPVUJMRVwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMjE3LFxuICAgIFwic3ltYm9sXCI6IFwi4pSYXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBMSUdIVCBVUCBBTkQgTEVGVFwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMjE4LFxuICAgIFwic3ltYm9sXCI6IFwi4pSMXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBMSUdIVCBET1dOIEFORCBSSUdIVFwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMjE5LFxuICAgIFwic3ltYm9sXCI6IFwi4paIXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkZVTEwgQkxPQ0tcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDIyMCxcbiAgICBcInN5bWJvbFwiOiBcIuKWhFwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMT1dFUiBIQUxGIEJMT0NLXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAyMjEsXG4gICAgXCJzeW1ib2xcIjogXCLiloxcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEVGVCBIQUxGIEJMT0NLXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAyMjIsXG4gICAgXCJzeW1ib2xcIjogXCLilpBcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiUklHSFQgSEFMRiBCTE9DS1wiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMjIzLFxuICAgIFwic3ltYm9sXCI6IFwi4paAXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIlVQUEVSIEhBTEYgQkxPQ0tcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDIyNCxcbiAgICBcInN5bWJvbFwiOiBcIs6xXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkdSRUVLIFNNQUxMIExFVFRFUiBBTFBIQVwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMjI1LFxuICAgIFwic3ltYm9sXCI6IFwiw59cIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIFNIQVJQIFNcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDIyNixcbiAgICBcInN5bWJvbFwiOiBcIs6TXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkdSRUVLIENBUElUQUwgTEVUVEVSIEdBTU1BXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAyMjcsXG4gICAgXCJzeW1ib2xcIjogXCLPgFwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJHUkVFSyBTTUFMTCBMRVRURVIgUElcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDIyOCxcbiAgICBcInN5bWJvbFwiOiBcIs6jXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkdSRUVLIENBUElUQUwgTEVUVEVSIFNJR01BXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAyMjksXG4gICAgXCJzeW1ib2xcIjogXCLPg1wiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJHUkVFSyBTTUFMTCBMRVRURVIgU0lHTUFcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDIzMCxcbiAgICBcInN5bWJvbFwiOiBcIsK1XCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIk1JQ1JPIFNJR05cIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDIzMSxcbiAgICBcInN5bWJvbFwiOiBcIs+EXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkdSRUVLIFNNQUxMIExFVFRFUiBUQVVcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDIzMixcbiAgICBcInN5bWJvbFwiOiBcIs6mXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkdSRUVLIENBUElUQUwgTEVUVEVSIFBISVwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMjMzLFxuICAgIFwic3ltYm9sXCI6IFwizphcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiR1JFRUsgQ0FQSVRBTCBMRVRURVIgVEhFVEFcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDIzNCxcbiAgICBcInN5bWJvbFwiOiBcIs6pXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkdSRUVLIENBUElUQUwgTEVUVEVSIE9NRUdBXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAyMzUsXG4gICAgXCJzeW1ib2xcIjogXCLOtFwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJHUkVFSyBTTUFMTCBMRVRURVIgREVMVEFcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDIzNixcbiAgICBcInN5bWJvbFwiOiBcIuKInlwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJJTkZJTklUWVwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMjM3LFxuICAgIFwic3ltYm9sXCI6IFwiz4ZcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiR1JFRUsgU01BTEwgTEVUVEVSIFBISVwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMjM4LFxuICAgIFwic3ltYm9sXCI6IFwizrVcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiR1JFRUsgU01BTEwgTEVUVEVSIEVQU0lMT05cIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDIzOSxcbiAgICBcInN5bWJvbFwiOiBcIuKIqVwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJJTlRFUlNFQ1RJT05cIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDI0MCxcbiAgICBcInN5bWJvbFwiOiBcIuKJoVwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJJREVOVElDQUwgVE9cIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDI0MSxcbiAgICBcInN5bWJvbFwiOiBcIsKxXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIlBMVVMtTUlOVVMgU0lHTlwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMjQyLFxuICAgIFwic3ltYm9sXCI6IFwi4omlXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkdSRUFURVItVEhBTiBPUiBFUVVBTCBUT1wiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMjQzLFxuICAgIFwic3ltYm9sXCI6IFwi4omkXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkxFU1MtVEhBTiBPUiBFUVVBTCBUT1wiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMjQ0LFxuICAgIFwic3ltYm9sXCI6IFwi4oygXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIlRPUCBIQUxGIElOVEVHUkFMXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAyNDUsXG4gICAgXCJzeW1ib2xcIjogXCLijKFcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9UVE9NIEhBTEYgSU5URUdSQUxcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDI0NixcbiAgICBcInN5bWJvbFwiOiBcIsO3XCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkRJVklTSU9OIFNJR05cIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDI0NyxcbiAgICBcInN5bWJvbFwiOiBcIuKJiFwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJBTE1PU1QgRVFVQUwgVE9cIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDI0OCxcbiAgICBcInN5bWJvbFwiOiBcIsKwXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkRFR1JFRSBTSUdOXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAyNDksXG4gICAgXCJzeW1ib2xcIjogXCLiiJlcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiQlVMTEVUIE9QRVJBVE9SXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAyNTAsXG4gICAgXCJzeW1ib2xcIjogXCLCt1wiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJNSURETEUgRE9UXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAyNTEsXG4gICAgXCJzeW1ib2xcIjogXCLiiJpcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiU1FVQVJFIFJPT1RcIlxuICB9LFxuICB7XG4gICAgXCJjb2RlbnVtYmVyXCI6IDI1MixcbiAgICBcInN5bWJvbFwiOiBcIuKBv1wiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJTVVBFUlNDUklQVCBMQVRJTiBTTUFMTCBMRVRURVIgTlwiXG4gIH0sXG4gIHtcbiAgICBcImNvZGVudW1iZXJcIjogMjUzLFxuICAgIFwic3ltYm9sXCI6IFwiwrJcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiU1VQRVJTQ1JJUFQgVFdPXCJcbiAgfSxcbiAge1xuICAgIFwiY29kZW51bWJlclwiOiAyNTQsXG4gICAgXCJzeW1ib2xcIjogXCLilqBcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiQkxBQ0sgU1FVQVJFXCJcbiAgfVxuXSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcmV0cm9saWIudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=