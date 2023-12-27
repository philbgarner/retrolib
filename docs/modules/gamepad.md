[retrolib](../README.md) / [Exports](../modules.md) / gamepad

# Namespace: gamepad

## Table of contents

### Interfaces

- [GamepadConnectedFunction](../interfaces/gamepad.GamepadConnectedFunction.md)
- [GamepadDisonnectedFunction](../interfaces/gamepad.GamepadDisonnectedFunction.md)
- [GamepadUpdatedFunction](../interfaces/gamepad.GamepadUpdatedFunction.md)

### Type Aliases

- [GamepadAxisState](gamepad.md#gamepadaxisstate)
- [GamepadButtonState](gamepad.md#gamepadbuttonstate)
- [GamepadInputRelationship](gamepad.md#gamepadinputrelationship)

### Variables

- [axisMap](gamepad.md#axismap)
- [axisState](gamepad.md#axisstate)
- [buttonsMap](gamepad.md#buttonsmap)
- [buttonsState](gamepad.md#buttonsstate)
- [gamepadsTimestamps](gamepad.md#gamepadstimestamps)

### Functions

- [gamepadConnected](gamepad.md#gamepadconnected)
- [gamepadDisconnected](gamepad.md#gamepaddisconnected)
- [gamepadUpdated](gamepad.md#gamepadupdated)
- [gamepadsDidUpdate](gamepad.md#gamepadsdidupdate)
- [getAxisData](gamepad.md#getaxisdata)
- [getAxisInputState](gamepad.md#getaxisinputstate)
- [getButtonState](gamepad.md#getbuttonstate)
- [getGamepads](gamepad.md#getgamepads)
- [getMappedButtonIndex](gamepad.md#getmappedbuttonindex)
- [getMappedButtons](gamepad.md#getmappedbuttons)
- [onGamepadConnected](gamepad.md#ongamepadconnected)
- [onGamepadDisconnected](gamepad.md#ongamepaddisconnected)
- [onGamepadUpdated](gamepad.md#ongamepadupdated)
- [resetButtonsState](gamepad.md#resetbuttonsstate)
- [resetGamepadAxisMappings](gamepad.md#resetgamepadaxismappings)
- [resetGamepadButtonMappings](gamepad.md#resetgamepadbuttonmappings)
- [resetGamepadTimestamps](gamepad.md#resetgamepadtimestamps)
- [setGamepadConnected](gamepad.md#setgamepadconnected)
- [setGamepadDisconnected](gamepad.md#setgamepaddisconnected)
- [setGamepadTimestamps](gamepad.md#setgamepadtimestamps)
- [setGamepadUpdated](gamepad.md#setgamepadupdated)
- [setMappedButton](gamepad.md#setmappedbutton)

## Type Aliases

### GamepadAxisState

Ƭ **GamepadAxisState**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `controller` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Defined in

[modules/input-gamepad.ts:67](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/input-gamepad.ts#L67)

___

### GamepadButtonState

Ƭ **GamepadButtonState**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `controller` | `number` |
| `inputName` | `string` |
| `pressed` | `boolean` |
| `touched` | `boolean` |
| `value` | `number` |

#### Defined in

[modules/input-gamepad.ts:59](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/input-gamepad.ts#L59)

___

### GamepadInputRelationship

Ƭ **GamepadInputRelationship**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `button` | `number` |
| `inputName` | `string` |

#### Defined in

[modules/input-gamepad.ts:54](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/input-gamepad.ts#L54)

## Variables

### axisMap

• **axisMap**: `Object` = `{}`

#### Index signature

▪ [key: `string`]: `number`[]

#### Defined in

[modules/input-gamepad.ts:12](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/input-gamepad.ts#L12)

___

### axisState

• **axisState**: `Object` = `{}`

Globals

#### Index signature

▪ [key: `string`]: [`InputState`](../enums/input.InputState.md)

#### Defined in

[modules/input-gamepad.ts:9](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/input-gamepad.ts#L9)

___

### buttonsMap

• **buttonsMap**: `Object` = `{}`

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[modules/input-gamepad.ts:11](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/input-gamepad.ts#L11)

___

### buttonsState

• **buttonsState**: `Object` = `{}`

#### Index signature

▪ [key: `string`]: [`InputState`](../enums/input.InputState.md)

#### Defined in

[modules/input-gamepad.ts:10](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/input-gamepad.ts#L10)

___

### gamepadsTimestamps

• **gamepadsTimestamps**: `Object` = `{}`

#### Index signature

▪ [key: `number`]: `number`

#### Defined in

[modules/input-gamepad.ts:13](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/input-gamepad.ts#L13)

## Functions

### gamepadConnected

▸ **gamepadConnected**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `GamepadEvent` |

#### Returns

`void`

#### Defined in

[modules/input-gamepad.ts:47](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/input-gamepad.ts#L47)

___

### gamepadDisconnected

▸ **gamepadDisconnected**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `GamepadEvent` |

#### Returns

`void`

#### Defined in

[modules/input-gamepad.ts:51](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/input-gamepad.ts#L51)

___

### gamepadUpdated

▸ **gamepadUpdated**(`gamepad`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gamepad` | `Gamepad` |

#### Returns

`void`

#### Defined in

[modules/input-gamepad.ts:43](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/input-gamepad.ts#L43)

___

### gamepadsDidUpdate

▸ **gamepadsDidUpdate**(): `void`

#### Returns

`void`

#### Defined in

[modules/input-gamepad.ts:102](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/input-gamepad.ts#L102)

___

### getAxisData

▸ **getAxisData**(`inputName`): [`GamepadAxisState`](gamepad.md#gamepadaxisstate)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputName` | `string` |

#### Returns

[`GamepadAxisState`](gamepad.md#gamepadaxisstate)[]

#### Defined in

[modules/input-gamepad.ts:221](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/input-gamepad.ts#L221)

___

### getAxisInputState

▸ **getAxisInputState**(`inputName`): [`InputState`](../enums/input.InputState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputName` | `string` |

#### Returns

[`InputState`](../enums/input.InputState.md)

#### Defined in

[modules/input-gamepad.ts:217](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/input-gamepad.ts#L217)

___

### getButtonState

▸ **getButtonState**(`inputName`): [`GamepadButtonState`](gamepad.md#gamepadbuttonstate)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputName` | `string` |

#### Returns

[`GamepadButtonState`](gamepad.md#gamepadbuttonstate)[]

#### Defined in

[modules/input-gamepad.ts:204](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/input-gamepad.ts#L204)

___

### getGamepads

▸ **getGamepads**(): `Gamepad`[]

#### Returns

`Gamepad`[]

#### Defined in

[modules/input-gamepad.ts:183](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/input-gamepad.ts#L183)

___

### getMappedButtonIndex

▸ **getMappedButtonIndex**(`inputName`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputName` | `string` |

#### Returns

`number`

#### Defined in

[modules/input-gamepad.ts:187](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/input-gamepad.ts#L187)

___

### getMappedButtons

▸ **getMappedButtons**(): [`GamepadInputRelationship`](gamepad.md#gamepadinputrelationship)[]

#### Returns

[`GamepadInputRelationship`](gamepad.md#gamepadinputrelationship)[]

#### Defined in

[modules/input-gamepad.ts:191](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/input-gamepad.ts#L191)

___

### onGamepadConnected

▸ **onGamepadConnected**(`fn`): `void`

Gamepad Input Functions

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`GamepadConnectedFunction`](../interfaces/gamepad.GamepadConnectedFunction.md) |

#### Returns

`void`

#### Defined in

[modules/input-gamepad.ts:90](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/input-gamepad.ts#L90)

___

### onGamepadDisconnected

▸ **onGamepadDisconnected**(`fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`GamepadDisonnectedFunction`](../interfaces/gamepad.GamepadDisonnectedFunction.md) |

#### Returns

`void`

#### Defined in

[modules/input-gamepad.ts:94](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/input-gamepad.ts#L94)

___

### onGamepadUpdated

▸ **onGamepadUpdated**(`fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`GamepadUpdatedFunction`](../interfaces/gamepad.GamepadUpdatedFunction.md) |

#### Returns

`void`

#### Defined in

[modules/input-gamepad.ts:98](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/input-gamepad.ts#L98)

___

### resetButtonsState

▸ **resetButtonsState**(): `void`

#### Returns

`void`

#### Defined in

[modules/input-gamepad.ts:18](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/input-gamepad.ts#L18)

___

### resetGamepadAxisMappings

▸ **resetGamepadAxisMappings**(): `void`

#### Returns

`void`

#### Defined in

[modules/input-gamepad.ts:80](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/input-gamepad.ts#L80)

___

### resetGamepadButtonMappings

▸ **resetGamepadButtonMappings**(): `void`

Reset button mappings to defaults.

#### Returns

`void`

#### Defined in

[modules/input-gamepad.ts:76](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/input-gamepad.ts#L76)

___

### resetGamepadTimestamps

▸ **resetGamepadTimestamps**(): `void`

#### Returns

`void`

#### Defined in

[modules/input-gamepad.ts:22](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/input-gamepad.ts#L22)

___

### setGamepadConnected

▸ **setGamepadConnected**(`fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`GamepadConnectedFunction`](../interfaces/gamepad.GamepadConnectedFunction.md) |

#### Returns

`void`

#### Defined in

[modules/input-gamepad.ts:34](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/input-gamepad.ts#L34)

___

### setGamepadDisconnected

▸ **setGamepadDisconnected**(`fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`GamepadDisonnectedFunction`](../interfaces/gamepad.GamepadDisonnectedFunction.md) |

#### Returns

`void`

#### Defined in

[modules/input-gamepad.ts:38](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/input-gamepad.ts#L38)

___

### setGamepadTimestamps

▸ **setGamepadTimestamps**(`gamepadNumber`, `timestamp`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gamepadNumber` | `number` |
| `timestamp` | `number` |

#### Returns

`void`

#### Defined in

[modules/input-gamepad.ts:26](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/input-gamepad.ts#L26)

___

### setGamepadUpdated

▸ **setGamepadUpdated**(`fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`GamepadUpdatedFunction`](../interfaces/gamepad.GamepadUpdatedFunction.md) |

#### Returns

`void`

#### Defined in

[modules/input-gamepad.ts:30](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/input-gamepad.ts#L30)

___

### setMappedButton

▸ **setMappedButton**(`inputName`, `buttonIndex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputName` | `string` |
| `buttonIndex` | `number` |

#### Returns

`void`

#### Defined in

[modules/input-gamepad.ts:200](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/input-gamepad.ts#L200)
