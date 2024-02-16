[retrolib](../README.md) / [Exports](../modules.md) / font

# Namespace: font

## Table of contents

### Type Aliases

- [ColorRGBA](font.md#colorrgba)

### Functions

- [codepageAndBitmaptoJSON](font.md#codepageandbitmaptojson)
- [colorLerp](font.md#colorlerp)
- [drawText](font.md#drawtext)
- [drawTextCtx](font.md#drawtextctx)
- [fonts](font.md#fonts)
- [getCtx](font.md#getctx)
- [hexToRgba](font.md#hextorgba)
- [imageToBase64](font.md#imagetobase64)
- [loadDefaultFonts](font.md#loaddefaultfonts)
- [loadFromJSON](font.md#loadfromjson)
- [rgbaToHex](font.md#rgbatohex)
- [setCtx](font.md#setctx)
- [textHeight](font.md#textheight)
- [textWidth](font.md#textwidth)

## Type Aliases

### ColorRGBA

Ƭ **ColorRGBA**: `Object`

RGBA colour representation.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |
| `g` | `number` |
| `r` | `number` |

#### Defined in

[modules/font.ts:14](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/font.ts#L14)

## Functions

### codepageAndBitmaptoJSON

▸ **codepageAndBitmaptoJSON**(`imageName`, `max_y`, `cw`, `ch`): `Promise`\<`unknown`\>

Get base64 image data and build a precompiled font JSON object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `imageName` | `string` |  |
| `max_y` | `number` |  |
| `cw` | `number` | Character width. |
| `ch` | `number` | Character height. |

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[modules/font.ts:119](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/font.ts#L119)

___

### colorLerp

▸ **colorLerp**(`color1`, `color2`, `t`): [`ColorRGBA`](font.md#colorrgba)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color1` | [`ColorRGBA`](font.md#colorrgba) |
| `color2` | [`ColorRGBA`](font.md#colorrgba) |
| `t` | `number` |

#### Returns

[`ColorRGBA`](font.md#colorrgba)

#### Defined in

[modules/font.ts:75](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/font.ts#L75)

___

### drawText

▸ **drawText**(`x`, `y`, `text`, `color`, `font?`): [`Rect`](../classes/Rect.md)

Draws the specified text on the canvas.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | Left location for text. |
| `y` | `number` | Top location for text. |
| `text` | `string` | Text to be drawn on canvas. |
| `color` | [`ColorRGBA`](font.md#colorrgba) | Colour to use (white if undefined). |
| `font?` | [`FontData`](../classes/FontData.md) | Font to use (default DOS codepage 437 font if undefined). |

#### Returns

[`Rect`](../classes/Rect.md)

Rect object with the x, y, width, height of the text drawn.

#### Defined in

[modules/font.ts:239](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/font.ts#L239)

___

### drawTextCtx

▸ **drawTextCtx**(`context`, `x`, `y`, `text`, `color`, `font?`): [`Rect`](../classes/Rect.md)

Draws the specified text on the canvas.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `CanvasRenderingContext2D` | - |
| `x` | `number` | Left location for text. |
| `y` | `number` | Top location for text |
| `text` | `string` | Text to be drawn on canvas. |
| `color` | [`ColorRGBA`](font.md#colorrgba) | Colour to use (white if undefined). |
| `font?` | [`FontData`](../classes/FontData.md) | Font to use (default DOS codepage 437 font if undefined). |

#### Returns

[`Rect`](../classes/Rect.md)

#### Defined in

[modules/font.ts:222](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/font.ts#L222)

___

### fonts

▸ **fonts**(): [`FontData`](../classes/FontData.md)[]

#### Returns

[`FontData`](../classes/FontData.md)[]

#### Defined in

[modules/font.ts:40](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/font.ts#L40)

___

### getCtx

▸ **getCtx**(): `CanvasRenderingContext2D`

#### Returns

`CanvasRenderingContext2D`

#### Defined in

[modules/font.ts:378](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/font.ts#L378)

___

### hexToRgba

▸ **hexToRgba**(`hex`): [`ColorRGBA`](font.md#colorrgba)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hex` | `string` |

#### Returns

[`ColorRGBA`](font.md#colorrgba)

#### Defined in

[modules/font.ts:47](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/font.ts#L47)

___

### imageToBase64

▸ **imageToBase64**(`img`, `outputFormat?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `img` | `HTMLImageElement` |
| `outputFormat?` | `string` |

#### Returns

`string`

#### Defined in

[modules/font.ts:84](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/font.ts#L84)

___

### loadDefaultFonts

▸ **loadDefaultFonts**(): `void`

#### Returns

`void`

#### Defined in

[modules/font.ts:22](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/font.ts#L22)

___

### loadFromJSON

▸ **loadFromJSON**(`fontJson`): [`FontData`](../classes/FontData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fontJson` | `object` |

#### Returns

[`FontData`](../classes/FontData.md)

#### Defined in

[modules/font.ts:29](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/font.ts#L29)

___

### rgbaToHex

▸ **rgbaToHex**(`rgb`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rgb` | [`ColorRGBA`](font.md#colorrgba) |

#### Returns

`string`

#### Defined in

[modules/font.ts:62](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/font.ts#L62)

___

### setCtx

▸ **setCtx**(`context`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `CanvasRenderingContext2D` |

#### Returns

`void`

#### Defined in

[modules/font.ts:382](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/font.ts#L382)

___

### textHeight

▸ **textHeight**(`text`, `font?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `font?` | [`FontData`](../classes/FontData.md) |

#### Returns

`number`

#### Defined in

[modules/font.ts:161](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/font.ts#L161)

___

### textWidth

▸ **textWidth**(`text`, `font?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `font?` | [`FontData`](../classes/FontData.md) |

#### Returns

`number`

#### Defined in

[modules/font.ts:176](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/font.ts#L176)
