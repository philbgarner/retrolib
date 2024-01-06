[retrolib](../README.md) / [Exports](../modules.md) / scenes

# Namespace: scenes

## Table of contents

### Enumerations

- [TransitionEffect](../enums/scenes.TransitionEffect.md)

### Interfaces

- [AnimationFrameFunction](../interfaces/scenes.AnimationFrameFunction.md)
- [InputHandlerFunction](../interfaces/scenes.InputHandlerFunction.md)
- [OnActivateFunction](../interfaces/scenes.OnActivateFunction.md)
- [OnDeactivateFunction](../interfaces/scenes.OnDeactivateFunction.md)

### Functions

- [activateScene](scenes.md#activatescene)
- [addScene](scenes.md#addscene)
- [deActivateScene](scenes.md#deactivatescene)
- [getScene](scenes.md#getscene)
- [handleAnimationFrame](scenes.md#handleanimationframe)
- [handleInput](scenes.md#handleinput)
- [hasScene](scenes.md#hasscene)

## Functions

### activateScene

▸ **activateScene**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Defined in

[modules/scenes.ts:46](https://github.com/philbgarner/retrolib/blob/63effeb/src/modules/scenes.ts#L46)

___

### addScene

▸ **addScene**(`scene`): [`Scene`](../classes/Scene.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | [`Scene`](../classes/Scene.md) |

#### Returns

[`Scene`](../classes/Scene.md)

#### Defined in

[modules/scenes.ts:32](https://github.com/philbgarner/retrolib/blob/63effeb/src/modules/scenes.ts#L32)

___

### deActivateScene

▸ **deActivateScene**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Defined in

[modules/scenes.ts:55](https://github.com/philbgarner/retrolib/blob/63effeb/src/modules/scenes.ts#L55)

___

### getScene

▸ **getScene**(`sceneId`): [`Scene`](../classes/Scene.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sceneId` | `string` |

#### Returns

[`Scene`](../classes/Scene.md)

#### Defined in

[modules/scenes.ts:37](https://github.com/philbgarner/retrolib/blob/63effeb/src/modules/scenes.ts#L37)

___

### handleAnimationFrame

▸ **handleAnimationFrame**(`timeStamp`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeStamp` | `number` |

#### Returns

`void`

#### Defined in

[modules/scenes.ts:71](https://github.com/philbgarner/retrolib/blob/63effeb/src/modules/scenes.ts#L71)

___

### handleInput

▸ **handleInput**(`input`, `amt`, `released`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |
| `amt` | `number` |
| `released` | `boolean` |

#### Returns

`void`

#### Defined in

[modules/scenes.ts:63](https://github.com/philbgarner/retrolib/blob/63effeb/src/modules/scenes.ts#L63)

___

### hasScene

▸ **hasScene**(`id`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`boolean`

#### Defined in

[modules/scenes.ts:42](https://github.com/philbgarner/retrolib/blob/63effeb/src/modules/scenes.ts#L42)
