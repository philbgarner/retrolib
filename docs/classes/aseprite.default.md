[retrolib](../README.md) / [Exports](../modules.md) / [aseprite](../modules/aseprite.md) / default

# Class: default

[aseprite](../modules/aseprite.md).default

Sprite controller, a wrapper for Aseprite JSON export format.

## Table of contents

### Constructors

- [constructor](aseprite.default.md#constructor)

### Properties

- [animation](aseprite.default.md#animation)
- [direction](aseprite.default.md#direction)
- [elapsed](aseprite.default.md#elapsed)
- [frameElapsed](aseprite.default.md#frameelapsed)
- [frameNumber](aseprite.default.md#framenumber)
- [frames](aseprite.default.md#frames)
- [listeners](aseprite.default.md#listeners)
- [meta](aseprite.default.md#meta)
- [name](aseprite.default.md#name)

### Methods

- [AddListener](aseprite.default.md#addlistener)
- [CallListener](aseprite.default.md#calllistener)
- [ClearListener](aseprite.default.md#clearlistener)
- [CurrentFrame](aseprite.default.md#currentframe)
- [CurrentFrameId](aseprite.default.md#currentframeid)
- [Draw](aseprite.default.md#draw)
- [Frame](aseprite.default.md#frame)
- [FrameId](aseprite.default.md#frameid)
- [FrameMetaTag](aseprite.default.md#framemetatag)
- [GetListener](aseprite.default.md#getlistener)
- [HasListener](aseprite.default.md#haslistener)
- [MetaTag](aseprite.default.md#metatag)
- [Pause](aseprite.default.md#pause)
- [Play](aseprite.default.md#play)
- [PlayFromStart](aseprite.default.md#playfromstart)
- [Update](aseprite.default.md#update)

## Constructors

### constructor

• **new default**(`name`, `animation`): [`default`](aseprite.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `animation` | [`Animation`](../interfaces/aseprite.Animation.md) |

#### Returns

[`default`](aseprite.default.md)

#### Defined in

[modules/aseprite.ts:104](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/aseprite.ts#L104)

## Properties

### animation

• **animation**: [`Animation`](../interfaces/aseprite.Animation.md)

#### Defined in

[modules/aseprite.ts:92](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/aseprite.ts#L92)

___

### direction

• **direction**: `number`

#### Defined in

[modules/aseprite.ts:100](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/aseprite.ts#L100)

___

### elapsed

• **elapsed**: `number`

#### Defined in

[modules/aseprite.ts:98](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/aseprite.ts#L98)

___

### frameElapsed

• **frameElapsed**: `number`

#### Defined in

[modules/aseprite.ts:99](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/aseprite.ts#L99)

___

### frameNumber

• **frameNumber**: `number`

#### Defined in

[modules/aseprite.ts:97](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/aseprite.ts#L97)

___

### frames

• **frames**: `Object`

#### Index signature

▪ [key: `string`]: [`FrameValue`](../interfaces/aseprite.FrameValue.md)

#### Defined in

[modules/aseprite.ts:93](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/aseprite.ts#L93)

___

### listeners

• **listeners**: [`Listener`](../interfaces/aseprite.Listener.md)[]

#### Defined in

[modules/aseprite.ts:102](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/aseprite.ts#L102)

___

### meta

• **meta**: [`Meta`](../interfaces/aseprite.Meta.md)

#### Defined in

[modules/aseprite.ts:96](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/aseprite.ts#L96)

___

### name

• **name**: `string`

#### Defined in

[modules/aseprite.ts:91](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/aseprite.ts#L91)

## Methods

### AddListener

▸ **AddListener**(`name`, `frameNumber`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `frameNumber` | `number` |
| `callback` | [`SpriteEvent`](../interfaces/aseprite.SpriteEvent.md) |

#### Returns

`void`

#### Defined in

[modules/aseprite.ts:135](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/aseprite.ts#L135)

___

### CallListener

▸ **CallListener**(`name`, `frameNumber`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `frameNumber` | `number` |

#### Returns

`void`

#### Defined in

[modules/aseprite.ts:121](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/aseprite.ts#L121)

___

### ClearListener

▸ **ClearListener**(`name`, `frameNumber`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `frameNumber` | `number` |

#### Returns

`void`

#### Defined in

[modules/aseprite.ts:145](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/aseprite.ts#L145)

___

### CurrentFrame

▸ **CurrentFrame**(): [`FrameValue`](../interfaces/aseprite.FrameValue.md)

#### Returns

[`FrameValue`](../interfaces/aseprite.FrameValue.md)

#### Defined in

[modules/aseprite.ts:179](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/aseprite.ts#L179)

___

### CurrentFrameId

▸ **CurrentFrameId**(): `string`

#### Returns

`string`

#### Defined in

[modules/aseprite.ts:175](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/aseprite.ts#L175)

___

### Draw

▸ **Draw**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Defined in

[modules/aseprite.ts:238](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/aseprite.ts#L238)

___

### Frame

▸ **Frame**(`frameNumber`): [`FrameValue`](../interfaces/aseprite.FrameValue.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `frameNumber` | `number` |

#### Returns

[`FrameValue`](../interfaces/aseprite.FrameValue.md)

#### Defined in

[modules/aseprite.ts:171](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/aseprite.ts#L171)

___

### FrameId

▸ **FrameId**(`frameNumber`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `frameNumber` | `number` |

#### Returns

`string`

#### Defined in

[modules/aseprite.ts:166](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/aseprite.ts#L166)

___

### FrameMetaTag

▸ **FrameMetaTag**(`frameNumber`): [`FrameTag`](../interfaces/aseprite.FrameTag.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `frameNumber` | `number` |

#### Returns

[`FrameTag`](../interfaces/aseprite.FrameTag.md)

#### Defined in

[modules/aseprite.ts:183](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/aseprite.ts#L183)

___

### GetListener

▸ **GetListener**(`name`, `frameNumber`): [`Listener`](../interfaces/aseprite.Listener.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `frameNumber` | `number` |

#### Returns

[`Listener`](../interfaces/aseprite.Listener.md)

#### Defined in

[modules/aseprite.ts:127](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/aseprite.ts#L127)

___

### HasListener

▸ **HasListener**(`name`, `frameNumber`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `frameNumber` | `number` |

#### Returns

`boolean`

#### Defined in

[modules/aseprite.ts:141](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/aseprite.ts#L141)

___

### MetaTag

▸ **MetaTag**(`frameTag`): [`FrameTag`](../interfaces/aseprite.FrameTag.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `frameTag` | `string` |

#### Returns

[`FrameTag`](../interfaces/aseprite.FrameTag.md)[]

#### Defined in

[modules/aseprite.ts:188](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/aseprite.ts#L188)

___

### Pause

▸ **Pause**(): `void`

#### Returns

`void`

#### Defined in

[modules/aseprite.ts:162](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/aseprite.ts#L162)

___

### Play

▸ **Play**(): `void`

#### Returns

`void`

#### Defined in

[modules/aseprite.ts:151](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/aseprite.ts#L151)

___

### PlayFromStart

▸ **PlayFromStart**(): `void`

#### Returns

`void`

#### Defined in

[modules/aseprite.ts:155](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/aseprite.ts#L155)

___

### Update

▸ **Update**(`delta`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `delta` | `number` |

#### Returns

`void`

#### Defined in

[modules/aseprite.ts:192](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/aseprite.ts#L192)
