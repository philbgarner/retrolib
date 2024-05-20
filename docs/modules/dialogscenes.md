[retrolib](../README.md) / [Exports](../modules.md) / dialogscenes

# Namespace: dialogscenes

## Table of contents

### Classes

- [default](../classes/dialogscenes.default.md)

### Interfaces

- [onEndedFunction](../interfaces/dialogscenes.onEndedFunction.md)

### Type Aliases

- [DialogLine](dialogscenes.md#dialogline)
- [DialogSceneLines](dialogscenes.md#dialogscenelines)

## Type Aliases

### DialogLine

Ƭ **DialogLine**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `color` | [`ColorRGBA`](font.md#colorrgba) |
| `delayAfter?` | `number` |
| `onEnded?` | [`onEndedFunction`](../interfaces/dialogscenes.onEndedFunction.md) |
| `speaker` | `string` |
| `text` | `string` |

#### Defined in

[modules/dialogscene.ts:11](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/dialogscene.ts#L11)

___

### DialogSceneLines

Ƭ **DialogSceneLines**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `lines` | [`DialogLine`](dialogscenes.md#dialogline)[] |
| `rect` | [`Rect`](../classes/Rect.md) |
| `skippable` | `boolean` |

#### Defined in

[modules/dialogscene.ts:19](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/dialogscene.ts#L19)
