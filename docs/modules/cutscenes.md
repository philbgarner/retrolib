[retrolib](../README.md) / [Exports](../modules.md) / cutscenes

# Namespace: cutscenes

## Table of contents

### Classes

- [default](../classes/cutscenes.default.md)

### Interfaces

- [onEndedFunction](../interfaces/cutscenes.onEndedFunction.md)

### Type Aliases

- [CutsceneDialog](cutscenes.md#cutscenedialog)
- [DialogLine](cutscenes.md#dialogline)

## Type Aliases

### CutsceneDialog

Ƭ **CutsceneDialog**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `lines` | [`DialogLine`](cutscenes.md#dialogline)[] |
| `rect` | [`Rect`](../classes/Rect.md) |
| `skippable` | `boolean` |

#### Defined in

[modules/cutscene.ts:18](https://github.com/philbgarner/retrolib/blob/d6d017d/src/modules/cutscene.ts#L18)

___

### DialogLine

Ƭ **DialogLine**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `color` | [`ColorRGBA`](font.md#colorrgba) |
| `onEnded?` | [`onEndedFunction`](../interfaces/cutscenes.onEndedFunction.md) |
| `speaker` | `string` |
| `text` | `string` |

#### Defined in

[modules/cutscene.ts:11](https://github.com/philbgarner/retrolib/blob/d6d017d/src/modules/cutscene.ts#L11)
