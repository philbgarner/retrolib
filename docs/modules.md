[retrolib](README.md) / Exports

# retrolib

## Table of contents

### References

- [AnimationFrameFunction](modules.md#animationframefunction)
- [Aseprite](modules.md#aseprite)
- [DialogScene](modules.md#dialogscene)
- [InputHandlerFunction](modules.md#inputhandlerfunction)
- [Menu](modules.md#menu)
- [MenuOption](modules.md#menuoption)
- [OnActivateFunction](modules.md#onactivatefunction)
- [OnDeactivateFunction](modules.md#ondeactivatefunction)
- [OnSelectionFunction](modules.md#onselectionfunction)

### Namespaces

- [aseprite](modules/aseprite.md)
- [dialogscenes](modules/dialogscenes.md)
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
- [Timeline](classes/Timeline.md)

### Type Aliases

- [Coordinates](modules.md#coordinates)

### Variables

- [canvasHeight](modules.md#canvasheight)
- [canvasWidth](modules.md#canvaswidth)
- [gameCanvas](modules.md#gamecanvas)

### Functions

- [initialize](modules.md#initialize)
- [setCanvasBackground](modules.md#setcanvasbackground)

## References

### AnimationFrameFunction

Re-exports [AnimationFrameFunction](interfaces/scenes.AnimationFrameFunction.md)

___

### Aseprite

Re-exports [Aseprite](classes/aseprite.Aseprite.md)

___

### DialogScene

Renames and re-exports [default](classes/dialogscenes.default.md)

___

### InputHandlerFunction

Re-exports [InputHandlerFunction](interfaces/scenes.InputHandlerFunction.md)

___

### Menu

Renames and re-exports [default](classes/menu.default.md)

___

### MenuOption

Re-exports [MenuOption](modules/menu.md#menuoption)

___

### OnActivateFunction

Re-exports [OnActivateFunction](interfaces/scenes.OnActivateFunction.md)

___

### OnDeactivateFunction

Re-exports [OnDeactivateFunction](interfaces/scenes.OnDeactivateFunction.md)

___

### OnSelectionFunction

Re-exports [OnSelectionFunction](interfaces/menu.OnSelectionFunction.md)

## Type Aliases

### Coordinates

Ƭ **Coordinates**: `Object`

X and Y coordinates.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Defined in

[retrolib.ts:39](https://github.com/philbgarner/retrolib/blob/5d46b3a/src/retrolib.ts#L39)

## Variables

### canvasHeight

• **canvasHeight**: `number` = `0`

Canvas height (resolution y).

#### Defined in

[retrolib.ts:55](https://github.com/philbgarner/retrolib/blob/5d46b3a/src/retrolib.ts#L55)

___

### canvasWidth

• **canvasWidth**: `number` = `0`

Canvas width (resolution x).

#### Defined in

[retrolib.ts:51](https://github.com/philbgarner/retrolib/blob/5d46b3a/src/retrolib.ts#L51)

___

### gameCanvas

• **gameCanvas**: `HTMLCanvasElement` = `null`

Canvas element to draw on.

#### Defined in

[retrolib.ts:47](https://github.com/philbgarner/retrolib/blob/5d46b3a/src/retrolib.ts#L47)

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

[retrolib.ts:113](https://github.com/philbgarner/retrolib/blob/5d46b3a/src/retrolib.ts#L113)

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

[retrolib.ts:98](https://github.com/philbgarner/retrolib/blob/5d46b3a/src/retrolib.ts#L98)
