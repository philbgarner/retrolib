[retrolib](../README.md) / [Exports](../modules.md) / [aseprite](../modules/aseprite.md) / Aseprite

# Class: Aseprite

[aseprite](../modules/aseprite.md).Aseprite

Sprite controller, a wrapper for Aseprite JSON export format.

## Table of contents

### Constructors

- [constructor](aseprite.Aseprite.md#constructor)

### Properties

- [animation](aseprite.Aseprite.md#animation)
- [direction](aseprite.Aseprite.md#direction)
- [elapsed](aseprite.Aseprite.md#elapsed)
- [frameElapsed](aseprite.Aseprite.md#frameelapsed)
- [frameNumber](aseprite.Aseprite.md#framenumber)
- [frames](aseprite.Aseprite.md#frames)
- [listeners](aseprite.Aseprite.md#listeners)
- [meta](aseprite.Aseprite.md#meta)
- [name](aseprite.Aseprite.md#name)

### Methods

- [AddListener](aseprite.Aseprite.md#addlistener)
- [CallListener](aseprite.Aseprite.md#calllistener)
- [ClearListener](aseprite.Aseprite.md#clearlistener)
- [CurrentFrame](aseprite.Aseprite.md#currentframe)
- [CurrentFrameId](aseprite.Aseprite.md#currentframeid)
- [Draw](aseprite.Aseprite.md#draw)
- [Frame](aseprite.Aseprite.md#frame)
- [FrameCount](aseprite.Aseprite.md#framecount)
- [FrameId](aseprite.Aseprite.md#frameid)
- [FrameMetaTag](aseprite.Aseprite.md#framemetatag)
- [GetListener](aseprite.Aseprite.md#getlistener)
- [HasListener](aseprite.Aseprite.md#haslistener)
- [MetaTag](aseprite.Aseprite.md#metatag)
- [Pause](aseprite.Aseprite.md#pause)
- [Play](aseprite.Aseprite.md#play)
- [PlayFromStart](aseprite.Aseprite.md#playfromstart)
- [Update](aseprite.Aseprite.md#update)

## Constructors

### constructor

• **new Aseprite**(`name`, `animation`): [`Aseprite`](aseprite.Aseprite.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `animation` | [`Animation`](../interfaces/aseprite.Animation.md) |

#### Returns

[`Aseprite`](aseprite.Aseprite.md)

#### Defined in

[modules/aseprite.ts:104](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/aseprite.ts#L104)

## Properties

### animation

• **animation**: [`Animation`](../interfaces/aseprite.Animation.md)

#### Defined in

[modules/aseprite.ts:92](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/aseprite.ts#L92)

___

### direction

• **direction**: `number`

#### Defined in

[modules/aseprite.ts:100](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/aseprite.ts#L100)

___

### elapsed

• **elapsed**: `number`

#### Defined in

[modules/aseprite.ts:98](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/aseprite.ts#L98)

___

### frameElapsed

• **frameElapsed**: `number`

#### Defined in

[modules/aseprite.ts:99](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/aseprite.ts#L99)

___

### frameNumber

• **frameNumber**: `number`

#### Defined in

[modules/aseprite.ts:97](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/aseprite.ts#L97)

___

### frames

• **frames**: `Object`

#### Index signature

▪ [key: `string`]: [`FrameValue`](../interfaces/aseprite.FrameValue.md)

#### Defined in

[modules/aseprite.ts:93](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/aseprite.ts#L93)

___

### listeners

• **listeners**: [`Listener`](../interfaces/aseprite.Listener.md)[]

#### Defined in

[modules/aseprite.ts:102](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/aseprite.ts#L102)

___

### meta

• **meta**: [`Meta`](../interfaces/aseprite.Meta.md)

#### Defined in

[modules/aseprite.ts:96](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/aseprite.ts#L96)

___

### name

• **name**: `string`

#### Defined in

[modules/aseprite.ts:91](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/aseprite.ts#L91)

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

[modules/aseprite.ts:135](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/aseprite.ts#L135)

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

[modules/aseprite.ts:121](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/aseprite.ts#L121)

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

[modules/aseprite.ts:145](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/aseprite.ts#L145)

___

### CurrentFrame

▸ **CurrentFrame**(): [`FrameValue`](../interfaces/aseprite.FrameValue.md)

#### Returns

[`FrameValue`](../interfaces/aseprite.FrameValue.md)

#### Defined in

[modules/aseprite.ts:183](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/aseprite.ts#L183)

___

### CurrentFrameId

▸ **CurrentFrameId**(): `string`

#### Returns

`string`

#### Defined in

[modules/aseprite.ts:179](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/aseprite.ts#L179)

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

[modules/aseprite.ts:245](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/aseprite.ts#L245)

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

[modules/aseprite.ts:171](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/aseprite.ts#L171)

___

### FrameCount

▸ **FrameCount**(): `number`

#### Returns

`number`

#### Defined in

[modules/aseprite.ts:175](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/aseprite.ts#L175)

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

[modules/aseprite.ts:166](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/aseprite.ts#L166)

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

[modules/aseprite.ts:187](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/aseprite.ts#L187)

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

[modules/aseprite.ts:127](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/aseprite.ts#L127)

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

[modules/aseprite.ts:141](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/aseprite.ts#L141)

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

[modules/aseprite.ts:192](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/aseprite.ts#L192)

___

### Pause

▸ **Pause**(): `void`

#### Returns

`void`

#### Defined in

[modules/aseprite.ts:162](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/aseprite.ts#L162)

___

### Play

▸ **Play**(): `void`

#### Returns

`void`

#### Defined in

[modules/aseprite.ts:151](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/aseprite.ts#L151)

___

### PlayFromStart

▸ **PlayFromStart**(): `void`

#### Returns

`void`

#### Defined in

[modules/aseprite.ts:155](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/aseprite.ts#L155)

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

[modules/aseprite.ts:196](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/aseprite.ts#L196)
