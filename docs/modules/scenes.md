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
- [deActivateScene](scenes.md#deactivatescene)
- [getScene](scenes.md#getscene)
- [getScenes](scenes.md#getscenes)
- [handleAnimationFrame](scenes.md#handleanimationframe)
- [handleInput](scenes.md#handleinput)
- [hasScene](scenes.md#hasscene)
- [removeScene](scenes.md#removescene)

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

[modules/scenes.ts:54](https://github.com/philbgarner/retrolib/blob/892bb86/src/modules/scenes.ts#L54)

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

[modules/scenes.ts:63](https://github.com/philbgarner/retrolib/blob/892bb86/src/modules/scenes.ts#L63)

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

[modules/scenes.ts:45](https://github.com/philbgarner/retrolib/blob/892bb86/src/modules/scenes.ts#L45)

___

### getScenes

▸ **getScenes**(): [`Scene`](../classes/Scene.md)[]

#### Returns

[`Scene`](../classes/Scene.md)[]

#### Defined in

[modules/scenes.ts:32](https://github.com/philbgarner/retrolib/blob/892bb86/src/modules/scenes.ts#L32)

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

[modules/scenes.ts:79](https://github.com/philbgarner/retrolib/blob/892bb86/src/modules/scenes.ts#L79)

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

[modules/scenes.ts:71](https://github.com/philbgarner/retrolib/blob/892bb86/src/modules/scenes.ts#L71)

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

[modules/scenes.ts:50](https://github.com/philbgarner/retrolib/blob/892bb86/src/modules/scenes.ts#L50)

___

### removeScene

▸ **removeScene**(`sceneName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sceneName` | `string` |

#### Returns

`void`

#### Defined in

[modules/scenes.ts:36](https://github.com/philbgarner/retrolib/blob/892bb86/src/modules/scenes.ts#L36)
