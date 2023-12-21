[retrolib](../README.md) / [Exports](../modules.md) / scenes

# Namespace: scenes

## Table of contents

### Functions

- [activateScene](scenes.md#activatescene)
- [addScene](scenes.md#addscene)
- [deActivateScene](scenes.md#deactivatescene)
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

[modules/scenes.ts:17](https://github.com/philbgarner/retrolib/blob/7d31d65/src/modules/scenes.ts#L17)

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

[modules/scenes.ts:8](https://github.com/philbgarner/retrolib/blob/7d31d65/src/modules/scenes.ts#L8)

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

[modules/scenes.ts:25](https://github.com/philbgarner/retrolib/blob/7d31d65/src/modules/scenes.ts#L25)

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

[modules/scenes.ts:41](https://github.com/philbgarner/retrolib/blob/7d31d65/src/modules/scenes.ts#L41)

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

[modules/scenes.ts:33](https://github.com/philbgarner/retrolib/blob/7d31d65/src/modules/scenes.ts#L33)

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

[modules/scenes.ts:13](https://github.com/philbgarner/retrolib/blob/7d31d65/src/modules/scenes.ts#L13)
