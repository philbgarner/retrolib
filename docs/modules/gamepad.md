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
- [isAxisPressed](gamepad.md#isaxispressed)
- [onGamepadConnected](gamepad.md#ongamepadconnected)
- [onGamepadDisconnected](gamepad.md#ongamepaddisconnected)
- [onGamepadUpdated](gamepad.md#ongamepadupdated)
- [resetButtonsState](gamepad.md#resetbuttonsstate)
- [resetGamepadAxisMappings](gamepad.md#resetgamepadaxismappings)
- [resetGamepadButtonMappings](gamepad.md#resetgamepadbuttonmappings)
- [resetGamepadTimestamps](gamepad.md#resetgamepadtimestamps)
- [setGamepadTimestamps](gamepad.md#setgamepadtimestamps)
- [setMappedButton](gamepad.md#setmappedbutton)

## Type Aliases

### GamepadAxisState

Ƭ **GamepadAxisState**: `Object`

Gamepad axes x and y states.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `controller` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Defined in

[modules/input-gamepad.ts:102](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/input-gamepad.ts#L102)

___

### GamepadButtonState

Ƭ **GamepadButtonState**: `Object`

Button state stored by input name.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `controller` | `number` |
| `inputName` | `string` |
| `pressed` | `boolean` |
| `touched` | `boolean` |
| `value` | `number` |

#### Defined in

[modules/input-gamepad.ts:91](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/input-gamepad.ts#L91)

___

### GamepadInputRelationship

Ƭ **GamepadInputRelationship**: `Object`

Button and input name relationships.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `button` | `number` |
| `inputName` | `string` |

#### Defined in

[modules/input-gamepad.ts:83](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/input-gamepad.ts#L83)

## Variables

### axisMap

• **axisMap**: `Object` = `{}`

List of input names (IE: left/right/up/down) and the axis index number they map to.

#### Index signature

▪ [key: `string`]: `number`[]

#### Defined in

[modules/input-gamepad.ts:18](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/input-gamepad.ts#L18)

___

### axisState

• `Const` **axisState**: `Object` = `{}`

Current axes states as of the last updated frame by input name.

#### Index signature

▪ [key: `string`]: [`InputState`](../enums/input.InputState.md)

#### Defined in

[modules/input-gamepad.ts:6](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/input-gamepad.ts#L6)

___

### buttonsMap

• **buttonsMap**: `Object` = `{}`

List of input names (IE: action, cancel, etc.) and the button index number they map to.

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[modules/input-gamepad.ts:14](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/input-gamepad.ts#L14)

___

### buttonsState

• **buttonsState**: `Object` = `{}`

Current buttons state as of the last upated frame by input name.

#### Index signature

▪ [key: `string`]: [`InputState`](../enums/input.InputState.md)

#### Defined in

[modules/input-gamepad.ts:10](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/input-gamepad.ts#L10)

___

### gamepadsTimestamps

• **gamepadsTimestamps**: `Object` = `{}`

Gamepad timestamp value as of last frame update.

#### Index signature

▪ [key: `number`]: `number`

#### Defined in

[modules/input-gamepad.ts:22](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/input-gamepad.ts#L22)

## Functions

### gamepadConnected

▸ **gamepadConnected**(`event`): `void`

Event handler function for when a new gamepad is connected.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `GamepadEvent` |

#### Returns

`void`

#### Defined in

[modules/input-gamepad.ts:70](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/input-gamepad.ts#L70)

___

### gamepadDisconnected

▸ **gamepadDisconnected**(`event`): `void`

Event handler function for when a gamepad is disconnected.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `GamepadEvent` |

#### Returns

`void`

#### Defined in

[modules/input-gamepad.ts:77](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/input-gamepad.ts#L77)

___

### gamepadUpdated

▸ **gamepadUpdated**(`gamepad`): `void`

Event handler function for when a gamepad has updated its state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `gamepad` | `Gamepad` |

#### Returns

`void`

#### Defined in

[modules/input-gamepad.ts:63](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/input-gamepad.ts#L63)

___

### gamepadsDidUpdate

▸ **gamepadsDidUpdate**(): `void`

Run once per frame to update internal state objects and trigger event callbacks.

#### Returns

`void`

#### Defined in

[modules/input-gamepad.ts:149](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/input-gamepad.ts#L149)

___

### getAxisData

▸ **getAxisData**(`inputName`): [`GamepadAxisState`](gamepad.md#gamepadaxisstate)[]

Gets the current axis state data from the connected gamepads and returns a
transformed object showing only controller indices and x/y states.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inputName` | `string` | Input name. |

#### Returns

[`GamepadAxisState`](gamepad.md#gamepadaxisstate)[]

#### Defined in

[modules/input-gamepad.ts:295](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/input-gamepad.ts#L295)

___

### getAxisInputState

▸ **getAxisInputState**(`inputName`): [`InputState`](../enums/input.InputState.md)

Get the current axis input state by input name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inputName` | `string` | Input name. |

#### Returns

[`InputState`](../enums/input.InputState.md)

Gamepad object's axis input state.

#### Defined in

[modules/input-gamepad.ts:285](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/input-gamepad.ts#L285)

___

### getButtonState

▸ **getButtonState**(`inputName`): [`GamepadButtonState`](gamepad.md#gamepadbuttonstate)[]

Get the current gamepad button state by input name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inputName` | `string` | Input name. |

#### Returns

[`GamepadButtonState`](gamepad.md#gamepadbuttonstate)[]

Current gamepad button state.

#### Defined in

[modules/input-gamepad.ts:267](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/input-gamepad.ts#L267)

___

### getGamepads

▸ **getGamepads**(): `Gamepad`[]

Get the list of currently connected Gamepad typed objects.
https://developer.mozilla.org/en-US/docs/Web/API/Gamepad

#### Returns

`Gamepad`[]

Array of gamepad objects in order by Gamepad.index property.

#### Defined in

[modules/input-gamepad.ts:228](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/input-gamepad.ts#L228)

___

### getMappedButtonIndex

▸ **getMappedButtonIndex**(`inputName`): `number`

Get the gamepad button index mapped to inputName.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inputName` | `string` | Input name. |

#### Returns

`number`

#### Defined in

[modules/input-gamepad.ts:237](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/input-gamepad.ts#L237)

___

### getMappedButtons

▸ **getMappedButtons**(): [`GamepadInputRelationship`](gamepad.md#gamepadinputrelationship)[]

List all input relationships mapped to the gamepad buttons.

#### Returns

[`GamepadInputRelationship`](gamepad.md#gamepadinputrelationship)[]

#### Defined in

[modules/input-gamepad.ts:244](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/input-gamepad.ts#L244)

___

### isAxisPressed

▸ **isAxisPressed**(`inputName`, `controller?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputName` | `string` |
| `controller?` | `number` |

#### Returns

`boolean`

#### Defined in

[modules/input-gamepad.ts:190](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/input-gamepad.ts#L190)

___

### onGamepadConnected

▸ **onGamepadConnected**(`fn`): `void`

Set the callback for the gamepadconnected event.
https://developer.mozilla.org/en-US/docs/Web/API/Window/gamepadconnected_event

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | [`GamepadConnectedFunction`](../interfaces/gamepad.GamepadConnectedFunction.md) | Callback function for when a gamepad connects. |

#### Returns

`void`

#### Defined in

[modules/input-gamepad.ts:127](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/input-gamepad.ts#L127)

___

### onGamepadDisconnected

▸ **onGamepadDisconnected**(`fn`): `void`

Set the callback for the gamepaddisconnected event.
https://developer.mozilla.org/en-US/docs/Web/API/Window/gamepaddisconnected_event

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`GamepadDisonnectedFunction`](../interfaces/gamepad.GamepadDisonnectedFunction.md) |

#### Returns

`void`

#### Defined in

[modules/input-gamepad.ts:134](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/input-gamepad.ts#L134)

___

### onGamepadUpdated

▸ **onGamepadUpdated**(`fn`): `void`

Set the callback for when a gamepad input or axis state has changed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | [`GamepadUpdatedFunction`](../interfaces/gamepad.GamepadUpdatedFunction.md) | Callback function. |

#### Returns

`void`

#### Defined in

[modules/input-gamepad.ts:142](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/input-gamepad.ts#L142)

___

### resetButtonsState

▸ **resetButtonsState**(): `void`

Reset buttons state object to empty.

#### Returns

`void`

#### Defined in

[modules/input-gamepad.ts:39](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/input-gamepad.ts#L39)

___

### resetGamepadAxisMappings

▸ **resetGamepadAxisMappings**(): `void`

Reset axis mappings to defaults.

#### Returns

`void`

#### Defined in

[modules/input-gamepad.ts:118](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/input-gamepad.ts#L118)

___

### resetGamepadButtonMappings

▸ **resetGamepadButtonMappings**(): `void`

Reset button mappings to defaults.

#### Returns

`void`

#### Defined in

[modules/input-gamepad.ts:111](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/input-gamepad.ts#L111)

___

### resetGamepadTimestamps

▸ **resetGamepadTimestamps**(): `void`

Reset gamepad timestamps to empty.

#### Returns

`void`

#### Defined in

[modules/input-gamepad.ts:46](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/input-gamepad.ts#L46)

___

### setGamepadTimestamps

▸ **setGamepadTimestamps**(`gamepadNumber`, `timestamp`): `void`

Set gamepad timestamp value by index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gamepadNumber` | `number` | Gamepad/controller index. |
| `timestamp` | `number` | Updated timestamp value. |

#### Returns

`void`

#### Defined in

[modules/input-gamepad.ts:55](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/input-gamepad.ts#L55)

___

### setMappedButton

▸ **setMappedButton**(`inputName`, `buttonIndex`): `void`

Set a button mapping by input name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inputName` | `string` | Input name. |
| `buttonIndex` | `number` | Gamepad object's button index to assign to this input name. |

#### Returns

`void`

#### Defined in

[modules/input-gamepad.ts:258](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/input-gamepad.ts#L258)
