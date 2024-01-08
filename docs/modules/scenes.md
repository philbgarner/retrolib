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

[modules/scenes.ts:47](https://github.com/philbgarner/retrolib/blob/d6d017d/src/modules/scenes.ts#L47)

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

[modules/scenes.ts:33](https://github.com/philbgarner/retrolib/blob/d6d017d/src/modules/scenes.ts#L33)

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

[modules/scenes.ts:56](https://github.com/philbgarner/retrolib/blob/d6d017d/src/modules/scenes.ts#L56)

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

[modules/scenes.ts:38](https://github.com/philbgarner/retrolib/blob/d6d017d/src/modules/scenes.ts#L38)

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

[modules/scenes.ts:72](https://github.com/philbgarner/retrolib/blob/d6d017d/src/modules/scenes.ts#L72)

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

[modules/scenes.ts:64](https://github.com/philbgarner/retrolib/blob/d6d017d/src/modules/scenes.ts#L64)

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

[modules/scenes.ts:43](https://github.com/philbgarner/retrolib/blob/d6d017d/src/modules/scenes.ts#L43)
