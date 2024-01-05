[retrolib](../README.md) / [Exports](../modules.md) / scenes

# Namespace: scenes

## Table of contents

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

[modules/scenes.ts:24](https://github.com/philbgarner/retrolib/blob/42a7774/src/modules/scenes.ts#L24)

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

[modules/scenes.ts:10](https://github.com/philbgarner/retrolib/blob/42a7774/src/modules/scenes.ts#L10)

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

[modules/scenes.ts:33](https://github.com/philbgarner/retrolib/blob/42a7774/src/modules/scenes.ts#L33)

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

[modules/scenes.ts:15](https://github.com/philbgarner/retrolib/blob/42a7774/src/modules/scenes.ts#L15)

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

[modules/scenes.ts:49](https://github.com/philbgarner/retrolib/blob/42a7774/src/modules/scenes.ts#L49)

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

[modules/scenes.ts:41](https://github.com/philbgarner/retrolib/blob/42a7774/src/modules/scenes.ts#L41)

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

[modules/scenes.ts:20](https://github.com/philbgarner/retrolib/blob/42a7774/src/modules/scenes.ts#L20)
