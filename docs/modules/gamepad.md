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
- [buttonsMap](gamepad.md#buttonsmap)
- [buttonsState](gamepad.md#buttonsstate)
- [gamepadsTimestamps](gamepad.md#gamepadstimestamps)

### Functions

- [gamepadConnected](gamepad.md#gamepadconnected)
- [gamepadDisconnected](gamepad.md#gamepaddisconnected)
- [gamepadUpdated](gamepad.md#gamepadupdated)
- [gamepadsDidUpdate](gamepad.md#gamepadsdidupdate)
- [getAxisState](gamepad.md#getaxisstate)
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

modules/input-gamepad.ts:66

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

modules/input-gamepad.ts:58

___

### GamepadInputRelationship

Ƭ **GamepadInputRelationship**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `button` | `number` |
| `inputName` | `string` |

#### Defined in

modules/input-gamepad.ts:53

## Variables

### axisMap

• **axisMap**: `Object` = `{}`

#### Index signature

▪ [key: `string`]: `number`[]

#### Defined in

modules/input-gamepad.ts:11

___

### buttonsMap

• **buttonsMap**: `Object` = `{}`

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

modules/input-gamepad.ts:10

___

### buttonsState

• **buttonsState**: `Object`

Globals

#### Index signature

▪ [key: `string`]: [`InputState`](../enums/input.InputState.md)

#### Defined in

modules/input-gamepad.ts:9

___

### gamepadsTimestamps

• **gamepadsTimestamps**: `Object` = `{}`

#### Index signature

▪ [key: `number`]: `number`

#### Defined in

modules/input-gamepad.ts:12

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

modules/input-gamepad.ts:46

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

modules/input-gamepad.ts:50

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

modules/input-gamepad.ts:42

___

### gamepadsDidUpdate

▸ **gamepadsDidUpdate**(): `void`

#### Returns

`void`

#### Defined in

modules/input-gamepad.ts:101

___

### getAxisState

▸ **getAxisState**(`inputName`): [`GamepadAxisState`](gamepad.md#gamepadaxisstate)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputName` | `string` |

#### Returns

[`GamepadAxisState`](gamepad.md#gamepadaxisstate)[]

#### Defined in

modules/input-gamepad.ts:144

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

modules/input-gamepad.ts:131

___

### getGamepads

▸ **getGamepads**(): `Gamepad`[]

#### Returns

`Gamepad`[]

#### Defined in

modules/input-gamepad.ts:110

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

modules/input-gamepad.ts:114

___

### getMappedButtons

▸ **getMappedButtons**(): [`GamepadInputRelationship`](gamepad.md#gamepadinputrelationship)[]

#### Returns

[`GamepadInputRelationship`](gamepad.md#gamepadinputrelationship)[]

#### Defined in

modules/input-gamepad.ts:118

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

modules/input-gamepad.ts:89

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

modules/input-gamepad.ts:93

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

modules/input-gamepad.ts:97

___

### resetButtonsState

▸ **resetButtonsState**(): `void`

#### Returns

`void`

#### Defined in

modules/input-gamepad.ts:17

___

### resetGamepadAxisMappings

▸ **resetGamepadAxisMappings**(): `void`

#### Returns

`void`

#### Defined in

modules/input-gamepad.ts:79

___

### resetGamepadButtonMappings

▸ **resetGamepadButtonMappings**(): `void`

Reset button mappings to defaults.

#### Returns

`void`

#### Defined in

modules/input-gamepad.ts:75

___

### resetGamepadTimestamps

▸ **resetGamepadTimestamps**(): `void`

#### Returns

`void`

#### Defined in

modules/input-gamepad.ts:21

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

modules/input-gamepad.ts:33

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

modules/input-gamepad.ts:37

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

modules/input-gamepad.ts:25

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

modules/input-gamepad.ts:29

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

modules/input-gamepad.ts:127
