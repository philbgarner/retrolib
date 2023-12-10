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

/***/ "./src/modules/input.ts":
/*!******************************!*\
  !*** ./src/modules/input.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 *
 * Globals
 *
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.axisPressed = exports.buttonPressed = exports.inputPressed = exports.getAxisState = exports.getButtonState = exports.setMappedButton = exports.getMappedButtons = exports.getMappedButtonIndex = exports.getGamepads = exports.gamepadsDidUpdate = exports.onGamepadUpdated = exports.onGamepadDisconnected = exports.onGamepadConnected = exports.getInputKeyState = exports.getKeyState = exports.getMappedKeys = exports.getMappedKey = exports.setMappedKey = exports.keyboardRelease = exports.keyboardDown = exports.onKeyboardRelease = exports.onKeyboardDown = exports.resetInputMaps = exports.resetKeyboardMappings = exports.resetGamepadAxisMappings = exports.resetGamepadButtonMappings = exports.initialize = exports.InputType = void 0;
var keysState = {};
var keysMap = {};
var buttonsMap = {};
var axisMap = {};
var gamepadsTimestamps = {};
var gamepadConnected = function () { };
var gamepadDisconnected = function () { };
var gamepadUpdated = function () { };
var keyboardDownHandler = function () { };
var keyboardReleaseHandler = function () { };
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
function initialize() {
    keysState = {};
    resetKeyboardMappings();
    resetGamepadButtonMappings();
    resetGamepadAxisMappings();
    inputMaps = {};
    resetInputMaps();
    gamepadsTimestamps = {};
    gamepadConnected = function () { };
    gamepadDisconnected = function () { };
    gamepadUpdated = function () { };
    window.removeEventListener('keydown', keyboardDown);
    window.addEventListener('keydown', keyboardDown);
    window.removeEventListener('keyup', keyboardRelease);
    window.addEventListener('keyup', keyboardRelease);
    window.ongamepadconnected = function (event) {
        gamepadsTimestamps[event.gamepad.index] = 0;
        gamepadConnected(event);
    };
    window.ongamepaddisconnected = function (event) {
        gamepadDisconnected(event);
        gamepadsTimestamps[event.gamepad.index] = undefined;
    };
}
exports.initialize = initialize;
/**
 * Reset button mappings to defaults.
 */
function resetGamepadButtonMappings() {
    buttonsMap = { 'action': 0, 'cancel': 1 };
}
exports.resetGamepadButtonMappings = resetGamepadButtonMappings;
function resetGamepadAxisMappings() {
    axisMap = { 'leftAxis': [0, 1], 'rightAxis': [3, 4], 'dPad': [6, 7], 'trigger': [2, 5] };
}
exports.resetGamepadAxisMappings = resetGamepadAxisMappings;
function resetKeyboardMappings() {
    keysMap = {
        'left': 'ArrowLeft',
        'right': 'ArrowRight',
        'up': 'ArrowUp',
        'down': 'ArrowDown'
    };
}
exports.resetKeyboardMappings = resetKeyboardMappings;
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
    };
}
exports.resetInputMaps = resetInputMaps;
/**
 *
 *  Keyboard Input Functions
 *
 */
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
    keyboardDownHandler(e);
}
exports.keyboardDown = keyboardDown;
function keyboardRelease(e) {
    keysState[e.key] = false;
    keyboardReleaseHandler(e);
}
exports.keyboardRelease = keyboardRelease;
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
/**
 *
 *  Gamepad Input Functions
 *
 */
function onGamepadConnected(fn) {
    gamepadConnected = fn;
}
exports.onGamepadConnected = onGamepadConnected;
function onGamepadDisconnected(fn) {
    gamepadDisconnected = fn;
}
exports.onGamepadDisconnected = onGamepadDisconnected;
function onGamepadUpdated(fn) {
    gamepadUpdated = fn;
}
exports.onGamepadUpdated = onGamepadUpdated;
function gamepadsDidUpdate() {
    getGamepads().forEach(function (g) {
        if (gamepadsTimestamps[g.index] !== undefined && gamepadsTimestamps[g.index] < g.timestamp) {
            gamepadUpdated(g);
        }
        gamepadsTimestamps[g.index] = g.timestamp;
    });
}
exports.gamepadsDidUpdate = gamepadsDidUpdate;
function getGamepads() {
    return navigator.getGamepads().sort(function (a, b) { return a.index - b.index; });
}
exports.getGamepads = getGamepads;
function getMappedButtonIndex(inputName) {
    return buttonsMap[inputName] !== undefined ? buttonsMap[inputName] : null;
}
exports.getMappedButtonIndex = getMappedButtonIndex;
function getMappedButtons() {
    var inputMap = [];
    Object.keys(buttonsMap).forEach(function (key) {
        var rel = { inputName: key, button: buttonsMap[key] };
        inputMap.push(rel);
    });
    return inputMap;
}
exports.getMappedButtons = getMappedButtons;
function setMappedButton(inputName, buttonIndex) {
    buttonsMap[inputName] = buttonIndex;
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
        if (axisMap[inputName] !== undefined) {
            var axisState = { controller: g.index, x: g.axes[axisMap[inputName][0]], y: g.axes[axisMap[inputName][1]] };
            states.push(axisState);
        }
    });
    return states.sort(function (a, b) { return a.controller - b.controller; });
}
exports.getAxisState = getAxisState;
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
        if (input.type === InputType.Keyboard && getInputKeyState(inputName)) {
            ret = true;
        }
        else if (input.type === InputType.GamepadAxis && axisPressed(input.mapKey, input.axisPlane, input.axisCheckDirection, gamepadNumber)) {
            ret = true;
        }
        else if (input.type === InputType.GamepadButton && buttonPressed(input.mapKey, gamepadNumber)) {
            ret = true;
        }
    });
    return ret;
}
exports.inputPressed = inputPressed;
function buttonPressed(inputName, gamepadNumber) {
    gamepadNumber = gamepadNumber === undefined ? 0 : gamepadNumber;
    var button = getButtonState(inputName)[gamepadNumber];
    if (button && button.pressed) {
        return true;
    }
    return false;
}
exports.buttonPressed = buttonPressed;
function axisPressed(inputName, axisPlane, direction, gamepadNumber) {
    gamepadNumber = gamepadNumber === undefined ? 0 : gamepadNumber;
    var state = getAxisState(inputName)[gamepadNumber];
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
var input = __importStar(__webpack_require__(/*! ./input */ "./src/modules/input.ts"));
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
        var _this = this;
        if (input.inputPressed(this.incrementSelectionInput)) {
            this.selectedOption += 1 * this.selectSpeed;
            if (this.selectedOption >= this.options.length) {
                this.selectedOption = 0;
            }
            this.Selected().onInput(this, this.Selected(), MenuInputType.IncrementPrimary);
        }
        if (input.inputPressed(this.decrementSelectionInput)) {
            this.selectedOption += -1 * this.selectSpeed;
            if (this.selectedOption <= 0) {
                this.selectedOption = this.options.length - 1;
            }
            this.Selected().onInput(this, this.Selected(), MenuInputType.DecrementPrimary);
        }
        if (input.inputPressed(this.actionInput) && this.Selected().onInput) {
            this.Selected().onInput(this, this.Selected(), MenuInputType.Selection);
        }
        if (input.inputPressed(this.cancelInput) && this.Selected().onInput) {
            this.Selected().onInput(this, this.Selected(), MenuInputType.Cancel);
        }
        if (input.inputPressed(this.incrementSecondaryInput) && this.Selected().onInput) {
            this.Selected().onInput(this, this.Selected(), MenuInputType.IncrementSecondary);
        }
        if (input.inputPressed(this.decrementSecondaryInput) && this.Selected().onInput) {
            this.Selected().onInput(this, this.Selected(), MenuInputType.DecrementSecondary);
        }
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
var menu_1 = __importDefault(__webpack_require__(/*! ./menu */ "./src/modules/menu.ts"));
var LayoutDirection;
(function (LayoutDirection) {
    LayoutDirection[LayoutDirection["TopDown"] = 0] = "TopDown";
    LayoutDirection[LayoutDirection["LeftToRight"] = 1] = "LeftToRight";
})(LayoutDirection || (exports.LayoutDirection = LayoutDirection = {}));
/**
 * Take a list of strings and create a menu with the options automatically laid out.
 * @param options
 * @param direction
 * @param margin
 * @param startX
 * @param startY
 * @returns
 */
function LayoutMenu(id, options, direction, margin, startX, startY) {
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
        menuOptions.push({ id: index.toString(), text: value, rect: new rect_1.default(dx, dy, w, h), onInput: function (menu, option, event) {
                console.log('Menu option onInput', event);
            } });
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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deActivateScene = exports.activateScene = exports.addScene = exports.handleInput = exports.handleAnimationFrame = void 0;
var retrolib_1 = __webpack_require__(/*! ../retrolib */ "./src/retrolib.ts");
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
        start = timeStamp - 16; // If we don't do this, the first frame timestamp is too long so we fake 60fps by subtracting 16.
        // Could probably be improved.
    }
    var delta = timeStamp - start;
    start = timeStamp;
    // Check for gamepad updates, fire off 
    retrolib_1.input.gamepadsDidUpdate();
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
exports.SfxDefinition = exports.MusicDefinition = exports.ImageDefinition = exports.Glyph = exports.FontData = exports.Rect = exports.Menu = exports.Scene = exports.canvasHeight = exports.canvasWidth = exports.gameCanvas = exports.setCanvasBackground = exports.initialize = exports.menus = exports.input = exports.music = exports.sfx = exports.scenes = exports.font = exports.images = void 0;
var font_1 = __webpack_require__(/*! ./modules/font */ "./src/modules/font.ts");
exports.images = __importStar(__webpack_require__(/*! ./modules/images */ "./src/modules/images.ts"));
exports.font = __importStar(__webpack_require__(/*! ./modules/font */ "./src/modules/font.ts"));
exports.scenes = __importStar(__webpack_require__(/*! ./modules/scenes */ "./src/modules/scenes.ts"));
exports.sfx = __importStar(__webpack_require__(/*! ./modules/sfx */ "./src/modules/sfx.ts"));
exports.music = __importStar(__webpack_require__(/*! ./modules/music */ "./src/modules/music.ts"));
exports.input = __importStar(__webpack_require__(/*! ./modules/input */ "./src/modules/input.ts"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0cm9saWIuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7QUNWYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxrQkFBZTs7Ozs7Ozs7Ozs7QUNWRjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxrQkFBZTs7Ozs7Ozs7Ozs7QUNWRjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxrQkFBZTs7Ozs7Ozs7Ozs7QUNiRjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxrQkFBZTs7Ozs7Ozs7Ozs7QUNiRjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxrQkFBZTs7Ozs7Ozs7Ozs7QUNiRjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGtCQUFlOzs7Ozs7Ozs7OztBQzkvQ0Y7QUFD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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXRyb2xpYi93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vcmV0cm9saWIvLi9zcmMvbW9kdWxlcy9Gb250RGF0YS50cyIsIndlYnBhY2s6Ly9yZXRyb2xpYi8uL3NyYy9tb2R1bGVzL0dseXBoLnRzIiwid2VicGFjazovL3JldHJvbGliLy4vc3JjL21vZHVsZXMvSW1hZ2VEZWZpbml0aW9uLnRzIiwid2VicGFjazovL3JldHJvbGliLy4vc3JjL21vZHVsZXMvTXVzaWNEZWZpbml0aW9uLnRzIiwid2VicGFjazovL3JldHJvbGliLy4vc3JjL21vZHVsZXMvU2Z4RGVmaW5pdGlvbi50cyIsIndlYnBhY2s6Ly9yZXRyb2xpYi8uL3NyYy9tb2R1bGVzL2NvZGVwYWdlLnRzIiwid2VicGFjazovL3JldHJvbGliLy4vc3JjL21vZHVsZXMvZm9udC50cyIsIndlYnBhY2s6Ly9yZXRyb2xpYi8uL3NyYy9tb2R1bGVzL2ltYWdlcy50cyIsIndlYnBhY2s6Ly9yZXRyb2xpYi8uL3NyYy9tb2R1bGVzL2lucHV0LnRzIiwid2VicGFjazovL3JldHJvbGliLy4vc3JjL21vZHVsZXMvbWVudS50cyIsIndlYnBhY2s6Ly9yZXRyb2xpYi8uL3NyYy9tb2R1bGVzL21lbnVzLnRzIiwid2VicGFjazovL3JldHJvbGliLy4vc3JjL21vZHVsZXMvbXVzaWMudHMiLCJ3ZWJwYWNrOi8vcmV0cm9saWIvLi9zcmMvbW9kdWxlcy9yZWN0LnRzIiwid2VicGFjazovL3JldHJvbGliLy4vc3JjL21vZHVsZXMvc2NlbmUudHMiLCJ3ZWJwYWNrOi8vcmV0cm9saWIvLi9zcmMvbW9kdWxlcy9zY2VuZXMudHMiLCJ3ZWJwYWNrOi8vcmV0cm9saWIvLi9zcmMvbW9kdWxlcy9zZngudHMiLCJ3ZWJwYWNrOi8vcmV0cm9saWIvLi9zcmMvcmV0cm9saWIudHMiLCJ3ZWJwYWNrOi8vcmV0cm9saWIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmV0cm9saWIvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXRyb2xpYi93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmV0cm9saWIvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInJldHJvbGliXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInJldHJvbGliXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgKCkgPT4ge1xucmV0dXJuICIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBIZWxwZXIgY2xhc3MgdG8gc3RvcmUgZm9udCBkYXRhLlxuICovXG52YXIgRm9udERhdGEgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRm9udERhdGEoKSB7XG4gICAgfVxuICAgIHJldHVybiBGb250RGF0YTtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBGb250RGF0YTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBIZWxwZXIgY2xhc3MgdG8gc3RvcmUgR2x5cGggKGZvbnQgc3ltYm9sL2NvZGVudW1iZXIgYW5kIGltYWdlIFJlY3QgbG9jYXRpb24pLlxuICovXG52YXIgR2x5cGggPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gR2x5cGgoKSB7XG4gICAgfVxuICAgIHJldHVybiBHbHlwaDtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBHbHlwaDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBIZWxwZXIgY2xhc3MgdG8gc3RvcmUgaW1hZ2VzIGFhbmQgZGVzZXJpYWxpemUgdGhlbSBmcm9tIEpTT04uXG4gKi9cbnZhciBJbWFnZURlZmluaXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSW1hZ2VEZWZpbml0aW9uKCkge1xuICAgIH1cbiAgICBJbWFnZURlZmluaXRpb24uZnJvbUpTT04gPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgSW1hZ2VEZWZpbml0aW9uKCksIGpzb24pO1xuICAgIH07XG4gICAgcmV0dXJuIEltYWdlRGVmaW5pdGlvbjtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBJbWFnZURlZmluaXRpb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogSGVscGVyIGNsYXNzIHRvIHN0b3JlIG11c2ljIHRyYWNrcyBhbmQgZGVzZXJpYWxpemUgdGhlbSBmcm9tIEpTT04uXG4gKi9cbnZhciBNdXNpY0RlZmluaXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTXVzaWNEZWZpbml0aW9uKCkge1xuICAgIH1cbiAgICBNdXNpY0RlZmluaXRpb24uZnJvbUpTT04gPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgTXVzaWNEZWZpbml0aW9uKCksIGpzb24pO1xuICAgIH07XG4gICAgcmV0dXJuIE11c2ljRGVmaW5pdGlvbjtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBNdXNpY0RlZmluaXRpb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogSGVscGVyIGNsYXNzIHRvIHN0b3JlIHNvdW5kIGVmZmVjdHMgYW5kIGRlc2VyaWFsaXplIHRoZW0gZnJvbSBKU09OLlxuICovXG52YXIgU2Z4RGVmaW5pdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTZnhEZWZpbml0aW9uKCkge1xuICAgIH1cbiAgICBTZnhEZWZpbml0aW9uLmZyb21KU09OID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IFNmeERlZmluaXRpb24oKSwganNvbik7XG4gICAgfTtcbiAgICByZXR1cm4gU2Z4RGVmaW5pdGlvbjtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBTZnhEZWZpbml0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29kZVBhZ2UgPSBbXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMCxcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAwMCcsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5VTEwgQ0hBUlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxLFxuICAgICAgICBcInN5bWJvbFwiOiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KCdcXHUwMDAxJywgMTYpKSxcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU1RBUlQgT0YgSEVBRElOR1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyLFxuICAgICAgICBcInN5bWJvbFwiOiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KCdcXHUwMDAyJywgMTYpKSxcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU1RBUlQgT0YgVEVYVFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAzLFxuICAgICAgICBcInN5bWJvbFwiOiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KCdcXHUwMDAzJywgMTYpKSxcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRU5EIE9GIFRFWFRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNCxcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAwNCcsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkVORCBPRiBUUkFOU01JU1NJT05cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNSxcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAwNScsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkVOUVVJUllcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNixcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAwNicsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkFDS05PV0xFREdNRU5UXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDcsXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMDcnLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCRUxMXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDgsXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMDgnLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCQUNLIFNQQUNFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDksXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMDknLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJIT1JJWk9OVEFMIFRBQlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMCxcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAwQScsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxJTkUgRkVFRFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMSxcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAwQicsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlZFUlRJQ0FMIFRBQlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMixcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAwQycsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkZPUk0gRkVFRFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMyxcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAwRCcsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkNBUlJJQUdFIFJFVFVSTlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNCxcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAwRScsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNISUZUIE9VVCAvIFgtT05cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTUsXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMEYnLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTSElGVCBJTiAvIFgtT0ZGXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE2LFxuICAgICAgICBcInN5bWJvbFwiOiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KCdcXHUwMDEwJywgMTYpKSxcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiREFUQSBMSU5FIEVTQ0FQRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNyxcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAxMScsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRFVklDRSBDT05UUk9MIDEgKE9GVC4gWE9OKVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxOCxcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAxMicsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRFVklDRSBDT05UUk9MIDJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTksXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMTMnLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJERVZJQ0UgQ09OVFJPTCAzIChPRlQuIFhPRkYpXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIwLFxuICAgICAgICBcInN5bWJvbFwiOiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KCdcXHUwMDE0JywgMTYpKSxcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiREVWSUNFIENPTlRST0wgNFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMSxcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAxNScsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5FR0FUSVZFIEFDS05PV0xFREdFTUVOVFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMixcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAxNicsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNZTkNIUk9OT1VTIElETEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjMsXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMTcnLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJFTkQgT0YgVFJBTlNNSVQgQkxPQ0tcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjQsXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMTgnLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJDQU5DRUxcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjUsXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMTknLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJFTkQgT0YgTUVESVVNXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDI2LFxuICAgICAgICBcInN5bWJvbFwiOiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KCdcXHUwMDFBJywgMTYpKSxcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU1VCU1RJVFVURVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyNyxcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAxQicsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkVTQ0FQRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyOCxcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAxQycsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkZJTEUgU0VQQVJBVE9SXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDI5LFxuICAgICAgICBcInN5bWJvbFwiOiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KCdcXHUwMDFEJywgMTYpKSxcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiR1JPVVAgU0VQQVJBVE9SXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDMwLFxuICAgICAgICBcInN5bWJvbFwiOiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KCdcXHUwMDFFJywgMTYpKSxcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUkVDT1JEIFNFUEFSQVRPUlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAzMSxcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAxRicsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlVOSVQgU0VQQVJBVE9SXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDMyLFxuICAgICAgICBcInN5bWJvbFwiOiBcIiBcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU1BBQ0VcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMzMsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiIVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJFWENMQU1BVElPTiBNQVJLXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDM0LFxuICAgICAgICBcInN5bWJvbFwiOiBcIlxcXCJcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUVVPVEFUSU9OIE1BUktcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMzUsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiI1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOVU1CRVIgU0lHTlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAzNixcbiAgICAgICAgXCJzeW1ib2xcIjogXCIkXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRPTExBUiBTSUdOXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDM3LFxuICAgICAgICBcInN5bWJvbFwiOiBcIiVcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUEVSQ0VOVCBTSUdOXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDM4LFxuICAgICAgICBcInN5bWJvbFwiOiBcIiZcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQU1QRVJTQU5EXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDM5LFxuICAgICAgICBcInN5bWJvbFwiOiBcIidcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQVBPU1RST1BIRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA0MCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCIoXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxFRlQgUEFSRU5USEVTSVNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNDEsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiKVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJSSUdIVCBQQVJFTlRIRVNJU1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA0MixcbiAgICAgICAgXCJzeW1ib2xcIjogXCIqXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkFTVEVSSVNLXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDQzLFxuICAgICAgICBcInN5bWJvbFwiOiBcIitcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUExVUyBTSUdOXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDQ0LFxuICAgICAgICBcInN5bWJvbFwiOiBcIixcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ09NTUFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNDUsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiLVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJIWVBIRU4tTUlOVVNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNDYsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiLlwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJGVUxMIFNUT1BcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNDcsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiL1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTT0xJRFVTXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDQ4LFxuICAgICAgICBcInN5bWJvbFwiOiBcIjBcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRElHSVQgWkVST1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA0OSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCIxXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRJR0lUIE9ORVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA1MCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCIyXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRJR0lUIFRXT1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA1MSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCIzXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRJR0lUIFRIUkVFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDUyLFxuICAgICAgICBcInN5bWJvbFwiOiBcIjRcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRElHSVQgRk9VUlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA1MyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCI1XCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRJR0lUIEZJVkVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNTQsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiNlwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJESUdJVCBTSVhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNTUsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiN1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJESUdJVCBTRVZFTlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA1NixcbiAgICAgICAgXCJzeW1ib2xcIjogXCI4XCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRJR0lUIEVJR0hUXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDU3LFxuICAgICAgICBcInN5bWJvbFwiOiBcIjlcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRElHSVQgTklORVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA1OCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCI6XCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkNPTE9OXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDU5LFxuICAgICAgICBcInN5bWJvbFwiOiBcIjtcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU0VNSUNPTE9OXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDYwLFxuICAgICAgICBcInN5bWJvbFwiOiBcIjxcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEVTUy1USEFOIFNJR05cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNjEsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiPVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJFUVVBTFMgU0lHTlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA2MixcbiAgICAgICAgXCJzeW1ib2xcIjogXCI+XCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkdSRUFURVItVEhBTiBTSUdOXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDYzLFxuICAgICAgICBcInN5bWJvbFwiOiBcIj9cIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUVVFU1RJT04gTUFSS1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA2NCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCJAXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkNPTU1FUkNJQUwgQVRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNjUsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiQVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBBXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDY2LFxuICAgICAgICBcInN5bWJvbFwiOiBcIkJcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgQlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA2NyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCJDXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIENcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNjgsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiRFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBEXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDY5LFxuICAgICAgICBcInN5bWJvbFwiOiBcIkVcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA3MCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCJGXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIEZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNzEsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiR1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBHXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDcyLFxuICAgICAgICBcInN5bWJvbFwiOiBcIkhcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgSFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA3MyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCJJXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIElcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNzQsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiSlwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBKXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDc1LFxuICAgICAgICBcInN5bWJvbFwiOiBcIktcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgS1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA3NixcbiAgICAgICAgXCJzeW1ib2xcIjogXCJMXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIExcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNzcsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiTVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBNXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDc4LFxuICAgICAgICBcInN5bWJvbFwiOiBcIk5cIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgTlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA3OSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCJPXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIE9cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogODAsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiUFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBQXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDgxLFxuICAgICAgICBcInN5bWJvbFwiOiBcIlFcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgUVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA4MixcbiAgICAgICAgXCJzeW1ib2xcIjogXCJSXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIFJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogODMsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiU1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBTXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDg0LFxuICAgICAgICBcInN5bWJvbFwiOiBcIlRcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgVFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA4NSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCJVXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIFVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogODYsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiVlwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBWXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDg3LFxuICAgICAgICBcInN5bWJvbFwiOiBcIldcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgV1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA4OCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCJYXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIFhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogODksXG4gICAgICAgIFwic3ltYm9sXCI6IFwiWVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBZXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDkwLFxuICAgICAgICBcInN5bWJvbFwiOiBcIlpcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgWlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA5MSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCJbXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxFRlQgU1FVQVJFIEJSQUNLRVRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogOTIsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlJFVkVSU0UgU09MSURVU1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA5MyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCJdXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlJJR0hUIFNRVUFSRSBCUkFDS0VUXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDk0LFxuICAgICAgICBcInN5bWJvbFwiOiBcIl5cIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ0lSQ1VNRkxFWCBBQ0NFTlRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogOTUsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiX1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMT1cgTElORVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA5NixcbiAgICAgICAgXCJzeW1ib2xcIjogXCJgXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkdSQVZFIEFDQ0VOVFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA5NyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCJhXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBBXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDk4LFxuICAgICAgICBcInN5bWJvbFwiOiBcImJcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIEJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogOTksXG4gICAgICAgIFwic3ltYm9sXCI6IFwiY1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgQ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMDAsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiZFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgRFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMDEsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiZVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMDIsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiZlwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgRlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMDMsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiZ1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgR1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMDQsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiaFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgSFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMDUsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiaVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgSVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMDYsXG4gICAgICAgIFwic3ltYm9sXCI6IFwialwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgSlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMDcsXG4gICAgICAgIFwic3ltYm9sXCI6IFwia1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgS1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMDgsXG4gICAgICAgIFwic3ltYm9sXCI6IFwibFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgTFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMDksXG4gICAgICAgIFwic3ltYm9sXCI6IFwibVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgTVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMTAsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiblwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgTlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMTEsXG4gICAgICAgIFwic3ltYm9sXCI6IFwib1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgT1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMTIsXG4gICAgICAgIFwic3ltYm9sXCI6IFwicFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgUFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMTMsXG4gICAgICAgIFwic3ltYm9sXCI6IFwicVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgUVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMTQsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiclwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgUlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMTUsXG4gICAgICAgIFwic3ltYm9sXCI6IFwic1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgU1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMTYsXG4gICAgICAgIFwic3ltYm9sXCI6IFwidFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgVFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMTcsXG4gICAgICAgIFwic3ltYm9sXCI6IFwidVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgVVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMTgsXG4gICAgICAgIFwic3ltYm9sXCI6IFwidlwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgVlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMTksXG4gICAgICAgIFwic3ltYm9sXCI6IFwid1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgV1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMjAsXG4gICAgICAgIFwic3ltYm9sXCI6IFwieFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgWFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMjEsXG4gICAgICAgIFwic3ltYm9sXCI6IFwieVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgWVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMjIsXG4gICAgICAgIFwic3ltYm9sXCI6IFwielwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgWlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMjMsXG4gICAgICAgIFwic3ltYm9sXCI6IFwie1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMRUZUIENVUkxZIEJSQUNLRVRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTI0LFxuICAgICAgICBcInN5bWJvbFwiOiBcInxcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVkVSVElDQUwgTElORVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMjUsXG4gICAgICAgIFwic3ltYm9sXCI6IFwifVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJSSUdIVCBDVVJMWSBCUkFDS0VUXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDEyNixcbiAgICAgICAgXCJzeW1ib2xcIjogXCJ+XCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRJTERFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDEyNyxcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDA3RicsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRFTEVURVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMjgsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiw4dcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgQyBXSVRIIENFRElMTEFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTI5LFxuICAgICAgICBcInN5bWJvbFwiOiBcIsO8XCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBVIFdJVEggRElBRVJFU0lTXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDEzMCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLDqVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgRSBXSVRIIEFDVVRFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDEzMSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLDolwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgQSBXSVRIIENJUkNVTUZMRVhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTMyLFxuICAgICAgICBcInN5bWJvbFwiOiBcIsOkXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBBIFdJVEggRElBRVJFU0lTXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDEzMyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLDoFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgQSBXSVRIIEdSQVZFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDEzNCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLDpVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgQSBXSVRIIFJJTkcgQUJPVkVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTM1LFxuICAgICAgICBcInN5bWJvbFwiOiBcIsOnXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBDIFdJVEggQ0VESUxMQVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMzYsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiw6pcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIEUgV0lUSCBDSVJDVU1GTEVYXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDEzNyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLDq1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgRSBXSVRIIERJQUVSRVNJU1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMzgsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiw6hcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIEUgV0lUSCBHUkFWRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMzksXG4gICAgICAgIFwic3ltYm9sXCI6IFwiw69cIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIEkgV0lUSCBESUFFUkVTSVNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTQwLFxuICAgICAgICBcInN5bWJvbFwiOiBcIsOuXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBJIFdJVEggQ0lSQ1VNRkxFWFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNDEsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiw6xcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIEkgV0lUSCBHUkFWRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNDIsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiw4RcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgQSBXSVRIIERJQUVSRVNJU1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNDMsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiw4VcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgQSBXSVRIIFJJTkcgQUJPVkVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTQ0LFxuICAgICAgICBcInN5bWJvbFwiOiBcIsOJXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIEUgV0lUSCBBQ1VURVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNDUsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiw6ZcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIEFFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE0NixcbiAgICAgICAgXCJzeW1ib2xcIjogXCLDhlwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBBRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNDcsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiw7RcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIE8gV0lUSCBDSVJDVU1GTEVYXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE0OCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLDtlwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgTyBXSVRIIERJQUVSRVNJU1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNDksXG4gICAgICAgIFwic3ltYm9sXCI6IFwiw7JcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIE8gV0lUSCBHUkFWRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNTAsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiw7tcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIFUgV0lUSCBDSVJDVU1GTEVYXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE1MSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLDuVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgVSBXSVRIIEdSQVZFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE1MixcbiAgICAgICAgXCJzeW1ib2xcIjogXCLDv1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgWSBXSVRIIERJQUVSRVNJU1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNTMsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiw5ZcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgTyBXSVRIIERJQUVSRVNJU1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNTQsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiw5xcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgVSBXSVRIIERJQUVSRVNJU1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNTUsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiwqJcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ0VOVCBTSUdOXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE1NixcbiAgICAgICAgXCJzeW1ib2xcIjogXCLCo1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJQT1VORCBTSUdOXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE1NyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLCpVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJZRU4gU0lHTlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNTgsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4oKnXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlBFU0VUQSBTSUdOXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE1OSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLGklwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgRiBXSVRIIEhPT0tcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTYwLFxuICAgICAgICBcInN5bWJvbFwiOiBcIsOhXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBBIFdJVEggQUNVVEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTYxLFxuICAgICAgICBcInN5bWJvbFwiOiBcIsOtXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBJIFdJVEggQUNVVEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTYyLFxuICAgICAgICBcInN5bWJvbFwiOiBcIsOzXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBPIFdJVEggQUNVVEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTYzLFxuICAgICAgICBcInN5bWJvbFwiOiBcIsO6XCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBVIFdJVEggQUNVVEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTY0LFxuICAgICAgICBcInN5bWJvbFwiOiBcIsOxXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBOIFdJVEggVElMREVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTY1LFxuICAgICAgICBcInN5bWJvbFwiOiBcIsORXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIE4gV0lUSCBUSUxERVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNjYsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiwqpcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRkVNSU5JTkUgT1JESU5BTCBJTkRJQ0FUT1JcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTY3LFxuICAgICAgICBcInN5bWJvbFwiOiBcIsK6XCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk1BU0NVTElORSBPUkRJTkFMIElORElDQVRPUlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNjgsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiwr9cIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiSU5WRVJURUQgUVVFU1RJT04gTUFSS1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNjksXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4oyQXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlJFVkVSU0VEIE5PVCBTSUdOXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE3MCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLCrFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOT1QgU0lHTlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNzEsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiwr1cIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVlVMR0FSIEZSQUNUSU9OIE9ORSBIQUxGXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE3MixcbiAgICAgICAgXCJzeW1ib2xcIjogXCLCvFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJWVUxHQVIgRlJBQ1RJT04gT05FIFFVQVJURVJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTczLFxuICAgICAgICBcInN5bWJvbFwiOiBcIsKhXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIklOVkVSVEVEIEVYQ0xBTUFUSU9OIE1BUktcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTc0LFxuICAgICAgICBcInN5bWJvbFwiOiBcIsKrXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxFRlQtUE9JTlRJTkcgRE9VQkxFIEFOR0xFIFFVT1RBVElPTiBNQVJLXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE3NSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLCu1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJSSUdIVC1QT0lOVElORyBET1VCTEUgQU5HTEUgUVVPVEFUSU9OIE1BUktcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTc2LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKWkVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMSUdIVCBTSEFERVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNzcsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4paSXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk1FRElVTSBTSEFERVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNzgsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4paTXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRBUksgU0hBREVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTc5LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKUglwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgTElHSFQgVkVSVElDQUxcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTgwLFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKUpFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgTElHSFQgVkVSVElDQUwgQU5EIExFRlRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTgxLFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKVoVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgVkVSVElDQUwgU0lOR0xFIEFORCBMRUZUIERPVUJMRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxODIsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4pWiXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBWRVJUSUNBTCBET1VCTEUgQU5EIExFRlQgU0lOR0xFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE4MyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilZZcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIERPV04gRE9VQkxFIEFORCBMRUZUIFNJTkdMRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxODQsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4pWVXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBET1dOIFNJTkdMRSBBTkQgTEVGVCBET1VCTEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTg1LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKVo1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgRE9VQkxFIFZFUlRJQ0FMIEFORCBMRUZUXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE4NixcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilZFcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIERPVUJMRSBWRVJUSUNBTFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxODcsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4pWXXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBET1VCTEUgRE9XTiBBTkQgTEVGVFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxODgsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4pWdXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBET1VCTEUgVVAgQU5EIExFRlRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTg5LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKVnFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgVVAgRE9VQkxFIEFORCBMRUZUIFNJTkdMRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxOTAsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4pWbXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBVUCBTSU5HTEUgQU5EIExFRlQgRE9VQkxFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE5MSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilJBcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIExJR0hUIERPV04gQU5EIExFRlRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTkyLFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKUlFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgTElHSFQgVVAgQU5EIFJJR0hUXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE5MyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilLRcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIExJR0hUIFVQIEFORCBIT1JJWk9OVEFMXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE5NCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilKxcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIExJR0hUIERPV04gQU5EIEhPUklaT05UQUxcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTk1LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKUnFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgTElHSFQgVkVSVElDQUwgQU5EIFJJR0hUXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE5NixcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilIBcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIExJR0hUIEhPUklaT05UQUxcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTk3LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKUvFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgTElHSFQgVkVSVElDQUwgQU5EIEhPUklaT05UQUxcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTk4LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKVnlwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgVkVSVElDQUwgU0lOR0xFIEFORCBSSUdIVCBET1VCTEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTk5LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKVn1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgVkVSVElDQUwgRE9VQkxFIEFORCBSSUdIVCBTSU5HTEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjAwLFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKVmlwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgRE9VQkxFIFVQIEFORCBSSUdIVFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMDEsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4pWUXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBET1VCTEUgRE9XTiBBTkQgUklHSFRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjAyLFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKVqVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgRE9VQkxFIFVQIEFORCBIT1JJWk9OVEFMXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIwMyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilaZcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIERPVUJMRSBET1dOIEFORCBIT1JJWk9OVEFMXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIwNCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilaBcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIERPVUJMRSBWRVJUSUNBTCBBTkQgUklHSFRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjA1LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKVkFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgRE9VQkxFIEhPUklaT05UQUxcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjA2LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKVrFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgRE9VQkxFIFZFUlRJQ0FMIEFORCBIT1JJWk9OVEFMXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIwNyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLiladcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIFVQIFNJTkdMRSBBTkQgSE9SSVpPTlRBTCBET1VCTEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjA4LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKVqFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgVVAgRE9VQkxFIEFORCBIT1JJWk9OVEFMIFNJTkdMRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMDksXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4pWkXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBET1dOIFNJTkdMRSBBTkQgSE9SSVpPTlRBTCBET1VCTEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjEwLFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKVpVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgRE9XTiBET1VCTEUgQU5EIEhPUklaT05UQUwgU0lOR0xFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIxMSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilZlcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIFVQIERPVUJMRSBBTkQgUklHSFQgU0lOR0xFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIxMixcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilZhcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIFVQIFNJTkdMRSBBTkQgUklHSFQgRE9VQkxFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIxMyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilZJcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIERPV04gU0lOR0xFIEFORCBSSUdIVCBET1VCTEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjE0LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKVk1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgRE9XTiBET1VCTEUgQU5EIFJJR0hUIFNJTkdMRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMTUsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4pWrXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBWRVJUSUNBTCBET1VCTEUgQU5EIEhPUklaT05UQUwgU0lOR0xFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIxNixcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilapcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIFZFUlRJQ0FMIFNJTkdMRSBBTkQgSE9SSVpPTlRBTCBET1VCTEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjE3LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKUmFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgTElHSFQgVVAgQU5EIExFRlRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjE4LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKUjFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgTElHSFQgRE9XTiBBTkQgUklHSFRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjE5LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKWiFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJGVUxMIEJMT0NLXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIyMCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLiloRcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTE9XRVIgSEFMRiBCTE9DS1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMjEsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4paMXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxFRlQgSEFMRiBCTE9DS1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMjIsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4paQXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlJJR0hUIEhBTEYgQkxPQ0tcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjIzLFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKWgFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJVUFBFUiBIQUxGIEJMT0NLXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIyNCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLOsVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJHUkVFSyBTTUFMTCBMRVRURVIgQUxQSEFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjI1LFxuICAgICAgICBcInN5bWJvbFwiOiBcIsOfXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBTSEFSUCBTXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIyNixcbiAgICAgICAgXCJzeW1ib2xcIjogXCLOk1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJHUkVFSyBDQVBJVEFMIExFVFRFUiBHQU1NQVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMjcsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiz4BcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiR1JFRUsgU01BTEwgTEVUVEVSIFBJXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIyOCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLOo1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJHUkVFSyBDQVBJVEFMIExFVFRFUiBTSUdNQVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMjksXG4gICAgICAgIFwic3ltYm9sXCI6IFwiz4NcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiR1JFRUsgU01BTEwgTEVUVEVSIFNJR01BXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIzMCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLCtVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJNSUNSTyBTSUdOXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIzMSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLPhFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJHUkVFSyBTTUFMTCBMRVRURVIgVEFVXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIzMixcbiAgICAgICAgXCJzeW1ib2xcIjogXCLOplwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJHUkVFSyBDQVBJVEFMIExFVFRFUiBQSElcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjMzLFxuICAgICAgICBcInN5bWJvbFwiOiBcIs6YXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkdSRUVLIENBUElUQUwgTEVUVEVSIFRIRVRBXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIzNCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLOqVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJHUkVFSyBDQVBJVEFMIExFVFRFUiBPTUVHQVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMzUsXG4gICAgICAgIFwic3ltYm9sXCI6IFwizrRcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiR1JFRUsgU01BTEwgTEVUVEVSIERFTFRBXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIzNixcbiAgICAgICAgXCJzeW1ib2xcIjogXCLiiJ5cIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiSU5GSU5JVFlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjM3LFxuICAgICAgICBcInN5bWJvbFwiOiBcIs+GXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkdSRUVLIFNNQUxMIExFVFRFUiBQSElcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjM4LFxuICAgICAgICBcInN5bWJvbFwiOiBcIs61XCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkdSRUVLIFNNQUxMIExFVFRFUiBFUFNJTE9OXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIzOSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLiiKlcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiSU5URVJTRUNUSU9OXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDI0MCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLiiaFcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiSURFTlRJQ0FMIFRPXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDI0MSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLCsVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJQTFVTLU1JTlVTIFNJR05cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjQyLFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKJpVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJHUkVBVEVSLVRIQU4gT1IgRVFVQUwgVE9cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjQzLFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKJpFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMRVNTLVRIQU4gT1IgRVFVQUwgVE9cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjQ0LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKMoFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUT1AgSEFMRiBJTlRFR1JBTFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyNDUsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4oyhXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPVFRPTSBIQUxGIElOVEVHUkFMXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDI0NixcbiAgICAgICAgXCJzeW1ib2xcIjogXCLDt1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJESVZJU0lPTiBTSUdOXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDI0NyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLiiYhcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQUxNT1NUIEVRVUFMIFRPXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDI0OCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLCsFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJERUdSRUUgU0lHTlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyNDksXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4oiZXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJVTExFVCBPUEVSQVRPUlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyNTAsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiwrdcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTUlERExFIERPVFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyNTEsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4oiaXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNRVUFSRSBST09UXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDI1MixcbiAgICAgICAgXCJzeW1ib2xcIjogXCLigb9cIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU1VQRVJTQ1JJUFQgTEFUSU4gU01BTEwgTEVUVEVSIE5cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjUzLFxuICAgICAgICBcInN5bWJvbFwiOiBcIsKyXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNVUEVSU0NSSVBUIFRXT1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyNTQsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4pagXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJMQUNLIFNRVUFSRVwiXG4gICAgfVxuXTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNvZGVQYWdlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRyYXdUZXh0ID0gZXhwb3J0cy50ZXh0V2lkdGggPSBleHBvcnRzLnRleHRIZWlnaHQgPSBleHBvcnRzLmNvZGVwYWdlQW5kQml0bWFwdG9KU09OID0gZXhwb3J0cy5pbWFnZVRvQmFzZTY0ID0gZXhwb3J0cy5oZXh0VG9SZ2JhID0gZXhwb3J0cy5yZ2JhVG9IZXggPSBleHBvcnRzLmNvbG9yTGVycCA9IGV4cG9ydHMuZm9udHMgPSBleHBvcnRzLmxvYWREZWZhdWx0Rm9udHMgPSBleHBvcnRzLmxvYWRGcm9tSlNPTiA9IHZvaWQgMDtcbnZhciBGb250RGF0YV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0ZvbnREYXRhXCIpKTtcbnZhciBkZWZhdWx0X2pzb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9mb250cy9kZWZhdWx0Lmpzb25cIikpO1xudmFyIGNvZGVwYWdlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29kZXBhZ2VcIikpO1xudmFyIGltYWdlc18xID0gcmVxdWlyZShcIi4vaW1hZ2VzXCIpO1xudmFyIGZvbnRDYW52YXMgPSBudWxsO1xudmFyIGN0eCA9IG51bGw7XG52YXIgZm9udExpc3QgPSBbXTtcbmZ1bmN0aW9uIGxvYWREZWZhdWx0Rm9udHMoKSB7XG4gICAgdmFyIGxvYWRlZEZvbnQgPSBsb2FkRnJvbUpTT04oZGVmYXVsdF9qc29uXzEuZGVmYXVsdCk7XG4gICAgaWYgKGxvYWRlZEZvbnQpIHtcbiAgICAgICAgZm9udExpc3QucHVzaChsb2FkZWRGb250KTtcbiAgICB9XG59XG5leHBvcnRzLmxvYWREZWZhdWx0Rm9udHMgPSBsb2FkRGVmYXVsdEZvbnRzO1xuZnVuY3Rpb24gbG9hZEZyb21KU09OKGZvbnRKc29uKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIGZvbnREYXRhID0gT2JqZWN0LmFzc2lnbihuZXcgRm9udERhdGFfMS5kZWZhdWx0KCksIGZvbnRKc29uKTtcbiAgICAgICAgZm9udERhdGEuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgZm9udERhdGEuaW1hZ2Uuc3JjID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwnICsgZm9udERhdGEuaW1hZ2VkYXRhO1xuICAgICAgICByZXR1cm4gZm9udERhdGE7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlKTtcbiAgICB9XG59XG5leHBvcnRzLmxvYWRGcm9tSlNPTiA9IGxvYWRGcm9tSlNPTjtcbmZ1bmN0aW9uIGZvbnRzKCkge1xuICAgIGlmIChPYmplY3Qua2V5cyhmb250TGlzdCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGxvYWREZWZhdWx0Rm9udHMoKTtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGZvbnRMaXN0KS5tYXAoZnVuY3Rpb24gKG0pIHsgcmV0dXJuIGZvbnRMaXN0W21dOyB9KTtcbn1cbmV4cG9ydHMuZm9udHMgPSBmb250cztcbmZ1bmN0aW9uIGhleHRUb1JnYmEoaGV4KSB7XG4gICAgaWYgKGhleC5sZW5ndGggPT09IDcpIHtcbiAgICAgICAgaGV4ICs9ICdmZic7XG4gICAgfVxuICAgIGVsc2UgaWYgKGhleC5sZW5ndGggPT09IDgpIHtcbiAgICAgICAgaGV4ICs9ICcwJztcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcbiAgICByZXR1cm4gcmVzdWx0ID8ge1xuICAgICAgICByOiBwYXJzZUludChyZXN1bHRbMV0sIDE2KSxcbiAgICAgICAgZzogcGFyc2VJbnQocmVzdWx0WzJdLCAxNiksXG4gICAgICAgIGI6IHBhcnNlSW50KHJlc3VsdFszXSwgMTYpLFxuICAgICAgICBhOiBwYXJzZUludChyZXN1bHRbNF0sIDE2KVxuICAgIH0gOiBudWxsO1xufVxuZXhwb3J0cy5oZXh0VG9SZ2JhID0gaGV4dFRvUmdiYTtcbmZ1bmN0aW9uIHJnYmFUb0hleChyZ2IpIHtcbiAgICB2YXIgciA9IHJnYi5yLnRvU3RyaW5nKDE2KTtcbiAgICB2YXIgZyA9IHJnYi5nLnRvU3RyaW5nKDE2KTtcbiAgICB2YXIgYiA9IHJnYi5iLnRvU3RyaW5nKDE2KTtcbiAgICB2YXIgYSA9IHJnYi5hLnRvU3RyaW5nKDE2KTtcbiAgICByID0gci5sZW5ndGggPT09IDEgPyAnMCcgKyByIDogcjtcbiAgICBnID0gZy5sZW5ndGggPT09IDEgPyAnMCcgKyBnIDogZztcbiAgICBiID0gYi5sZW5ndGggPT09IDEgPyAnMCcgKyBiIDogYjtcbiAgICBhID0gYS5sZW5ndGggPT09IDEgPyAnMCcgKyBhIDogYTtcbiAgICByZXR1cm4gXCIjXCIuY29uY2F0KHIpLmNvbmNhdChnKS5jb25jYXQoYikuY29uY2F0KGEpO1xufVxuZXhwb3J0cy5yZ2JhVG9IZXggPSByZ2JhVG9IZXg7XG5mdW5jdGlvbiBjb2xvckxlcnAoY29sb3IxLCBjb2xvcjIsIHQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByOiBNYXRoLmZsb29yKGNvbG9yMS5yICsgKGNvbG9yMi5yIC0gY29sb3IxLnIpICogdCksXG4gICAgICAgIGc6IE1hdGguZmxvb3IoY29sb3IxLmcgKyAoY29sb3IyLmcgLSBjb2xvcjEuZykgKiB0KSxcbiAgICAgICAgYjogTWF0aC5mbG9vcihjb2xvcjEuYiArIChjb2xvcjIuYiAtIGNvbG9yMS5iKSAqIHQpLFxuICAgICAgICBhOiBjb2xvcjEuYVxuICAgIH07XG59XG5leHBvcnRzLmNvbG9yTGVycCA9IGNvbG9yTGVycDtcbmZ1bmN0aW9uIGltYWdlVG9CYXNlNjQoaW1nLCBvdXRwdXRGb3JtYXQpIHtcbiAgICBvdXRwdXRGb3JtYXQgPSBvdXRwdXRGb3JtYXQgPyBvdXRwdXRGb3JtYXQgOiAnaW1hZ2UvcG5nJztcbiAgICB0cnkge1xuICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHZhciBjb250eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaW1nLmhlaWdodDtcbiAgICAgICAgY2FudmFzLndpZHRoID0gaW1nLndpZHRoO1xuICAgICAgICBjb250eC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcbiAgICAgICAgdmFyIGRhdGEgPSBjYW52YXMudG9EYXRhVVJMKG91dHB1dEZvcm1hdCk7XG4gICAgICAgIHZhciBpbmRleCA9IGRhdGEuaW5kZXhPZignO2Jhc2U2NCwnKSArICc7YmFzZTY0LCcubGVuZ3RoO1xuICAgICAgICByZXR1cm4gZGF0YS5zbGljZShpbmRleCk7XG4gICAgfVxuICAgIGNhdGNoIChfYSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdDYW5ub3QgZG8gdGhpcyBvdXRzaWRlIG9mIHRoZSBET00geWV0LicpO1xuICAgICAgICAvKlxuICAgICAgICBjb25zdCBjYW52YXM6IENhbnZhcyA9IGNyZWF0ZUNhbnZhcyhpbWcud2lkdGgsIGltZy5oZWlnaHQpXG4gICAgICAgIGNvbnN0IGNvbnR4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGltZy53aWR0aFxuICAgICAgICBjb250eC5kcmF3SW1hZ2UoaW1nLCAwLCAwKVxuICAgICAgICBjb25zdCBkYXRhID0gY2FudmFzLnRvRGF0YVVSTChvdXRwdXRGb3JtYXQpXG4gICAgICAgIGNvbnN0IGluZGV4ID0gZGF0YS5pbmRleE9mKCc7YmFzZTY0LCcpICsgJztiYXNlNjQsJy5sZW5ndGhcbiAgICAgICAgcmV0dXJuIGRhdGEuc2xpY2UoaW5kZXgpKi9cbiAgICB9XG59XG5leHBvcnRzLmltYWdlVG9CYXNlNjQgPSBpbWFnZVRvQmFzZTY0O1xuLyoqXG4gKiBHZXQgYmFzZTY0IGltYWdlIGRhdGEgYW5kIGJ1aWxkIGEgcHJlY29tcGlsZWQgZm9udCBKU09OIG9iamVjdC5cbiAqIEBwYXJhbSBpbWFnZU5hbWVcbiAqIEBwYXJhbSBtYXhfeVxuICogQHBhcmFtIGN3IENoYXJhY3RlciB3aWR0aC5cbiAqIEBwYXJhbSBjaCBDaGFyYWN0ZXIgaGVpZ2h0LlxuICogQHJldHVybnNcbiAqL1xuZnVuY3Rpb24gY29kZXBhZ2VBbmRCaXRtYXB0b0pTT04oaW1hZ2VOYW1lLCBtYXhfeSwgY3csIGNoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBzeCA9IDA7IC8vIFNvdXJjZSBYXG4gICAgICAgICAgICB2YXIgc3kgPSAwOyAvLyBTb3VyY2UgWVxuICAgICAgICAgICAgY3cgPSBjdyA/IGN3IDogOTsgLy8gQ2hhcmFjdGVyIFdpZHRoXG4gICAgICAgICAgICBjaCA9IGNoID8gY2ggOiAxNjsgLy8gQ2hhcmFjdGVyIEhlaWdodFxuICAgICAgICAgICAgdmFyIGNvZGVwYWdlID0gW107XG4gICAgICAgICAgICB2YXIgaW1hZ2VkYXRhID0gbnVsbDtcbiAgICAgICAgICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgaW1hZ2VkYXRhID0gaW1hZ2VUb0Jhc2U2NCgoMCwgaW1hZ2VzXzEuZ2V0SW1hZ2UpKGltYWdlTmFtZSkpO1xuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwnICsgaW1hZ2VkYXRhO1xuICAgICAgICAgICAgbWF4X3kgPSBtYXhfeSA/IG1heF95IDogaW1hZ2UuaGVpZ2h0O1xuICAgICAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoY29kZSkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlaXRlbSA9IGNvZGVwYWdlXzEuZGVmYXVsdC5maWx0ZXIoZnVuY3Rpb24gKGYpIHsgcmV0dXJuIGYuY29kZW51bWJlciA9PT0gY29kZTsgfSk7XG4gICAgICAgICAgICAgICAgaWYgKGNvZGVpdGVtLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZWl0ZW1bMF0ucmVjdCA9IHVuZGVmaW5lZDsgLy8geyB4OiBzeCwgeTogc3ksIHc6IGN3LCBoOiBjaCB9IC8vVE9ETzogTWFrZSB0aGlzIGEgcGFyYW1ldGVyIHRvIGNvbnRyb2wgd2hldGhlciB3ZSBhdXRvLWdlbmVyYXRlIHJlY3RzXG4gICAgICAgICAgICAgICAgICAgIGNvZGVwYWdlLnB1c2goY29kZWl0ZW1bMF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzeCArPSBjdztcbiAgICAgICAgICAgICAgICBpZiAoc3ggPj0gaW1hZ2Uud2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3ggPSAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWF4X3kgJiYgc3kgKyBjaCA8IG1heF95KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzeSArPSBjaDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3kgPj0gaW1hZ2UuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHN5ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZm9yICh2YXIgY29kZSA9IDA7IGNvZGUgPCAyNTY7IGNvZGUrKykge1xuICAgICAgICAgICAgICAgIF9sb29wXzEoY29kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNvbHZlKHsgY3dpZHRoOiBjdywgY2hlaWdodDogY2gsIGNvZGVwYWdlOiBjb2RlcGFnZSwgaW1hZ2VkYXRhOiBpbWFnZWRhdGEgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5jb2RlcGFnZUFuZEJpdG1hcHRvSlNPTiA9IGNvZGVwYWdlQW5kQml0bWFwdG9KU09OO1xuZnVuY3Rpb24gdGV4dEhlaWdodCh0ZXh0LCBmb250KSB7XG4gICAgaWYgKCFmb250ICYmIGZvbnRMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9udCA9IGZvbnRMaXN0WzBdO1xuICAgIH1cbiAgICBlbHNlIGlmICghZm9udCB8fCBmb250TGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb250IHBhcmFtZXRlciBlbXB0eSBhbmQgZGVmYXVsdCBmb250cyBhcmUgbm90IGxvYWRlZC4nKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHRleHQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdHh0ID0gdGV4dC5zcGxpdCgnXFxuJyk7XG4gICAgICAgIHJldHVybiB0eHQubGVuZ3RoICogZm9udC5jaGVpZ2h0O1xuICAgIH1cbiAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxufVxuZXhwb3J0cy50ZXh0SGVpZ2h0ID0gdGV4dEhlaWdodDtcbmZ1bmN0aW9uIHRleHRXaWR0aCh0ZXh0LCBmb250KSB7XG4gICAgaWYgKCFmb250ICYmIGZvbnRMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9udCA9IGZvbnRMaXN0WzBdO1xuICAgIH1cbiAgICBlbHNlIGlmICghZm9udCB8fCBmb250TGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb250IHBhcmFtZXRlciBlbXB0eSBhbmQgZGVmYXVsdCBmb250cyBhcmUgbm90IGxvYWRlZC4nKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHRleHQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbWF4dyA9IDA7XG4gICAgICAgIHZhciB0eHQgPSB0ZXh0LnNwbGl0KCdcXG4nKTtcbiAgICAgICAgdmFyIF9sb29wXzIgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBsaW5lID0gdHh0W2luZGV4XTtcbiAgICAgICAgICAgIHZhciBsaW5ld2lkdGggPSAwO1xuICAgICAgICAgICAgdmFyIF9sb29wXzMgPSBmdW5jdGlvbiAoY2hhcikge1xuICAgICAgICAgICAgICAgIHZhciBnbHlwaCA9IGZvbnQuY29kZXBhZ2UuZmlsdGVyKGZ1bmN0aW9uIChmKSB7IHJldHVybiBmLmNvZGVudW1iZXIgPT09IGxpbmUuY2hhckNvZGVBdChjaGFyKTsgfSk7XG4gICAgICAgICAgICAgICAgdmFyIHJlY3QgPSBnbHlwaC5sZW5ndGggPiAwID8gZ2x5cGhbMF0ucmVjdCA6IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKHJlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgbGluZXdpZHRoICs9IHJlY3QudztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmV3aWR0aCArPSBmb250LmN3aWR0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZm9yICh2YXIgY2hhciA9IDA7IGNoYXIgPCBsaW5lLmxlbmd0aDsgY2hhcisrKSB7XG4gICAgICAgICAgICAgICAgX2xvb3BfMyhjaGFyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsaW5ld2lkdGggPiBtYXh3KSB7XG4gICAgICAgICAgICAgICAgbWF4dyA9IGxpbmV3aWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gdHh0KSB7XG4gICAgICAgICAgICBfbG9vcF8yKGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF4dztcbiAgICB9XG4gICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbn1cbmV4cG9ydHMudGV4dFdpZHRoID0gdGV4dFdpZHRoO1xuLyoqXG4gKiBEcmF3cyB0aGUgc3BlY2lmaWVkIHRleHQgb24gdGhlIGNhbnZhcy5cbiAqXG4gKiBAcGFyYW0ge0hUTUxDYW52YXNFbGVtZW50fSBjdHggMmQgY29udGV4dCB0byBkcmF3IHRleHQgb24uXG4gKiBAcGFyYW0ge251bWJlcn0geCBMZWZ0IGxvY2F0aW9uIGZvciB0ZXh0LlxuICogQHBhcmFtIHtudW1iZXJ9IHkgVG9wIGxvY2F0aW9uIGZvciB0ZXh0XG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBUZXh0IHRvIGJlIGRyYXduIG9uIGNhbnZhcy5cbiAqIEBwYXJhbSB7Q29sb3JSR0JBfSBjb2xvciBDb2xvdXIgdG8gdXNlICh3aGl0ZSBpZiB1bmRlZmluZWQpLlxuICogQHBhcmFtIHtGb250RGF0YX0gZm9udCBGb250IHRvIHVzZSAoZGVmYXVsdCBET1MgY29kZXBhZ2UgNDM3IGZvbnQgaWYgdW5kZWZpbmVkKS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBlZmZlY3RzIEFueSBlZmZlY3RzIGFuZCBwYXJhbWV0ZXJzIHRvIGFwcGx5IHdoZW4gcmVuZGVyaW5nIHRoaXMgdGV4dC5cbiAqIEByZXR1cm5zIHtSZWN0fVxuICovXG4vKipcbiAqIERyYXdzIHRoZSBzcGVjaWZpZWQgdGV4dCBvbiB0aGUgY2FudmFzLlxuICogQHBhcmFtIHggTGVmdCBsb2NhdGlvbiBmb3IgdGV4dC5cbiAqIEBwYXJhbSB5IFRvcCBsb2NhdGlvbiBmb3IgdGV4dC5cbiAqIEBwYXJhbSB0ZXh0IFRleHQgdG8gYmUgZHJhd24gb24gY2FudmFzLlxuICogQHBhcmFtIGNvbG9yIENvbG91ciB0byB1c2UgKHdoaXRlIGlmIHVuZGVmaW5lZCkuXG4gKiBAcGFyYW0gZm9udCBGb250IHRvIHVzZSAoZGVmYXVsdCBET1MgY29kZXBhZ2UgNDM3IGZvbnQgaWYgdW5kZWZpbmVkKS5cbiAqIEByZXR1cm5zIFJlY3Qgb2JqZWN0IHdpdGggdGhlIHgsIHksIHdpZHRoLCBoZWlnaHQgb2YgdGhlIHRleHQgZHJhd24uXG4gKi9cbmZ1bmN0aW9uIGRyYXdUZXh0KHgsIHksIHRleHQsIGNvbG9yLCBmb250IC8qLCBlZmZlY3RzOiBvYmplY3QqLykge1xuICAgIGlmICh0eXBlb2YgY29sb3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbG9yID0gaGV4dFRvUmdiYShjb2xvcik7XG4gICAgfVxuICAgIGlmICh0ZXh0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4geyB4OiB4LCB5OiB5LCB3OiAwLCBoOiAwIH07XG4gICAgfVxuICAgIC8vZWZmZWN0cyA9IGVmZmVjdHMgPyBlZmZlY3RzIDoge31cbiAgICBpZiAoIWZvbnQgJiYgZm9udExpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICBmb250ID0gZm9udExpc3RbMF07XG4gICAgfVxuICAgIGVsc2UgaWYgKCFmb250IHx8IGZvbnRMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZvbnQgcGFyYW1ldGVyIGVtcHR5IGFuZCBkZWZhdWx0IGZvbnRzIGFyZSBub3QgbG9hZGVkLicpO1xuICAgIH1cbiAgICBpZiAoIWNvbG9yKSB7XG4gICAgICAgIGNvbG9yID0gaGV4dFRvUmdiYSgnI2ZmZmZmZmZmJyk7XG4gICAgfVxuICAgIGlmICghZm9udCB8fCAhZm9udC5jb2RlcGFnZSB8fCAhZm9udC5pbWFnZWRhdGEgfHwgIWZvbnQuaW1hZ2UgfHwgIWZvbnQuY3dpZHRoIHx8ICFmb250LmNoZWlnaHQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGZvbnQgb3IgZm9udCBub3QgbG9hZGVkLicpO1xuICAgIH1cbiAgICB2YXIgdGV4dHdpZHRoID0gdGV4dFdpZHRoKHRleHQsIGZvbnQpO1xuICAgIHZhciB0ZXh0aGVpZ2h0ID0gdGV4dEhlaWdodCh0ZXh0LCBmb250KTtcbiAgICBpZiAoIWZvbnRDYW52YXMpIHtcbiAgICAgICAgZm9udENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICBmb250Q2FudmFzLmlkID0gJ2ZvbnRDYW52YXMnO1xuICAgIH1cbiAgICBpZiAoIWN0eCkge1xuICAgICAgICBjdHggPSAoMCwgaW1hZ2VzXzEuZ2V0Q29udGV4dCkoKTtcbiAgICB9XG4gICAgZm9udENhbnZhcy53aWR0aCA9IHRleHR3aWR0aDtcbiAgICBmb250Q2FudmFzLmhlaWdodCA9IHRleHRoZWlnaHQ7XG4gICAgdmFyIGZvbnRjdHggPSBmb250Q2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgZm9udGN0eC5jbGVhclJlY3QoMCwgMCwgdGV4dHdpZHRoLCB0ZXh0aGVpZ2h0KTtcbiAgICB2YXIgZHggPSAwO1xuICAgIHZhciBtYXhkeCA9IDA7XG4gICAgdmFyIHJvd3MgPSB0ZXh0LnNwbGl0KCdcXG4nKTtcbiAgICB2YXIgZHkgPSAwO1xuICAgIHZhciBfbG9vcF80ID0gZnVuY3Rpb24gKHJvd0luZGV4KSB7XG4gICAgICAgIHZhciB0eHQgPSByb3dzW3Jvd0luZGV4XTtcbiAgICAgICAgdmFyIF9sb29wXzUgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBnbHlwaHMgPSBmb250LmNvZGVwYWdlLmZpbHRlcihmdW5jdGlvbiAoZikgeyByZXR1cm4gZi5zeW1ib2wgPT09IHR4dFtpbmRleF07IH0pO1xuICAgICAgICAgICAgdmFyIGdseXBoID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChnbHlwaHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZ2x5cGggPSBmb250LmNvZGVwYWdlLmZpbHRlcihmdW5jdGlvbiAoZikgeyByZXR1cm4gZi5jb2RlbnVtYmVyID09PSB0eHRbaW5kZXhdLmNoYXJDb2RlQXQoMCk7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZ2x5cGggPSBnbHlwaHNbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVjdCA9IGdseXBoID8gZ2x5cGgucmVjdCA6IG51bGw7XG4gICAgICAgICAgICBpZiAocmVjdCkge1xuICAgICAgICAgICAgICAgIGZvbnRjdHguZHJhd0ltYWdlKGZvbnQuaW1hZ2UsIHJlY3QueCwgcmVjdC55LCByZWN0LncsIHJlY3QuaCwgZHgsIGR5LCByZWN0LncsIHJlY3QuaCk7XG4gICAgICAgICAgICAgICAgZHggKz0gcmVjdC53O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGZpbmRpbmcgdmFsdWUgaW4gY29kZXBhZ2UgZm9yJywgdHh0W2luZGV4XSwgXCIoXCIuY29uY2F0KHR4dFtpbmRleF0uY2hhckNvZGVBdCgwKSwgXCIpXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHR4dC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIF9sb29wXzUoaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGR5ICs9IGZvbnQuY2hlaWdodDtcbiAgICAgICAgaWYgKGR4ID4gbWF4ZHgpIHtcbiAgICAgICAgICAgIG1heGR4ID0gZHg7XG4gICAgICAgIH1cbiAgICAgICAgZHggPSAwO1xuICAgIH07XG4gICAgZm9yICh2YXIgcm93SW5kZXggaW4gcm93cykge1xuICAgICAgICBfbG9vcF80KHJvd0luZGV4KTtcbiAgICB9XG4gICAgdGV4dHdpZHRoID0gbWF4ZHg7XG4gICAgdmFyIGltYWdlRGF0YSA9IG51bGw7XG4gICAgaWYgKHRleHR3aWR0aCA+IDApIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGltYWdlRGF0YSA9IGZvbnRjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHRleHR3aWR0aCwgdGV4dGhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgZ2V0dGluZyBpbWFnZSBkYXRhOicsIHRleHR3aWR0aCwgdGV4dGhlaWdodCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBpeGVscyA9IGltYWdlRGF0YS5kYXRhO1xuICAgICAgICBmb3IgKHZhciBweSA9IDA7IHB5IDwgdGV4dGhlaWdodDsgcHkrKykge1xuICAgICAgICAgICAgZm9yICh2YXIgcHggPSAwOyBweCA8IHRleHR3aWR0aDsgcHgrKykge1xuICAgICAgICAgICAgICAgIHZhciBwaXhlbCA9IGdldFBpeGVsQXRSZ2JhKHBpeGVscywgcHgsIHB5LCB0ZXh0d2lkdGgpO1xuICAgICAgICAgICAgICAgIC8vIGlmIChPYmplY3Qua2V5cyhlZmZlY3RzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGxldCBzZXREZWZhdWx0UGl4ZWwgPSB0cnVlXG4gICAgICAgICAgICAgICAgLy8gICAgIGlmIChlZmZlY3RzLmdyYWRpZW50ICYmIHBpeGVsICYmIHBpeGVsLmEgPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCB2ZXJ0aWNhbCA9IGVmZmVjdHMuZ3JhZGllbnQuaG9yaXpvbnRhbCA/IGZhbHNlIDogdHJ1ZVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgbGVycFQgPSB2ZXJ0aWNhbCA/IHB5IC8gdGV4dGhlaWdodCA6IHB4IC8gdGV4dHdpZHRoXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCBncmFkaWVudENvbG91cjogQ29sb3JSR0JBID0gSGV4VG9SZ2JhKGVmZmVjdHMuZ3JhZGllbnQuY29sb3IpXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCBsZXJwQ29scjogQ29sb3JSR0JBID0gQ29sb3JMZXJwKGNvbG9yLCBncmFkaWVudENvbG91ciwgbGVycFQpXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBTZXRQaXhlbEF0UmdiYShwaXhlbHMsIGxlcnBDb2xyLCBweCwgcHksIHRleHR3aWR0aClcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHNldERlZmF1bHRQaXhlbCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICAgaWYgKHBpeGVsICYmIHBpeGVsLmEgPiAwICYmIHNldERlZmF1bHRQaXhlbCkge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgU2V0UGl4ZWxBdFJnYmEocGl4ZWxzLCBjb2xvciwgcHgsIHB5LCB0ZXh0d2lkdGgpXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChwaXhlbCAmJiBwaXhlbC5hID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRQaXhlbEF0UmdiYShwaXhlbHMsIGNvbG9yLCBweCwgcHksIHRleHR3aWR0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgbmV3SW1hZ2VEYXRhID0gbmV3IEltYWdlRGF0YShwaXhlbHMsIHRleHR3aWR0aCwgdGV4dGhlaWdodCk7XG4gICAgICAgIGZvbnRjdHguY2xlYXJSZWN0KDAsIDAsIHRleHR3aWR0aCwgdGV4dGhlaWdodCk7XG4gICAgICAgIC8vIGlmIChlZmZlY3RzLmJhY2tncm91bmQpIHtcbiAgICAgICAgLy8gICAgIGN0eC5maWxsU3R5bGUgPSBlZmZlY3RzLmJhY2tncm91bmQuY29sb3VyXG4gICAgICAgIC8vICAgICBjdHguZmlsbFJlY3QoeCwgeSwgdGV4dHdpZHRoLCB0ZXh0aGVpZ2h0KVxuICAgICAgICAvLyB9XG4gICAgICAgIGZvbnRjdHgucHV0SW1hZ2VEYXRhKG5ld0ltYWdlRGF0YSwgMCwgMCk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoZm9udENhbnZhcywgMCwgMCwgdGV4dHdpZHRoLCB0ZXh0aGVpZ2h0LCB4LCB5LCB0ZXh0d2lkdGgsIHRleHRoZWlnaHQpO1xuICAgIH1cbiAgICByZXR1cm4geyB4OiB4LCB5OiB5LCB3OiB0ZXh0d2lkdGgsIGg6IHRleHRoZWlnaHQgfTtcbn1cbmV4cG9ydHMuZHJhd1RleHQgPSBkcmF3VGV4dDtcbmZ1bmN0aW9uIHNldFBpeGVsQXRSZ2JhKHBpeGVscywgY29sb3IsIHgsIHksIHBpeGVsc3dpZHRoKSB7XG4gICAgdmFyIG9mZnNldCA9ICh4ICsgcGl4ZWxzd2lkdGggKiB5KSAqIDQ7XG4gICAgaWYgKG9mZnNldCA8IDAgfHwgb2Zmc2V0ID49IHBpeGVscy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBwaXhlbHNbb2Zmc2V0XSA9IGNvbG9yLnI7XG4gICAgcGl4ZWxzW29mZnNldCArIDFdID0gY29sb3IuZztcbiAgICBwaXhlbHNbb2Zmc2V0ICsgMl0gPSBjb2xvci5iO1xuICAgIHBpeGVsc1tvZmZzZXQgKyAzXSA9IGNvbG9yLmE7XG4gICAgcmV0dXJuIHRydWU7XG59XG5mdW5jdGlvbiBnZXRQaXhlbEF0UmdiYShwaXhlbHMsIHgsIHksIHBpeGVsc3dpZHRoKSB7XG4gICAgdmFyIG9mZnNldCA9ICh4ICsgcGl4ZWxzd2lkdGggKiB5KSAqIDQ7XG4gICAgaWYgKG9mZnNldCA8IDAgfHwgb2Zmc2V0ID49IHBpeGVscy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB7IHI6IHBpeGVsc1tvZmZzZXRdLCBnOiBwaXhlbHNbb2Zmc2V0ICsgMV0sIGI6IHBpeGVsc1tvZmZzZXQgKyAyXSwgYTogcGl4ZWxzW29mZnNldCArIDNdIH07XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaW1hZ2VNYW5pZmVzdEZyb21KU09OID0gZXhwb3J0cy5nZXRDb250ZXh0ID0gZXhwb3J0cy5kcmF3SW1hZ2VDdHggPSBleHBvcnRzLnNldENvbnRleHQgPSBleHBvcnRzLmdldEltYWdlcyA9IGV4cG9ydHMuZ2V0SW1hZ2UgPSBleHBvcnRzLmRyYXdJbWFnZSA9IGV4cG9ydHMubG9hZEltYWdlID0gZXhwb3J0cy5sb2FkQWxsSW1hZ2VzID0gdm9pZCAwO1xudmFyIEltYWdlRGVmaW5pdGlvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0ltYWdlRGVmaW5pdGlvblwiKSk7XG52YXIgaW1hZ2VzID0gW107XG4vKipcbiAqIFBvcHVsYXRlIGltYWdlcyBtYW5pZmVzdCB3aXRoIEpTT04gbGlzdCBvZiBkZWZpbml0aW9ucy4gTWFuaWZlc3QgaXMgYW4gYXJyYXkgb2Ygb2JqZWN0c1xuICogbGlrZSB7IFwibmFtZVwiOiBcImltYWdlIGlkIHJlZlwiLCBcImZpbGVuYW1lXCI6IFwiZmlsZV9wYXRoL2ZpbGVuYW1lLmV4dFwiIH1cbiAqIEBwYXJhbSBqc29uIEpTT04gcmVwcmVzZW50YXRpb24gb2YgaW1hZ2UgZGVmaW5pdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGltYWdlTWFuaWZlc3RGcm9tSlNPTihqc29uKSB7XG4gICAganNvbi5mb3JFYWNoKChmdW5jdGlvbiAoZGVmKSB7IHJldHVybiBpbWFnZXMucHVzaChJbWFnZURlZmluaXRpb25fMS5kZWZhdWx0LmZyb21KU09OKGRlZikpOyB9KSk7XG59XG5leHBvcnRzLmltYWdlTWFuaWZlc3RGcm9tSlNPTiA9IGltYWdlTWFuaWZlc3RGcm9tSlNPTjtcbi8vIENhbnZhcyAyZCBjb250ZXh0LlxudmFyIGN0eCA9IG51bGw7XG4vLyBTZXQgdGhlIGNhbnZhcyAyZCBjb250ZXh0LlxuZnVuY3Rpb24gc2V0Q29udGV4dChjb250ZXh0KSB7XG4gICAgY3R4ID0gY29udGV4dDtcbn1cbmV4cG9ydHMuc2V0Q29udGV4dCA9IHNldENvbnRleHQ7XG4vLyBSZXR1cm5zIHRoZSBjYW52YXMgMmQgY29udGV4dC5cbmZ1bmN0aW9uIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIGN0eDtcbn1cbmV4cG9ydHMuZ2V0Q29udGV4dCA9IGdldENvbnRleHQ7XG4vLyBSZXR1cm4gbG9hZGVkIGltYWdlIG9iamVjdCBmcm9tIHRoZSBsaXN0LlxuZnVuY3Rpb24gZ2V0SW1hZ2UobmFtZSkge1xuICAgIHZhciBpbWcgPSBpbWFnZXMuZmlsdGVyKGZ1bmN0aW9uIChmKSB7IHJldHVybiBmLm5hbWUgPT09IG5hbWU7IH0pO1xuICAgIHJldHVybiBpbWcubGVuZ3RoID4gMCA/IGltZ1swXS5pbWFnZSA6IG51bGw7XG59XG5leHBvcnRzLmdldEltYWdlID0gZ2V0SW1hZ2U7XG4vLyBSZXR1cm5zIHRoZSBmdWxsIGxpc3Qgb2YgaW1hZ2Ugb2JqZWN0cy5cbmZ1bmN0aW9uIGdldEltYWdlcygpIHtcbiAgICByZXR1cm4gaW1hZ2VzO1xufVxuZXhwb3J0cy5nZXRJbWFnZXMgPSBnZXRJbWFnZXM7XG4vKipcbiAqIERyYXdzIGFuIGltYWdlIGF0IHgseSBjb29yZGluYXRlcyBvbiB0aGUgY2FuYXMuXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtudW1iZXJ9IHhcbiAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gKiBAcGFyYW0ge29iamVjdH0gc3JjUmVjdFxuICogQHBhcmFtIHtib29sZWFufSBmbGlwcGVkXG4gKi9cbmZ1bmN0aW9uIGRyYXdJbWFnZShuYW1lLCB4LCB5LCBzcmNSZWN0LCBmbGlwcGVkKSB7XG4gICAgZHJhd0ltYWdlQ3R4KGdldENvbnRleHQoKSwgbmFtZSwgeCwgeSwgc3JjUmVjdCwgZmxpcHBlZCk7XG59XG5leHBvcnRzLmRyYXdJbWFnZSA9IGRyYXdJbWFnZTtcbi8qKlxuICogUmF3IGltYWdlIGRyYXdpbmcgZnVuY3Rpb24gKHVzZSBkcmF3SW1hZ2UgdW5sZXNzIHlvdSB3YW50IHRvIGRyYXcgdG8gYW5vdGhlciAyZCBjb250ZXh0KS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IENhbnZhcyAyZCBjb250ZXh0LlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gKiBAcGFyYW0ge251bWJlcn0geVxuICogQHBhcmFtIHtvYmplY3R9IHNyY1JlY3RcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gZmxpcHBlZFxuICovXG5mdW5jdGlvbiBkcmF3SW1hZ2VDdHgoY29udGV4dCwgbmFtZSwgeCwgeSwgc3JjUmVjdCwgZmxpcHBlZCkge1xuICAgIHZhciBpbWcgPSBpbWFnZXMuZmlsdGVyKGZ1bmN0aW9uIChmKSB7IHJldHVybiBmLm5hbWUgPT09IG5hbWU7IH0pO1xuICAgIGlmIChpbWcubGVuZ3RoID4gMCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHNyY1JlY3QpIHtcbiAgICAgICAgICAgICAgICBpZiAoZmxpcHBlZCkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnNhdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5zY2FsZSgtMSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltZ1swXS5pbWFnZSwgc3JjUmVjdC54LCBzcmNSZWN0LnksIHNyY1JlY3Qudywgc3JjUmVjdC5oLCAteCAtIHNyY1JlY3QudywgeSwgc3JjUmVjdC53LCBzcmNSZWN0LmgpO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltZ1swXS5pbWFnZSwgc3JjUmVjdC54LCBzcmNSZWN0LnksIHNyY1JlY3Qudywgc3JjUmVjdC5oLCB4LCB5LCBzcmNSZWN0LncsIHNyY1JlY3QuaCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGZsaXBwZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5zYXZlKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuc2NhbGUoLTEsIDEpO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWdbMF0uaW1hZ2UsIHggLSBzcmNSZWN0LncsIHksIHNyY1JlY3Qudywgc3JjUmVjdC5oKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5yZXN0b3JlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWdbMF0uaW1hZ2UsIHgsIHkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgICAgIC8vIGVtcHR5XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLmRyYXdJbWFnZUN0eCA9IGRyYXdJbWFnZUN0eDtcbi8qKlxuICogTG9hZCBJbWFnZVxuICogQHBhcmFtIHtzdHJpbmd9IGZpbGVuYW1lXG4gKiBAcmV0dXJuc1xuICovXG5mdW5jdGlvbiBsb2FkSW1hZ2UoZmlsZW5hbWUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXNvbHZlKGltZyk7XG4gICAgICAgIH07XG4gICAgICAgIGltZy5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBmaWxlIFwiLmNvbmNhdChmaWxlbmFtZSwgXCI6XCIpLCBlKTtcbiAgICAgICAgICAgIHJlamVjdChudWxsKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGltYWdlID0gaW1hZ2VzLmZpbHRlcihmdW5jdGlvbiAoZikgeyByZXR1cm4gZi5maWxlbmFtZSA9PT0gZmlsZW5hbWU7IH0pO1xuICAgICAgICBpZiAoaW1hZ2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaW1nLnNyYyA9IGZpbGVuYW1lO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkltYWdlIGRlZmluaXRpb24gbWF0Y2hpbmcgZmlsZW5hbWUgXCIuY29uY2F0KGZpbGVuYW1lLCBcIiBub3QgZm91bmQuXCIpKTtcbiAgICAgICAgICAgIHJlamVjdChudWxsKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5sb2FkSW1hZ2UgPSBsb2FkSW1hZ2U7XG4vKipcbiAqIExvYWQgYWxsIGltYWdlcyBpbiB0aGUgaW1hZ2VzIGxpc3QuXG4gKiBAcmV0dXJuc1xuICovXG5mdW5jdGlvbiBsb2FkQWxsSW1hZ2VzKCkge1xuICAgIHZhciBwcm9taXNlcyA9IFtdO1xuICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgdmFyIGltYWdlID0gaW1hZ2VzW2ldO1xuICAgICAgICBwcm9taXNlcy5wdXNoKG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJldHVybiBsb2FkSW1hZ2UoaW1hZ2UuZmlsZW5hbWUpLnRoZW4oZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgICAgIGltYWdlLmltYWdlID0gcjtcbiAgICAgICAgICAgIHJlc29sdmUocik7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gbG9hZCcsIGltYWdlLmZpbGVuYW1lLCBlKTsgfSk7IH0pKTtcbiAgICB9O1xuICAgIGZvciAodmFyIGkgaW4gaW1hZ2VzKSB7XG4gICAgICAgIF9sb29wXzEoaSk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLmFsbFNldHRsZWQocHJvbWlzZXMpO1xufVxuZXhwb3J0cy5sb2FkQWxsSW1hZ2VzID0gbG9hZEFsbEltYWdlcztcbiIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKlxuICogR2xvYmFsc1xuICpcbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5heGlzUHJlc3NlZCA9IGV4cG9ydHMuYnV0dG9uUHJlc3NlZCA9IGV4cG9ydHMuaW5wdXRQcmVzc2VkID0gZXhwb3J0cy5nZXRBeGlzU3RhdGUgPSBleHBvcnRzLmdldEJ1dHRvblN0YXRlID0gZXhwb3J0cy5zZXRNYXBwZWRCdXR0b24gPSBleHBvcnRzLmdldE1hcHBlZEJ1dHRvbnMgPSBleHBvcnRzLmdldE1hcHBlZEJ1dHRvbkluZGV4ID0gZXhwb3J0cy5nZXRHYW1lcGFkcyA9IGV4cG9ydHMuZ2FtZXBhZHNEaWRVcGRhdGUgPSBleHBvcnRzLm9uR2FtZXBhZFVwZGF0ZWQgPSBleHBvcnRzLm9uR2FtZXBhZERpc2Nvbm5lY3RlZCA9IGV4cG9ydHMub25HYW1lcGFkQ29ubmVjdGVkID0gZXhwb3J0cy5nZXRJbnB1dEtleVN0YXRlID0gZXhwb3J0cy5nZXRLZXlTdGF0ZSA9IGV4cG9ydHMuZ2V0TWFwcGVkS2V5cyA9IGV4cG9ydHMuZ2V0TWFwcGVkS2V5ID0gZXhwb3J0cy5zZXRNYXBwZWRLZXkgPSBleHBvcnRzLmtleWJvYXJkUmVsZWFzZSA9IGV4cG9ydHMua2V5Ym9hcmREb3duID0gZXhwb3J0cy5vbktleWJvYXJkUmVsZWFzZSA9IGV4cG9ydHMub25LZXlib2FyZERvd24gPSBleHBvcnRzLnJlc2V0SW5wdXRNYXBzID0gZXhwb3J0cy5yZXNldEtleWJvYXJkTWFwcGluZ3MgPSBleHBvcnRzLnJlc2V0R2FtZXBhZEF4aXNNYXBwaW5ncyA9IGV4cG9ydHMucmVzZXRHYW1lcGFkQnV0dG9uTWFwcGluZ3MgPSBleHBvcnRzLmluaXRpYWxpemUgPSBleHBvcnRzLklucHV0VHlwZSA9IHZvaWQgMDtcbnZhciBrZXlzU3RhdGUgPSB7fTtcbnZhciBrZXlzTWFwID0ge307XG52YXIgYnV0dG9uc01hcCA9IHt9O1xudmFyIGF4aXNNYXAgPSB7fTtcbnZhciBnYW1lcGFkc1RpbWVzdGFtcHMgPSB7fTtcbnZhciBnYW1lcGFkQ29ubmVjdGVkID0gZnVuY3Rpb24gKCkgeyB9O1xudmFyIGdhbWVwYWREaXNjb25uZWN0ZWQgPSBmdW5jdGlvbiAoKSB7IH07XG52YXIgZ2FtZXBhZFVwZGF0ZWQgPSBmdW5jdGlvbiAoKSB7IH07XG52YXIga2V5Ym9hcmREb3duSGFuZGxlciA9IGZ1bmN0aW9uICgpIHsgfTtcbnZhciBrZXlib2FyZFJlbGVhc2VIYW5kbGVyID0gZnVuY3Rpb24gKCkgeyB9O1xudmFyIGlucHV0TWFwcztcbnZhciBzZXR0aW5ncyA9IHtcbiAgICBheGlzUHJlc3NlZFRocmVzaG9sZDogMFxufTtcbi8qKlxuICpcbiAqIEVudW1zXG4gKlxuICovXG52YXIgSW5wdXRUeXBlO1xuKGZ1bmN0aW9uIChJbnB1dFR5cGUpIHtcbiAgICBJbnB1dFR5cGVbSW5wdXRUeXBlW1wiS2V5Ym9hcmRcIl0gPSAwXSA9IFwiS2V5Ym9hcmRcIjtcbiAgICBJbnB1dFR5cGVbSW5wdXRUeXBlW1wiR2FtZXBhZEJ1dHRvblwiXSA9IDFdID0gXCJHYW1lcGFkQnV0dG9uXCI7XG4gICAgSW5wdXRUeXBlW0lucHV0VHlwZVtcIkdhbWVwYWRBeGlzXCJdID0gMl0gPSBcIkdhbWVwYWRBeGlzXCI7XG59KShJbnB1dFR5cGUgfHwgKGV4cG9ydHMuSW5wdXRUeXBlID0gSW5wdXRUeXBlID0ge30pKTtcbmZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAga2V5c1N0YXRlID0ge307XG4gICAgcmVzZXRLZXlib2FyZE1hcHBpbmdzKCk7XG4gICAgcmVzZXRHYW1lcGFkQnV0dG9uTWFwcGluZ3MoKTtcbiAgICByZXNldEdhbWVwYWRBeGlzTWFwcGluZ3MoKTtcbiAgICBpbnB1dE1hcHMgPSB7fTtcbiAgICByZXNldElucHV0TWFwcygpO1xuICAgIGdhbWVwYWRzVGltZXN0YW1wcyA9IHt9O1xuICAgIGdhbWVwYWRDb25uZWN0ZWQgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgZ2FtZXBhZERpc2Nvbm5lY3RlZCA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICBnYW1lcGFkVXBkYXRlZCA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleWJvYXJkRG93bik7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlib2FyZERvd24pO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIGtleWJvYXJkUmVsZWFzZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywga2V5Ym9hcmRSZWxlYXNlKTtcbiAgICB3aW5kb3cub25nYW1lcGFkY29ubmVjdGVkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGdhbWVwYWRzVGltZXN0YW1wc1tldmVudC5nYW1lcGFkLmluZGV4XSA9IDA7XG4gICAgICAgIGdhbWVwYWRDb25uZWN0ZWQoZXZlbnQpO1xuICAgIH07XG4gICAgd2luZG93Lm9uZ2FtZXBhZGRpc2Nvbm5lY3RlZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBnYW1lcGFkRGlzY29ubmVjdGVkKGV2ZW50KTtcbiAgICAgICAgZ2FtZXBhZHNUaW1lc3RhbXBzW2V2ZW50LmdhbWVwYWQuaW5kZXhdID0gdW5kZWZpbmVkO1xuICAgIH07XG59XG5leHBvcnRzLmluaXRpYWxpemUgPSBpbml0aWFsaXplO1xuLyoqXG4gKiBSZXNldCBidXR0b24gbWFwcGluZ3MgdG8gZGVmYXVsdHMuXG4gKi9cbmZ1bmN0aW9uIHJlc2V0R2FtZXBhZEJ1dHRvbk1hcHBpbmdzKCkge1xuICAgIGJ1dHRvbnNNYXAgPSB7ICdhY3Rpb24nOiAwLCAnY2FuY2VsJzogMSB9O1xufVxuZXhwb3J0cy5yZXNldEdhbWVwYWRCdXR0b25NYXBwaW5ncyA9IHJlc2V0R2FtZXBhZEJ1dHRvbk1hcHBpbmdzO1xuZnVuY3Rpb24gcmVzZXRHYW1lcGFkQXhpc01hcHBpbmdzKCkge1xuICAgIGF4aXNNYXAgPSB7ICdsZWZ0QXhpcyc6IFswLCAxXSwgJ3JpZ2h0QXhpcyc6IFszLCA0XSwgJ2RQYWQnOiBbNiwgN10sICd0cmlnZ2VyJzogWzIsIDVdIH07XG59XG5leHBvcnRzLnJlc2V0R2FtZXBhZEF4aXNNYXBwaW5ncyA9IHJlc2V0R2FtZXBhZEF4aXNNYXBwaW5ncztcbmZ1bmN0aW9uIHJlc2V0S2V5Ym9hcmRNYXBwaW5ncygpIHtcbiAgICBrZXlzTWFwID0ge1xuICAgICAgICAnbGVmdCc6ICdBcnJvd0xlZnQnLFxuICAgICAgICAncmlnaHQnOiAnQXJyb3dSaWdodCcsXG4gICAgICAgICd1cCc6ICdBcnJvd1VwJyxcbiAgICAgICAgJ2Rvd24nOiAnQXJyb3dEb3duJ1xuICAgIH07XG59XG5leHBvcnRzLnJlc2V0S2V5Ym9hcmRNYXBwaW5ncyA9IHJlc2V0S2V5Ym9hcmRNYXBwaW5ncztcbmZ1bmN0aW9uIHJlc2V0SW5wdXRNYXBzKCkge1xuICAgIGlucHV0TWFwcyA9IHtcbiAgICAgICAgJ2xlZnQnOiBbXG4gICAgICAgICAgICB7IHR5cGU6IElucHV0VHlwZS5LZXlib2FyZCwgbWFwS2V5OiAnQXJyb3dMZWZ0JywgYXhpc1BsYW5lOiAnJywgYXhpc0NoZWNrRGlyZWN0aW9uOiAwIH0sXG4gICAgICAgICAgICB7IHR5cGU6IElucHV0VHlwZS5HYW1lcGFkQXhpcywgbWFwS2V5OiAnbGVmdEF4aXMnLCBheGlzUGxhbmU6ICd4JywgYXhpc0NoZWNrRGlyZWN0aW9uOiAtMSB9XG4gICAgICAgIF0sXG4gICAgICAgICdyaWdodCc6IFtcbiAgICAgICAgICAgIHsgdHlwZTogSW5wdXRUeXBlLktleWJvYXJkLCBtYXBLZXk6ICdBcnJvd1JpZ2h0JywgYXhpc1BsYW5lOiAnJywgYXhpc0NoZWNrRGlyZWN0aW9uOiAwIH0sXG4gICAgICAgICAgICB7IHR5cGU6IElucHV0VHlwZS5HYW1lcGFkQXhpcywgbWFwS2V5OiAnbGVmdEF4aXMnLCBheGlzUGxhbmU6ICd4JywgYXhpc0NoZWNrRGlyZWN0aW9uOiAxIH1cbiAgICAgICAgXSxcbiAgICAgICAgJ3VwJzogW1xuICAgICAgICAgICAgeyB0eXBlOiBJbnB1dFR5cGUuS2V5Ym9hcmQsIG1hcEtleTogJ0Fycm93VXAnLCBheGlzUGxhbmU6ICcnLCBheGlzQ2hlY2tEaXJlY3Rpb246IDAgfSxcbiAgICAgICAgICAgIHsgdHlwZTogSW5wdXRUeXBlLkdhbWVwYWRBeGlzLCBtYXBLZXk6ICdsZWZ0QXhpcycsIGF4aXNQbGFuZTogJ3knLCBheGlzQ2hlY2tEaXJlY3Rpb246IC0xIH1cbiAgICAgICAgXSxcbiAgICAgICAgJ2Rvd24nOiBbXG4gICAgICAgICAgICB7IHR5cGU6IElucHV0VHlwZS5LZXlib2FyZCwgbWFwS2V5OiAnQXJyb3dEb3duJywgYXhpc1BsYW5lOiAnJywgYXhpc0NoZWNrRGlyZWN0aW9uOiAwIH0sXG4gICAgICAgICAgICB7IHR5cGU6IElucHV0VHlwZS5HYW1lcGFkQXhpcywgbWFwS2V5OiAnbGVmdEF4aXMnLCBheGlzUGxhbmU6ICd5JywgYXhpc0NoZWNrRGlyZWN0aW9uOiAxIH1cbiAgICAgICAgXSxcbiAgICB9O1xufVxuZXhwb3J0cy5yZXNldElucHV0TWFwcyA9IHJlc2V0SW5wdXRNYXBzO1xuLyoqXG4gKlxuICogIEtleWJvYXJkIElucHV0IEZ1bmN0aW9uc1xuICpcbiAqL1xuZnVuY3Rpb24gb25LZXlib2FyZERvd24oZm4pIHtcbiAgICBrZXlib2FyZERvd25IYW5kbGVyID0gZm47XG59XG5leHBvcnRzLm9uS2V5Ym9hcmREb3duID0gb25LZXlib2FyZERvd247XG5mdW5jdGlvbiBvbktleWJvYXJkUmVsZWFzZShmbikge1xuICAgIGtleWJvYXJkUmVsZWFzZUhhbmRsZXIgPSBmbjtcbn1cbmV4cG9ydHMub25LZXlib2FyZFJlbGVhc2UgPSBvbktleWJvYXJkUmVsZWFzZTtcbmZ1bmN0aW9uIGtleWJvYXJkRG93bihlKSB7XG4gICAga2V5c1N0YXRlW2Uua2V5XSA9IHRydWU7XG4gICAga2V5Ym9hcmREb3duSGFuZGxlcihlKTtcbn1cbmV4cG9ydHMua2V5Ym9hcmREb3duID0ga2V5Ym9hcmREb3duO1xuZnVuY3Rpb24ga2V5Ym9hcmRSZWxlYXNlKGUpIHtcbiAgICBrZXlzU3RhdGVbZS5rZXldID0gZmFsc2U7XG4gICAga2V5Ym9hcmRSZWxlYXNlSGFuZGxlcihlKTtcbn1cbmV4cG9ydHMua2V5Ym9hcmRSZWxlYXNlID0ga2V5Ym9hcmRSZWxlYXNlO1xuZnVuY3Rpb24gc2V0TWFwcGVkS2V5KGlucHV0TmFtZSwga2V5KSB7XG4gICAga2V5c01hcFtpbnB1dE5hbWVdID0ga2V5O1xufVxuZXhwb3J0cy5zZXRNYXBwZWRLZXkgPSBzZXRNYXBwZWRLZXk7XG5mdW5jdGlvbiBnZXRNYXBwZWRLZXkoaW5wdXROYW1lKSB7XG4gICAgaWYgKGtleXNNYXBbaW5wdXROYW1lXSkge1xuICAgICAgICByZXR1cm4ga2V5c01hcFtpbnB1dE5hbWVdO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmV4cG9ydHMuZ2V0TWFwcGVkS2V5ID0gZ2V0TWFwcGVkS2V5O1xuZnVuY3Rpb24gZ2V0TWFwcGVkS2V5cygpIHtcbiAgICB2YXIgaW5wdXRNYXA7XG4gICAgT2JqZWN0LmtleXMoa2V5c01hcCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciByZWwgPSB7IGlucHV0TmFtZToga2V5LCBrZXk6IGtleXNNYXBba2V5XSB9O1xuICAgICAgICBpbnB1dE1hcC5wdXNoKHJlbCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGlucHV0TWFwO1xufVxuZXhwb3J0cy5nZXRNYXBwZWRLZXlzID0gZ2V0TWFwcGVkS2V5cztcbmZ1bmN0aW9uIGdldEtleVN0YXRlKHN0YXRlS2V5KSB7XG4gICAgcmV0dXJuIGtleXNTdGF0ZVtzdGF0ZUtleV07XG59XG5leHBvcnRzLmdldEtleVN0YXRlID0gZ2V0S2V5U3RhdGU7XG5mdW5jdGlvbiBnZXRJbnB1dEtleVN0YXRlKGlucHV0TmFtZSkge1xuICAgIHJldHVybiBnZXRLZXlTdGF0ZShnZXRNYXBwZWRLZXkoaW5wdXROYW1lKSk7XG59XG5leHBvcnRzLmdldElucHV0S2V5U3RhdGUgPSBnZXRJbnB1dEtleVN0YXRlO1xuLyoqXG4gKlxuICogIEdhbWVwYWQgSW5wdXQgRnVuY3Rpb25zXG4gKlxuICovXG5mdW5jdGlvbiBvbkdhbWVwYWRDb25uZWN0ZWQoZm4pIHtcbiAgICBnYW1lcGFkQ29ubmVjdGVkID0gZm47XG59XG5leHBvcnRzLm9uR2FtZXBhZENvbm5lY3RlZCA9IG9uR2FtZXBhZENvbm5lY3RlZDtcbmZ1bmN0aW9uIG9uR2FtZXBhZERpc2Nvbm5lY3RlZChmbikge1xuICAgIGdhbWVwYWREaXNjb25uZWN0ZWQgPSBmbjtcbn1cbmV4cG9ydHMub25HYW1lcGFkRGlzY29ubmVjdGVkID0gb25HYW1lcGFkRGlzY29ubmVjdGVkO1xuZnVuY3Rpb24gb25HYW1lcGFkVXBkYXRlZChmbikge1xuICAgIGdhbWVwYWRVcGRhdGVkID0gZm47XG59XG5leHBvcnRzLm9uR2FtZXBhZFVwZGF0ZWQgPSBvbkdhbWVwYWRVcGRhdGVkO1xuZnVuY3Rpb24gZ2FtZXBhZHNEaWRVcGRhdGUoKSB7XG4gICAgZ2V0R2FtZXBhZHMoKS5mb3JFYWNoKGZ1bmN0aW9uIChnKSB7XG4gICAgICAgIGlmIChnYW1lcGFkc1RpbWVzdGFtcHNbZy5pbmRleF0gIT09IHVuZGVmaW5lZCAmJiBnYW1lcGFkc1RpbWVzdGFtcHNbZy5pbmRleF0gPCBnLnRpbWVzdGFtcCkge1xuICAgICAgICAgICAgZ2FtZXBhZFVwZGF0ZWQoZyk7XG4gICAgICAgIH1cbiAgICAgICAgZ2FtZXBhZHNUaW1lc3RhbXBzW2cuaW5kZXhdID0gZy50aW1lc3RhbXA7XG4gICAgfSk7XG59XG5leHBvcnRzLmdhbWVwYWRzRGlkVXBkYXRlID0gZ2FtZXBhZHNEaWRVcGRhdGU7XG5mdW5jdGlvbiBnZXRHYW1lcGFkcygpIHtcbiAgICByZXR1cm4gbmF2aWdhdG9yLmdldEdhbWVwYWRzKCkuc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYS5pbmRleCAtIGIuaW5kZXg7IH0pO1xufVxuZXhwb3J0cy5nZXRHYW1lcGFkcyA9IGdldEdhbWVwYWRzO1xuZnVuY3Rpb24gZ2V0TWFwcGVkQnV0dG9uSW5kZXgoaW5wdXROYW1lKSB7XG4gICAgcmV0dXJuIGJ1dHRvbnNNYXBbaW5wdXROYW1lXSAhPT0gdW5kZWZpbmVkID8gYnV0dG9uc01hcFtpbnB1dE5hbWVdIDogbnVsbDtcbn1cbmV4cG9ydHMuZ2V0TWFwcGVkQnV0dG9uSW5kZXggPSBnZXRNYXBwZWRCdXR0b25JbmRleDtcbmZ1bmN0aW9uIGdldE1hcHBlZEJ1dHRvbnMoKSB7XG4gICAgdmFyIGlucHV0TWFwID0gW107XG4gICAgT2JqZWN0LmtleXMoYnV0dG9uc01hcCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciByZWwgPSB7IGlucHV0TmFtZToga2V5LCBidXR0b246IGJ1dHRvbnNNYXBba2V5XSB9O1xuICAgICAgICBpbnB1dE1hcC5wdXNoKHJlbCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGlucHV0TWFwO1xufVxuZXhwb3J0cy5nZXRNYXBwZWRCdXR0b25zID0gZ2V0TWFwcGVkQnV0dG9ucztcbmZ1bmN0aW9uIHNldE1hcHBlZEJ1dHRvbihpbnB1dE5hbWUsIGJ1dHRvbkluZGV4KSB7XG4gICAgYnV0dG9uc01hcFtpbnB1dE5hbWVdID0gYnV0dG9uSW5kZXg7XG59XG5leHBvcnRzLnNldE1hcHBlZEJ1dHRvbiA9IHNldE1hcHBlZEJ1dHRvbjtcbmZ1bmN0aW9uIGdldEJ1dHRvblN0YXRlKGlucHV0TmFtZSkge1xuICAgIHZhciBzdGF0ZXMgPSBbXTtcbiAgICBnZXRHYW1lcGFkcygpLmZvckVhY2goZnVuY3Rpb24gKGcpIHtcbiAgICAgICAgdmFyIGJ1dHRvbkluZGV4ID0gZ2V0TWFwcGVkQnV0dG9uSW5kZXgoaW5wdXROYW1lKTtcbiAgICAgICAgaWYgKGJ1dHRvbkluZGV4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICB2YXIgYnV0dG9uID0gZy5idXR0b25zW2J1dHRvbkluZGV4XTtcbiAgICAgICAgICAgIHZhciBidXR0b25TdGF0ZSA9IHsgY29udHJvbGxlcjogZy5pbmRleCwgaW5wdXROYW1lOiBpbnB1dE5hbWUsIHZhbHVlOiBidXR0b24udmFsdWUsIHByZXNzZWQ6IGJ1dHRvbi5wcmVzc2VkLCB0b3VjaGVkOiBidXR0b24udG91Y2hlZCB9O1xuICAgICAgICAgICAgc3RhdGVzLnB1c2goYnV0dG9uU3RhdGUpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHN0YXRlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhLmNvbnRyb2xsZXIgLSBiLmNvbnRyb2xsZXI7IH0pO1xufVxuZXhwb3J0cy5nZXRCdXR0b25TdGF0ZSA9IGdldEJ1dHRvblN0YXRlO1xuZnVuY3Rpb24gZ2V0QXhpc1N0YXRlKGlucHV0TmFtZSkge1xuICAgIHZhciBzdGF0ZXMgPSBbXTtcbiAgICBnZXRHYW1lcGFkcygpLmZvckVhY2goZnVuY3Rpb24gKGcpIHtcbiAgICAgICAgaWYgKGF4aXNNYXBbaW5wdXROYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YXIgYXhpc1N0YXRlID0geyBjb250cm9sbGVyOiBnLmluZGV4LCB4OiBnLmF4ZXNbYXhpc01hcFtpbnB1dE5hbWVdWzBdXSwgeTogZy5heGVzW2F4aXNNYXBbaW5wdXROYW1lXVsxXV0gfTtcbiAgICAgICAgICAgIHN0YXRlcy5wdXNoKGF4aXNTdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc3RhdGVzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEuY29udHJvbGxlciAtIGIuY29udHJvbGxlcjsgfSk7XG59XG5leHBvcnRzLmdldEF4aXNTdGF0ZSA9IGdldEF4aXNTdGF0ZTtcbi8qKlxuICogV2hldGhlciBvciBub3QgdGhlIHNwZWNpZmllZCBidXR0b24gb3Iga2V5IHRoYXQgbWFwcyB0byBpbnB1dE5hbWUgaXMgcHJlc3NlZC4gTm90IHVzZWQgZm9yIGF4ZXMgb3IgdHJpZ2dlcnMuXG4gKiBAcGFyYW0gaW5wdXROYW1lIElucHV0IG5hbWUgbWFwcGVkIHRvIGEgYnV0dG9uLlxuICogQHBhcmFtIGdhbWVwYWROdW1iZXJcbiAqIEByZXR1cm5zXG4gKi9cbmZ1bmN0aW9uIGlucHV0UHJlc3NlZChpbnB1dE5hbWUsIGdhbWVwYWROdW1iZXIpIHtcbiAgICBnYW1lcGFkTnVtYmVyID0gZ2FtZXBhZE51bWJlciA9PT0gdW5kZWZpbmVkID8gMCA6IGdhbWVwYWROdW1iZXI7XG4gICAgdmFyIGlucHV0cyA9IFtdO1xuICAgIE9iamVjdC5rZXlzKGlucHV0TWFwcykuZmlsdGVyKGZ1bmN0aW9uIChmKSB7IHJldHVybiBmID09PSBpbnB1dE5hbWU7IH0pLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gaW5wdXRzLnB1c2guYXBwbHkoaW5wdXRzLCBpbnB1dE1hcHNba2V5XSk7IH0pO1xuICAgIHZhciByZXQgPSBmYWxzZTtcbiAgICBpbnB1dHMuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgICAgaWYgKGlucHV0LnR5cGUgPT09IElucHV0VHlwZS5LZXlib2FyZCAmJiBnZXRJbnB1dEtleVN0YXRlKGlucHV0TmFtZSkpIHtcbiAgICAgICAgICAgIHJldCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaW5wdXQudHlwZSA9PT0gSW5wdXRUeXBlLkdhbWVwYWRBeGlzICYmIGF4aXNQcmVzc2VkKGlucHV0Lm1hcEtleSwgaW5wdXQuYXhpc1BsYW5lLCBpbnB1dC5heGlzQ2hlY2tEaXJlY3Rpb24sIGdhbWVwYWROdW1iZXIpKSB7XG4gICAgICAgICAgICByZXQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlucHV0LnR5cGUgPT09IElucHV0VHlwZS5HYW1lcGFkQnV0dG9uICYmIGJ1dHRvblByZXNzZWQoaW5wdXQubWFwS2V5LCBnYW1lcGFkTnVtYmVyKSkge1xuICAgICAgICAgICAgcmV0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXQ7XG59XG5leHBvcnRzLmlucHV0UHJlc3NlZCA9IGlucHV0UHJlc3NlZDtcbmZ1bmN0aW9uIGJ1dHRvblByZXNzZWQoaW5wdXROYW1lLCBnYW1lcGFkTnVtYmVyKSB7XG4gICAgZ2FtZXBhZE51bWJlciA9IGdhbWVwYWROdW1iZXIgPT09IHVuZGVmaW5lZCA/IDAgOiBnYW1lcGFkTnVtYmVyO1xuICAgIHZhciBidXR0b24gPSBnZXRCdXR0b25TdGF0ZShpbnB1dE5hbWUpW2dhbWVwYWROdW1iZXJdO1xuICAgIGlmIChidXR0b24gJiYgYnV0dG9uLnByZXNzZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydHMuYnV0dG9uUHJlc3NlZCA9IGJ1dHRvblByZXNzZWQ7XG5mdW5jdGlvbiBheGlzUHJlc3NlZChpbnB1dE5hbWUsIGF4aXNQbGFuZSwgZGlyZWN0aW9uLCBnYW1lcGFkTnVtYmVyKSB7XG4gICAgZ2FtZXBhZE51bWJlciA9IGdhbWVwYWROdW1iZXIgPT09IHVuZGVmaW5lZCA/IDAgOiBnYW1lcGFkTnVtYmVyO1xuICAgIHZhciBzdGF0ZSA9IGdldEF4aXNTdGF0ZShpbnB1dE5hbWUpW2dhbWVwYWROdW1iZXJdO1xuICAgIGlmIChzdGF0ZSkge1xuICAgICAgICBpZiAoZGlyZWN0aW9uIDwgMCAmJiBzdGF0ZVtheGlzUGxhbmVdIDwgMCAmJiBzdGF0ZVtheGlzUGxhbmVdIDw9IC1zZXR0aW5ncy5heGlzUHJlc3NlZFRocmVzaG9sZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID4gMCAmJiBzdGF0ZVtheGlzUGxhbmVdID4gMCAmJiBzdGF0ZVtheGlzUGxhbmVdID49IHNldHRpbmdzLmF4aXNQcmVzc2VkVGhyZXNob2xkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnRzLmF4aXNQcmVzc2VkID0gYXhpc1ByZXNzZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTWVudUlucHV0VHlwZSA9IHZvaWQgMDtcbnZhciBzY2VuZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3NjZW5lXCIpKTtcbnZhciBmb250ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL2ZvbnRcIikpO1xudmFyIGlucHV0ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL2lucHV0XCIpKTtcbnZhciBtZW51c18xID0gcmVxdWlyZShcIi4vbWVudXNcIik7XG52YXIgTWVudUlucHV0VHlwZTtcbihmdW5jdGlvbiAoTWVudUlucHV0VHlwZSkge1xuICAgIE1lbnVJbnB1dFR5cGVbTWVudUlucHV0VHlwZVtcIlNlbGVjdGlvblwiXSA9IDBdID0gXCJTZWxlY3Rpb25cIjtcbiAgICBNZW51SW5wdXRUeXBlW01lbnVJbnB1dFR5cGVbXCJDYW5jZWxcIl0gPSAxXSA9IFwiQ2FuY2VsXCI7XG4gICAgTWVudUlucHV0VHlwZVtNZW51SW5wdXRUeXBlW1wiSW5jcmVtZW50UHJpbWFyeVwiXSA9IDJdID0gXCJJbmNyZW1lbnRQcmltYXJ5XCI7XG4gICAgTWVudUlucHV0VHlwZVtNZW51SW5wdXRUeXBlW1wiRGVjcmVtZW50UHJpbWFyeVwiXSA9IDNdID0gXCJEZWNyZW1lbnRQcmltYXJ5XCI7XG4gICAgTWVudUlucHV0VHlwZVtNZW51SW5wdXRUeXBlW1wiSW5jcmVtZW50U2Vjb25kYXJ5XCJdID0gNF0gPSBcIkluY3JlbWVudFNlY29uZGFyeVwiO1xuICAgIE1lbnVJbnB1dFR5cGVbTWVudUlucHV0VHlwZVtcIkRlY3JlbWVudFNlY29uZGFyeVwiXSA9IDVdID0gXCJEZWNyZW1lbnRTZWNvbmRhcnlcIjtcbn0pKE1lbnVJbnB1dFR5cGUgfHwgKGV4cG9ydHMuTWVudUlucHV0VHlwZSA9IE1lbnVJbnB1dFR5cGUgPSB7fSkpO1xuLyoqXG4gKiBNZW51IEZsYXZvdXIgb2YgU2NlbmVzLlxuICovXG52YXIgTWVudSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTWVudSwgX3N1cGVyKTtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBpZCBTY2VuZSBpZC5cbiAgICAgKiBAcGFyYW0gYWN0aXZlIFdoZXRoZXIgb3Igbm90IHRoZSBzY2VuZSBzdGFydHMgYWN0aXZhdGVkLlxuICAgICAqIEBwYXJhbSBkaXJlY3Rpb24gTGF5b3V0IGRpcmVjdGlvbi5cbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBNZW51IG9wdGlvbnMgKGl0ZW1zKS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBNZW51KGlkLCBhY3RpdmUsIGRpcmVjdGlvbiwgb3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgYW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoZGVsdGEpIHtcbiAgICAgICAgICAgIF90aGlzLkRyYXcoZGVsdGEpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGlkLCBhbmltYXRpb25GcmFtZSwgYWN0aXZlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBjb25zb2xlLmxvZygnZXZlbnQnLCBldmVudCk7IH0pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLm9mZnNldFggPSAwO1xuICAgICAgICBfdGhpcy5vZmZzZXRZID0gMDtcbiAgICAgICAgX3RoaXMuc2VsZWN0ZWRPcHRpb24gPSAwO1xuICAgICAgICBfdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgX3RoaXMuY29sb3IgPSB7IHI6IDEyOCwgZzogMTI4LCBiOiAxMjgsIGE6IDI1NSB9O1xuICAgICAgICBfdGhpcy5zZWxlY3RlZENvbG9yID0geyByOiAyNDUsIGc6IDI0NSwgYjogMjQ1LCBhOiAyNTUgfTtcbiAgICAgICAgX3RoaXMuc2VsZWN0U3BlZWQgPSAwLjE7XG4gICAgICAgIF90aGlzLmluY3JlbWVudFNlbGVjdGlvbklucHV0ID0gZGlyZWN0aW9uID09PSBtZW51c18xLkxheW91dERpcmVjdGlvbi5Ub3BEb3duID8gJ2Rvd24nIDogJ3JpZ2h0JztcbiAgICAgICAgX3RoaXMuZGVjcmVtZW50U2VsZWN0aW9uSW5wdXQgPSBkaXJlY3Rpb24gPT09IG1lbnVzXzEuTGF5b3V0RGlyZWN0aW9uLlRvcERvd24gPyAndXAnIDogJ2xlZnQnO1xuICAgICAgICBfdGhpcy5pbmNyZW1lbnRTZWNvbmRhcnlJbnB1dCA9IGRpcmVjdGlvbiA9PT0gbWVudXNfMS5MYXlvdXREaXJlY3Rpb24uVG9wRG93biA/ICdyaWdodCcgOiAnZG93bic7XG4gICAgICAgIF90aGlzLmRlY3JlbWVudFNlY29uZGFyeUlucHV0ID0gZGlyZWN0aW9uID09PSBtZW51c18xLkxheW91dERpcmVjdGlvbi5Ub3BEb3duID8gJ2xlZnQnIDogJ3VwJztcbiAgICAgICAgX3RoaXMuYWN0aW9uSW5wdXQgPSAnYWN0aW9uJztcbiAgICAgICAgX3RoaXMuY2FuY2VsSW5wdXQgPSAnY2FuY2VsJztcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgbWVudSBvcHRpb24uXG4gICAgICovXG4gICAgTWVudS5wcm90b3R5cGUuU2VsZWN0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnNbTWF0aC5mbG9vcih0aGlzLnNlbGVjdGVkT3B0aW9uKV07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEcmF3IHRoZSBtZW51LlxuICAgICAqIEBwYXJhbSBkZWx0YVxuICAgICAqL1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIE1lbnUucHJvdG90eXBlLkRyYXcgPSBmdW5jdGlvbiAoZGVsdGEpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKGlucHV0LmlucHV0UHJlc3NlZCh0aGlzLmluY3JlbWVudFNlbGVjdGlvbklucHV0KSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiArPSAxICogdGhpcy5zZWxlY3RTcGVlZDtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkT3B0aW9uID49IHRoaXMub3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuU2VsZWN0ZWQoKS5vbklucHV0KHRoaXMsIHRoaXMuU2VsZWN0ZWQoKSwgTWVudUlucHV0VHlwZS5JbmNyZW1lbnRQcmltYXJ5KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5wdXQuaW5wdXRQcmVzc2VkKHRoaXMuZGVjcmVtZW50U2VsZWN0aW9uSW5wdXQpKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uICs9IC0xICogdGhpcy5zZWxlY3RTcGVlZDtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkT3B0aW9uIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gdGhpcy5vcHRpb25zLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLlNlbGVjdGVkKCkub25JbnB1dCh0aGlzLCB0aGlzLlNlbGVjdGVkKCksIE1lbnVJbnB1dFR5cGUuRGVjcmVtZW50UHJpbWFyeSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlucHV0LmlucHV0UHJlc3NlZCh0aGlzLmFjdGlvbklucHV0KSAmJiB0aGlzLlNlbGVjdGVkKCkub25JbnB1dCkge1xuICAgICAgICAgICAgdGhpcy5TZWxlY3RlZCgpLm9uSW5wdXQodGhpcywgdGhpcy5TZWxlY3RlZCgpLCBNZW51SW5wdXRUeXBlLlNlbGVjdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlucHV0LmlucHV0UHJlc3NlZCh0aGlzLmNhbmNlbElucHV0KSAmJiB0aGlzLlNlbGVjdGVkKCkub25JbnB1dCkge1xuICAgICAgICAgICAgdGhpcy5TZWxlY3RlZCgpLm9uSW5wdXQodGhpcywgdGhpcy5TZWxlY3RlZCgpLCBNZW51SW5wdXRUeXBlLkNhbmNlbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlucHV0LmlucHV0UHJlc3NlZCh0aGlzLmluY3JlbWVudFNlY29uZGFyeUlucHV0KSAmJiB0aGlzLlNlbGVjdGVkKCkub25JbnB1dCkge1xuICAgICAgICAgICAgdGhpcy5TZWxlY3RlZCgpLm9uSW5wdXQodGhpcywgdGhpcy5TZWxlY3RlZCgpLCBNZW51SW5wdXRUeXBlLkluY3JlbWVudFNlY29uZGFyeSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlucHV0LmlucHV0UHJlc3NlZCh0aGlzLmRlY3JlbWVudFNlY29uZGFyeUlucHV0KSAmJiB0aGlzLlNlbGVjdGVkKCkub25JbnB1dCkge1xuICAgICAgICAgICAgdGhpcy5TZWxlY3RlZCgpLm9uSW5wdXQodGhpcywgdGhpcy5TZWxlY3RlZCgpLCBNZW51SW5wdXRUeXBlLkRlY3JlbWVudFNlY29uZGFyeSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKG9wdGlvbiwgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBjb2xyID0gTWF0aC5mbG9vcihfdGhpcy5zZWxlY3RlZE9wdGlvbikgPT09IGluZGV4ID8gX3RoaXMuc2VsZWN0ZWRDb2xvciA6IF90aGlzLmNvbG9yO1xuICAgICAgICAgICAgZm9udC5kcmF3VGV4dChvcHRpb24ucmVjdC54LCBvcHRpb24ucmVjdC55LCBvcHRpb24udGV4dCwgY29scik7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIE1lbnU7XG59KHNjZW5lXzEuZGVmYXVsdCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gTWVudTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkxheW91dE1lbnUgPSBleHBvcnRzLkxheW91dERpcmVjdGlvbiA9IHZvaWQgMDtcbnZhciByZWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcmVjdFwiKSk7XG52YXIgZm9udHMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vZm9udFwiKSk7XG52YXIgbWVudV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21lbnVcIikpO1xudmFyIExheW91dERpcmVjdGlvbjtcbihmdW5jdGlvbiAoTGF5b3V0RGlyZWN0aW9uKSB7XG4gICAgTGF5b3V0RGlyZWN0aW9uW0xheW91dERpcmVjdGlvbltcIlRvcERvd25cIl0gPSAwXSA9IFwiVG9wRG93blwiO1xuICAgIExheW91dERpcmVjdGlvbltMYXlvdXREaXJlY3Rpb25bXCJMZWZ0VG9SaWdodFwiXSA9IDFdID0gXCJMZWZ0VG9SaWdodFwiO1xufSkoTGF5b3V0RGlyZWN0aW9uIHx8IChleHBvcnRzLkxheW91dERpcmVjdGlvbiA9IExheW91dERpcmVjdGlvbiA9IHt9KSk7XG4vKipcbiAqIFRha2UgYSBsaXN0IG9mIHN0cmluZ3MgYW5kIGNyZWF0ZSBhIG1lbnUgd2l0aCB0aGUgb3B0aW9ucyBhdXRvbWF0aWNhbGx5IGxhaWQgb3V0LlxuICogQHBhcmFtIG9wdGlvbnNcbiAqIEBwYXJhbSBkaXJlY3Rpb25cbiAqIEBwYXJhbSBtYXJnaW5cbiAqIEBwYXJhbSBzdGFydFhcbiAqIEBwYXJhbSBzdGFydFlcbiAqIEByZXR1cm5zXG4gKi9cbmZ1bmN0aW9uIExheW91dE1lbnUoaWQsIG9wdGlvbnMsIGRpcmVjdGlvbiwgbWFyZ2luLCBzdGFydFgsIHN0YXJ0WSkge1xuICAgIHZhciBtZW51T3B0aW9ucyA9IFtdO1xuICAgIHZhciBkeCA9IHN0YXJ0WDtcbiAgICB2YXIgZHkgPSBzdGFydFk7XG4gICAgb3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgdmFyIHcgPSBmb250cy50ZXh0V2lkdGgodmFsdWUpO1xuICAgICAgICB2YXIgaCA9IGZvbnRzLnRleHRIZWlnaHQodmFsdWUpO1xuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBMYXlvdXREaXJlY3Rpb24uVG9wRG93bikge1xuICAgICAgICAgICAgZHkgKz0gaCArIG1hcmdpbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT09IExheW91dERpcmVjdGlvbi5MZWZ0VG9SaWdodCkge1xuICAgICAgICAgICAgZHggKz0gdyArIG1hcmdpbjtcbiAgICAgICAgfVxuICAgICAgICBtZW51T3B0aW9ucy5wdXNoKHsgaWQ6IGluZGV4LnRvU3RyaW5nKCksIHRleHQ6IHZhbHVlLCByZWN0OiBuZXcgcmVjdF8xLmRlZmF1bHQoZHgsIGR5LCB3LCBoKSwgb25JbnB1dDogZnVuY3Rpb24gKG1lbnUsIG9wdGlvbiwgZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTWVudSBvcHRpb24gb25JbnB1dCcsIGV2ZW50KTtcbiAgICAgICAgICAgIH0gfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBtZW51XzEuZGVmYXVsdChpZCwgdHJ1ZSwgZGlyZWN0aW9uLCBtZW51T3B0aW9ucyk7XG59XG5leHBvcnRzLkxheW91dE1lbnUgPSBMYXlvdXRNZW51O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLm11c2ljTWFuaWZlc3RGcm9tSlNPTiA9IGV4cG9ydHMuaXNQbGF5aW5nID0gZXhwb3J0cy5nZXRUcmFjayA9IGV4cG9ydHMucGxheVRyYWNrID0gZXhwb3J0cy5sb2FkVHJhY2sgPSBleHBvcnRzLmxvYWRBbGxUcmFja3MgPSB2b2lkIDA7XG52YXIgTXVzaWNEZWZpbml0aW9uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTXVzaWNEZWZpbml0aW9uXCIpKTtcbnZhciBzZnhWb2x1bWUgPSAwLjQ1O1xudmFyIHNmeHMgPSBbXTtcbi8qKlxuICogUG9wdWxhdGUgc2Z4IG1hbmlmZXN0IHdpdGggSlNPTiBsaXN0IG9mIGRlZmluaXRpb25zLiAgTWFuaWZlc3QgaXMgYW4gYXJyeSBvZlxuICogb2JqZWN0cyBtYXRjaGluZyBmb3JtYXQgeyBcIm5hbWVcIjogXCJ0cmFjayBpZCByZWZcIiwgXCJmaWxlbmFtZVwiOiBcIi4vZmlsZV9wYXRoL2ZpbGVuYW1lLmV4dFwiIH0sXG4gKiBAcGFyYW0ganNvbiBKU09OIHJlcHJlc2VudGF0aW9uIG9mIGltYWdlIGRlZmluaXRpb25zLlxuICovXG5mdW5jdGlvbiBtdXNpY01hbmlmZXN0RnJvbUpTT04oanNvbikge1xuICAgIGpzb24uZm9yRWFjaCgoZnVuY3Rpb24gKGRlZikgeyByZXR1cm4gc2Z4cy5wdXNoKE11c2ljRGVmaW5pdGlvbl8xLmRlZmF1bHQuZnJvbUpTT04oZGVmKSk7IH0pKTtcbn1cbmV4cG9ydHMubXVzaWNNYW5pZmVzdEZyb21KU09OID0gbXVzaWNNYW5pZmVzdEZyb21KU09OO1xuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGUgbmFtZWQgdHJhY2sgaXMgY3VycmVudGx5IHBsYXlpbmcuXG4gKiBAcGFyYW0gbmFtZSBNdXNpYyB0cmFjayBhc3NldCBpZC5cbiAqIEByZXR1cm5zXG4gKi9cbmZ1bmN0aW9uIGlzUGxheWluZyhuYW1lKSB7XG4gICAgdmFyIHNmID0gZ2V0VHJhY2sobmFtZSk7XG4gICAgaWYgKHNmKSB7XG4gICAgICAgIHJldHVybiAhc2YucGF1c2VkIHx8IHNmLmN1cnJlbnRUaW1lICYmIHNmLmN1cnJlbnRUaW1lIDwgc2YuZHVyYXRpb247XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydHMuaXNQbGF5aW5nID0gaXNQbGF5aW5nO1xuLyoqXG4gKiBHZXQgdGhlIG5hbWVkIGF1ZGlvIGVsZW1lbnQuXG4gKiBAcGFyYW0gbmFtZSBNdXNpYyB0cmFjayBhc3NldCBpZC5cbiAqIEByZXR1cm5zXG4gKi9cbmZ1bmN0aW9uIGdldFRyYWNrKG5hbWUpIHtcbiAgICB2YXIgc2YgPSBzZnhzLmZpbHRlcihmdW5jdGlvbiAoZikgeyByZXR1cm4gZi5uYW1lID09PSBuYW1lOyB9KTtcbiAgICByZXR1cm4gc2YubGVuZ3RoID4gMCA/IHNmWzBdLnRyYWNrIDogbnVsbDtcbn1cbmV4cG9ydHMuZ2V0VHJhY2sgPSBnZXRUcmFjaztcbi8qKlxuICogUGxheSBzcGVjaWZpZWQgdHJhY2suXG4gKiBAcGFyYW0gbmFtZSBNdXNpYyB0cmFjayBhc3NldCBpZC5cbiAqIEBwYXJhbSBvbkVuZGVkIE9wdGlvbmFsIGNhbGxiYWNrIGZvciB3aGVuIHRoZSB0cmFjayBlbmRzLlxuICogQHJldHVybnNcbiAqL1xuZnVuY3Rpb24gcGxheVRyYWNrKG5hbWUsIG9uRW5kZWQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBzZl8xID0gc2Z4cy5maWx0ZXIoZnVuY3Rpb24gKGYpIHsgcmV0dXJuIGYubmFtZSA9PT0gbmFtZTsgfSk7XG4gICAgICAgICAgICBpZiAoc2ZfMS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1BsYXlpbmcobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2ZfMVswXS50cmFjay52b2x1bWUgPSBzZnhWb2x1bWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbkVuZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZl8xWzBdLnRyYWNrLm9uZW5kZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FbmRlZChzZl8xWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZl8xWzBdLnRyYWNrLm9uZW5kZWQgPSBmdW5jdGlvbiAoKSB7IHJlc29sdmUoKTsgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZl8xWzBdLnRyYWNrLm9uZW5kZWQgPSBmdW5jdGlvbiAoKSB7IHJlc29sdmUoKTsgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZl8xWzBdLnRyYWNrLnBsYXkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNmXzFbMF0udHJhY2suY3VycmVudFRpbWUgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHBsYXlpbmcgc2Z4JywgbmFtZSwgZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMucGxheVRyYWNrID0gcGxheVRyYWNrO1xuLyoqXG4gKiBMb2FkIHRyYWNrIGZyb20gbG9jYXRpb24uXG4gKiBAcGFyYW0gZmlsZW5hbWUgUGF0aCB0byBhdWRpbyBhc3NldC5cbiAqIEByZXR1cm5zXG4gKi9cbmZ1bmN0aW9uIGxvYWRUcmFjayhmaWxlbmFtZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciBzZiA9IG5ldyBBdWRpbyhmaWxlbmFtZSk7XG4gICAgICAgIHNmLm9uY2FucGxheXRocm91Z2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXNvbHZlKHNmKTtcbiAgICAgICAgfTtcbiAgICAgICAgc2Yub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgZmlsZSBcIi5jb25jYXQoZmlsZW5hbWUsIFwiOlwiKSwgZSk7XG4gICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgIH07XG4gICAgfSk7XG59XG5leHBvcnRzLmxvYWRUcmFjayA9IGxvYWRUcmFjaztcbi8qKlxuICogTG9hZCBhbGwgdHJhY2tzIHRoYXQgaGF2ZSBiZWVuIGxvYWRlZCBpbnRvIHRoZSBtYW5pZmVzdC5cbiAqIEByZXR1cm5zXG4gKi9cbmZ1bmN0aW9uIGxvYWRBbGxUcmFja3MoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlQWxsLCByZWplY3RBbGwpIHtcbiAgICAgICAgdmFyIHByb21pc2VzID0gW107XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIHZhciBzZnggPSBzZnhzW2ldO1xuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXR1cm4gbG9hZFRyYWNrKHNmeC5maWxlbmFtZSkudGhlbihmdW5jdGlvbiAocikge1xuICAgICAgICAgICAgICAgIHNmeC50cmFjayA9IHI7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGxvYWQnLCBzZnguZmlsZW5hbWUsIGUpO1xuICAgICAgICAgICAgICAgIHJlamVjdEFsbCgnRmFpbGVkIHRvIGxvYWQnICsgc2Z4LmZpbGVuYW1lICsgJzonICsgSlNPTi5zdHJpbmdpZnkoZSkpO1xuICAgICAgICAgICAgfSk7IH0pKTtcbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBzZnhzKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbFNldHRsZWQocHJvbWlzZXMpO1xuICAgIH0pO1xufVxuZXhwb3J0cy5sb2FkQWxsVHJhY2tzID0gbG9hZEFsbFRyYWNrcztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBBIHJlY3RhbmdsZS5cbiAqL1xudmFyIFJlY3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVjdCh4LCB5LCB3LCBoKSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMudyA9IHc7XG4gICAgICAgIHRoaXMuaCA9IGg7XG4gICAgfVxuICAgIHJldHVybiBSZWN0O1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFJlY3Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogU2NlbmUgY2xhc3NlcyBrbm93IGhvdyB0byBkcmF3IHRoZW1zZWx2ZXMgd2l0aCBhbmltYXRpb25GcmFtZSBhbmQgYSBoYW5kbGVJbnB1dCBjYWxsYmFja1xuICogZm9yIGtleWJvYXJkL2dhbWVwYWQgY29udHJvbHMuXG4gKi9cbnZhciBTY2VuZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgc2NlbmUgb2JqZWN0LlxuICAgICAqIEBwYXJhbSBpZCBTY2VuZSBuYW1lLCB1bmlxdWUgaWRlbnRpZmllciB0byBmZXRjaCB3aXRoLlxuICAgICAqIEBwYXJhbSBhbmltYXRpb25GcmFtZSBTY2VuZSdzIHJlbmRlci91cGRhdGUgY2FsbGJhY2suXG4gICAgICogQHBhcmFtIGFjdGl2ZSBXaGV0aGVyIG9yIG5vdCB0aGUgc2NlbmUgaXMgaW5pdGlhbGl6ZWQgYWN0aXZlLlxuICAgICAqIEBwYXJhbSBvbkFjdGl2YXRlIENhbGwgdGhpcyBmdW5jdGlvbiB3aGVuIHRoZSBzY2VuZSBhY3RpdmF0ZXMuXG4gICAgICogQHBhcmFtIG9uRGVhY3RpdmF0ZSBDYWxsIHRoaXMgZnVuY3Rpb24gd2hlbiB0aGUgc2NlbmUgZGVhY3RpdmF0ZXMuXG4gICAgICogQHBhcmFtIGhhbmRsZUlucHV0IFRoaXMgZnVuY3Rpb24gZ2V0cyBjYWxsZWQgd2hlbiB0aGUgc2NlbmUgcmVjZWl2ZXMgaW5wdXQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gU2NlbmUoaWQsIGFuaW1hdGlvbkZyYW1lLCBhY3RpdmUsIG9uQWN0aXZhdGUsIG9uRGVhY3RpdmF0ZSwgaGFuZGxlSW5wdXQpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkZyYW1lID0gYW5pbWF0aW9uRnJhbWU7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gYWN0aXZlO1xuICAgICAgICB0aGlzLm9uQWN0aXZhdGUgPSBvbkFjdGl2YXRlO1xuICAgICAgICB0aGlzLm9uRGVhY3RpdmF0ZSA9IG9uRGVhY3RpdmF0ZTtcbiAgICAgICAgdGhpcy5oYW5kbGVJbnB1dCA9IGhhbmRsZUlucHV0O1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSAwO1xuICAgIH1cbiAgICByZXR1cm4gU2NlbmU7XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gU2NlbmU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVBY3RpdmF0ZVNjZW5lID0gZXhwb3J0cy5hY3RpdmF0ZVNjZW5lID0gZXhwb3J0cy5hZGRTY2VuZSA9IGV4cG9ydHMuaGFuZGxlSW5wdXQgPSBleHBvcnRzLmhhbmRsZUFuaW1hdGlvbkZyYW1lID0gdm9pZCAwO1xudmFyIHJldHJvbGliXzEgPSByZXF1aXJlKFwiLi4vcmV0cm9saWJcIik7XG52YXIgc3RhcnQgPSBudWxsO1xudmFyIHNjZW5lcyA9IFtdO1xuZnVuY3Rpb24gYWRkU2NlbmUoc2NlbmUpIHtcbiAgICBzY2VuZXMucHVzaChzY2VuZSk7XG4gICAgcmV0dXJuIHNjZW5lO1xufVxuZXhwb3J0cy5hZGRTY2VuZSA9IGFkZFNjZW5lO1xuZnVuY3Rpb24gYWN0aXZhdGVTY2VuZShpZCkge1xuICAgIHZhciBpbmRleCA9IHNjZW5lcy5maW5kSW5kZXgoZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMuaWQgPT09IGlkOyB9KTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICBzY2VuZXNbaW5kZXhdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHNjZW5lc1tpbmRleF0ub25BY3RpdmF0ZSgpO1xuICAgIH1cbn1cbmV4cG9ydHMuYWN0aXZhdGVTY2VuZSA9IGFjdGl2YXRlU2NlbmU7XG5mdW5jdGlvbiBkZUFjdGl2YXRlU2NlbmUoaWQpIHtcbiAgICB2YXIgaW5kZXggPSBzY2VuZXMuZmluZEluZGV4KGZ1bmN0aW9uIChzKSB7IHJldHVybiBzLmlkID09PSBpZDsgfSk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgc2NlbmVzW2luZGV4XS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgc2NlbmVzW2luZGV4XS5vbkRlYWN0aXZhdGUoKTtcbiAgICB9XG59XG5leHBvcnRzLmRlQWN0aXZhdGVTY2VuZSA9IGRlQWN0aXZhdGVTY2VuZTtcbmZ1bmN0aW9uIGhhbmRsZUlucHV0KGlucHV0LCBhbXQsIHJlbGVhc2VkKSB7XG4gICAgc2NlbmVzLmZpbHRlcihmdW5jdGlvbiAoZikgeyByZXR1cm4gZi5hY3RpdmU7IH0pLmZvckVhY2goZnVuY3Rpb24gKHNjZW5lKSB7XG4gICAgICAgIHNjZW5lLmhhbmRsZUlucHV0KGlucHV0LCBhbXQsIHJlbGVhc2VkKTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuaGFuZGxlSW5wdXQgPSBoYW5kbGVJbnB1dDtcbmZ1bmN0aW9uIGhhbmRsZUFuaW1hdGlvbkZyYW1lKHRpbWVTdGFtcCkge1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaGFuZGxlQW5pbWF0aW9uRnJhbWUpO1xuICAgIGlmIChzdGFydCA9PT0gbnVsbCkge1xuICAgICAgICBzdGFydCA9IHRpbWVTdGFtcCAtIDE2OyAvLyBJZiB3ZSBkb24ndCBkbyB0aGlzLCB0aGUgZmlyc3QgZnJhbWUgdGltZXN0YW1wIGlzIHRvbyBsb25nIHNvIHdlIGZha2UgNjBmcHMgYnkgc3VidHJhY3RpbmcgMTYuXG4gICAgICAgIC8vIENvdWxkIHByb2JhYmx5IGJlIGltcHJvdmVkLlxuICAgIH1cbiAgICB2YXIgZGVsdGEgPSB0aW1lU3RhbXAgLSBzdGFydDtcbiAgICBzdGFydCA9IHRpbWVTdGFtcDtcbiAgICAvLyBDaGVjayBmb3IgZ2FtZXBhZCB1cGRhdGVzLCBmaXJlIG9mZiBcbiAgICByZXRyb2xpYl8xLmlucHV0LmdhbWVwYWRzRGlkVXBkYXRlKCk7XG4gICAgLy8gUnVuIGFuaW1hdGlvbkZyYW1lIGZvciBlYWNoIGFjdGl2ZSBzY2VuZS5cbiAgICBzY2VuZXMuZmlsdGVyKGZ1bmN0aW9uIChmKSB7IHJldHVybiBmLmFjdGl2ZTsgfSkuZm9yRWFjaChmdW5jdGlvbiAoc2NlbmUpIHtcbiAgICAgICAgc2NlbmUuZWxhcHNlZCArPSBkZWx0YTtcbiAgICAgICAgc2NlbmUuYW5pbWF0aW9uRnJhbWUoZGVsdGEpO1xuICAgIH0pO1xufVxuZXhwb3J0cy5oYW5kbGVBbmltYXRpb25GcmFtZSA9IGhhbmRsZUFuaW1hdGlvbkZyYW1lO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnNmeE1hbmlmZXN0RnJvbUpTT04gPSBleHBvcnRzLmlzUGxheWluZyA9IGV4cG9ydHMuZ2V0U2Z4ID0gZXhwb3J0cy5wbGF5U2Z4ID0gZXhwb3J0cy5sb2FkU2Z4ID0gZXhwb3J0cy5sb2FkQWxsU2Z4ID0gdm9pZCAwO1xudmFyIFNmeERlZmluaXRpb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9TZnhEZWZpbml0aW9uXCIpKTtcbnZhciBzZnhWb2x1bWUgPSAwLjQ1O1xudmFyIHNmeHMgPSBbXTtcbi8qKlxuICogUG9wdWxhdGUgc2Z4IG1hbmlmZXN0IHdpdGggSlNPTiBsaXN0IG9mIGRlZmluaXRpb25zLiBNYW5pZmVzdCBpcyBhbiBhcnJ5IG9mXG4gKiBvYmplY3RzIG1hdGNoaW5nIGZvcm1hdCB7IFwibmFtZVwiOiBcInNmeCBpZCByZWZcIiwgXCJmaWxlbmFtZVwiOiBcIi4vZmlsZV9wYXRoL2ZpbGVuYW1lLmV4dFwiIH0sXG4gKiBAcGFyYW0ganNvbiBKU09OIHJlcHJlc2VudGF0aW9uIG9mIGltYWdlIGRlZmluaXRpb25zLlxuICovXG5mdW5jdGlvbiBzZnhNYW5pZmVzdEZyb21KU09OKGpzb24pIHtcbiAgICBqc29uLmZvckVhY2goKGZ1bmN0aW9uIChkZWYpIHsgcmV0dXJuIHNmeHMucHVzaChTZnhEZWZpbml0aW9uXzEuZGVmYXVsdC5mcm9tSlNPTihkZWYpKTsgfSkpO1xufVxuZXhwb3J0cy5zZnhNYW5pZmVzdEZyb21KU09OID0gc2Z4TWFuaWZlc3RGcm9tSlNPTjtcbmZ1bmN0aW9uIGlzUGxheWluZyhuYW1lKSB7XG4gICAgdmFyIHNmID0gZ2V0U2Z4KG5hbWUpO1xuICAgIGlmIChzZikge1xuICAgICAgICByZXR1cm4gIXNmLnBhdXNlZCB8fCBzZi5jdXJyZW50VGltZSAmJiBzZi5jdXJyZW50VGltZSA8IHNmLmR1cmF0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnRzLmlzUGxheWluZyA9IGlzUGxheWluZztcbmZ1bmN0aW9uIGdldFNmeChuYW1lKSB7XG4gICAgdmFyIHNmID0gc2Z4cy5maWx0ZXIoZnVuY3Rpb24gKGYpIHsgcmV0dXJuIGYubmFtZSA9PT0gbmFtZTsgfSk7XG4gICAgcmV0dXJuIHNmLmxlbmd0aCA+IDAgPyBzZlswXS5zZnggOiBudWxsO1xufVxuZXhwb3J0cy5nZXRTZnggPSBnZXRTZng7XG5mdW5jdGlvbiBwbGF5U2Z4KG5hbWUsIG9uRW5kZWQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBzZl8xID0gc2Z4cy5maWx0ZXIoZnVuY3Rpb24gKGYpIHsgcmV0dXJuIGYubmFtZSA9PT0gbmFtZTsgfSk7XG4gICAgICAgICAgICBpZiAoc2ZfMS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1BsYXlpbmcobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2ZfMVswXS5zZngudm9sdW1lID0gc2Z4Vm9sdW1lO1xuICAgICAgICAgICAgICAgICAgICBpZiAob25FbmRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2ZfMVswXS5zZngub25lbmRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkVuZGVkKHNmXzFbMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNmXzFbMF0uc2Z4Lm9uZW5kZWQgPSBmdW5jdGlvbiAoKSB7IHJlc29sdmUoKTsgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZl8xWzBdLnNmeC5vbmVuZGVkID0gZnVuY3Rpb24gKCkgeyByZXNvbHZlKCk7IH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2ZfMVswXS5zZngucGxheSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2ZfMVswXS5zZnguY3VycmVudFRpbWUgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHBsYXlpbmcgc2Z4JywgbmFtZSwgZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMucGxheVNmeCA9IHBsYXlTZng7XG5mdW5jdGlvbiBsb2FkU2Z4KGZpbGVuYW1lKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIHNmID0gbmV3IEF1ZGlvKGZpbGVuYW1lKTtcbiAgICAgICAgc2Yub25jYW5wbGF5dGhyb3VnaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJlc29sdmUoc2YpO1xuICAgICAgICB9O1xuICAgICAgICBzZi5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBmaWxlIFwiLmNvbmNhdChmaWxlbmFtZSwgXCI6XCIpLCBlKTtcbiAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cbmV4cG9ydHMubG9hZFNmeCA9IGxvYWRTZng7XG5mdW5jdGlvbiBsb2FkQWxsU2Z4KCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZUFsbCwgcmVqZWN0QWxsKSB7XG4gICAgICAgIHZhciBwcm9taXNlcyA9IFtdO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICB2YXIgc2Z4ID0gc2Z4c1tpXTtcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2gobmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmV0dXJuIGxvYWRTZngoc2Z4LmZpbGVuYW1lKS50aGVuKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICAgICAgc2Z4LnNmeCA9IHI7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGxvYWQnLCBzZnguZmlsZW5hbWUsIGUpO1xuICAgICAgICAgICAgICAgIHJlamVjdEFsbCgnRmFpbGVkIHRvIGxvYWQnICsgc2Z4LmZpbGVuYW1lICsgJzonICsgSlNPTi5zdHJpbmdpZnkoZSkpO1xuICAgICAgICAgICAgfSk7IH0pKTtcbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBzZnhzKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbFNldHRsZWQocHJvbWlzZXMpO1xuICAgIH0pO1xufVxuZXhwb3J0cy5sb2FkQWxsU2Z4ID0gbG9hZEFsbFNmeDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNmeERlZmluaXRpb24gPSBleHBvcnRzLk11c2ljRGVmaW5pdGlvbiA9IGV4cG9ydHMuSW1hZ2VEZWZpbml0aW9uID0gZXhwb3J0cy5HbHlwaCA9IGV4cG9ydHMuRm9udERhdGEgPSBleHBvcnRzLlJlY3QgPSBleHBvcnRzLk1lbnUgPSBleHBvcnRzLlNjZW5lID0gZXhwb3J0cy5jYW52YXNIZWlnaHQgPSBleHBvcnRzLmNhbnZhc1dpZHRoID0gZXhwb3J0cy5nYW1lQ2FudmFzID0gZXhwb3J0cy5zZXRDYW52YXNCYWNrZ3JvdW5kID0gZXhwb3J0cy5pbml0aWFsaXplID0gZXhwb3J0cy5tZW51cyA9IGV4cG9ydHMuaW5wdXQgPSBleHBvcnRzLm11c2ljID0gZXhwb3J0cy5zZnggPSBleHBvcnRzLnNjZW5lcyA9IGV4cG9ydHMuZm9udCA9IGV4cG9ydHMuaW1hZ2VzID0gdm9pZCAwO1xudmFyIGZvbnRfMSA9IHJlcXVpcmUoXCIuL21vZHVsZXMvZm9udFwiKTtcbmV4cG9ydHMuaW1hZ2VzID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL21vZHVsZXMvaW1hZ2VzXCIpKTtcbmV4cG9ydHMuZm9udCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9tb2R1bGVzL2ZvbnRcIikpO1xuZXhwb3J0cy5zY2VuZXMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vbW9kdWxlcy9zY2VuZXNcIikpO1xuZXhwb3J0cy5zZnggPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vbW9kdWxlcy9zZnhcIikpO1xuZXhwb3J0cy5tdXNpYyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9tb2R1bGVzL211c2ljXCIpKTtcbmV4cG9ydHMuaW5wdXQgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vbW9kdWxlcy9pbnB1dFwiKSk7XG5leHBvcnRzLm1lbnVzID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL21vZHVsZXMvbWVudXNcIikpO1xudmFyIHJlY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tb2R1bGVzL3JlY3RcIikpO1xuZXhwb3J0cy5SZWN0ID0gcmVjdF8xLmRlZmF1bHQ7XG52YXIgaW5wdXQgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vbW9kdWxlcy9pbnB1dFwiKSk7XG52YXIgc2NlbmVzID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL21vZHVsZXMvc2NlbmVzXCIpKTtcbnZhciBzY2VuZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21vZHVsZXMvc2NlbmVcIikpO1xuZXhwb3J0cy5TY2VuZSA9IHNjZW5lXzEuZGVmYXVsdDtcbnZhciBtZW51XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbW9kdWxlcy9tZW51XCIpKTtcbmV4cG9ydHMuTWVudSA9IG1lbnVfMS5kZWZhdWx0O1xudmFyIEZvbnREYXRhXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbW9kdWxlcy9Gb250RGF0YVwiKSk7XG5leHBvcnRzLkZvbnREYXRhID0gRm9udERhdGFfMS5kZWZhdWx0O1xudmFyIEdseXBoXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbW9kdWxlcy9HbHlwaFwiKSk7XG5leHBvcnRzLkdseXBoID0gR2x5cGhfMS5kZWZhdWx0O1xudmFyIEltYWdlRGVmaW5pdGlvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21vZHVsZXMvSW1hZ2VEZWZpbml0aW9uXCIpKTtcbmV4cG9ydHMuSW1hZ2VEZWZpbml0aW9uID0gSW1hZ2VEZWZpbml0aW9uXzEuZGVmYXVsdDtcbnZhciBNdXNpY0RlZmluaXRpb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tb2R1bGVzL011c2ljRGVmaW5pdGlvblwiKSk7XG5leHBvcnRzLk11c2ljRGVmaW5pdGlvbiA9IE11c2ljRGVmaW5pdGlvbl8xLmRlZmF1bHQ7XG52YXIgU2Z4RGVmaW5pdGlvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21vZHVsZXMvU2Z4RGVmaW5pdGlvblwiKSk7XG5leHBvcnRzLlNmeERlZmluaXRpb24gPSBTZnhEZWZpbml0aW9uXzEuZGVmYXVsdDtcbnZhciBpbWFnZXNfMSA9IHJlcXVpcmUoXCIuL21vZHVsZXMvaW1hZ2VzXCIpO1xuLyoqXG4gKiBDYW52YXMgZWxlbWVudCB0byBkcmF3IG9uLlxuICovXG52YXIgZ2FtZUNhbnZhcyA9IG51bGw7XG5leHBvcnRzLmdhbWVDYW52YXMgPSBnYW1lQ2FudmFzO1xuLyoqXG4gKiBDYW52YXMgd2lkdGggKHJlc29sdXRpb24geCkuXG4gKi9cbnZhciBjYW52YXNXaWR0aCA9IDA7XG5leHBvcnRzLmNhbnZhc1dpZHRoID0gY2FudmFzV2lkdGg7XG4vKipcbiAqIENhbnZhcyBoZWlnaHQgKHJlc29sdXRpb24geSkuXG4gKi9cbnZhciBjYW52YXNIZWlnaHQgPSAwO1xuZXhwb3J0cy5jYW52YXNIZWlnaHQgPSBjYW52YXNIZWlnaHQ7XG4vKipcbiAqIENTUyBmb3IgY2FudmFzIGJhY2tncm91bmQuXG4gKi9cbnZhciBjYW52YXNCYWNrZ3JvdW5kID0gJ3RyYW5zcGFyZW50JztcbmZ1bmN0aW9uIHJlc2l6ZSgpIHtcbiAgICB2YXIgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB2YXIgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGdhbWVDYW52YXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgZ2FtZUNhbnZhcy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgZ2FtZUNhbnZhcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcbiAgICBnYW1lQ2FudmFzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG4gICAgZ2FtZUNhbnZhcy5zdHlsZS50b3AgPSAnMHB4JztcbiAgICBnYW1lQ2FudmFzLnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICBnYW1lQ2FudmFzLnN0eWxlLmJhY2tncm91bmQgPSBjYW52YXNCYWNrZ3JvdW5kO1xuICAgIGdhbWVDYW52YXMuc3R5bGUuaW1hZ2VSZW5kZXJpbmcgPSAncGl4ZWxhdGVkJztcbn1cbmZ1bmN0aW9uIHByZXBlbmRDYW52YXMoY2FudmFzSWQsIHdpZHRoLCBoZWlnaHQsIGF1dG9SZXNpemUpIHtcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY2FudmFzLmlkID0gY2FudmFzSWQ7XG4gICAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKGNhbnZhcyk7XG4gICAgZXhwb3J0cy5nYW1lQ2FudmFzID0gZ2FtZUNhbnZhcyA9IGNhbnZhcztcbiAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIGV4cG9ydHMuY2FudmFzV2lkdGggPSBjYW52YXNXaWR0aCA9IHdpZHRoO1xuICAgIGV4cG9ydHMuY2FudmFzSGVpZ2h0ID0gY2FudmFzSGVpZ2h0ID0gaGVpZ2h0O1xuICAgIGlmIChhdXRvUmVzaXplKSB7XG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc2l6ZSgpOyB9KTtcbiAgICAgICAgcmVzaXplKCk7XG4gICAgfVxuICAgIHJldHVybiBjYW52YXM7XG59XG4vKipcbiAqIFNldCB0aGUgY2FudmFzIGVsZW1lbnQncyBiYWNrZ3JvdW5kIHZhbHVlLlxuICogQHBhcmFtIGNvbG9yIENTUyBiYWNrZ3JvdW5kIGZvciBjYW52YXMgZWxlbWVudC5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FudmFzQmFja2dyb3VuZChjb2xvcikge1xuICAgIGNhbnZhc0JhY2tncm91bmQgPSBjb2xvcjtcbiAgICBpZiAoZ2FtZUNhbnZhcykge1xuICAgICAgICBnYW1lQ2FudmFzLnN0eWxlLmJhY2tncm91bmQgPSBjYW52YXNCYWNrZ3JvdW5kO1xuICAgIH1cbn1cbmV4cG9ydHMuc2V0Q2FudmFzQmFja2dyb3VuZCA9IHNldENhbnZhc0JhY2tncm91bmQ7XG4vKipcbiAqIEluaXRpYWxpemUgdGhlIHJldHJvbGliIGVuZ2luZS5cbiAqIEBwYXJhbSBjYW52YXNJZCBJZCBhdHRyaWJ1dGUgb2YgZXhpc3RpbmcgY2FudmFzLCBvciBpZCBhdHRyaWJ1dGUgdG8gZ2l2ZSB0byBjcmVhdGVkIGNhbnZhcyBlbGVtZW50LlxuICogQHBhcmFtIHdpZHRoIFggcmVzb2x1dGlvbi5cbiAqIEBwYXJhbSBoZWlnaHQgWSByZXNvbHV0aW9uLlxuICogQHBhcmFtIGJ1aWxkQ2FudmFzIFdoZXRoZXIgb3Igbm90IHRvIGNyZWF0ZSBhIGNhbnZhcyBlbGVtZW50LlxuICogQHBhcmFtIGF1dG9SZXNpemUgV2hldGhlciBvciBub3QgdG8gYXV0b3Jlc2l6ZSB0aGUgY2FudmFzIHRvIHRoZSB3aW5kb3cuXG4gKi9cbmZ1bmN0aW9uIGluaXRpYWxpemUoY2FudmFzSWQsIHdpZHRoLCBoZWlnaHQsIGJ1aWxkQ2FudmFzLCBhdXRvUmVzaXplKSB7XG4gICAgd2lkdGggPSB3aWR0aCA/IHdpZHRoIDogMjU2O1xuICAgIGhlaWdodCA9IGhlaWdodCA/IGhlaWdodCA6IDI1NjtcbiAgICBjYW52YXNJZCA9IGNhbnZhc0lkID8gY2FudmFzSWQgOiAnZ2FtZWNhbnZhcyc7XG4gICAgaWYgKGdhbWVDYW52YXMgPT09IG51bGwgJiYgYnVpbGRDYW52YXMpIHtcbiAgICAgICAgZXhwb3J0cy5nYW1lQ2FudmFzID0gZ2FtZUNhbnZhcyA9IHByZXBlbmRDYW52YXMoY2FudmFzSWQsIHdpZHRoLCBoZWlnaHQsIGF1dG9SZXNpemUpO1xuICAgIH1cbiAgICBlbHNlIGlmIChnYW1lQ2FudmFzID09PSBudWxsKSB7XG4gICAgICAgIGV4cG9ydHMuZ2FtZUNhbnZhcyA9IGdhbWVDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYW52YXNJZCk7XG4gICAgfVxuICAgICgwLCBpbWFnZXNfMS5zZXRDb250ZXh0KShnYW1lQ2FudmFzLmdldENvbnRleHQoJzJkJykpO1xuICAgICgwLCBmb250XzEubG9hZERlZmF1bHRGb250cykoKTtcbiAgICAvLyBSZWdpc3RlciB0aGUgc2NlbmUgY29udHJvbGxlcidzIGFuaW1hdGlvbiBmcmFtZSBmdW5jdGlvbiB3aXRoIHRoZSB3aW5kb3cuXG4gICAgLy8gTm93IGFueSBzY2VuZSBvYmplY3RzIHlvdSBhZGQgd2l0aCBzY2VuZXMuYWRkU2NlbmUoKSB3aWxsIGJlIGNhbGxlZCBhcyBsb25nXG4gICAgLy8gYXMgdGhleSBhcmUgYWN0aXZlIHN0YXR1cy5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNjZW5lcy5oYW5kbGVBbmltYXRpb25GcmFtZSk7XG4gICAgaW5wdXQuaW5pdGlhbGl6ZSgpO1xufVxuZXhwb3J0cy5pbml0aWFsaXplID0gaW5pdGlhbGl6ZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9yZXRyb2xpYi50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==