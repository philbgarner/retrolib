[retrolib](../README.md) / [Exports](../modules.md) / input

# Namespace: input

## Table of contents

### Enumerations

- [InputType](../enums/input.InputType.md)

### Interfaces

- [GamepadConnectedFunction](../interfaces/input.GamepadConnectedFunction.md)
- [GamepadDisonnectedFunction](../interfaces/input.GamepadDisonnectedFunction.md)
- [GamepadUpdatedFunction](../interfaces/input.GamepadUpdatedFunction.md)
- [KeyboardDownFunction](../interfaces/input.KeyboardDownFunction.md)
- [KeyboardReleaseFunction](../interfaces/input.KeyboardReleaseFunction.md)

### Type Aliases

- [GamepadAxisState](input.md#gamepadaxisstate)
- [GamepadButtonState](input.md#gamepadbuttonstate)
- [GamepadInputRelationship](input.md#gamepadinputrelationship)
- [InputMap](input.md#inputmap)
- [InputSettings](input.md#inputsettings)
- [KeyboardInputRelationship](input.md#keyboardinputrelationship)

### Functions

- [axisPressed](input.md#axispressed)
- [buttonPressed](input.md#buttonpressed)
- [gamepadsDidUpdate](input.md#gamepadsdidupdate)
- [getAxisState](input.md#getaxisstate)
- [getButtonState](input.md#getbuttonstate)
- [getGamepads](input.md#getgamepads)
- [getInputKeyState](input.md#getinputkeystate)
- [getKeyState](input.md#getkeystate)
- [getMappedButtonIndex](input.md#getmappedbuttonindex)
- [getMappedButtons](input.md#getmappedbuttons)
- [getMappedKey](input.md#getmappedkey)
- [getMappedKeys](input.md#getmappedkeys)
- [initialize](input.md#initialize)
- [inputPressed](input.md#inputpressed)
- [keyboardDown](input.md#keyboarddown)
- [keyboardRelease](input.md#keyboardrelease)
- [onGamepadConnected](input.md#ongamepadconnected)
- [onGamepadDisconnected](input.md#ongamepaddisconnected)
- [onGamepadUpdated](input.md#ongamepadupdated)
- [onKeyboardDown](input.md#onkeyboarddown)
- [onKeyboardRelease](input.md#onkeyboardrelease)
- [resetGamepadAxisMappings](input.md#resetgamepadaxismappings)
- [resetGamepadButtonMappings](input.md#resetgamepadbuttonmappings)
- [resetInputMaps](input.md#resetinputmaps)
- [resetKeyboardMappings](input.md#resetkeyboardmappings)
- [setMappedButton](input.md#setmappedbutton)
- [setMappedKey](input.md#setmappedkey)

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

[modules/input.ts:90](https://github.com/philbgarner/retrolib/blob/84e78a1/src/modules/input.ts#L90)

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

[modules/input.ts:83](https://github.com/philbgarner/retrolib/blob/84e78a1/src/modules/input.ts#L83)

___

### GamepadInputRelationship

Ƭ **GamepadInputRelationship**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `button` | `number` |
| `inputName` | `string` |

#### Defined in

[modules/input.ts:79](https://github.com/philbgarner/retrolib/blob/84e78a1/src/modules/input.ts#L79)

___

### InputMap

Ƭ **InputMap**: `Object`

Types

#### Type declaration

| Name | Type |
| :------ | :------ |
| `axisCheckDirection` | `number` |
| `axisPlane` | `string` |
| `mapKey` | `string` |
| `type` | [`InputType`](../enums/input.InputType.md) |

#### Defined in

[modules/input.ts:44](https://github.com/philbgarner/retrolib/blob/84e78a1/src/modules/input.ts#L44)

___

### InputSettings

Ƭ **InputSettings**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `axisPressedThreshold` | `number` |

#### Defined in

[modules/input.ts:52](https://github.com/philbgarner/retrolib/blob/84e78a1/src/modules/input.ts#L52)

___

### KeyboardInputRelationship

Ƭ **KeyboardInputRelationship**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `inputName` | `string` |
| `key` | `string` |

#### Defined in

[modules/input.ts:75](https://github.com/philbgarner/retrolib/blob/84e78a1/src/modules/input.ts#L75)

## Functions

### axisPressed

▸ **axisPressed**(`inputName`, `axisPlane`, `direction`, `gamepadNumber?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputName` | `string` |
| `axisPlane` | `number` |
| `direction` | `number` |
| `gamepadNumber?` | `number` |

#### Returns

`boolean`

#### Defined in

[modules/input.ts:317](https://github.com/philbgarner/retrolib/blob/84e78a1/src/modules/input.ts#L317)

___

### buttonPressed

▸ **buttonPressed**(`inputName`, `gamepadNumber?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputName` | `string` |
| `gamepadNumber?` | `number` |

#### Returns

`boolean`

#### Defined in

[modules/input.ts:308](https://github.com/philbgarner/retrolib/blob/84e78a1/src/modules/input.ts#L308)

___

### gamepadsDidUpdate

▸ **gamepadsDidUpdate**(): `void`

#### Returns

`void`

#### Defined in

[modules/input.ts:231](https://github.com/philbgarner/retrolib/blob/84e78a1/src/modules/input.ts#L231)

___

### getAxisState

▸ **getAxisState**(`inputName`): [`GamepadAxisState`](input.md#gamepadaxisstate)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputName` | `string` |

#### Returns

[`GamepadAxisState`](input.md#gamepadaxisstate)[]

#### Defined in

[modules/input.ts:274](https://github.com/philbgarner/retrolib/blob/84e78a1/src/modules/input.ts#L274)

___

### getButtonState

▸ **getButtonState**(`inputName`): [`GamepadButtonState`](input.md#gamepadbuttonstate)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputName` | `string` |

#### Returns

[`GamepadButtonState`](input.md#gamepadbuttonstate)[]

#### Defined in

[modules/input.ts:261](https://github.com/philbgarner/retrolib/blob/84e78a1/src/modules/input.ts#L261)

___

### getGamepads

▸ **getGamepads**(): `Gamepad`[]

#### Returns

`Gamepad`[]

#### Defined in

[modules/input.ts:240](https://github.com/philbgarner/retrolib/blob/84e78a1/src/modules/input.ts#L240)

___

### getInputKeyState

▸ **getInputKeyState**(`inputName`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputName` | `string` |

#### Returns

`boolean`

#### Defined in

[modules/input.ts:209](https://github.com/philbgarner/retrolib/blob/84e78a1/src/modules/input.ts#L209)

___

### getKeyState

▸ **getKeyState**(`stateKey`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stateKey` | `string` |

#### Returns

`boolean`

#### Defined in

[modules/input.ts:205](https://github.com/philbgarner/retrolib/blob/84e78a1/src/modules/input.ts#L205)

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

[modules/input.ts:244](https://github.com/philbgarner/retrolib/blob/84e78a1/src/modules/input.ts#L244)

___

### getMappedButtons

▸ **getMappedButtons**(): [`GamepadInputRelationship`](input.md#gamepadinputrelationship)[]

#### Returns

[`GamepadInputRelationship`](input.md#gamepadinputrelationship)[]

#### Defined in

[modules/input.ts:248](https://github.com/philbgarner/retrolib/blob/84e78a1/src/modules/input.ts#L248)

___

### getMappedKey

▸ **getMappedKey**(`inputName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputName` | `string` |

#### Returns

`string`

#### Defined in

[modules/input.ts:189](https://github.com/philbgarner/retrolib/blob/84e78a1/src/modules/input.ts#L189)

___

### getMappedKeys

▸ **getMappedKeys**(): [`KeyboardInputRelationship`](input.md#keyboardinputrelationship)[]

#### Returns

[`KeyboardInputRelationship`](input.md#keyboardinputrelationship)[]

#### Defined in

[modules/input.ts:196](https://github.com/philbgarner/retrolib/blob/84e78a1/src/modules/input.ts#L196)

___

### initialize

▸ **initialize**(): `void`

#### Returns

`void`

#### Defined in

[modules/input.ts:96](https://github.com/philbgarner/retrolib/blob/84e78a1/src/modules/input.ts#L96)

___

### inputPressed

▸ **inputPressed**(`inputName`, `gamepadNumber?`): `boolean`

Whether or not the specified button or key that maps to inputName is pressed. Not used for axes or triggers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inputName` | `string` | Input name mapped to a button. |
| `gamepadNumber?` | `number` |  |

#### Returns

`boolean`

#### Defined in

[modules/input.ts:291](https://github.com/philbgarner/retrolib/blob/84e78a1/src/modules/input.ts#L291)

___

### keyboardDown

▸ **keyboardDown**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`void`

#### Defined in

[modules/input.ts:175](https://github.com/philbgarner/retrolib/blob/84e78a1/src/modules/input.ts#L175)

___

### keyboardRelease

▸ **keyboardRelease**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`void`

#### Defined in

[modules/input.ts:180](https://github.com/philbgarner/retrolib/blob/84e78a1/src/modules/input.ts#L180)

___

### onGamepadConnected

▸ **onGamepadConnected**(`fn`): `void`

Gamepad Input Functions

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`GamepadConnectedFunction`](../interfaces/input.GamepadConnectedFunction.md) |

#### Returns

`void`

#### Defined in

[modules/input.ts:219](https://github.com/philbgarner/retrolib/blob/84e78a1/src/modules/input.ts#L219)

___

### onGamepadDisconnected

▸ **onGamepadDisconnected**(`fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`GamepadDisonnectedFunction`](../interfaces/input.GamepadDisonnectedFunction.md) |

#### Returns

`void`

#### Defined in

[modules/input.ts:223](https://github.com/philbgarner/retrolib/blob/84e78a1/src/modules/input.ts#L223)

___

### onGamepadUpdated

▸ **onGamepadUpdated**(`fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`GamepadUpdatedFunction`](../interfaces/input.GamepadUpdatedFunction.md) |

#### Returns

`void`

#### Defined in

[modules/input.ts:227](https://github.com/philbgarner/retrolib/blob/84e78a1/src/modules/input.ts#L227)

___

### onKeyboardDown

▸ **onKeyboardDown**(`fn`): `void`

Keyboard Input Functions

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`KeyboardDownFunction`](../interfaces/input.KeyboardDownFunction.md) |

#### Returns

`void`

#### Defined in

[modules/input.ts:167](https://github.com/philbgarner/retrolib/blob/84e78a1/src/modules/input.ts#L167)

___

### onKeyboardRelease

▸ **onKeyboardRelease**(`fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`KeyboardReleaseFunction`](../interfaces/input.KeyboardReleaseFunction.md) |

#### Returns

`void`

#### Defined in

[modules/input.ts:171](https://github.com/philbgarner/retrolib/blob/84e78a1/src/modules/input.ts#L171)

___

### resetGamepadAxisMappings

▸ **resetGamepadAxisMappings**(): `void`

#### Returns

`void`

#### Defined in

[modules/input.ts:131](https://github.com/philbgarner/retrolib/blob/84e78a1/src/modules/input.ts#L131)

___

### resetGamepadButtonMappings

▸ **resetGamepadButtonMappings**(): `void`

Reset button mappings to defaults.

#### Returns

`void`

#### Defined in

[modules/input.ts:127](https://github.com/philbgarner/retrolib/blob/84e78a1/src/modules/input.ts#L127)

___

### resetInputMaps

▸ **resetInputMaps**(): `void`

#### Returns

`void`

#### Defined in

[modules/input.ts:144](https://github.com/philbgarner/retrolib/blob/84e78a1/src/modules/input.ts#L144)

___

### resetKeyboardMappings

▸ **resetKeyboardMappings**(): `void`

#### Returns

`void`

#### Defined in

[modules/input.ts:135](https://github.com/philbgarner/retrolib/blob/84e78a1/src/modules/input.ts#L135)

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

[modules/input.ts:257](https://github.com/philbgarner/retrolib/blob/84e78a1/src/modules/input.ts#L257)

___

### setMappedKey

▸ **setMappedKey**(`inputName`, `key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputName` | `string` |
| `key` | `string` |

#### Returns

`void`

#### Defined in

[modules/input.ts:185](https://github.com/philbgarner/retrolib/blob/84e78a1/src/modules/input.ts#L185)
