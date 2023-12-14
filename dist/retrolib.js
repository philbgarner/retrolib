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
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/FontData.ts":
/*!*********************************!*\
  !*** ./src/modules/FontData.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Helper class to store font data.
 */
var FontData = /** @class */ (function () {
    function FontData() {
    }
    return FontData;
}());
exports["default"] = FontData;


/***/ }),

/***/ "./src/modules/Glyph.ts":
/*!******************************!*\
  !*** ./src/modules/Glyph.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Helper class to store Glyph (font symbol/codenumber and image Rect location).
 */
var Glyph = /** @class */ (function () {
    function Glyph() {
    }
    return Glyph;
}());
exports["default"] = Glyph;


/***/ }),

/***/ "./src/modules/ImageDefinition.ts":
/*!****************************************!*\
  !*** ./src/modules/ImageDefinition.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Helper class to store images aand deserialize them from JSON.
 */
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


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Helper class to store music tracks and deserialize them from JSON.
 */
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


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Helper class to store sound effects and deserialize them from JSON.
 */
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

/***/ "./src/modules/codepage.ts":
/*!*********************************!*\
  !*** ./src/modules/codepage.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var codePage = [
    {
        "codenumber": 0,
        "symbol": String.fromCharCode(parseInt('\u0000', 16)),
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "NULL CHAR"
    },
    {
        "codenumber": 1,
        "symbol": String.fromCharCode(parseInt('\u0001', 16)),
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "START OF HEADING"
    },
    {
        "codenumber": 2,
        "symbol": String.fromCharCode(parseInt('\u0002', 16)),
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "START OF TEXT"
    },
    {
        "codenumber": 3,
        "symbol": String.fromCharCode(parseInt('\u0003', 16)),
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "END OF TEXT"
    },
    {
        "codenumber": 4,
        "symbol": String.fromCharCode(parseInt('\u0004', 16)),
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "END OF TRANSMISSION"
    },
    {
        "codenumber": 5,
        "symbol": String.fromCharCode(parseInt('\u0005', 16)),
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "ENQUIRY"
    },
    {
        "codenumber": 6,
        "symbol": String.fromCharCode(parseInt('\u0006', 16)),
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "ACKNOWLEDGMENT"
    },
    {
        "codenumber": 7,
        "symbol": String.fromCharCode(parseInt('\u0007', 16)),
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "BELL"
    },
    {
        "codenumber": 8,
        "symbol": String.fromCharCode(parseInt('\u0008', 16)),
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "BACK SPACE"
    },
    {
        "codenumber": 9,
        "symbol": String.fromCharCode(parseInt('\u0009', 16)),
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "HORIZONTAL TAB"
    },
    {
        "codenumber": 10,
        "symbol": String.fromCharCode(parseInt('\u000A', 16)),
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LINE FEED"
    },
    {
        "codenumber": 11,
        "symbol": String.fromCharCode(parseInt('\u000B', 16)),
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "VERTICAL TAB"
    },
    {
        "codenumber": 12,
        "symbol": String.fromCharCode(parseInt('\u000C', 16)),
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "FORM FEED"
    },
    {
        "codenumber": 13,
        "symbol": String.fromCharCode(parseInt('\u000D', 16)),
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "CARRIAGE RETURN"
    },
    {
        "codenumber": 14,
        "symbol": String.fromCharCode(parseInt('\u000E', 16)),
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "SHIFT OUT / X-ON"
    },
    {
        "codenumber": 15,
        "symbol": String.fromCharCode(parseInt('\u000F', 16)),
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "SHIFT IN / X-OFF"
    },
    {
        "codenumber": 16,
        "symbol": String.fromCharCode(parseInt('\u0010', 16)),
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "DATA LINE ESCAPE"
    },
    {
        "codenumber": 17,
        "symbol": String.fromCharCode(parseInt('\u0011', 16)),
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "DEVICE CONTROL 1 (OFT. XON)"
    },
    {
        "codenumber": 18,
        "symbol": String.fromCharCode(parseInt('\u0012', 16)),
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "DEVICE CONTROL 2"
    },
    {
        "codenumber": 19,
        "symbol": String.fromCharCode(parseInt('\u0013', 16)),
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "DEVICE CONTROL 3 (OFT. XOFF)"
    },
    {
        "codenumber": 20,
        "symbol": String.fromCharCode(parseInt('\u0014', 16)),
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "DEVICE CONTROL 4"
    },
    {
        "codenumber": 21,
        "symbol": String.fromCharCode(parseInt('\u0015', 16)),
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "NEGATIVE ACKNOWLEDGEMENT"
    },
    {
        "codenumber": 22,
        "symbol": String.fromCharCode(parseInt('\u0016', 16)),
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "SYNCHRONOUS IDLE"
    },
    {
        "codenumber": 23,
        "symbol": String.fromCharCode(parseInt('\u0017', 16)),
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "END OF TRANSMIT BLOCK"
    },
    {
        "codenumber": 24,
        "symbol": String.fromCharCode(parseInt('\u0018', 16)),
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "CANCEL"
    },
    {
        "codenumber": 25,
        "symbol": String.fromCharCode(parseInt('\u0019', 16)),
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "END OF MEDIUM"
    },
    {
        "codenumber": 26,
        "symbol": String.fromCharCode(parseInt('\u001A', 16)),
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "SUBSTITUTE"
    },
    {
        "codenumber": 27,
        "symbol": String.fromCharCode(parseInt('\u001B', 16)),
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "ESCAPE"
    },
    {
        "codenumber": 28,
        "symbol": String.fromCharCode(parseInt('\u001C', 16)),
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "FILE SEPARATOR"
    },
    {
        "codenumber": 29,
        "symbol": String.fromCharCode(parseInt('\u001D', 16)),
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "GROUP SEPARATOR"
    },
    {
        "codenumber": 30,
        "symbol": String.fromCharCode(parseInt('\u001E', 16)),
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "RECORD SEPARATOR"
    },
    {
        "codenumber": 31,
        "symbol": String.fromCharCode(parseInt('\u001F', 16)),
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "UNIT SEPARATOR"
    },
    {
        "codenumber": 32,
        "symbol": " ",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "SPACE"
    },
    {
        "codenumber": 33,
        "symbol": "!",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "EXCLAMATION MARK"
    },
    {
        "codenumber": 34,
        "symbol": "\"",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "QUOTATION MARK"
    },
    {
        "codenumber": 35,
        "symbol": "#",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "NUMBER SIGN"
    },
    {
        "codenumber": 36,
        "symbol": "$",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "DOLLAR SIGN"
    },
    {
        "codenumber": 37,
        "symbol": "%",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "PERCENT SIGN"
    },
    {
        "codenumber": 38,
        "symbol": "&",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "AMPERSAND"
    },
    {
        "codenumber": 39,
        "symbol": "'",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "APOSTROPHE"
    },
    {
        "codenumber": 40,
        "symbol": "(",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LEFT PARENTHESIS"
    },
    {
        "codenumber": 41,
        "symbol": ")",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "RIGHT PARENTHESIS"
    },
    {
        "codenumber": 42,
        "symbol": "*",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "ASTERISK"
    },
    {
        "codenumber": 43,
        "symbol": "+",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "PLUS SIGN"
    },
    {
        "codenumber": 44,
        "symbol": ",",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "COMMA"
    },
    {
        "codenumber": 45,
        "symbol": "-",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "HYPHEN-MINUS"
    },
    {
        "codenumber": 46,
        "symbol": ".",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "FULL STOP"
    },
    {
        "codenumber": 47,
        "symbol": "/",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "SOLIDUS"
    },
    {
        "codenumber": 48,
        "symbol": "0",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "DIGIT ZERO"
    },
    {
        "codenumber": 49,
        "symbol": "1",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "DIGIT ONE"
    },
    {
        "codenumber": 50,
        "symbol": "2",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "DIGIT TWO"
    },
    {
        "codenumber": 51,
        "symbol": "3",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "DIGIT THREE"
    },
    {
        "codenumber": 52,
        "symbol": "4",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "DIGIT FOUR"
    },
    {
        "codenumber": 53,
        "symbol": "5",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "DIGIT FIVE"
    },
    {
        "codenumber": 54,
        "symbol": "6",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "DIGIT SIX"
    },
    {
        "codenumber": 55,
        "symbol": "7",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "DIGIT SEVEN"
    },
    {
        "codenumber": 56,
        "symbol": "8",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "DIGIT EIGHT"
    },
    {
        "codenumber": 57,
        "symbol": "9",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "DIGIT NINE"
    },
    {
        "codenumber": 58,
        "symbol": ":",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "COLON"
    },
    {
        "codenumber": 59,
        "symbol": ";",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "SEMICOLON"
    },
    {
        "codenumber": 60,
        "symbol": "<",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LESS-THAN SIGN"
    },
    {
        "codenumber": 61,
        "symbol": "=",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "EQUALS SIGN"
    },
    {
        "codenumber": 62,
        "symbol": ">",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "GREATER-THAN SIGN"
    },
    {
        "codenumber": 63,
        "symbol": "?",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "QUESTION MARK"
    },
    {
        "codenumber": 64,
        "symbol": "@",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "COMMERCIAL AT"
    },
    {
        "codenumber": 65,
        "symbol": "A",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN CAPITAL LETTER A"
    },
    {
        "codenumber": 66,
        "symbol": "B",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN CAPITAL LETTER B"
    },
    {
        "codenumber": 67,
        "symbol": "C",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN CAPITAL LETTER C"
    },
    {
        "codenumber": 68,
        "symbol": "D",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN CAPITAL LETTER D"
    },
    {
        "codenumber": 69,
        "symbol": "E",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN CAPITAL LETTER E"
    },
    {
        "codenumber": 70,
        "symbol": "F",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN CAPITAL LETTER F"
    },
    {
        "codenumber": 71,
        "symbol": "G",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN CAPITAL LETTER G"
    },
    {
        "codenumber": 72,
        "symbol": "H",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN CAPITAL LETTER H"
    },
    {
        "codenumber": 73,
        "symbol": "I",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN CAPITAL LETTER I"
    },
    {
        "codenumber": 74,
        "symbol": "J",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN CAPITAL LETTER J"
    },
    {
        "codenumber": 75,
        "symbol": "K",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN CAPITAL LETTER K"
    },
    {
        "codenumber": 76,
        "symbol": "L",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN CAPITAL LETTER L"
    },
    {
        "codenumber": 77,
        "symbol": "M",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN CAPITAL LETTER M"
    },
    {
        "codenumber": 78,
        "symbol": "N",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN CAPITAL LETTER N"
    },
    {
        "codenumber": 79,
        "symbol": "O",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN CAPITAL LETTER O"
    },
    {
        "codenumber": 80,
        "symbol": "P",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN CAPITAL LETTER P"
    },
    {
        "codenumber": 81,
        "symbol": "Q",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN CAPITAL LETTER Q"
    },
    {
        "codenumber": 82,
        "symbol": "R",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN CAPITAL LETTER R"
    },
    {
        "codenumber": 83,
        "symbol": "S",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN CAPITAL LETTER S"
    },
    {
        "codenumber": 84,
        "symbol": "T",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN CAPITAL LETTER T"
    },
    {
        "codenumber": 85,
        "symbol": "U",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN CAPITAL LETTER U"
    },
    {
        "codenumber": 86,
        "symbol": "V",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN CAPITAL LETTER V"
    },
    {
        "codenumber": 87,
        "symbol": "W",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN CAPITAL LETTER W"
    },
    {
        "codenumber": 88,
        "symbol": "X",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN CAPITAL LETTER X"
    },
    {
        "codenumber": 89,
        "symbol": "Y",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN CAPITAL LETTER Y"
    },
    {
        "codenumber": 90,
        "symbol": "Z",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN CAPITAL LETTER Z"
    },
    {
        "codenumber": 91,
        "symbol": "[",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LEFT SQUARE BRACKET"
    },
    {
        "codenumber": 92,
        "symbol": "",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "REVERSE SOLIDUS"
    },
    {
        "codenumber": 93,
        "symbol": "]",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "RIGHT SQUARE BRACKET"
    },
    {
        "codenumber": 94,
        "symbol": "^",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "CIRCUMFLEX ACCENT"
    },
    {
        "codenumber": 95,
        "symbol": "_",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LOW LINE"
    },
    {
        "codenumber": 96,
        "symbol": "`",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "GRAVE ACCENT"
    },
    {
        "codenumber": 97,
        "symbol": "a",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER A"
    },
    {
        "codenumber": 98,
        "symbol": "b",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER B"
    },
    {
        "codenumber": 99,
        "symbol": "c",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER C"
    },
    {
        "codenumber": 100,
        "symbol": "d",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER D"
    },
    {
        "codenumber": 101,
        "symbol": "e",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER E"
    },
    {
        "codenumber": 102,
        "symbol": "f",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER F"
    },
    {
        "codenumber": 103,
        "symbol": "g",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER G"
    },
    {
        "codenumber": 104,
        "symbol": "h",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER H"
    },
    {
        "codenumber": 105,
        "symbol": "i",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER I"
    },
    {
        "codenumber": 106,
        "symbol": "j",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER J"
    },
    {
        "codenumber": 107,
        "symbol": "k",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER K"
    },
    {
        "codenumber": 108,
        "symbol": "l",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER L"
    },
    {
        "codenumber": 109,
        "symbol": "m",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER M"
    },
    {
        "codenumber": 110,
        "symbol": "n",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER N"
    },
    {
        "codenumber": 111,
        "symbol": "o",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER O"
    },
    {
        "codenumber": 112,
        "symbol": "p",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER P"
    },
    {
        "codenumber": 113,
        "symbol": "q",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER Q"
    },
    {
        "codenumber": 114,
        "symbol": "r",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER R"
    },
    {
        "codenumber": 115,
        "symbol": "s",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER S"
    },
    {
        "codenumber": 116,
        "symbol": "t",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER T"
    },
    {
        "codenumber": 117,
        "symbol": "u",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER U"
    },
    {
        "codenumber": 118,
        "symbol": "v",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER V"
    },
    {
        "codenumber": 119,
        "symbol": "w",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER W"
    },
    {
        "codenumber": 120,
        "symbol": "x",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER X"
    },
    {
        "codenumber": 121,
        "symbol": "y",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER Y"
    },
    {
        "codenumber": 122,
        "symbol": "z",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER Z"
    },
    {
        "codenumber": 123,
        "symbol": "{",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LEFT CURLY BRACKET"
    },
    {
        "codenumber": 124,
        "symbol": "|",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "VERTICAL LINE"
    },
    {
        "codenumber": 125,
        "symbol": "}",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "RIGHT CURLY BRACKET"
    },
    {
        "codenumber": 126,
        "symbol": "~",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "TILDE"
    },
    {
        "codenumber": 127,
        "symbol": String.fromCharCode(parseInt('\u007F', 16)),
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "DELETE"
    },
    {
        "codenumber": 128,
        "symbol": "Ç",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN CAPITAL LETTER C WITH CEDILLA"
    },
    {
        "codenumber": 129,
        "symbol": "ü",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER U WITH DIAERESIS"
    },
    {
        "codenumber": 130,
        "symbol": "é",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER E WITH ACUTE"
    },
    {
        "codenumber": 131,
        "symbol": "â",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER A WITH CIRCUMFLEX"
    },
    {
        "codenumber": 132,
        "symbol": "ä",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER A WITH DIAERESIS"
    },
    {
        "codenumber": 133,
        "symbol": "à",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER A WITH GRAVE"
    },
    {
        "codenumber": 134,
        "symbol": "å",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER A WITH RING ABOVE"
    },
    {
        "codenumber": 135,
        "symbol": "ç",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER C WITH CEDILLA"
    },
    {
        "codenumber": 136,
        "symbol": "ê",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER E WITH CIRCUMFLEX"
    },
    {
        "codenumber": 137,
        "symbol": "ë",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER E WITH DIAERESIS"
    },
    {
        "codenumber": 138,
        "symbol": "è",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER E WITH GRAVE"
    },
    {
        "codenumber": 139,
        "symbol": "ï",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER I WITH DIAERESIS"
    },
    {
        "codenumber": 140,
        "symbol": "î",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER I WITH CIRCUMFLEX"
    },
    {
        "codenumber": 141,
        "symbol": "ì",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER I WITH GRAVE"
    },
    {
        "codenumber": 142,
        "symbol": "Ä",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN CAPITAL LETTER A WITH DIAERESIS"
    },
    {
        "codenumber": 143,
        "symbol": "Å",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN CAPITAL LETTER A WITH RING ABOVE"
    },
    {
        "codenumber": 144,
        "symbol": "É",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN CAPITAL LETTER E WITH ACUTE"
    },
    {
        "codenumber": 145,
        "symbol": "æ",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER AE"
    },
    {
        "codenumber": 146,
        "symbol": "Æ",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN CAPITAL LETTER AE"
    },
    {
        "codenumber": 147,
        "symbol": "ô",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER O WITH CIRCUMFLEX"
    },
    {
        "codenumber": 148,
        "symbol": "ö",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER O WITH DIAERESIS"
    },
    {
        "codenumber": 149,
        "symbol": "ò",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER O WITH GRAVE"
    },
    {
        "codenumber": 150,
        "symbol": "û",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER U WITH CIRCUMFLEX"
    },
    {
        "codenumber": 151,
        "symbol": "ù",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER U WITH GRAVE"
    },
    {
        "codenumber": 152,
        "symbol": "ÿ",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER Y WITH DIAERESIS"
    },
    {
        "codenumber": 153,
        "symbol": "Ö",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN CAPITAL LETTER O WITH DIAERESIS"
    },
    {
        "codenumber": 154,
        "symbol": "Ü",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN CAPITAL LETTER U WITH DIAERESIS"
    },
    {
        "codenumber": 155,
        "symbol": "¢",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "CENT SIGN"
    },
    {
        "codenumber": 156,
        "symbol": "£",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "POUND SIGN"
    },
    {
        "codenumber": 157,
        "symbol": "¥",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "YEN SIGN"
    },
    {
        "codenumber": 158,
        "symbol": "₧",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "PESETA SIGN"
    },
    {
        "codenumber": 159,
        "symbol": "ƒ",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER F WITH HOOK"
    },
    {
        "codenumber": 160,
        "symbol": "á",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER A WITH ACUTE"
    },
    {
        "codenumber": 161,
        "symbol": "í",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER I WITH ACUTE"
    },
    {
        "codenumber": 162,
        "symbol": "ó",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER O WITH ACUTE"
    },
    {
        "codenumber": 163,
        "symbol": "ú",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER U WITH ACUTE"
    },
    {
        "codenumber": 164,
        "symbol": "ñ",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER N WITH TILDE"
    },
    {
        "codenumber": 165,
        "symbol": "Ñ",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN CAPITAL LETTER N WITH TILDE"
    },
    {
        "codenumber": 166,
        "symbol": "ª",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "FEMININE ORDINAL INDICATOR"
    },
    {
        "codenumber": 167,
        "symbol": "º",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "MASCULINE ORDINAL INDICATOR"
    },
    {
        "codenumber": 168,
        "symbol": "¿",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "INVERTED QUESTION MARK"
    },
    {
        "codenumber": 169,
        "symbol": "⌐",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "REVERSED NOT SIGN"
    },
    {
        "codenumber": 170,
        "symbol": "¬",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "NOT SIGN"
    },
    {
        "codenumber": 171,
        "symbol": "½",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "VULGAR FRACTION ONE HALF"
    },
    {
        "codenumber": 172,
        "symbol": "¼",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "VULGAR FRACTION ONE QUARTER"
    },
    {
        "codenumber": 173,
        "symbol": "¡",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "INVERTED EXCLAMATION MARK"
    },
    {
        "codenumber": 174,
        "symbol": "«",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LEFT-POINTING DOUBLE ANGLE QUOTATION MARK"
    },
    {
        "codenumber": 175,
        "symbol": "»",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK"
    },
    {
        "codenumber": 176,
        "symbol": "░",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LIGHT SHADE"
    },
    {
        "codenumber": 177,
        "symbol": "▒",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "MEDIUM SHADE"
    },
    {
        "codenumber": 178,
        "symbol": "▓",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "DARK SHADE"
    },
    {
        "codenumber": 179,
        "symbol": "│",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "BOX DRAWINGS LIGHT VERTICAL"
    },
    {
        "codenumber": 180,
        "symbol": "┤",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "BOX DRAWINGS LIGHT VERTICAL AND LEFT"
    },
    {
        "codenumber": 181,
        "symbol": "╡",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "BOX DRAWINGS VERTICAL SINGLE AND LEFT DOUBLE"
    },
    {
        "codenumber": 182,
        "symbol": "╢",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "BOX DRAWINGS VERTICAL DOUBLE AND LEFT SINGLE"
    },
    {
        "codenumber": 183,
        "symbol": "╖",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "BOX DRAWINGS DOWN DOUBLE AND LEFT SINGLE"
    },
    {
        "codenumber": 184,
        "symbol": "╕",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "BOX DRAWINGS DOWN SINGLE AND LEFT DOUBLE"
    },
    {
        "codenumber": 185,
        "symbol": "╣",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "BOX DRAWINGS DOUBLE VERTICAL AND LEFT"
    },
    {
        "codenumber": 186,
        "symbol": "║",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "BOX DRAWINGS DOUBLE VERTICAL"
    },
    {
        "codenumber": 187,
        "symbol": "╗",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "BOX DRAWINGS DOUBLE DOWN AND LEFT"
    },
    {
        "codenumber": 188,
        "symbol": "╝",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "BOX DRAWINGS DOUBLE UP AND LEFT"
    },
    {
        "codenumber": 189,
        "symbol": "╜",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "BOX DRAWINGS UP DOUBLE AND LEFT SINGLE"
    },
    {
        "codenumber": 190,
        "symbol": "╛",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "BOX DRAWINGS UP SINGLE AND LEFT DOUBLE"
    },
    {
        "codenumber": 191,
        "symbol": "┐",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "BOX DRAWINGS LIGHT DOWN AND LEFT"
    },
    {
        "codenumber": 192,
        "symbol": "└",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "BOX DRAWINGS LIGHT UP AND RIGHT"
    },
    {
        "codenumber": 193,
        "symbol": "┴",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "BOX DRAWINGS LIGHT UP AND HORIZONTAL"
    },
    {
        "codenumber": 194,
        "symbol": "┬",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "BOX DRAWINGS LIGHT DOWN AND HORIZONTAL"
    },
    {
        "codenumber": 195,
        "symbol": "├",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "BOX DRAWINGS LIGHT VERTICAL AND RIGHT"
    },
    {
        "codenumber": 196,
        "symbol": "─",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "BOX DRAWINGS LIGHT HORIZONTAL"
    },
    {
        "codenumber": 197,
        "symbol": "┼",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "BOX DRAWINGS LIGHT VERTICAL AND HORIZONTAL"
    },
    {
        "codenumber": 198,
        "symbol": "╞",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "BOX DRAWINGS VERTICAL SINGLE AND RIGHT DOUBLE"
    },
    {
        "codenumber": 199,
        "symbol": "╟",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "BOX DRAWINGS VERTICAL DOUBLE AND RIGHT SINGLE"
    },
    {
        "codenumber": 200,
        "symbol": "╚",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "BOX DRAWINGS DOUBLE UP AND RIGHT"
    },
    {
        "codenumber": 201,
        "symbol": "╔",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "BOX DRAWINGS DOUBLE DOWN AND RIGHT"
    },
    {
        "codenumber": 202,
        "symbol": "╩",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "BOX DRAWINGS DOUBLE UP AND HORIZONTAL"
    },
    {
        "codenumber": 203,
        "symbol": "╦",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "BOX DRAWINGS DOUBLE DOWN AND HORIZONTAL"
    },
    {
        "codenumber": 204,
        "symbol": "╠",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "BOX DRAWINGS DOUBLE VERTICAL AND RIGHT"
    },
    {
        "codenumber": 205,
        "symbol": "═",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "BOX DRAWINGS DOUBLE HORIZONTAL"
    },
    {
        "codenumber": 206,
        "symbol": "╬",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "BOX DRAWINGS DOUBLE VERTICAL AND HORIZONTAL"
    },
    {
        "codenumber": 207,
        "symbol": "╧",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "BOX DRAWINGS UP SINGLE AND HORIZONTAL DOUBLE"
    },
    {
        "codenumber": 208,
        "symbol": "╨",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "BOX DRAWINGS UP DOUBLE AND HORIZONTAL SINGLE"
    },
    {
        "codenumber": 209,
        "symbol": "╤",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "BOX DRAWINGS DOWN SINGLE AND HORIZONTAL DOUBLE"
    },
    {
        "codenumber": 210,
        "symbol": "╥",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "BOX DRAWINGS DOWN DOUBLE AND HORIZONTAL SINGLE"
    },
    {
        "codenumber": 211,
        "symbol": "╙",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "BOX DRAWINGS UP DOUBLE AND RIGHT SINGLE"
    },
    {
        "codenumber": 212,
        "symbol": "╘",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "BOX DRAWINGS UP SINGLE AND RIGHT DOUBLE"
    },
    {
        "codenumber": 213,
        "symbol": "╒",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "BOX DRAWINGS DOWN SINGLE AND RIGHT DOUBLE"
    },
    {
        "codenumber": 214,
        "symbol": "╓",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "BOX DRAWINGS DOWN DOUBLE AND RIGHT SINGLE"
    },
    {
        "codenumber": 215,
        "symbol": "╫",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "BOX DRAWINGS VERTICAL DOUBLE AND HORIZONTAL SINGLE"
    },
    {
        "codenumber": 216,
        "symbol": "╪",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "BOX DRAWINGS VERTICAL SINGLE AND HORIZONTAL DOUBLE"
    },
    {
        "codenumber": 217,
        "symbol": "┘",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "BOX DRAWINGS LIGHT UP AND LEFT"
    },
    {
        "codenumber": 218,
        "symbol": "┌",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "BOX DRAWINGS LIGHT DOWN AND RIGHT"
    },
    {
        "codenumber": 219,
        "symbol": "█",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "FULL BLOCK"
    },
    {
        "codenumber": 220,
        "symbol": "▄",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LOWER HALF BLOCK"
    },
    {
        "codenumber": 221,
        "symbol": "▌",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LEFT HALF BLOCK"
    },
    {
        "codenumber": 222,
        "symbol": "▐",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "RIGHT HALF BLOCK"
    },
    {
        "codenumber": 223,
        "symbol": "▀",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "UPPER HALF BLOCK"
    },
    {
        "codenumber": 224,
        "symbol": "α",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "GREEK SMALL LETTER ALPHA"
    },
    {
        "codenumber": 225,
        "symbol": "ß",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LATIN SMALL LETTER SHARP S"
    },
    {
        "codenumber": 226,
        "symbol": "Γ",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "GREEK CAPITAL LETTER GAMMA"
    },
    {
        "codenumber": 227,
        "symbol": "π",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "GREEK SMALL LETTER PI"
    },
    {
        "codenumber": 228,
        "symbol": "Σ",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "GREEK CAPITAL LETTER SIGMA"
    },
    {
        "codenumber": 229,
        "symbol": "σ",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "GREEK SMALL LETTER SIGMA"
    },
    {
        "codenumber": 230,
        "symbol": "µ",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "MICRO SIGN"
    },
    {
        "codenumber": 231,
        "symbol": "τ",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "GREEK SMALL LETTER TAU"
    },
    {
        "codenumber": 232,
        "symbol": "Φ",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "GREEK CAPITAL LETTER PHI"
    },
    {
        "codenumber": 233,
        "symbol": "Θ",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "GREEK CAPITAL LETTER THETA"
    },
    {
        "codenumber": 234,
        "symbol": "Ω",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "GREEK CAPITAL LETTER OMEGA"
    },
    {
        "codenumber": 235,
        "symbol": "δ",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "GREEK SMALL LETTER DELTA"
    },
    {
        "codenumber": 236,
        "symbol": "∞",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "INFINITY"
    },
    {
        "codenumber": 237,
        "symbol": "φ",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "GREEK SMALL LETTER PHI"
    },
    {
        "codenumber": 238,
        "symbol": "ε",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "GREEK SMALL LETTER EPSILON"
    },
    {
        "codenumber": 239,
        "symbol": "∩",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "INTERSECTION"
    },
    {
        "codenumber": 240,
        "symbol": "≡",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "IDENTICAL TO"
    },
    {
        "codenumber": 241,
        "symbol": "±",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "PLUS-MINUS SIGN"
    },
    {
        "codenumber": 242,
        "symbol": "≥",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "GREATER-THAN OR EQUAL TO"
    },
    {
        "codenumber": 243,
        "symbol": "≤",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "LESS-THAN OR EQUAL TO"
    },
    {
        "codenumber": 244,
        "symbol": "⌠",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "TOP HALF INTEGRAL"
    },
    {
        "codenumber": 245,
        "symbol": "⌡",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "BOTTOM HALF INTEGRAL"
    },
    {
        "codenumber": 246,
        "symbol": "÷",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "DIVISION SIGN"
    },
    {
        "codenumber": 247,
        "symbol": "≈",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "ALMOST EQUAL TO"
    },
    {
        "codenumber": 248,
        "symbol": "°",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "DEGREE SIGN"
    },
    {
        "codenumber": 249,
        "symbol": "∙",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "BULLET OPERATOR"
    },
    {
        "codenumber": 250,
        "symbol": "·",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "MIDDLE DOT"
    },
    {
        "codenumber": 251,
        "symbol": "√",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "SQUARE ROOT"
    },
    {
        "codenumber": 252,
        "symbol": "ⁿ",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "SUPERSCRIPT LATIN SMALL LETTER N"
    },
    {
        "codenumber": 253,
        "symbol": "²",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "SUPERSCRIPT TWO"
    },
    {
        "codenumber": 254,
        "symbol": "■",
        "rect": { x: 0, y: 0, w: 0, h: 0 },
        "description": "BLACK SQUARE"
    }
];
exports["default"] = codePage;


/***/ }),

/***/ "./src/modules/font.ts":
/*!*****************************!*\
  !*** ./src/modules/font.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.drawText = exports.textWidth = exports.textHeight = exports.codepageAndBitmaptoJSON = exports.imageToBase64 = exports.hextToRgba = exports.rgbaToHex = exports.colorLerp = exports.fonts = exports.loadDefaultFonts = exports.loadFromJSON = void 0;
var FontData_1 = __importDefault(__webpack_require__(/*! ./FontData */ "./src/modules/FontData.ts"));
var default_json_1 = __importDefault(__webpack_require__(/*! ./fonts/default.json */ "./src/modules/fonts/default.json"));
var codepage_1 = __importDefault(__webpack_require__(/*! ./codepage */ "./src/modules/codepage.ts"));
var images_1 = __webpack_require__(/*! ./images */ "./src/modules/images.ts");
var fontCanvas = null;
var ctx = null;
var fontList = [];
function loadDefaultFonts() {
    var loadedFont = loadFromJSON(default_json_1.default);
    if (loadedFont) {
        fontList.push(loadedFont);
    }
}
exports.loadDefaultFonts = loadDefaultFonts;
function loadFromJSON(fontJson) {
    try {
        var fontData = Object.assign(new FontData_1.default(), fontJson);
        fontData.image = new Image();
        fontData.image.src = 'data:image/png;base64,' + fontData.imagedata;
        return fontData;
    }
    catch (e) {
        throw new Error(e);
    }
}
exports.loadFromJSON = loadFromJSON;
function fonts() {
    if (Object.keys(fontList).length === 0) {
        loadDefaultFonts();
    }
    return Object.keys(fontList).map(function (m) { return fontList[m]; });
}
exports.fonts = fonts;
function hextToRgba(hex) {
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
exports.hextToRgba = hextToRgba;
function rgbaToHex(rgb) {
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
exports.rgbaToHex = rgbaToHex;
function colorLerp(color1, color2, t) {
    return {
        r: Math.floor(color1.r + (color2.r - color1.r) * t),
        g: Math.floor(color1.g + (color2.g - color1.g) * t),
        b: Math.floor(color1.b + (color2.b - color1.b) * t),
        a: color1.a
    };
}
exports.colorLerp = colorLerp;
function imageToBase64(img, outputFormat) {
    outputFormat = outputFormat ? outputFormat : 'image/png';
    try {
        var canvas = document.createElement('canvas');
        var contx = canvas.getContext('2d');
        canvas.height = img.height;
        canvas.width = img.width;
        contx.drawImage(img, 0, 0);
        var data = canvas.toDataURL(outputFormat);
        var index = data.indexOf(';base64,') + ';base64,'.length;
        return data.slice(index);
    }
    catch (_a) {
        console.error('Cannot do this outside of the DOM yet.');
        /*
        const canvas: Canvas = createCanvas(img.width, img.height)
        const contx = canvas.getContext('2d');
        canvas.height = img.height
        canvas.width = img.width
        contx.drawImage(img, 0, 0)
        const data = canvas.toDataURL(outputFormat)
        const index = data.indexOf(';base64,') + ';base64,'.length
        return data.slice(index)*/
    }
}
exports.imageToBase64 = imageToBase64;
/**
 * Get base64 image data and build a precompiled font JSON object.
 * @param imageName
 * @param max_y
 * @param cw Character width.
 * @param ch Character height.
 * @returns
 */
function codepageAndBitmaptoJSON(imageName, max_y, cw, ch) {
    return new Promise(function (resolve, reject) {
        try {
            var sx = 0; // Source X
            var sy = 0; // Source Y
            cw = cw ? cw : 9; // Character Width
            ch = ch ? ch : 16; // Character Height
            var codepage = [];
            var imagedata = null;
            var image = new Image();
            imagedata = imageToBase64((0, images_1.getImage)(imageName));
            image.src = 'data:image/png;base64,' + imagedata;
            max_y = max_y ? max_y : image.height;
            var _loop_1 = function (code) {
                var codeitem = codepage_1.default.filter(function (f) { return f.codenumber === code; });
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
exports.codepageAndBitmaptoJSON = codepageAndBitmaptoJSON;
function textHeight(text, font) {
    if (!font && fontList.length > 0) {
        font = fontList[0];
    }
    else if (!font || fontList.length === 0) {
        throw new Error('Font parameter empty and default fonts are not loaded.');
    }
    try {
        if (text.length === 0) {
            return 0;
        }
        var txt = text.split('\n');
        return txt.length * font.cheight;
    }
    catch (_a) {
        return 0;
    }
}
exports.textHeight = textHeight;
function textWidth(text, font) {
    if (!font && fontList.length > 0) {
        font = fontList[0];
    }
    else if (!font || fontList.length === 0) {
        throw new Error('Font parameter empty and default fonts are not loaded.');
    }
    try {
        if (text.length === 0) {
            return 0;
        }
        var maxw = 0;
        var txt = text.split('\n');
        var _loop_2 = function (index) {
            var line = txt[index];
            var linewidth = 0;
            var _loop_3 = function (char) {
                var glyph = font.codepage.filter(function (f) { return f.codenumber === line.charCodeAt(char); });
                var rect = glyph.length > 0 ? glyph[0].rect : null;
                if (rect) {
                    linewidth += rect.w;
                }
                else {
                    linewidth += font.cwidth;
                }
            };
            for (var char = 0; char < line.length; char++) {
                _loop_3(char);
            }
            if (linewidth > maxw) {
                maxw = linewidth;
            }
        };
        for (var index in txt) {
            _loop_2(index);
        }
        return maxw;
    }
    catch (_a) {
        return 0;
    }
}
exports.textWidth = textWidth;
/**
 * Draws the specified text on the canvas.
 *
 * @param {HTMLCanvasElement} ctx 2d context to draw text on.
 * @param {number} x Left location for text.
 * @param {number} y Top location for text
 * @param {string} text Text to be drawn on canvas.
 * @param {ColorRGBA} color Colour to use (white if undefined).
 * @param {FontData} font Font to use (default DOS codepage 437 font if undefined).
 * @param {object} effects Any effects and parameters to apply when rendering this text.
 * @returns {Rect}
 */
/**
 * Draws the specified text on the canvas.
 * @param x Left location for text.
 * @param y Top location for text.
 * @param text Text to be drawn on canvas.
 * @param color Colour to use (white if undefined).
 * @param font Font to use (default DOS codepage 437 font if undefined).
 * @returns Rect object with the x, y, width, height of the text drawn.
 */
function drawText(x, y, text, color, font /*, effects: object*/) {
    if (typeof color === 'string') {
        color = hextToRgba(color);
    }
    if (text.length === 0) {
        return { x: x, y: y, w: 0, h: 0 };
    }
    //effects = effects ? effects : {}
    if (!font && fontList.length > 0) {
        font = fontList[0];
    }
    else if (!font || fontList.length === 0) {
        throw new Error('Font parameter empty and default fonts are not loaded.');
    }
    if (!color) {
        color = hextToRgba('#ffffffff');
    }
    if (!font || !font.codepage || !font.imagedata || !font.image || !font.cwidth || !font.cheight) {
        throw new Error('Invalid font or font not loaded.');
    }
    var textwidth = textWidth(text, font);
    var textheight = textHeight(text, font);
    if (!fontCanvas) {
        fontCanvas = document.createElement('canvas');
        fontCanvas.id = 'fontCanvas';
    }
    if (!ctx) {
        ctx = (0, images_1.getContext)();
    }
    fontCanvas.width = textwidth;
    fontCanvas.height = textheight;
    var fontctx = fontCanvas.getContext('2d');
    fontctx.clearRect(0, 0, textwidth, textheight);
    var dx = 0;
    var maxdx = 0;
    var rows = text.split('\n');
    var dy = 0;
    var _loop_4 = function (rowIndex) {
        var txt = rows[rowIndex];
        var _loop_5 = function (index) {
            var glyphs = font.codepage.filter(function (f) { return f.symbol === txt[index]; });
            var glyph = null;
            if (glyphs.length === 0) {
                glyph = font.codepage.filter(function (f) { return f.codenumber === txt[index].charCodeAt(0); });
            }
            else {
                glyph = glyphs[0];
            }
            var rect = glyph ? glyph.rect : null;
            if (rect) {
                fontctx.drawImage(font.image, rect.x, rect.y, rect.w, rect.h, dx, dy, rect.w, rect.h);
                dx += rect.w;
            }
            else {
                console.log('Error finding value in codepage for', txt[index], "(".concat(txt[index].charCodeAt(0), ")"));
            }
        };
        for (var index = 0; index < txt.length; index++) {
            _loop_5(index);
        }
        dy += font.cheight;
        if (dx > maxdx) {
            maxdx = dx;
        }
        dx = 0;
    };
    for (var rowIndex in rows) {
        _loop_4(rowIndex);
    }
    textwidth = maxdx;
    var imageData = null;
    if (textwidth > 0) {
        try {
            imageData = fontctx.getImageData(0, 0, textwidth, textheight);
        }
        catch (_a) {
            console.log('Error getting image data:', textwidth, textheight);
            return;
        }
        var pixels = imageData.data;
        for (var py = 0; py < textheight; py++) {
            for (var px = 0; px < textwidth; px++) {
                var pixel = getPixelAtRgba(pixels, px, py, textwidth);
                // if (Object.keys(effects).length > 0) {
                //     let setDefaultPixel = true
                //     if (effects.gradient && pixel && pixel.a > 0) {
                //         const vertical = effects.gradient.horizontal ? false : true
                //         const lerpT = vertical ? py / textheight : px / textwidth
                //         const gradientColour: ColorRGBA = HexToRgba(effects.gradient.color)
                //         const lerpColr: ColorRGBA = ColorLerp(color, gradientColour, lerpT)
                //         SetPixelAtRgba(pixels, lerpColr, px, py, textwidth)
                //         setDefaultPixel = false
                //     }
                //     if (pixel && pixel.a > 0 && setDefaultPixel) {
                //         SetPixelAtRgba(pixels, color, px, py, textwidth)
                //     }
                // } else {
                if (pixel && pixel.a > 0) {
                    setPixelAtRgba(pixels, color, px, py, textwidth);
                }
                // }
            }
        }
        var newImageData = new ImageData(pixels, textwidth, textheight);
        fontctx.clearRect(0, 0, textwidth, textheight);
        // if (effects.background) {
        //     ctx.fillStyle = effects.background.colour
        //     ctx.fillRect(x, y, textwidth, textheight)
        // }
        fontctx.putImageData(newImageData, 0, 0);
        ctx.drawImage(fontCanvas, 0, 0, textwidth, textheight, x, y, textwidth, textheight);
    }
    return { x: x, y: y, w: textwidth, h: textheight };
}
exports.drawText = drawText;
function setPixelAtRgba(pixels, color, x, y, pixelswidth) {
    var offset = (x + pixelswidth * y) * 4;
    if (offset < 0 || offset >= pixels.length) {
        return false;
    }
    pixels[offset] = color.r;
    pixels[offset + 1] = color.g;
    pixels[offset + 2] = color.b;
    pixels[offset + 3] = color.a;
    return true;
}
function getPixelAtRgba(pixels, x, y, pixelswidth) {
    var offset = (x + pixelswidth * y) * 4;
    if (offset < 0 || offset >= pixels.length) {
        return null;
    }
    return { r: pixels[offset], g: pixels[offset + 1], b: pixels[offset + 2], a: pixels[offset + 3] };
}


/***/ }),

/***/ "./src/modules/images.ts":
/*!*******************************!*\
  !*** ./src/modules/images.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.imageManifestFromJSON = exports.getContext = exports.drawImageCtx = exports.setContext = exports.getImages = exports.getImage = exports.drawImage = exports.loadImage = exports.loadAllImages = void 0;
var ImageDefinition_1 = __importDefault(__webpack_require__(/*! ./ImageDefinition */ "./src/modules/ImageDefinition.ts"));
var images = [];
/**
 * Populate images manifest with JSON list of definitions. Manifest is an array of objects
 * like { "name": "image id ref", "filename": "file_path/filename.ext" }
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

/***/ "./src/modules/input-gamepad.ts":
/*!**************************************!*\
  !*** ./src/modules/input-gamepad.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getAxisState = exports.getButtonState = exports.setMappedButton = exports.getMappedButtons = exports.getMappedButtonIndex = exports.getGamepads = exports.gamepadsDidUpdate = exports.onGamepadUpdated = exports.onGamepadDisconnected = exports.onGamepadConnected = exports.resetGamepadAxisMappings = exports.resetGamepadButtonMappings = exports.setGamepadDisconnected = exports.setGamepadConnected = exports.setGamepadUpdated = exports.setGamepadTimestamps = exports.resetGamepadTimestamps = exports.resetButtonsState = exports.gamepadUpdated = exports.gamepadDisconnected = exports.gamepadConnected = exports.gamepadsTimestamps = exports.axisMap = exports.buttonsMap = exports.buttonsState = void 0;
exports.buttonsMap = {};
exports.axisMap = {};
exports.gamepadsTimestamps = {};
var gamepadConnected = function () { };
exports.gamepadConnected = gamepadConnected;
var gamepadDisconnected = function () { };
exports.gamepadDisconnected = gamepadDisconnected;
var gamepadUpdated = function () { };
exports.gamepadUpdated = gamepadUpdated;
function resetButtonsState() {
    exports.buttonsState = {};
}
exports.resetButtonsState = resetButtonsState;
function resetGamepadTimestamps() {
    exports.gamepadsTimestamps = {};
}
exports.resetGamepadTimestamps = resetGamepadTimestamps;
function setGamepadTimestamps(gamepadNumber, timestamp) {
    exports.gamepadsTimestamps[gamepadNumber] = timestamp;
}
exports.setGamepadTimestamps = setGamepadTimestamps;
function setGamepadUpdated(fn) {
    exports.gamepadUpdated = fn;
}
exports.setGamepadUpdated = setGamepadUpdated;
function setGamepadConnected(fn) {
    exports.gamepadConnected = fn;
}
exports.setGamepadConnected = setGamepadConnected;
function setGamepadDisconnected(fn) {
    exports.gamepadDisconnected = fn;
}
exports.setGamepadDisconnected = setGamepadDisconnected;
/**
 * Reset button mappings to defaults.
 */
function resetGamepadButtonMappings() {
    exports.buttonsMap = { 'action': 0, 'cancel': 1 };
}
exports.resetGamepadButtonMappings = resetGamepadButtonMappings;
function resetGamepadAxisMappings() {
    exports.axisMap = { 'leftAxis': [0, 1], 'rightAxis': [3, 4], 'dPad': [6, 7], 'trigger': [2, 5] };
}
exports.resetGamepadAxisMappings = resetGamepadAxisMappings;
/**
 *
 *  Gamepad Input Functions
 *
 */
function onGamepadConnected(fn) {
    exports.gamepadConnected = fn;
}
exports.onGamepadConnected = onGamepadConnected;
function onGamepadDisconnected(fn) {
    exports.gamepadDisconnected = fn;
}
exports.onGamepadDisconnected = onGamepadDisconnected;
function onGamepadUpdated(fn) {
    exports.gamepadUpdated = fn;
}
exports.onGamepadUpdated = onGamepadUpdated;
function gamepadsDidUpdate() {
    getGamepads().forEach(function (g) {
        if (exports.gamepadsTimestamps[g.index] !== undefined && exports.gamepadsTimestamps[g.index] < g.timestamp) {
            (0, exports.gamepadUpdated)(g);
        }
        exports.gamepadsTimestamps[g.index] = g.timestamp;
    });
}
exports.gamepadsDidUpdate = gamepadsDidUpdate;
function getGamepads() {
    return navigator.getGamepads().sort(function (a, b) { return a.index - b.index; });
}
exports.getGamepads = getGamepads;
function getMappedButtonIndex(inputName) {
    return exports.buttonsMap[inputName] !== undefined ? exports.buttonsMap[inputName] : null;
}
exports.getMappedButtonIndex = getMappedButtonIndex;
function getMappedButtons() {
    var inputMap = [];
    Object.keys(exports.buttonsMap).forEach(function (key) {
        var rel = { inputName: key, button: exports.buttonsMap[key] };
        inputMap.push(rel);
    });
    return inputMap;
}
exports.getMappedButtons = getMappedButtons;
function setMappedButton(inputName, buttonIndex) {
    exports.buttonsMap[inputName] = buttonIndex;
}
exports.setMappedButton = setMappedButton;
function getButtonState(inputName) {
    var states = [];
    getGamepads().forEach(function (g) {
        var buttonIndex = getMappedButtonIndex(inputName);
        if (buttonIndex !== null) {
            var button = g.buttons[buttonIndex];
            var buttonState = { controller: g.index, inputName: inputName, value: button.value, pressed: button.pressed, touched: button.touched };
            states.push(buttonState);
        }
    });
    return states.sort(function (a, b) { return a.controller - b.controller; });
}
exports.getButtonState = getButtonState;
function getAxisState(inputName) {
    var states = [];
    getGamepads().forEach(function (g) {
        if (exports.axisMap[inputName] !== undefined) {
            var axisState = { controller: g.index, x: g.axes[exports.axisMap[inputName][0]], y: g.axes[exports.axisMap[inputName][1]] };
            states.push(axisState);
        }
    });
    return states.sort(function (a, b) { return a.controller - b.controller; });
}
exports.getAxisState = getAxisState;


/***/ }),

/***/ "./src/modules/input-keyboard.ts":
/*!***************************************!*\
  !*** ./src/modules/input-keyboard.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.keyboardRelease = exports.keyboardDown = exports.onKeyboardRelease = exports.onKeyboardDown = exports.getInputKeyState = exports.getKeyState = exports.getMappedKeys = exports.resetKeyboardMappings = exports.getMappedKey = exports.setMappedKey = exports.resetKeysState = void 0;
var input_1 = __webpack_require__(/*! ./input */ "./src/modules/input.ts");
/**
 *
 * Globals
 *
 */
var keysState = {};
var keysMap = {};
var keyboardDownHandler = function () { };
var keyboardReleaseHandler = function () { };
function resetKeysState() {
    keysState = {};
}
exports.resetKeysState = resetKeysState;
function setMappedKey(inputName, key) {
    keysMap[inputName] = key;
}
exports.setMappedKey = setMappedKey;
function getMappedKey(inputName) {
    if (keysMap[inputName]) {
        return keysMap[inputName];
    }
    return null;
}
exports.getMappedKey = getMappedKey;
/**
 *
 *  Keyboard Input Functions
 *
 */
function resetKeyboardMappings() {
    keysMap = {
        'left': 'ArrowLeft',
        'right': 'ArrowRight',
        'up': 'ArrowUp',
        'down': 'ArrowDown',
        'action': ' ',
        'cancel': 'Escape'
    };
}
exports.resetKeyboardMappings = resetKeyboardMappings;
function getMappedKeys() {
    var inputMap;
    Object.keys(keysMap).forEach(function (key) {
        var rel = { inputName: key, key: keysMap[key] };
        inputMap.push(rel);
    });
    return inputMap;
}
exports.getMappedKeys = getMappedKeys;
function getKeyState(stateKey) {
    return keysState[stateKey];
}
exports.getKeyState = getKeyState;
function getInputKeyState(inputName) {
    return getKeyState(getMappedKey(inputName));
}
exports.getInputKeyState = getInputKeyState;
function onKeyboardDown(fn) {
    keyboardDownHandler = fn;
}
exports.onKeyboardDown = onKeyboardDown;
function onKeyboardRelease(fn) {
    keyboardReleaseHandler = fn;
}
exports.onKeyboardRelease = onKeyboardRelease;
function keyboardDown(e) {
    keysState[e.key] = true;
    if (keysMap[e.key]) {
        console.log('keyboard down', e.key, keysMap[e.key], keysMap);
        (0, input_1.inputPressed)(keysMap[e.key]);
    }
    keyboardDownHandler(e);
}
exports.keyboardDown = keyboardDown;
function keyboardRelease(e) {
    keysState[e.key] = false;
    (0, input_1.inputReleased)(e.key);
    keyboardReleaseHandler(e);
}
exports.keyboardRelease = keyboardRelease;


/***/ }),

/***/ "./src/modules/input.ts":
/*!******************************!*\
  !*** ./src/modules/input.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.updateInputState = exports.axisPressed = exports.buttonPressed = exports.inputReleased = exports.inputPressed = exports.resetInputMaps = exports.initialize = exports.InputState = exports.InputType = exports.onInputPressed = exports.onInputReleased = void 0;
var scenes = __importStar(__webpack_require__(/*! ./scenes */ "./src/modules/scenes.ts"));
var gamepad = __importStar(__webpack_require__(/*! ./input-gamepad */ "./src/modules/input-gamepad.ts"));
var keyboard = __importStar(__webpack_require__(/*! ./input-keyboard */ "./src/modules/input-keyboard.ts"));
/**
 *
 * Globals
 *
 */
var onInputReleased = function () { };
exports.onInputReleased = onInputReleased;
var onInputPressed = function () { };
exports.onInputPressed = onInputPressed;
var inputMaps;
var settings = {
    axisPressedThreshold: 0
};
/**
 *
 * Enums
 *
 */
var InputType;
(function (InputType) {
    InputType[InputType["Keyboard"] = 0] = "Keyboard";
    InputType[InputType["GamepadButton"] = 1] = "GamepadButton";
    InputType[InputType["GamepadAxis"] = 2] = "GamepadAxis";
})(InputType || (exports.InputType = InputType = {}));
var InputState;
(function (InputState) {
    InputState[InputState["Released"] = 0] = "Released";
    InputState[InputState["Pressed"] = 1] = "Pressed";
    InputState[InputState["Releasing"] = 2] = "Releasing";
})(InputState || (exports.InputState = InputState = {}));
function initialize() {
    keyboard.resetKeysState();
    keyboard.resetKeyboardMappings();
    gamepad.resetGamepadButtonMappings();
    gamepad.resetGamepadAxisMappings();
    gamepad.resetButtonsState();
    inputMaps = {};
    resetInputMaps();
    gamepad.resetGamepadTimestamps();
    gamepad.setGamepadConnected(function () { });
    gamepad.setGamepadDisconnected(function () { });
    gamepad.setGamepadUpdated(function () { });
    window.removeEventListener('keydown', keyboard.keyboardDown);
    window.addEventListener('keydown', keyboard.keyboardDown);
    window.removeEventListener('keyup', keyboard.keyboardRelease);
    window.addEventListener('keyup', keyboard.keyboardRelease);
    window.ongamepadconnected = function (event) {
        gamepad.gamepadsTimestamps[event.gamepad.index] = 0;
        gamepad.gamepadConnected(event);
    };
    window.ongamepaddisconnected = function (event) {
        gamepad.gamepadDisconnected(event);
        gamepad.gamepadsTimestamps[event.gamepad.index] = undefined;
    };
    exports.onInputPressed = function (inputName) {
        console.log('pressed', inputName);
        scenes.handleInput(inputName, 1, false);
    };
    exports.onInputReleased = function (inputName) {
        console.log('released', inputName);
        scenes.handleInput(inputName, 0, true);
    };
}
exports.initialize = initialize;
/**
 * Reset button mappings to defaults.
 */
function resetInputMaps() {
    inputMaps = {
        'left': [
            { type: InputType.Keyboard, mapKey: 'ArrowLeft', axisPlane: '', axisCheckDirection: 0 },
            { type: InputType.GamepadAxis, mapKey: 'leftAxis', axisPlane: 'x', axisCheckDirection: -1 }
        ],
        'right': [
            { type: InputType.Keyboard, mapKey: 'ArrowRight', axisPlane: '', axisCheckDirection: 0 },
            { type: InputType.GamepadAxis, mapKey: 'leftAxis', axisPlane: 'x', axisCheckDirection: 1 }
        ],
        'up': [
            { type: InputType.Keyboard, mapKey: 'ArrowUp', axisPlane: '', axisCheckDirection: 0 },
            { type: InputType.GamepadAxis, mapKey: 'leftAxis', axisPlane: 'y', axisCheckDirection: -1 }
        ],
        'down': [
            { type: InputType.Keyboard, mapKey: 'ArrowDown', axisPlane: '', axisCheckDirection: 0 },
            { type: InputType.GamepadAxis, mapKey: 'leftAxis', axisPlane: 'y', axisCheckDirection: 1 }
        ],
        'action': [
            { type: InputType.Keyboard, mapKey: ' ', axisPlane: '', axisCheckDirection: 0 },
            { type: InputType.GamepadButton, mapKey: 'action', axisPlane: '', axisCheckDirection: 0 }
        ],
        'cancel': [
            { type: InputType.Keyboard, mapKey: 'Escape', axisPlane: '', axisCheckDirection: 0 },
            { type: InputType.GamepadButton, mapKey: 'cancel', axisPlane: '', axisCheckDirection: 0 }
        ],
    };
}
exports.resetInputMaps = resetInputMaps;
/**
 * Whether or not the specified button or key that maps to inputName is pressed. Not used for axes or triggers.
 * @param inputName Input name mapped to a button.
 * @param gamepadNumber
 * @returns
 */
function inputPressed(inputName, gamepadNumber) {
    gamepadNumber = gamepadNumber === undefined ? 0 : gamepadNumber;
    var inputs = [];
    Object.keys(inputMaps).filter(function (f) { return f === inputName; }).forEach(function (key) { return inputs.push.apply(inputs, inputMaps[key]); });
    var ret = false;
    inputs.forEach(function (input) {
        if (input.type === InputType.Keyboard && keyboard.getInputKeyState(inputName)) {
            ret = true;
        }
        else if (input.type === InputType.GamepadAxis && axisPressed(input.mapKey, input.axisPlane, input.axisCheckDirection, gamepadNumber)) {
            ret = true;
        }
        else if (input.type === InputType.GamepadButton && buttonPressed(input.mapKey, gamepadNumber)) {
            ret = true;
            // // Handle button state so we can fire synthetic event callbacks.
            // if (buttonsState[inputName] === undefined || buttonsState[inputName] === InputState.Released) {
            //     buttonsState[inputName] = InputState.Pressed
            //     onInputPressed(inputName, gamepadNumber)
            // }
        }
    });
    if (ret) {
        (0, exports.onInputPressed)(inputName, gamepadNumber);
    }
    return ret;
}
exports.inputPressed = inputPressed;
/**
 * Whether or not the specified button or key that maps to inputName is released. Not used for axes or triggers.
 * @param inputName Input name mapped to a button.
 * @param gamepadNumber
 * @returns
 */
function inputReleased(inputName, gamepadNumber) {
    gamepadNumber = gamepadNumber === undefined ? 0 : gamepadNumber;
    var inputs = [];
    Object.keys(inputMaps).filter(function (f) { return f === inputName; }).forEach(function (key) { return inputs.push.apply(inputs, inputMaps[key]); });
    var ret = false;
    inputs.forEach(function (input) {
        if (input.type === InputType.Keyboard && !keyboard.getInputKeyState(inputName)) {
            ret = true;
        }
        else if (input.type === InputType.GamepadAxis && !axisPressed(input.mapKey, input.axisPlane, input.axisCheckDirection, gamepadNumber)) {
            ret = true;
        }
        else if (input.type === InputType.GamepadButton && !buttonPressed(input.mapKey, gamepadNumber)) {
            ret = true;
            // Handle button state so we can fire synthetic event callbacks.
            if (gamepad.buttonsState[inputName] === undefined || gamepad.buttonsState[inputName] === InputState.Releasing) {
                gamepad.buttonsState[inputName] = InputState.Released;
                (0, exports.onInputReleased)(inputName, gamepadNumber);
            }
        }
    });
    if (ret) {
        (0, exports.onInputPressed)(inputName, gamepadNumber);
    }
    return ret;
}
exports.inputReleased = inputReleased;
function buttonPressed(inputName, gamepadNumber) {
    gamepadNumber = gamepadNumber === undefined ? 0 : gamepadNumber;
    var button = gamepad.getButtonState(inputName)[gamepadNumber];
    if (button && button.pressed) {
        return true;
    }
    return false;
}
exports.buttonPressed = buttonPressed;
function axisPressed(inputName, axisPlane, direction, gamepadNumber) {
    gamepadNumber = gamepadNumber === undefined ? 0 : gamepadNumber;
    var state = gamepad.getAxisState(inputName)[gamepadNumber];
    if (state) {
        if (direction < 0 && state[axisPlane] < 0 && state[axisPlane] <= -settings.axisPressedThreshold) {
            return true;
        }
        else if (direction > 0 && state[axisPlane] > 0 && state[axisPlane] >= settings.axisPressedThreshold) {
            return true;
        }
    }
    return false;
}
exports.axisPressed = axisPressed;
function updateInputState() {
    gamepad.getGamepads().forEach(function (g, index) {
        Object.keys(inputMaps).forEach(function (key) {
            inputPressed(key, index);
            inputReleased(key, index);
        });
    });
}
exports.updateInputState = updateInputState;


/***/ }),

/***/ "./src/modules/menu.ts":
/*!*****************************!*\
  !*** ./src/modules/menu.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MenuInputType = void 0;
var scene_1 = __importDefault(__webpack_require__(/*! ./scene */ "./src/modules/scene.ts"));
var font = __importStar(__webpack_require__(/*! ./font */ "./src/modules/font.ts"));
var menus_1 = __webpack_require__(/*! ./menus */ "./src/modules/menus.ts");
var MenuInputType;
(function (MenuInputType) {
    MenuInputType[MenuInputType["Selection"] = 0] = "Selection";
    MenuInputType[MenuInputType["Cancel"] = 1] = "Cancel";
    MenuInputType[MenuInputType["IncrementPrimary"] = 2] = "IncrementPrimary";
    MenuInputType[MenuInputType["DecrementPrimary"] = 3] = "DecrementPrimary";
    MenuInputType[MenuInputType["IncrementSecondary"] = 4] = "IncrementSecondary";
    MenuInputType[MenuInputType["DecrementSecondary"] = 5] = "DecrementSecondary";
})(MenuInputType || (exports.MenuInputType = MenuInputType = {}));
/**
 * Menu Flavour of Scenes.
 */
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    /**
     *
     * @param id Scene id.
     * @param active Whether or not the scene starts activated.
     * @param direction Layout direction.
     * @param options Menu options (items).
     */
    function Menu(id, active, direction, options) {
        var _this = this;
        var animationFrame = function (delta) {
            _this.Draw(delta);
        };
        _this = _super.call(this, id, animationFrame, active, undefined, undefined, function (event) { return console.log('event', event); }) || this;
        _this.offsetX = 0;
        _this.offsetY = 0;
        _this.selectedOption = 0;
        _this.options = options;
        _this.color = { r: 128, g: 128, b: 128, a: 255 };
        _this.selectedColor = { r: 245, g: 245, b: 245, a: 255 };
        _this.selectSpeed = 0.1;
        _this.incrementSelectionInput = direction === menus_1.LayoutDirection.TopDown ? 'down' : 'right';
        _this.decrementSelectionInput = direction === menus_1.LayoutDirection.TopDown ? 'up' : 'left';
        _this.incrementSecondaryInput = direction === menus_1.LayoutDirection.TopDown ? 'right' : 'down';
        _this.decrementSecondaryInput = direction === menus_1.LayoutDirection.TopDown ? 'left' : 'up';
        _this.actionInput = 'action';
        _this.cancelInput = 'cancel';
        _this.handleInput = function (input, amt, released) {
            console.log('menu scene handleInput', input, amt, released);
        };
        _this.onActivate = function () { };
        _this.onDeactivate = function () { };
        return _this;
    }
    /**
     * Returns the currently selected menu option.
     */
    Menu.prototype.Selected = function () {
        return this.options[Math.floor(this.selectedOption)];
    };
    /**
     * Draw the menu.
     * @param delta
     */
    // eslint-disable-next-line
    Menu.prototype.Draw = function (delta) {
        // if (input.inputPressed(this.incrementSelectionInput)) {
        //     this.selectedOption += 1 * this.selectSpeed
        //     if (this.selectedOption >= this.options.length) {
        //         this.selectedOption = 0
        //     }
        //     this.Selected().onInput(this, this.Selected(), MenuInputType.IncrementPrimary)
        // }
        // if (input.inputPressed(this.decrementSelectionInput)) {
        //     this.selectedOption += -1 * this.selectSpeed
        //     if (this.selectedOption <= 0) {
        //         this.selectedOption = this.options.length - 1
        //     }
        //     this.Selected().onInput(this, this.Selected(), MenuInputType.DecrementPrimary)
        // }
        // if (input.inputPressed(this.actionInput) && this.Selected().onInput) {
        //     this.Selected().onInput(this, this.Selected(), MenuInputType.Selection)
        // }
        // if (input.inputPressed(this.cancelInput) && this.Selected().onInput) {
        //     this.Selected().onInput(this, this.Selected(), MenuInputType.Cancel)
        // }
        // if (input.inputPressed(this.incrementSecondaryInput) && this.Selected().onInput) {
        //     this.Selected().onInput(this, this.Selected(), MenuInputType.IncrementSecondary)
        // }
        // if (input.inputPressed(this.decrementSecondaryInput) && this.Selected().onInput) {
        //     this.Selected().onInput(this, this.Selected(), MenuInputType.DecrementSecondary)
        // }
        var _this = this;
        this.options.forEach(function (option, index) {
            var colr = Math.floor(_this.selectedOption) === index ? _this.selectedColor : _this.color;
            font.drawText(option.rect.x, option.rect.y, option.text, colr);
        });
    };
    return Menu;
}(scene_1.default));
exports["default"] = Menu;


/***/ }),

/***/ "./src/modules/menus.ts":
/*!******************************!*\
  !*** ./src/modules/menus.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LayoutMenu = exports.LayoutDirection = void 0;
var rect_1 = __importDefault(__webpack_require__(/*! ./rect */ "./src/modules/rect.ts"));
var fonts = __importStar(__webpack_require__(/*! ./font */ "./src/modules/font.ts"));
var scenes = __importStar(__webpack_require__(/*! ./scenes */ "./src/modules/scenes.ts"));
var menu_1 = __importStar(__webpack_require__(/*! ./menu */ "./src/modules/menu.ts"));
var LayoutDirection;
(function (LayoutDirection) {
    LayoutDirection[LayoutDirection["TopDown"] = 0] = "TopDown";
    LayoutDirection[LayoutDirection["LeftToRight"] = 1] = "LeftToRight";
})(LayoutDirection || (exports.LayoutDirection = LayoutDirection = {}));
/**
 * Take a list of strings and create a menu with the options automatically laid out.
 * @param options Items in the menu list.
 * @param direction TopDown (row) or LeftToRight (column) layout.
 * @param margin Number of pixels to add between options.
 * @param startX Top left coordinate of starting point.
 * @param startY Top left coordinate of starting point.
 * @param extras Extra options for layout (optional).
 * @returns
 */
function LayoutMenu(id, options, direction, margin, startX, startY, nextSceneId, prevSceneId, extras) {
    var menuOptions = [];
    var dx = startX;
    var dy = startY;
    options.forEach(function (value, index) {
        var w = fonts.textWidth(value);
        var h = fonts.textHeight(value);
        if (direction === LayoutDirection.TopDown) {
            dy += h + margin;
        }
        else if (direction === LayoutDirection.LeftToRight) {
            dx += w + margin;
        }
        // Default behaviour.
        var fnInput = function (menu, option, event) {
            if (event === menu_1.MenuInputType.Selection) {
                if (scenes.hasScene(nextSceneId)) {
                    scenes.deActivateScene(id);
                    scenes.activateScene(nextSceneId);
                }
            }
            else if (event === menu_1.MenuInputType.Cancel) {
                if (scenes.hasScene(prevSceneId)) {
                    scenes.deActivateScene(id);
                    scenes.activateScene(prevSceneId);
                }
            }
        };
        if (extras) {
            // If defined in extras, go with a user-defined onInput event handler.
            if (extras.onInput) {
                fnInput = extras.onInput;
            }
        }
        menuOptions.push({ id: index.toString(), text: value, rect: new rect_1.default(dx, dy, w, h), onInput: fnInput });
    });
    return new menu_1.default(id, true, direction, menuOptions);
}
exports.LayoutMenu = LayoutMenu;


/***/ }),

/***/ "./src/modules/music.ts":
/*!******************************!*\
  !*** ./src/modules/music.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.musicManifestFromJSON = exports.isPlaying = exports.getTrack = exports.playTrack = exports.loadTrack = exports.loadAllTracks = void 0;
var MusicDefinition_1 = __importDefault(__webpack_require__(/*! ./MusicDefinition */ "./src/modules/MusicDefinition.ts"));
var sfxVolume = 0.45;
var sfxs = [];
/**
 * Populate sfx manifest with JSON list of definitions.  Manifest is an arry of
 * objects matching format { "name": "track id ref", "filename": "./file_path/filename.ext" },
 * @param json JSON representation of image definitions.
 */
function musicManifestFromJSON(json) {
    json.forEach((function (def) { return sfxs.push(MusicDefinition_1.default.fromJSON(def)); }));
}
exports.musicManifestFromJSON = musicManifestFromJSON;
/**
 * Whether or not the named track is currently playing.
 * @param name Music track asset id.
 * @returns
 */
function isPlaying(name) {
    var sf = getTrack(name);
    if (sf) {
        return !sf.paused || sf.currentTime && sf.currentTime < sf.duration;
    }
    return false;
}
exports.isPlaying = isPlaying;
/**
 * Get the named audio element.
 * @param name Music track asset id.
 * @returns
 */
function getTrack(name) {
    var sf = sfxs.filter(function (f) { return f.name === name; });
    return sf.length > 0 ? sf[0].track : null;
}
exports.getTrack = getTrack;
/**
 * Play specified track.
 * @param name Music track asset id.
 * @param onEnded Optional callback for when the track ends.
 * @returns
 */
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
/**
 * Load track from location.
 * @param filename Path to audio asset.
 * @returns
 */
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
/**
 * Load all tracks that have been loaded into the manifest.
 * @returns
 */
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

/***/ "./src/modules/rect.ts":
/*!*****************************!*\
  !*** ./src/modules/rect.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * A rectangle.
 */
var Rect = /** @class */ (function () {
    function Rect(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    return Rect;
}());
exports["default"] = Rect;


/***/ }),

/***/ "./src/modules/scene.ts":
/*!******************************!*\
  !*** ./src/modules/scene.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Scene classes know how to draw themselves with animationFrame and a handleInput callback
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
        this.id = id;
        this.animationFrame = animationFrame;
        this.active = active;
        this.onActivate = onActivate;
        this.onDeactivate = onDeactivate;
        this.handleInput = handleInput;
        this.elapsed = 0;
    }
    return Scene;
}());
exports["default"] = Scene;


/***/ }),

/***/ "./src/modules/scenes.ts":
/*!*******************************!*\
  !*** ./src/modules/scenes.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.hasScene = exports.deActivateScene = exports.activateScene = exports.addScene = exports.handleInput = exports.handleAnimationFrame = void 0;
var input = __importStar(__webpack_require__(/*! ./input */ "./src/modules/input.ts"));
var input_gamepad_1 = __webpack_require__(/*! ./input-gamepad */ "./src/modules/input-gamepad.ts");
var start = null;
var scenes = [];
function addScene(scene) {
    scenes.push(scene);
    return scene;
}
exports.addScene = addScene;
function hasScene(id) {
    return scenes.filter(function (scene) { return scene.id === id; }).length > 0;
}
exports.hasScene = hasScene;
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
    console.log('scene handle input', input);
    scenes.filter(function (f) { return f.active; }).forEach(function (scene) {
        if (scene.handleInput) {
            scene.handleInput(input, amt, released);
        }
    });
}
exports.handleInput = handleInput;
function handleAnimationFrame(timeStamp) {
    input.updateInputState();
    window.requestAnimationFrame(handleAnimationFrame);
    if (start === null) {
        start = timeStamp - 16; // If we don't do this, the first frame timestamp is too long so we fake 60fps by subtracting 16.
        // Could probably be improved.
    }
    var delta = timeStamp - start;
    start = timeStamp;
    // Check for gamepad updates, fire off 
    (0, input_gamepad_1.gamepadsDidUpdate)();
    // Run animationFrame for each active scene.
    scenes.filter(function (f) { return f.active; }).forEach(function (scene) {
        scene.elapsed += delta;
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


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sfxManifestFromJSON = exports.isPlaying = exports.getSfx = exports.playSfx = exports.loadSfx = exports.loadAllSfx = void 0;
var SfxDefinition_1 = __importDefault(__webpack_require__(/*! ./SfxDefinition */ "./src/modules/SfxDefinition.ts"));
var sfxVolume = 0.45;
var sfxs = [];
/**
 * Populate sfx manifest with JSON list of definitions. Manifest is an arry of
 * objects matching format { "name": "sfx id ref", "filename": "./file_path/filename.ext" },
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SfxDefinition = exports.MusicDefinition = exports.ImageDefinition = exports.Glyph = exports.FontData = exports.Rect = exports.Menu = exports.Scene = exports.canvasHeight = exports.canvasWidth = exports.gameCanvas = exports.setCanvasBackground = exports.initialize = exports.menus = exports.keyboard = exports.gamepad = exports.input = exports.music = exports.sfx = exports.scenes = exports.font = exports.images = void 0;
var font_1 = __webpack_require__(/*! ./modules/font */ "./src/modules/font.ts");
exports.images = __importStar(__webpack_require__(/*! ./modules/images */ "./src/modules/images.ts"));
exports.font = __importStar(__webpack_require__(/*! ./modules/font */ "./src/modules/font.ts"));
exports.scenes = __importStar(__webpack_require__(/*! ./modules/scenes */ "./src/modules/scenes.ts"));
exports.sfx = __importStar(__webpack_require__(/*! ./modules/sfx */ "./src/modules/sfx.ts"));
exports.music = __importStar(__webpack_require__(/*! ./modules/music */ "./src/modules/music.ts"));
exports.input = __importStar(__webpack_require__(/*! ./modules/input */ "./src/modules/input.ts"));
exports.gamepad = __importStar(__webpack_require__(/*! ./modules/input-gamepad */ "./src/modules/input-gamepad.ts"));
exports.keyboard = __importStar(__webpack_require__(/*! ./modules/input-keyboard */ "./src/modules/input-keyboard.ts"));
exports.menus = __importStar(__webpack_require__(/*! ./modules/menus */ "./src/modules/menus.ts"));
var rect_1 = __importDefault(__webpack_require__(/*! ./modules/rect */ "./src/modules/rect.ts"));
exports.Rect = rect_1.default;
var input = __importStar(__webpack_require__(/*! ./modules/input */ "./src/modules/input.ts"));
var scenes = __importStar(__webpack_require__(/*! ./modules/scenes */ "./src/modules/scenes.ts"));
var scene_1 = __importDefault(__webpack_require__(/*! ./modules/scene */ "./src/modules/scene.ts"));
exports.Scene = scene_1.default;
var menu_1 = __importDefault(__webpack_require__(/*! ./modules/menu */ "./src/modules/menu.ts"));
exports.Menu = menu_1.default;
var FontData_1 = __importDefault(__webpack_require__(/*! ./modules/FontData */ "./src/modules/FontData.ts"));
exports.FontData = FontData_1.default;
var Glyph_1 = __importDefault(__webpack_require__(/*! ./modules/Glyph */ "./src/modules/Glyph.ts"));
exports.Glyph = Glyph_1.default;
var ImageDefinition_1 = __importDefault(__webpack_require__(/*! ./modules/ImageDefinition */ "./src/modules/ImageDefinition.ts"));
exports.ImageDefinition = ImageDefinition_1.default;
var MusicDefinition_1 = __importDefault(__webpack_require__(/*! ./modules/MusicDefinition */ "./src/modules/MusicDefinition.ts"));
exports.MusicDefinition = MusicDefinition_1.default;
var SfxDefinition_1 = __importDefault(__webpack_require__(/*! ./modules/SfxDefinition */ "./src/modules/SfxDefinition.ts"));
exports.SfxDefinition = SfxDefinition_1.default;
var images_1 = __webpack_require__(/*! ./modules/images */ "./src/modules/images.ts");
/**
 * Canvas element to draw on.
 */
var gameCanvas = null;
exports.gameCanvas = gameCanvas;
/**
 * Canvas width (resolution x).
 */
var canvasWidth = 0;
exports.canvasWidth = canvasWidth;
/**
 * Canvas height (resolution y).
 */
var canvasHeight = 0;
exports.canvasHeight = canvasHeight;
/**
 * CSS for canvas background.
 */
var canvasBackground = 'transparent';
function resize() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    gameCanvas.style.display = 'block';
    gameCanvas.style.position = 'absolute';
    gameCanvas.style.width = width + 'px';
    gameCanvas.style.height = height + 'px';
    gameCanvas.style.top = '0px';
    gameCanvas.style.left = '0px';
    gameCanvas.style.background = canvasBackground;
    gameCanvas.style.imageRendering = 'pixelated';
}
function prependCanvas(canvasId, width, height, autoResize) {
    var canvas = document.createElement('canvas');
    canvas.id = canvasId;
    document.body.prepend(canvas);
    exports.gameCanvas = gameCanvas = canvas;
    canvas.width = width;
    canvas.height = height;
    exports.canvasWidth = canvasWidth = width;
    exports.canvasHeight = canvasHeight = height;
    if (autoResize) {
        addEventListener('resize', function () { return resize(); });
        resize();
    }
    return canvas;
}
/**
 * Set the canvas element's background value.
 * @param color CSS background for canvas element.
 */
function setCanvasBackground(color) {
    canvasBackground = color;
    if (gameCanvas) {
        gameCanvas.style.background = canvasBackground;
    }
}
exports.setCanvasBackground = setCanvasBackground;
/**
 * Initialize the retrolib engine.
 * @param canvasId Id attribute of existing canvas, or id attribute to give to created canvas element.
 * @param width X resolution.
 * @param height Y resolution.
 * @param buildCanvas Whether or not to create a canvas element.
 * @param autoResize Whether or not to autoresize the canvas to the window.
 */
function initialize(canvasId, width, height, buildCanvas, autoResize) {
    width = width ? width : 256;
    height = height ? height : 256;
    canvasId = canvasId ? canvasId : 'gamecanvas';
    if (gameCanvas === null && buildCanvas) {
        exports.gameCanvas = gameCanvas = prependCanvas(canvasId, width, height, autoResize);
    }
    else if (gameCanvas === null) {
        exports.gameCanvas = gameCanvas = document.getElementById(canvasId);
    }
    (0, images_1.setContext)(gameCanvas.getContext('2d'));
    (0, font_1.loadDefaultFonts)();
    // Register the scene controller's animation frame function with the window.
    // Now any scene objects you add with scenes.addScene() will be called as long
    // as they are active status.
    window.requestAnimationFrame(scenes.handleAnimationFrame);
    input.initialize();
}
exports.initialize = initialize;


/***/ }),

/***/ "./src/modules/fonts/default.json":
/*!****************************************!*\
  !*** ./src/modules/fonts/default.json ***!
  \****************************************/
/***/ ((module) => {

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0cm9saWIuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7QUNWYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxrQkFBZTs7Ozs7Ozs7Ozs7QUNWRjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxrQkFBZTs7Ozs7Ozs7Ozs7QUNWRjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxrQkFBZTs7Ozs7Ozs7Ozs7QUNiRjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxrQkFBZTs7Ozs7Ozs7Ozs7QUNiRjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxrQkFBZTs7Ozs7Ozs7Ozs7QUNiRjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGtCQUFlOzs7Ozs7Ozs7OztBQzkvQ0Y7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0JBQWtCO0FBQzFCO0FBQ0E7QUFDQSxRQUFRLGtCQUFrQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0lsQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmV0cm9saWIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3JldHJvbGliLy4vc3JjL21vZHVsZXMvRm9udERhdGEudHMiLCJ3ZWJwYWNrOi8vcmV0cm9saWIvLi9zcmMvbW9kdWxlcy9HbHlwaC50cyIsIndlYnBhY2s6Ly9yZXRyb2xpYi8uL3NyYy9tb2R1bGVzL0ltYWdlRGVmaW5pdGlvbi50cyIsIndlYnBhY2s6Ly9yZXRyb2xpYi8uL3NyYy9tb2R1bGVzL011c2ljRGVmaW5pdGlvbi50cyIsIndlYnBhY2s6Ly9yZXRyb2xpYi8uL3NyYy9tb2R1bGVzL1NmeERlZmluaXRpb24udHMiLCJ3ZWJwYWNrOi8vcmV0cm9saWIvLi9zcmMvbW9kdWxlcy9jb2RlcGFnZS50cyIsIndlYnBhY2s6Ly9yZXRyb2xpYi8uL3NyYy9tb2R1bGVzL2ZvbnQudHMiLCJ3ZWJwYWNrOi8vcmV0cm9saWIvLi9zcmMvbW9kdWxlcy9pbWFnZXMudHMiLCJ3ZWJwYWNrOi8vcmV0cm9saWIvLi9zcmMvbW9kdWxlcy9pbnB1dC1nYW1lcGFkLnRzIiwid2VicGFjazovL3JldHJvbGliLy4vc3JjL21vZHVsZXMvaW5wdXQta2V5Ym9hcmQudHMiLCJ3ZWJwYWNrOi8vcmV0cm9saWIvLi9zcmMvbW9kdWxlcy9pbnB1dC50cyIsIndlYnBhY2s6Ly9yZXRyb2xpYi8uL3NyYy9tb2R1bGVzL21lbnUudHMiLCJ3ZWJwYWNrOi8vcmV0cm9saWIvLi9zcmMvbW9kdWxlcy9tZW51cy50cyIsIndlYnBhY2s6Ly9yZXRyb2xpYi8uL3NyYy9tb2R1bGVzL211c2ljLnRzIiwid2VicGFjazovL3JldHJvbGliLy4vc3JjL21vZHVsZXMvcmVjdC50cyIsIndlYnBhY2s6Ly9yZXRyb2xpYi8uL3NyYy9tb2R1bGVzL3NjZW5lLnRzIiwid2VicGFjazovL3JldHJvbGliLy4vc3JjL21vZHVsZXMvc2NlbmVzLnRzIiwid2VicGFjazovL3JldHJvbGliLy4vc3JjL21vZHVsZXMvc2Z4LnRzIiwid2VicGFjazovL3JldHJvbGliLy4vc3JjL3JldHJvbGliLnRzIiwid2VicGFjazovL3JldHJvbGliL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JldHJvbGliL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmV0cm9saWIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3JldHJvbGliL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJyZXRyb2xpYlwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJyZXRyb2xpYlwiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsICgpID0+IHtcbnJldHVybiAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogSGVscGVyIGNsYXNzIHRvIHN0b3JlIGZvbnQgZGF0YS5cbiAqL1xudmFyIEZvbnREYXRhID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEZvbnREYXRhKCkge1xuICAgIH1cbiAgICByZXR1cm4gRm9udERhdGE7XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gRm9udERhdGE7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogSGVscGVyIGNsYXNzIHRvIHN0b3JlIEdseXBoIChmb250IHN5bWJvbC9jb2RlbnVtYmVyIGFuZCBpbWFnZSBSZWN0IGxvY2F0aW9uKS5cbiAqL1xudmFyIEdseXBoID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEdseXBoKCkge1xuICAgIH1cbiAgICByZXR1cm4gR2x5cGg7XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gR2x5cGg7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogSGVscGVyIGNsYXNzIHRvIHN0b3JlIGltYWdlcyBhYW5kIGRlc2VyaWFsaXplIHRoZW0gZnJvbSBKU09OLlxuICovXG52YXIgSW1hZ2VEZWZpbml0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEltYWdlRGVmaW5pdGlvbigpIHtcbiAgICB9XG4gICAgSW1hZ2VEZWZpbml0aW9uLmZyb21KU09OID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEltYWdlRGVmaW5pdGlvbigpLCBqc29uKTtcbiAgICB9O1xuICAgIHJldHVybiBJbWFnZURlZmluaXRpb247XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gSW1hZ2VEZWZpbml0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIEhlbHBlciBjbGFzcyB0byBzdG9yZSBtdXNpYyB0cmFja3MgYW5kIGRlc2VyaWFsaXplIHRoZW0gZnJvbSBKU09OLlxuICovXG52YXIgTXVzaWNEZWZpbml0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE11c2ljRGVmaW5pdGlvbigpIHtcbiAgICB9XG4gICAgTXVzaWNEZWZpbml0aW9uLmZyb21KU09OID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IE11c2ljRGVmaW5pdGlvbigpLCBqc29uKTtcbiAgICB9O1xuICAgIHJldHVybiBNdXNpY0RlZmluaXRpb247XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gTXVzaWNEZWZpbml0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIEhlbHBlciBjbGFzcyB0byBzdG9yZSBzb3VuZCBlZmZlY3RzIGFuZCBkZXNlcmlhbGl6ZSB0aGVtIGZyb20gSlNPTi5cbiAqL1xudmFyIFNmeERlZmluaXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2Z4RGVmaW5pdGlvbigpIHtcbiAgICB9XG4gICAgU2Z4RGVmaW5pdGlvbi5mcm9tSlNPTiA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBTZnhEZWZpbml0aW9uKCksIGpzb24pO1xuICAgIH07XG4gICAgcmV0dXJuIFNmeERlZmluaXRpb247XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gU2Z4RGVmaW5pdGlvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvZGVQYWdlID0gW1xuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDAsXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMDAnLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOVUxMIENIQVJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMSxcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAwMScsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNUQVJUIE9GIEhFQURJTkdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMixcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAwMicsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNUQVJUIE9GIFRFWFRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMyxcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAwMycsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkVORCBPRiBURVhUXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDQsXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMDQnLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJFTkQgT0YgVFJBTlNNSVNTSU9OXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDUsXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMDUnLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJFTlFVSVJZXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDYsXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMDYnLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBQ0tOT1dMRURHTUVOVFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA3LFxuICAgICAgICBcInN5bWJvbFwiOiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KCdcXHUwMDA3JywgMTYpKSxcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQkVMTFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA4LFxuICAgICAgICBcInN5bWJvbFwiOiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KCdcXHUwMDA4JywgMTYpKSxcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQkFDSyBTUEFDRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA5LFxuICAgICAgICBcInN5bWJvbFwiOiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KCdcXHUwMDA5JywgMTYpKSxcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiSE9SSVpPTlRBTCBUQUJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTAsXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMEEnLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMSU5FIEZFRURcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTEsXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMEInLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJWRVJUSUNBTCBUQUJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTIsXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMEMnLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJGT1JNIEZFRURcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTMsXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMEQnLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJDQVJSSUFHRSBSRVRVUk5cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTQsXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMEUnLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTSElGVCBPVVQgLyBYLU9OXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE1LFxuICAgICAgICBcInN5bWJvbFwiOiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KCdcXHUwMDBGJywgMTYpKSxcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU0hJRlQgSU4gLyBYLU9GRlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNixcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAxMCcsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRBVEEgTElORSBFU0NBUEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTcsXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMTEnLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJERVZJQ0UgQ09OVFJPTCAxIChPRlQuIFhPTilcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTgsXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMTInLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJERVZJQ0UgQ09OVFJPTCAyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE5LFxuICAgICAgICBcInN5bWJvbFwiOiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KCdcXHUwMDEzJywgMTYpKSxcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiREVWSUNFIENPTlRST0wgMyAoT0ZULiBYT0ZGKVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMCxcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAxNCcsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRFVklDRSBDT05UUk9MIDRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjEsXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMTUnLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJORUdBVElWRSBBQ0tOT1dMRURHRU1FTlRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjIsXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMTYnLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTWU5DSFJPTk9VUyBJRExFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIzLFxuICAgICAgICBcInN5bWJvbFwiOiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KCdcXHUwMDE3JywgMTYpKSxcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRU5EIE9GIFRSQU5TTUlUIEJMT0NLXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDI0LFxuICAgICAgICBcInN5bWJvbFwiOiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KCdcXHUwMDE4JywgMTYpKSxcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ0FOQ0VMXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDI1LFxuICAgICAgICBcInN5bWJvbFwiOiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KCdcXHUwMDE5JywgMTYpKSxcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRU5EIE9GIE1FRElVTVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyNixcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAxQScsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNVQlNUSVRVVEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjcsXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMUInLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJFU0NBUEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjgsXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMUMnLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJGSUxFIFNFUEFSQVRPUlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyOSxcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAxRCcsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkdST1VQIFNFUEFSQVRPUlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAzMCxcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAxRScsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlJFQ09SRCBTRVBBUkFUT1JcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMzEsXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMUYnLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJVTklUIFNFUEFSQVRPUlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAzMixcbiAgICAgICAgXCJzeW1ib2xcIjogXCIgXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNQQUNFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDMzLFxuICAgICAgICBcInN5bWJvbFwiOiBcIiFcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRVhDTEFNQVRJT04gTUFSS1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAzNCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCJcXFwiXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlFVT1RBVElPTiBNQVJLXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDM1LFxuICAgICAgICBcInN5bWJvbFwiOiBcIiNcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTlVNQkVSIFNJR05cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMzYsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiJFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJET0xMQVIgU0lHTlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAzNyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCIlXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlBFUkNFTlQgU0lHTlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAzOCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCImXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkFNUEVSU0FORFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAzOSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCInXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkFQT1NUUk9QSEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNDAsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiKFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMRUZUIFBBUkVOVEhFU0lTXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDQxLFxuICAgICAgICBcInN5bWJvbFwiOiBcIilcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUklHSFQgUEFSRU5USEVTSVNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNDIsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiKlwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBU1RFUklTS1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA0MyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCIrXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlBMVVMgU0lHTlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA0NCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCIsXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkNPTU1BXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDQ1LFxuICAgICAgICBcInN5bWJvbFwiOiBcIi1cIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiSFlQSEVOLU1JTlVTXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDQ2LFxuICAgICAgICBcInN5bWJvbFwiOiBcIi5cIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRlVMTCBTVE9QXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDQ3LFxuICAgICAgICBcInN5bWJvbFwiOiBcIi9cIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU09MSURVU1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA0OCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCIwXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRJR0lUIFpFUk9cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNDksXG4gICAgICAgIFwic3ltYm9sXCI6IFwiMVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJESUdJVCBPTkVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNTAsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiMlwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJESUdJVCBUV09cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNTEsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiM1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJESUdJVCBUSFJFRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA1MixcbiAgICAgICAgXCJzeW1ib2xcIjogXCI0XCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRJR0lUIEZPVVJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNTMsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiNVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJESUdJVCBGSVZFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDU0LFxuICAgICAgICBcInN5bWJvbFwiOiBcIjZcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRElHSVQgU0lYXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDU1LFxuICAgICAgICBcInN5bWJvbFwiOiBcIjdcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRElHSVQgU0VWRU5cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNTYsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiOFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJESUdJVCBFSUdIVFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA1NyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCI5XCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRJR0lUIE5JTkVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNTgsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiOlwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJDT0xPTlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA1OSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCI7XCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNFTUlDT0xPTlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA2MCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCI8XCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxFU1MtVEhBTiBTSUdOXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDYxLFxuICAgICAgICBcInN5bWJvbFwiOiBcIj1cIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRVFVQUxTIFNJR05cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNjIsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiPlwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJHUkVBVEVSLVRIQU4gU0lHTlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA2MyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCI/XCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlFVRVNUSU9OIE1BUktcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNjQsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiQFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJDT01NRVJDSUFMIEFUXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDY1LFxuICAgICAgICBcInN5bWJvbFwiOiBcIkFcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgQVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA2NixcbiAgICAgICAgXCJzeW1ib2xcIjogXCJCXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIEJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNjcsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiQ1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBDXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDY4LFxuICAgICAgICBcInN5bWJvbFwiOiBcIkRcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgRFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA2OSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCJFXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNzAsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiRlwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBGXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDcxLFxuICAgICAgICBcInN5bWJvbFwiOiBcIkdcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgR1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA3MixcbiAgICAgICAgXCJzeW1ib2xcIjogXCJIXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIEhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNzMsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiSVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBJXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDc0LFxuICAgICAgICBcInN5bWJvbFwiOiBcIkpcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgSlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA3NSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCJLXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIEtcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNzYsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiTFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBMXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDc3LFxuICAgICAgICBcInN5bWJvbFwiOiBcIk1cIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgTVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA3OCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCJOXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIE5cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNzksXG4gICAgICAgIFwic3ltYm9sXCI6IFwiT1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBPXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDgwLFxuICAgICAgICBcInN5bWJvbFwiOiBcIlBcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgUFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA4MSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCJRXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIFFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogODIsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiUlwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBSXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDgzLFxuICAgICAgICBcInN5bWJvbFwiOiBcIlNcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgU1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA4NCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCJUXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIFRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogODUsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiVVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBVXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDg2LFxuICAgICAgICBcInN5bWJvbFwiOiBcIlZcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgVlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA4NyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCJXXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIFdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogODgsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiWFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBYXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDg5LFxuICAgICAgICBcInN5bWJvbFwiOiBcIllcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgWVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA5MCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCJaXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIFpcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogOTEsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiW1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMRUZUIFNRVUFSRSBCUkFDS0VUXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDkyLFxuICAgICAgICBcInN5bWJvbFwiOiBcIlwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJSRVZFUlNFIFNPTElEVVNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogOTMsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiXVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJSSUdIVCBTUVVBUkUgQlJBQ0tFVFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA5NCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCJeXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkNJUkNVTUZMRVggQUNDRU5UXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDk1LFxuICAgICAgICBcInN5bWJvbFwiOiBcIl9cIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTE9XIExJTkVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogOTYsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiYFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJHUkFWRSBBQ0NFTlRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogOTcsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiYVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgQVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA5OCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCJiXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDk5LFxuICAgICAgICBcInN5bWJvbFwiOiBcImNcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIENcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTAwLFxuICAgICAgICBcInN5bWJvbFwiOiBcImRcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIERcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTAxLFxuICAgICAgICBcInN5bWJvbFwiOiBcImVcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTAyLFxuICAgICAgICBcInN5bWJvbFwiOiBcImZcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIEZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTAzLFxuICAgICAgICBcInN5bWJvbFwiOiBcImdcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIEdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTA0LFxuICAgICAgICBcInN5bWJvbFwiOiBcImhcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIEhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTA1LFxuICAgICAgICBcInN5bWJvbFwiOiBcImlcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIElcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTA2LFxuICAgICAgICBcInN5bWJvbFwiOiBcImpcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIEpcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTA3LFxuICAgICAgICBcInN5bWJvbFwiOiBcImtcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIEtcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTA4LFxuICAgICAgICBcInN5bWJvbFwiOiBcImxcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIExcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTA5LFxuICAgICAgICBcInN5bWJvbFwiOiBcIm1cIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIE1cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTEwLFxuICAgICAgICBcInN5bWJvbFwiOiBcIm5cIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIE5cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTExLFxuICAgICAgICBcInN5bWJvbFwiOiBcIm9cIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIE9cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTEyLFxuICAgICAgICBcInN5bWJvbFwiOiBcInBcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIFBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTEzLFxuICAgICAgICBcInN5bWJvbFwiOiBcInFcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIFFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTE0LFxuICAgICAgICBcInN5bWJvbFwiOiBcInJcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIFJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTE1LFxuICAgICAgICBcInN5bWJvbFwiOiBcInNcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIFNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTE2LFxuICAgICAgICBcInN5bWJvbFwiOiBcInRcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIFRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTE3LFxuICAgICAgICBcInN5bWJvbFwiOiBcInVcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIFVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTE4LFxuICAgICAgICBcInN5bWJvbFwiOiBcInZcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIFZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTE5LFxuICAgICAgICBcInN5bWJvbFwiOiBcIndcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIFdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTIwLFxuICAgICAgICBcInN5bWJvbFwiOiBcInhcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIFhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTIxLFxuICAgICAgICBcInN5bWJvbFwiOiBcInlcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIFlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTIyLFxuICAgICAgICBcInN5bWJvbFwiOiBcInpcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIFpcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTIzLFxuICAgICAgICBcInN5bWJvbFwiOiBcIntcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEVGVCBDVVJMWSBCUkFDS0VUXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDEyNCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCJ8XCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlZFUlRJQ0FMIExJTkVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTI1LFxuICAgICAgICBcInN5bWJvbFwiOiBcIn1cIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUklHSFQgQ1VSTFkgQlJBQ0tFVFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMjYsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiflwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUSUxERVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMjcsXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwN0YnLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJERUxFVEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTI4LFxuICAgICAgICBcInN5bWJvbFwiOiBcIsOHXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIEMgV0lUSCBDRURJTExBXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDEyOSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLDvFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgVSBXSVRIIERJQUVSRVNJU1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMzAsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiw6lcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIEUgV0lUSCBBQ1VURVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMzEsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiw6JcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIEEgV0lUSCBDSVJDVU1GTEVYXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDEzMixcbiAgICAgICAgXCJzeW1ib2xcIjogXCLDpFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgQSBXSVRIIERJQUVSRVNJU1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMzMsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiw6BcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIEEgV0lUSCBHUkFWRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMzQsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiw6VcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIEEgV0lUSCBSSU5HIEFCT1ZFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDEzNSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLDp1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgQyBXSVRIIENFRElMTEFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTM2LFxuICAgICAgICBcInN5bWJvbFwiOiBcIsOqXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBFIFdJVEggQ0lSQ1VNRkxFWFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMzcsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiw6tcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIEUgV0lUSCBESUFFUkVTSVNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTM4LFxuICAgICAgICBcInN5bWJvbFwiOiBcIsOoXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBFIFdJVEggR1JBVkVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTM5LFxuICAgICAgICBcInN5bWJvbFwiOiBcIsOvXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBJIFdJVEggRElBRVJFU0lTXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE0MCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLDrlwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgSSBXSVRIIENJUkNVTUZMRVhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTQxLFxuICAgICAgICBcInN5bWJvbFwiOiBcIsOsXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBJIFdJVEggR1JBVkVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTQyLFxuICAgICAgICBcInN5bWJvbFwiOiBcIsOEXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIEEgV0lUSCBESUFFUkVTSVNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTQzLFxuICAgICAgICBcInN5bWJvbFwiOiBcIsOFXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIEEgV0lUSCBSSU5HIEFCT1ZFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE0NCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLDiVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBFIFdJVEggQUNVVEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTQ1LFxuICAgICAgICBcInN5bWJvbFwiOiBcIsOmXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBBRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNDYsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiw4ZcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgQUVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTQ3LFxuICAgICAgICBcInN5bWJvbFwiOiBcIsO0XCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBPIFdJVEggQ0lSQ1VNRkxFWFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNDgsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiw7ZcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIE8gV0lUSCBESUFFUkVTSVNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTQ5LFxuICAgICAgICBcInN5bWJvbFwiOiBcIsOyXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBPIFdJVEggR1JBVkVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTUwLFxuICAgICAgICBcInN5bWJvbFwiOiBcIsO7XCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBVIFdJVEggQ0lSQ1VNRkxFWFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNTEsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiw7lcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIFUgV0lUSCBHUkFWRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNTIsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiw79cIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIFkgV0lUSCBESUFFUkVTSVNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTUzLFxuICAgICAgICBcInN5bWJvbFwiOiBcIsOWXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIE8gV0lUSCBESUFFUkVTSVNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTU0LFxuICAgICAgICBcInN5bWJvbFwiOiBcIsOcXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIFUgV0lUSCBESUFFUkVTSVNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTU1LFxuICAgICAgICBcInN5bWJvbFwiOiBcIsKiXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkNFTlQgU0lHTlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNTYsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiwqNcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUE9VTkQgU0lHTlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNTcsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiwqVcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiWUVOIFNJR05cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTU4LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKCp1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJQRVNFVEEgU0lHTlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNTksXG4gICAgICAgIFwic3ltYm9sXCI6IFwixpJcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIEYgV0lUSCBIT09LXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE2MCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLDoVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgQSBXSVRIIEFDVVRFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE2MSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLDrVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgSSBXSVRIIEFDVVRFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE2MixcbiAgICAgICAgXCJzeW1ib2xcIjogXCLDs1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgTyBXSVRIIEFDVVRFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE2MyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLDulwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgVSBXSVRIIEFDVVRFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE2NCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLDsVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgTiBXSVRIIFRJTERFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE2NSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLDkVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBOIFdJVEggVElMREVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTY2LFxuICAgICAgICBcInN5bWJvbFwiOiBcIsKqXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkZFTUlOSU5FIE9SRElOQUwgSU5ESUNBVE9SXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE2NyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLCulwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJNQVNDVUxJTkUgT1JESU5BTCBJTkRJQ0FUT1JcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTY4LFxuICAgICAgICBcInN5bWJvbFwiOiBcIsK/XCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIklOVkVSVEVEIFFVRVNUSU9OIE1BUktcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTY5LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKMkFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJSRVZFUlNFRCBOT1QgU0lHTlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNzAsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiwqxcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTk9UIFNJR05cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTcxLFxuICAgICAgICBcInN5bWJvbFwiOiBcIsK9XCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlZVTEdBUiBGUkFDVElPTiBPTkUgSEFMRlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNzIsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiwrxcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVlVMR0FSIEZSQUNUSU9OIE9ORSBRVUFSVEVSXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE3MyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLCoVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJJTlZFUlRFRCBFWENMQU1BVElPTiBNQVJLXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE3NCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLCq1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMRUZULVBPSU5USU5HIERPVUJMRSBBTkdMRSBRVU9UQVRJT04gTUFSS1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNzUsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiwrtcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUklHSFQtUE9JTlRJTkcgRE9VQkxFIEFOR0xFIFFVT1RBVElPTiBNQVJLXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE3NixcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilpFcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTElHSFQgU0hBREVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTc3LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKWklwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJNRURJVU0gU0hBREVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTc4LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKWk1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJEQVJLIFNIQURFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE3OSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilIJcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIExJR0hUIFZFUlRJQ0FMXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE4MCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilKRcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIExJR0hUIFZFUlRJQ0FMIEFORCBMRUZUXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE4MSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilaFcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIFZFUlRJQ0FMIFNJTkdMRSBBTkQgTEVGVCBET1VCTEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTgyLFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKVolwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgVkVSVElDQUwgRE9VQkxFIEFORCBMRUZUIFNJTkdMRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxODMsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4pWWXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBET1dOIERPVUJMRSBBTkQgTEVGVCBTSU5HTEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTg0LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKVlVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgRE9XTiBTSU5HTEUgQU5EIExFRlQgRE9VQkxFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE4NSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilaNcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIERPVUJMRSBWRVJUSUNBTCBBTkQgTEVGVFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxODYsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4pWRXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBET1VCTEUgVkVSVElDQUxcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTg3LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKVl1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgRE9VQkxFIERPV04gQU5EIExFRlRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTg4LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKVnVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgRE9VQkxFIFVQIEFORCBMRUZUXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE4OSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilZxcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIFVQIERPVUJMRSBBTkQgTEVGVCBTSU5HTEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTkwLFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKVm1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgVVAgU0lOR0xFIEFORCBMRUZUIERPVUJMRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxOTEsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4pSQXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBMSUdIVCBET1dOIEFORCBMRUZUXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE5MixcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilJRcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIExJR0hUIFVQIEFORCBSSUdIVFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxOTMsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4pS0XCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBMSUdIVCBVUCBBTkQgSE9SSVpPTlRBTFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxOTQsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4pSsXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBMSUdIVCBET1dOIEFORCBIT1JJWk9OVEFMXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE5NSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilJxcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIExJR0hUIFZFUlRJQ0FMIEFORCBSSUdIVFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxOTYsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4pSAXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBMSUdIVCBIT1JJWk9OVEFMXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE5NyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilLxcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIExJR0hUIFZFUlRJQ0FMIEFORCBIT1JJWk9OVEFMXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE5OCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilZ5cIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIFZFUlRJQ0FMIFNJTkdMRSBBTkQgUklHSFQgRE9VQkxFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE5OSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilZ9cIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIFZFUlRJQ0FMIERPVUJMRSBBTkQgUklHSFQgU0lOR0xFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIwMCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilZpcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIERPVUJMRSBVUCBBTkQgUklHSFRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjAxLFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKVlFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgRE9VQkxFIERPV04gQU5EIFJJR0hUXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIwMixcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilalcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIERPVUJMRSBVUCBBTkQgSE9SSVpPTlRBTFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMDMsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4pWmXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBET1VCTEUgRE9XTiBBTkQgSE9SSVpPTlRBTFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMDQsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4pWgXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBET1VCTEUgVkVSVElDQUwgQU5EIFJJR0hUXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIwNSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilZBcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIERPVUJMRSBIT1JJWk9OVEFMXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIwNixcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilaxcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIERPVUJMRSBWRVJUSUNBTCBBTkQgSE9SSVpPTlRBTFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMDcsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4pWnXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBVUCBTSU5HTEUgQU5EIEhPUklaT05UQUwgRE9VQkxFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIwOCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilahcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIFVQIERPVUJMRSBBTkQgSE9SSVpPTlRBTCBTSU5HTEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjA5LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKVpFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgRE9XTiBTSU5HTEUgQU5EIEhPUklaT05UQUwgRE9VQkxFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIxMCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilaVcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIERPV04gRE9VQkxFIEFORCBIT1JJWk9OVEFMIFNJTkdMRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMTEsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4pWZXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBVUCBET1VCTEUgQU5EIFJJR0hUIFNJTkdMRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMTIsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4pWYXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBVUCBTSU5HTEUgQU5EIFJJR0hUIERPVUJMRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMTMsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4pWSXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBET1dOIFNJTkdMRSBBTkQgUklHSFQgRE9VQkxFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIxNCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilZNcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIERPV04gRE9VQkxFIEFORCBSSUdIVCBTSU5HTEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjE1LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKVq1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgVkVSVElDQUwgRE9VQkxFIEFORCBIT1JJWk9OVEFMIFNJTkdMRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMTYsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4pWqXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBWRVJUSUNBTCBTSU5HTEUgQU5EIEhPUklaT05UQUwgRE9VQkxFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIxNyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilJhcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIExJR0hUIFVQIEFORCBMRUZUXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIxOCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilIxcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIExJR0hUIERPV04gQU5EIFJJR0hUXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIxOSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilohcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRlVMTCBCTE9DS1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMjAsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4paEXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxPV0VSIEhBTEYgQkxPQ0tcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjIxLFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKWjFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMRUZUIEhBTEYgQkxPQ0tcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjIyLFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKWkFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJSSUdIVCBIQUxGIEJMT0NLXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIyMyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLiloBcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVVBQRVIgSEFMRiBCTE9DS1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMjQsXG4gICAgICAgIFwic3ltYm9sXCI6IFwizrFcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiR1JFRUsgU01BTEwgTEVUVEVSIEFMUEhBXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIyNSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLDn1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgU0hBUlAgU1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMjYsXG4gICAgICAgIFwic3ltYm9sXCI6IFwizpNcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiR1JFRUsgQ0FQSVRBTCBMRVRURVIgR0FNTUFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjI3LFxuICAgICAgICBcInN5bWJvbFwiOiBcIs+AXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkdSRUVLIFNNQUxMIExFVFRFUiBQSVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMjgsXG4gICAgICAgIFwic3ltYm9sXCI6IFwizqNcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiR1JFRUsgQ0FQSVRBTCBMRVRURVIgU0lHTUFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjI5LFxuICAgICAgICBcInN5bWJvbFwiOiBcIs+DXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkdSRUVLIFNNQUxMIExFVFRFUiBTSUdNQVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMzAsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiwrVcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTUlDUk8gU0lHTlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMzEsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiz4RcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiR1JFRUsgU01BTEwgTEVUVEVSIFRBVVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMzIsXG4gICAgICAgIFwic3ltYm9sXCI6IFwizqZcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiR1JFRUsgQ0FQSVRBTCBMRVRURVIgUEhJXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIzMyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLOmFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJHUkVFSyBDQVBJVEFMIExFVFRFUiBUSEVUQVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMzQsXG4gICAgICAgIFwic3ltYm9sXCI6IFwizqlcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiR1JFRUsgQ0FQSVRBTCBMRVRURVIgT01FR0FcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjM1LFxuICAgICAgICBcInN5bWJvbFwiOiBcIs60XCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkdSRUVLIFNNQUxMIExFVFRFUiBERUxUQVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMzYsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4oieXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIklORklOSVRZXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIzNyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLPhlwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJHUkVFSyBTTUFMTCBMRVRURVIgUEhJXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIzOCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLOtVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJHUkVFSyBTTUFMTCBMRVRURVIgRVBTSUxPTlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMzksXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4oipXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIklOVEVSU0VDVElPTlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyNDAsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4omhXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIklERU5USUNBTCBUT1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyNDEsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiwrFcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUExVUy1NSU5VUyBTSUdOXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDI0MixcbiAgICAgICAgXCJzeW1ib2xcIjogXCLiiaVcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiR1JFQVRFUi1USEFOIE9SIEVRVUFMIFRPXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDI0MyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLiiaRcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEVTUy1USEFOIE9SIEVRVUFMIFRPXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDI0NCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLijKBcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVE9QIEhBTEYgSU5URUdSQUxcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjQ1LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKMoVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1RUT00gSEFMRiBJTlRFR1JBTFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyNDYsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiw7dcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRElWSVNJT04gU0lHTlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyNDcsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4omIXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkFMTU9TVCBFUVVBTCBUT1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyNDgsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiwrBcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiREVHUkVFIFNJR05cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjQ5LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKImVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCVUxMRVQgT1BFUkFUT1JcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjUwLFxuICAgICAgICBcInN5bWJvbFwiOiBcIsK3XCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk1JRERMRSBET1RcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjUxLFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKImlwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTUVVBUkUgUk9PVFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyNTIsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4oG/XCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNVUEVSU0NSSVBUIExBVElOIFNNQUxMIExFVFRFUiBOXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDI1MyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLCslwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTVVBFUlNDUklQVCBUV09cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjU0LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKWoFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCTEFDSyBTUVVBUkVcIlxuICAgIH1cbl07XG5leHBvcnRzLmRlZmF1bHQgPSBjb2RlUGFnZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kcmF3VGV4dCA9IGV4cG9ydHMudGV4dFdpZHRoID0gZXhwb3J0cy50ZXh0SGVpZ2h0ID0gZXhwb3J0cy5jb2RlcGFnZUFuZEJpdG1hcHRvSlNPTiA9IGV4cG9ydHMuaW1hZ2VUb0Jhc2U2NCA9IGV4cG9ydHMuaGV4dFRvUmdiYSA9IGV4cG9ydHMucmdiYVRvSGV4ID0gZXhwb3J0cy5jb2xvckxlcnAgPSBleHBvcnRzLmZvbnRzID0gZXhwb3J0cy5sb2FkRGVmYXVsdEZvbnRzID0gZXhwb3J0cy5sb2FkRnJvbUpTT04gPSB2b2lkIDA7XG52YXIgRm9udERhdGFfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Gb250RGF0YVwiKSk7XG52YXIgZGVmYXVsdF9qc29uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vZm9udHMvZGVmYXVsdC5qc29uXCIpKTtcbnZhciBjb2RlcGFnZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvZGVwYWdlXCIpKTtcbnZhciBpbWFnZXNfMSA9IHJlcXVpcmUoXCIuL2ltYWdlc1wiKTtcbnZhciBmb250Q2FudmFzID0gbnVsbDtcbnZhciBjdHggPSBudWxsO1xudmFyIGZvbnRMaXN0ID0gW107XG5mdW5jdGlvbiBsb2FkRGVmYXVsdEZvbnRzKCkge1xuICAgIHZhciBsb2FkZWRGb250ID0gbG9hZEZyb21KU09OKGRlZmF1bHRfanNvbl8xLmRlZmF1bHQpO1xuICAgIGlmIChsb2FkZWRGb250KSB7XG4gICAgICAgIGZvbnRMaXN0LnB1c2gobG9hZGVkRm9udCk7XG4gICAgfVxufVxuZXhwb3J0cy5sb2FkRGVmYXVsdEZvbnRzID0gbG9hZERlZmF1bHRGb250cztcbmZ1bmN0aW9uIGxvYWRGcm9tSlNPTihmb250SnNvbikge1xuICAgIHRyeSB7XG4gICAgICAgIHZhciBmb250RGF0YSA9IE9iamVjdC5hc3NpZ24obmV3IEZvbnREYXRhXzEuZGVmYXVsdCgpLCBmb250SnNvbik7XG4gICAgICAgIGZvbnREYXRhLmltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGZvbnREYXRhLmltYWdlLnNyYyA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsJyArIGZvbnREYXRhLmltYWdlZGF0YTtcbiAgICAgICAgcmV0dXJuIGZvbnREYXRhO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZSk7XG4gICAgfVxufVxuZXhwb3J0cy5sb2FkRnJvbUpTT04gPSBsb2FkRnJvbUpTT047XG5mdW5jdGlvbiBmb250cygpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMoZm9udExpc3QpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBsb2FkRGVmYXVsdEZvbnRzKCk7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3Qua2V5cyhmb250TGlzdCkubWFwKGZ1bmN0aW9uIChtKSB7IHJldHVybiBmb250TGlzdFttXTsgfSk7XG59XG5leHBvcnRzLmZvbnRzID0gZm9udHM7XG5mdW5jdGlvbiBoZXh0VG9SZ2JhKGhleCkge1xuICAgIGlmIChoZXgubGVuZ3RoID09PSA3KSB7XG4gICAgICAgIGhleCArPSAnZmYnO1xuICAgIH1cbiAgICBlbHNlIGlmIChoZXgubGVuZ3RoID09PSA4KSB7XG4gICAgICAgIGhleCArPSAnMCc7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XG4gICAgcmV0dXJuIHJlc3VsdCA/IHtcbiAgICAgICAgcjogcGFyc2VJbnQocmVzdWx0WzFdLCAxNiksXG4gICAgICAgIGc6IHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpLFxuICAgICAgICBiOiBwYXJzZUludChyZXN1bHRbM10sIDE2KSxcbiAgICAgICAgYTogcGFyc2VJbnQocmVzdWx0WzRdLCAxNilcbiAgICB9IDogbnVsbDtcbn1cbmV4cG9ydHMuaGV4dFRvUmdiYSA9IGhleHRUb1JnYmE7XG5mdW5jdGlvbiByZ2JhVG9IZXgocmdiKSB7XG4gICAgdmFyIHIgPSByZ2Iuci50b1N0cmluZygxNik7XG4gICAgdmFyIGcgPSByZ2IuZy50b1N0cmluZygxNik7XG4gICAgdmFyIGIgPSByZ2IuYi50b1N0cmluZygxNik7XG4gICAgdmFyIGEgPSByZ2IuYS50b1N0cmluZygxNik7XG4gICAgciA9IHIubGVuZ3RoID09PSAxID8gJzAnICsgciA6IHI7XG4gICAgZyA9IGcubGVuZ3RoID09PSAxID8gJzAnICsgZyA6IGc7XG4gICAgYiA9IGIubGVuZ3RoID09PSAxID8gJzAnICsgYiA6IGI7XG4gICAgYSA9IGEubGVuZ3RoID09PSAxID8gJzAnICsgYSA6IGE7XG4gICAgcmV0dXJuIFwiI1wiLmNvbmNhdChyKS5jb25jYXQoZykuY29uY2F0KGIpLmNvbmNhdChhKTtcbn1cbmV4cG9ydHMucmdiYVRvSGV4ID0gcmdiYVRvSGV4O1xuZnVuY3Rpb24gY29sb3JMZXJwKGNvbG9yMSwgY29sb3IyLCB0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcjogTWF0aC5mbG9vcihjb2xvcjEuciArIChjb2xvcjIuciAtIGNvbG9yMS5yKSAqIHQpLFxuICAgICAgICBnOiBNYXRoLmZsb29yKGNvbG9yMS5nICsgKGNvbG9yMi5nIC0gY29sb3IxLmcpICogdCksXG4gICAgICAgIGI6IE1hdGguZmxvb3IoY29sb3IxLmIgKyAoY29sb3IyLmIgLSBjb2xvcjEuYikgKiB0KSxcbiAgICAgICAgYTogY29sb3IxLmFcbiAgICB9O1xufVxuZXhwb3J0cy5jb2xvckxlcnAgPSBjb2xvckxlcnA7XG5mdW5jdGlvbiBpbWFnZVRvQmFzZTY0KGltZywgb3V0cHV0Rm9ybWF0KSB7XG4gICAgb3V0cHV0Rm9ybWF0ID0gb3V0cHV0Rm9ybWF0ID8gb3V0cHV0Rm9ybWF0IDogJ2ltYWdlL3BuZyc7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICB2YXIgY29udHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGltZy5oZWlnaHQ7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGltZy53aWR0aDtcbiAgICAgICAgY29udHguZHJhd0ltYWdlKGltZywgMCwgMCk7XG4gICAgICAgIHZhciBkYXRhID0gY2FudmFzLnRvRGF0YVVSTChvdXRwdXRGb3JtYXQpO1xuICAgICAgICB2YXIgaW5kZXggPSBkYXRhLmluZGV4T2YoJztiYXNlNjQsJykgKyAnO2Jhc2U2NCwnLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIGRhdGEuc2xpY2UoaW5kZXgpO1xuICAgIH1cbiAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignQ2Fubm90IGRvIHRoaXMgb3V0c2lkZSBvZiB0aGUgRE9NIHlldC4nKTtcbiAgICAgICAgLypcbiAgICAgICAgY29uc3QgY2FudmFzOiBDYW52YXMgPSBjcmVhdGVDYW52YXMoaW1nLndpZHRoLCBpbWcuaGVpZ2h0KVxuICAgICAgICBjb25zdCBjb250eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaW1nLmhlaWdodFxuICAgICAgICBjYW52YXMud2lkdGggPSBpbWcud2lkdGhcbiAgICAgICAgY29udHguZHJhd0ltYWdlKGltZywgMCwgMClcbiAgICAgICAgY29uc3QgZGF0YSA9IGNhbnZhcy50b0RhdGFVUkwob3V0cHV0Rm9ybWF0KVxuICAgICAgICBjb25zdCBpbmRleCA9IGRhdGEuaW5kZXhPZignO2Jhc2U2NCwnKSArICc7YmFzZTY0LCcubGVuZ3RoXG4gICAgICAgIHJldHVybiBkYXRhLnNsaWNlKGluZGV4KSovXG4gICAgfVxufVxuZXhwb3J0cy5pbWFnZVRvQmFzZTY0ID0gaW1hZ2VUb0Jhc2U2NDtcbi8qKlxuICogR2V0IGJhc2U2NCBpbWFnZSBkYXRhIGFuZCBidWlsZCBhIHByZWNvbXBpbGVkIGZvbnQgSlNPTiBvYmplY3QuXG4gKiBAcGFyYW0gaW1hZ2VOYW1lXG4gKiBAcGFyYW0gbWF4X3lcbiAqIEBwYXJhbSBjdyBDaGFyYWN0ZXIgd2lkdGguXG4gKiBAcGFyYW0gY2ggQ2hhcmFjdGVyIGhlaWdodC5cbiAqIEByZXR1cm5zXG4gKi9cbmZ1bmN0aW9uIGNvZGVwYWdlQW5kQml0bWFwdG9KU09OKGltYWdlTmFtZSwgbWF4X3ksIGN3LCBjaCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgc3ggPSAwOyAvLyBTb3VyY2UgWFxuICAgICAgICAgICAgdmFyIHN5ID0gMDsgLy8gU291cmNlIFlcbiAgICAgICAgICAgIGN3ID0gY3cgPyBjdyA6IDk7IC8vIENoYXJhY3RlciBXaWR0aFxuICAgICAgICAgICAgY2ggPSBjaCA/IGNoIDogMTY7IC8vIENoYXJhY3RlciBIZWlnaHRcbiAgICAgICAgICAgIHZhciBjb2RlcGFnZSA9IFtdO1xuICAgICAgICAgICAgdmFyIGltYWdlZGF0YSA9IG51bGw7XG4gICAgICAgICAgICB2YXIgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGltYWdlZGF0YSA9IGltYWdlVG9CYXNlNjQoKDAsIGltYWdlc18xLmdldEltYWdlKShpbWFnZU5hbWUpKTtcbiAgICAgICAgICAgIGltYWdlLnNyYyA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsJyArIGltYWdlZGF0YTtcbiAgICAgICAgICAgIG1heF95ID0gbWF4X3kgPyBtYXhfeSA6IGltYWdlLmhlaWdodDtcbiAgICAgICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGNvZGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZWl0ZW0gPSBjb2RlcGFnZV8xLmRlZmF1bHQuZmlsdGVyKGZ1bmN0aW9uIChmKSB7IHJldHVybiBmLmNvZGVudW1iZXIgPT09IGNvZGU7IH0pO1xuICAgICAgICAgICAgICAgIGlmIChjb2RlaXRlbS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGVpdGVtWzBdLnJlY3QgPSB1bmRlZmluZWQ7IC8vIHsgeDogc3gsIHk6IHN5LCB3OiBjdywgaDogY2ggfSAvL1RPRE86IE1ha2UgdGhpcyBhIHBhcmFtZXRlciB0byBjb250cm9sIHdoZXRoZXIgd2UgYXV0by1nZW5lcmF0ZSByZWN0c1xuICAgICAgICAgICAgICAgICAgICBjb2RlcGFnZS5wdXNoKGNvZGVpdGVtWzBdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3ggKz0gY3c7XG4gICAgICAgICAgICAgICAgaWYgKHN4ID49IGltYWdlLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1heF95ICYmIHN5ICsgY2ggPCBtYXhfeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3kgKz0gY2g7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN5ID49IGltYWdlLmhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBzeSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZvciAodmFyIGNvZGUgPSAwOyBjb2RlIDwgMjU2OyBjb2RlKyspIHtcbiAgICAgICAgICAgICAgICBfbG9vcF8xKGNvZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzb2x2ZSh7IGN3aWR0aDogY3csIGNoZWlnaHQ6IGNoLCBjb2RlcGFnZTogY29kZXBhZ2UsIGltYWdlZGF0YTogaW1hZ2VkYXRhIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuY29kZXBhZ2VBbmRCaXRtYXB0b0pTT04gPSBjb2RlcGFnZUFuZEJpdG1hcHRvSlNPTjtcbmZ1bmN0aW9uIHRleHRIZWlnaHQodGV4dCwgZm9udCkge1xuICAgIGlmICghZm9udCAmJiBmb250TGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvbnQgPSBmb250TGlzdFswXTtcbiAgICB9XG4gICAgZWxzZSBpZiAoIWZvbnQgfHwgZm9udExpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRm9udCBwYXJhbWV0ZXIgZW1wdHkgYW5kIGRlZmF1bHQgZm9udHMgYXJlIG5vdCBsb2FkZWQuJyk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0ZXh0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHR4dCA9IHRleHQuc3BsaXQoJ1xcbicpO1xuICAgICAgICByZXR1cm4gdHh0Lmxlbmd0aCAqIGZvbnQuY2hlaWdodDtcbiAgICB9XG4gICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbn1cbmV4cG9ydHMudGV4dEhlaWdodCA9IHRleHRIZWlnaHQ7XG5mdW5jdGlvbiB0ZXh0V2lkdGgodGV4dCwgZm9udCkge1xuICAgIGlmICghZm9udCAmJiBmb250TGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvbnQgPSBmb250TGlzdFswXTtcbiAgICB9XG4gICAgZWxzZSBpZiAoIWZvbnQgfHwgZm9udExpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRm9udCBwYXJhbWV0ZXIgZW1wdHkgYW5kIGRlZmF1bHQgZm9udHMgYXJlIG5vdCBsb2FkZWQuJyk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0ZXh0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1heHcgPSAwO1xuICAgICAgICB2YXIgdHh0ID0gdGV4dC5zcGxpdCgnXFxuJyk7XG4gICAgICAgIHZhciBfbG9vcF8yID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgbGluZSA9IHR4dFtpbmRleF07XG4gICAgICAgICAgICB2YXIgbGluZXdpZHRoID0gMDtcbiAgICAgICAgICAgIHZhciBfbG9vcF8zID0gZnVuY3Rpb24gKGNoYXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgZ2x5cGggPSBmb250LmNvZGVwYWdlLmZpbHRlcihmdW5jdGlvbiAoZikgeyByZXR1cm4gZi5jb2RlbnVtYmVyID09PSBsaW5lLmNoYXJDb2RlQXQoY2hhcik7IH0pO1xuICAgICAgICAgICAgICAgIHZhciByZWN0ID0gZ2x5cGgubGVuZ3RoID4gMCA/IGdseXBoWzBdLnJlY3QgOiBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChyZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmV3aWR0aCArPSByZWN0Lnc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsaW5ld2lkdGggKz0gZm9udC5jd2lkdGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZvciAodmFyIGNoYXIgPSAwOyBjaGFyIDwgbGluZS5sZW5ndGg7IGNoYXIrKykge1xuICAgICAgICAgICAgICAgIF9sb29wXzMoY2hhcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobGluZXdpZHRoID4gbWF4dykge1xuICAgICAgICAgICAgICAgIG1heHcgPSBsaW5ld2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGluZGV4IGluIHR4dCkge1xuICAgICAgICAgICAgX2xvb3BfMihpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1heHc7XG4gICAgfVxuICAgIGNhdGNoIChfYSkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG59XG5leHBvcnRzLnRleHRXaWR0aCA9IHRleHRXaWR0aDtcbi8qKlxuICogRHJhd3MgdGhlIHNwZWNpZmllZCB0ZXh0IG9uIHRoZSBjYW52YXMuXG4gKlxuICogQHBhcmFtIHtIVE1MQ2FudmFzRWxlbWVudH0gY3R4IDJkIGNvbnRleHQgdG8gZHJhdyB0ZXh0IG9uLlxuICogQHBhcmFtIHtudW1iZXJ9IHggTGVmdCBsb2NhdGlvbiBmb3IgdGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB5IFRvcCBsb2NhdGlvbiBmb3IgdGV4dFxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgVGV4dCB0byBiZSBkcmF3biBvbiBjYW52YXMuXG4gKiBAcGFyYW0ge0NvbG9yUkdCQX0gY29sb3IgQ29sb3VyIHRvIHVzZSAod2hpdGUgaWYgdW5kZWZpbmVkKS5cbiAqIEBwYXJhbSB7Rm9udERhdGF9IGZvbnQgRm9udCB0byB1c2UgKGRlZmF1bHQgRE9TIGNvZGVwYWdlIDQzNyBmb250IGlmIHVuZGVmaW5lZCkuXG4gKiBAcGFyYW0ge29iamVjdH0gZWZmZWN0cyBBbnkgZWZmZWN0cyBhbmQgcGFyYW1ldGVycyB0byBhcHBseSB3aGVuIHJlbmRlcmluZyB0aGlzIHRleHQuXG4gKiBAcmV0dXJucyB7UmVjdH1cbiAqL1xuLyoqXG4gKiBEcmF3cyB0aGUgc3BlY2lmaWVkIHRleHQgb24gdGhlIGNhbnZhcy5cbiAqIEBwYXJhbSB4IExlZnQgbG9jYXRpb24gZm9yIHRleHQuXG4gKiBAcGFyYW0geSBUb3AgbG9jYXRpb24gZm9yIHRleHQuXG4gKiBAcGFyYW0gdGV4dCBUZXh0IHRvIGJlIGRyYXduIG9uIGNhbnZhcy5cbiAqIEBwYXJhbSBjb2xvciBDb2xvdXIgdG8gdXNlICh3aGl0ZSBpZiB1bmRlZmluZWQpLlxuICogQHBhcmFtIGZvbnQgRm9udCB0byB1c2UgKGRlZmF1bHQgRE9TIGNvZGVwYWdlIDQzNyBmb250IGlmIHVuZGVmaW5lZCkuXG4gKiBAcmV0dXJucyBSZWN0IG9iamVjdCB3aXRoIHRoZSB4LCB5LCB3aWR0aCwgaGVpZ2h0IG9mIHRoZSB0ZXh0IGRyYXduLlxuICovXG5mdW5jdGlvbiBkcmF3VGV4dCh4LCB5LCB0ZXh0LCBjb2xvciwgZm9udCAvKiwgZWZmZWN0czogb2JqZWN0Ki8pIHtcbiAgICBpZiAodHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb2xvciA9IGhleHRUb1JnYmEoY29sb3IpO1xuICAgIH1cbiAgICBpZiAodGV4dC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHsgeDogeCwgeTogeSwgdzogMCwgaDogMCB9O1xuICAgIH1cbiAgICAvL2VmZmVjdHMgPSBlZmZlY3RzID8gZWZmZWN0cyA6IHt9XG4gICAgaWYgKCFmb250ICYmIGZvbnRMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9udCA9IGZvbnRMaXN0WzBdO1xuICAgIH1cbiAgICBlbHNlIGlmICghZm9udCB8fCBmb250TGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb250IHBhcmFtZXRlciBlbXB0eSBhbmQgZGVmYXVsdCBmb250cyBhcmUgbm90IGxvYWRlZC4nKTtcbiAgICB9XG4gICAgaWYgKCFjb2xvcikge1xuICAgICAgICBjb2xvciA9IGhleHRUb1JnYmEoJyNmZmZmZmZmZicpO1xuICAgIH1cbiAgICBpZiAoIWZvbnQgfHwgIWZvbnQuY29kZXBhZ2UgfHwgIWZvbnQuaW1hZ2VkYXRhIHx8ICFmb250LmltYWdlIHx8ICFmb250LmN3aWR0aCB8fCAhZm9udC5jaGVpZ2h0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBmb250IG9yIGZvbnQgbm90IGxvYWRlZC4nKTtcbiAgICB9XG4gICAgdmFyIHRleHR3aWR0aCA9IHRleHRXaWR0aCh0ZXh0LCBmb250KTtcbiAgICB2YXIgdGV4dGhlaWdodCA9IHRleHRIZWlnaHQodGV4dCwgZm9udCk7XG4gICAgaWYgKCFmb250Q2FudmFzKSB7XG4gICAgICAgIGZvbnRDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgZm9udENhbnZhcy5pZCA9ICdmb250Q2FudmFzJztcbiAgICB9XG4gICAgaWYgKCFjdHgpIHtcbiAgICAgICAgY3R4ID0gKDAsIGltYWdlc18xLmdldENvbnRleHQpKCk7XG4gICAgfVxuICAgIGZvbnRDYW52YXMud2lkdGggPSB0ZXh0d2lkdGg7XG4gICAgZm9udENhbnZhcy5oZWlnaHQgPSB0ZXh0aGVpZ2h0O1xuICAgIHZhciBmb250Y3R4ID0gZm9udENhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGZvbnRjdHguY2xlYXJSZWN0KDAsIDAsIHRleHR3aWR0aCwgdGV4dGhlaWdodCk7XG4gICAgdmFyIGR4ID0gMDtcbiAgICB2YXIgbWF4ZHggPSAwO1xuICAgIHZhciByb3dzID0gdGV4dC5zcGxpdCgnXFxuJyk7XG4gICAgdmFyIGR5ID0gMDtcbiAgICB2YXIgX2xvb3BfNCA9IGZ1bmN0aW9uIChyb3dJbmRleCkge1xuICAgICAgICB2YXIgdHh0ID0gcm93c1tyb3dJbmRleF07XG4gICAgICAgIHZhciBfbG9vcF81ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgZ2x5cGhzID0gZm9udC5jb2RlcGFnZS5maWx0ZXIoZnVuY3Rpb24gKGYpIHsgcmV0dXJuIGYuc3ltYm9sID09PSB0eHRbaW5kZXhdOyB9KTtcbiAgICAgICAgICAgIHZhciBnbHlwaCA9IG51bGw7XG4gICAgICAgICAgICBpZiAoZ2x5cGhzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGdseXBoID0gZm9udC5jb2RlcGFnZS5maWx0ZXIoZnVuY3Rpb24gKGYpIHsgcmV0dXJuIGYuY29kZW51bWJlciA9PT0gdHh0W2luZGV4XS5jaGFyQ29kZUF0KDApOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGdseXBoID0gZ2x5cGhzWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJlY3QgPSBnbHlwaCA/IGdseXBoLnJlY3QgOiBudWxsO1xuICAgICAgICAgICAgaWYgKHJlY3QpIHtcbiAgICAgICAgICAgICAgICBmb250Y3R4LmRyYXdJbWFnZShmb250LmltYWdlLCByZWN0LngsIHJlY3QueSwgcmVjdC53LCByZWN0LmgsIGR4LCBkeSwgcmVjdC53LCByZWN0LmgpO1xuICAgICAgICAgICAgICAgIGR4ICs9IHJlY3QudztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBmaW5kaW5nIHZhbHVlIGluIGNvZGVwYWdlIGZvcicsIHR4dFtpbmRleF0sIFwiKFwiLmNvbmNhdCh0eHRbaW5kZXhdLmNoYXJDb2RlQXQoMCksIFwiKVwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0eHQubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBfbG9vcF81KGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBkeSArPSBmb250LmNoZWlnaHQ7XG4gICAgICAgIGlmIChkeCA+IG1heGR4KSB7XG4gICAgICAgICAgICBtYXhkeCA9IGR4O1xuICAgICAgICB9XG4gICAgICAgIGR4ID0gMDtcbiAgICB9O1xuICAgIGZvciAodmFyIHJvd0luZGV4IGluIHJvd3MpIHtcbiAgICAgICAgX2xvb3BfNChyb3dJbmRleCk7XG4gICAgfVxuICAgIHRleHR3aWR0aCA9IG1heGR4O1xuICAgIHZhciBpbWFnZURhdGEgPSBudWxsO1xuICAgIGlmICh0ZXh0d2lkdGggPiAwKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpbWFnZURhdGEgPSBmb250Y3R4LmdldEltYWdlRGF0YSgwLCAwLCB0ZXh0d2lkdGgsIHRleHRoZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChfYSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGdldHRpbmcgaW1hZ2UgZGF0YTonLCB0ZXh0d2lkdGgsIHRleHRoZWlnaHQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwaXhlbHMgPSBpbWFnZURhdGEuZGF0YTtcbiAgICAgICAgZm9yICh2YXIgcHkgPSAwOyBweSA8IHRleHRoZWlnaHQ7IHB5KyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIHB4ID0gMDsgcHggPCB0ZXh0d2lkdGg7IHB4KyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcGl4ZWwgPSBnZXRQaXhlbEF0UmdiYShwaXhlbHMsIHB4LCBweSwgdGV4dHdpZHRoKTtcbiAgICAgICAgICAgICAgICAvLyBpZiAoT2JqZWN0LmtleXMoZWZmZWN0cykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIC8vICAgICBsZXQgc2V0RGVmYXVsdFBpeGVsID0gdHJ1ZVxuICAgICAgICAgICAgICAgIC8vICAgICBpZiAoZWZmZWN0cy5ncmFkaWVudCAmJiBwaXhlbCAmJiBwaXhlbC5hID4gMCkge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgdmVydGljYWwgPSBlZmZlY3RzLmdyYWRpZW50Lmhvcml6b250YWwgPyBmYWxzZSA6IHRydWVcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IGxlcnBUID0gdmVydGljYWwgPyBweSAvIHRleHRoZWlnaHQgOiBweCAvIHRleHR3aWR0aFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgZ3JhZGllbnRDb2xvdXI6IENvbG9yUkdCQSA9IEhleFRvUmdiYShlZmZlY3RzLmdyYWRpZW50LmNvbG9yKVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgbGVycENvbHI6IENvbG9yUkdCQSA9IENvbG9yTGVycChjb2xvciwgZ3JhZGllbnRDb2xvdXIsIGxlcnBUKVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgU2V0UGl4ZWxBdFJnYmEocGl4ZWxzLCBsZXJwQ29sciwgcHgsIHB5LCB0ZXh0d2lkdGgpXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBzZXREZWZhdWx0UGl4ZWwgPSBmYWxzZVxuICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgIGlmIChwaXhlbCAmJiBwaXhlbC5hID4gMCAmJiBzZXREZWZhdWx0UGl4ZWwpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIFNldFBpeGVsQXRSZ2JhKHBpeGVscywgY29sb3IsIHB4LCBweSwgdGV4dHdpZHRoKVxuICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocGl4ZWwgJiYgcGl4ZWwuYSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UGl4ZWxBdFJnYmEocGl4ZWxzLCBjb2xvciwgcHgsIHB5LCB0ZXh0d2lkdGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5ld0ltYWdlRGF0YSA9IG5ldyBJbWFnZURhdGEocGl4ZWxzLCB0ZXh0d2lkdGgsIHRleHRoZWlnaHQpO1xuICAgICAgICBmb250Y3R4LmNsZWFyUmVjdCgwLCAwLCB0ZXh0d2lkdGgsIHRleHRoZWlnaHQpO1xuICAgICAgICAvLyBpZiAoZWZmZWN0cy5iYWNrZ3JvdW5kKSB7XG4gICAgICAgIC8vICAgICBjdHguZmlsbFN0eWxlID0gZWZmZWN0cy5iYWNrZ3JvdW5kLmNvbG91clxuICAgICAgICAvLyAgICAgY3R4LmZpbGxSZWN0KHgsIHksIHRleHR3aWR0aCwgdGV4dGhlaWdodClcbiAgICAgICAgLy8gfVxuICAgICAgICBmb250Y3R4LnB1dEltYWdlRGF0YShuZXdJbWFnZURhdGEsIDAsIDApO1xuICAgICAgICBjdHguZHJhd0ltYWdlKGZvbnRDYW52YXMsIDAsIDAsIHRleHR3aWR0aCwgdGV4dGhlaWdodCwgeCwgeSwgdGV4dHdpZHRoLCB0ZXh0aGVpZ2h0KTtcbiAgICB9XG4gICAgcmV0dXJuIHsgeDogeCwgeTogeSwgdzogdGV4dHdpZHRoLCBoOiB0ZXh0aGVpZ2h0IH07XG59XG5leHBvcnRzLmRyYXdUZXh0ID0gZHJhd1RleHQ7XG5mdW5jdGlvbiBzZXRQaXhlbEF0UmdiYShwaXhlbHMsIGNvbG9yLCB4LCB5LCBwaXhlbHN3aWR0aCkge1xuICAgIHZhciBvZmZzZXQgPSAoeCArIHBpeGVsc3dpZHRoICogeSkgKiA0O1xuICAgIGlmIChvZmZzZXQgPCAwIHx8IG9mZnNldCA+PSBwaXhlbHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcGl4ZWxzW29mZnNldF0gPSBjb2xvci5yO1xuICAgIHBpeGVsc1tvZmZzZXQgKyAxXSA9IGNvbG9yLmc7XG4gICAgcGl4ZWxzW29mZnNldCArIDJdID0gY29sb3IuYjtcbiAgICBwaXhlbHNbb2Zmc2V0ICsgM10gPSBjb2xvci5hO1xuICAgIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24gZ2V0UGl4ZWxBdFJnYmEocGl4ZWxzLCB4LCB5LCBwaXhlbHN3aWR0aCkge1xuICAgIHZhciBvZmZzZXQgPSAoeCArIHBpeGVsc3dpZHRoICogeSkgKiA0O1xuICAgIGlmIChvZmZzZXQgPCAwIHx8IG9mZnNldCA+PSBwaXhlbHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4geyByOiBwaXhlbHNbb2Zmc2V0XSwgZzogcGl4ZWxzW29mZnNldCArIDFdLCBiOiBwaXhlbHNbb2Zmc2V0ICsgMl0sIGE6IHBpeGVsc1tvZmZzZXQgKyAzXSB9O1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmltYWdlTWFuaWZlc3RGcm9tSlNPTiA9IGV4cG9ydHMuZ2V0Q29udGV4dCA9IGV4cG9ydHMuZHJhd0ltYWdlQ3R4ID0gZXhwb3J0cy5zZXRDb250ZXh0ID0gZXhwb3J0cy5nZXRJbWFnZXMgPSBleHBvcnRzLmdldEltYWdlID0gZXhwb3J0cy5kcmF3SW1hZ2UgPSBleHBvcnRzLmxvYWRJbWFnZSA9IGV4cG9ydHMubG9hZEFsbEltYWdlcyA9IHZvaWQgMDtcbnZhciBJbWFnZURlZmluaXRpb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9JbWFnZURlZmluaXRpb25cIikpO1xudmFyIGltYWdlcyA9IFtdO1xuLyoqXG4gKiBQb3B1bGF0ZSBpbWFnZXMgbWFuaWZlc3Qgd2l0aCBKU09OIGxpc3Qgb2YgZGVmaW5pdGlvbnMuIE1hbmlmZXN0IGlzIGFuIGFycmF5IG9mIG9iamVjdHNcbiAqIGxpa2UgeyBcIm5hbWVcIjogXCJpbWFnZSBpZCByZWZcIiwgXCJmaWxlbmFtZVwiOiBcImZpbGVfcGF0aC9maWxlbmFtZS5leHRcIiB9XG4gKiBAcGFyYW0ganNvbiBKU09OIHJlcHJlc2VudGF0aW9uIG9mIGltYWdlIGRlZmluaXRpb25zLlxuICovXG5mdW5jdGlvbiBpbWFnZU1hbmlmZXN0RnJvbUpTT04oanNvbikge1xuICAgIGpzb24uZm9yRWFjaCgoZnVuY3Rpb24gKGRlZikgeyByZXR1cm4gaW1hZ2VzLnB1c2goSW1hZ2VEZWZpbml0aW9uXzEuZGVmYXVsdC5mcm9tSlNPTihkZWYpKTsgfSkpO1xufVxuZXhwb3J0cy5pbWFnZU1hbmlmZXN0RnJvbUpTT04gPSBpbWFnZU1hbmlmZXN0RnJvbUpTT047XG4vLyBDYW52YXMgMmQgY29udGV4dC5cbnZhciBjdHggPSBudWxsO1xuLy8gU2V0IHRoZSBjYW52YXMgMmQgY29udGV4dC5cbmZ1bmN0aW9uIHNldENvbnRleHQoY29udGV4dCkge1xuICAgIGN0eCA9IGNvbnRleHQ7XG59XG5leHBvcnRzLnNldENvbnRleHQgPSBzZXRDb250ZXh0O1xuLy8gUmV0dXJucyB0aGUgY2FudmFzIDJkIGNvbnRleHQuXG5mdW5jdGlvbiBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiBjdHg7XG59XG5leHBvcnRzLmdldENvbnRleHQgPSBnZXRDb250ZXh0O1xuLy8gUmV0dXJuIGxvYWRlZCBpbWFnZSBvYmplY3QgZnJvbSB0aGUgbGlzdC5cbmZ1bmN0aW9uIGdldEltYWdlKG5hbWUpIHtcbiAgICB2YXIgaW1nID0gaW1hZ2VzLmZpbHRlcihmdW5jdGlvbiAoZikgeyByZXR1cm4gZi5uYW1lID09PSBuYW1lOyB9KTtcbiAgICByZXR1cm4gaW1nLmxlbmd0aCA+IDAgPyBpbWdbMF0uaW1hZ2UgOiBudWxsO1xufVxuZXhwb3J0cy5nZXRJbWFnZSA9IGdldEltYWdlO1xuLy8gUmV0dXJucyB0aGUgZnVsbCBsaXN0IG9mIGltYWdlIG9iamVjdHMuXG5mdW5jdGlvbiBnZXRJbWFnZXMoKSB7XG4gICAgcmV0dXJuIGltYWdlcztcbn1cbmV4cG9ydHMuZ2V0SW1hZ2VzID0gZ2V0SW1hZ2VzO1xuLyoqXG4gKiBEcmF3cyBhbiBpbWFnZSBhdCB4LHkgY29vcmRpbmF0ZXMgb24gdGhlIGNhbmFzLlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gKiBAcGFyYW0ge251bWJlcn0geVxuICogQHBhcmFtIHtvYmplY3R9IHNyY1JlY3RcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gZmxpcHBlZFxuICovXG5mdW5jdGlvbiBkcmF3SW1hZ2UobmFtZSwgeCwgeSwgc3JjUmVjdCwgZmxpcHBlZCkge1xuICAgIGRyYXdJbWFnZUN0eChnZXRDb250ZXh0KCksIG5hbWUsIHgsIHksIHNyY1JlY3QsIGZsaXBwZWQpO1xufVxuZXhwb3J0cy5kcmF3SW1hZ2UgPSBkcmF3SW1hZ2U7XG4vKipcbiAqIFJhdyBpbWFnZSBkcmF3aW5nIGZ1bmN0aW9uICh1c2UgZHJhd0ltYWdlIHVubGVzcyB5b3Ugd2FudCB0byBkcmF3IHRvIGFub3RoZXIgMmQgY29udGV4dCkuXG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCBDYW52YXMgMmQgY29udGV4dC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge251bWJlcn0geFxuICogQHBhcmFtIHtudW1iZXJ9IHlcbiAqIEBwYXJhbSB7b2JqZWN0fSBzcmNSZWN0XG4gKiBAcGFyYW0ge2Jvb2xlYW59IGZsaXBwZWRcbiAqL1xuZnVuY3Rpb24gZHJhd0ltYWdlQ3R4KGNvbnRleHQsIG5hbWUsIHgsIHksIHNyY1JlY3QsIGZsaXBwZWQpIHtcbiAgICB2YXIgaW1nID0gaW1hZ2VzLmZpbHRlcihmdW5jdGlvbiAoZikgeyByZXR1cm4gZi5uYW1lID09PSBuYW1lOyB9KTtcbiAgICBpZiAoaW1nLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChzcmNSZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGZsaXBwZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5zYXZlKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuc2NhbGUoLTEsIDEpO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWdbMF0uaW1hZ2UsIHNyY1JlY3QueCwgc3JjUmVjdC55LCBzcmNSZWN0LncsIHNyY1JlY3QuaCwgLXggLSBzcmNSZWN0LncsIHksIHNyY1JlY3Qudywgc3JjUmVjdC5oKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5yZXN0b3JlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWdbMF0uaW1hZ2UsIHNyY1JlY3QueCwgc3JjUmVjdC55LCBzcmNSZWN0LncsIHNyY1JlY3QuaCwgeCwgeSwgc3JjUmVjdC53LCBzcmNSZWN0LmgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChmbGlwcGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnNjYWxlKC0xLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1nWzBdLmltYWdlLCB4IC0gc3JjUmVjdC53LCB5LCBzcmNSZWN0LncsIHNyY1JlY3QuaCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1nWzBdLmltYWdlLCB4LCB5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgICAvLyBlbXB0eVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5kcmF3SW1hZ2VDdHggPSBkcmF3SW1hZ2VDdHg7XG4vKipcbiAqIExvYWQgSW1hZ2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlbmFtZVxuICogQHJldHVybnNcbiAqL1xuZnVuY3Rpb24gbG9hZEltYWdlKGZpbGVuYW1lKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmVzb2x2ZShpbWcpO1xuICAgICAgICB9O1xuICAgICAgICBpbWcub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgZmlsZSBcIi5jb25jYXQoZmlsZW5hbWUsIFwiOlwiKSwgZSk7XG4gICAgICAgICAgICByZWplY3QobnVsbCk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBpbWFnZSA9IGltYWdlcy5maWx0ZXIoZnVuY3Rpb24gKGYpIHsgcmV0dXJuIGYuZmlsZW5hbWUgPT09IGZpbGVuYW1lOyB9KTtcbiAgICAgICAgaWYgKGltYWdlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGltZy5zcmMgPSBmaWxlbmFtZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJJbWFnZSBkZWZpbml0aW9uIG1hdGNoaW5nIGZpbGVuYW1lIFwiLmNvbmNhdChmaWxlbmFtZSwgXCIgbm90IGZvdW5kLlwiKSk7XG4gICAgICAgICAgICByZWplY3QobnVsbCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMubG9hZEltYWdlID0gbG9hZEltYWdlO1xuLyoqXG4gKiBMb2FkIGFsbCBpbWFnZXMgaW4gdGhlIGltYWdlcyBsaXN0LlxuICogQHJldHVybnNcbiAqL1xuZnVuY3Rpb24gbG9hZEFsbEltYWdlcygpIHtcbiAgICB2YXIgcHJvbWlzZXMgPSBbXTtcbiAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHZhciBpbWFnZSA9IGltYWdlc1tpXTtcbiAgICAgICAgcHJvbWlzZXMucHVzaChuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXR1cm4gbG9hZEltYWdlKGltYWdlLmZpbGVuYW1lKS50aGVuKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICBpbWFnZS5pbWFnZSA9IHI7XG4gICAgICAgICAgICByZXNvbHZlKHIpO1xuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkgeyByZXR1cm4gY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGxvYWQnLCBpbWFnZS5maWxlbmFtZSwgZSk7IH0pOyB9KSk7XG4gICAgfTtcbiAgICBmb3IgKHZhciBpIGluIGltYWdlcykge1xuICAgICAgICBfbG9vcF8xKGkpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5hbGxTZXR0bGVkKHByb21pc2VzKTtcbn1cbmV4cG9ydHMubG9hZEFsbEltYWdlcyA9IGxvYWRBbGxJbWFnZXM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ2V0QXhpc1N0YXRlID0gZXhwb3J0cy5nZXRCdXR0b25TdGF0ZSA9IGV4cG9ydHMuc2V0TWFwcGVkQnV0dG9uID0gZXhwb3J0cy5nZXRNYXBwZWRCdXR0b25zID0gZXhwb3J0cy5nZXRNYXBwZWRCdXR0b25JbmRleCA9IGV4cG9ydHMuZ2V0R2FtZXBhZHMgPSBleHBvcnRzLmdhbWVwYWRzRGlkVXBkYXRlID0gZXhwb3J0cy5vbkdhbWVwYWRVcGRhdGVkID0gZXhwb3J0cy5vbkdhbWVwYWREaXNjb25uZWN0ZWQgPSBleHBvcnRzLm9uR2FtZXBhZENvbm5lY3RlZCA9IGV4cG9ydHMucmVzZXRHYW1lcGFkQXhpc01hcHBpbmdzID0gZXhwb3J0cy5yZXNldEdhbWVwYWRCdXR0b25NYXBwaW5ncyA9IGV4cG9ydHMuc2V0R2FtZXBhZERpc2Nvbm5lY3RlZCA9IGV4cG9ydHMuc2V0R2FtZXBhZENvbm5lY3RlZCA9IGV4cG9ydHMuc2V0R2FtZXBhZFVwZGF0ZWQgPSBleHBvcnRzLnNldEdhbWVwYWRUaW1lc3RhbXBzID0gZXhwb3J0cy5yZXNldEdhbWVwYWRUaW1lc3RhbXBzID0gZXhwb3J0cy5yZXNldEJ1dHRvbnNTdGF0ZSA9IGV4cG9ydHMuZ2FtZXBhZFVwZGF0ZWQgPSBleHBvcnRzLmdhbWVwYWREaXNjb25uZWN0ZWQgPSBleHBvcnRzLmdhbWVwYWRDb25uZWN0ZWQgPSBleHBvcnRzLmdhbWVwYWRzVGltZXN0YW1wcyA9IGV4cG9ydHMuYXhpc01hcCA9IGV4cG9ydHMuYnV0dG9uc01hcCA9IGV4cG9ydHMuYnV0dG9uc1N0YXRlID0gdm9pZCAwO1xuZXhwb3J0cy5idXR0b25zTWFwID0ge307XG5leHBvcnRzLmF4aXNNYXAgPSB7fTtcbmV4cG9ydHMuZ2FtZXBhZHNUaW1lc3RhbXBzID0ge307XG52YXIgZ2FtZXBhZENvbm5lY3RlZCA9IGZ1bmN0aW9uICgpIHsgfTtcbmV4cG9ydHMuZ2FtZXBhZENvbm5lY3RlZCA9IGdhbWVwYWRDb25uZWN0ZWQ7XG52YXIgZ2FtZXBhZERpc2Nvbm5lY3RlZCA9IGZ1bmN0aW9uICgpIHsgfTtcbmV4cG9ydHMuZ2FtZXBhZERpc2Nvbm5lY3RlZCA9IGdhbWVwYWREaXNjb25uZWN0ZWQ7XG52YXIgZ2FtZXBhZFVwZGF0ZWQgPSBmdW5jdGlvbiAoKSB7IH07XG5leHBvcnRzLmdhbWVwYWRVcGRhdGVkID0gZ2FtZXBhZFVwZGF0ZWQ7XG5mdW5jdGlvbiByZXNldEJ1dHRvbnNTdGF0ZSgpIHtcbiAgICBleHBvcnRzLmJ1dHRvbnNTdGF0ZSA9IHt9O1xufVxuZXhwb3J0cy5yZXNldEJ1dHRvbnNTdGF0ZSA9IHJlc2V0QnV0dG9uc1N0YXRlO1xuZnVuY3Rpb24gcmVzZXRHYW1lcGFkVGltZXN0YW1wcygpIHtcbiAgICBleHBvcnRzLmdhbWVwYWRzVGltZXN0YW1wcyA9IHt9O1xufVxuZXhwb3J0cy5yZXNldEdhbWVwYWRUaW1lc3RhbXBzID0gcmVzZXRHYW1lcGFkVGltZXN0YW1wcztcbmZ1bmN0aW9uIHNldEdhbWVwYWRUaW1lc3RhbXBzKGdhbWVwYWROdW1iZXIsIHRpbWVzdGFtcCkge1xuICAgIGV4cG9ydHMuZ2FtZXBhZHNUaW1lc3RhbXBzW2dhbWVwYWROdW1iZXJdID0gdGltZXN0YW1wO1xufVxuZXhwb3J0cy5zZXRHYW1lcGFkVGltZXN0YW1wcyA9IHNldEdhbWVwYWRUaW1lc3RhbXBzO1xuZnVuY3Rpb24gc2V0R2FtZXBhZFVwZGF0ZWQoZm4pIHtcbiAgICBleHBvcnRzLmdhbWVwYWRVcGRhdGVkID0gZm47XG59XG5leHBvcnRzLnNldEdhbWVwYWRVcGRhdGVkID0gc2V0R2FtZXBhZFVwZGF0ZWQ7XG5mdW5jdGlvbiBzZXRHYW1lcGFkQ29ubmVjdGVkKGZuKSB7XG4gICAgZXhwb3J0cy5nYW1lcGFkQ29ubmVjdGVkID0gZm47XG59XG5leHBvcnRzLnNldEdhbWVwYWRDb25uZWN0ZWQgPSBzZXRHYW1lcGFkQ29ubmVjdGVkO1xuZnVuY3Rpb24gc2V0R2FtZXBhZERpc2Nvbm5lY3RlZChmbikge1xuICAgIGV4cG9ydHMuZ2FtZXBhZERpc2Nvbm5lY3RlZCA9IGZuO1xufVxuZXhwb3J0cy5zZXRHYW1lcGFkRGlzY29ubmVjdGVkID0gc2V0R2FtZXBhZERpc2Nvbm5lY3RlZDtcbi8qKlxuICogUmVzZXQgYnV0dG9uIG1hcHBpbmdzIHRvIGRlZmF1bHRzLlxuICovXG5mdW5jdGlvbiByZXNldEdhbWVwYWRCdXR0b25NYXBwaW5ncygpIHtcbiAgICBleHBvcnRzLmJ1dHRvbnNNYXAgPSB7ICdhY3Rpb24nOiAwLCAnY2FuY2VsJzogMSB9O1xufVxuZXhwb3J0cy5yZXNldEdhbWVwYWRCdXR0b25NYXBwaW5ncyA9IHJlc2V0R2FtZXBhZEJ1dHRvbk1hcHBpbmdzO1xuZnVuY3Rpb24gcmVzZXRHYW1lcGFkQXhpc01hcHBpbmdzKCkge1xuICAgIGV4cG9ydHMuYXhpc01hcCA9IHsgJ2xlZnRBeGlzJzogWzAsIDFdLCAncmlnaHRBeGlzJzogWzMsIDRdLCAnZFBhZCc6IFs2LCA3XSwgJ3RyaWdnZXInOiBbMiwgNV0gfTtcbn1cbmV4cG9ydHMucmVzZXRHYW1lcGFkQXhpc01hcHBpbmdzID0gcmVzZXRHYW1lcGFkQXhpc01hcHBpbmdzO1xuLyoqXG4gKlxuICogIEdhbWVwYWQgSW5wdXQgRnVuY3Rpb25zXG4gKlxuICovXG5mdW5jdGlvbiBvbkdhbWVwYWRDb25uZWN0ZWQoZm4pIHtcbiAgICBleHBvcnRzLmdhbWVwYWRDb25uZWN0ZWQgPSBmbjtcbn1cbmV4cG9ydHMub25HYW1lcGFkQ29ubmVjdGVkID0gb25HYW1lcGFkQ29ubmVjdGVkO1xuZnVuY3Rpb24gb25HYW1lcGFkRGlzY29ubmVjdGVkKGZuKSB7XG4gICAgZXhwb3J0cy5nYW1lcGFkRGlzY29ubmVjdGVkID0gZm47XG59XG5leHBvcnRzLm9uR2FtZXBhZERpc2Nvbm5lY3RlZCA9IG9uR2FtZXBhZERpc2Nvbm5lY3RlZDtcbmZ1bmN0aW9uIG9uR2FtZXBhZFVwZGF0ZWQoZm4pIHtcbiAgICBleHBvcnRzLmdhbWVwYWRVcGRhdGVkID0gZm47XG59XG5leHBvcnRzLm9uR2FtZXBhZFVwZGF0ZWQgPSBvbkdhbWVwYWRVcGRhdGVkO1xuZnVuY3Rpb24gZ2FtZXBhZHNEaWRVcGRhdGUoKSB7XG4gICAgZ2V0R2FtZXBhZHMoKS5mb3JFYWNoKGZ1bmN0aW9uIChnKSB7XG4gICAgICAgIGlmIChleHBvcnRzLmdhbWVwYWRzVGltZXN0YW1wc1tnLmluZGV4XSAhPT0gdW5kZWZpbmVkICYmIGV4cG9ydHMuZ2FtZXBhZHNUaW1lc3RhbXBzW2cuaW5kZXhdIDwgZy50aW1lc3RhbXApIHtcbiAgICAgICAgICAgICgwLCBleHBvcnRzLmdhbWVwYWRVcGRhdGVkKShnKTtcbiAgICAgICAgfVxuICAgICAgICBleHBvcnRzLmdhbWVwYWRzVGltZXN0YW1wc1tnLmluZGV4XSA9IGcudGltZXN0YW1wO1xuICAgIH0pO1xufVxuZXhwb3J0cy5nYW1lcGFkc0RpZFVwZGF0ZSA9IGdhbWVwYWRzRGlkVXBkYXRlO1xuZnVuY3Rpb24gZ2V0R2FtZXBhZHMoKSB7XG4gICAgcmV0dXJuIG5hdmlnYXRvci5nZXRHYW1lcGFkcygpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEuaW5kZXggLSBiLmluZGV4OyB9KTtcbn1cbmV4cG9ydHMuZ2V0R2FtZXBhZHMgPSBnZXRHYW1lcGFkcztcbmZ1bmN0aW9uIGdldE1hcHBlZEJ1dHRvbkluZGV4KGlucHV0TmFtZSkge1xuICAgIHJldHVybiBleHBvcnRzLmJ1dHRvbnNNYXBbaW5wdXROYW1lXSAhPT0gdW5kZWZpbmVkID8gZXhwb3J0cy5idXR0b25zTWFwW2lucHV0TmFtZV0gOiBudWxsO1xufVxuZXhwb3J0cy5nZXRNYXBwZWRCdXR0b25JbmRleCA9IGdldE1hcHBlZEJ1dHRvbkluZGV4O1xuZnVuY3Rpb24gZ2V0TWFwcGVkQnV0dG9ucygpIHtcbiAgICB2YXIgaW5wdXRNYXAgPSBbXTtcbiAgICBPYmplY3Qua2V5cyhleHBvcnRzLmJ1dHRvbnNNYXApLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgcmVsID0geyBpbnB1dE5hbWU6IGtleSwgYnV0dG9uOiBleHBvcnRzLmJ1dHRvbnNNYXBba2V5XSB9O1xuICAgICAgICBpbnB1dE1hcC5wdXNoKHJlbCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGlucHV0TWFwO1xufVxuZXhwb3J0cy5nZXRNYXBwZWRCdXR0b25zID0gZ2V0TWFwcGVkQnV0dG9ucztcbmZ1bmN0aW9uIHNldE1hcHBlZEJ1dHRvbihpbnB1dE5hbWUsIGJ1dHRvbkluZGV4KSB7XG4gICAgZXhwb3J0cy5idXR0b25zTWFwW2lucHV0TmFtZV0gPSBidXR0b25JbmRleDtcbn1cbmV4cG9ydHMuc2V0TWFwcGVkQnV0dG9uID0gc2V0TWFwcGVkQnV0dG9uO1xuZnVuY3Rpb24gZ2V0QnV0dG9uU3RhdGUoaW5wdXROYW1lKSB7XG4gICAgdmFyIHN0YXRlcyA9IFtdO1xuICAgIGdldEdhbWVwYWRzKCkuZm9yRWFjaChmdW5jdGlvbiAoZykge1xuICAgICAgICB2YXIgYnV0dG9uSW5kZXggPSBnZXRNYXBwZWRCdXR0b25JbmRleChpbnB1dE5hbWUpO1xuICAgICAgICBpZiAoYnV0dG9uSW5kZXggIT09IG51bGwpIHtcbiAgICAgICAgICAgIHZhciBidXR0b24gPSBnLmJ1dHRvbnNbYnV0dG9uSW5kZXhdO1xuICAgICAgICAgICAgdmFyIGJ1dHRvblN0YXRlID0geyBjb250cm9sbGVyOiBnLmluZGV4LCBpbnB1dE5hbWU6IGlucHV0TmFtZSwgdmFsdWU6IGJ1dHRvbi52YWx1ZSwgcHJlc3NlZDogYnV0dG9uLnByZXNzZWQsIHRvdWNoZWQ6IGJ1dHRvbi50b3VjaGVkIH07XG4gICAgICAgICAgICBzdGF0ZXMucHVzaChidXR0b25TdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc3RhdGVzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEuY29udHJvbGxlciAtIGIuY29udHJvbGxlcjsgfSk7XG59XG5leHBvcnRzLmdldEJ1dHRvblN0YXRlID0gZ2V0QnV0dG9uU3RhdGU7XG5mdW5jdGlvbiBnZXRBeGlzU3RhdGUoaW5wdXROYW1lKSB7XG4gICAgdmFyIHN0YXRlcyA9IFtdO1xuICAgIGdldEdhbWVwYWRzKCkuZm9yRWFjaChmdW5jdGlvbiAoZykge1xuICAgICAgICBpZiAoZXhwb3J0cy5heGlzTWFwW2lucHV0TmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyIGF4aXNTdGF0ZSA9IHsgY29udHJvbGxlcjogZy5pbmRleCwgeDogZy5heGVzW2V4cG9ydHMuYXhpc01hcFtpbnB1dE5hbWVdWzBdXSwgeTogZy5heGVzW2V4cG9ydHMuYXhpc01hcFtpbnB1dE5hbWVdWzFdXSB9O1xuICAgICAgICAgICAgc3RhdGVzLnB1c2goYXhpc1N0YXRlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzdGF0ZXMuc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYS5jb250cm9sbGVyIC0gYi5jb250cm9sbGVyOyB9KTtcbn1cbmV4cG9ydHMuZ2V0QXhpc1N0YXRlID0gZ2V0QXhpc1N0YXRlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmtleWJvYXJkUmVsZWFzZSA9IGV4cG9ydHMua2V5Ym9hcmREb3duID0gZXhwb3J0cy5vbktleWJvYXJkUmVsZWFzZSA9IGV4cG9ydHMub25LZXlib2FyZERvd24gPSBleHBvcnRzLmdldElucHV0S2V5U3RhdGUgPSBleHBvcnRzLmdldEtleVN0YXRlID0gZXhwb3J0cy5nZXRNYXBwZWRLZXlzID0gZXhwb3J0cy5yZXNldEtleWJvYXJkTWFwcGluZ3MgPSBleHBvcnRzLmdldE1hcHBlZEtleSA9IGV4cG9ydHMuc2V0TWFwcGVkS2V5ID0gZXhwb3J0cy5yZXNldEtleXNTdGF0ZSA9IHZvaWQgMDtcbnZhciBpbnB1dF8xID0gcmVxdWlyZShcIi4vaW5wdXRcIik7XG4vKipcbiAqXG4gKiBHbG9iYWxzXG4gKlxuICovXG52YXIga2V5c1N0YXRlID0ge307XG52YXIga2V5c01hcCA9IHt9O1xudmFyIGtleWJvYXJkRG93bkhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7IH07XG52YXIga2V5Ym9hcmRSZWxlYXNlSGFuZGxlciA9IGZ1bmN0aW9uICgpIHsgfTtcbmZ1bmN0aW9uIHJlc2V0S2V5c1N0YXRlKCkge1xuICAgIGtleXNTdGF0ZSA9IHt9O1xufVxuZXhwb3J0cy5yZXNldEtleXNTdGF0ZSA9IHJlc2V0S2V5c1N0YXRlO1xuZnVuY3Rpb24gc2V0TWFwcGVkS2V5KGlucHV0TmFtZSwga2V5KSB7XG4gICAga2V5c01hcFtpbnB1dE5hbWVdID0ga2V5O1xufVxuZXhwb3J0cy5zZXRNYXBwZWRLZXkgPSBzZXRNYXBwZWRLZXk7XG5mdW5jdGlvbiBnZXRNYXBwZWRLZXkoaW5wdXROYW1lKSB7XG4gICAgaWYgKGtleXNNYXBbaW5wdXROYW1lXSkge1xuICAgICAgICByZXR1cm4ga2V5c01hcFtpbnB1dE5hbWVdO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmV4cG9ydHMuZ2V0TWFwcGVkS2V5ID0gZ2V0TWFwcGVkS2V5O1xuLyoqXG4gKlxuICogIEtleWJvYXJkIElucHV0IEZ1bmN0aW9uc1xuICpcbiAqL1xuZnVuY3Rpb24gcmVzZXRLZXlib2FyZE1hcHBpbmdzKCkge1xuICAgIGtleXNNYXAgPSB7XG4gICAgICAgICdsZWZ0JzogJ0Fycm93TGVmdCcsXG4gICAgICAgICdyaWdodCc6ICdBcnJvd1JpZ2h0JyxcbiAgICAgICAgJ3VwJzogJ0Fycm93VXAnLFxuICAgICAgICAnZG93bic6ICdBcnJvd0Rvd24nLFxuICAgICAgICAnYWN0aW9uJzogJyAnLFxuICAgICAgICAnY2FuY2VsJzogJ0VzY2FwZSdcbiAgICB9O1xufVxuZXhwb3J0cy5yZXNldEtleWJvYXJkTWFwcGluZ3MgPSByZXNldEtleWJvYXJkTWFwcGluZ3M7XG5mdW5jdGlvbiBnZXRNYXBwZWRLZXlzKCkge1xuICAgIHZhciBpbnB1dE1hcDtcbiAgICBPYmplY3Qua2V5cyhrZXlzTWFwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHJlbCA9IHsgaW5wdXROYW1lOiBrZXksIGtleToga2V5c01hcFtrZXldIH07XG4gICAgICAgIGlucHV0TWFwLnB1c2gocmVsKTtcbiAgICB9KTtcbiAgICByZXR1cm4gaW5wdXRNYXA7XG59XG5leHBvcnRzLmdldE1hcHBlZEtleXMgPSBnZXRNYXBwZWRLZXlzO1xuZnVuY3Rpb24gZ2V0S2V5U3RhdGUoc3RhdGVLZXkpIHtcbiAgICByZXR1cm4ga2V5c1N0YXRlW3N0YXRlS2V5XTtcbn1cbmV4cG9ydHMuZ2V0S2V5U3RhdGUgPSBnZXRLZXlTdGF0ZTtcbmZ1bmN0aW9uIGdldElucHV0S2V5U3RhdGUoaW5wdXROYW1lKSB7XG4gICAgcmV0dXJuIGdldEtleVN0YXRlKGdldE1hcHBlZEtleShpbnB1dE5hbWUpKTtcbn1cbmV4cG9ydHMuZ2V0SW5wdXRLZXlTdGF0ZSA9IGdldElucHV0S2V5U3RhdGU7XG5mdW5jdGlvbiBvbktleWJvYXJkRG93bihmbikge1xuICAgIGtleWJvYXJkRG93bkhhbmRsZXIgPSBmbjtcbn1cbmV4cG9ydHMub25LZXlib2FyZERvd24gPSBvbktleWJvYXJkRG93bjtcbmZ1bmN0aW9uIG9uS2V5Ym9hcmRSZWxlYXNlKGZuKSB7XG4gICAga2V5Ym9hcmRSZWxlYXNlSGFuZGxlciA9IGZuO1xufVxuZXhwb3J0cy5vbktleWJvYXJkUmVsZWFzZSA9IG9uS2V5Ym9hcmRSZWxlYXNlO1xuZnVuY3Rpb24ga2V5Ym9hcmREb3duKGUpIHtcbiAgICBrZXlzU3RhdGVbZS5rZXldID0gdHJ1ZTtcbiAgICBpZiAoa2V5c01hcFtlLmtleV0pIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2tleWJvYXJkIGRvd24nLCBlLmtleSwga2V5c01hcFtlLmtleV0sIGtleXNNYXApO1xuICAgICAgICAoMCwgaW5wdXRfMS5pbnB1dFByZXNzZWQpKGtleXNNYXBbZS5rZXldKTtcbiAgICB9XG4gICAga2V5Ym9hcmREb3duSGFuZGxlcihlKTtcbn1cbmV4cG9ydHMua2V5Ym9hcmREb3duID0ga2V5Ym9hcmREb3duO1xuZnVuY3Rpb24ga2V5Ym9hcmRSZWxlYXNlKGUpIHtcbiAgICBrZXlzU3RhdGVbZS5rZXldID0gZmFsc2U7XG4gICAgKDAsIGlucHV0XzEuaW5wdXRSZWxlYXNlZCkoZS5rZXkpO1xuICAgIGtleWJvYXJkUmVsZWFzZUhhbmRsZXIoZSk7XG59XG5leHBvcnRzLmtleWJvYXJkUmVsZWFzZSA9IGtleWJvYXJkUmVsZWFzZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnVwZGF0ZUlucHV0U3RhdGUgPSBleHBvcnRzLmF4aXNQcmVzc2VkID0gZXhwb3J0cy5idXR0b25QcmVzc2VkID0gZXhwb3J0cy5pbnB1dFJlbGVhc2VkID0gZXhwb3J0cy5pbnB1dFByZXNzZWQgPSBleHBvcnRzLnJlc2V0SW5wdXRNYXBzID0gZXhwb3J0cy5pbml0aWFsaXplID0gZXhwb3J0cy5JbnB1dFN0YXRlID0gZXhwb3J0cy5JbnB1dFR5cGUgPSBleHBvcnRzLm9uSW5wdXRQcmVzc2VkID0gZXhwb3J0cy5vbklucHV0UmVsZWFzZWQgPSB2b2lkIDA7XG52YXIgc2NlbmVzID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL3NjZW5lc1wiKSk7XG52YXIgZ2FtZXBhZCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9pbnB1dC1nYW1lcGFkXCIpKTtcbnZhciBrZXlib2FyZCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9pbnB1dC1rZXlib2FyZFwiKSk7XG4vKipcbiAqXG4gKiBHbG9iYWxzXG4gKlxuICovXG52YXIgb25JbnB1dFJlbGVhc2VkID0gZnVuY3Rpb24gKCkgeyB9O1xuZXhwb3J0cy5vbklucHV0UmVsZWFzZWQgPSBvbklucHV0UmVsZWFzZWQ7XG52YXIgb25JbnB1dFByZXNzZWQgPSBmdW5jdGlvbiAoKSB7IH07XG5leHBvcnRzLm9uSW5wdXRQcmVzc2VkID0gb25JbnB1dFByZXNzZWQ7XG52YXIgaW5wdXRNYXBzO1xudmFyIHNldHRpbmdzID0ge1xuICAgIGF4aXNQcmVzc2VkVGhyZXNob2xkOiAwXG59O1xuLyoqXG4gKlxuICogRW51bXNcbiAqXG4gKi9cbnZhciBJbnB1dFR5cGU7XG4oZnVuY3Rpb24gKElucHV0VHlwZSkge1xuICAgIElucHV0VHlwZVtJbnB1dFR5cGVbXCJLZXlib2FyZFwiXSA9IDBdID0gXCJLZXlib2FyZFwiO1xuICAgIElucHV0VHlwZVtJbnB1dFR5cGVbXCJHYW1lcGFkQnV0dG9uXCJdID0gMV0gPSBcIkdhbWVwYWRCdXR0b25cIjtcbiAgICBJbnB1dFR5cGVbSW5wdXRUeXBlW1wiR2FtZXBhZEF4aXNcIl0gPSAyXSA9IFwiR2FtZXBhZEF4aXNcIjtcbn0pKElucHV0VHlwZSB8fCAoZXhwb3J0cy5JbnB1dFR5cGUgPSBJbnB1dFR5cGUgPSB7fSkpO1xudmFyIElucHV0U3RhdGU7XG4oZnVuY3Rpb24gKElucHV0U3RhdGUpIHtcbiAgICBJbnB1dFN0YXRlW0lucHV0U3RhdGVbXCJSZWxlYXNlZFwiXSA9IDBdID0gXCJSZWxlYXNlZFwiO1xuICAgIElucHV0U3RhdGVbSW5wdXRTdGF0ZVtcIlByZXNzZWRcIl0gPSAxXSA9IFwiUHJlc3NlZFwiO1xuICAgIElucHV0U3RhdGVbSW5wdXRTdGF0ZVtcIlJlbGVhc2luZ1wiXSA9IDJdID0gXCJSZWxlYXNpbmdcIjtcbn0pKElucHV0U3RhdGUgfHwgKGV4cG9ydHMuSW5wdXRTdGF0ZSA9IElucHV0U3RhdGUgPSB7fSkpO1xuZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICBrZXlib2FyZC5yZXNldEtleXNTdGF0ZSgpO1xuICAgIGtleWJvYXJkLnJlc2V0S2V5Ym9hcmRNYXBwaW5ncygpO1xuICAgIGdhbWVwYWQucmVzZXRHYW1lcGFkQnV0dG9uTWFwcGluZ3MoKTtcbiAgICBnYW1lcGFkLnJlc2V0R2FtZXBhZEF4aXNNYXBwaW5ncygpO1xuICAgIGdhbWVwYWQucmVzZXRCdXR0b25zU3RhdGUoKTtcbiAgICBpbnB1dE1hcHMgPSB7fTtcbiAgICByZXNldElucHV0TWFwcygpO1xuICAgIGdhbWVwYWQucmVzZXRHYW1lcGFkVGltZXN0YW1wcygpO1xuICAgIGdhbWVwYWQuc2V0R2FtZXBhZENvbm5lY3RlZChmdW5jdGlvbiAoKSB7IH0pO1xuICAgIGdhbWVwYWQuc2V0R2FtZXBhZERpc2Nvbm5lY3RlZChmdW5jdGlvbiAoKSB7IH0pO1xuICAgIGdhbWVwYWQuc2V0R2FtZXBhZFVwZGF0ZWQoZnVuY3Rpb24gKCkgeyB9KTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleWJvYXJkLmtleWJvYXJkRG93bik7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlib2FyZC5rZXlib2FyZERvd24pO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIGtleWJvYXJkLmtleWJvYXJkUmVsZWFzZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywga2V5Ym9hcmQua2V5Ym9hcmRSZWxlYXNlKTtcbiAgICB3aW5kb3cub25nYW1lcGFkY29ubmVjdGVkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGdhbWVwYWQuZ2FtZXBhZHNUaW1lc3RhbXBzW2V2ZW50LmdhbWVwYWQuaW5kZXhdID0gMDtcbiAgICAgICAgZ2FtZXBhZC5nYW1lcGFkQ29ubmVjdGVkKGV2ZW50KTtcbiAgICB9O1xuICAgIHdpbmRvdy5vbmdhbWVwYWRkaXNjb25uZWN0ZWQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZ2FtZXBhZC5nYW1lcGFkRGlzY29ubmVjdGVkKGV2ZW50KTtcbiAgICAgICAgZ2FtZXBhZC5nYW1lcGFkc1RpbWVzdGFtcHNbZXZlbnQuZ2FtZXBhZC5pbmRleF0gPSB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBleHBvcnRzLm9uSW5wdXRQcmVzc2VkID0gZnVuY3Rpb24gKGlucHV0TmFtZSkge1xuICAgICAgICBjb25zb2xlLmxvZygncHJlc3NlZCcsIGlucHV0TmFtZSk7XG4gICAgICAgIHNjZW5lcy5oYW5kbGVJbnB1dChpbnB1dE5hbWUsIDEsIGZhbHNlKTtcbiAgICB9O1xuICAgIGV4cG9ydHMub25JbnB1dFJlbGVhc2VkID0gZnVuY3Rpb24gKGlucHV0TmFtZSkge1xuICAgICAgICBjb25zb2xlLmxvZygncmVsZWFzZWQnLCBpbnB1dE5hbWUpO1xuICAgICAgICBzY2VuZXMuaGFuZGxlSW5wdXQoaW5wdXROYW1lLCAwLCB0cnVlKTtcbiAgICB9O1xufVxuZXhwb3J0cy5pbml0aWFsaXplID0gaW5pdGlhbGl6ZTtcbi8qKlxuICogUmVzZXQgYnV0dG9uIG1hcHBpbmdzIHRvIGRlZmF1bHRzLlxuICovXG5mdW5jdGlvbiByZXNldElucHV0TWFwcygpIHtcbiAgICBpbnB1dE1hcHMgPSB7XG4gICAgICAgICdsZWZ0JzogW1xuICAgICAgICAgICAgeyB0eXBlOiBJbnB1dFR5cGUuS2V5Ym9hcmQsIG1hcEtleTogJ0Fycm93TGVmdCcsIGF4aXNQbGFuZTogJycsIGF4aXNDaGVja0RpcmVjdGlvbjogMCB9LFxuICAgICAgICAgICAgeyB0eXBlOiBJbnB1dFR5cGUuR2FtZXBhZEF4aXMsIG1hcEtleTogJ2xlZnRBeGlzJywgYXhpc1BsYW5lOiAneCcsIGF4aXNDaGVja0RpcmVjdGlvbjogLTEgfVxuICAgICAgICBdLFxuICAgICAgICAncmlnaHQnOiBbXG4gICAgICAgICAgICB7IHR5cGU6IElucHV0VHlwZS5LZXlib2FyZCwgbWFwS2V5OiAnQXJyb3dSaWdodCcsIGF4aXNQbGFuZTogJycsIGF4aXNDaGVja0RpcmVjdGlvbjogMCB9LFxuICAgICAgICAgICAgeyB0eXBlOiBJbnB1dFR5cGUuR2FtZXBhZEF4aXMsIG1hcEtleTogJ2xlZnRBeGlzJywgYXhpc1BsYW5lOiAneCcsIGF4aXNDaGVja0RpcmVjdGlvbjogMSB9XG4gICAgICAgIF0sXG4gICAgICAgICd1cCc6IFtcbiAgICAgICAgICAgIHsgdHlwZTogSW5wdXRUeXBlLktleWJvYXJkLCBtYXBLZXk6ICdBcnJvd1VwJywgYXhpc1BsYW5lOiAnJywgYXhpc0NoZWNrRGlyZWN0aW9uOiAwIH0sXG4gICAgICAgICAgICB7IHR5cGU6IElucHV0VHlwZS5HYW1lcGFkQXhpcywgbWFwS2V5OiAnbGVmdEF4aXMnLCBheGlzUGxhbmU6ICd5JywgYXhpc0NoZWNrRGlyZWN0aW9uOiAtMSB9XG4gICAgICAgIF0sXG4gICAgICAgICdkb3duJzogW1xuICAgICAgICAgICAgeyB0eXBlOiBJbnB1dFR5cGUuS2V5Ym9hcmQsIG1hcEtleTogJ0Fycm93RG93bicsIGF4aXNQbGFuZTogJycsIGF4aXNDaGVja0RpcmVjdGlvbjogMCB9LFxuICAgICAgICAgICAgeyB0eXBlOiBJbnB1dFR5cGUuR2FtZXBhZEF4aXMsIG1hcEtleTogJ2xlZnRBeGlzJywgYXhpc1BsYW5lOiAneScsIGF4aXNDaGVja0RpcmVjdGlvbjogMSB9XG4gICAgICAgIF0sXG4gICAgICAgICdhY3Rpb24nOiBbXG4gICAgICAgICAgICB7IHR5cGU6IElucHV0VHlwZS5LZXlib2FyZCwgbWFwS2V5OiAnICcsIGF4aXNQbGFuZTogJycsIGF4aXNDaGVja0RpcmVjdGlvbjogMCB9LFxuICAgICAgICAgICAgeyB0eXBlOiBJbnB1dFR5cGUuR2FtZXBhZEJ1dHRvbiwgbWFwS2V5OiAnYWN0aW9uJywgYXhpc1BsYW5lOiAnJywgYXhpc0NoZWNrRGlyZWN0aW9uOiAwIH1cbiAgICAgICAgXSxcbiAgICAgICAgJ2NhbmNlbCc6IFtcbiAgICAgICAgICAgIHsgdHlwZTogSW5wdXRUeXBlLktleWJvYXJkLCBtYXBLZXk6ICdFc2NhcGUnLCBheGlzUGxhbmU6ICcnLCBheGlzQ2hlY2tEaXJlY3Rpb246IDAgfSxcbiAgICAgICAgICAgIHsgdHlwZTogSW5wdXRUeXBlLkdhbWVwYWRCdXR0b24sIG1hcEtleTogJ2NhbmNlbCcsIGF4aXNQbGFuZTogJycsIGF4aXNDaGVja0RpcmVjdGlvbjogMCB9XG4gICAgICAgIF0sXG4gICAgfTtcbn1cbmV4cG9ydHMucmVzZXRJbnB1dE1hcHMgPSByZXNldElucHV0TWFwcztcbi8qKlxuICogV2hldGhlciBvciBub3QgdGhlIHNwZWNpZmllZCBidXR0b24gb3Iga2V5IHRoYXQgbWFwcyB0byBpbnB1dE5hbWUgaXMgcHJlc3NlZC4gTm90IHVzZWQgZm9yIGF4ZXMgb3IgdHJpZ2dlcnMuXG4gKiBAcGFyYW0gaW5wdXROYW1lIElucHV0IG5hbWUgbWFwcGVkIHRvIGEgYnV0dG9uLlxuICogQHBhcmFtIGdhbWVwYWROdW1iZXJcbiAqIEByZXR1cm5zXG4gKi9cbmZ1bmN0aW9uIGlucHV0UHJlc3NlZChpbnB1dE5hbWUsIGdhbWVwYWROdW1iZXIpIHtcbiAgICBnYW1lcGFkTnVtYmVyID0gZ2FtZXBhZE51bWJlciA9PT0gdW5kZWZpbmVkID8gMCA6IGdhbWVwYWROdW1iZXI7XG4gICAgdmFyIGlucHV0cyA9IFtdO1xuICAgIE9iamVjdC5rZXlzKGlucHV0TWFwcykuZmlsdGVyKGZ1bmN0aW9uIChmKSB7IHJldHVybiBmID09PSBpbnB1dE5hbWU7IH0pLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gaW5wdXRzLnB1c2guYXBwbHkoaW5wdXRzLCBpbnB1dE1hcHNba2V5XSk7IH0pO1xuICAgIHZhciByZXQgPSBmYWxzZTtcbiAgICBpbnB1dHMuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgICAgaWYgKGlucHV0LnR5cGUgPT09IElucHV0VHlwZS5LZXlib2FyZCAmJiBrZXlib2FyZC5nZXRJbnB1dEtleVN0YXRlKGlucHV0TmFtZSkpIHtcbiAgICAgICAgICAgIHJldCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaW5wdXQudHlwZSA9PT0gSW5wdXRUeXBlLkdhbWVwYWRBeGlzICYmIGF4aXNQcmVzc2VkKGlucHV0Lm1hcEtleSwgaW5wdXQuYXhpc1BsYW5lLCBpbnB1dC5heGlzQ2hlY2tEaXJlY3Rpb24sIGdhbWVwYWROdW1iZXIpKSB7XG4gICAgICAgICAgICByZXQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlucHV0LnR5cGUgPT09IElucHV0VHlwZS5HYW1lcGFkQnV0dG9uICYmIGJ1dHRvblByZXNzZWQoaW5wdXQubWFwS2V5LCBnYW1lcGFkTnVtYmVyKSkge1xuICAgICAgICAgICAgcmV0ID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIC8vIEhhbmRsZSBidXR0b24gc3RhdGUgc28gd2UgY2FuIGZpcmUgc3ludGhldGljIGV2ZW50IGNhbGxiYWNrcy5cbiAgICAgICAgICAgIC8vIGlmIChidXR0b25zU3RhdGVbaW5wdXROYW1lXSA9PT0gdW5kZWZpbmVkIHx8IGJ1dHRvbnNTdGF0ZVtpbnB1dE5hbWVdID09PSBJbnB1dFN0YXRlLlJlbGVhc2VkKSB7XG4gICAgICAgICAgICAvLyAgICAgYnV0dG9uc1N0YXRlW2lucHV0TmFtZV0gPSBJbnB1dFN0YXRlLlByZXNzZWRcbiAgICAgICAgICAgIC8vICAgICBvbklucHV0UHJlc3NlZChpbnB1dE5hbWUsIGdhbWVwYWROdW1iZXIpXG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAocmV0KSB7XG4gICAgICAgICgwLCBleHBvcnRzLm9uSW5wdXRQcmVzc2VkKShpbnB1dE5hbWUsIGdhbWVwYWROdW1iZXIpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufVxuZXhwb3J0cy5pbnB1dFByZXNzZWQgPSBpbnB1dFByZXNzZWQ7XG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoZSBzcGVjaWZpZWQgYnV0dG9uIG9yIGtleSB0aGF0IG1hcHMgdG8gaW5wdXROYW1lIGlzIHJlbGVhc2VkLiBOb3QgdXNlZCBmb3IgYXhlcyBvciB0cmlnZ2Vycy5cbiAqIEBwYXJhbSBpbnB1dE5hbWUgSW5wdXQgbmFtZSBtYXBwZWQgdG8gYSBidXR0b24uXG4gKiBAcGFyYW0gZ2FtZXBhZE51bWJlclxuICogQHJldHVybnNcbiAqL1xuZnVuY3Rpb24gaW5wdXRSZWxlYXNlZChpbnB1dE5hbWUsIGdhbWVwYWROdW1iZXIpIHtcbiAgICBnYW1lcGFkTnVtYmVyID0gZ2FtZXBhZE51bWJlciA9PT0gdW5kZWZpbmVkID8gMCA6IGdhbWVwYWROdW1iZXI7XG4gICAgdmFyIGlucHV0cyA9IFtdO1xuICAgIE9iamVjdC5rZXlzKGlucHV0TWFwcykuZmlsdGVyKGZ1bmN0aW9uIChmKSB7IHJldHVybiBmID09PSBpbnB1dE5hbWU7IH0pLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gaW5wdXRzLnB1c2guYXBwbHkoaW5wdXRzLCBpbnB1dE1hcHNba2V5XSk7IH0pO1xuICAgIHZhciByZXQgPSBmYWxzZTtcbiAgICBpbnB1dHMuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgICAgaWYgKGlucHV0LnR5cGUgPT09IElucHV0VHlwZS5LZXlib2FyZCAmJiAha2V5Ym9hcmQuZ2V0SW5wdXRLZXlTdGF0ZShpbnB1dE5hbWUpKSB7XG4gICAgICAgICAgICByZXQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlucHV0LnR5cGUgPT09IElucHV0VHlwZS5HYW1lcGFkQXhpcyAmJiAhYXhpc1ByZXNzZWQoaW5wdXQubWFwS2V5LCBpbnB1dC5heGlzUGxhbmUsIGlucHV0LmF4aXNDaGVja0RpcmVjdGlvbiwgZ2FtZXBhZE51bWJlcikpIHtcbiAgICAgICAgICAgIHJldCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaW5wdXQudHlwZSA9PT0gSW5wdXRUeXBlLkdhbWVwYWRCdXR0b24gJiYgIWJ1dHRvblByZXNzZWQoaW5wdXQubWFwS2V5LCBnYW1lcGFkTnVtYmVyKSkge1xuICAgICAgICAgICAgcmV0ID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIEhhbmRsZSBidXR0b24gc3RhdGUgc28gd2UgY2FuIGZpcmUgc3ludGhldGljIGV2ZW50IGNhbGxiYWNrcy5cbiAgICAgICAgICAgIGlmIChnYW1lcGFkLmJ1dHRvbnNTdGF0ZVtpbnB1dE5hbWVdID09PSB1bmRlZmluZWQgfHwgZ2FtZXBhZC5idXR0b25zU3RhdGVbaW5wdXROYW1lXSA9PT0gSW5wdXRTdGF0ZS5SZWxlYXNpbmcpIHtcbiAgICAgICAgICAgICAgICBnYW1lcGFkLmJ1dHRvbnNTdGF0ZVtpbnB1dE5hbWVdID0gSW5wdXRTdGF0ZS5SZWxlYXNlZDtcbiAgICAgICAgICAgICAgICAoMCwgZXhwb3J0cy5vbklucHV0UmVsZWFzZWQpKGlucHV0TmFtZSwgZ2FtZXBhZE51bWJlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAocmV0KSB7XG4gICAgICAgICgwLCBleHBvcnRzLm9uSW5wdXRQcmVzc2VkKShpbnB1dE5hbWUsIGdhbWVwYWROdW1iZXIpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufVxuZXhwb3J0cy5pbnB1dFJlbGVhc2VkID0gaW5wdXRSZWxlYXNlZDtcbmZ1bmN0aW9uIGJ1dHRvblByZXNzZWQoaW5wdXROYW1lLCBnYW1lcGFkTnVtYmVyKSB7XG4gICAgZ2FtZXBhZE51bWJlciA9IGdhbWVwYWROdW1iZXIgPT09IHVuZGVmaW5lZCA/IDAgOiBnYW1lcGFkTnVtYmVyO1xuICAgIHZhciBidXR0b24gPSBnYW1lcGFkLmdldEJ1dHRvblN0YXRlKGlucHV0TmFtZSlbZ2FtZXBhZE51bWJlcl07XG4gICAgaWYgKGJ1dHRvbiAmJiBidXR0b24ucHJlc3NlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0cy5idXR0b25QcmVzc2VkID0gYnV0dG9uUHJlc3NlZDtcbmZ1bmN0aW9uIGF4aXNQcmVzc2VkKGlucHV0TmFtZSwgYXhpc1BsYW5lLCBkaXJlY3Rpb24sIGdhbWVwYWROdW1iZXIpIHtcbiAgICBnYW1lcGFkTnVtYmVyID0gZ2FtZXBhZE51bWJlciA9PT0gdW5kZWZpbmVkID8gMCA6IGdhbWVwYWROdW1iZXI7XG4gICAgdmFyIHN0YXRlID0gZ2FtZXBhZC5nZXRBeGlzU3RhdGUoaW5wdXROYW1lKVtnYW1lcGFkTnVtYmVyXTtcbiAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA8IDAgJiYgc3RhdGVbYXhpc1BsYW5lXSA8IDAgJiYgc3RhdGVbYXhpc1BsYW5lXSA8PSAtc2V0dGluZ3MuYXhpc1ByZXNzZWRUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA+IDAgJiYgc3RhdGVbYXhpc1BsYW5lXSA+IDAgJiYgc3RhdGVbYXhpc1BsYW5lXSA+PSBzZXR0aW5ncy5heGlzUHJlc3NlZFRocmVzaG9sZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0cy5heGlzUHJlc3NlZCA9IGF4aXNQcmVzc2VkO1xuZnVuY3Rpb24gdXBkYXRlSW5wdXRTdGF0ZSgpIHtcbiAgICBnYW1lcGFkLmdldEdhbWVwYWRzKCkuZm9yRWFjaChmdW5jdGlvbiAoZywgaW5kZXgpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoaW5wdXRNYXBzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGlucHV0UHJlc3NlZChrZXksIGluZGV4KTtcbiAgICAgICAgICAgIGlucHV0UmVsZWFzZWQoa2V5LCBpbmRleCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZXhwb3J0cy51cGRhdGVJbnB1dFN0YXRlID0gdXBkYXRlSW5wdXRTdGF0ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5NZW51SW5wdXRUeXBlID0gdm9pZCAwO1xudmFyIHNjZW5lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vc2NlbmVcIikpO1xudmFyIGZvbnQgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vZm9udFwiKSk7XG52YXIgbWVudXNfMSA9IHJlcXVpcmUoXCIuL21lbnVzXCIpO1xudmFyIE1lbnVJbnB1dFR5cGU7XG4oZnVuY3Rpb24gKE1lbnVJbnB1dFR5cGUpIHtcbiAgICBNZW51SW5wdXRUeXBlW01lbnVJbnB1dFR5cGVbXCJTZWxlY3Rpb25cIl0gPSAwXSA9IFwiU2VsZWN0aW9uXCI7XG4gICAgTWVudUlucHV0VHlwZVtNZW51SW5wdXRUeXBlW1wiQ2FuY2VsXCJdID0gMV0gPSBcIkNhbmNlbFwiO1xuICAgIE1lbnVJbnB1dFR5cGVbTWVudUlucHV0VHlwZVtcIkluY3JlbWVudFByaW1hcnlcIl0gPSAyXSA9IFwiSW5jcmVtZW50UHJpbWFyeVwiO1xuICAgIE1lbnVJbnB1dFR5cGVbTWVudUlucHV0VHlwZVtcIkRlY3JlbWVudFByaW1hcnlcIl0gPSAzXSA9IFwiRGVjcmVtZW50UHJpbWFyeVwiO1xuICAgIE1lbnVJbnB1dFR5cGVbTWVudUlucHV0VHlwZVtcIkluY3JlbWVudFNlY29uZGFyeVwiXSA9IDRdID0gXCJJbmNyZW1lbnRTZWNvbmRhcnlcIjtcbiAgICBNZW51SW5wdXRUeXBlW01lbnVJbnB1dFR5cGVbXCJEZWNyZW1lbnRTZWNvbmRhcnlcIl0gPSA1XSA9IFwiRGVjcmVtZW50U2Vjb25kYXJ5XCI7XG59KShNZW51SW5wdXRUeXBlIHx8IChleHBvcnRzLk1lbnVJbnB1dFR5cGUgPSBNZW51SW5wdXRUeXBlID0ge30pKTtcbi8qKlxuICogTWVudSBGbGF2b3VyIG9mIFNjZW5lcy5cbiAqL1xudmFyIE1lbnUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1lbnUsIF9zdXBlcik7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gaWQgU2NlbmUgaWQuXG4gICAgICogQHBhcmFtIGFjdGl2ZSBXaGV0aGVyIG9yIG5vdCB0aGUgc2NlbmUgc3RhcnRzIGFjdGl2YXRlZC5cbiAgICAgKiBAcGFyYW0gZGlyZWN0aW9uIExheW91dCBkaXJlY3Rpb24uXG4gICAgICogQHBhcmFtIG9wdGlvbnMgTWVudSBvcHRpb25zIChpdGVtcykuXG4gICAgICovXG4gICAgZnVuY3Rpb24gTWVudShpZCwgYWN0aXZlLCBkaXJlY3Rpb24sIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGRlbHRhKSB7XG4gICAgICAgICAgICBfdGhpcy5EcmF3KGRlbHRhKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBpZCwgYW5pbWF0aW9uRnJhbWUsIGFjdGl2ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gY29uc29sZS5sb2coJ2V2ZW50JywgZXZlbnQpOyB9KSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5vZmZzZXRYID0gMDtcbiAgICAgICAgX3RoaXMub2Zmc2V0WSA9IDA7XG4gICAgICAgIF90aGlzLnNlbGVjdGVkT3B0aW9uID0gMDtcbiAgICAgICAgX3RoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIF90aGlzLmNvbG9yID0geyByOiAxMjgsIGc6IDEyOCwgYjogMTI4LCBhOiAyNTUgfTtcbiAgICAgICAgX3RoaXMuc2VsZWN0ZWRDb2xvciA9IHsgcjogMjQ1LCBnOiAyNDUsIGI6IDI0NSwgYTogMjU1IH07XG4gICAgICAgIF90aGlzLnNlbGVjdFNwZWVkID0gMC4xO1xuICAgICAgICBfdGhpcy5pbmNyZW1lbnRTZWxlY3Rpb25JbnB1dCA9IGRpcmVjdGlvbiA9PT0gbWVudXNfMS5MYXlvdXREaXJlY3Rpb24uVG9wRG93biA/ICdkb3duJyA6ICdyaWdodCc7XG4gICAgICAgIF90aGlzLmRlY3JlbWVudFNlbGVjdGlvbklucHV0ID0gZGlyZWN0aW9uID09PSBtZW51c18xLkxheW91dERpcmVjdGlvbi5Ub3BEb3duID8gJ3VwJyA6ICdsZWZ0JztcbiAgICAgICAgX3RoaXMuaW5jcmVtZW50U2Vjb25kYXJ5SW5wdXQgPSBkaXJlY3Rpb24gPT09IG1lbnVzXzEuTGF5b3V0RGlyZWN0aW9uLlRvcERvd24gPyAncmlnaHQnIDogJ2Rvd24nO1xuICAgICAgICBfdGhpcy5kZWNyZW1lbnRTZWNvbmRhcnlJbnB1dCA9IGRpcmVjdGlvbiA9PT0gbWVudXNfMS5MYXlvdXREaXJlY3Rpb24uVG9wRG93biA/ICdsZWZ0JyA6ICd1cCc7XG4gICAgICAgIF90aGlzLmFjdGlvbklucHV0ID0gJ2FjdGlvbic7XG4gICAgICAgIF90aGlzLmNhbmNlbElucHV0ID0gJ2NhbmNlbCc7XG4gICAgICAgIF90aGlzLmhhbmRsZUlucHV0ID0gZnVuY3Rpb24gKGlucHV0LCBhbXQsIHJlbGVhc2VkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbWVudSBzY2VuZSBoYW5kbGVJbnB1dCcsIGlucHV0LCBhbXQsIHJlbGVhc2VkKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMub25BY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICAgICAgX3RoaXMub25EZWFjdGl2YXRlID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBtZW51IG9wdGlvbi5cbiAgICAgKi9cbiAgICBNZW51LnByb3RvdHlwZS5TZWxlY3RlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uc1tNYXRoLmZsb29yKHRoaXMuc2VsZWN0ZWRPcHRpb24pXTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERyYXcgdGhlIG1lbnUuXG4gICAgICogQHBhcmFtIGRlbHRhXG4gICAgICovXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgTWVudS5wcm90b3R5cGUuRHJhdyA9IGZ1bmN0aW9uIChkZWx0YSkge1xuICAgICAgICAvLyBpZiAoaW5wdXQuaW5wdXRQcmVzc2VkKHRoaXMuaW5jcmVtZW50U2VsZWN0aW9uSW5wdXQpKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uICs9IDEgKiB0aGlzLnNlbGVjdFNwZWVkXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5zZWxlY3RlZE9wdGlvbiA+PSB0aGlzLm9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IDBcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIHRoaXMuU2VsZWN0ZWQoKS5vbklucHV0KHRoaXMsIHRoaXMuU2VsZWN0ZWQoKSwgTWVudUlucHV0VHlwZS5JbmNyZW1lbnRQcmltYXJ5KVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmIChpbnB1dC5pbnB1dFByZXNzZWQodGhpcy5kZWNyZW1lbnRTZWxlY3Rpb25JbnB1dCkpIHtcbiAgICAgICAgLy8gICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gKz0gLTEgKiB0aGlzLnNlbGVjdFNwZWVkXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5zZWxlY3RlZE9wdGlvbiA8PSAwKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IHRoaXMub3B0aW9ucy5sZW5ndGggLSAxXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICB0aGlzLlNlbGVjdGVkKCkub25JbnB1dCh0aGlzLCB0aGlzLlNlbGVjdGVkKCksIE1lbnVJbnB1dFR5cGUuRGVjcmVtZW50UHJpbWFyeSlcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBpZiAoaW5wdXQuaW5wdXRQcmVzc2VkKHRoaXMuYWN0aW9uSW5wdXQpICYmIHRoaXMuU2VsZWN0ZWQoKS5vbklucHV0KSB7XG4gICAgICAgIC8vICAgICB0aGlzLlNlbGVjdGVkKCkub25JbnB1dCh0aGlzLCB0aGlzLlNlbGVjdGVkKCksIE1lbnVJbnB1dFR5cGUuU2VsZWN0aW9uKVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmIChpbnB1dC5pbnB1dFByZXNzZWQodGhpcy5jYW5jZWxJbnB1dCkgJiYgdGhpcy5TZWxlY3RlZCgpLm9uSW5wdXQpIHtcbiAgICAgICAgLy8gICAgIHRoaXMuU2VsZWN0ZWQoKS5vbklucHV0KHRoaXMsIHRoaXMuU2VsZWN0ZWQoKSwgTWVudUlucHV0VHlwZS5DYW5jZWwpXG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gaWYgKGlucHV0LmlucHV0UHJlc3NlZCh0aGlzLmluY3JlbWVudFNlY29uZGFyeUlucHV0KSAmJiB0aGlzLlNlbGVjdGVkKCkub25JbnB1dCkge1xuICAgICAgICAvLyAgICAgdGhpcy5TZWxlY3RlZCgpLm9uSW5wdXQodGhpcywgdGhpcy5TZWxlY3RlZCgpLCBNZW51SW5wdXRUeXBlLkluY3JlbWVudFNlY29uZGFyeSlcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBpZiAoaW5wdXQuaW5wdXRQcmVzc2VkKHRoaXMuZGVjcmVtZW50U2Vjb25kYXJ5SW5wdXQpICYmIHRoaXMuU2VsZWN0ZWQoKS5vbklucHV0KSB7XG4gICAgICAgIC8vICAgICB0aGlzLlNlbGVjdGVkKCkub25JbnB1dCh0aGlzLCB0aGlzLlNlbGVjdGVkKCksIE1lbnVJbnB1dFR5cGUuRGVjcmVtZW50U2Vjb25kYXJ5KVxuICAgICAgICAvLyB9XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChvcHRpb24sIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgY29sciA9IE1hdGguZmxvb3IoX3RoaXMuc2VsZWN0ZWRPcHRpb24pID09PSBpbmRleCA/IF90aGlzLnNlbGVjdGVkQ29sb3IgOiBfdGhpcy5jb2xvcjtcbiAgICAgICAgICAgIGZvbnQuZHJhd1RleHQob3B0aW9uLnJlY3QueCwgb3B0aW9uLnJlY3QueSwgb3B0aW9uLnRleHQsIGNvbHIpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBNZW51O1xufShzY2VuZV8xLmRlZmF1bHQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IE1lbnU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5MYXlvdXRNZW51ID0gZXhwb3J0cy5MYXlvdXREaXJlY3Rpb24gPSB2b2lkIDA7XG52YXIgcmVjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3JlY3RcIikpO1xudmFyIGZvbnRzID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL2ZvbnRcIikpO1xudmFyIHNjZW5lcyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9zY2VuZXNcIikpO1xudmFyIG1lbnVfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9tZW51XCIpKTtcbnZhciBMYXlvdXREaXJlY3Rpb247XG4oZnVuY3Rpb24gKExheW91dERpcmVjdGlvbikge1xuICAgIExheW91dERpcmVjdGlvbltMYXlvdXREaXJlY3Rpb25bXCJUb3BEb3duXCJdID0gMF0gPSBcIlRvcERvd25cIjtcbiAgICBMYXlvdXREaXJlY3Rpb25bTGF5b3V0RGlyZWN0aW9uW1wiTGVmdFRvUmlnaHRcIl0gPSAxXSA9IFwiTGVmdFRvUmlnaHRcIjtcbn0pKExheW91dERpcmVjdGlvbiB8fCAoZXhwb3J0cy5MYXlvdXREaXJlY3Rpb24gPSBMYXlvdXREaXJlY3Rpb24gPSB7fSkpO1xuLyoqXG4gKiBUYWtlIGEgbGlzdCBvZiBzdHJpbmdzIGFuZCBjcmVhdGUgYSBtZW51IHdpdGggdGhlIG9wdGlvbnMgYXV0b21hdGljYWxseSBsYWlkIG91dC5cbiAqIEBwYXJhbSBvcHRpb25zIEl0ZW1zIGluIHRoZSBtZW51IGxpc3QuXG4gKiBAcGFyYW0gZGlyZWN0aW9uIFRvcERvd24gKHJvdykgb3IgTGVmdFRvUmlnaHQgKGNvbHVtbikgbGF5b3V0LlxuICogQHBhcmFtIG1hcmdpbiBOdW1iZXIgb2YgcGl4ZWxzIHRvIGFkZCBiZXR3ZWVuIG9wdGlvbnMuXG4gKiBAcGFyYW0gc3RhcnRYIFRvcCBsZWZ0IGNvb3JkaW5hdGUgb2Ygc3RhcnRpbmcgcG9pbnQuXG4gKiBAcGFyYW0gc3RhcnRZIFRvcCBsZWZ0IGNvb3JkaW5hdGUgb2Ygc3RhcnRpbmcgcG9pbnQuXG4gKiBAcGFyYW0gZXh0cmFzIEV4dHJhIG9wdGlvbnMgZm9yIGxheW91dCAob3B0aW9uYWwpLlxuICogQHJldHVybnNcbiAqL1xuZnVuY3Rpb24gTGF5b3V0TWVudShpZCwgb3B0aW9ucywgZGlyZWN0aW9uLCBtYXJnaW4sIHN0YXJ0WCwgc3RhcnRZLCBuZXh0U2NlbmVJZCwgcHJldlNjZW5lSWQsIGV4dHJhcykge1xuICAgIHZhciBtZW51T3B0aW9ucyA9IFtdO1xuICAgIHZhciBkeCA9IHN0YXJ0WDtcbiAgICB2YXIgZHkgPSBzdGFydFk7XG4gICAgb3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgdmFyIHcgPSBmb250cy50ZXh0V2lkdGgodmFsdWUpO1xuICAgICAgICB2YXIgaCA9IGZvbnRzLnRleHRIZWlnaHQodmFsdWUpO1xuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBMYXlvdXREaXJlY3Rpb24uVG9wRG93bikge1xuICAgICAgICAgICAgZHkgKz0gaCArIG1hcmdpbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT09IExheW91dERpcmVjdGlvbi5MZWZ0VG9SaWdodCkge1xuICAgICAgICAgICAgZHggKz0gdyArIG1hcmdpbjtcbiAgICAgICAgfVxuICAgICAgICAvLyBEZWZhdWx0IGJlaGF2aW91ci5cbiAgICAgICAgdmFyIGZuSW5wdXQgPSBmdW5jdGlvbiAobWVudSwgb3B0aW9uLCBldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50ID09PSBtZW51XzEuTWVudUlucHV0VHlwZS5TZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoc2NlbmVzLmhhc1NjZW5lKG5leHRTY2VuZUlkKSkge1xuICAgICAgICAgICAgICAgICAgICBzY2VuZXMuZGVBY3RpdmF0ZVNjZW5lKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgc2NlbmVzLmFjdGl2YXRlU2NlbmUobmV4dFNjZW5lSWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGV2ZW50ID09PSBtZW51XzEuTWVudUlucHV0VHlwZS5DYW5jZWwpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2NlbmVzLmhhc1NjZW5lKHByZXZTY2VuZUlkKSkge1xuICAgICAgICAgICAgICAgICAgICBzY2VuZXMuZGVBY3RpdmF0ZVNjZW5lKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgc2NlbmVzLmFjdGl2YXRlU2NlbmUocHJldlNjZW5lSWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGV4dHJhcykge1xuICAgICAgICAgICAgLy8gSWYgZGVmaW5lZCBpbiBleHRyYXMsIGdvIHdpdGggYSB1c2VyLWRlZmluZWQgb25JbnB1dCBldmVudCBoYW5kbGVyLlxuICAgICAgICAgICAgaWYgKGV4dHJhcy5vbklucHV0KSB7XG4gICAgICAgICAgICAgICAgZm5JbnB1dCA9IGV4dHJhcy5vbklucHV0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG1lbnVPcHRpb25zLnB1c2goeyBpZDogaW5kZXgudG9TdHJpbmcoKSwgdGV4dDogdmFsdWUsIHJlY3Q6IG5ldyByZWN0XzEuZGVmYXVsdChkeCwgZHksIHcsIGgpLCBvbklucHV0OiBmbklucHV0IH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBuZXcgbWVudV8xLmRlZmF1bHQoaWQsIHRydWUsIGRpcmVjdGlvbiwgbWVudU9wdGlvbnMpO1xufVxuZXhwb3J0cy5MYXlvdXRNZW51ID0gTGF5b3V0TWVudTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5tdXNpY01hbmlmZXN0RnJvbUpTT04gPSBleHBvcnRzLmlzUGxheWluZyA9IGV4cG9ydHMuZ2V0VHJhY2sgPSBleHBvcnRzLnBsYXlUcmFjayA9IGV4cG9ydHMubG9hZFRyYWNrID0gZXhwb3J0cy5sb2FkQWxsVHJhY2tzID0gdm9pZCAwO1xudmFyIE11c2ljRGVmaW5pdGlvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL011c2ljRGVmaW5pdGlvblwiKSk7XG52YXIgc2Z4Vm9sdW1lID0gMC40NTtcbnZhciBzZnhzID0gW107XG4vKipcbiAqIFBvcHVsYXRlIHNmeCBtYW5pZmVzdCB3aXRoIEpTT04gbGlzdCBvZiBkZWZpbml0aW9ucy4gIE1hbmlmZXN0IGlzIGFuIGFycnkgb2ZcbiAqIG9iamVjdHMgbWF0Y2hpbmcgZm9ybWF0IHsgXCJuYW1lXCI6IFwidHJhY2sgaWQgcmVmXCIsIFwiZmlsZW5hbWVcIjogXCIuL2ZpbGVfcGF0aC9maWxlbmFtZS5leHRcIiB9LFxuICogQHBhcmFtIGpzb24gSlNPTiByZXByZXNlbnRhdGlvbiBvZiBpbWFnZSBkZWZpbml0aW9ucy5cbiAqL1xuZnVuY3Rpb24gbXVzaWNNYW5pZmVzdEZyb21KU09OKGpzb24pIHtcbiAgICBqc29uLmZvckVhY2goKGZ1bmN0aW9uIChkZWYpIHsgcmV0dXJuIHNmeHMucHVzaChNdXNpY0RlZmluaXRpb25fMS5kZWZhdWx0LmZyb21KU09OKGRlZikpOyB9KSk7XG59XG5leHBvcnRzLm11c2ljTWFuaWZlc3RGcm9tSlNPTiA9IG11c2ljTWFuaWZlc3RGcm9tSlNPTjtcbi8qKlxuICogV2hldGhlciBvciBub3QgdGhlIG5hbWVkIHRyYWNrIGlzIGN1cnJlbnRseSBwbGF5aW5nLlxuICogQHBhcmFtIG5hbWUgTXVzaWMgdHJhY2sgYXNzZXQgaWQuXG4gKiBAcmV0dXJuc1xuICovXG5mdW5jdGlvbiBpc1BsYXlpbmcobmFtZSkge1xuICAgIHZhciBzZiA9IGdldFRyYWNrKG5hbWUpO1xuICAgIGlmIChzZikge1xuICAgICAgICByZXR1cm4gIXNmLnBhdXNlZCB8fCBzZi5jdXJyZW50VGltZSAmJiBzZi5jdXJyZW50VGltZSA8IHNmLmR1cmF0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnRzLmlzUGxheWluZyA9IGlzUGxheWluZztcbi8qKlxuICogR2V0IHRoZSBuYW1lZCBhdWRpbyBlbGVtZW50LlxuICogQHBhcmFtIG5hbWUgTXVzaWMgdHJhY2sgYXNzZXQgaWQuXG4gKiBAcmV0dXJuc1xuICovXG5mdW5jdGlvbiBnZXRUcmFjayhuYW1lKSB7XG4gICAgdmFyIHNmID0gc2Z4cy5maWx0ZXIoZnVuY3Rpb24gKGYpIHsgcmV0dXJuIGYubmFtZSA9PT0gbmFtZTsgfSk7XG4gICAgcmV0dXJuIHNmLmxlbmd0aCA+IDAgPyBzZlswXS50cmFjayA6IG51bGw7XG59XG5leHBvcnRzLmdldFRyYWNrID0gZ2V0VHJhY2s7XG4vKipcbiAqIFBsYXkgc3BlY2lmaWVkIHRyYWNrLlxuICogQHBhcmFtIG5hbWUgTXVzaWMgdHJhY2sgYXNzZXQgaWQuXG4gKiBAcGFyYW0gb25FbmRlZCBPcHRpb25hbCBjYWxsYmFjayBmb3Igd2hlbiB0aGUgdHJhY2sgZW5kcy5cbiAqIEByZXR1cm5zXG4gKi9cbmZ1bmN0aW9uIHBsYXlUcmFjayhuYW1lLCBvbkVuZGVkKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgc2ZfMSA9IHNmeHMuZmlsdGVyKGZ1bmN0aW9uIChmKSB7IHJldHVybiBmLm5hbWUgPT09IG5hbWU7IH0pO1xuICAgICAgICAgICAgaWYgKHNmXzEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGlmICghaXNQbGF5aW5nKG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNmXzFbMF0udHJhY2sudm9sdW1lID0gc2Z4Vm9sdW1lO1xuICAgICAgICAgICAgICAgICAgICBpZiAob25FbmRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2ZfMVswXS50cmFjay5vbmVuZGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRW5kZWQoc2ZfMVswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2ZfMVswXS50cmFjay5vbmVuZGVkID0gZnVuY3Rpb24gKCkgeyByZXNvbHZlKCk7IH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2ZfMVswXS50cmFjay5vbmVuZGVkID0gZnVuY3Rpb24gKCkgeyByZXNvbHZlKCk7IH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2ZfMVswXS50cmFjay5wbGF5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZl8xWzBdLnRyYWNrLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBwbGF5aW5nIHNmeCcsIG5hbWUsIGUpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnBsYXlUcmFjayA9IHBsYXlUcmFjaztcbi8qKlxuICogTG9hZCB0cmFjayBmcm9tIGxvY2F0aW9uLlxuICogQHBhcmFtIGZpbGVuYW1lIFBhdGggdG8gYXVkaW8gYXNzZXQuXG4gKiBAcmV0dXJuc1xuICovXG5mdW5jdGlvbiBsb2FkVHJhY2soZmlsZW5hbWUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgc2YgPSBuZXcgQXVkaW8oZmlsZW5hbWUpO1xuICAgICAgICBzZi5vbmNhbnBsYXl0aHJvdWdoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmVzb2x2ZShzZik7XG4gICAgICAgIH07XG4gICAgICAgIHNmLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGZpbGUgXCIuY29uY2F0KGZpbGVuYW1lLCBcIjpcIiksIGUpO1xuICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICB9O1xuICAgIH0pO1xufVxuZXhwb3J0cy5sb2FkVHJhY2sgPSBsb2FkVHJhY2s7XG4vKipcbiAqIExvYWQgYWxsIHRyYWNrcyB0aGF0IGhhdmUgYmVlbiBsb2FkZWQgaW50byB0aGUgbWFuaWZlc3QuXG4gKiBAcmV0dXJuc1xuICovXG5mdW5jdGlvbiBsb2FkQWxsVHJhY2tzKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZUFsbCwgcmVqZWN0QWxsKSB7XG4gICAgICAgIHZhciBwcm9taXNlcyA9IFtdO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICB2YXIgc2Z4ID0gc2Z4c1tpXTtcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2gobmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmV0dXJuIGxvYWRUcmFjayhzZnguZmlsZW5hbWUpLnRoZW4oZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgICAgICAgICBzZngudHJhY2sgPSByO1xuICAgICAgICAgICAgICAgIHJlc29sdmUocik7XG4gICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBsb2FkJywgc2Z4LmZpbGVuYW1lLCBlKTtcbiAgICAgICAgICAgICAgICByZWplY3RBbGwoJ0ZhaWxlZCB0byBsb2FkJyArIHNmeC5maWxlbmFtZSArICc6JyArIEpTT04uc3RyaW5naWZ5KGUpKTtcbiAgICAgICAgICAgIH0pOyB9KSk7XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgaW4gc2Z4cykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGxTZXR0bGVkKHByb21pc2VzKTtcbiAgICB9KTtcbn1cbmV4cG9ydHMubG9hZEFsbFRyYWNrcyA9IGxvYWRBbGxUcmFja3M7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogQSByZWN0YW5nbGUuXG4gKi9cbnZhciBSZWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlY3QoeCwgeSwgdywgaCkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLncgPSB3O1xuICAgICAgICB0aGlzLmggPSBoO1xuICAgIH1cbiAgICByZXR1cm4gUmVjdDtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBSZWN0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFNjZW5lIGNsYXNzZXMga25vdyBob3cgdG8gZHJhdyB0aGVtc2VsdmVzIHdpdGggYW5pbWF0aW9uRnJhbWUgYW5kIGEgaGFuZGxlSW5wdXQgY2FsbGJhY2tcbiAqIGZvciBrZXlib2FyZC9nYW1lcGFkIGNvbnRyb2xzLlxuICovXG52YXIgU2NlbmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IHNjZW5lIG9iamVjdC5cbiAgICAgKiBAcGFyYW0gaWQgU2NlbmUgbmFtZSwgdW5pcXVlIGlkZW50aWZpZXIgdG8gZmV0Y2ggd2l0aC5cbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uRnJhbWUgU2NlbmUncyByZW5kZXIvdXBkYXRlIGNhbGxiYWNrLlxuICAgICAqIEBwYXJhbSBhY3RpdmUgV2hldGhlciBvciBub3QgdGhlIHNjZW5lIGlzIGluaXRpYWxpemVkIGFjdGl2ZS5cbiAgICAgKiBAcGFyYW0gb25BY3RpdmF0ZSBDYWxsIHRoaXMgZnVuY3Rpb24gd2hlbiB0aGUgc2NlbmUgYWN0aXZhdGVzLlxuICAgICAqIEBwYXJhbSBvbkRlYWN0aXZhdGUgQ2FsbCB0aGlzIGZ1bmN0aW9uIHdoZW4gdGhlIHNjZW5lIGRlYWN0aXZhdGVzLlxuICAgICAqIEBwYXJhbSBoYW5kbGVJbnB1dCBUaGlzIGZ1bmN0aW9uIGdldHMgY2FsbGVkIHdoZW4gdGhlIHNjZW5lIHJlY2VpdmVzIGlucHV0LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIFNjZW5lKGlkLCBhbmltYXRpb25GcmFtZSwgYWN0aXZlLCBvbkFjdGl2YXRlLCBvbkRlYWN0aXZhdGUsIGhhbmRsZUlucHV0KSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5hbmltYXRpb25GcmFtZSA9IGFuaW1hdGlvbkZyYW1lO1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgICAgICAgdGhpcy5vbkFjdGl2YXRlID0gb25BY3RpdmF0ZTtcbiAgICAgICAgdGhpcy5vbkRlYWN0aXZhdGUgPSBvbkRlYWN0aXZhdGU7XG4gICAgICAgIHRoaXMuaGFuZGxlSW5wdXQgPSBoYW5kbGVJbnB1dDtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIFNjZW5lO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFNjZW5lO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGFzU2NlbmUgPSBleHBvcnRzLmRlQWN0aXZhdGVTY2VuZSA9IGV4cG9ydHMuYWN0aXZhdGVTY2VuZSA9IGV4cG9ydHMuYWRkU2NlbmUgPSBleHBvcnRzLmhhbmRsZUlucHV0ID0gZXhwb3J0cy5oYW5kbGVBbmltYXRpb25GcmFtZSA9IHZvaWQgMDtcbnZhciBpbnB1dCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9pbnB1dFwiKSk7XG52YXIgaW5wdXRfZ2FtZXBhZF8xID0gcmVxdWlyZShcIi4vaW5wdXQtZ2FtZXBhZFwiKTtcbnZhciBzdGFydCA9IG51bGw7XG52YXIgc2NlbmVzID0gW107XG5mdW5jdGlvbiBhZGRTY2VuZShzY2VuZSkge1xuICAgIHNjZW5lcy5wdXNoKHNjZW5lKTtcbiAgICByZXR1cm4gc2NlbmU7XG59XG5leHBvcnRzLmFkZFNjZW5lID0gYWRkU2NlbmU7XG5mdW5jdGlvbiBoYXNTY2VuZShpZCkge1xuICAgIHJldHVybiBzY2VuZXMuZmlsdGVyKGZ1bmN0aW9uIChzY2VuZSkgeyByZXR1cm4gc2NlbmUuaWQgPT09IGlkOyB9KS5sZW5ndGggPiAwO1xufVxuZXhwb3J0cy5oYXNTY2VuZSA9IGhhc1NjZW5lO1xuZnVuY3Rpb24gYWN0aXZhdGVTY2VuZShpZCkge1xuICAgIHZhciBpbmRleCA9IHNjZW5lcy5maW5kSW5kZXgoZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMuaWQgPT09IGlkOyB9KTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICBzY2VuZXNbaW5kZXhdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHNjZW5lc1tpbmRleF0ub25BY3RpdmF0ZSgpO1xuICAgIH1cbn1cbmV4cG9ydHMuYWN0aXZhdGVTY2VuZSA9IGFjdGl2YXRlU2NlbmU7XG5mdW5jdGlvbiBkZUFjdGl2YXRlU2NlbmUoaWQpIHtcbiAgICB2YXIgaW5kZXggPSBzY2VuZXMuZmluZEluZGV4KGZ1bmN0aW9uIChzKSB7IHJldHVybiBzLmlkID09PSBpZDsgfSk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgc2NlbmVzW2luZGV4XS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgc2NlbmVzW2luZGV4XS5vbkRlYWN0aXZhdGUoKTtcbiAgICB9XG59XG5leHBvcnRzLmRlQWN0aXZhdGVTY2VuZSA9IGRlQWN0aXZhdGVTY2VuZTtcbmZ1bmN0aW9uIGhhbmRsZUlucHV0KGlucHV0LCBhbXQsIHJlbGVhc2VkKSB7XG4gICAgY29uc29sZS5sb2coJ3NjZW5lIGhhbmRsZSBpbnB1dCcsIGlucHV0KTtcbiAgICBzY2VuZXMuZmlsdGVyKGZ1bmN0aW9uIChmKSB7IHJldHVybiBmLmFjdGl2ZTsgfSkuZm9yRWFjaChmdW5jdGlvbiAoc2NlbmUpIHtcbiAgICAgICAgaWYgKHNjZW5lLmhhbmRsZUlucHV0KSB7XG4gICAgICAgICAgICBzY2VuZS5oYW5kbGVJbnB1dChpbnB1dCwgYW10LCByZWxlYXNlZCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuaGFuZGxlSW5wdXQgPSBoYW5kbGVJbnB1dDtcbmZ1bmN0aW9uIGhhbmRsZUFuaW1hdGlvbkZyYW1lKHRpbWVTdGFtcCkge1xuICAgIGlucHV0LnVwZGF0ZUlucHV0U3RhdGUoKTtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGhhbmRsZUFuaW1hdGlvbkZyYW1lKTtcbiAgICBpZiAoc3RhcnQgPT09IG51bGwpIHtcbiAgICAgICAgc3RhcnQgPSB0aW1lU3RhbXAgLSAxNjsgLy8gSWYgd2UgZG9uJ3QgZG8gdGhpcywgdGhlIGZpcnN0IGZyYW1lIHRpbWVzdGFtcCBpcyB0b28gbG9uZyBzbyB3ZSBmYWtlIDYwZnBzIGJ5IHN1YnRyYWN0aW5nIDE2LlxuICAgICAgICAvLyBDb3VsZCBwcm9iYWJseSBiZSBpbXByb3ZlZC5cbiAgICB9XG4gICAgdmFyIGRlbHRhID0gdGltZVN0YW1wIC0gc3RhcnQ7XG4gICAgc3RhcnQgPSB0aW1lU3RhbXA7XG4gICAgLy8gQ2hlY2sgZm9yIGdhbWVwYWQgdXBkYXRlcywgZmlyZSBvZmYgXG4gICAgKDAsIGlucHV0X2dhbWVwYWRfMS5nYW1lcGFkc0RpZFVwZGF0ZSkoKTtcbiAgICAvLyBSdW4gYW5pbWF0aW9uRnJhbWUgZm9yIGVhY2ggYWN0aXZlIHNjZW5lLlxuICAgIHNjZW5lcy5maWx0ZXIoZnVuY3Rpb24gKGYpIHsgcmV0dXJuIGYuYWN0aXZlOyB9KS5mb3JFYWNoKGZ1bmN0aW9uIChzY2VuZSkge1xuICAgICAgICBzY2VuZS5lbGFwc2VkICs9IGRlbHRhO1xuICAgICAgICBzY2VuZS5hbmltYXRpb25GcmFtZShkZWx0YSk7XG4gICAgfSk7XG59XG5leHBvcnRzLmhhbmRsZUFuaW1hdGlvbkZyYW1lID0gaGFuZGxlQW5pbWF0aW9uRnJhbWU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc2Z4TWFuaWZlc3RGcm9tSlNPTiA9IGV4cG9ydHMuaXNQbGF5aW5nID0gZXhwb3J0cy5nZXRTZnggPSBleHBvcnRzLnBsYXlTZnggPSBleHBvcnRzLmxvYWRTZnggPSBleHBvcnRzLmxvYWRBbGxTZnggPSB2b2lkIDA7XG52YXIgU2Z4RGVmaW5pdGlvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1NmeERlZmluaXRpb25cIikpO1xudmFyIHNmeFZvbHVtZSA9IDAuNDU7XG52YXIgc2Z4cyA9IFtdO1xuLyoqXG4gKiBQb3B1bGF0ZSBzZnggbWFuaWZlc3Qgd2l0aCBKU09OIGxpc3Qgb2YgZGVmaW5pdGlvbnMuIE1hbmlmZXN0IGlzIGFuIGFycnkgb2ZcbiAqIG9iamVjdHMgbWF0Y2hpbmcgZm9ybWF0IHsgXCJuYW1lXCI6IFwic2Z4IGlkIHJlZlwiLCBcImZpbGVuYW1lXCI6IFwiLi9maWxlX3BhdGgvZmlsZW5hbWUuZXh0XCIgfSxcbiAqIEBwYXJhbSBqc29uIEpTT04gcmVwcmVzZW50YXRpb24gb2YgaW1hZ2UgZGVmaW5pdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIHNmeE1hbmlmZXN0RnJvbUpTT04oanNvbikge1xuICAgIGpzb24uZm9yRWFjaCgoZnVuY3Rpb24gKGRlZikgeyByZXR1cm4gc2Z4cy5wdXNoKFNmeERlZmluaXRpb25fMS5kZWZhdWx0LmZyb21KU09OKGRlZikpOyB9KSk7XG59XG5leHBvcnRzLnNmeE1hbmlmZXN0RnJvbUpTT04gPSBzZnhNYW5pZmVzdEZyb21KU09OO1xuZnVuY3Rpb24gaXNQbGF5aW5nKG5hbWUpIHtcbiAgICB2YXIgc2YgPSBnZXRTZngobmFtZSk7XG4gICAgaWYgKHNmKSB7XG4gICAgICAgIHJldHVybiAhc2YucGF1c2VkIHx8IHNmLmN1cnJlbnRUaW1lICYmIHNmLmN1cnJlbnRUaW1lIDwgc2YuZHVyYXRpb247XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydHMuaXNQbGF5aW5nID0gaXNQbGF5aW5nO1xuZnVuY3Rpb24gZ2V0U2Z4KG5hbWUpIHtcbiAgICB2YXIgc2YgPSBzZnhzLmZpbHRlcihmdW5jdGlvbiAoZikgeyByZXR1cm4gZi5uYW1lID09PSBuYW1lOyB9KTtcbiAgICByZXR1cm4gc2YubGVuZ3RoID4gMCA/IHNmWzBdLnNmeCA6IG51bGw7XG59XG5leHBvcnRzLmdldFNmeCA9IGdldFNmeDtcbmZ1bmN0aW9uIHBsYXlTZngobmFtZSwgb25FbmRlZCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHNmXzEgPSBzZnhzLmZpbHRlcihmdW5jdGlvbiAoZikgeyByZXR1cm4gZi5uYW1lID09PSBuYW1lOyB9KTtcbiAgICAgICAgICAgIGlmIChzZl8xLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzUGxheWluZyhuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBzZl8xWzBdLnNmeC52b2x1bWUgPSBzZnhWb2x1bWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbkVuZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZl8xWzBdLnNmeC5vbmVuZGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRW5kZWQoc2ZfMVswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2ZfMVswXS5zZngub25lbmRlZCA9IGZ1bmN0aW9uICgpIHsgcmVzb2x2ZSgpOyB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNmXzFbMF0uc2Z4Lm9uZW5kZWQgPSBmdW5jdGlvbiAoKSB7IHJlc29sdmUoKTsgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZl8xWzBdLnNmeC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZl8xWzBdLnNmeC5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgcGxheWluZyBzZngnLCBuYW1lLCBlKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5wbGF5U2Z4ID0gcGxheVNmeDtcbmZ1bmN0aW9uIGxvYWRTZngoZmlsZW5hbWUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgc2YgPSBuZXcgQXVkaW8oZmlsZW5hbWUpO1xuICAgICAgICBzZi5vbmNhbnBsYXl0aHJvdWdoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmVzb2x2ZShzZik7XG4gICAgICAgIH07XG4gICAgICAgIHNmLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGZpbGUgXCIuY29uY2F0KGZpbGVuYW1lLCBcIjpcIiksIGUpO1xuICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICB9O1xuICAgIH0pO1xufVxuZXhwb3J0cy5sb2FkU2Z4ID0gbG9hZFNmeDtcbmZ1bmN0aW9uIGxvYWRBbGxTZngoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlQWxsLCByZWplY3RBbGwpIHtcbiAgICAgICAgdmFyIHByb21pc2VzID0gW107XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIHZhciBzZnggPSBzZnhzW2ldO1xuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXR1cm4gbG9hZFNmeChzZnguZmlsZW5hbWUpLnRoZW4oZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgICAgICAgICBzZnguc2Z4ID0gcjtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHIpO1xuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gbG9hZCcsIHNmeC5maWxlbmFtZSwgZSk7XG4gICAgICAgICAgICAgICAgcmVqZWN0QWxsKCdGYWlsZWQgdG8gbG9hZCcgKyBzZnguZmlsZW5hbWUgKyAnOicgKyBKU09OLnN0cmluZ2lmeShlKSk7XG4gICAgICAgICAgICB9KTsgfSkpO1xuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpIGluIHNmeHMpIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsU2V0dGxlZChwcm9taXNlcyk7XG4gICAgfSk7XG59XG5leHBvcnRzLmxvYWRBbGxTZnggPSBsb2FkQWxsU2Z4O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU2Z4RGVmaW5pdGlvbiA9IGV4cG9ydHMuTXVzaWNEZWZpbml0aW9uID0gZXhwb3J0cy5JbWFnZURlZmluaXRpb24gPSBleHBvcnRzLkdseXBoID0gZXhwb3J0cy5Gb250RGF0YSA9IGV4cG9ydHMuUmVjdCA9IGV4cG9ydHMuTWVudSA9IGV4cG9ydHMuU2NlbmUgPSBleHBvcnRzLmNhbnZhc0hlaWdodCA9IGV4cG9ydHMuY2FudmFzV2lkdGggPSBleHBvcnRzLmdhbWVDYW52YXMgPSBleHBvcnRzLnNldENhbnZhc0JhY2tncm91bmQgPSBleHBvcnRzLmluaXRpYWxpemUgPSBleHBvcnRzLm1lbnVzID0gZXhwb3J0cy5rZXlib2FyZCA9IGV4cG9ydHMuZ2FtZXBhZCA9IGV4cG9ydHMuaW5wdXQgPSBleHBvcnRzLm11c2ljID0gZXhwb3J0cy5zZnggPSBleHBvcnRzLnNjZW5lcyA9IGV4cG9ydHMuZm9udCA9IGV4cG9ydHMuaW1hZ2VzID0gdm9pZCAwO1xudmFyIGZvbnRfMSA9IHJlcXVpcmUoXCIuL21vZHVsZXMvZm9udFwiKTtcbmV4cG9ydHMuaW1hZ2VzID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL21vZHVsZXMvaW1hZ2VzXCIpKTtcbmV4cG9ydHMuZm9udCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9tb2R1bGVzL2ZvbnRcIikpO1xuZXhwb3J0cy5zY2VuZXMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vbW9kdWxlcy9zY2VuZXNcIikpO1xuZXhwb3J0cy5zZnggPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vbW9kdWxlcy9zZnhcIikpO1xuZXhwb3J0cy5tdXNpYyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9tb2R1bGVzL211c2ljXCIpKTtcbmV4cG9ydHMuaW5wdXQgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vbW9kdWxlcy9pbnB1dFwiKSk7XG5leHBvcnRzLmdhbWVwYWQgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vbW9kdWxlcy9pbnB1dC1nYW1lcGFkXCIpKTtcbmV4cG9ydHMua2V5Ym9hcmQgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vbW9kdWxlcy9pbnB1dC1rZXlib2FyZFwiKSk7XG5leHBvcnRzLm1lbnVzID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL21vZHVsZXMvbWVudXNcIikpO1xudmFyIHJlY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tb2R1bGVzL3JlY3RcIikpO1xuZXhwb3J0cy5SZWN0ID0gcmVjdF8xLmRlZmF1bHQ7XG52YXIgaW5wdXQgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vbW9kdWxlcy9pbnB1dFwiKSk7XG52YXIgc2NlbmVzID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL21vZHVsZXMvc2NlbmVzXCIpKTtcbnZhciBzY2VuZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21vZHVsZXMvc2NlbmVcIikpO1xuZXhwb3J0cy5TY2VuZSA9IHNjZW5lXzEuZGVmYXVsdDtcbnZhciBtZW51XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbW9kdWxlcy9tZW51XCIpKTtcbmV4cG9ydHMuTWVudSA9IG1lbnVfMS5kZWZhdWx0O1xudmFyIEZvbnREYXRhXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbW9kdWxlcy9Gb250RGF0YVwiKSk7XG5leHBvcnRzLkZvbnREYXRhID0gRm9udERhdGFfMS5kZWZhdWx0O1xudmFyIEdseXBoXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbW9kdWxlcy9HbHlwaFwiKSk7XG5leHBvcnRzLkdseXBoID0gR2x5cGhfMS5kZWZhdWx0O1xudmFyIEltYWdlRGVmaW5pdGlvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21vZHVsZXMvSW1hZ2VEZWZpbml0aW9uXCIpKTtcbmV4cG9ydHMuSW1hZ2VEZWZpbml0aW9uID0gSW1hZ2VEZWZpbml0aW9uXzEuZGVmYXVsdDtcbnZhciBNdXNpY0RlZmluaXRpb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tb2R1bGVzL011c2ljRGVmaW5pdGlvblwiKSk7XG5leHBvcnRzLk11c2ljRGVmaW5pdGlvbiA9IE11c2ljRGVmaW5pdGlvbl8xLmRlZmF1bHQ7XG52YXIgU2Z4RGVmaW5pdGlvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21vZHVsZXMvU2Z4RGVmaW5pdGlvblwiKSk7XG5leHBvcnRzLlNmeERlZmluaXRpb24gPSBTZnhEZWZpbml0aW9uXzEuZGVmYXVsdDtcbnZhciBpbWFnZXNfMSA9IHJlcXVpcmUoXCIuL21vZHVsZXMvaW1hZ2VzXCIpO1xuLyoqXG4gKiBDYW52YXMgZWxlbWVudCB0byBkcmF3IG9uLlxuICovXG52YXIgZ2FtZUNhbnZhcyA9IG51bGw7XG5leHBvcnRzLmdhbWVDYW52YXMgPSBnYW1lQ2FudmFzO1xuLyoqXG4gKiBDYW52YXMgd2lkdGggKHJlc29sdXRpb24geCkuXG4gKi9cbnZhciBjYW52YXNXaWR0aCA9IDA7XG5leHBvcnRzLmNhbnZhc1dpZHRoID0gY2FudmFzV2lkdGg7XG4vKipcbiAqIENhbnZhcyBoZWlnaHQgKHJlc29sdXRpb24geSkuXG4gKi9cbnZhciBjYW52YXNIZWlnaHQgPSAwO1xuZXhwb3J0cy5jYW52YXNIZWlnaHQgPSBjYW52YXNIZWlnaHQ7XG4vKipcbiAqIENTUyBmb3IgY2FudmFzIGJhY2tncm91bmQuXG4gKi9cbnZhciBjYW52YXNCYWNrZ3JvdW5kID0gJ3RyYW5zcGFyZW50JztcbmZ1bmN0aW9uIHJlc2l6ZSgpIHtcbiAgICB2YXIgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB2YXIgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGdhbWVDYW52YXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgZ2FtZUNhbnZhcy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgZ2FtZUNhbnZhcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcbiAgICBnYW1lQ2FudmFzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG4gICAgZ2FtZUNhbnZhcy5zdHlsZS50b3AgPSAnMHB4JztcbiAgICBnYW1lQ2FudmFzLnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICBnYW1lQ2FudmFzLnN0eWxlLmJhY2tncm91bmQgPSBjYW52YXNCYWNrZ3JvdW5kO1xuICAgIGdhbWVDYW52YXMuc3R5bGUuaW1hZ2VSZW5kZXJpbmcgPSAncGl4ZWxhdGVkJztcbn1cbmZ1bmN0aW9uIHByZXBlbmRDYW52YXMoY2FudmFzSWQsIHdpZHRoLCBoZWlnaHQsIGF1dG9SZXNpemUpIHtcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY2FudmFzLmlkID0gY2FudmFzSWQ7XG4gICAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKGNhbnZhcyk7XG4gICAgZXhwb3J0cy5nYW1lQ2FudmFzID0gZ2FtZUNhbnZhcyA9IGNhbnZhcztcbiAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIGV4cG9ydHMuY2FudmFzV2lkdGggPSBjYW52YXNXaWR0aCA9IHdpZHRoO1xuICAgIGV4cG9ydHMuY2FudmFzSGVpZ2h0ID0gY2FudmFzSGVpZ2h0ID0gaGVpZ2h0O1xuICAgIGlmIChhdXRvUmVzaXplKSB7XG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc2l6ZSgpOyB9KTtcbiAgICAgICAgcmVzaXplKCk7XG4gICAgfVxuICAgIHJldHVybiBjYW52YXM7XG59XG4vKipcbiAqIFNldCB0aGUgY2FudmFzIGVsZW1lbnQncyBiYWNrZ3JvdW5kIHZhbHVlLlxuICogQHBhcmFtIGNvbG9yIENTUyBiYWNrZ3JvdW5kIGZvciBjYW52YXMgZWxlbWVudC5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FudmFzQmFja2dyb3VuZChjb2xvcikge1xuICAgIGNhbnZhc0JhY2tncm91bmQgPSBjb2xvcjtcbiAgICBpZiAoZ2FtZUNhbnZhcykge1xuICAgICAgICBnYW1lQ2FudmFzLnN0eWxlLmJhY2tncm91bmQgPSBjYW52YXNCYWNrZ3JvdW5kO1xuICAgIH1cbn1cbmV4cG9ydHMuc2V0Q2FudmFzQmFja2dyb3VuZCA9IHNldENhbnZhc0JhY2tncm91bmQ7XG4vKipcbiAqIEluaXRpYWxpemUgdGhlIHJldHJvbGliIGVuZ2luZS5cbiAqIEBwYXJhbSBjYW52YXNJZCBJZCBhdHRyaWJ1dGUgb2YgZXhpc3RpbmcgY2FudmFzLCBvciBpZCBhdHRyaWJ1dGUgdG8gZ2l2ZSB0byBjcmVhdGVkIGNhbnZhcyBlbGVtZW50LlxuICogQHBhcmFtIHdpZHRoIFggcmVzb2x1dGlvbi5cbiAqIEBwYXJhbSBoZWlnaHQgWSByZXNvbHV0aW9uLlxuICogQHBhcmFtIGJ1aWxkQ2FudmFzIFdoZXRoZXIgb3Igbm90IHRvIGNyZWF0ZSBhIGNhbnZhcyBlbGVtZW50LlxuICogQHBhcmFtIGF1dG9SZXNpemUgV2hldGhlciBvciBub3QgdG8gYXV0b3Jlc2l6ZSB0aGUgY2FudmFzIHRvIHRoZSB3aW5kb3cuXG4gKi9cbmZ1bmN0aW9uIGluaXRpYWxpemUoY2FudmFzSWQsIHdpZHRoLCBoZWlnaHQsIGJ1aWxkQ2FudmFzLCBhdXRvUmVzaXplKSB7XG4gICAgd2lkdGggPSB3aWR0aCA/IHdpZHRoIDogMjU2O1xuICAgIGhlaWdodCA9IGhlaWdodCA/IGhlaWdodCA6IDI1NjtcbiAgICBjYW52YXNJZCA9IGNhbnZhc0lkID8gY2FudmFzSWQgOiAnZ2FtZWNhbnZhcyc7XG4gICAgaWYgKGdhbWVDYW52YXMgPT09IG51bGwgJiYgYnVpbGRDYW52YXMpIHtcbiAgICAgICAgZXhwb3J0cy5nYW1lQ2FudmFzID0gZ2FtZUNhbnZhcyA9IHByZXBlbmRDYW52YXMoY2FudmFzSWQsIHdpZHRoLCBoZWlnaHQsIGF1dG9SZXNpemUpO1xuICAgIH1cbiAgICBlbHNlIGlmIChnYW1lQ2FudmFzID09PSBudWxsKSB7XG4gICAgICAgIGV4cG9ydHMuZ2FtZUNhbnZhcyA9IGdhbWVDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYW52YXNJZCk7XG4gICAgfVxuICAgICgwLCBpbWFnZXNfMS5zZXRDb250ZXh0KShnYW1lQ2FudmFzLmdldENvbnRleHQoJzJkJykpO1xuICAgICgwLCBmb250XzEubG9hZERlZmF1bHRGb250cykoKTtcbiAgICAvLyBSZWdpc3RlciB0aGUgc2NlbmUgY29udHJvbGxlcidzIGFuaW1hdGlvbiBmcmFtZSBmdW5jdGlvbiB3aXRoIHRoZSB3aW5kb3cuXG4gICAgLy8gTm93IGFueSBzY2VuZSBvYmplY3RzIHlvdSBhZGQgd2l0aCBzY2VuZXMuYWRkU2NlbmUoKSB3aWxsIGJlIGNhbGxlZCBhcyBsb25nXG4gICAgLy8gYXMgdGhleSBhcmUgYWN0aXZlIHN0YXR1cy5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNjZW5lcy5oYW5kbGVBbmltYXRpb25GcmFtZSk7XG4gICAgaW5wdXQuaW5pdGlhbGl6ZSgpO1xufVxuZXhwb3J0cy5pbml0aWFsaXplID0gaW5pdGlhbGl6ZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9yZXRyb2xpYi50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==