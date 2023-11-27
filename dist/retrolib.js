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
exports.drawText = exports.textWidth = exports.textHeight = exports.codepageAndBitmaptoJSON = exports.imageToBase64 = exports.hextToRgba = exports.rgbaToHex = exports.colorLerp = exports.fonts = exports.loadDefaultFonts = exports.loadFromJSON = void 0;
var FontData_1 = __importDefault(__webpack_require__(/*! ./FontData */ "./src/modules/FontData.ts"));
var default_json_1 = __importDefault(__webpack_require__(/*! ./fonts/default.json */ "./src/modules/fonts/default.json"));
var codepage_1 = __importDefault(__webpack_require__(/*! ./codepage */ "./src/modules/codepage.ts"));
var images_1 = __webpack_require__(/*! ./images */ "./src/modules/images.ts");
var fontCanvas = null;
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
 */
function drawText(ctx, x, y, text, color, font /*, effects: object*/) {
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
    (0, font_1.loadDefaultFonts)();
}
exports.initialize = initialize;
exports["default"] = {};


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0cm9saWIuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7QUNWYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxrQkFBZTs7Ozs7Ozs7Ozs7QUNQRjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxrQkFBZTs7Ozs7Ozs7Ozs7QUNWRjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxrQkFBZTs7Ozs7Ozs7Ozs7QUNWRjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxrQkFBZTs7Ozs7Ozs7Ozs7QUNWRjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGtCQUFlOzs7Ozs7Ozs7OztBQzkvQ0Y7QUFDYjtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxnQkFBZ0IsR0FBRyxpQkFBaUIsR0FBRyxrQkFBa0IsR0FBRywrQkFBK0IsR0FBRyxxQkFBcUIsR0FBRyxrQkFBa0IsR0FBRyxpQkFBaUIsR0FBRyxpQkFBaUIsR0FBRyxhQUFhLEdBQUcsd0JBQXdCLEdBQUcsb0JBQW9CO0FBQ2xQLGlDQUFpQyxtQkFBTyxDQUFDLDZDQUFZO0FBQ3JELHFDQUFxQyxtQkFBTyxDQUFDLDhEQUFzQjtBQUNuRSxpQ0FBaUMsbUJBQU8sQ0FBQyw2Q0FBWTtBQUNyRCxlQUFlLG1CQUFPLENBQUMseUNBQVU7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QscUJBQXFCO0FBQ3pFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUU7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGNBQWM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxjQUFjO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4Qiw4QkFBOEI7QUFDOUIsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQSx3RUFBd0UsK0JBQStCO0FBQ3ZHO0FBQ0Esa0RBQWtELEtBQUssNkJBQTZCO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFlBQVk7QUFDM0M7QUFDQTtBQUNBLHNCQUFzQixtRUFBbUU7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0UsZ0RBQWdEO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isb0JBQW9CO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFdBQVc7QUFDdEIsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsaUNBQWlDO0FBQzlGO0FBQ0E7QUFDQSw0REFBNEQsbURBQW1EO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG9CQUFvQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixpQkFBaUI7QUFDMUMsNkJBQTZCLGdCQUFnQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7Ozs7Ozs7Ozs7QUNoV2E7QUFDYjtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCw2QkFBNkIsR0FBRyxrQkFBa0IsR0FBRyxvQkFBb0IsR0FBRyxrQkFBa0IsR0FBRyxpQkFBaUIsR0FBRyxnQkFBZ0IsR0FBRyxpQkFBaUIsR0FBRyxpQkFBaUIsR0FBRyxxQkFBcUI7QUFDck0sd0NBQXdDLG1CQUFPLENBQUMsMkRBQW1CO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsOERBQThEO0FBQ2pHO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsMkNBQTJDLHlCQUF5QjtBQUNwRTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0EsMkNBQTJDLHlCQUF5QjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsaUNBQWlDO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBLFNBQVMsdUJBQXVCLDREQUE0RCxJQUFJO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7Ozs7Ozs7Ozs7QUMxSVI7QUFDYjtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCw2QkFBNkIsR0FBRyxpQkFBaUIsR0FBRyxnQkFBZ0IsR0FBRyxpQkFBaUIsR0FBRyxpQkFBaUIsR0FBRyxxQkFBcUI7QUFDcEksd0NBQXdDLG1CQUFPLENBQUMsMkRBQW1CO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGdFQUFnRTtBQUM3RjtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsNERBQTREO0FBQy9GO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0Esd0NBQXdDLHlCQUF5QjtBQUNqRTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCx5QkFBeUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQ7QUFDM0Q7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYSxJQUFJO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxxQkFBcUI7Ozs7Ozs7Ozs7O0FDNUZSO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHVCQUF1QixHQUFHLHFCQUFxQixHQUFHLGdCQUFnQixHQUFHLG1CQUFtQixHQUFHLDRCQUE0QjtBQUN2SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQSxnREFBZ0QscUJBQXFCO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxnREFBZ0QscUJBQXFCO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0EsS0FBSztBQUNMO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0EsS0FBSztBQUNMO0FBQ0EsNEJBQTRCOzs7Ozs7Ozs7OztBQzNDZjtBQUNiO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELDJCQUEyQixHQUFHLGlCQUFpQixHQUFHLGNBQWMsR0FBRyxlQUFlLEdBQUcsZUFBZSxHQUFHLGtCQUFrQjtBQUN6SCxzQ0FBc0MsbUJBQU8sQ0FBQyx1REFBaUI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsOERBQThEO0FBQzNGO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywwREFBMEQ7QUFDN0Y7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSx3Q0FBd0MseUJBQXlCO0FBQ2pFO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELHlCQUF5QjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0U7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRDtBQUMzRDtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhLElBQUk7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGtCQUFrQjs7Ozs7Ozs7Ozs7QUM1Rkw7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0NBQW9DO0FBQ25EO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDBDQUEwQyw0QkFBNEI7QUFDdEUsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG9CQUFvQixHQUFHLG1CQUFtQixHQUFHLGtCQUFrQixHQUFHLDJCQUEyQixHQUFHLGtCQUFrQixHQUFHLGFBQWEsR0FBRyxXQUFXLEdBQUcsY0FBYyxHQUFHLFlBQVksR0FBRyxjQUFjO0FBQ2pNLGFBQWEsbUJBQU8sQ0FBQyw2Q0FBZ0I7QUFDckMsY0FBYyxnQkFBZ0IsbUJBQU8sQ0FBQyxpREFBa0I7QUFDeEQsWUFBWSxnQkFBZ0IsbUJBQU8sQ0FBQyw2Q0FBZ0I7QUFDcEQsY0FBYyxnQkFBZ0IsbUJBQU8sQ0FBQyxpREFBa0I7QUFDeEQsV0FBVyxnQkFBZ0IsbUJBQU8sQ0FBQywyQ0FBZTtBQUNsRCxhQUFhLGdCQUFnQixtQkFBTyxDQUFDLCtDQUFpQjtBQUN0RDtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtCQUFrQjtBQUN0QjtBQUNBO0FBQ0EsSUFBSSxtQkFBbUI7QUFDdkIsSUFBSSxvQkFBb0I7QUFDeEI7QUFDQSxpREFBaUQsa0JBQWtCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0JBQWtCO0FBQzFCO0FBQ0E7QUFDQSxRQUFRLGtCQUFrQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsa0JBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0ZmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXRyb2xpYi93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vcmV0cm9saWIvLi9zcmMvbW9kdWxlcy9Gb250RGF0YS50cyIsIndlYnBhY2s6Ly9yZXRyb2xpYi8uL3NyYy9tb2R1bGVzL0ltYWdlRGVmaW5pdGlvbi50cyIsIndlYnBhY2s6Ly9yZXRyb2xpYi8uL3NyYy9tb2R1bGVzL011c2ljRGVmaW5pdGlvbi50cyIsIndlYnBhY2s6Ly9yZXRyb2xpYi8uL3NyYy9tb2R1bGVzL1NmeERlZmluaXRpb24udHMiLCJ3ZWJwYWNrOi8vcmV0cm9saWIvLi9zcmMvbW9kdWxlcy9jb2RlcGFnZS50cyIsIndlYnBhY2s6Ly9yZXRyb2xpYi8uL3NyYy9tb2R1bGVzL2ZvbnQudHMiLCJ3ZWJwYWNrOi8vcmV0cm9saWIvLi9zcmMvbW9kdWxlcy9pbWFnZXMudHMiLCJ3ZWJwYWNrOi8vcmV0cm9saWIvLi9zcmMvbW9kdWxlcy9tdXNpYy50cyIsIndlYnBhY2s6Ly9yZXRyb2xpYi8uL3NyYy9tb2R1bGVzL3NjZW5lcy50cyIsIndlYnBhY2s6Ly9yZXRyb2xpYi8uL3NyYy9tb2R1bGVzL3NmeC50cyIsIndlYnBhY2s6Ly9yZXRyb2xpYi8uL3NyYy9yZXRyb2xpYi50cyIsIndlYnBhY2s6Ly9yZXRyb2xpYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXRyb2xpYi93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3JldHJvbGliL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXRyb2xpYi93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicmV0cm9saWJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wicmV0cm9saWJcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCAoKSA9PiB7XG5yZXR1cm4gIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgRm9udERhdGEgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRm9udERhdGEoKSB7XG4gICAgfVxuICAgIHJldHVybiBGb250RGF0YTtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBGb250RGF0YTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEltYWdlRGVmaW5pdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBJbWFnZURlZmluaXRpb24oKSB7XG4gICAgfVxuICAgIEltYWdlRGVmaW5pdGlvbi5mcm9tSlNPTiA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBJbWFnZURlZmluaXRpb24oKSwganNvbik7XG4gICAgfTtcbiAgICByZXR1cm4gSW1hZ2VEZWZpbml0aW9uO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEltYWdlRGVmaW5pdGlvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE11c2ljRGVmaW5pdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNdXNpY0RlZmluaXRpb24oKSB7XG4gICAgfVxuICAgIE11c2ljRGVmaW5pdGlvbi5mcm9tSlNPTiA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBNdXNpY0RlZmluaXRpb24oKSwganNvbik7XG4gICAgfTtcbiAgICByZXR1cm4gTXVzaWNEZWZpbml0aW9uO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IE11c2ljRGVmaW5pdGlvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFNmeERlZmluaXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2Z4RGVmaW5pdGlvbigpIHtcbiAgICB9XG4gICAgU2Z4RGVmaW5pdGlvbi5mcm9tSlNPTiA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBTZnhEZWZpbml0aW9uKCksIGpzb24pO1xuICAgIH07XG4gICAgcmV0dXJuIFNmeERlZmluaXRpb247XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gU2Z4RGVmaW5pdGlvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvZGVQYWdlID0gW1xuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDAsXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMDAnLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOVUxMIENIQVJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMSxcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAwMScsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNUQVJUIE9GIEhFQURJTkdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMixcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAwMicsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNUQVJUIE9GIFRFWFRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMyxcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAwMycsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkVORCBPRiBURVhUXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDQsXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMDQnLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJFTkQgT0YgVFJBTlNNSVNTSU9OXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDUsXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMDUnLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJFTlFVSVJZXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDYsXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMDYnLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBQ0tOT1dMRURHTUVOVFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA3LFxuICAgICAgICBcInN5bWJvbFwiOiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KCdcXHUwMDA3JywgMTYpKSxcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQkVMTFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA4LFxuICAgICAgICBcInN5bWJvbFwiOiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KCdcXHUwMDA4JywgMTYpKSxcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQkFDSyBTUEFDRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA5LFxuICAgICAgICBcInN5bWJvbFwiOiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KCdcXHUwMDA5JywgMTYpKSxcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiSE9SSVpPTlRBTCBUQUJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTAsXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMEEnLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMSU5FIEZFRURcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTEsXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMEInLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJWRVJUSUNBTCBUQUJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTIsXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMEMnLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJGT1JNIEZFRURcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTMsXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMEQnLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJDQVJSSUFHRSBSRVRVUk5cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTQsXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMEUnLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTSElGVCBPVVQgLyBYLU9OXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE1LFxuICAgICAgICBcInN5bWJvbFwiOiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KCdcXHUwMDBGJywgMTYpKSxcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU0hJRlQgSU4gLyBYLU9GRlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNixcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAxMCcsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRBVEEgTElORSBFU0NBUEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTcsXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMTEnLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJERVZJQ0UgQ09OVFJPTCAxIChPRlQuIFhPTilcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTgsXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMTInLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJERVZJQ0UgQ09OVFJPTCAyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE5LFxuICAgICAgICBcInN5bWJvbFwiOiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KCdcXHUwMDEzJywgMTYpKSxcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiREVWSUNFIENPTlRST0wgMyAoT0ZULiBYT0ZGKVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMCxcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAxNCcsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRFVklDRSBDT05UUk9MIDRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjEsXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMTUnLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJORUdBVElWRSBBQ0tOT1dMRURHRU1FTlRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjIsXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMTYnLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTWU5DSFJPTk9VUyBJRExFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIzLFxuICAgICAgICBcInN5bWJvbFwiOiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KCdcXHUwMDE3JywgMTYpKSxcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRU5EIE9GIFRSQU5TTUlUIEJMT0NLXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDI0LFxuICAgICAgICBcInN5bWJvbFwiOiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KCdcXHUwMDE4JywgMTYpKSxcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ0FOQ0VMXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDI1LFxuICAgICAgICBcInN5bWJvbFwiOiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KCdcXHUwMDE5JywgMTYpKSxcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRU5EIE9GIE1FRElVTVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyNixcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAxQScsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNVQlNUSVRVVEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjcsXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMUInLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJFU0NBUEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjgsXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMUMnLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJGSUxFIFNFUEFSQVRPUlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyOSxcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAxRCcsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkdST1VQIFNFUEFSQVRPUlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAzMCxcbiAgICAgICAgXCJzeW1ib2xcIjogU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCgnXFx1MDAxRScsIDE2KSksXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlJFQ09SRCBTRVBBUkFUT1JcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMzEsXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwMUYnLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJVTklUIFNFUEFSQVRPUlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAzMixcbiAgICAgICAgXCJzeW1ib2xcIjogXCIgXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNQQUNFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDMzLFxuICAgICAgICBcInN5bWJvbFwiOiBcIiFcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRVhDTEFNQVRJT04gTUFSS1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAzNCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCJcXFwiXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlFVT1RBVElPTiBNQVJLXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDM1LFxuICAgICAgICBcInN5bWJvbFwiOiBcIiNcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTlVNQkVSIFNJR05cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMzYsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiJFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJET0xMQVIgU0lHTlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAzNyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCIlXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlBFUkNFTlQgU0lHTlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAzOCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCImXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkFNUEVSU0FORFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAzOSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCInXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkFQT1NUUk9QSEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNDAsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiKFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMRUZUIFBBUkVOVEhFU0lTXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDQxLFxuICAgICAgICBcInN5bWJvbFwiOiBcIilcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUklHSFQgUEFSRU5USEVTSVNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNDIsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiKlwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBU1RFUklTS1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA0MyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCIrXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlBMVVMgU0lHTlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA0NCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCIsXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkNPTU1BXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDQ1LFxuICAgICAgICBcInN5bWJvbFwiOiBcIi1cIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiSFlQSEVOLU1JTlVTXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDQ2LFxuICAgICAgICBcInN5bWJvbFwiOiBcIi5cIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRlVMTCBTVE9QXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDQ3LFxuICAgICAgICBcInN5bWJvbFwiOiBcIi9cIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU09MSURVU1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA0OCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCIwXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRJR0lUIFpFUk9cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNDksXG4gICAgICAgIFwic3ltYm9sXCI6IFwiMVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJESUdJVCBPTkVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNTAsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiMlwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJESUdJVCBUV09cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNTEsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiM1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJESUdJVCBUSFJFRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA1MixcbiAgICAgICAgXCJzeW1ib2xcIjogXCI0XCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRJR0lUIEZPVVJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNTMsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiNVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJESUdJVCBGSVZFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDU0LFxuICAgICAgICBcInN5bWJvbFwiOiBcIjZcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRElHSVQgU0lYXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDU1LFxuICAgICAgICBcInN5bWJvbFwiOiBcIjdcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRElHSVQgU0VWRU5cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNTYsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiOFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJESUdJVCBFSUdIVFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA1NyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCI5XCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRJR0lUIE5JTkVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNTgsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiOlwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJDT0xPTlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA1OSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCI7XCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNFTUlDT0xPTlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA2MCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCI8XCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxFU1MtVEhBTiBTSUdOXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDYxLFxuICAgICAgICBcInN5bWJvbFwiOiBcIj1cIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRVFVQUxTIFNJR05cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNjIsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiPlwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJHUkVBVEVSLVRIQU4gU0lHTlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA2MyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCI/XCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlFVRVNUSU9OIE1BUktcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNjQsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiQFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJDT01NRVJDSUFMIEFUXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDY1LFxuICAgICAgICBcInN5bWJvbFwiOiBcIkFcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgQVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA2NixcbiAgICAgICAgXCJzeW1ib2xcIjogXCJCXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIEJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNjcsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiQ1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBDXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDY4LFxuICAgICAgICBcInN5bWJvbFwiOiBcIkRcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgRFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA2OSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCJFXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNzAsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiRlwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBGXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDcxLFxuICAgICAgICBcInN5bWJvbFwiOiBcIkdcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgR1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA3MixcbiAgICAgICAgXCJzeW1ib2xcIjogXCJIXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIEhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNzMsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiSVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBJXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDc0LFxuICAgICAgICBcInN5bWJvbFwiOiBcIkpcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgSlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA3NSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCJLXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIEtcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNzYsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiTFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBMXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDc3LFxuICAgICAgICBcInN5bWJvbFwiOiBcIk1cIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgTVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA3OCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCJOXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIE5cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogNzksXG4gICAgICAgIFwic3ltYm9sXCI6IFwiT1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBPXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDgwLFxuICAgICAgICBcInN5bWJvbFwiOiBcIlBcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgUFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA4MSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCJRXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIFFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogODIsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiUlwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBSXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDgzLFxuICAgICAgICBcInN5bWJvbFwiOiBcIlNcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgU1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA4NCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCJUXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIFRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogODUsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiVVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBVXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDg2LFxuICAgICAgICBcInN5bWJvbFwiOiBcIlZcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgVlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA4NyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCJXXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIFdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogODgsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiWFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBYXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDg5LFxuICAgICAgICBcInN5bWJvbFwiOiBcIllcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgWVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA5MCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCJaXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIFpcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogOTEsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiW1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMRUZUIFNRVUFSRSBCUkFDS0VUXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDkyLFxuICAgICAgICBcInN5bWJvbFwiOiBcIlwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJSRVZFUlNFIFNPTElEVVNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogOTMsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiXVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJSSUdIVCBTUVVBUkUgQlJBQ0tFVFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA5NCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCJeXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkNJUkNVTUZMRVggQUNDRU5UXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDk1LFxuICAgICAgICBcInN5bWJvbFwiOiBcIl9cIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTE9XIExJTkVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogOTYsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiYFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJHUkFWRSBBQ0NFTlRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogOTcsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiYVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgQVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiA5OCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCJiXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDk5LFxuICAgICAgICBcInN5bWJvbFwiOiBcImNcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIENcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTAwLFxuICAgICAgICBcInN5bWJvbFwiOiBcImRcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIERcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTAxLFxuICAgICAgICBcInN5bWJvbFwiOiBcImVcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTAyLFxuICAgICAgICBcInN5bWJvbFwiOiBcImZcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIEZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTAzLFxuICAgICAgICBcInN5bWJvbFwiOiBcImdcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIEdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTA0LFxuICAgICAgICBcInN5bWJvbFwiOiBcImhcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIEhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTA1LFxuICAgICAgICBcInN5bWJvbFwiOiBcImlcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIElcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTA2LFxuICAgICAgICBcInN5bWJvbFwiOiBcImpcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIEpcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTA3LFxuICAgICAgICBcInN5bWJvbFwiOiBcImtcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIEtcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTA4LFxuICAgICAgICBcInN5bWJvbFwiOiBcImxcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIExcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTA5LFxuICAgICAgICBcInN5bWJvbFwiOiBcIm1cIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIE1cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTEwLFxuICAgICAgICBcInN5bWJvbFwiOiBcIm5cIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIE5cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTExLFxuICAgICAgICBcInN5bWJvbFwiOiBcIm9cIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIE9cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTEyLFxuICAgICAgICBcInN5bWJvbFwiOiBcInBcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIFBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTEzLFxuICAgICAgICBcInN5bWJvbFwiOiBcInFcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIFFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTE0LFxuICAgICAgICBcInN5bWJvbFwiOiBcInJcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIFJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTE1LFxuICAgICAgICBcInN5bWJvbFwiOiBcInNcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIFNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTE2LFxuICAgICAgICBcInN5bWJvbFwiOiBcInRcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIFRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTE3LFxuICAgICAgICBcInN5bWJvbFwiOiBcInVcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIFVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTE4LFxuICAgICAgICBcInN5bWJvbFwiOiBcInZcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIFZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTE5LFxuICAgICAgICBcInN5bWJvbFwiOiBcIndcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIFdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTIwLFxuICAgICAgICBcInN5bWJvbFwiOiBcInhcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIFhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTIxLFxuICAgICAgICBcInN5bWJvbFwiOiBcInlcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIFlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTIyLFxuICAgICAgICBcInN5bWJvbFwiOiBcInpcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIFpcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTIzLFxuICAgICAgICBcInN5bWJvbFwiOiBcIntcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEVGVCBDVVJMWSBCUkFDS0VUXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDEyNCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCJ8XCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlZFUlRJQ0FMIExJTkVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTI1LFxuICAgICAgICBcInN5bWJvbFwiOiBcIn1cIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUklHSFQgQ1VSTFkgQlJBQ0tFVFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMjYsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiflwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUSUxERVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMjcsXG4gICAgICAgIFwic3ltYm9sXCI6IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoJ1xcdTAwN0YnLCAxNikpLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJERUxFVEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTI4LFxuICAgICAgICBcInN5bWJvbFwiOiBcIsOHXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIEMgV0lUSCBDRURJTExBXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDEyOSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLDvFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgVSBXSVRIIERJQUVSRVNJU1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMzAsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiw6lcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIEUgV0lUSCBBQ1VURVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMzEsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiw6JcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIEEgV0lUSCBDSVJDVU1GTEVYXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDEzMixcbiAgICAgICAgXCJzeW1ib2xcIjogXCLDpFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgQSBXSVRIIERJQUVSRVNJU1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMzMsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiw6BcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIEEgV0lUSCBHUkFWRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMzQsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiw6VcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIEEgV0lUSCBSSU5HIEFCT1ZFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDEzNSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLDp1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgQyBXSVRIIENFRElMTEFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTM2LFxuICAgICAgICBcInN5bWJvbFwiOiBcIsOqXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBFIFdJVEggQ0lSQ1VNRkxFWFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxMzcsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiw6tcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIEUgV0lUSCBESUFFUkVTSVNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTM4LFxuICAgICAgICBcInN5bWJvbFwiOiBcIsOoXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBFIFdJVEggR1JBVkVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTM5LFxuICAgICAgICBcInN5bWJvbFwiOiBcIsOvXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBJIFdJVEggRElBRVJFU0lTXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE0MCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLDrlwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgSSBXSVRIIENJUkNVTUZMRVhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTQxLFxuICAgICAgICBcInN5bWJvbFwiOiBcIsOsXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBJIFdJVEggR1JBVkVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTQyLFxuICAgICAgICBcInN5bWJvbFwiOiBcIsOEXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIEEgV0lUSCBESUFFUkVTSVNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTQzLFxuICAgICAgICBcInN5bWJvbFwiOiBcIsOFXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIEEgV0lUSCBSSU5HIEFCT1ZFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE0NCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLDiVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBFIFdJVEggQUNVVEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTQ1LFxuICAgICAgICBcInN5bWJvbFwiOiBcIsOmXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBBRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNDYsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiw4ZcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gQ0FQSVRBTCBMRVRURVIgQUVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTQ3LFxuICAgICAgICBcInN5bWJvbFwiOiBcIsO0XCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBPIFdJVEggQ0lSQ1VNRkxFWFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNDgsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiw7ZcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIE8gV0lUSCBESUFFUkVTSVNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTQ5LFxuICAgICAgICBcInN5bWJvbFwiOiBcIsOyXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBPIFdJVEggR1JBVkVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTUwLFxuICAgICAgICBcInN5bWJvbFwiOiBcIsO7XCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIFNNQUxMIExFVFRFUiBVIFdJVEggQ0lSQ1VNRkxFWFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNTEsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiw7lcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIFUgV0lUSCBHUkFWRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNTIsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiw79cIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIFkgV0lUSCBESUFFUkVTSVNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTUzLFxuICAgICAgICBcInN5bWJvbFwiOiBcIsOWXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIE8gV0lUSCBESUFFUkVTSVNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTU0LFxuICAgICAgICBcInN5bWJvbFwiOiBcIsOcXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxBVElOIENBUElUQUwgTEVUVEVSIFUgV0lUSCBESUFFUkVTSVNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTU1LFxuICAgICAgICBcInN5bWJvbFwiOiBcIsKiXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkNFTlQgU0lHTlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNTYsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiwqNcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUE9VTkQgU0lHTlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNTcsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiwqVcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiWUVOIFNJR05cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTU4LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKCp1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJQRVNFVEEgU0lHTlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNTksXG4gICAgICAgIFwic3ltYm9sXCI6IFwixpJcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEFUSU4gU01BTEwgTEVUVEVSIEYgV0lUSCBIT09LXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE2MCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLDoVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgQSBXSVRIIEFDVVRFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE2MSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLDrVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgSSBXSVRIIEFDVVRFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE2MixcbiAgICAgICAgXCJzeW1ib2xcIjogXCLDs1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgTyBXSVRIIEFDVVRFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE2MyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLDulwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgVSBXSVRIIEFDVVRFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE2NCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLDsVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgTiBXSVRIIFRJTERFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE2NSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLDkVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBDQVBJVEFMIExFVFRFUiBOIFdJVEggVElMREVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTY2LFxuICAgICAgICBcInN5bWJvbFwiOiBcIsKqXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkZFTUlOSU5FIE9SRElOQUwgSU5ESUNBVE9SXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE2NyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLCulwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJNQVNDVUxJTkUgT1JESU5BTCBJTkRJQ0FUT1JcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTY4LFxuICAgICAgICBcInN5bWJvbFwiOiBcIsK/XCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIklOVkVSVEVEIFFVRVNUSU9OIE1BUktcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTY5LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKMkFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJSRVZFUlNFRCBOT1QgU0lHTlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNzAsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiwqxcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTk9UIFNJR05cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTcxLFxuICAgICAgICBcInN5bWJvbFwiOiBcIsK9XCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlZVTEdBUiBGUkFDVElPTiBPTkUgSEFMRlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNzIsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiwrxcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVlVMR0FSIEZSQUNUSU9OIE9ORSBRVUFSVEVSXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE3MyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLCoVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJJTlZFUlRFRCBFWENMQU1BVElPTiBNQVJLXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE3NCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLCq1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMRUZULVBPSU5USU5HIERPVUJMRSBBTkdMRSBRVU9UQVRJT04gTUFSS1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxNzUsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiwrtcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUklHSFQtUE9JTlRJTkcgRE9VQkxFIEFOR0xFIFFVT1RBVElPTiBNQVJLXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE3NixcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilpFcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTElHSFQgU0hBREVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTc3LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKWklwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJNRURJVU0gU0hBREVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTc4LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKWk1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJEQVJLIFNIQURFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE3OSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilIJcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIExJR0hUIFZFUlRJQ0FMXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE4MCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilKRcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIExJR0hUIFZFUlRJQ0FMIEFORCBMRUZUXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE4MSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilaFcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIFZFUlRJQ0FMIFNJTkdMRSBBTkQgTEVGVCBET1VCTEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTgyLFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKVolwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgVkVSVElDQUwgRE9VQkxFIEFORCBMRUZUIFNJTkdMRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxODMsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4pWWXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBET1dOIERPVUJMRSBBTkQgTEVGVCBTSU5HTEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTg0LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKVlVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgRE9XTiBTSU5HTEUgQU5EIExFRlQgRE9VQkxFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE4NSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilaNcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIERPVUJMRSBWRVJUSUNBTCBBTkQgTEVGVFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxODYsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4pWRXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBET1VCTEUgVkVSVElDQUxcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTg3LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKVl1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgRE9VQkxFIERPV04gQU5EIExFRlRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTg4LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKVnVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgRE9VQkxFIFVQIEFORCBMRUZUXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE4OSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilZxcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIFVQIERPVUJMRSBBTkQgTEVGVCBTSU5HTEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMTkwLFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKVm1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgVVAgU0lOR0xFIEFORCBMRUZUIERPVUJMRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxOTEsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4pSQXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBMSUdIVCBET1dOIEFORCBMRUZUXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE5MixcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilJRcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIExJR0hUIFVQIEFORCBSSUdIVFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxOTMsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4pS0XCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBMSUdIVCBVUCBBTkQgSE9SSVpPTlRBTFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxOTQsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4pSsXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBMSUdIVCBET1dOIEFORCBIT1JJWk9OVEFMXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE5NSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilJxcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIExJR0hUIFZFUlRJQ0FMIEFORCBSSUdIVFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAxOTYsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4pSAXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBMSUdIVCBIT1JJWk9OVEFMXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE5NyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilLxcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIExJR0hUIFZFUlRJQ0FMIEFORCBIT1JJWk9OVEFMXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE5OCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilZ5cIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIFZFUlRJQ0FMIFNJTkdMRSBBTkQgUklHSFQgRE9VQkxFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDE5OSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilZ9cIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIFZFUlRJQ0FMIERPVUJMRSBBTkQgUklHSFQgU0lOR0xFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIwMCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilZpcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIERPVUJMRSBVUCBBTkQgUklHSFRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjAxLFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKVlFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgRE9VQkxFIERPV04gQU5EIFJJR0hUXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIwMixcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilalcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIERPVUJMRSBVUCBBTkQgSE9SSVpPTlRBTFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMDMsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4pWmXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBET1VCTEUgRE9XTiBBTkQgSE9SSVpPTlRBTFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMDQsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4pWgXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBET1VCTEUgVkVSVElDQUwgQU5EIFJJR0hUXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIwNSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilZBcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIERPVUJMRSBIT1JJWk9OVEFMXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIwNixcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilaxcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIERPVUJMRSBWRVJUSUNBTCBBTkQgSE9SSVpPTlRBTFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMDcsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4pWnXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBVUCBTSU5HTEUgQU5EIEhPUklaT05UQUwgRE9VQkxFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIwOCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilahcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIFVQIERPVUJMRSBBTkQgSE9SSVpPTlRBTCBTSU5HTEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjA5LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKVpFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgRE9XTiBTSU5HTEUgQU5EIEhPUklaT05UQUwgRE9VQkxFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIxMCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilaVcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIERPV04gRE9VQkxFIEFORCBIT1JJWk9OVEFMIFNJTkdMRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMTEsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4pWZXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBVUCBET1VCTEUgQU5EIFJJR0hUIFNJTkdMRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMTIsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4pWYXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBVUCBTSU5HTEUgQU5EIFJJR0hUIERPVUJMRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMTMsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4pWSXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBET1dOIFNJTkdMRSBBTkQgUklHSFQgRE9VQkxFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIxNCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilZNcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIERPV04gRE9VQkxFIEFORCBSSUdIVCBTSU5HTEVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjE1LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKVq1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1ggRFJBV0lOR1MgVkVSVElDQUwgRE9VQkxFIEFORCBIT1JJWk9OVEFMIFNJTkdMRVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMTYsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4pWqXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJPWCBEUkFXSU5HUyBWRVJUSUNBTCBTSU5HTEUgQU5EIEhPUklaT05UQUwgRE9VQkxFXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIxNyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilJhcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIExJR0hUIFVQIEFORCBMRUZUXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIxOCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilIxcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQk9YIERSQVdJTkdTIExJR0hUIERPV04gQU5EIFJJR0hUXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIxOSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLilohcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRlVMTCBCTE9DS1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMjAsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4paEXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxPV0VSIEhBTEYgQkxPQ0tcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjIxLFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKWjFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMRUZUIEhBTEYgQkxPQ0tcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjIyLFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKWkFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJSSUdIVCBIQUxGIEJMT0NLXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIyMyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLiloBcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVVBQRVIgSEFMRiBCTE9DS1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMjQsXG4gICAgICAgIFwic3ltYm9sXCI6IFwizrFcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiR1JFRUsgU01BTEwgTEVUVEVSIEFMUEhBXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIyNSxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLDn1wiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMQVRJTiBTTUFMTCBMRVRURVIgU0hBUlAgU1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMjYsXG4gICAgICAgIFwic3ltYm9sXCI6IFwizpNcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiR1JFRUsgQ0FQSVRBTCBMRVRURVIgR0FNTUFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjI3LFxuICAgICAgICBcInN5bWJvbFwiOiBcIs+AXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkdSRUVLIFNNQUxMIExFVFRFUiBQSVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMjgsXG4gICAgICAgIFwic3ltYm9sXCI6IFwizqNcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiR1JFRUsgQ0FQSVRBTCBMRVRURVIgU0lHTUFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjI5LFxuICAgICAgICBcInN5bWJvbFwiOiBcIs+DXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkdSRUVLIFNNQUxMIExFVFRFUiBTSUdNQVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMzAsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiwrVcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTUlDUk8gU0lHTlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMzEsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiz4RcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiR1JFRUsgU01BTEwgTEVUVEVSIFRBVVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMzIsXG4gICAgICAgIFwic3ltYm9sXCI6IFwizqZcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiR1JFRUsgQ0FQSVRBTCBMRVRURVIgUEhJXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIzMyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLOmFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJHUkVFSyBDQVBJVEFMIExFVFRFUiBUSEVUQVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMzQsXG4gICAgICAgIFwic3ltYm9sXCI6IFwizqlcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiR1JFRUsgQ0FQSVRBTCBMRVRURVIgT01FR0FcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjM1LFxuICAgICAgICBcInN5bWJvbFwiOiBcIs60XCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkdSRUVLIFNNQUxMIExFVFRFUiBERUxUQVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMzYsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4oieXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIklORklOSVRZXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIzNyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLPhlwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJHUkVFSyBTTUFMTCBMRVRURVIgUEhJXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDIzOCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLOtVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJHUkVFSyBTTUFMTCBMRVRURVIgRVBTSUxPTlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyMzksXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4oipXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIklOVEVSU0VDVElPTlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyNDAsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4omhXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIklERU5USUNBTCBUT1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyNDEsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiwrFcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUExVUy1NSU5VUyBTSUdOXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDI0MixcbiAgICAgICAgXCJzeW1ib2xcIjogXCLiiaVcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiR1JFQVRFUi1USEFOIE9SIEVRVUFMIFRPXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDI0MyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLiiaRcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTEVTUy1USEFOIE9SIEVRVUFMIFRPXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDI0NCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLijKBcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVE9QIEhBTEYgSU5URUdSQUxcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjQ1LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKMoVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCT1RUT00gSEFMRiBJTlRFR1JBTFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyNDYsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiw7dcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRElWSVNJT04gU0lHTlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyNDcsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4omIXCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkFMTU9TVCBFUVVBTCBUT1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyNDgsXG4gICAgICAgIFwic3ltYm9sXCI6IFwiwrBcIixcbiAgICAgICAgXCJyZWN0XCI6IHsgeDogMCwgeTogMCwgdzogMCwgaDogMCB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiREVHUkVFIFNJR05cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjQ5LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKImVwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCVUxMRVQgT1BFUkFUT1JcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjUwLFxuICAgICAgICBcInN5bWJvbFwiOiBcIsK3XCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk1JRERMRSBET1RcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjUxLFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKImlwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTUVVBUkUgUk9PVFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29kZW51bWJlclwiOiAyNTIsXG4gICAgICAgIFwic3ltYm9sXCI6IFwi4oG/XCIsXG4gICAgICAgIFwicmVjdFwiOiB7IHg6IDAsIHk6IDAsIHc6IDAsIGg6IDAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNVUEVSU0NSSVBUIExBVElOIFNNQUxMIExFVFRFUiBOXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb2RlbnVtYmVyXCI6IDI1MyxcbiAgICAgICAgXCJzeW1ib2xcIjogXCLCslwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTVVBFUlNDUklQVCBUV09cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvZGVudW1iZXJcIjogMjU0LFxuICAgICAgICBcInN5bWJvbFwiOiBcIuKWoFwiLFxuICAgICAgICBcInJlY3RcIjogeyB4OiAwLCB5OiAwLCB3OiAwLCBoOiAwIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCTEFDSyBTUVVBUkVcIlxuICAgIH1cbl07XG5leHBvcnRzLmRlZmF1bHQgPSBjb2RlUGFnZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kcmF3VGV4dCA9IGV4cG9ydHMudGV4dFdpZHRoID0gZXhwb3J0cy50ZXh0SGVpZ2h0ID0gZXhwb3J0cy5jb2RlcGFnZUFuZEJpdG1hcHRvSlNPTiA9IGV4cG9ydHMuaW1hZ2VUb0Jhc2U2NCA9IGV4cG9ydHMuaGV4dFRvUmdiYSA9IGV4cG9ydHMucmdiYVRvSGV4ID0gZXhwb3J0cy5jb2xvckxlcnAgPSBleHBvcnRzLmZvbnRzID0gZXhwb3J0cy5sb2FkRGVmYXVsdEZvbnRzID0gZXhwb3J0cy5sb2FkRnJvbUpTT04gPSB2b2lkIDA7XG52YXIgRm9udERhdGFfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Gb250RGF0YVwiKSk7XG52YXIgZGVmYXVsdF9qc29uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vZm9udHMvZGVmYXVsdC5qc29uXCIpKTtcbnZhciBjb2RlcGFnZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvZGVwYWdlXCIpKTtcbnZhciBpbWFnZXNfMSA9IHJlcXVpcmUoXCIuL2ltYWdlc1wiKTtcbnZhciBmb250Q2FudmFzID0gbnVsbDtcbnZhciBmb250TGlzdCA9IFtdO1xuZnVuY3Rpb24gbG9hZERlZmF1bHRGb250cygpIHtcbiAgICB2YXIgbG9hZGVkRm9udCA9IGxvYWRGcm9tSlNPTihkZWZhdWx0X2pzb25fMS5kZWZhdWx0KTtcbiAgICBpZiAobG9hZGVkRm9udCkge1xuICAgICAgICBmb250TGlzdC5wdXNoKGxvYWRlZEZvbnQpO1xuICAgIH1cbn1cbmV4cG9ydHMubG9hZERlZmF1bHRGb250cyA9IGxvYWREZWZhdWx0Rm9udHM7XG5mdW5jdGlvbiBsb2FkRnJvbUpTT04oZm9udEpzb24pIHtcbiAgICB0cnkge1xuICAgICAgICB2YXIgZm9udERhdGEgPSBPYmplY3QuYXNzaWduKG5ldyBGb250RGF0YV8xLmRlZmF1bHQoKSwgZm9udEpzb24pO1xuICAgICAgICBmb250RGF0YS5pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBmb250RGF0YS5pbWFnZS5zcmMgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCcgKyBmb250RGF0YS5pbWFnZWRhdGE7XG4gICAgICAgIHJldHVybiBmb250RGF0YTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUpO1xuICAgIH1cbn1cbmV4cG9ydHMubG9hZEZyb21KU09OID0gbG9hZEZyb21KU09OO1xuZnVuY3Rpb24gZm9udHMoKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKGZvbnRMaXN0KS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgbG9hZERlZmF1bHRGb250cygpO1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZm9udExpc3QpLm1hcChmdW5jdGlvbiAobSkgeyByZXR1cm4gZm9udExpc3RbbV07IH0pO1xufVxuZXhwb3J0cy5mb250cyA9IGZvbnRzO1xuZnVuY3Rpb24gaGV4dFRvUmdiYShoZXgpIHtcbiAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gNykge1xuICAgICAgICBoZXggKz0gJ2ZmJztcbiAgICB9XG4gICAgZWxzZSBpZiAoaGV4Lmxlbmd0aCA9PT0gOCkge1xuICAgICAgICBoZXggKz0gJzAnO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xuICAgIHJldHVybiByZXN1bHQgPyB7XG4gICAgICAgIHI6IHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpLFxuICAgICAgICBnOiBwYXJzZUludChyZXN1bHRbMl0sIDE2KSxcbiAgICAgICAgYjogcGFyc2VJbnQocmVzdWx0WzNdLCAxNiksXG4gICAgICAgIGE6IHBhcnNlSW50KHJlc3VsdFs0XSwgMTYpXG4gICAgfSA6IG51bGw7XG59XG5leHBvcnRzLmhleHRUb1JnYmEgPSBoZXh0VG9SZ2JhO1xuZnVuY3Rpb24gcmdiYVRvSGV4KHJnYikge1xuICAgIHZhciByID0gcmdiLnIudG9TdHJpbmcoMTYpO1xuICAgIHZhciBnID0gcmdiLmcudG9TdHJpbmcoMTYpO1xuICAgIHZhciBiID0gcmdiLmIudG9TdHJpbmcoMTYpO1xuICAgIHZhciBhID0gcmdiLmEudG9TdHJpbmcoMTYpO1xuICAgIHIgPSByLmxlbmd0aCA9PT0gMSA/ICcwJyArIHIgOiByO1xuICAgIGcgPSBnLmxlbmd0aCA9PT0gMSA/ICcwJyArIGcgOiBnO1xuICAgIGIgPSBiLmxlbmd0aCA9PT0gMSA/ICcwJyArIGIgOiBiO1xuICAgIGEgPSBhLmxlbmd0aCA9PT0gMSA/ICcwJyArIGEgOiBhO1xuICAgIHJldHVybiBcIiNcIi5jb25jYXQocikuY29uY2F0KGcpLmNvbmNhdChiKS5jb25jYXQoYSk7XG59XG5leHBvcnRzLnJnYmFUb0hleCA9IHJnYmFUb0hleDtcbmZ1bmN0aW9uIGNvbG9yTGVycChjb2xvcjEsIGNvbG9yMiwgdCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHI6IE1hdGguZmxvb3IoY29sb3IxLnIgKyAoY29sb3IyLnIgLSBjb2xvcjEucikgKiB0KSxcbiAgICAgICAgZzogTWF0aC5mbG9vcihjb2xvcjEuZyArIChjb2xvcjIuZyAtIGNvbG9yMS5nKSAqIHQpLFxuICAgICAgICBiOiBNYXRoLmZsb29yKGNvbG9yMS5iICsgKGNvbG9yMi5iIC0gY29sb3IxLmIpICogdCksXG4gICAgICAgIGE6IGNvbG9yMS5hXG4gICAgfTtcbn1cbmV4cG9ydHMuY29sb3JMZXJwID0gY29sb3JMZXJwO1xuZnVuY3Rpb24gaW1hZ2VUb0Jhc2U2NChpbWcsIG91dHB1dEZvcm1hdCkge1xuICAgIG91dHB1dEZvcm1hdCA9IG91dHB1dEZvcm1hdCA/IG91dHB1dEZvcm1hdCA6ICdpbWFnZS9wbmcnO1xuICAgIHRyeSB7XG4gICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgdmFyIGNvbnR4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0O1xuICAgICAgICBjYW52YXMud2lkdGggPSBpbWcud2lkdGg7XG4gICAgICAgIGNvbnR4LmRyYXdJbWFnZShpbWcsIDAsIDApO1xuICAgICAgICB2YXIgZGF0YSA9IGNhbnZhcy50b0RhdGFVUkwob3V0cHV0Rm9ybWF0KTtcbiAgICAgICAgdmFyIGluZGV4ID0gZGF0YS5pbmRleE9mKCc7YmFzZTY0LCcpICsgJztiYXNlNjQsJy5sZW5ndGg7XG4gICAgICAgIHJldHVybiBkYXRhLnNsaWNlKGluZGV4KTtcbiAgICB9XG4gICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Nhbm5vdCBkbyB0aGlzIG91dHNpZGUgb2YgdGhlIERPTSB5ZXQuJyk7XG4gICAgICAgIC8qXG4gICAgICAgIGNvbnN0IGNhbnZhczogQ2FudmFzID0gY3JlYXRlQ2FudmFzKGltZy53aWR0aCwgaW1nLmhlaWdodClcbiAgICAgICAgY29uc3QgY29udHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGltZy5oZWlnaHRcbiAgICAgICAgY2FudmFzLndpZHRoID0gaW1nLndpZHRoXG4gICAgICAgIGNvbnR4LmRyYXdJbWFnZShpbWcsIDAsIDApXG4gICAgICAgIGNvbnN0IGRhdGEgPSBjYW52YXMudG9EYXRhVVJMKG91dHB1dEZvcm1hdClcbiAgICAgICAgY29uc3QgaW5kZXggPSBkYXRhLmluZGV4T2YoJztiYXNlNjQsJykgKyAnO2Jhc2U2NCwnLmxlbmd0aFxuICAgICAgICByZXR1cm4gZGF0YS5zbGljZShpbmRleCkqL1xuICAgIH1cbn1cbmV4cG9ydHMuaW1hZ2VUb0Jhc2U2NCA9IGltYWdlVG9CYXNlNjQ7XG4vKipcbiAqIEdldCBiYXNlNjQgaW1hZ2UgZGF0YSBhbmQgYnVpbGQgYSBwcmVjb21waWxlZCBmb250IEpTT04gb2JqZWN0LlxuICogQHBhcmFtIGltYWdlTmFtZVxuICogQHBhcmFtIG1heF95XG4gKiBAcGFyYW0gY3cgQ2hhcmFjdGVyIHdpZHRoLlxuICogQHBhcmFtIGNoIENoYXJhY3RlciBoZWlnaHQuXG4gKiBAcmV0dXJuc1xuICovXG5mdW5jdGlvbiBjb2RlcGFnZUFuZEJpdG1hcHRvSlNPTihpbWFnZU5hbWUsIG1heF95LCBjdywgY2gpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHN4ID0gMDsgLy8gU291cmNlIFhcbiAgICAgICAgICAgIHZhciBzeSA9IDA7IC8vIFNvdXJjZSBZXG4gICAgICAgICAgICBjdyA9IGN3ID8gY3cgOiA5OyAvLyBDaGFyYWN0ZXIgV2lkdGhcbiAgICAgICAgICAgIGNoID0gY2ggPyBjaCA6IDE2OyAvLyBDaGFyYWN0ZXIgSGVpZ2h0XG4gICAgICAgICAgICB2YXIgY29kZXBhZ2UgPSBbXTtcbiAgICAgICAgICAgIHZhciBpbWFnZWRhdGEgPSBudWxsO1xuICAgICAgICAgICAgdmFyIGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBpbWFnZWRhdGEgPSBpbWFnZVRvQmFzZTY0KCgwLCBpbWFnZXNfMS5nZXRJbWFnZSkoaW1hZ2VOYW1lKSk7XG4gICAgICAgICAgICBpbWFnZS5zcmMgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCcgKyBpbWFnZWRhdGE7XG4gICAgICAgICAgICBtYXhfeSA9IG1heF95ID8gbWF4X3kgOiBpbWFnZS5oZWlnaHQ7XG4gICAgICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChjb2RlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGVpdGVtID0gY29kZXBhZ2VfMS5kZWZhdWx0LmZpbHRlcihmdW5jdGlvbiAoZikgeyByZXR1cm4gZi5jb2RlbnVtYmVyID09PSBjb2RlOyB9KTtcbiAgICAgICAgICAgICAgICBpZiAoY29kZWl0ZW0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb2RlaXRlbVswXS5yZWN0ID0gdW5kZWZpbmVkOyAvLyB7IHg6IHN4LCB5OiBzeSwgdzogY3csIGg6IGNoIH0gLy9UT0RPOiBNYWtlIHRoaXMgYSBwYXJhbWV0ZXIgdG8gY29udHJvbCB3aGV0aGVyIHdlIGF1dG8tZ2VuZXJhdGUgcmVjdHNcbiAgICAgICAgICAgICAgICAgICAgY29kZXBhZ2UucHVzaChjb2RlaXRlbVswXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN4ICs9IGN3O1xuICAgICAgICAgICAgICAgIGlmIChzeCA+PSBpbWFnZS53aWR0aCkge1xuICAgICAgICAgICAgICAgICAgICBzeCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXhfeSAmJiBzeSArIGNoIDwgbWF4X3kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5ICs9IGNoO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzeSA+PSBpbWFnZS5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3kgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmb3IgKHZhciBjb2RlID0gMDsgY29kZSA8IDI1NjsgY29kZSsrKSB7XG4gICAgICAgICAgICAgICAgX2xvb3BfMShjb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc29sdmUoeyBjd2lkdGg6IGN3LCBjaGVpZ2h0OiBjaCwgY29kZXBhZ2U6IGNvZGVwYWdlLCBpbWFnZWRhdGE6IGltYWdlZGF0YSB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLmNvZGVwYWdlQW5kQml0bWFwdG9KU09OID0gY29kZXBhZ2VBbmRCaXRtYXB0b0pTT047XG5mdW5jdGlvbiB0ZXh0SGVpZ2h0KHRleHQsIGZvbnQpIHtcbiAgICBpZiAoIWZvbnQgJiYgZm9udExpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICBmb250ID0gZm9udExpc3RbMF07XG4gICAgfVxuICAgIGVsc2UgaWYgKCFmb250IHx8IGZvbnRMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZvbnQgcGFyYW1ldGVyIGVtcHR5IGFuZCBkZWZhdWx0IGZvbnRzIGFyZSBub3QgbG9hZGVkLicpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodGV4dC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0eHQgPSB0ZXh0LnNwbGl0KCdcXG4nKTtcbiAgICAgICAgcmV0dXJuIHR4dC5sZW5ndGggKiBmb250LmNoZWlnaHQ7XG4gICAgfVxuICAgIGNhdGNoIChfYSkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG59XG5leHBvcnRzLnRleHRIZWlnaHQgPSB0ZXh0SGVpZ2h0O1xuZnVuY3Rpb24gdGV4dFdpZHRoKHRleHQsIGZvbnQpIHtcbiAgICBpZiAoIWZvbnQgJiYgZm9udExpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICBmb250ID0gZm9udExpc3RbMF07XG4gICAgfVxuICAgIGVsc2UgaWYgKCFmb250IHx8IGZvbnRMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZvbnQgcGFyYW1ldGVyIGVtcHR5IGFuZCBkZWZhdWx0IGZvbnRzIGFyZSBub3QgbG9hZGVkLicpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodGV4dC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIHZhciBtYXh3ID0gMDtcbiAgICAgICAgdmFyIHR4dCA9IHRleHQuc3BsaXQoJ1xcbicpO1xuICAgICAgICB2YXIgX2xvb3BfMiA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgdmFyIGxpbmUgPSB0eHRbaW5kZXhdO1xuICAgICAgICAgICAgdmFyIGxpbmV3aWR0aCA9IDA7XG4gICAgICAgICAgICB2YXIgX2xvb3BfMyA9IGZ1bmN0aW9uIChjaGFyKSB7XG4gICAgICAgICAgICAgICAgdmFyIGdseXBoID0gZm9udC5jb2RlcGFnZS5maWx0ZXIoZnVuY3Rpb24gKGYpIHsgcmV0dXJuIGYuY29kZW51bWJlciA9PT0gbGluZS5jaGFyQ29kZUF0KGNoYXIpOyB9KTtcbiAgICAgICAgICAgICAgICB2YXIgcmVjdCA9IGdseXBoLmxlbmd0aCA+IDAgPyBnbHlwaFswXS5yZWN0IDogbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAocmVjdCkge1xuICAgICAgICAgICAgICAgICAgICBsaW5ld2lkdGggKz0gcmVjdC53O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGluZXdpZHRoICs9IGZvbnQuY3dpZHRoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmb3IgKHZhciBjaGFyID0gMDsgY2hhciA8IGxpbmUubGVuZ3RoOyBjaGFyKyspIHtcbiAgICAgICAgICAgICAgICBfbG9vcF8zKGNoYXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxpbmV3aWR0aCA+IG1heHcpIHtcbiAgICAgICAgICAgICAgICBtYXh3ID0gbGluZXdpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpbmRleCBpbiB0eHQpIHtcbiAgICAgICAgICAgIF9sb29wXzIoaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXh3O1xuICAgIH1cbiAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxufVxuZXhwb3J0cy50ZXh0V2lkdGggPSB0ZXh0V2lkdGg7XG4vKipcbiAqIERyYXdzIHRoZSBzcGVjaWZpZWQgdGV4dCBvbiB0aGUgY2FudmFzLlxuICpcbiAqIEBwYXJhbSB7SFRNTENhbnZhc0VsZW1lbnR9IGN0eCAyZCBjb250ZXh0IHRvIGRyYXcgdGV4dCBvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSB4IExlZnQgbG9jYXRpb24gZm9yIHRleHQuXG4gKiBAcGFyYW0ge251bWJlcn0geSBUb3AgbG9jYXRpb24gZm9yIHRleHRcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IFRleHQgdG8gYmUgZHJhd24gb24gY2FudmFzLlxuICogQHBhcmFtIHtDb2xvclJHQkF9IGNvbG9yIENvbG91ciB0byB1c2UgKHdoaXRlIGlmIHVuZGVmaW5lZCkuXG4gKiBAcGFyYW0ge0ZvbnREYXRhfSBmb250IEZvbnQgdG8gdXNlIChkZWZhdWx0IERPUyBjb2RlcGFnZSA0MzcgZm9udCBpZiB1bmRlZmluZWQpLlxuICogQHBhcmFtIHtvYmplY3R9IGVmZmVjdHMgQW55IGVmZmVjdHMgYW5kIHBhcmFtZXRlcnMgdG8gYXBwbHkgd2hlbiByZW5kZXJpbmcgdGhpcyB0ZXh0LlxuICovXG5mdW5jdGlvbiBkcmF3VGV4dChjdHgsIHgsIHksIHRleHQsIGNvbG9yLCBmb250IC8qLCBlZmZlY3RzOiBvYmplY3QqLykge1xuICAgIGlmICh0eXBlb2YgY29sb3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbG9yID0gaGV4dFRvUmdiYShjb2xvcik7XG4gICAgfVxuICAgIGlmICh0ZXh0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4geyB4OiB4LCB5OiB5LCB3OiAwLCBoOiAwIH07XG4gICAgfVxuICAgIC8vZWZmZWN0cyA9IGVmZmVjdHMgPyBlZmZlY3RzIDoge31cbiAgICBpZiAoIWZvbnQgJiYgZm9udExpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICBmb250ID0gZm9udExpc3RbMF07XG4gICAgfVxuICAgIGVsc2UgaWYgKCFmb250IHx8IGZvbnRMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZvbnQgcGFyYW1ldGVyIGVtcHR5IGFuZCBkZWZhdWx0IGZvbnRzIGFyZSBub3QgbG9hZGVkLicpO1xuICAgIH1cbiAgICBpZiAoIWNvbG9yKSB7XG4gICAgICAgIGNvbG9yID0gaGV4dFRvUmdiYSgnI2ZmZmZmZmZmJyk7XG4gICAgfVxuICAgIGlmICghZm9udCB8fCAhZm9udC5jb2RlcGFnZSB8fCAhZm9udC5pbWFnZWRhdGEgfHwgIWZvbnQuaW1hZ2UgfHwgIWZvbnQuY3dpZHRoIHx8ICFmb250LmNoZWlnaHQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGZvbnQgb3IgZm9udCBub3QgbG9hZGVkLicpO1xuICAgIH1cbiAgICB2YXIgdGV4dHdpZHRoID0gdGV4dFdpZHRoKHRleHQsIGZvbnQpO1xuICAgIHZhciB0ZXh0aGVpZ2h0ID0gdGV4dEhlaWdodCh0ZXh0LCBmb250KTtcbiAgICBpZiAoIWZvbnRDYW52YXMpIHtcbiAgICAgICAgZm9udENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICBmb250Q2FudmFzLmlkID0gJ2ZvbnRDYW52YXMnO1xuICAgIH1cbiAgICBmb250Q2FudmFzLndpZHRoID0gdGV4dHdpZHRoO1xuICAgIGZvbnRDYW52YXMuaGVpZ2h0ID0gdGV4dGhlaWdodDtcbiAgICB2YXIgZm9udGN0eCA9IGZvbnRDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBmb250Y3R4LmNsZWFyUmVjdCgwLCAwLCB0ZXh0d2lkdGgsIHRleHRoZWlnaHQpO1xuICAgIHZhciBkeCA9IDA7XG4gICAgdmFyIG1heGR4ID0gMDtcbiAgICB2YXIgcm93cyA9IHRleHQuc3BsaXQoJ1xcbicpO1xuICAgIHZhciBkeSA9IDA7XG4gICAgdmFyIF9sb29wXzQgPSBmdW5jdGlvbiAocm93SW5kZXgpIHtcbiAgICAgICAgdmFyIHR4dCA9IHJvd3Nbcm93SW5kZXhdO1xuICAgICAgICB2YXIgX2xvb3BfNSA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgdmFyIGdseXBocyA9IGZvbnQuY29kZXBhZ2UuZmlsdGVyKGZ1bmN0aW9uIChmKSB7IHJldHVybiBmLnN5bWJvbCA9PT0gdHh0W2luZGV4XTsgfSk7XG4gICAgICAgICAgICB2YXIgZ2x5cGggPSBudWxsO1xuICAgICAgICAgICAgaWYgKGdseXBocy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBnbHlwaCA9IGZvbnQuY29kZXBhZ2UuZmlsdGVyKGZ1bmN0aW9uIChmKSB7IHJldHVybiBmLmNvZGVudW1iZXIgPT09IHR4dFtpbmRleF0uY2hhckNvZGVBdCgwKTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBnbHlwaCA9IGdseXBoc1swXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByZWN0ID0gZ2x5cGggPyBnbHlwaC5yZWN0IDogbnVsbDtcbiAgICAgICAgICAgIGlmIChyZWN0KSB7XG4gICAgICAgICAgICAgICAgZm9udGN0eC5kcmF3SW1hZ2UoZm9udC5pbWFnZSwgcmVjdC54LCByZWN0LnksIHJlY3QudywgcmVjdC5oLCBkeCwgZHksIHJlY3QudywgcmVjdC5oKTtcbiAgICAgICAgICAgICAgICBkeCArPSByZWN0Lnc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgZmluZGluZyB2YWx1ZSBpbiBjb2RlcGFnZSBmb3InLCB0eHRbaW5kZXhdLCBcIihcIi5jb25jYXQodHh0W2luZGV4XS5jaGFyQ29kZUF0KDApLCBcIilcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdHh0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgX2xvb3BfNShpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZHkgKz0gZm9udC5jaGVpZ2h0O1xuICAgICAgICBpZiAoZHggPiBtYXhkeCkge1xuICAgICAgICAgICAgbWF4ZHggPSBkeDtcbiAgICAgICAgfVxuICAgICAgICBkeCA9IDA7XG4gICAgfTtcbiAgICBmb3IgKHZhciByb3dJbmRleCBpbiByb3dzKSB7XG4gICAgICAgIF9sb29wXzQocm93SW5kZXgpO1xuICAgIH1cbiAgICB0ZXh0d2lkdGggPSBtYXhkeDtcbiAgICB2YXIgaW1hZ2VEYXRhID0gbnVsbDtcbiAgICBpZiAodGV4dHdpZHRoID4gMCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaW1hZ2VEYXRhID0gZm9udGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgdGV4dHdpZHRoLCB0ZXh0aGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBnZXR0aW5nIGltYWdlIGRhdGE6JywgdGV4dHdpZHRoLCB0ZXh0aGVpZ2h0KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcGl4ZWxzID0gaW1hZ2VEYXRhLmRhdGE7XG4gICAgICAgIGZvciAodmFyIHB5ID0gMDsgcHkgPCB0ZXh0aGVpZ2h0OyBweSsrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBweCA9IDA7IHB4IDwgdGV4dHdpZHRoOyBweCsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBpeGVsID0gZ2V0UGl4ZWxBdFJnYmEocGl4ZWxzLCBweCwgcHksIHRleHR3aWR0aCk7XG4gICAgICAgICAgICAgICAgLy8gaWYgKE9iamVjdC5rZXlzKGVmZmVjdHMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgbGV0IHNldERlZmF1bHRQaXhlbCA9IHRydWVcbiAgICAgICAgICAgICAgICAvLyAgICAgaWYgKGVmZmVjdHMuZ3JhZGllbnQgJiYgcGl4ZWwgJiYgcGl4ZWwuYSA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IHZlcnRpY2FsID0gZWZmZWN0cy5ncmFkaWVudC5ob3Jpem9udGFsID8gZmFsc2UgOiB0cnVlXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCBsZXJwVCA9IHZlcnRpY2FsID8gcHkgLyB0ZXh0aGVpZ2h0IDogcHggLyB0ZXh0d2lkdGhcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IGdyYWRpZW50Q29sb3VyOiBDb2xvclJHQkEgPSBIZXhUb1JnYmEoZWZmZWN0cy5ncmFkaWVudC5jb2xvcilcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IGxlcnBDb2xyOiBDb2xvclJHQkEgPSBDb2xvckxlcnAoY29sb3IsIGdyYWRpZW50Q29sb3VyLCBsZXJwVClcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIFNldFBpeGVsQXRSZ2JhKHBpeGVscywgbGVycENvbHIsIHB4LCBweSwgdGV4dHdpZHRoKVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgc2V0RGVmYXVsdFBpeGVsID0gZmFsc2VcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgIC8vICAgICBpZiAocGl4ZWwgJiYgcGl4ZWwuYSA+IDAgJiYgc2V0RGVmYXVsdFBpeGVsKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBTZXRQaXhlbEF0UmdiYShwaXhlbHMsIGNvbG9yLCBweCwgcHksIHRleHR3aWR0aClcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHBpeGVsICYmIHBpeGVsLmEgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBpeGVsQXRSZ2JhKHBpeGVscywgY29sb3IsIHB4LCBweSwgdGV4dHdpZHRoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBuZXdJbWFnZURhdGEgPSBuZXcgSW1hZ2VEYXRhKHBpeGVscywgdGV4dHdpZHRoLCB0ZXh0aGVpZ2h0KTtcbiAgICAgICAgZm9udGN0eC5jbGVhclJlY3QoMCwgMCwgdGV4dHdpZHRoLCB0ZXh0aGVpZ2h0KTtcbiAgICAgICAgLy8gaWYgKGVmZmVjdHMuYmFja2dyb3VuZCkge1xuICAgICAgICAvLyAgICAgY3R4LmZpbGxTdHlsZSA9IGVmZmVjdHMuYmFja2dyb3VuZC5jb2xvdXJcbiAgICAgICAgLy8gICAgIGN0eC5maWxsUmVjdCh4LCB5LCB0ZXh0d2lkdGgsIHRleHRoZWlnaHQpXG4gICAgICAgIC8vIH1cbiAgICAgICAgZm9udGN0eC5wdXRJbWFnZURhdGEobmV3SW1hZ2VEYXRhLCAwLCAwKTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShmb250Q2FudmFzLCAwLCAwLCB0ZXh0d2lkdGgsIHRleHRoZWlnaHQsIHgsIHksIHRleHR3aWR0aCwgdGV4dGhlaWdodCk7XG4gICAgfVxuICAgIHJldHVybiB7IHg6IHgsIHk6IHksIHc6IHRleHR3aWR0aCwgaDogdGV4dGhlaWdodCB9O1xufVxuZXhwb3J0cy5kcmF3VGV4dCA9IGRyYXdUZXh0O1xuZnVuY3Rpb24gc2V0UGl4ZWxBdFJnYmEocGl4ZWxzLCBjb2xvciwgeCwgeSwgcGl4ZWxzd2lkdGgpIHtcbiAgICB2YXIgb2Zmc2V0ID0gKHggKyBwaXhlbHN3aWR0aCAqIHkpICogNDtcbiAgICBpZiAob2Zmc2V0IDwgMCB8fCBvZmZzZXQgPj0gcGl4ZWxzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHBpeGVsc1tvZmZzZXRdID0gY29sb3IucjtcbiAgICBwaXhlbHNbb2Zmc2V0ICsgMV0gPSBjb2xvci5nO1xuICAgIHBpeGVsc1tvZmZzZXQgKyAyXSA9IGNvbG9yLmI7XG4gICAgcGl4ZWxzW29mZnNldCArIDNdID0gY29sb3IuYTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGdldFBpeGVsQXRSZ2JhKHBpeGVscywgeCwgeSwgcGl4ZWxzd2lkdGgpIHtcbiAgICB2YXIgb2Zmc2V0ID0gKHggKyBwaXhlbHN3aWR0aCAqIHkpICogNDtcbiAgICBpZiAob2Zmc2V0IDwgMCB8fCBvZmZzZXQgPj0gcGl4ZWxzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHsgcjogcGl4ZWxzW29mZnNldF0sIGc6IHBpeGVsc1tvZmZzZXQgKyAxXSwgYjogcGl4ZWxzW29mZnNldCArIDJdLCBhOiBwaXhlbHNbb2Zmc2V0ICsgM10gfTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pbWFnZU1hbmlmZXN0RnJvbUpTT04gPSBleHBvcnRzLmdldENvbnRleHQgPSBleHBvcnRzLmRyYXdJbWFnZUN0eCA9IGV4cG9ydHMuc2V0Q29udGV4dCA9IGV4cG9ydHMuZ2V0SW1hZ2VzID0gZXhwb3J0cy5nZXRJbWFnZSA9IGV4cG9ydHMuZHJhd0ltYWdlID0gZXhwb3J0cy5sb2FkSW1hZ2UgPSBleHBvcnRzLmxvYWRBbGxJbWFnZXMgPSB2b2lkIDA7XG52YXIgSW1hZ2VEZWZpbml0aW9uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vSW1hZ2VEZWZpbml0aW9uXCIpKTtcbnZhciBpbWFnZXMgPSBbXTtcbi8qKlxuICogUG9wdWxhdGUgaW1hZ2VzIG1hbmlmZXN0IHdpdGggSlNPTiBsaXN0IG9mIGRlZmluaXRpb25zLiBNYW5pZmVzdCBpcyBhbiBhcnJheSBvZiBvYmplY3RzXG4gKiBsaWtlIHsgXCJuYW1lXCI6IFwiaW1hZ2UgaWQgcmVmXCIsIFwiZmlsZW5hbWVcIjogXCJmaWxlX3BhdGgvZmlsZW5hbWUuZXh0XCIgfVxuICogQHBhcmFtIGpzb24gSlNPTiByZXByZXNlbnRhdGlvbiBvZiBpbWFnZSBkZWZpbml0aW9ucy5cbiAqL1xuZnVuY3Rpb24gaW1hZ2VNYW5pZmVzdEZyb21KU09OKGpzb24pIHtcbiAgICBqc29uLmZvckVhY2goKGZ1bmN0aW9uIChkZWYpIHsgcmV0dXJuIGltYWdlcy5wdXNoKEltYWdlRGVmaW5pdGlvbl8xLmRlZmF1bHQuZnJvbUpTT04oZGVmKSk7IH0pKTtcbn1cbmV4cG9ydHMuaW1hZ2VNYW5pZmVzdEZyb21KU09OID0gaW1hZ2VNYW5pZmVzdEZyb21KU09OO1xuLy8gQ2FudmFzIDJkIGNvbnRleHQuXG52YXIgY3R4ID0gbnVsbDtcbi8vIFNldCB0aGUgY2FudmFzIDJkIGNvbnRleHQuXG5mdW5jdGlvbiBzZXRDb250ZXh0KGNvbnRleHQpIHtcbiAgICBjdHggPSBjb250ZXh0O1xufVxuZXhwb3J0cy5zZXRDb250ZXh0ID0gc2V0Q29udGV4dDtcbi8vIFJldHVybnMgdGhlIGNhbnZhcyAyZCBjb250ZXh0LlxuZnVuY3Rpb24gZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gY3R4O1xufVxuZXhwb3J0cy5nZXRDb250ZXh0ID0gZ2V0Q29udGV4dDtcbi8vIFJldHVybiBsb2FkZWQgaW1hZ2Ugb2JqZWN0IGZyb20gdGhlIGxpc3QuXG5mdW5jdGlvbiBnZXRJbWFnZShuYW1lKSB7XG4gICAgdmFyIGltZyA9IGltYWdlcy5maWx0ZXIoZnVuY3Rpb24gKGYpIHsgcmV0dXJuIGYubmFtZSA9PT0gbmFtZTsgfSk7XG4gICAgcmV0dXJuIGltZy5sZW5ndGggPiAwID8gaW1nWzBdLmltYWdlIDogbnVsbDtcbn1cbmV4cG9ydHMuZ2V0SW1hZ2UgPSBnZXRJbWFnZTtcbi8vIFJldHVybnMgdGhlIGZ1bGwgbGlzdCBvZiBpbWFnZSBvYmplY3RzLlxuZnVuY3Rpb24gZ2V0SW1hZ2VzKCkge1xuICAgIHJldHVybiBpbWFnZXM7XG59XG5leHBvcnRzLmdldEltYWdlcyA9IGdldEltYWdlcztcbi8qKlxuICogRHJhd3MgYW4gaW1hZ2UgYXQgeCx5IGNvb3JkaW5hdGVzIG9uIHRoZSBjYW5hcy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge251bWJlcn0geFxuICogQHBhcmFtIHtudW1iZXJ9IHlcbiAqIEBwYXJhbSB7b2JqZWN0fSBzcmNSZWN0XG4gKiBAcGFyYW0ge2Jvb2xlYW59IGZsaXBwZWRcbiAqL1xuZnVuY3Rpb24gZHJhd0ltYWdlKG5hbWUsIHgsIHksIHNyY1JlY3QsIGZsaXBwZWQpIHtcbiAgICBkcmF3SW1hZ2VDdHgoZ2V0Q29udGV4dCgpLCBuYW1lLCB4LCB5LCBzcmNSZWN0LCBmbGlwcGVkKTtcbn1cbmV4cG9ydHMuZHJhd0ltYWdlID0gZHJhd0ltYWdlO1xuLyoqXG4gKiBSYXcgaW1hZ2UgZHJhd2luZyBmdW5jdGlvbiAodXNlIGRyYXdJbWFnZSB1bmxlc3MgeW91IHdhbnQgdG8gZHJhdyB0byBhbm90aGVyIDJkIGNvbnRleHQpLlxuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgQ2FudmFzIDJkIGNvbnRleHQuXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtudW1iZXJ9IHhcbiAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gKiBAcGFyYW0ge29iamVjdH0gc3JjUmVjdFxuICogQHBhcmFtIHtib29sZWFufSBmbGlwcGVkXG4gKi9cbmZ1bmN0aW9uIGRyYXdJbWFnZUN0eChjb250ZXh0LCBuYW1lLCB4LCB5LCBzcmNSZWN0LCBmbGlwcGVkKSB7XG4gICAgdmFyIGltZyA9IGltYWdlcy5maWx0ZXIoZnVuY3Rpb24gKGYpIHsgcmV0dXJuIGYubmFtZSA9PT0gbmFtZTsgfSk7XG4gICAgaWYgKGltZy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoc3JjUmVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChmbGlwcGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnNjYWxlKC0xLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1nWzBdLmltYWdlLCBzcmNSZWN0LngsIHNyY1JlY3QueSwgc3JjUmVjdC53LCBzcmNSZWN0LmgsIC14IC0gc3JjUmVjdC53LCB5LCBzcmNSZWN0LncsIHNyY1JlY3QuaCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1nWzBdLmltYWdlLCBzcmNSZWN0LngsIHNyY1JlY3QueSwgc3JjUmVjdC53LCBzcmNSZWN0LmgsIHgsIHksIHNyY1JlY3Qudywgc3JjUmVjdC5oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZmxpcHBlZCkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnNhdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5zY2FsZSgtMSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltZ1swXS5pbWFnZSwgeCAtIHNyY1JlY3QudywgeSwgc3JjUmVjdC53LCBzcmNSZWN0LmgpO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltZ1swXS5pbWFnZSwgeCwgeSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChfYSkge1xuICAgICAgICAgICAgLy8gZW1wdHlcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuZHJhd0ltYWdlQ3R4ID0gZHJhd0ltYWdlQ3R4O1xuLyoqXG4gKiBMb2FkIEltYWdlXG4gKiBAcGFyYW0ge3N0cmluZ30gZmlsZW5hbWVcbiAqIEByZXR1cm5zXG4gKi9cbmZ1bmN0aW9uIGxvYWRJbWFnZShmaWxlbmFtZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJlc29sdmUoaW1nKTtcbiAgICAgICAgfTtcbiAgICAgICAgaW1nLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGZpbGUgXCIuY29uY2F0KGZpbGVuYW1lLCBcIjpcIiksIGUpO1xuICAgICAgICAgICAgcmVqZWN0KG51bGwpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgaW1hZ2UgPSBpbWFnZXMuZmlsdGVyKGZ1bmN0aW9uIChmKSB7IHJldHVybiBmLmZpbGVuYW1lID09PSBmaWxlbmFtZTsgfSk7XG4gICAgICAgIGlmIChpbWFnZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpbWcuc3JjID0gZmlsZW5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiSW1hZ2UgZGVmaW5pdGlvbiBtYXRjaGluZyBmaWxlbmFtZSBcIi5jb25jYXQoZmlsZW5hbWUsIFwiIG5vdCBmb3VuZC5cIikpO1xuICAgICAgICAgICAgcmVqZWN0KG51bGwpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLmxvYWRJbWFnZSA9IGxvYWRJbWFnZTtcbi8qKlxuICogTG9hZCBhbGwgaW1hZ2VzIGluIHRoZSBpbWFnZXMgbGlzdC5cbiAqIEByZXR1cm5zXG4gKi9cbmZ1bmN0aW9uIGxvYWRBbGxJbWFnZXMoKSB7XG4gICAgdmFyIHByb21pc2VzID0gW107XG4gICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICB2YXIgaW1hZ2UgPSBpbWFnZXNbaV07XG4gICAgICAgIHByb21pc2VzLnB1c2gobmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmV0dXJuIGxvYWRJbWFnZShpbWFnZS5maWxlbmFtZSkudGhlbihmdW5jdGlvbiAocikge1xuICAgICAgICAgICAgaW1hZ2UuaW1hZ2UgPSByO1xuICAgICAgICAgICAgcmVzb2x2ZShyKTtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBsb2FkJywgaW1hZ2UuZmlsZW5hbWUsIGUpOyB9KTsgfSkpO1xuICAgIH07XG4gICAgZm9yICh2YXIgaSBpbiBpbWFnZXMpIHtcbiAgICAgICAgX2xvb3BfMShpKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UuYWxsU2V0dGxlZChwcm9taXNlcyk7XG59XG5leHBvcnRzLmxvYWRBbGxJbWFnZXMgPSBsb2FkQWxsSW1hZ2VzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLm11c2ljTWFuaWZlc3RGcm9tSlNPTiA9IGV4cG9ydHMuaXNQbGF5aW5nID0gZXhwb3J0cy5nZXRUcmFjayA9IGV4cG9ydHMucGxheVRyYWNrID0gZXhwb3J0cy5sb2FkVHJhY2sgPSBleHBvcnRzLmxvYWRBbGxUcmFja3MgPSB2b2lkIDA7XG52YXIgTXVzaWNEZWZpbml0aW9uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTXVzaWNEZWZpbml0aW9uXCIpKTtcbnZhciBzZnhWb2x1bWUgPSAwLjQ1O1xudmFyIHNmeHMgPSBbXTtcbi8qKlxuICogUG9wdWxhdGUgc2Z4IG1hbmlmZXN0IHdpdGggSlNPTiBsaXN0IG9mIGRlZmluaXRpb25zLiAgTWFuaWZlc3QgaXMgYW4gYXJyeSBvZlxuICogb2JqZWN0cyBtYXRjaGluZyBmb3JtYXQgeyBcIm5hbWVcIjogXCJ0cmFjayBpZCByZWZcIiwgXCJmaWxlbmFtZVwiOiBcIi4vZmlsZV9wYXRoL2ZpbGVuYW1lLmV4dFwiIH0sXG4gKiBAcGFyYW0ganNvbiBKU09OIHJlcHJlc2VudGF0aW9uIG9mIGltYWdlIGRlZmluaXRpb25zLlxuICovXG5mdW5jdGlvbiBtdXNpY01hbmlmZXN0RnJvbUpTT04oanNvbikge1xuICAgIGpzb24uZm9yRWFjaCgoZnVuY3Rpb24gKGRlZikgeyByZXR1cm4gc2Z4cy5wdXNoKE11c2ljRGVmaW5pdGlvbl8xLmRlZmF1bHQuZnJvbUpTT04oZGVmKSk7IH0pKTtcbn1cbmV4cG9ydHMubXVzaWNNYW5pZmVzdEZyb21KU09OID0gbXVzaWNNYW5pZmVzdEZyb21KU09OO1xuZnVuY3Rpb24gaXNQbGF5aW5nKG5hbWUpIHtcbiAgICB2YXIgc2YgPSBnZXRUcmFjayhuYW1lKTtcbiAgICBpZiAoc2YpIHtcbiAgICAgICAgcmV0dXJuICFzZi5wYXVzZWQgfHwgc2YuY3VycmVudFRpbWUgJiYgc2YuY3VycmVudFRpbWUgPCBzZi5kdXJhdGlvbjtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0cy5pc1BsYXlpbmcgPSBpc1BsYXlpbmc7XG5mdW5jdGlvbiBnZXRUcmFjayhuYW1lKSB7XG4gICAgdmFyIHNmID0gc2Z4cy5maWx0ZXIoZnVuY3Rpb24gKGYpIHsgcmV0dXJuIGYubmFtZSA9PT0gbmFtZTsgfSk7XG4gICAgcmV0dXJuIHNmLmxlbmd0aCA+IDAgPyBzZlswXS50cmFjayA6IG51bGw7XG59XG5leHBvcnRzLmdldFRyYWNrID0gZ2V0VHJhY2s7XG5mdW5jdGlvbiBwbGF5VHJhY2sobmFtZSwgb25FbmRlZCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHNmXzEgPSBzZnhzLmZpbHRlcihmdW5jdGlvbiAoZikgeyByZXR1cm4gZi5uYW1lID09PSBuYW1lOyB9KTtcbiAgICAgICAgICAgIGlmIChzZl8xLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzUGxheWluZyhuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBzZl8xWzBdLnRyYWNrLnZvbHVtZSA9IHNmeFZvbHVtZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9uRW5kZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNmXzFbMF0udHJhY2sub25lbmRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkVuZGVkKHNmXzFbMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNmXzFbMF0udHJhY2sub25lbmRlZCA9IGZ1bmN0aW9uICgpIHsgcmVzb2x2ZSgpOyB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNmXzFbMF0udHJhY2sub25lbmRlZCA9IGZ1bmN0aW9uICgpIHsgcmVzb2x2ZSgpOyB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNmXzFbMF0udHJhY2sucGxheSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2ZfMVswXS50cmFjay5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgcGxheWluZyBzZngnLCBuYW1lLCBlKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5wbGF5VHJhY2sgPSBwbGF5VHJhY2s7XG5mdW5jdGlvbiBsb2FkVHJhY2soZmlsZW5hbWUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgc2YgPSBuZXcgQXVkaW8oZmlsZW5hbWUpO1xuICAgICAgICBzZi5vbmNhbnBsYXl0aHJvdWdoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmVzb2x2ZShzZik7XG4gICAgICAgIH07XG4gICAgICAgIHNmLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGZpbGUgXCIuY29uY2F0KGZpbGVuYW1lLCBcIjpcIiksIGUpO1xuICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICB9O1xuICAgIH0pO1xufVxuZXhwb3J0cy5sb2FkVHJhY2sgPSBsb2FkVHJhY2s7XG5mdW5jdGlvbiBsb2FkQWxsVHJhY2tzKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZUFsbCwgcmVqZWN0QWxsKSB7XG4gICAgICAgIHZhciBwcm9taXNlcyA9IFtdO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICB2YXIgc2Z4ID0gc2Z4c1tpXTtcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2gobmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmV0dXJuIGxvYWRUcmFjayhzZnguZmlsZW5hbWUpLnRoZW4oZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgICAgICAgICBzZngudHJhY2sgPSByO1xuICAgICAgICAgICAgICAgIHJlc29sdmUocik7XG4gICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBsb2FkJywgc2Z4LmZpbGVuYW1lLCBlKTtcbiAgICAgICAgICAgICAgICByZWplY3RBbGwoJ0ZhaWxlZCB0byBsb2FkJyArIHNmeC5maWxlbmFtZSArICc6JyArIEpTT04uc3RyaW5naWZ5KGUpKTtcbiAgICAgICAgICAgIH0pOyB9KSk7XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgaW4gc2Z4cykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGxTZXR0bGVkKHByb21pc2VzKTtcbiAgICB9KTtcbn1cbmV4cG9ydHMubG9hZEFsbFRyYWNrcyA9IGxvYWRBbGxUcmFja3M7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVBY3RpdmF0ZVNjZW5lID0gZXhwb3J0cy5hY3RpdmF0ZVNjZW5lID0gZXhwb3J0cy5hZGRTY2VuZSA9IGV4cG9ydHMuaGFuZGxlSW5wdXQgPSBleHBvcnRzLmhhbmRsZUFuaW1hdGlvbkZyYW1lID0gdm9pZCAwO1xudmFyIHN0YXJ0ID0gbnVsbDtcbnZhciBzY2VuZXMgPSBbXTtcbmZ1bmN0aW9uIGFkZFNjZW5lKHNjZW5lKSB7XG4gICAgc2NlbmVzLnB1c2goc2NlbmUpO1xuICAgIHJldHVybiBzY2VuZTtcbn1cbmV4cG9ydHMuYWRkU2NlbmUgPSBhZGRTY2VuZTtcbmZ1bmN0aW9uIGFjdGl2YXRlU2NlbmUoaWQpIHtcbiAgICB2YXIgaW5kZXggPSBzY2VuZXMuZmluZEluZGV4KGZ1bmN0aW9uIChzKSB7IHJldHVybiBzLmlkID09PSBpZDsgfSk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgc2NlbmVzW2luZGV4XS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBzY2VuZXNbaW5kZXhdLm9uQWN0aXZhdGUoKTtcbiAgICB9XG59XG5leHBvcnRzLmFjdGl2YXRlU2NlbmUgPSBhY3RpdmF0ZVNjZW5lO1xuZnVuY3Rpb24gZGVBY3RpdmF0ZVNjZW5lKGlkKSB7XG4gICAgdmFyIGluZGV4ID0gc2NlbmVzLmZpbmRJbmRleChmdW5jdGlvbiAocykgeyByZXR1cm4gcy5pZCA9PT0gaWQ7IH0pO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIHNjZW5lc1tpbmRleF0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHNjZW5lc1tpbmRleF0ub25EZWFjdGl2YXRlKCk7XG4gICAgfVxufVxuZXhwb3J0cy5kZUFjdGl2YXRlU2NlbmUgPSBkZUFjdGl2YXRlU2NlbmU7XG5mdW5jdGlvbiBoYW5kbGVJbnB1dChpbnB1dCwgYW10LCByZWxlYXNlZCkge1xuICAgIHNjZW5lcy5maWx0ZXIoZnVuY3Rpb24gKGYpIHsgcmV0dXJuIGYuYWN0aXZlOyB9KS5mb3JFYWNoKGZ1bmN0aW9uIChzY2VuZSkge1xuICAgICAgICBzY2VuZS5oYW5kbGVJbnB1dChpbnB1dCwgYW10LCByZWxlYXNlZCk7XG4gICAgfSk7XG59XG5leHBvcnRzLmhhbmRsZUlucHV0ID0gaGFuZGxlSW5wdXQ7XG5mdW5jdGlvbiBoYW5kbGVBbmltYXRpb25GcmFtZSh0aW1lU3RhbXApIHtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGhhbmRsZUFuaW1hdGlvbkZyYW1lKTtcbiAgICBpZiAoc3RhcnQgPT09IG51bGwpIHtcbiAgICAgICAgc3RhcnQgPSB0aW1lU3RhbXAgLSAxNjsgLy8gSWYgd2UgZG9uJ3QgZG8gdGhpcywgdGhlIGZpcnN0IGZyYW1lIHRpbWVzdGFtcCBpcyB0b28gbG9uZyBzbyB3ZSBmYWtlIDYwZnBzIGJ5IHN1YnRyYWN0aW5nIDE2XG4gICAgfVxuICAgIHZhciBkZWx0YSA9IHRpbWVTdGFtcCAtIHN0YXJ0O1xuICAgIHN0YXJ0ID0gdGltZVN0YW1wO1xuICAgIHNjZW5lcy5maWx0ZXIoZnVuY3Rpb24gKGYpIHsgcmV0dXJuIGYuYWN0aXZlOyB9KS5mb3JFYWNoKGZ1bmN0aW9uIChzY2VuZSkge1xuICAgICAgICBzY2VuZS5hbmltYXRpb25GcmFtZShkZWx0YSk7XG4gICAgfSk7XG59XG5leHBvcnRzLmhhbmRsZUFuaW1hdGlvbkZyYW1lID0gaGFuZGxlQW5pbWF0aW9uRnJhbWU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc2Z4TWFuaWZlc3RGcm9tSlNPTiA9IGV4cG9ydHMuaXNQbGF5aW5nID0gZXhwb3J0cy5nZXRTZnggPSBleHBvcnRzLnBsYXlTZnggPSBleHBvcnRzLmxvYWRTZnggPSBleHBvcnRzLmxvYWRBbGxTZnggPSB2b2lkIDA7XG52YXIgU2Z4RGVmaW5pdGlvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1NmeERlZmluaXRpb25cIikpO1xudmFyIHNmeFZvbHVtZSA9IDAuNDU7XG52YXIgc2Z4cyA9IFtdO1xuLyoqXG4gKiBQb3B1bGF0ZSBzZnggbWFuaWZlc3Qgd2l0aCBKU09OIGxpc3Qgb2YgZGVmaW5pdGlvbnMuIE1hbmlmZXN0IGlzIGFuIGFycnkgb2ZcbiAqIG9iamVjdHMgbWF0Y2hpbmcgZm9ybWF0IHsgXCJuYW1lXCI6IFwic2Z4IGlkIHJlZlwiLCBcImZpbGVuYW1lXCI6IFwiLi9maWxlX3BhdGgvZmlsZW5hbWUuZXh0XCIgfSxcbiAqIEBwYXJhbSBqc29uIEpTT04gcmVwcmVzZW50YXRpb24gb2YgaW1hZ2UgZGVmaW5pdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIHNmeE1hbmlmZXN0RnJvbUpTT04oanNvbikge1xuICAgIGpzb24uZm9yRWFjaCgoZnVuY3Rpb24gKGRlZikgeyByZXR1cm4gc2Z4cy5wdXNoKFNmeERlZmluaXRpb25fMS5kZWZhdWx0LmZyb21KU09OKGRlZikpOyB9KSk7XG59XG5leHBvcnRzLnNmeE1hbmlmZXN0RnJvbUpTT04gPSBzZnhNYW5pZmVzdEZyb21KU09OO1xuZnVuY3Rpb24gaXNQbGF5aW5nKG5hbWUpIHtcbiAgICB2YXIgc2YgPSBnZXRTZngobmFtZSk7XG4gICAgaWYgKHNmKSB7XG4gICAgICAgIHJldHVybiAhc2YucGF1c2VkIHx8IHNmLmN1cnJlbnRUaW1lICYmIHNmLmN1cnJlbnRUaW1lIDwgc2YuZHVyYXRpb247XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydHMuaXNQbGF5aW5nID0gaXNQbGF5aW5nO1xuZnVuY3Rpb24gZ2V0U2Z4KG5hbWUpIHtcbiAgICB2YXIgc2YgPSBzZnhzLmZpbHRlcihmdW5jdGlvbiAoZikgeyByZXR1cm4gZi5uYW1lID09PSBuYW1lOyB9KTtcbiAgICByZXR1cm4gc2YubGVuZ3RoID4gMCA/IHNmWzBdLnNmeCA6IG51bGw7XG59XG5leHBvcnRzLmdldFNmeCA9IGdldFNmeDtcbmZ1bmN0aW9uIHBsYXlTZngobmFtZSwgb25FbmRlZCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHNmXzEgPSBzZnhzLmZpbHRlcihmdW5jdGlvbiAoZikgeyByZXR1cm4gZi5uYW1lID09PSBuYW1lOyB9KTtcbiAgICAgICAgICAgIGlmIChzZl8xLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzUGxheWluZyhuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBzZl8xWzBdLnNmeC52b2x1bWUgPSBzZnhWb2x1bWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbkVuZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZl8xWzBdLnNmeC5vbmVuZGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRW5kZWQoc2ZfMVswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2ZfMVswXS5zZngub25lbmRlZCA9IGZ1bmN0aW9uICgpIHsgcmVzb2x2ZSgpOyB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNmXzFbMF0uc2Z4Lm9uZW5kZWQgPSBmdW5jdGlvbiAoKSB7IHJlc29sdmUoKTsgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZl8xWzBdLnNmeC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZl8xWzBdLnNmeC5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgcGxheWluZyBzZngnLCBuYW1lLCBlKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5wbGF5U2Z4ID0gcGxheVNmeDtcbmZ1bmN0aW9uIGxvYWRTZngoZmlsZW5hbWUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgc2YgPSBuZXcgQXVkaW8oZmlsZW5hbWUpO1xuICAgICAgICBzZi5vbmNhbnBsYXl0aHJvdWdoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmVzb2x2ZShzZik7XG4gICAgICAgIH07XG4gICAgICAgIHNmLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGZpbGUgXCIuY29uY2F0KGZpbGVuYW1lLCBcIjpcIiksIGUpO1xuICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICB9O1xuICAgIH0pO1xufVxuZXhwb3J0cy5sb2FkU2Z4ID0gbG9hZFNmeDtcbmZ1bmN0aW9uIGxvYWRBbGxTZngoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlQWxsLCByZWplY3RBbGwpIHtcbiAgICAgICAgdmFyIHByb21pc2VzID0gW107XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIHZhciBzZnggPSBzZnhzW2ldO1xuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXR1cm4gbG9hZFNmeChzZnguZmlsZW5hbWUpLnRoZW4oZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgICAgICAgICBzZnguc2Z4ID0gcjtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHIpO1xuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gbG9hZCcsIHNmeC5maWxlbmFtZSwgZSk7XG4gICAgICAgICAgICAgICAgcmVqZWN0QWxsKCdGYWlsZWQgdG8gbG9hZCcgKyBzZnguZmlsZW5hbWUgKyAnOicgKyBKU09OLnN0cmluZ2lmeShlKSk7XG4gICAgICAgICAgICB9KTsgfSkpO1xuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpIGluIHNmeHMpIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsU2V0dGxlZChwcm9taXNlcyk7XG4gICAgfSk7XG59XG5leHBvcnRzLmxvYWRBbGxTZnggPSBsb2FkQWxsU2Z4O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY2FudmFzSGVpZ2h0ID0gZXhwb3J0cy5jYW52YXNXaWR0aCA9IGV4cG9ydHMuZ2FtZUNhbnZhcyA9IGV4cG9ydHMuc2V0Q2FudmFzQmFja2dyb3VuZCA9IGV4cG9ydHMuaW5pdGlhbGl6ZSA9IGV4cG9ydHMubXVzaWMgPSBleHBvcnRzLnNmeCA9IGV4cG9ydHMuc2NlbmVzID0gZXhwb3J0cy5mb250ID0gZXhwb3J0cy5pbWFnZXMgPSB2b2lkIDA7XG52YXIgZm9udF8xID0gcmVxdWlyZShcIi4vbW9kdWxlcy9mb250XCIpO1xuZXhwb3J0cy5pbWFnZXMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vbW9kdWxlcy9pbWFnZXNcIikpO1xuZXhwb3J0cy5mb250ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL21vZHVsZXMvZm9udFwiKSk7XG5leHBvcnRzLnNjZW5lcyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9tb2R1bGVzL3NjZW5lc1wiKSk7XG5leHBvcnRzLnNmeCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9tb2R1bGVzL3NmeFwiKSk7XG5leHBvcnRzLm11c2ljID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL21vZHVsZXMvbXVzaWNcIikpO1xuLy8gR2FtZSBDYW52YXMgbWV0YWRhdGEgR2xvYmFscy5cbnZhciBnYW1lQ2FudmFzID0gbnVsbDtcbmV4cG9ydHMuZ2FtZUNhbnZhcyA9IGdhbWVDYW52YXM7XG52YXIgY2FudmFzV2lkdGggPSAwO1xuZXhwb3J0cy5jYW52YXNXaWR0aCA9IGNhbnZhc1dpZHRoO1xudmFyIGNhbnZhc0hlaWdodCA9IDA7XG5leHBvcnRzLmNhbnZhc0hlaWdodCA9IGNhbnZhc0hlaWdodDtcbnZhciBjYW52YXNCYWNrZ3JvdW5kID0gJ3RyYW5zcGFyZW50JztcbmZ1bmN0aW9uIHJlc2l6ZSgpIHtcbiAgICB2YXIgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB2YXIgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGdhbWVDYW52YXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgZ2FtZUNhbnZhcy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgZ2FtZUNhbnZhcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcbiAgICBnYW1lQ2FudmFzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG4gICAgZ2FtZUNhbnZhcy5zdHlsZS50b3AgPSAnMHB4JztcbiAgICBnYW1lQ2FudmFzLnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICBnYW1lQ2FudmFzLnN0eWxlLmJhY2tncm91bmQgPSBjYW52YXNCYWNrZ3JvdW5kO1xuICAgIGdhbWVDYW52YXMuc3R5bGUuaW1hZ2VSZW5kZXJpbmcgPSAncGl4ZWxhdGVkJztcbn1cbmZ1bmN0aW9uIHByZXBlbmRDYW52YXMoY2FudmFzSWQsIHdpZHRoLCBoZWlnaHQsIGF1dG9SZXNpemUpIHtcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY2FudmFzLmlkID0gY2FudmFzSWQ7XG4gICAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKGNhbnZhcyk7XG4gICAgZXhwb3J0cy5nYW1lQ2FudmFzID0gZ2FtZUNhbnZhcyA9IGNhbnZhcztcbiAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIGV4cG9ydHMuY2FudmFzV2lkdGggPSBjYW52YXNXaWR0aCA9IHdpZHRoO1xuICAgIGV4cG9ydHMuY2FudmFzSGVpZ2h0ID0gY2FudmFzSGVpZ2h0ID0gaGVpZ2h0O1xuICAgIGlmIChhdXRvUmVzaXplKSB7XG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc2l6ZSgpOyB9KTtcbiAgICAgICAgcmVzaXplKCk7XG4gICAgfVxuICAgIHJldHVybiBjYW52YXM7XG59XG5mdW5jdGlvbiBzZXRDYW52YXNCYWNrZ3JvdW5kKGNvbG9yKSB7XG4gICAgY2FudmFzQmFja2dyb3VuZCA9IGNvbG9yO1xuICAgIGlmIChnYW1lQ2FudmFzKSB7XG4gICAgICAgIGdhbWVDYW52YXMuc3R5bGUuYmFja2dyb3VuZCA9IGNhbnZhc0JhY2tncm91bmQ7XG4gICAgfVxufVxuZXhwb3J0cy5zZXRDYW52YXNCYWNrZ3JvdW5kID0gc2V0Q2FudmFzQmFja2dyb3VuZDtcbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgcmV0cm9saWIgZW5naW5lLlxuICogQHBhcmFtIG9wdGlvbnNcbiAqL1xuZnVuY3Rpb24gaW5pdGlhbGl6ZShjYW52YXNJZCwgd2lkdGgsIGhlaWdodCwgYnVpbGRDYW52YXMsIGF1dG9SZXNpemUpIHtcbiAgICB3aWR0aCA9IHdpZHRoID8gd2lkdGggOiAyNTY7XG4gICAgaGVpZ2h0ID0gaGVpZ2h0ID8gaGVpZ2h0IDogMjU2O1xuICAgIGNhbnZhc0lkID0gY2FudmFzSWQgPyBjYW52YXNJZCA6ICdnYW1lY2FudmFzJztcbiAgICBpZiAoZ2FtZUNhbnZhcyA9PT0gbnVsbCAmJiBidWlsZENhbnZhcykge1xuICAgICAgICBleHBvcnRzLmdhbWVDYW52YXMgPSBnYW1lQ2FudmFzID0gcHJlcGVuZENhbnZhcyhjYW52YXNJZCwgd2lkdGgsIGhlaWdodCwgYXV0b1Jlc2l6ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGdhbWVDYW52YXMgPT09IG51bGwpIHtcbiAgICAgICAgZXhwb3J0cy5nYW1lQ2FudmFzID0gZ2FtZUNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhc0lkKTtcbiAgICB9XG4gICAgKDAsIGZvbnRfMS5sb2FkRGVmYXVsdEZvbnRzKSgpO1xufVxuZXhwb3J0cy5pbml0aWFsaXplID0gaW5pdGlhbGl6ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHt9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3JldHJvbGliLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9