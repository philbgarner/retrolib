[retrolib](README.md) / Exports

# retrolib

## Table of contents

### Namespaces

- [font](modules/font.md)
- [gamepad](modules/gamepad.md)
- [images](modules/images.md)
- [input](modules/input.md)
- [keyboard](modules/keyboard.md)
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
| `onInput` | `OnInputFunction` |
| `rect` | [`Rect`](classes/Rect.md) |
| `text` | `string` |

#### Defined in

[modules/menu.ts:12](https://github.com/philbgarner/retrolib/blob/dcec759/src/modules/menu.ts#L12)

## Variables

### canvasHeight

• **canvasHeight**: `number` = `0`

Canvas height (resolution y).

#### Defined in

[retrolib.ts:40](https://github.com/philbgarner/retrolib/blob/dcec759/src/retrolib.ts#L40)

___

### canvasWidth

• **canvasWidth**: `number` = `0`

Canvas width (resolution x).

#### Defined in

[retrolib.ts:36](https://github.com/philbgarner/retrolib/blob/dcec759/src/retrolib.ts#L36)

___

### gameCanvas

• **gameCanvas**: `HTMLCanvasElement` = `null`

Canvas element to draw on.

#### Defined in

[retrolib.ts:32](https://github.com/philbgarner/retrolib/blob/dcec759/src/retrolib.ts#L32)

## Functions

### initialize

▸ **initialize**(`canvasId`, `width`, `height`, `buildCanvas`, `autoResize`): `void`

Initialize the retrolib engine.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `canvasId` | `string` | Id attribute of existing canvas, or id attribute to give to created canvas element. |
| `width` | `number` | X resolution. |
| `height` | `number` | Y resolution. |
| `buildCanvas` | `boolean` | Whether or not to create a canvas element. |
| `autoResize` | `boolean` | Whether or not to autoresize the canvas to the window. |

#### Returns

`void`

#### Defined in

[retrolib.ts:98](https://github.com/philbgarner/retrolib/blob/dcec759/src/retrolib.ts#L98)

___

### setCanvasBackground

▸ **setCanvasBackground**(`color`): `void`

Set the canvas element's background value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `string` | CSS background for canvas element. |

#### Returns

`void`

#### Defined in

[retrolib.ts:83](https://github.com/philbgarner/retrolib/blob/dcec759/src/retrolib.ts#L83)
