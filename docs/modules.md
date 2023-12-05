[retrolib](README.md) / Exports

# retrolib

## Table of contents

### Namespaces

- [font](modules/font.md)
- [images](modules/images.md)
- [input](modules/input.md)
- [menus](modules/menus.md)
- [music](modules/music.md)
- [scenes](modules/scenes.md)
- [sfx](modules/sfx.md)

### Classes

- [Menu](classes/Menu.md)
- [Scene](classes/Scene.md)

### Variables

- [canvasHeight](modules.md#canvasheight)
- [canvasWidth](modules.md#canvaswidth)
- [gameCanvas](modules.md#gamecanvas)

### Functions

- [initialize](modules.md#initialize)
- [setCanvasBackground](modules.md#setcanvasbackground)

## Variables

### canvasHeight

• **canvasHeight**: `number` = `0`

#### Defined in

[retrolib.ts:19](https://github.com/philbgarner/retrolib/blob/61e1edc/src/retrolib.ts#L19)

___

### canvasWidth

• **canvasWidth**: `number` = `0`

#### Defined in

[retrolib.ts:18](https://github.com/philbgarner/retrolib/blob/61e1edc/src/retrolib.ts#L18)

___

### gameCanvas

• **gameCanvas**: `HTMLCanvasElement` = `null`

#### Defined in

[retrolib.ts:17](https://github.com/philbgarner/retrolib/blob/61e1edc/src/retrolib.ts#L17)

## Functions

### initialize

▸ **initialize**(`canvasId`, `width`, `height`, `buildCanvas`, `autoResize`): `void`

Initialize the retrolib engine.

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvasId` | `string` |
| `width` | `number` |
| `height` | `number` |
| `buildCanvas` | `boolean` |
| `autoResize` | `boolean` |

#### Returns

`void`

#### Defined in

[retrolib.ts:65](https://github.com/philbgarner/retrolib/blob/61e1edc/src/retrolib.ts#L65)

___

### setCanvasBackground

▸ **setCanvasBackground**(`color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `string` |

#### Returns

`void`

#### Defined in

[retrolib.ts:55](https://github.com/philbgarner/retrolib/blob/61e1edc/src/retrolib.ts#L55)
