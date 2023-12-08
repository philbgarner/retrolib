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

- [FontData](classes/FontData.md)
- [Glyph](classes/Glyph.md)
- [ImageDefinition](classes/ImageDefinition.md)
- [Menu](classes/Menu.md)
- [MusicDefinition](classes/MusicDefinition.md)
- [Rect](classes/Rect.md)
- [Scene](classes/Scene.md)
- [SfxDefinition](classes/SfxDefinition.md)

### Interfaces

- [AnimationFrameFunction](interfaces/AnimationFrameFunction.md)
- [InputHandlerFunction](interfaces/InputHandlerFunction.md)
- [OnActivateFunction](interfaces/OnActivateFunction.md)
- [OnDeactivateFunction](interfaces/OnDeactivateFunction.md)
- [OnSelectionFunction](interfaces/OnSelectionFunction.md)

### Type Aliases

- [MenuOption](modules.md#menuoption)

### Variables

- [canvasHeight](modules.md#canvasheight)
- [canvasWidth](modules.md#canvaswidth)
- [gameCanvas](modules.md#gamecanvas)

### Functions

- [initialize](modules.md#initialize)
- [setCanvasBackground](modules.md#setcanvasbackground)

## Type Aliases

### MenuOption

Ƭ **MenuOption**: `Object`

Menu item.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `onAction?` | [`OnSelectionFunction`](interfaces/OnSelectionFunction.md) |
| `onCancel?` | [`OnSelectionFunction`](interfaces/OnSelectionFunction.md) |
| `rect` | [`Rect`](classes/Rect.md) |
| `text` | `string` |

#### Defined in

[modules/menu.ts:10](https://github.com/philbgarner/retrolib/blob/84e78a1/src/modules/menu.ts#L10)

## Variables

### canvasHeight

• **canvasHeight**: `number` = `0`

#### Defined in

[retrolib.ts:32](https://github.com/philbgarner/retrolib/blob/84e78a1/src/retrolib.ts#L32)

___

### canvasWidth

• **canvasWidth**: `number` = `0`

#### Defined in

[retrolib.ts:31](https://github.com/philbgarner/retrolib/blob/84e78a1/src/retrolib.ts#L31)

___

### gameCanvas

• **gameCanvas**: `HTMLCanvasElement` = `null`

#### Defined in

[retrolib.ts:30](https://github.com/philbgarner/retrolib/blob/84e78a1/src/retrolib.ts#L30)

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

[retrolib.ts:78](https://github.com/philbgarner/retrolib/blob/84e78a1/src/retrolib.ts#L78)

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

[retrolib.ts:68](https://github.com/philbgarner/retrolib/blob/84e78a1/src/retrolib.ts#L68)
