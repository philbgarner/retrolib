[retrolib](README.md) / Exports

# retrolib

## Table of contents

### References

- [Menu](modules.md#menu)
- [MenuOption](modules.md#menuoption)
- [OnSelectionFunction](modules.md#onselectionfunction)

### Namespaces

- [font](modules/font.md)
- [gamepad](modules/gamepad.md)
- [images](modules/images.md)
- [input](modules/input.md)
- [keyboard](modules/keyboard.md)
- [menu](modules/menu.md)
- [menus](modules/menus.md)
- [music](modules/music.md)
- [scenes](modules/scenes.md)
- [sfx](modules/sfx.md)

### Classes

- [FontData](classes/FontData.md)
- [Glyph](classes/Glyph.md)
- [ImageDefinition](classes/ImageDefinition.md)
- [MusicDefinition](classes/MusicDefinition.md)
- [Rect](classes/Rect.md)
- [Scene](classes/Scene.md)
- [SfxDefinition](classes/SfxDefinition.md)

### Interfaces

- [AnimationFrameFunction](interfaces/AnimationFrameFunction.md)
- [InputHandlerFunction](interfaces/InputHandlerFunction.md)
- [OnActivateFunction](interfaces/OnActivateFunction.md)
- [OnDeactivateFunction](interfaces/OnDeactivateFunction.md)

### Variables

- [canvasHeight](modules.md#canvasheight)
- [canvasWidth](modules.md#canvaswidth)
- [gameCanvas](modules.md#gamecanvas)

### Functions

- [initialize](modules.md#initialize)
- [setCanvasBackground](modules.md#setcanvasbackground)

## References

### Menu

Renames and re-exports [default](classes/menu.default.md)

___

### MenuOption

Re-exports [MenuOption](modules/menu.md#menuoption)

___

### OnSelectionFunction

Re-exports [OnSelectionFunction](interfaces/menu.OnSelectionFunction.md)

## Variables

### canvasHeight

• **canvasHeight**: `number` = `0`

Canvas height (resolution y).

#### Defined in

[retrolib.ts:41](https://github.com/philbgarner/retrolib/blob/0d99a16/src/retrolib.ts#L41)

___

### canvasWidth

• **canvasWidth**: `number` = `0`

Canvas width (resolution x).

#### Defined in

[retrolib.ts:37](https://github.com/philbgarner/retrolib/blob/0d99a16/src/retrolib.ts#L37)

___

### gameCanvas

• **gameCanvas**: `HTMLCanvasElement` = `null`

Canvas element to draw on.

#### Defined in

[retrolib.ts:33](https://github.com/philbgarner/retrolib/blob/0d99a16/src/retrolib.ts#L33)

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

[retrolib.ts:99](https://github.com/philbgarner/retrolib/blob/0d99a16/src/retrolib.ts#L99)

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

[retrolib.ts:84](https://github.com/philbgarner/retrolib/blob/0d99a16/src/retrolib.ts#L84)
