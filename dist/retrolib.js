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
exports.DrawText = exports.TextWidth = exports.TextHeight = exports.CodepageAndBitmaptoJSON = exports.ImageToBase64 = exports.HexToRgba = exports.RgbaToHex = exports.ColorLerp = exports.Fonts = exports.LoadDefaultFonts = exports.LoadFromJSON = void 0;
var FontData_1 = __importDefault(__webpack_require__(/*! ./FontData */ "./src/modules/FontData.ts"));
var default_json_1 = __importDefault(__webpack_require__(/*! ./fonts/default.json */ "./src/modules/fonts/default.json"));
var codepage_1 = __importDefault(__webpack_require__(/*! ./codepage */ "./src/modules/codepage.ts"));
var images_1 = __webpack_require__(/*! ./images */ "./src/modules/images.ts");
var fontCanvas = null;
var fonts = [];
function LoadDefaultFonts() {
    var loadedFont = LoadFromJSON(default_json_1.default);
    if (loadedFont) {
        fonts.push(loadedFont);
    }
}
exports.LoadDefaultFonts = LoadDefaultFonts;
function LoadFromJSON(fontJson) {
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
        r: Math.floor(color1.r + (color2.r - color1.r) * t),
        g: Math.floor(color1.g + (color2.g - color1.g) * t),
        b: Math.floor(color1.b + (color2.b - color1.b) * t),
        a: color1.a
    };
}
exports.ColorLerp = ColorLerp;
function ImageToBase64(img, outputFormat) {
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
exports.ImageToBase64 = ImageToBase64;
/**
 * Get base64 image data and build a precompiled font JSON object.
 * @param imageName
 * @param max_y
 * @param cw Character width.
 * @param ch Character height.
 * @returns
 */
function CodepageAndBitmaptoJSON(imageName, max_y, cw, ch) {
    return new Promise(function (resolve, reject) {
        try {
            var sx = 0; // Source X
            var sy = 0; // Source Y
            cw = cw ? cw : 9; // Character Width
            ch = ch ? ch : 16; // Character Height
            var codepage = [];
            var imagedata = null;
            var image = new Image();
            imagedata = ImageToBase64((0, images_1.getImage)(imageName));
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
exports.CodepageAndBitmaptoJSON = CodepageAndBitmaptoJSON;
function TextHeight(text, font) {
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
exports.TextHeight = TextHeight;
function TextWidth(text, font) {
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
exports.TextWidth = TextWidth;
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
 */
function DrawText(ctx, x, y, text, color, font /*, effects: object*/) {
    if (typeof color === 'string') {
        color = HexToRgba(color);
    }
    if (text.length === 0) {
        return { x: x, y: y, w: 0, h: 0 };
    }
    //effects = effects ? effects : {}
    if (!font && fonts.length > 0) {
        font = fonts[0];
    }
    else if (!font || fonts.length === 0) {
        throw new Error('Font parameter empty and default fonts are not loaded.');
    }
    if (!color) {
        color = HexToRgba('#ffffffff');
    }
    if (!font || !font.codepage || !font.imagedata || !font.image || !font.cwidth || !font.cheight) {
        throw new Error('Invalid font or font not loaded.');
    }
    var textwidth = TextWidth(text, font);
    var textheight = TextHeight(text, font);
    if (!fontCanvas) {
        fontCanvas = document.createElement('canvas');
        fontCanvas.id = 'fontCanvas';
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
                var pixel = GetPixelAtRgba(pixels, px, py, textwidth);
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
                    SetPixelAtRgba(pixels, color, px, py, textwidth);
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
exports.DrawText = DrawText;
function SetPixelAtRgba(pixels, color, x, y, pixelswidth) {
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
function GetPixelAtRgba(pixels, x, y, pixelswidth) {
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
exports.canvasHeight = exports.canvasWidth = exports.gameCanvas = exports.setCanvasBackground = exports.initialize = exports.music = exports.sfx = exports.scenes = exports.font = exports.images = void 0;
var font_1 = __webpack_require__(/*! ./modules/font */ "./src/modules/font.ts");
exports.images = __importStar(__webpack_require__(/*! ./modules/images */ "./src/modules/images.ts"));
exports.font = __importStar(__webpack_require__(/*! ./modules/font */ "./src/modules/font.ts"));
exports.scenes = __importStar(__webpack_require__(/*! ./modules/scenes */ "./src/modules/scenes.ts"));
exports.sfx = __importStar(__webpack_require__(/*! ./modules/sfx */ "./src/modules/sfx.ts"));
exports.music = __importStar(__webpack_require__(/*! ./modules/music */ "./src/modules/music.ts"));
// Game Canvas metadata Globals.
var gameCanvas = null;
exports.gameCanvas = gameCanvas;
var canvasWidth = 0;
exports.canvasWidth = canvasWidth;
var canvasHeight = 0;
exports.canvasHeight = canvasHeight;
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
function setCanvasBackground(color) {
    canvasBackground = color;
    if (gameCanvas) {
        gameCanvas.style.background = canvasBackground;
    }
}
exports.setCanvasBackground = setCanvasBackground;
/**
 * Initialize the retrolib engine.
 * @param options
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
    (0, font_1.LoadDefaultFonts)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0cm9saWIuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7QUNWYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxrQkFBZTs7Ozs7Ozs7Ozs7QUNQRjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxrQkFBZTs7Ozs7Ozs7Ozs7QUNWRjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxrQkFBZTs7Ozs7Ozs7Ozs7QUNWRjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxrQkFBZTs7Ozs7Ozs7Ozs7QUNWRjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7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Ozs7Ozs7Ozs7OztVQzFGbEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JldHJvbGliL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9yZXRyb2xpYi8uL3NyYy9tb2R1bGVzL0ZvbnREYXRhLnRzIiwid2VicGFjazovL3JldHJvbGliLy4vc3JjL21vZHVsZXMvSW1hZ2VEZWZpbml0aW9uLnRzIiwid2VicGFjazovL3JldHJvbGliLy4vc3JjL21vZHVsZXMvTXVzaWNEZWZpbml0aW9uLnRzIiwid2VicGFjazovL3JldHJvbGliLy4vc3JjL21vZHVsZXMvU2Z4RGVmaW5pdGlvbi50cyIsIndlYnBhY2s6Ly9yZXRyb2xpYi8uL3NyYy9tb2R1bGVzL2NvZGVwYWdlLnRzIiwid2VicGFjazovL3JldHJvbGliLy4vc3JjL21vZHVsZXMvZm9udC50cyIsIndlYnBhY2s6Ly9yZXRyb2xpYi8uL3NyYy9tb2R1bGVzL2ltYWdlcy50cyIsIndlYnBhY2s6Ly9yZXRyb2xpYi8uL3NyYy9tb2R1bGVzL211c2ljLnRzIiwid2VicGFjazovL3JldHJvbGliLy4vc3JjL21vZHVsZXMvc2NlbmVzLnRzIiwid2VicGFjazovL3JldHJvbGliLy4vc3JjL21vZHVsZXMvc2Z4LnRzIiwid2VicGFjazovL3JldHJvbGliLy4vc3JjL3JldHJvbGliLnRzIiwid2VicGFjazovL3JldHJvbGliL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JldHJvbGliL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmV0cm9saWIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3JldHJvbGliL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJyZXRyb2xpYlwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJyZXRyb2xpYlwiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsICgpID0+IHtcbnJldHVybiAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBGb250RGF0YSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBGb250RGF0YSgpIHtcbiAgICB9XG4gICAgcmV0dXJuIEZvbnREYXRhO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEZvbnREYXRhO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgSW1hZ2VEZWZpbml0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEltYWdlRGVmaW5pdGlvbigpIHtcbiAgICB9XG4gICAgSW1hZ2VEZWZpbml0aW9uLmZyb21KU09OID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEltYWdlRGVmaW5pdGlvbigpLCBqc29uKTtcbiAgICB9O1xuICAgIHJldHVybiBJbWFnZURlZmluaXRpb247XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gSW1hZ2VEZWZpbml0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgTXVzaWNEZWZpbml0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE11c2ljRGVmaW5pdGlvbigpIHtcbiAgICB9XG4gICAgTXVzaWNEZWZpbml0aW9uLmZyb21KU09OID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IE11c2ljRGVmaW5pdGlvbigpLCBqc29uKTtcbiAgICB9O1xuICAgIHJldHVybiBNdXNpY0RlZmluaXRpb247XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gTXVzaWNEZWZpbml0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU2Z4RGVmaW5pdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTZnhEZWZpbml0aW9uKCkge1xuICAgIH1cbiAgICBTZnhEZWZpbml0aW9uLmZyb21KU09OID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IFNmeERlZmluaXRpb24oKSwganNvbik7XG4gICAgfTtcbiAgICByZXR1cm4gU2Z4RGVmaW5pdGlvbjtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBTZnhEZWZpbml0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29kZVBhZ2UgPSBbXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMCxcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAwMCcsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5VTEwgQ0hBUlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxLFxuICAgICAgICBcInN5bWJvbFwiOiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KCdcXHUwMDAxJywgMTYpKSxcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU1RBUlQgT0YgSEVBRElOR1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyLFxuICAgICAgICBcInN5bWJvbFwiOiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KCdcXHUwMDAyJywgMTYpKSxcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU1RBUlQgT0YgVEVYVFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAzLFxuICAgICAgICBcInN5bWJvbFwiOiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KCdcXHUwMDAzJywgMTYpKSxcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRU5EIE9GIFRFWFRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNCxcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAwNCcsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkVORCBPRiBUUkFOU01JU1NJT05cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNSxcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAwNScsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkVOUVVJUllcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNixcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAwNicsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkFDS05PV0xFREdNRU5UXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDcsXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMDcnLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCRUxMXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDgsXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMDgnLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCQUNLIFNQQUNFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDksXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMDknLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJIT1JJWk9OVEFMIFRBQlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMCxcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAwQScsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxJTkUgRkVFRFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMSxcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAwQicsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlZFUlRJQ0FMIFRBQlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMixcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAwQycsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkZPUk0gRkVFRFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMyxcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAwRCcsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkNBUlJJQUdFIFJFVFVSTlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNCxcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAwRScsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNISUZUIE9VVCAvIFgtT05cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTUsXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMEYnLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTSElGVCBJTiAvIFgtT0ZGXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE2LFxuICAgICAgICBcInN5bWJvbFwiOiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KCdcXHUwMDEwJywgMTYpKSxcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiREFUQSBMSU5FIEVTQ0FQRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNyxcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAxMScsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRFVklDRSBDT05UUk9MIDEgKE9GVC4gWE9OKVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxOCxcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAxMicsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRFVklDRSBDT05UUk9MIDJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTksXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMTMnLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJERVZJQ0UgQ09OVFJPTCAzIChPRlQuIFhPRkYpXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIwLFxuICAgICAgICBcInN5bWJvbFwiOiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KCdcXHUwMDE0JywgMTYpKSxcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiREVWSUNFIENPTlRST0wgNFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMSxcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAxNScsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5FR0FUSVZFIEFDS05PV0xFREdFTUVOVFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMixcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAxNicsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNZTkNIUk9OT1VTIElETEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjMsXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMTcnLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJFTkQgT0YgVFJBTlNNSVQgQkxPQ0tcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjQsXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMTgnLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJDQU5DRUxcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjUsXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMTknLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJFTkQgT0YgTUVESVVNXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDI2LFxuICAgICAgICBcInN5bWJvbFwiOiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KCdcXHUwMDFBJywgMTYpKSxcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU1VCU1RJVFVURVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyNyxcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAxQicsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkVTQ0FQRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyOCxcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAxQycsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkZJTEUgU0VQQVJBVE9SXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDI5LFxuICAgICAgICBcInN5bWJvbFwiOiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KCdcXHUwMDFEJywgMTYpKSxcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiR1JPVVAgU0VQQVJBVE9SXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDMwLFxuICAgICAgICBcInN5bWJvbFwiOiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KCdcXHUwMDFFJywgMTYpKSxcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUkVDT1JEIFNFUEFSQVRPUlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAzMSxcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAxRicsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlVOSVQgU0VQQVJBVE9SXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDMyLFxuICAgICAgICBcInN5bWJvbFwiOiBcIiBcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU1BBQ0VcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMzMsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiIVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJFWENMQU1BVElPTiBNQVJLXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDM0LFxuICAgICAgICBcInN5bWJvbFwiOiBcIlxcXCJcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUVVPVEFUSU9OIE1BUktcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMzUsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiI1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOVU1CRVIgU0lHTlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAzNixcbiAgICAgICAgXCJzeW1ib2xcIjogXCIkXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRPTExBUiBTSUdOXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDM3LFxuICAgICAgICBcInN5bWJvbFwiOiBcIiVcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUEVSQ0VOVCBTSUdOXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDM4LFxuICAgICAgICBcInN5bWJvbFwiOiBcIiZcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQU1QRVJTQU5EXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDM5LFxuICAgICAgICBcInN5bWJvbFwiOiBcIidcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQVBPU1RST1BIRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA0MCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCIoXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxFRlQgUEFSRU5USEVTSVNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNDEsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiKVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJSSUdIVCBQQVJFTlRIRVNJU1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA0MixcbiAgICAgICAgXCJzeW1ib2xcIjogXCIqXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkFTVEVSSVNLXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDQzLFxuICAgICAgICBcInN5bWJvbFwiOiBcIitcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUExVUyBTSUdOXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDQ0LFxuICAgICAgICBcInN5bWJvbFwiOiBcIixcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ09NTUFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNDUsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiLVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJIWVBIRU4tTUlOVVNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNDYsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiLlwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJGVUxMIFNUT1BcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNDcsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiL1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTT0xJRFVTXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDQ4LFxuICAgICAgICBcInN5bWJvbFwiOiBcIjBcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRElHSVQgWkVST1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA0OSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCIxXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRJR0lUIE9ORVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA1MCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCIyXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRJR0lUIFRXT1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA1MSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCIzXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRJR0lUIFRIUkVFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDUyLFxuICAgICAgICBcInN5bWJvbFwiOiBcIjRcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRElHSVQgRk9VUlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA1MyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCI1XCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRJR0lUIEZJVkVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNTQsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiNlwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJESUdJVCBTSVhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNTUsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiN1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJESUdJVCBTRVZFTlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA1NixcbiAgICAgICAgXCJzeW1ib2xcIjogXCI4XCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRJR0lUIEVJR0hUXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDU3LFxuICAgICAgICBcInN5bWJvbFwiOiBcIjlcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRElHSVQgTklORVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA1OCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCI6XCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkNPTE9OXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDU5LFxuICAgICAgICBcInN5bWJvbFwiOiBcIjtcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU0VNSUNPTE9OXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDYwLFxuICAgICAgICBcInN5bWJvbFwiOiBcIjxcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEVTUy1USEFOIFNJR05cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNjEsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiPVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJFUVVBTFMgU0lHTlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA2MixcbiAgICAgICAgXCJzeW1ib2xcIjogXCI+XCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkdSRUFURVItVEhBTiBTSUdOXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDYzLFxuICAgICAgICBcInN5bWJvbFwiOiBcIj9cIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUVVFU1RJT04gTUFSS1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA2NCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCJAXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkNPTU1FUkNJQUwgQVRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNjUsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiQVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBBXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDY2LFxuICAgICAgICBcInN5bWJvbFwiOiBcIkJcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgQlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA2NyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCJDXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIENcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNjgsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiRFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBEXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDY5LFxuICAgICAgICBcInN5bWJvbFwiOiBcIkVcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA3MCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCJGXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIEZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNzEsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiR1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBHXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDcyLFxuICAgICAgICBcInN5bWJvbFwiOiBcIkhcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgSFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA3MyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCJJXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIElcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNzQsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiSlwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBKXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDc1LFxuICAgICAgICBcInN5bWJvbFwiOiBcIktcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgS1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA3NixcbiAgICAgICAgXCJzeW1ib2xcIjogXCJMXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIExcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNzcsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiTVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBNXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDc4LFxuICAgICAgICBcInN5bWJvbFwiOiBcIk5cIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgTlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA3OSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCJPXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIE9cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogODAsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiUFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBQXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDgxLFxuICAgICAgICBcInN5bWJvbFwiOiBcIlFcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgUVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA4MixcbiAgICAgICAgXCJzeW1ib2xcIjogXCJSXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIFJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogODMsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiU1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBTXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDg0LFxuICAgICAgICBcInN5bWJvbFwiOiBcIlRcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgVFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA4NSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCJVXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIFVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogODYsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiVlwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBWXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDg3LFxuICAgICAgICBcInN5bWJvbFwiOiBcIldcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgV1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA4OCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCJYXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIFhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogODksXG4gICAgICAgIFwic3ltYm9sXCI6IFwiWVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBZXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDkwLFxuICAgICAgICBcInN5bWJvbFwiOiBcIlpcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgWlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA5MSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCJbXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxFRlQgU1FVQVJFIEJSQUNLRVRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogOTIsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlJFVkVSU0UgU09MSURVU1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA5MyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCJdXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlJJR0hUIFNRVUFSRSBCUkFDS0VUXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDk0LFxuICAgICAgICBcInN5bWJvbFwiOiBcIl5cIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ0lSQ1VNRkxFWCBBQ0NFTlRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogOTUsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiX1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMT1cgTElORVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA5NixcbiAgICAgICAgXCJzeW1ib2xcIjogXCJgXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkdSQVZFIEFDQ0VOVFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA5NyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCJhXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBBXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDk4LFxuICAgICAgICBcInN5bWJvbFwiOiBcImJcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIEJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogOTksXG4gICAgICAgIFwic3ltYm9sXCI6IFwiY1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgQ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMDAsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiZFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgRFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMDEsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiZVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMDIsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiZlwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgRlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMDMsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiZ1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgR1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMDQsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiaFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgSFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMDUsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiaVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgSVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMDYsXG4gICAgICAgIFwic3ltYm9sXCI6IFwialwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgSlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMDcsXG4gICAgICAgIFwic3ltYm9sXCI6IFwia1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgS1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMDgsXG4gICAgICAgIFwic3ltYm9sXCI6IFwibFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgTFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMDksXG4gICAgICAgIFwic3ltYm9sXCI6IFwibVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgTVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMTAsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiblwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgTlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMTEsXG4gICAgICAgIFwic3ltYm9sXCI6IFwib1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgT1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMTIsXG4gICAgICAgIFwic3ltYm9sXCI6IFwicFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgUFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMTMsXG4gICAgICAgIFwic3ltYm9sXCI6IFwicVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgUVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMTQsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiclwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgUlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMTUsXG4gICAgICAgIFwic3ltYm9sXCI6IFwic1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgU1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMTYsXG4gICAgICAgIFwic3ltYm9sXCI6IFwidFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgVFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMTcsXG4gICAgICAgIFwic3ltYm9sXCI6IFwidVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgVVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMTgsXG4gICAgICAgIFwic3ltYm9sXCI6IFwidlwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgVlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMTksXG4gICAgICAgIFwic3ltYm9sXCI6IFwid1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgV1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMjAsXG4gICAgICAgIFwic3ltYm9sXCI6IFwieFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgWFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMjEsXG4gICAgICAgIFwic3ltYm9sXCI6IFwieVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgWVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMjIsXG4gICAgICAgIFwic3ltYm9sXCI6IFwielwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgWlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMjMsXG4gICAgICAgIFwic3ltYm9sXCI6IFwie1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMRUZUIENVUkxZIEJSQUNLRVRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTI0LFxuICAgICAgICBcInN5bWJvbFwiOiBcInxcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVkVSVElDQUwgTElORVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMjUsXG4gICAgICAgIFwic3ltYm9sXCI6IFwifVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJSSUdIVCBDVVJMWSBCUkFDS0VUXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDEyNixcbiAgICAgICAgXCJzeW1ib2xcIjogXCJ+XCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRJTERFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDEyNyxcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDA3RicsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRFTEVURVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMjgsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiw4dcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgQyBXSVRIIENFRElMTEFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTI5LFxuICAgICAgICBcInN5bWJvbFwiOiBcIsO8XCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBVIFdJVEggRElBRVJFU0lTXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDEzMCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLDqVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgRSBXSVRIIEFDVVRFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDEzMSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLDolwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgQSBXSVRIIENJUkNVTUZMRVhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTMyLFxuICAgICAgICBcInN5bWJvbFwiOiBcIsOkXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBBIFdJVEggRElBRVJFU0lTXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDEzMyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLDoFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgQSBXSVRIIEdSQVZFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDEzNCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLDpVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgQSBXSVRIIFJJTkcgQUJPVkVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTM1LFxuICAgICAgICBcInN5bWJvbFwiOiBcIsOnXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBDIFdJVEggQ0VESUxMQVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMzYsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiw6pcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIEUgV0lUSCBDSVJDVU1GTEVYXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDEzNyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLDq1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgRSBXSVRIIERJQUVSRVNJU1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMzgsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiw6hcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIEUgV0lUSCBHUkFWRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMzksXG4gICAgICAgIFwic3ltYm9sXCI6IFwiw69cIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIEkgV0lUSCBESUFFUkVTSVNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTQwLFxuICAgICAgICBcInN5bWJvbFwiOiBcIsOuXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBJIFdJVEggQ0lSQ1VNRkxFWFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNDEsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiw6xcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIEkgV0lUSCBHUkFWRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNDIsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiw4RcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgQSBXSVRIIERJQUVSRVNJU1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNDMsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiw4VcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgQSBXSVRIIFJJTkcgQUJPVkVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTQ0LFxuICAgICAgICBcInN5bWJvbFwiOiBcIsOJXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIEUgV0lUSCBBQ1VURVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNDUsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiw6ZcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIEFFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE0NixcbiAgICAgICAgXCJzeW1ib2xcIjogXCLDhlwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBBRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNDcsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiw7RcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIE8gV0lUSCBDSVJDVU1GTEVYXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE0OCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLDtlwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgTyBXSVRIIERJQUVSRVNJU1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNDksXG4gICAgICAgIFwic3ltYm9sXCI6IFwiw7JcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIE8gV0lUSCBHUkFWRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNTAsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiw7tcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIFUgV0lUSCBDSVJDVU1GTEVYXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE1MSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLDuVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgVSBXSVRIIEdSQVZFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE1MixcbiAgICAgICAgXCJzeW1ib2xcIjogXCLDv1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgWSBXSVRIIERJQUVSRVNJU1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNTMsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiw5ZcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgTyBXSVRIIERJQUVSRVNJU1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNTQsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiw5xcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgVSBXSVRIIERJQUVSRVNJU1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNTUsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiwqJcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ0VOVCBTSUdOXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE1NixcbiAgICAgICAgXCJzeW1ib2xcIjogXCLCo1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJQT1VORCBTSUdOXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE1NyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLCpVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJZRU4gU0lHTlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNTgsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4oKnXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlBFU0VUQSBTSUdOXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE1OSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLGklwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgRiBXSVRIIEhPT0tcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTYwLFxuICAgICAgICBcInN5bWJvbFwiOiBcIsOhXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBBIFdJVEggQUNVVEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTYxLFxuICAgICAgICBcInN5bWJvbFwiOiBcIsOtXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBJIFdJVEggQUNVVEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTYyLFxuICAgICAgICBcInN5bWJvbFwiOiBcIsOzXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBPIFdJVEggQUNVVEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTYzLFxuICAgICAgICBcInN5bWJvbFwiOiBcIsO6XCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBVIFdJVEggQUNVVEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTY0LFxuICAgICAgICBcInN5bWJvbFwiOiBcIsOxXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBOIFdJVEggVElMREVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTY1LFxuICAgICAgICBcInN5bWJvbFwiOiBcIsORXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIE4gV0lUSCBUSUxERVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNjYsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiwqpcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRkVNSU5JTkUgT1JESU5BTCBJTkRJQ0FUT1JcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTY3LFxuICAgICAgICBcInN5bWJvbFwiOiBcIsK6XCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk1BU0NVTElORSBPUkRJTkFMIElORElDQVRPUlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNjgsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiwr9cIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiSU5WRVJURUQgUVVFU1RJT04gTUFSS1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNjksXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4oyQXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlJFVkVSU0VEIE5PVCBTSUdOXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE3MCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLCrFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOT1QgU0lHTlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNzEsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiwr1cIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVlVMR0FSIEZSQUNUSU9OIE9ORSBIQUxGXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE3MixcbiAgICAgICAgXCJzeW1ib2xcIjogXCLCvFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJWVUxHQVIgRlJBQ1RJT04gT05FIFFVQVJURVJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTczLFxuICAgICAgICBcInN5bWJvbFwiOiBcIsKhXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIklOVkVSVEVEIEVYQ0xBTUFUSU9OIE1BUktcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTc0LFxuICAgICAgICBcInN5bWJvbFwiOiBcIsKrXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxFRlQtUE9JTlRJTkcgRE9VQkxFIEFOR0xFIFFVT1RBVElPTiBNQVJLXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE3NSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLCu1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJSSUdIVC1QT0lOVElORyBET1VCTEUgQU5HTEUgUVVPVEFUSU9OIE1BUktcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTc2LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKWkVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMSUdIVCBTSEFERVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNzcsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4paSXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk1FRElVTSBTSEFERVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNzgsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4paTXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRBUksgU0hBREVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTc5LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKUglwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgTElHSFQgVkVSVElDQUxcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTgwLFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKUpFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgTElHSFQgVkVSVElDQUwgQU5EIExFRlRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTgxLFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKVoVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgVkVSVElDQUwgU0lOR0xFIEFORCBMRUZUIERPVUJMRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxODIsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4pWiXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBWRVJUSUNBTCBET1VCTEUgQU5EIExFRlQgU0lOR0xFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE4MyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilZZcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIERPV04gRE9VQkxFIEFORCBMRUZUIFNJTkdMRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxODQsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4pWVXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBET1dOIFNJTkdMRSBBTkQgTEVGVCBET1VCTEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTg1LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKVo1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgRE9VQkxFIFZFUlRJQ0FMIEFORCBMRUZUXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE4NixcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilZFcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIERPVUJMRSBWRVJUSUNBTFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxODcsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4pWXXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBET1VCTEUgRE9XTiBBTkQgTEVGVFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxODgsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4pWdXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBET1VCTEUgVVAgQU5EIExFRlRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTg5LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKVnFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgVVAgRE9VQkxFIEFORCBMRUZUIFNJTkdMRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxOTAsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4pWbXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBVUCBTSU5HTEUgQU5EIExFRlQgRE9VQkxFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE5MSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilJBcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIExJR0hUIERPV04gQU5EIExFRlRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTkyLFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKUlFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgTElHSFQgVVAgQU5EIFJJR0hUXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE5MyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilLRcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIExJR0hUIFVQIEFORCBIT1JJWk9OVEFMXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE5NCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilKxcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIExJR0hUIERPV04gQU5EIEhPUklaT05UQUxcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTk1LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKUnFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgTElHSFQgVkVSVElDQUwgQU5EIFJJR0hUXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE5NixcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilIBcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIExJR0hUIEhPUklaT05UQUxcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTk3LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKUvFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgTElHSFQgVkVSVElDQUwgQU5EIEhPUklaT05UQUxcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTk4LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKVnlwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgVkVSVElDQUwgU0lOR0xFIEFORCBSSUdIVCBET1VCTEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTk5LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKVn1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgVkVSVElDQUwgRE9VQkxFIEFORCBSSUdIVCBTSU5HTEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjAwLFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKVmlwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgRE9VQkxFIFVQIEFORCBSSUdIVFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMDEsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4pWUXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBET1VCTEUgRE9XTiBBTkQgUklHSFRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjAyLFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKVqVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgRE9VQkxFIFVQIEFORCBIT1JJWk9OVEFMXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIwMyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilaZcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIERPVUJMRSBET1dOIEFORCBIT1JJWk9OVEFMXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIwNCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilaBcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIERPVUJMRSBWRVJUSUNBTCBBTkQgUklHSFRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjA1LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKVkFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgRE9VQkxFIEhPUklaT05UQUxcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjA2LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKVrFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgRE9VQkxFIFZFUlRJQ0FMIEFORCBIT1JJWk9OVEFMXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIwNyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLiladcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIFVQIFNJTkdMRSBBTkQgSE9SSVpPTlRBTCBET1VCTEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjA4LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKVqFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgVVAgRE9VQkxFIEFORCBIT1JJWk9OVEFMIFNJTkdMRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMDksXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4pWkXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBET1dOIFNJTkdMRSBBTkQgSE9SSVpPTlRBTCBET1VCTEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjEwLFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKVpVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgRE9XTiBET1VCTEUgQU5EIEhPUklaT05UQUwgU0lOR0xFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIxMSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilZlcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIFVQIERPVUJMRSBBTkQgUklHSFQgU0lOR0xFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIxMixcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilZhcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIFVQIFNJTkdMRSBBTkQgUklHSFQgRE9VQkxFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIxMyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilZJcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIERPV04gU0lOR0xFIEFORCBSSUdIVCBET1VCTEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjE0LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKVk1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgRE9XTiBET1VCTEUgQU5EIFJJR0hUIFNJTkdMRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMTUsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4pWrXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBWRVJUSUNBTCBET1VCTEUgQU5EIEhPUklaT05UQUwgU0lOR0xFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIxNixcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilapcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIFZFUlRJQ0FMIFNJTkdMRSBBTkQgSE9SSVpPTlRBTCBET1VCTEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjE3LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKUmFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgTElHSFQgVVAgQU5EIExFRlRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjE4LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKUjFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgTElHSFQgRE9XTiBBTkQgUklHSFRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjE5LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKWiFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJGVUxMIEJMT0NLXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIyMCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLiloRcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTE9XRVIgSEFMRiBCTE9DS1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMjEsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4paMXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxFRlQgSEFMRiBCTE9DS1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMjIsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4paQXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlJJR0hUIEhBTEYgQkxPQ0tcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjIzLFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKWgFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJVUFBFUiBIQUxGIEJMT0NLXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIyNCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLOsVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJHUkVFSyBTTUFMTCBMRVRURVIgQUxQSEFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjI1LFxuICAgICAgICBcInN5bWJvbFwiOiBcIsOfXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBTSEFSUCBTXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIyNixcbiAgICAgICAgXCJzeW1ib2xcIjogXCLOk1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJHUkVFSyBDQVBJVEFMIExFVFRFUiBHQU1NQVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMjcsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiz4BcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiR1JFRUsgU01BTEwgTEVUVEVSIFBJXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIyOCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLOo1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJHUkVFSyBDQVBJVEFMIExFVFRFUiBTSUdNQVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMjksXG4gICAgICAgIFwic3ltYm9sXCI6IFwiz4NcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiR1JFRUsgU01BTEwgTEVUVEVSIFNJR01BXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIzMCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLCtVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJNSUNSTyBTSUdOXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIzMSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLPhFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJHUkVFSyBTTUFMTCBMRVRURVIgVEFVXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIzMixcbiAgICAgICAgXCJzeW1ib2xcIjogXCLOplwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJHUkVFSyBDQVBJVEFMIExFVFRFUiBQSElcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjMzLFxuICAgICAgICBcInN5bWJvbFwiOiBcIs6YXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkdSRUVLIENBUElUQUwgTEVUVEVSIFRIRVRBXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIzNCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLOqVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJHUkVFSyBDQVBJVEFMIExFVFRFUiBPTUVHQVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMzUsXG4gICAgICAgIFwic3ltYm9sXCI6IFwizrRcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiR1JFRUsgU01BTEwgTEVUVEVSIERFTFRBXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIzNixcbiAgICAgICAgXCJzeW1ib2xcIjogXCLiiJ5cIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiSU5GSU5JVFlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjM3LFxuICAgICAgICBcInN5bWJvbFwiOiBcIs+GXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkdSRUVLIFNNQUxMIExFVFRFUiBQSElcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjM4LFxuICAgICAgICBcInN5bWJvbFwiOiBcIs61XCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkdSRUVLIFNNQUxMIExFVFRFUiBFUFNJTE9OXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIzOSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLiiKlcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiSU5URVJTRUNUSU9OXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDI0MCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLiiaFcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiSURFTlRJQ0FMIFRPXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDI0MSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLCsVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJQTFVTLU1JTlVTIFNJR05cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjQyLFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKJpVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJHUkVBVEVSLVRIQU4gT1IgRVFVQUwgVE9cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjQzLFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKJpFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMRVNTLVRIQU4gT1IgRVFVQUwgVE9cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjQ0LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKMoFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUT1AgSEFMRiBJTlRFR1JBTFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyNDUsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4oyhXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPVFRPTSBIQUxGIElOVEVHUkFMXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDI0NixcbiAgICAgICAgXCJzeW1ib2xcIjogXCLDt1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJESVZJU0lPTiBTSUdOXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDI0NyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLiiYhcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQUxNT1NUIEVRVUFMIFRPXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDI0OCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLCsFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJERUdSRUUgU0lHTlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyNDksXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4oiZXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJVTExFVCBPUEVSQVRPUlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyNTAsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiwrdcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTUlERExFIERPVFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyNTEsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4oiaXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNRVUFSRSBST09UXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDI1MixcbiAgICAgICAgXCJzeW1ib2xcIjogXCLigb9cIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU1VQRVJTQ1JJUFQgTEFUSU4gU01BTEwgTEVUVEVSIE5cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjUzLFxuICAgICAgICBcInN5bWJvbFwiOiBcIsKyXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNVUEVSU0NSSVBUIFRXT1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyNTQsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4pagXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJMQUNLIFNRVUFSRVwiXG4gICAgfVxuXTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNvZGVQYWdlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkRyYXdUZXh0ID0gZXhwb3J0cy5UZXh0V2lkdGggPSBleHBvcnRzLlRleHRIZWlnaHQgPSBleHBvcnRzLkNvZGVwYWdlQW5kQml0bWFwdG9KU09OID0gZXhwb3J0cy5JbWFnZVRvQmFzZTY0ID0gZXhwb3J0cy5IZXhUb1JnYmEgPSBleHBvcnRzLlJnYmFUb0hleCA9IGV4cG9ydHMuQ29sb3JMZXJwID0gZXhwb3J0cy5Gb250cyA9IGV4cG9ydHMuTG9hZERlZmF1bHRGb250cyA9IGV4cG9ydHMuTG9hZEZyb21KU09OID0gdm9pZCAwO1xudmFyIEZvbnREYXRhXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vRm9udERhdGFcIikpO1xudmFyIGRlZmF1bHRfanNvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2ZvbnRzL2RlZmF1bHQuanNvblwiKSk7XG52YXIgY29kZXBhZ2VfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb2RlcGFnZVwiKSk7XG52YXIgaW1hZ2VzXzEgPSByZXF1aXJlKFwiLi9pbWFnZXNcIik7XG52YXIgZm9udENhbnZhcyA9IG51bGw7XG52YXIgZm9udHMgPSBbXTtcbmZ1bmN0aW9uIExvYWREZWZhdWx0Rm9udHMoKSB7XG4gICAgdmFyIGxvYWRlZEZvbnQgPSBMb2FkRnJvbUpTT04oZGVmYXVsdF9qc29uXzEuZGVmYXVsdCk7XG4gICAgaWYgKGxvYWRlZEZvbnQpIHtcbiAgICAgICAgZm9udHMucHVzaChsb2FkZWRGb250KTtcbiAgICB9XG59XG5leHBvcnRzLkxvYWREZWZhdWx0Rm9udHMgPSBMb2FkRGVmYXVsdEZvbnRzO1xuZnVuY3Rpb24gTG9hZEZyb21KU09OKGZvbnRKc29uKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIGZvbnREYXRhID0gT2JqZWN0LmFzc2lnbihuZXcgRm9udERhdGFfMS5kZWZhdWx0KCksIGZvbnRKc29uKTtcbiAgICAgICAgZm9udERhdGEuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgZm9udERhdGEuaW1hZ2Uuc3JjID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwnICsgZm9udERhdGEuaW1hZ2VkYXRhO1xuICAgICAgICByZXR1cm4gZm9udERhdGE7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlKTtcbiAgICB9XG59XG5leHBvcnRzLkxvYWRGcm9tSlNPTiA9IExvYWRGcm9tSlNPTjtcbmZ1bmN0aW9uIEZvbnRzKCkge1xuICAgIGlmIChPYmplY3Qua2V5cyhmb250cykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIExvYWREZWZhdWx0Rm9udHMoKTtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGZvbnRzKS5tYXAoZnVuY3Rpb24gKG0pIHsgcmV0dXJuIGZvbnRzW21dOyB9KTtcbn1cbmV4cG9ydHMuRm9udHMgPSBGb250cztcbmZ1bmN0aW9uIEhleFRvUmdiYShoZXgpIHtcbiAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gNykge1xuICAgICAgICBoZXggKz0gJ2ZmJztcbiAgICB9XG4gICAgZWxzZSBpZiAoaGV4Lmxlbmd0aCA9PT0gOCkge1xuICAgICAgICBoZXggKz0gJzAnO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xuICAgIHJldHVybiByZXN1bHQgPyB7XG4gICAgICAgIHI6IHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpLFxuICAgICAgICBnOiBwYXJzZUludChyZXN1bHRbMl0sIDE2KSxcbiAgICAgICAgYjogcGFyc2VJbnQocmVzdWx0WzNdLCAxNiksXG4gICAgICAgIGE6IHBhcnNlSW50KHJlc3VsdFs0XSwgMTYpXG4gICAgfSA6IG51bGw7XG59XG5leHBvcnRzLkhleFRvUmdiYSA9IEhleFRvUmdiYTtcbmZ1bmN0aW9uIFJnYmFUb0hleChyZ2IpIHtcbiAgICB2YXIgciA9IHJnYi5yLnRvU3RyaW5nKDE2KTtcbiAgICB2YXIgZyA9IHJnYi5nLnRvU3RyaW5nKDE2KTtcbiAgICB2YXIgYiA9IHJnYi5iLnRvU3RyaW5nKDE2KTtcbiAgICB2YXIgYSA9IHJnYi5hLnRvU3RyaW5nKDE2KTtcbiAgICByID0gci5sZW5ndGggPT09IDEgPyAnMCcgKyByIDogcjtcbiAgICBnID0gZy5sZW5ndGggPT09IDEgPyAnMCcgKyBnIDogZztcbiAgICBiID0gYi5sZW5ndGggPT09IDEgPyAnMCcgKyBiIDogYjtcbiAgICBhID0gYS5sZW5ndGggPT09IDEgPyAnMCcgKyBhIDogYTtcbiAgICByZXR1cm4gXCIjXCIuY29uY2F0KHIpLmNvbmNhdChnKS5jb25jYXQoYikuY29uY2F0KGEpO1xufVxuZXhwb3J0cy5SZ2JhVG9IZXggPSBSZ2JhVG9IZXg7XG5mdW5jdGlvbiBDb2xvckxlcnAoY29sb3IxLCBjb2xvcjIsIHQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByOiBNYXRoLmZsb29yKGNvbG9yMS5yICsgKGNvbG9yMi5yIC0gY29sb3IxLnIpICogdCksXG4gICAgICAgIGc6IE1hdGguZmxvb3IoY29sb3IxLmcgKyAoY29sb3IyLmcgLSBjb2xvcjEuZykgKiB0KSxcbiAgICAgICAgYjogTWF0aC5mbG9vcihjb2xvcjEuYiArIChjb2xvcjIuYiAtIGNvbG9yMS5iKSAqIHQpLFxuICAgICAgICBhOiBjb2xvcjEuYVxuICAgIH07XG59XG5leHBvcnRzLkNvbG9yTGVycCA9IENvbG9yTGVycDtcbmZ1bmN0aW9uIEltYWdlVG9CYXNlNjQoaW1nLCBvdXRwdXRGb3JtYXQpIHtcbiAgICBvdXRwdXRGb3JtYXQgPSBvdXRwdXRGb3JtYXQgPyBvdXRwdXRGb3JtYXQgOiAnaW1hZ2UvcG5nJztcbiAgICB0cnkge1xuICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHZhciBjb250eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaW1nLmhlaWdodDtcbiAgICAgICAgY2FudmFzLndpZHRoID0gaW1nLndpZHRoO1xuICAgICAgICBjb250eC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcbiAgICAgICAgdmFyIGRhdGEgPSBjYW52YXMudG9EYXRhVVJMKG91dHB1dEZvcm1hdCk7XG4gICAgICAgIHZhciBpbmRleCA9IGRhdGEuaW5kZXhPZignO2Jhc2U2NCwnKSArICc7YmFzZTY0LCcubGVuZ3RoO1xuICAgICAgICByZXR1cm4gZGF0YS5zbGljZShpbmRleCk7XG4gICAgfVxuICAgIGNhdGNoIChfYSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdDYW5ub3QgZG8gdGhpcyBvdXRzaWRlIG9mIHRoZSBET00geWV0LicpO1xuICAgICAgICAvKlxuICAgICAgICBjb25zdCBjYW52YXM6IENhbnZhcyA9IGNyZWF0ZUNhbnZhcyhpbWcud2lkdGgsIGltZy5oZWlnaHQpXG4gICAgICAgIGNvbnN0IGNvbnR4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGltZy53aWR0aFxuICAgICAgICBjb250eC5kcmF3SW1hZ2UoaW1nLCAwLCAwKVxuICAgICAgICBjb25zdCBkYXRhID0gY2FudmFzLnRvRGF0YVVSTChvdXRwdXRGb3JtYXQpXG4gICAgICAgIGNvbnN0IGluZGV4ID0gZGF0YS5pbmRleE9mKCc7YmFzZTY0LCcpICsgJztiYXNlNjQsJy5sZW5ndGhcbiAgICAgICAgcmV0dXJuIGRhdGEuc2xpY2UoaW5kZXgpKi9cbiAgICB9XG59XG5leHBvcnRzLkltYWdlVG9CYXNlNjQgPSBJbWFnZVRvQmFzZTY0O1xuLyoqXG4gKiBHZXQgYmFzZTY0IGltYWdlIGRhdGEgYW5kIGJ1aWxkIGEgcHJlY29tcGlsZWQgZm9udCBKU09OIG9iamVjdC5cbiAqIEBwYXJhbSBpbWFnZU5hbWVcbiAqIEBwYXJhbSBtYXhfeVxuICogQHBhcmFtIGN3IENoYXJhY3RlciB3aWR0aC5cbiAqIEBwYXJhbSBjaCBDaGFyYWN0ZXIgaGVpZ2h0LlxuICogQHJldHVybnNcbiAqL1xuZnVuY3Rpb24gQ29kZXBhZ2VBbmRCaXRtYXB0b0pTT04oaW1hZ2VOYW1lLCBtYXhfeSwgY3csIGNoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBzeCA9IDA7IC8vIFNvdXJjZSBYXG4gICAgICAgICAgICB2YXIgc3kgPSAwOyAvLyBTb3VyY2UgWVxuICAgICAgICAgICAgY3cgPSBjdyA/IGN3IDogOTsgLy8gQ2hhcmFjdGVyIFdpZHRoXG4gICAgICAgICAgICBjaCA9IGNoID8gY2ggOiAxNjsgLy8gQ2hhcmFjdGVyIEhlaWdodFxuICAgICAgICAgICAgdmFyIGNvZGVwYWdlID0gW107XG4gICAgICAgICAgICB2YXIgaW1hZ2VkYXRhID0gbnVsbDtcbiAgICAgICAgICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgaW1hZ2VkYXRhID0gSW1hZ2VUb0Jhc2U2NCgoMCwgaW1hZ2VzXzEuZ2V0SW1hZ2UpKGltYWdlTmFtZSkpO1xuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwnICsgaW1hZ2VkYXRhO1xuICAgICAgICAgICAgbWF4X3kgPSBtYXhfeSA/IG1heF95IDogaW1hZ2UuaGVpZ2h0O1xuICAgICAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoY29kZSkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlaXRlbSA9IGNvZGVwYWdlXzEuZGVmYXVsdC5maWx0ZXIoZnVuY3Rpb24gKGYpIHsgcmV0dXJuIGYuY29kZW51bWJlciA9PT0gY29kZTsgfSk7XG4gICAgICAgICAgICAgICAgaWYgKGNvZGVpdGVtLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZWl0ZW1bMF0ucmVjdCA9IHVuZGVmaW5lZDsgLy8geyB4OiBzeCwgeTogc3ksIHc6IGN3LCBoOiBjaCB9IC8vVE9ETzogTWFrZSB0aGlzIGEgcGFyYW1ldGVyIHRvIGNvbnRyb2wgd2hldGhlciB3ZSBhdXRvLWdlbmVyYXRlIHJlY3RzXG4gICAgICAgICAgICAgICAgICAgIGNvZGVwYWdlLnB1c2goY29kZWl0ZW1bMF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzeCArPSBjdztcbiAgICAgICAgICAgICAgICBpZiAoc3ggPj0gaW1hZ2Uud2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3ggPSAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWF4X3kgJiYgc3kgKyBjaCA8IG1heF95KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzeSArPSBjaDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3kgPj0gaW1hZ2UuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHN5ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZm9yICh2YXIgY29kZSA9IDA7IGNvZGUgPCAyNTY7IGNvZGUrKykge1xuICAgICAgICAgICAgICAgIF9sb29wXzEoY29kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNvbHZlKHsgY3dpZHRoOiBjdywgY2hlaWdodDogY2gsIGNvZGVwYWdlOiBjb2RlcGFnZSwgaW1hZ2VkYXRhOiBpbWFnZWRhdGEgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5Db2RlcGFnZUFuZEJpdG1hcHRvSlNPTiA9IENvZGVwYWdlQW5kQml0bWFwdG9KU09OO1xuZnVuY3Rpb24gVGV4dEhlaWdodCh0ZXh0LCBmb250KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHRleHQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdHh0ID0gdGV4dC5zcGxpdCgnXFxuJyk7XG4gICAgICAgIHJldHVybiB0eHQubGVuZ3RoICogZm9udC5jaGVpZ2h0O1xuICAgIH1cbiAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxufVxuZXhwb3J0cy5UZXh0SGVpZ2h0ID0gVGV4dEhlaWdodDtcbmZ1bmN0aW9uIFRleHRXaWR0aCh0ZXh0LCBmb250KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHRleHQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbWF4dyA9IDA7XG4gICAgICAgIHZhciB0eHQgPSB0ZXh0LnNwbGl0KCdcXG4nKTtcbiAgICAgICAgdmFyIF9sb29wXzIgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBsaW5lID0gdHh0W2luZGV4XTtcbiAgICAgICAgICAgIHZhciBsaW5ld2lkdGggPSAwO1xuICAgICAgICAgICAgdmFyIF9sb29wXzMgPSBmdW5jdGlvbiAoY2hhcikge1xuICAgICAgICAgICAgICAgIHZhciBnbHlwaCA9IGZvbnQuY29kZXBhZ2UuZmlsdGVyKGZ1bmN0aW9uIChmKSB7IHJldHVybiBmLmNvZGVudW1iZXIgPT09IGxpbmUuY2hhckNvZGVBdChjaGFyKTsgfSk7XG4gICAgICAgICAgICAgICAgdmFyIHJlY3QgPSBnbHlwaC5sZW5ndGggPiAwID8gZ2x5cGhbMF0ucmVjdCA6IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKHJlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgbGluZXdpZHRoICs9IHJlY3QudztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmV3aWR0aCArPSBmb250LmN3aWR0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZm9yICh2YXIgY2hhciA9IDA7IGNoYXIgPCBsaW5lLmxlbmd0aDsgY2hhcisrKSB7XG4gICAgICAgICAgICAgICAgX2xvb3BfMyhjaGFyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsaW5ld2lkdGggPiBtYXh3KSB7XG4gICAgICAgICAgICAgICAgbWF4dyA9IGxpbmV3aWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gdHh0KSB7XG4gICAgICAgICAgICBfbG9vcF8yKGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF4dztcbiAgICB9XG4gICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbn1cbmV4cG9ydHMuVGV4dFdpZHRoID0gVGV4dFdpZHRoO1xuLyoqXG4gKiBEcmF3cyB0aGUgc3BlY2lmaWVkIHRleHQgb24gdGhlIGNhbnZhcy5cbiAqXG4gKiBAcGFyYW0ge0hUTUxDYW52YXNFbGVtZW50fSBjdHggMmQgY29udGV4dCB0byBkcmF3IHRleHQgb24uXG4gKiBAcGFyYW0ge251bWJlcn0geCBMZWZ0IGxvY2F0aW9uIGZvciB0ZXh0LlxuICogQHBhcmFtIHtudW1iZXJ9IHkgVG9wIGxvY2F0aW9uIGZvciB0ZXh0XG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBUZXh0IHRvIGJlIGRyYXduIG9uIGNhbnZhcy5cbiAqIEBwYXJhbSB7Q29sb3JSR0JBfSBjb2xvciBDb2xvdXIgdG8gdXNlICh3aGl0ZSBpZiB1bmRlZmluZWQpLlxuICogQHBhcmFtIHtGb250RGF0YX0gZm9udCBGb250IHRvIHVzZSAoZGVmYXVsdCBET1MgY29kZXBhZ2UgNDM3IGZvbnQgaWYgdW5kZWZpbmVkKS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBlZmZlY3RzIEFueSBlZmZlY3RzIGFuZCBwYXJhbWV0ZXJzIHRvIGFwcGx5IHdoZW4gcmVuZGVyaW5nIHRoaXMgdGV4dC5cbiAqL1xuZnVuY3Rpb24gRHJhd1RleHQoY3R4LCB4LCB5LCB0ZXh0LCBjb2xvciwgZm9udCAvKiwgZWZmZWN0czogb2JqZWN0Ki8pIHtcbiAgICBpZiAodHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb2xvciA9IEhleFRvUmdiYShjb2xvcik7XG4gICAgfVxuICAgIGlmICh0ZXh0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4geyB4OiB4LCB5OiB5LCB3OiAwLCBoOiAwIH07XG4gICAgfVxuICAgIC8vZWZmZWN0cyA9IGVmZmVjdHMgPyBlZmZlY3RzIDoge31cbiAgICBpZiAoIWZvbnQgJiYgZm9udHMubGVuZ3RoID4gMCkge1xuICAgICAgICBmb250ID0gZm9udHNbMF07XG4gICAgfVxuICAgIGVsc2UgaWYgKCFmb250IHx8IGZvbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZvbnQgcGFyYW1ldGVyIGVtcHR5IGFuZCBkZWZhdWx0IGZvbnRzIGFyZSBub3QgbG9hZGVkLicpO1xuICAgIH1cbiAgICBpZiAoIWNvbG9yKSB7XG4gICAgICAgIGNvbG9yID0gSGV4VG9SZ2JhKCcjZmZmZmZmZmYnKTtcbiAgICB9XG4gICAgaWYgKCFmb250IHx8ICFmb250LmNvZGVwYWdlIHx8ICFmb250LmltYWdlZGF0YSB8fCAhZm9udC5pbWFnZSB8fCAhZm9udC5jd2lkdGggfHwgIWZvbnQuY2hlaWdodCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgZm9udCBvciBmb250IG5vdCBsb2FkZWQuJyk7XG4gICAgfVxuICAgIHZhciB0ZXh0d2lkdGggPSBUZXh0V2lkdGgodGV4dCwgZm9udCk7XG4gICAgdmFyIHRleHRoZWlnaHQgPSBUZXh0SGVpZ2h0KHRleHQsIGZvbnQpO1xuICAgIGlmICghZm9udENhbnZhcykge1xuICAgICAgICBmb250Q2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIGZvbnRDYW52YXMuaWQgPSAnZm9udENhbnZhcyc7XG4gICAgfVxuICAgIGZvbnRDYW52YXMud2lkdGggPSB0ZXh0d2lkdGg7XG4gICAgZm9udENhbnZhcy5oZWlnaHQgPSB0ZXh0aGVpZ2h0O1xuICAgIHZhciBmb250Y3R4ID0gZm9udENhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGZvbnRjdHguY2xlYXJSZWN0KDAsIDAsIHRleHR3aWR0aCwgdGV4dGhlaWdodCk7XG4gICAgdmFyIGR4ID0gMDtcbiAgICB2YXIgbWF4ZHggPSAwO1xuICAgIHZhciByb3dzID0gdGV4dC5zcGxpdCgnXFxuJyk7XG4gICAgdmFyIGR5ID0gMDtcbiAgICB2YXIgX2xvb3BfNCA9IGZ1bmN0aW9uIChyb3dJbmRleCkge1xuICAgICAgICB2YXIgdHh0ID0gcm93c1tyb3dJbmRleF07XG4gICAgICAgIHZhciBfbG9vcF81ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgZ2x5cGhzID0gZm9udC5jb2RlcGFnZS5maWx0ZXIoZnVuY3Rpb24gKGYpIHsgcmV0dXJuIGYuc3ltYm9sID09PSB0eHRbaW5kZXhdOyB9KTtcbiAgICAgICAgICAgIHZhciBnbHlwaCA9IG51bGw7XG4gICAgICAgICAgICBpZiAoZ2x5cGhzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGdseXBoID0gZm9udC5jb2RlcGFnZS5maWx0ZXIoZnVuY3Rpb24gKGYpIHsgcmV0dXJuIGYuY29kZW51bWJlciA9PT0gdHh0W2luZGV4XS5jaGFyQ29kZUF0KDApOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGdseXBoID0gZ2x5cGhzWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJlY3QgPSBnbHlwaCA/IGdseXBoLnJlY3QgOiBudWxsO1xuICAgICAgICAgICAgaWYgKHJlY3QpIHtcbiAgICAgICAgICAgICAgICBmb250Y3R4LmRyYXdJbWFnZShmb250LmltYWdlLCByZWN0LngsIHJlY3QueSwgcmVjdC53LCByZWN0LmgsIGR4LCBkeSwgcmVjdC53LCByZWN0LmgpO1xuICAgICAgICAgICAgICAgIGR4ICs9IHJlY3QudztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBmaW5kaW5nIHZhbHVlIGluIGNvZGVwYWdlIGZvcicsIHR4dFtpbmRleF0sIFwiKFwiLmNvbmNhdCh0eHRbaW5kZXhdLmNoYXJDb2RlQXQoMCksIFwiKVwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0eHQubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBfbG9vcF81KGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBkeSArPSBmb250LmNoZWlnaHQ7XG4gICAgICAgIGlmIChkeCA+IG1heGR4KSB7XG4gICAgICAgICAgICBtYXhkeCA9IGR4O1xuICAgICAgICB9XG4gICAgICAgIGR4ID0gMDtcbiAgICB9O1xuICAgIGZvciAodmFyIHJvd0luZGV4IGluIHJvd3MpIHtcbiAgICAgICAgX2xvb3BfNChyb3dJbmRleCk7XG4gICAgfVxuICAgIHRleHR3aWR0aCA9IG1heGR4O1xuICAgIHZhciBpbWFnZURhdGEgPSBudWxsO1xuICAgIGlmICh0ZXh0d2lkdGggPiAwKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpbWFnZURhdGEgPSBmb250Y3R4LmdldEltYWdlRGF0YSgwLCAwLCB0ZXh0d2lkdGgsIHRleHRoZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChfYSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGdldHRpbmcgaW1hZ2UgZGF0YTonLCB0ZXh0d2lkdGgsIHRleHRoZWlnaHQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwaXhlbHMgPSBpbWFnZURhdGEuZGF0YTtcbiAgICAgICAgZm9yICh2YXIgcHkgPSAwOyBweSA8IHRleHRoZWlnaHQ7IHB5KyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIHB4ID0gMDsgcHggPCB0ZXh0d2lkdGg7IHB4KyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcGl4ZWwgPSBHZXRQaXhlbEF0UmdiYShwaXhlbHMsIHB4LCBweSwgdGV4dHdpZHRoKTtcbiAgICAgICAgICAgICAgICAvLyBpZiAoT2JqZWN0LmtleXMoZWZmZWN0cykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIC8vICAgICBsZXQgc2V0RGVmYXVsdFBpeGVsID0gdHJ1ZVxuICAgICAgICAgICAgICAgIC8vICAgICBpZiAoZWZmZWN0cy5ncmFkaWVudCAmJiBwaXhlbCAmJiBwaXhlbC5hID4gMCkge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgdmVydGljYWwgPSBlZmZlY3RzLmdyYWRpZW50Lmhvcml6b250YWwgPyBmYWxzZSA6IHRydWVcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IGxlcnBUID0gdmVydGljYWwgPyBweSAvIHRleHRoZWlnaHQgOiBweCAvIHRleHR3aWR0aFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgZ3JhZGllbnRDb2xvdXI6IENvbG9yUkdCQSA9IEhleFRvUmdiYShlZmZlY3RzLmdyYWRpZW50LmNvbG9yKVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgbGVycENvbHI6IENvbG9yUkdCQSA9IENvbG9yTGVycChjb2xvciwgZ3JhZGllbnRDb2xvdXIsIGxlcnBUKVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgU2V0UGl4ZWxBdFJnYmEocGl4ZWxzLCBsZXJwQ29sciwgcHgsIHB5LCB0ZXh0d2lkdGgpXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBzZXREZWZhdWx0UGl4ZWwgPSBmYWxzZVxuICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgIGlmIChwaXhlbCAmJiBwaXhlbC5hID4gMCAmJiBzZXREZWZhdWx0UGl4ZWwpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIFNldFBpeGVsQXRSZ2JhKHBpeGVscywgY29sb3IsIHB4LCBweSwgdGV4dHdpZHRoKVxuICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocGl4ZWwgJiYgcGl4ZWwuYSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgU2V0UGl4ZWxBdFJnYmEocGl4ZWxzLCBjb2xvciwgcHgsIHB5LCB0ZXh0d2lkdGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5ld0ltYWdlRGF0YSA9IG5ldyBJbWFnZURhdGEocGl4ZWxzLCB0ZXh0d2lkdGgsIHRleHRoZWlnaHQpO1xuICAgICAgICBmb250Y3R4LmNsZWFyUmVjdCgwLCAwLCB0ZXh0d2lkdGgsIHRleHRoZWlnaHQpO1xuICAgICAgICAvLyBpZiAoZWZmZWN0cy5iYWNrZ3JvdW5kKSB7XG4gICAgICAgIC8vICAgICBjdHguZmlsbFN0eWxlID0gZWZmZWN0cy5iYWNrZ3JvdW5kLmNvbG91clxuICAgICAgICAvLyAgICAgY3R4LmZpbGxSZWN0KHgsIHksIHRleHR3aWR0aCwgdGV4dGhlaWdodClcbiAgICAgICAgLy8gfVxuICAgICAgICBmb250Y3R4LnB1dEltYWdlRGF0YShuZXdJbWFnZURhdGEsIDAsIDApO1xuICAgICAgICBjdHguZHJhd0ltYWdlKGZvbnRDYW52YXMsIDAsIDAsIHRleHR3aWR0aCwgdGV4dGhlaWdodCwgeCwgeSwgdGV4dHdpZHRoLCB0ZXh0aGVpZ2h0KTtcbiAgICB9XG4gICAgcmV0dXJuIHsgeDogeCwgeTogeSwgdzogdGV4dHdpZHRoLCBoOiB0ZXh0aGVpZ2h0IH07XG59XG5leHBvcnRzLkRyYXdUZXh0ID0gRHJhd1RleHQ7XG5mdW5jdGlvbiBTZXRQaXhlbEF0UmdiYShwaXhlbHMsIGNvbG9yLCB4LCB5LCBwaXhlbHN3aWR0aCkge1xuICAgIHZhciBvZmZzZXQgPSAoeCArIHBpeGVsc3dpZHRoICogeSkgKiA0O1xuICAgIGlmIChvZmZzZXQgPCAwIHx8IG9mZnNldCA+PSBwaXhlbHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcGl4ZWxzW29mZnNldF0gPSBjb2xvci5yO1xuICAgIHBpeGVsc1tvZmZzZXQgKyAxXSA9IGNvbG9yLmc7XG4gICAgcGl4ZWxzW29mZnNldCArIDJdID0gY29sb3IuYjtcbiAgICBwaXhlbHNbb2Zmc2V0ICsgM10gPSBjb2xvci5hO1xuICAgIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24gR2V0UGl4ZWxBdFJnYmEocGl4ZWxzLCB4LCB5LCBwaXhlbHN3aWR0aCkge1xuICAgIHZhciBvZmZzZXQgPSAoeCArIHBpeGVsc3dpZHRoICogeSkgKiA0O1xuICAgIGlmIChvZmZzZXQgPCAwIHx8IG9mZnNldCA+PSBwaXhlbHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4geyByOiBwaXhlbHNbb2Zmc2V0XSwgZzogcGl4ZWxzW29mZnNldCArIDFdLCBiOiBwaXhlbHNbb2Zmc2V0ICsgMl0sIGE6IHBpeGVsc1tvZmZzZXQgKyAzXSB9O1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmltYWdlTWFuaWZlc3RGcm9tSlNPTiA9IGV4cG9ydHMuZ2V0Q29udGV4dCA9IGV4cG9ydHMuZHJhd0ltYWdlQ3R4ID0gZXhwb3J0cy5zZXRDb250ZXh0ID0gZXhwb3J0cy5nZXRJbWFnZXMgPSBleHBvcnRzLmdldEltYWdlID0gZXhwb3J0cy5kcmF3SW1hZ2UgPSBleHBvcnRzLmxvYWRJbWFnZSA9IGV4cG9ydHMubG9hZEFsbEltYWdlcyA9IHZvaWQgMDtcbnZhciBJbWFnZURlZmluaXRpb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9JbWFnZURlZmluaXRpb25cIikpO1xudmFyIGltYWdlcyA9IFtdO1xuLyoqXG4gKiBQb3B1bGF0ZSBpbWFnZXMgbWFuaWZlc3Qgd2l0aCBKU09OIGxpc3Qgb2YgZGVmaW5pdGlvbnMuXG4gKiBAcGFyYW0ganNvbiBKU09OIHJlcHJlc2VudGF0aW9uIG9mIGltYWdlIGRlZmluaXRpb25zLlxuICovXG5mdW5jdGlvbiBpbWFnZU1hbmlmZXN0RnJvbUpTT04oanNvbikge1xuICAgIGpzb24uZm9yRWFjaCgoZnVuY3Rpb24gKGRlZikgeyByZXR1cm4gaW1hZ2VzLnB1c2goSW1hZ2VEZWZpbml0aW9uXzEuZGVmYXVsdC5mcm9tSlNPTihkZWYpKTsgfSkpO1xufVxuZXhwb3J0cy5pbWFnZU1hbmlmZXN0RnJvbUpTT04gPSBpbWFnZU1hbmlmZXN0RnJvbUpTT047XG4vLyBDYW52YXMgMmQgY29udGV4dC5cbnZhciBjdHggPSBudWxsO1xuLy8gU2V0IHRoZSBjYW52YXMgMmQgY29udGV4dC5cbmZ1bmN0aW9uIHNldENvbnRleHQoY29udGV4dCkge1xuICAgIGN0eCA9IGNvbnRleHQ7XG59XG5leHBvcnRzLnNldENvbnRleHQgPSBzZXRDb250ZXh0O1xuLy8gUmV0dXJucyB0aGUgY2FudmFzIDJkIGNvbnRleHQuXG5mdW5jdGlvbiBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiBjdHg7XG59XG5leHBvcnRzLmdldENvbnRleHQgPSBnZXRDb250ZXh0O1xuLy8gUmV0dXJuIGxvYWRlZCBpbWFnZSBvYmplY3QgZnJvbSB0aGUgbGlzdC5cbmZ1bmN0aW9uIGdldEltYWdlKG5hbWUpIHtcbiAgICB2YXIgaW1nID0gaW1hZ2VzLmZpbHRlcihmdW5jdGlvbiAoZikgeyByZXR1cm4gZi5uYW1lID09PSBuYW1lOyB9KTtcbiAgICByZXR1cm4gaW1nLmxlbmd0aCA+IDAgPyBpbWdbMF0uaW1hZ2UgOiBudWxsO1xufVxuZXhwb3J0cy5nZXRJbWFnZSA9IGdldEltYWdlO1xuLy8gUmV0dXJucyB0aGUgZnVsbCBsaXN0IG9mIGltYWdlIG9iamVjdHMuXG5mdW5jdGlvbiBnZXRJbWFnZXMoKSB7XG4gICAgcmV0dXJuIGltYWdlcztcbn1cbmV4cG9ydHMuZ2V0SW1hZ2VzID0gZ2V0SW1hZ2VzO1xuLyoqXG4gKiBEcmF3cyBhbiBpbWFnZSBhdCB4LHkgY29vcmRpbmF0ZXMgb24gdGhlIGNhbmFzLlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gKiBAcGFyYW0ge251bWJlcn0geVxuICogQHBhcmFtIHtvYmplY3R9IHNyY1JlY3RcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gZmxpcHBlZFxuICovXG5mdW5jdGlvbiBkcmF3SW1hZ2UobmFtZSwgeCwgeSwgc3JjUmVjdCwgZmxpcHBlZCkge1xuICAgIGRyYXdJbWFnZUN0eChnZXRDb250ZXh0KCksIG5hbWUsIHgsIHksIHNyY1JlY3QsIGZsaXBwZWQpO1xufVxuZXhwb3J0cy5kcmF3SW1hZ2UgPSBkcmF3SW1hZ2U7XG4vKipcbiAqIFJhdyBpbWFnZSBkcmF3aW5nIGZ1bmN0aW9uICh1c2UgZHJhd0ltYWdlIHVubGVzcyB5b3Ugd2FudCB0byBkcmF3IHRvIGFub3RoZXIgMmQgY29udGV4dCkuXG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCBDYW52YXMgMmQgY29udGV4dC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge251bWJlcn0geFxuICogQHBhcmFtIHtudW1iZXJ9IHlcbiAqIEBwYXJhbSB7b2JqZWN0fSBzcmNSZWN0XG4gKiBAcGFyYW0ge2Jvb2xlYW59IGZsaXBwZWRcbiAqL1xuZnVuY3Rpb24gZHJhd0ltYWdlQ3R4KGNvbnRleHQsIG5hbWUsIHgsIHksIHNyY1JlY3QsIGZsaXBwZWQpIHtcbiAgICB2YXIgaW1nID0gaW1hZ2VzLmZpbHRlcihmdW5jdGlvbiAoZikgeyByZXR1cm4gZi5uYW1lID09PSBuYW1lOyB9KTtcbiAgICBpZiAoaW1nLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChzcmNSZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGZsaXBwZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5zYXZlKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuc2NhbGUoLTEsIDEpO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWdbMF0uaW1hZ2UsIHNyY1JlY3QueCwgc3JjUmVjdC55LCBzcmNSZWN0LncsIHNyY1JlY3QuaCwgLXggLSBzcmNSZWN0LncsIHksIHNyY1JlY3Qudywgc3JjUmVjdC5oKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5yZXN0b3JlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWdbMF0uaW1hZ2UsIHNyY1JlY3QueCwgc3JjUmVjdC55LCBzcmNSZWN0LncsIHNyY1JlY3QuaCwgeCwgeSwgc3JjUmVjdC53LCBzcmNSZWN0LmgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChmbGlwcGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnNjYWxlKC0xLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1nWzBdLmltYWdlLCB4IC0gc3JjUmVjdC53LCB5LCBzcmNSZWN0LncsIHNyY1JlY3QuaCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1nWzBdLmltYWdlLCB4LCB5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgICAvLyBlbXB0eVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5kcmF3SW1hZ2VDdHggPSBkcmF3SW1hZ2VDdHg7XG4vKipcbiAqIExvYWQgSW1hZ2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlbmFtZVxuICogQHJldHVybnNcbiAqL1xuZnVuY3Rpb24gbG9hZEltYWdlKGZpbGVuYW1lKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmVzb2x2ZShpbWcpO1xuICAgICAgICB9O1xuICAgICAgICBpbWcub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgZmlsZSBcIi5jb25jYXQoZmlsZW5hbWUsIFwiOlwiKSwgZSk7XG4gICAgICAgICAgICByZWplY3QobnVsbCk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBpbWFnZSA9IGltYWdlcy5maWx0ZXIoZnVuY3Rpb24gKGYpIHsgcmV0dXJuIGYuZmlsZW5hbWUgPT09IGZpbGVuYW1lOyB9KTtcbiAgICAgICAgaWYgKGltYWdlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGltZy5zcmMgPSBmaWxlbmFtZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJJbWFnZSBkZWZpbml0aW9uIG1hdGNoaW5nIGZpbGVuYW1lIFwiLmNvbmNhdChmaWxlbmFtZSwgXCIgbm90IGZvdW5kLlwiKSk7XG4gICAgICAgICAgICByZWplY3QobnVsbCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMubG9hZEltYWdlID0gbG9hZEltYWdlO1xuLyoqXG4gKiBMb2FkIGFsbCBpbWFnZXMgaW4gdGhlIGltYWdlcyBsaXN0LlxuICogQHJldHVybnNcbiAqL1xuZnVuY3Rpb24gbG9hZEFsbEltYWdlcygpIHtcbiAgICB2YXIgcHJvbWlzZXMgPSBbXTtcbiAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHZhciBpbWFnZSA9IGltYWdlc1tpXTtcbiAgICAgICAgcHJvbWlzZXMucHVzaChuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXR1cm4gbG9hZEltYWdlKGltYWdlLmZpbGVuYW1lKS50aGVuKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICBpbWFnZS5pbWFnZSA9IHI7XG4gICAgICAgICAgICByZXNvbHZlKHIpO1xuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkgeyByZXR1cm4gY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGxvYWQnLCBpbWFnZS5maWxlbmFtZSwgZSk7IH0pOyB9KSk7XG4gICAgfTtcbiAgICBmb3IgKHZhciBpIGluIGltYWdlcykge1xuICAgICAgICBfbG9vcF8xKGkpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5hbGxTZXR0bGVkKHByb21pc2VzKTtcbn1cbmV4cG9ydHMubG9hZEFsbEltYWdlcyA9IGxvYWRBbGxJbWFnZXM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubXVzaWNNYW5pZmVzdEZyb21KU09OID0gZXhwb3J0cy5pc1BsYXlpbmcgPSBleHBvcnRzLmdldFRyYWNrID0gZXhwb3J0cy5wbGF5VHJhY2sgPSBleHBvcnRzLmxvYWRUcmFjayA9IGV4cG9ydHMubG9hZEFsbFRyYWNrcyA9IHZvaWQgMDtcbnZhciBNdXNpY0RlZmluaXRpb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9NdXNpY0RlZmluaXRpb25cIikpO1xudmFyIHNmeFZvbHVtZSA9IDAuNDU7XG52YXIgc2Z4cyA9IFtdO1xuLyoqXG4gKiBQb3B1bGF0ZSBzZnggbWFuaWZlc3Qgd2l0aCBKU09OIGxpc3Qgb2YgZGVmaW5pdGlvbnMuXG4gKiBAcGFyYW0ganNvbiBKU09OIHJlcHJlc2VudGF0aW9uIG9mIGltYWdlIGRlZmluaXRpb25zLlxuICovXG5mdW5jdGlvbiBtdXNpY01hbmlmZXN0RnJvbUpTT04oanNvbikge1xuICAgIGpzb24uZm9yRWFjaCgoZnVuY3Rpb24gKGRlZikgeyByZXR1cm4gc2Z4cy5wdXNoKE11c2ljRGVmaW5pdGlvbl8xLmRlZmF1bHQuZnJvbUpTT04oZGVmKSk7IH0pKTtcbn1cbmV4cG9ydHMubXVzaWNNYW5pZmVzdEZyb21KU09OID0gbXVzaWNNYW5pZmVzdEZyb21KU09OO1xuZnVuY3Rpb24gaXNQbGF5aW5nKG5hbWUpIHtcbiAgICB2YXIgc2YgPSBnZXRUcmFjayhuYW1lKTtcbiAgICBpZiAoc2YpIHtcbiAgICAgICAgcmV0dXJuICFzZi5wYXVzZWQgfHwgc2YuY3VycmVudFRpbWUgJiYgc2YuY3VycmVudFRpbWUgPCBzZi5kdXJhdGlvbjtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0cy5pc1BsYXlpbmcgPSBpc1BsYXlpbmc7XG5mdW5jdGlvbiBnZXRUcmFjayhuYW1lKSB7XG4gICAgdmFyIHNmID0gc2Z4cy5maWx0ZXIoZnVuY3Rpb24gKGYpIHsgcmV0dXJuIGYubmFtZSA9PT0gbmFtZTsgfSk7XG4gICAgcmV0dXJuIHNmLmxlbmd0aCA+IDAgPyBzZlswXS50cmFjayA6IG51bGw7XG59XG5leHBvcnRzLmdldFRyYWNrID0gZ2V0VHJhY2s7XG5mdW5jdGlvbiBwbGF5VHJhY2sobmFtZSwgb25FbmRlZCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHNmXzEgPSBzZnhzLmZpbHRlcihmdW5jdGlvbiAoZikgeyByZXR1cm4gZi5uYW1lID09PSBuYW1lOyB9KTtcbiAgICAgICAgICAgIGlmIChzZl8xLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzUGxheWluZyhuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBzZl8xWzBdLnRyYWNrLnZvbHVtZSA9IHNmeFZvbHVtZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9uRW5kZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNmXzFbMF0udHJhY2sub25lbmRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkVuZGVkKHNmXzFbMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNmXzFbMF0udHJhY2sub25lbmRlZCA9IGZ1bmN0aW9uICgpIHsgcmVzb2x2ZSgpOyB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNmXzFbMF0udHJhY2sub25lbmRlZCA9IGZ1bmN0aW9uICgpIHsgcmVzb2x2ZSgpOyB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNmXzFbMF0udHJhY2sucGxheSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2ZfMVswXS50cmFjay5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgcGxheWluZyBzZngnLCBuYW1lLCBlKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5wbGF5VHJhY2sgPSBwbGF5VHJhY2s7XG5mdW5jdGlvbiBsb2FkVHJhY2soZmlsZW5hbWUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgc2YgPSBuZXcgQXVkaW8oZmlsZW5hbWUpO1xuICAgICAgICBzZi5vbmNhbnBsYXl0aHJvdWdoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmVzb2x2ZShzZik7XG4gICAgICAgIH07XG4gICAgICAgIHNmLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGZpbGUgXCIuY29uY2F0KGZpbGVuYW1lLCBcIjpcIiksIGUpO1xuICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICB9O1xuICAgIH0pO1xufVxuZXhwb3J0cy5sb2FkVHJhY2sgPSBsb2FkVHJhY2s7XG5mdW5jdGlvbiBsb2FkQWxsVHJhY2tzKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZUFsbCwgcmVqZWN0QWxsKSB7XG4gICAgICAgIHZhciBwcm9taXNlcyA9IFtdO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICB2YXIgc2Z4ID0gc2Z4c1tpXTtcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2gobmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmV0dXJuIGxvYWRUcmFjayhzZnguZmlsZW5hbWUpLnRoZW4oZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgICAgICAgICBzZngudHJhY2sgPSByO1xuICAgICAgICAgICAgICAgIHJlc29sdmUocik7XG4gICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBsb2FkJywgc2Z4LmZpbGVuYW1lLCBlKTtcbiAgICAgICAgICAgICAgICByZWplY3RBbGwoJ0ZhaWxlZCB0byBsb2FkJyArIHNmeC5maWxlbmFtZSArICc6JyArIEpTT04uc3RyaW5naWZ5KGUpKTtcbiAgICAgICAgICAgIH0pOyB9KSk7XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgaW4gc2Z4cykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGxTZXR0bGVkKHByb21pc2VzKTtcbiAgICB9KTtcbn1cbmV4cG9ydHMubG9hZEFsbFRyYWNrcyA9IGxvYWRBbGxUcmFja3M7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVBY3RpdmF0ZVNjZW5lID0gZXhwb3J0cy5hY3RpdmF0ZVNjZW5lID0gZXhwb3J0cy5hZGRTY2VuZSA9IGV4cG9ydHMuaGFuZGxlSW5wdXQgPSBleHBvcnRzLmhhbmRsZUFuaW1hdGlvbkZyYW1lID0gdm9pZCAwO1xudmFyIHN0YXJ0ID0gbnVsbDtcbnZhciBzY2VuZXMgPSBbXTtcbmZ1bmN0aW9uIGFkZFNjZW5lKHNjZW5lKSB7XG4gICAgc2NlbmVzLnB1c2goc2NlbmUpO1xuICAgIHJldHVybiBzY2VuZTtcbn1cbmV4cG9ydHMuYWRkU2NlbmUgPSBhZGRTY2VuZTtcbmZ1bmN0aW9uIGFjdGl2YXRlU2NlbmUoaWQpIHtcbiAgICB2YXIgaW5kZXggPSBzY2VuZXMuZmluZEluZGV4KGZ1bmN0aW9uIChzKSB7IHJldHVybiBzLmlkID09PSBpZDsgfSk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgc2NlbmVzW2luZGV4XS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBzY2VuZXNbaW5kZXhdLm9uQWN0aXZhdGUoKTtcbiAgICB9XG59XG5leHBvcnRzLmFjdGl2YXRlU2NlbmUgPSBhY3RpdmF0ZVNjZW5lO1xuZnVuY3Rpb24gZGVBY3RpdmF0ZVNjZW5lKGlkKSB7XG4gICAgdmFyIGluZGV4ID0gc2NlbmVzLmZpbmRJbmRleChmdW5jdGlvbiAocykgeyByZXR1cm4gcy5pZCA9PT0gaWQ7IH0pO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIHNjZW5lc1tpbmRleF0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHNjZW5lc1tpbmRleF0ub25EZWFjdGl2YXRlKCk7XG4gICAgfVxufVxuZXhwb3J0cy5kZUFjdGl2YXRlU2NlbmUgPSBkZUFjdGl2YXRlU2NlbmU7XG5mdW5jdGlvbiBoYW5kbGVJbnB1dChpbnB1dCwgYW10LCByZWxlYXNlZCkge1xuICAgIHNjZW5lcy5maWx0ZXIoZnVuY3Rpb24gKGYpIHsgcmV0dXJuIGYuYWN0aXZlOyB9KS5mb3JFYWNoKGZ1bmN0aW9uIChzY2VuZSkge1xuICAgICAgICBzY2VuZS5oYW5kbGVJbnB1dChpbnB1dCwgYW10LCByZWxlYXNlZCk7XG4gICAgfSk7XG59XG5leHBvcnRzLmhhbmRsZUlucHV0ID0gaGFuZGxlSW5wdXQ7XG5mdW5jdGlvbiBoYW5kbGVBbmltYXRpb25GcmFtZSh0aW1lU3RhbXApIHtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGhhbmRsZUFuaW1hdGlvbkZyYW1lKTtcbiAgICBpZiAoc3RhcnQgPT09IG51bGwpIHtcbiAgICAgICAgc3RhcnQgPSB0aW1lU3RhbXAgLSAxNjsgLy8gSWYgd2UgZG9uJ3QgZG8gdGhpcywgdGhlIGZpcnN0IGZyYW1lIHRpbWVzdGFtcCBpcyB0b28gbG9uZyBzbyB3ZSBmYWtlIDYwZnBzIGJ5IHN1YnRyYWN0aW5nIDE2XG4gICAgfVxuICAgIHZhciBkZWx0YSA9IHRpbWVTdGFtcCAtIHN0YXJ0O1xuICAgIHN0YXJ0ID0gdGltZVN0YW1wO1xuICAgIHNjZW5lcy5maWx0ZXIoZnVuY3Rpb24gKGYpIHsgcmV0dXJuIGYuYWN0aXZlOyB9KS5mb3JFYWNoKGZ1bmN0aW9uIChzY2VuZSkge1xuICAgICAgICBzY2VuZS5hbmltYXRpb25GcmFtZShkZWx0YSk7XG4gICAgfSk7XG59XG5leHBvcnRzLmhhbmRsZUFuaW1hdGlvbkZyYW1lID0gaGFuZGxlQW5pbWF0aW9uRnJhbWU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc2Z4TWFuaWZlc3RGcm9tSlNPTiA9IGV4cG9ydHMuaXNQbGF5aW5nID0gZXhwb3J0cy5nZXRTZnggPSBleHBvcnRzLnBsYXlTZnggPSBleHBvcnRzLmxvYWRTZnggPSBleHBvcnRzLmxvYWRBbGxTZnggPSB2b2lkIDA7XG52YXIgU2Z4RGVmaW5pdGlvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1NmeERlZmluaXRpb25cIikpO1xudmFyIHNmeFZvbHVtZSA9IDAuNDU7XG52YXIgc2Z4cyA9IFtdO1xuLyoqXG4gKiBQb3B1bGF0ZSBzZnggbWFuaWZlc3Qgd2l0aCBKU09OIGxpc3Qgb2YgZGVmaW5pdGlvbnMuXG4gKiBAcGFyYW0ganNvbiBKU09OIHJlcHJlc2VudGF0aW9uIG9mIGltYWdlIGRlZmluaXRpb25zLlxuICovXG5mdW5jdGlvbiBzZnhNYW5pZmVzdEZyb21KU09OKGpzb24pIHtcbiAgICBqc29uLmZvckVhY2goKGZ1bmN0aW9uIChkZWYpIHsgcmV0dXJuIHNmeHMucHVzaChTZnhEZWZpbml0aW9uXzEuZGVmYXVsdC5mcm9tSlNPTihkZWYpKTsgfSkpO1xufVxuZXhwb3J0cy5zZnhNYW5pZmVzdEZyb21KU09OID0gc2Z4TWFuaWZlc3RGcm9tSlNPTjtcbmZ1bmN0aW9uIGlzUGxheWluZyhuYW1lKSB7XG4gICAgdmFyIHNmID0gZ2V0U2Z4KG5hbWUpO1xuICAgIGlmIChzZikge1xuICAgICAgICByZXR1cm4gIXNmLnBhdXNlZCB8fCBzZi5jdXJyZW50VGltZSAmJiBzZi5jdXJyZW50VGltZSA8IHNmLmR1cmF0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnRzLmlzUGxheWluZyA9IGlzUGxheWluZztcbmZ1bmN0aW9uIGdldFNmeChuYW1lKSB7XG4gICAgdmFyIHNmID0gc2Z4cy5maWx0ZXIoZnVuY3Rpb24gKGYpIHsgcmV0dXJuIGYubmFtZSA9PT0gbmFtZTsgfSk7XG4gICAgcmV0dXJuIHNmLmxlbmd0aCA+IDAgPyBzZlswXS5zZnggOiBudWxsO1xufVxuZXhwb3J0cy5nZXRTZnggPSBnZXRTZng7XG5mdW5jdGlvbiBwbGF5U2Z4KG5hbWUsIG9uRW5kZWQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBzZl8xID0gc2Z4cy5maWx0ZXIoZnVuY3Rpb24gKGYpIHsgcmV0dXJuIGYubmFtZSA9PT0gbmFtZTsgfSk7XG4gICAgICAgICAgICBpZiAoc2ZfMS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1BsYXlpbmcobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2ZfMVswXS5zZngudm9sdW1lID0gc2Z4Vm9sdW1lO1xuICAgICAgICAgICAgICAgICAgICBpZiAob25FbmRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2ZfMVswXS5zZngub25lbmRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkVuZGVkKHNmXzFbMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNmXzFbMF0uc2Z4Lm9uZW5kZWQgPSBmdW5jdGlvbiAoKSB7IHJlc29sdmUoKTsgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZl8xWzBdLnNmeC5vbmVuZGVkID0gZnVuY3Rpb24gKCkgeyByZXNvbHZlKCk7IH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2ZfMVswXS5zZngucGxheSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2ZfMVswXS5zZnguY3VycmVudFRpbWUgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHBsYXlpbmcgc2Z4JywgbmFtZSwgZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMucGxheVNmeCA9IHBsYXlTZng7XG5mdW5jdGlvbiBsb2FkU2Z4KGZpbGVuYW1lKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIHNmID0gbmV3IEF1ZGlvKGZpbGVuYW1lKTtcbiAgICAgICAgc2Yub25jYW5wbGF5dGhyb3VnaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJlc29sdmUoc2YpO1xuICAgICAgICB9O1xuICAgICAgICBzZi5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBmaWxlIFwiLmNvbmNhdChmaWxlbmFtZSwgXCI6XCIpLCBlKTtcbiAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cbmV4cG9ydHMubG9hZFNmeCA9IGxvYWRTZng7XG5mdW5jdGlvbiBsb2FkQWxsU2Z4KCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZUFsbCwgcmVqZWN0QWxsKSB7XG4gICAgICAgIHZhciBwcm9taXNlcyA9IFtdO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICB2YXIgc2Z4ID0gc2Z4c1tpXTtcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2gobmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmV0dXJuIGxvYWRTZngoc2Z4LmZpbGVuYW1lKS50aGVuKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICAgICAgc2Z4LnNmeCA9IHI7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGxvYWQnLCBzZnguZmlsZW5hbWUsIGUpO1xuICAgICAgICAgICAgICAgIHJlamVjdEFsbCgnRmFpbGVkIHRvIGxvYWQnICsgc2Z4LmZpbGVuYW1lICsgJzonICsgSlNPTi5zdHJpbmdpZnkoZSkpO1xuICAgICAgICAgICAgfSk7IH0pKTtcbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBzZnhzKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbFNldHRsZWQocHJvbWlzZXMpO1xuICAgIH0pO1xufVxuZXhwb3J0cy5sb2FkQWxsU2Z4ID0gbG9hZEFsbFNmeDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNhbnZhc0hlaWdodCA9IGV4cG9ydHMuY2FudmFzV2lkdGggPSBleHBvcnRzLmdhbWVDYW52YXMgPSBleHBvcnRzLnNldENhbnZhc0JhY2tncm91bmQgPSBleHBvcnRzLmluaXRpYWxpemUgPSBleHBvcnRzLm11c2ljID0gZXhwb3J0cy5zZnggPSBleHBvcnRzLnNjZW5lcyA9IGV4cG9ydHMuZm9udCA9IGV4cG9ydHMuaW1hZ2VzID0gdm9pZCAwO1xudmFyIGZvbnRfMSA9IHJlcXVpcmUoXCIuL21vZHVsZXMvZm9udFwiKTtcbmV4cG9ydHMuaW1hZ2VzID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL21vZHVsZXMvaW1hZ2VzXCIpKTtcbmV4cG9ydHMuZm9udCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9tb2R1bGVzL2ZvbnRcIikpO1xuZXhwb3J0cy5zY2VuZXMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vbW9kdWxlcy9zY2VuZXNcIikpO1xuZXhwb3J0cy5zZnggPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vbW9kdWxlcy9zZnhcIikpO1xuZXhwb3J0cy5tdXNpYyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9tb2R1bGVzL211c2ljXCIpKTtcbi8vIEdhbWUgQ2FudmFzIG1ldGFkYXRhIEdsb2JhbHMuXG52YXIgZ2FtZUNhbnZhcyA9IG51bGw7XG5leHBvcnRzLmdhbWVDYW52YXMgPSBnYW1lQ2FudmFzO1xudmFyIGNhbnZhc1dpZHRoID0gMDtcbmV4cG9ydHMuY2FudmFzV2lkdGggPSBjYW52YXNXaWR0aDtcbnZhciBjYW52YXNIZWlnaHQgPSAwO1xuZXhwb3J0cy5jYW52YXNIZWlnaHQgPSBjYW52YXNIZWlnaHQ7XG52YXIgY2FudmFzQmFja2dyb3VuZCA9ICd0cmFuc3BhcmVudCc7XG5mdW5jdGlvbiByZXNpemUoKSB7XG4gICAgLy8gVE9ETzogY2FsY3VsYXRlIHRoZSB3aWR0aCB0byBoZWlnaHQgcmF0aW8gYW5kIHNjYWxlIGNTaXplIGJ5IHRoYXQgYmVmb3JlIHNldHRpbmcgdmFsdWVzLlxuICAgIHZhciBjU2l6ZSA9IHdpbmRvdy5pbm5lckhlaWdodCA+IHdpbmRvdy5pbm5lcldpZHRoID8gd2luZG93LmlubmVyV2lkdGggOiB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgZ2FtZUNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBnYW1lQ2FudmFzLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBnYW1lQ2FudmFzLnN0eWxlLndpZHRoID0gY1NpemUgKyAncHgnO1xuICAgIGdhbWVDYW52YXMuc3R5bGUuaGVpZ2h0ID0gY1NpemUgKyAncHgnO1xuICAgIGdhbWVDYW52YXMuc3R5bGUudG9wID0gd2luZG93LmlubmVySGVpZ2h0IC8gMiAtIGNTaXplIC8gMiArICdweCc7XG4gICAgZ2FtZUNhbnZhcy5zdHlsZS5sZWZ0ID0gd2luZG93LmlubmVyV2lkdGggLyAyIC0gY1NpemUgLyAyICsgJ3B4JztcbiAgICBnYW1lQ2FudmFzLnN0eWxlLmJhY2tncm91bmQgPSBjYW52YXNCYWNrZ3JvdW5kO1xuICAgIGdhbWVDYW52YXMuc3R5bGUuaW1hZ2VSZW5kZXJpbmcgPSAncGl4ZWxhdGVkJztcbn1cbmZ1bmN0aW9uIHByZXBlbmRDYW52YXMoY2FudmFzSWQsIHdpZHRoLCBoZWlnaHQsIGF1dG9SZXNpemUpIHtcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY2FudmFzLmlkID0gY2FudmFzSWQ7XG4gICAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKGNhbnZhcyk7XG4gICAgZXhwb3J0cy5nYW1lQ2FudmFzID0gZ2FtZUNhbnZhcyA9IGNhbnZhcztcbiAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIGV4cG9ydHMuY2FudmFzV2lkdGggPSBjYW52YXNXaWR0aCA9IHdpZHRoO1xuICAgIGV4cG9ydHMuY2FudmFzSGVpZ2h0ID0gY2FudmFzSGVpZ2h0ID0gaGVpZ2h0O1xuICAgIGlmIChhdXRvUmVzaXplKSB7XG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc2l6ZSgpOyB9KTtcbiAgICAgICAgcmVzaXplKCk7XG4gICAgfVxuICAgIHJldHVybiBjYW52YXM7XG59XG5mdW5jdGlvbiBzZXRDYW52YXNCYWNrZ3JvdW5kKGNvbG9yKSB7XG4gICAgY2FudmFzQmFja2dyb3VuZCA9IGNvbG9yO1xuICAgIGlmIChnYW1lQ2FudmFzKSB7XG4gICAgICAgIGdhbWVDYW52YXMuc3R5bGUuYmFja2dyb3VuZCA9IGNhbnZhc0JhY2tncm91bmQ7XG4gICAgfVxufVxuZXhwb3J0cy5zZXRDYW52YXNCYWNrZ3JvdW5kID0gc2V0Q2FudmFzQmFja2dyb3VuZDtcbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgcmV0cm9saWIgZW5naW5lLlxuICogQHBhcmFtIG9wdGlvbnNcbiAqL1xuZnVuY3Rpb24gaW5pdGlhbGl6ZShjYW52YXNJZCwgd2lkdGgsIGhlaWdodCwgYnVpbGRDYW52YXMsIGF1dG9SZXNpemUpIHtcbiAgICB3aWR0aCA9IHdpZHRoID8gd2lkdGggOiAyNTY7XG4gICAgaGVpZ2h0ID0gaGVpZ2h0ID8gaGVpZ2h0IDogMjU2O1xuICAgIGNhbnZhc0lkID0gY2FudmFzSWQgPyBjYW52YXNJZCA6ICdnYW1lY2FudmFzJztcbiAgICBpZiAoZ2FtZUNhbnZhcyA9PT0gbnVsbCAmJiBidWlsZENhbnZhcykge1xuICAgICAgICBleHBvcnRzLmdhbWVDYW52YXMgPSBnYW1lQ2FudmFzID0gcHJlcGVuZENhbnZhcyhjYW52YXNJZCwgd2lkdGgsIGhlaWdodCwgYXV0b1Jlc2l6ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGdhbWVDYW52YXMgPT09IG51bGwpIHtcbiAgICAgICAgZXhwb3J0cy5nYW1lQ2FudmFzID0gZ2FtZUNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhc0lkKTtcbiAgICB9XG4gICAgKDAsIGZvbnRfMS5Mb2FkRGVmYXVsdEZvbnRzKSgpO1xufVxuZXhwb3J0cy5pbml0aWFsaXplID0gaW5pdGlhbGl6ZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9yZXRyb2xpYi50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==