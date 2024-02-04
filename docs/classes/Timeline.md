[retrolib](../README.md) / [Exports](../modules.md) / Timeline

# Class: Timeline

Timeline class will be used by cutscenes to track
events and timing.  Put your event in the callback on the
timeline and call Update() every frame.

## Table of contents

### Constructors

- [constructor](Timeline.md#constructor)

### Properties

- [active](Timeline.md#active)
- [elapsedMaxTime](Timeline.md#elapsedmaxtime)
- [elapsedTime](Timeline.md#elapsedtime)
- [events](Timeline.md#events)
- [onEnded](Timeline.md#onended)
- [repeat](Timeline.md#repeat)

### Methods

- [Update](Timeline.md#update)
- [addEvent](Timeline.md#addevent)

## Constructors

### constructor

• **new Timeline**(): [`Timeline`](Timeline.md)

#### Returns

[`Timeline`](Timeline.md)

## Properties

### active

• **active**: `boolean` = `true`

#### Defined in

[modules/timeline.ts:26](https://github.com/philbgarner/retrolib/blob/9851c78/src/modules/timeline.ts#L26)

___

### elapsedMaxTime

• **elapsedMaxTime**: `number` = `0`

#### Defined in

[modules/timeline.ts:24](https://github.com/philbgarner/retrolib/blob/9851c78/src/modules/timeline.ts#L24)

___

### elapsedTime

• **elapsedTime**: `number` = `0`

#### Defined in

[modules/timeline.ts:23](https://github.com/philbgarner/retrolib/blob/9851c78/src/modules/timeline.ts#L23)

___

### events

• **events**: `TimelineEvent`[] = `[]`

#### Defined in

[modules/timeline.ts:22](https://github.com/philbgarner/retrolib/blob/9851c78/src/modules/timeline.ts#L22)

___

### onEnded

• **onEnded**: `OnTimelineEnded`

#### Defined in

[modules/timeline.ts:27](https://github.com/philbgarner/retrolib/blob/9851c78/src/modules/timeline.ts#L27)

___

### repeat

• **repeat**: `boolean` = `false`

#### Defined in

[modules/timeline.ts:25](https://github.com/philbgarner/retrolib/blob/9851c78/src/modules/timeline.ts#L25)

## Methods

### Update

▸ **Update**(`delta`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `delta` | `number` |

#### Returns

`void`

#### Defined in

[modules/timeline.ts:36](https://github.com/philbgarner/retrolib/blob/9851c78/src/modules/timeline.ts#L36)

___

### addEvent

▸ **addEvent**(`name`, `elapsedTime`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `elapsedTime` | `number` |
| `callback` | `TimelineCallback` |

#### Returns

`void`

#### Defined in

[modules/timeline.ts:29](https://github.com/philbgarner/retrolib/blob/9851c78/src/modules/timeline.ts#L29)
