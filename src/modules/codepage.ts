import Rect from "./Rect"

export type CodeData = {
  codenumber: number,
  symbol: string,
  rect: Rect,
  description: string
}

const codePage: CodeData[] = [
  {
    "codenumber": 0,
    "symbol": String.fromCharCode(parseInt('\u0000',16)),
    "rect": { x: 0, y: 0, w: 0, h: 0 },
		"description": "NULL CHAR"
  },
  {
    "codenumber": 1,
    "symbol": String.fromCharCode(parseInt('\u0001',16)),
    "rect": { x: 0, y: 0, w: 0, h: 0 },
		"description": "START OF HEADING"
  },
  {
    "codenumber": 2,
    "symbol": String.fromCharCode(parseInt('\u0002',16)),
    "rect": { x: 0, y: 0, w: 0, h: 0 },
		"description": "START OF TEXT"
  },
  {
    "codenumber": 3,
    "symbol": String.fromCharCode(parseInt('\u0003',16)),
    "rect": { x: 0, y: 0, w: 0, h: 0 },
		"description": "END OF TEXT"
  },
  {
    "codenumber": 4,
    "symbol": String.fromCharCode(parseInt('\u0004',16)),
    "rect": { x: 0, y: 0, w: 0, h: 0 },
		"description": "END OF TRANSMISSION"
  },
  {
    "codenumber": 5,
    "symbol": String.fromCharCode(parseInt('\u0005',16)),
    "rect": { x: 0, y: 0, w: 0, h: 0 },
		"description": "ENQUIRY"
  },
  {
    "codenumber": 6,
    "symbol": String.fromCharCode(parseInt('\u0006',16)),
    "rect": { x: 0, y: 0, w: 0, h: 0 },
		"description": "ACKNOWLEDGMENT"
  },
  {
    "codenumber": 7,
    "symbol": String.fromCharCode(parseInt('\u0007',16)),
    "rect": { x: 0, y: 0, w: 0, h: 0 },
		"description": "BELL"
  },
  {
    "codenumber": 8,
    "symbol": String.fromCharCode(parseInt('\u0008',16)),
    "rect": { x: 0, y: 0, w: 0, h: 0 },
		"description": "BACK SPACE"
  },
  {
    "codenumber": 9,
    "symbol": String.fromCharCode(parseInt('\u0009',16)),
    "rect": { x: 0, y: 0, w: 0, h: 0 },
		"description": "HORIZONTAL TAB"
  },
  {
    "codenumber": 10,
    "symbol": String.fromCharCode(parseInt('\u000A',16)),
    "rect": { x: 0, y: 0, w: 0, h: 0 },
		"description": "LINE FEED"
  },
  {
    "codenumber": 11,
    "symbol": String.fromCharCode(parseInt('\u000B',16)),
    "rect": { x: 0, y: 0, w: 0, h: 0 },
		"description": "VERTICAL TAB"
  },
  {
    "codenumber": 12,
    "symbol": String.fromCharCode(parseInt('\u000C',16)),
    "rect": { x: 0, y: 0, w: 0, h: 0 },
		"description": "FORM FEED"
  },
  {
    "codenumber": 13,
    "symbol": String.fromCharCode(parseInt('\u000D',16)),
    "rect": { x: 0, y: 0, w: 0, h: 0 },
		"description": "CARRIAGE RETURN"
  },
  {
    "codenumber": 14,
    "symbol": String.fromCharCode(parseInt('\u000E',16)),
    "rect": { x: 0, y: 0, w: 0, h: 0 },
		"description": "SHIFT OUT / X-ON"
  },
  {
    "codenumber": 15,
    "symbol": String.fromCharCode(parseInt('\u000F',16)),
    "rect": { x: 0, y: 0, w: 0, h: 0 },
		"description": "SHIFT IN / X-OFF"
  },
  {
    "codenumber": 16,
    "symbol": String.fromCharCode(parseInt('\u0010',16)),
    "rect": { x: 0, y: 0, w: 0, h: 0 },
		"description": "DATA LINE ESCAPE"
  },
  {
    "codenumber": 17,
    "symbol": String.fromCharCode(parseInt('\u0011',16)),
    "rect": { x: 0, y: 0, w: 0, h: 0 },
		"description": "DEVICE CONTROL 1 (OFT. XON)"
  },
  {
    "codenumber": 18,
    "symbol": String.fromCharCode(parseInt('\u0012',16)),
    "rect": { x: 0, y: 0, w: 0, h: 0 },
		"description": "DEVICE CONTROL 2"
  },
  {
    "codenumber": 19,
    "symbol": String.fromCharCode(parseInt('\u0013',16)),
    "rect": { x: 0, y: 0, w: 0, h: 0 },
		"description": "DEVICE CONTROL 3 (OFT. XOFF)"
  },
  {
    "codenumber": 20,
    "symbol": String.fromCharCode(parseInt('\u0014',16)),
    "rect": { x: 0, y: 0, w: 0, h: 0 },
		"description": "DEVICE CONTROL 4"
  },
  {
    "codenumber": 21,
    "symbol": String.fromCharCode(parseInt('\u0015',16)),
    "rect": { x: 0, y: 0, w: 0, h: 0 },
		"description": "NEGATIVE ACKNOWLEDGEMENT"
  },
  {
    "codenumber": 22,
    "symbol": String.fromCharCode(parseInt('\u0016',16)),
    "rect": { x: 0, y: 0, w: 0, h: 0 },
		"description": "SYNCHRONOUS IDLE"
  },
  {
    "codenumber": 23,
    "symbol": String.fromCharCode(parseInt('\u0017',16)),
    "rect": { x: 0, y: 0, w: 0, h: 0 },
		"description": "END OF TRANSMIT BLOCK"
  },
  {
    "codenumber": 24,
    "symbol": String.fromCharCode(parseInt('\u0018',16)),
    "rect": { x: 0, y: 0, w: 0, h: 0 },
		"description": "CANCEL"
  },
  {
    "codenumber": 25,
    "symbol": String.fromCharCode(parseInt('\u0019',16)),
    "rect": { x: 0, y: 0, w: 0, h: 0 },
		"description": "END OF MEDIUM"
  },
  {
    "codenumber": 26,
    "symbol": String.fromCharCode(parseInt('\u001A',16)),
    "rect": { x: 0, y: 0, w: 0, h: 0 },
		"description": "SUBSTITUTE"
  },
  {
    "codenumber": 27,
    "symbol": String.fromCharCode(parseInt('\u001B',16)),
    "rect": { x: 0, y: 0, w: 0, h: 0 },
		"description": "ESCAPE"
  },
  {
    "codenumber": 28,
    "symbol": String.fromCharCode(parseInt('\u001C',16)),
    "rect": { x: 0, y: 0, w: 0, h: 0 },
		"description": "FILE SEPARATOR"
  },
  {
    "codenumber": 29,
    "symbol": String.fromCharCode(parseInt('\u001D',16)),
    "rect": { x: 0, y: 0, w: 0, h: 0 },
		"description": "GROUP SEPARATOR"
  },
  {
    "codenumber": 30,
    "symbol": String.fromCharCode(parseInt('\u001E',16)),
    "rect": { x: 0, y: 0, w: 0, h: 0 },
		"description": "RECORD SEPARATOR"
  },
  {
    "codenumber": 31,
    "symbol": String.fromCharCode(parseInt('\u001F',16)),
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
    "symbol": String.fromCharCode(parseInt('\u007F',16)),
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
]

export default codePage