[retrolib](../README.md) / [Exports](../modules.md) / font

# Namespace: font

## Table of contents

### Type Aliases

- [ColorRGBA](font.md#colorrgba)

### Functions

- [codepageAndBitmaptoJSON](font.md#codepageandbitmaptojson)
- [colorLerp](font.md#colorlerp)
- [drawText](font.md#drawtext)
- [fonts](font.md#fonts)
- [hextToRgba](font.md#hexttorgba)
- [imageToBase64](font.md#imagetobase64)
- [loadDefaultFonts](font.md#loaddefaultfonts)
- [loadFromJSON](font.md#loadfromjson)
- [rgbaToHex](font.md#rgbatohex)
- [textHeight](font.md#textheight)
- [textWidth](font.md#textwidth)

## Type Aliases

### ColorRGBA

Ƭ **ColorRGBA**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |
| `g` | `number` |
| `r` | `number` |

#### Defined in

[modules/font.ts:10](https://github.com/philbgarner/retrolib/blob/61e1edc/src/modules/font.ts#L10)

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

[modules/font.ts:115](https://github.com/philbgarner/retrolib/blob/61e1edc/src/modules/font.ts#L115)

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

[modules/font.ts:71](https://github.com/philbgarner/retrolib/blob/61e1edc/src/modules/font.ts#L71)

___

### drawText

▸ **drawText**(`ctx`, `x`, `y`, `text`, `color`, `font?`): `Rect`

Draws the specified text on the canvas.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | 2d context to draw text on. |
| `x` | `number` | Left location for text. |
| `y` | `number` | Top location for text |
| `text` | `string` | Text to be drawn on canvas. |
| `color` | [`ColorRGBA`](font.md#colorrgba) | Colour to use (white if undefined). |
| `font?` | `FontData` | Font to use (default DOS codepage 437 font if undefined). |

#### Returns

`Rect`

#### Defined in

[modules/font.ts:216](https://github.com/philbgarner/retrolib/blob/61e1edc/src/modules/font.ts#L216)

___

### fonts

▸ **fonts**(): `FontData`[]

#### Returns

`FontData`[]

#### Defined in

[modules/font.ts:36](https://github.com/philbgarner/retrolib/blob/61e1edc/src/modules/font.ts#L36)

___

### hextToRgba

▸ **hextToRgba**(`hex`): [`ColorRGBA`](font.md#colorrgba)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hex` | `string` |

#### Returns

[`ColorRGBA`](font.md#colorrgba)

#### Defined in

[modules/font.ts:43](https://github.com/philbgarner/retrolib/blob/61e1edc/src/modules/font.ts#L43)

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

[modules/font.ts:80](https://github.com/philbgarner/retrolib/blob/61e1edc/src/modules/font.ts#L80)

___

### loadDefaultFonts

▸ **loadDefaultFonts**(): `void`

#### Returns

`void`

#### Defined in

[modules/font.ts:18](https://github.com/philbgarner/retrolib/blob/61e1edc/src/modules/font.ts#L18)

___

### loadFromJSON

▸ **loadFromJSON**(`fontJson`): `FontData`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fontJson` | `object` |

#### Returns

`FontData`

#### Defined in

[modules/font.ts:25](https://github.com/philbgarner/retrolib/blob/61e1edc/src/modules/font.ts#L25)

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

[modules/font.ts:58](https://github.com/philbgarner/retrolib/blob/61e1edc/src/modules/font.ts#L58)

___

### textHeight

▸ **textHeight**(`text`, `font?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `font?` | `FontData` |

#### Returns

`number`

#### Defined in

[modules/font.ts:157](https://github.com/philbgarner/retrolib/blob/61e1edc/src/modules/font.ts#L157)

___

### textWidth

▸ **textWidth**(`text`, `font?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `font?` | `FontData` |

#### Returns

`number`

#### Defined in

[modules/font.ts:172](https://github.com/philbgarner/retrolib/blob/61e1edc/src/modules/font.ts#L172)
