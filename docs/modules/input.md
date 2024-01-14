[retrolib](../README.md) / [Exports](../modules.md) / input

# Namespace: input

## Table of contents

### Enumerations

- [InputState](../enums/input.InputState.md)
- [InputType](../enums/input.InputType.md)

### Interfaces

- [InputPressedFunction](../interfaces/input.InputPressedFunction.md)
- [InputReleasedFunction](../interfaces/input.InputReleasedFunction.md)

### Type Aliases

- [InputMap](input.md#inputmap)
- [InputSettings](input.md#inputsettings)

### Variables

- [inputMaps](input.md#inputmaps)
- [inputState](input.md#inputstate)
- [settings](input.md#settings)

### Functions

- [axisPressed](input.md#axispressed)
- [buttonPressed](input.md#buttonpressed)
- [buttonReleased](input.md#buttonreleased)
- [handleInputPressed](input.md#handleinputpressed)
- [handleInputReleased](input.md#handleinputreleased)
- [initialize](input.md#initialize)
- [inputPressed](input.md#inputpressed)
- [inputReleased](input.md#inputreleased)
- [onInputPressed](input.md#oninputpressed)
- [onInputReleased](input.md#oninputreleased)
- [resetInputMaps](input.md#resetinputmaps)

## Type Aliases

### InputMap

Ƭ **InputMap**: `Object`

Relationship of input names (mapKey) to axis states.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `axisCheckDirection` | `number` |
| `axisPlane` | `string` |
| `mapKey` | `string` |
| `parent` | `string` |
| `type` | [`InputType`](../enums/input.InputType.md) |

#### Defined in

[modules/input.ts:72](https://github.com/philbgarner/retrolib/blob/5d46b3a/src/modules/input.ts#L72)

___

### InputSettings

Ƭ **InputSettings**: `Object`

Input settings.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `axisPressedThreshold` | `number` |

#### Defined in

[modules/input.ts:83](https://github.com/philbgarner/retrolib/blob/5d46b3a/src/modules/input.ts#L83)

## Variables

### inputMaps

• **inputMaps**: `Object`

Keyboard and Gamepad input name to key/button/axis relationships. Can map multiple inputs to the same input name.

#### Index signature

▪ [key: `string`]: [`InputMap`](input.md#inputmap)[]

#### Defined in

[modules/input.ts:43](https://github.com/philbgarner/retrolib/blob/5d46b3a/src/modules/input.ts#L43)

___

### inputState

• **inputState**: `Object` = `{}`

Input state stored by input name.

#### Index signature

▪ [key: `string`]: [`InputState`](../enums/input.InputState.md)

#### Defined in

[modules/input.ts:8](https://github.com/philbgarner/retrolib/blob/5d46b3a/src/modules/input.ts#L8)

___

### settings

• `Const` **settings**: [`InputSettings`](input.md#inputsettings)

Input settings global object.

#### Defined in

[modules/input.ts:48](https://github.com/philbgarner/retrolib/blob/5d46b3a/src/modules/input.ts#L48)

## Functions

### axisPressed

▸ **axisPressed**(`inputName`, `axisPlane`, `direction`, `gamepadNumber?`): `boolean`

Whether or not a gamepad axis mapped to the input name is pressed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inputName` | `string` | Input name mapped to a button. |
| `axisPlane` | `number` | - |
| `direction` | `number` | - |
| `gamepadNumber?` | `number` | Connected gamepad to check the pressed state on. If not specified it defaults to the first connected gamepad. |

#### Returns

`boolean`

#### Defined in

[modules/input.ts:232](https://github.com/philbgarner/retrolib/blob/5d46b3a/src/modules/input.ts#L232)

___

### buttonPressed

▸ **buttonPressed**(`inputName`, `gamepadNumber?`): `boolean`

Whether or not a gamepad button mapped to the input name is pressed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inputName` | `string` | Input name mapped to a button. |
| `gamepadNumber?` | `number` | Connected gamepad to check the pressed state on. If not specified it defaults to the first connected gamepad. |

#### Returns

`boolean`

#### Defined in

[modules/input.ts:202](https://github.com/philbgarner/retrolib/blob/5d46b3a/src/modules/input.ts#L202)

___

### buttonReleased

▸ **buttonReleased**(`inputName`, `gamepadNumber?`): `boolean`

Whether or not a gamepad button mapped to the input name is pressed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inputName` | `string` | Input name mapped to a button. |
| `gamepadNumber?` | `number` | Connected gamepad to check the pressed state on. If not specified it defaults to the first connected gamepad. |

#### Returns

`boolean`

#### Defined in

[modules/input.ts:217](https://github.com/philbgarner/retrolib/blob/5d46b3a/src/modules/input.ts#L217)

___

### handleInputPressed

▸ **handleInputPressed**(`inputName`, `controller?`): `void`

Input Pressed Event Handler.  This gets called by keyboard/gamepad event handlers
when a state changes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputName` | `string` |
| `controller?` | `number` |

#### Returns

`void`

#### Defined in

[modules/input.ts:35](https://github.com/philbgarner/retrolib/blob/5d46b3a/src/modules/input.ts#L35)

___

### handleInputReleased

▸ **handleInputReleased**(`inputName`, `controller?`): `void`

Input Released Event Handler. This gets called by keyboard/gamepad event handlers
when a state changes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputName` | `string` |
| `controller?` | `number` |

#### Returns

`void`

#### Defined in

[modules/input.ts:24](https://github.com/philbgarner/retrolib/blob/5d46b3a/src/modules/input.ts#L24)

___

### initialize

▸ **initialize**(): `void`

Set the default states and mappings, set the event listeners and route input changes to the scenes' handleInput functions.

#### Returns

`void`

#### Defined in

[modules/input.ts:104](https://github.com/philbgarner/retrolib/blob/5d46b3a/src/modules/input.ts#L104)

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

[modules/input.ts:180](https://github.com/philbgarner/retrolib/blob/5d46b3a/src/modules/input.ts#L180)

___

### inputReleased

▸ **inputReleased**(`inputName`, `gamepadNumber?`): `boolean`

Whether or not the specified button or key that maps to inputName is released. Not used for axes or triggers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inputName` | `string` | Input name mapped to a button. |
| `gamepadNumber?` | `number` |  |

#### Returns

`boolean`

#### Defined in

[modules/input.ts:191](https://github.com/philbgarner/retrolib/blob/5d46b3a/src/modules/input.ts#L191)

___

### onInputPressed

▸ **onInputPressed**(`inputName`, `controller?`): `void`

Input pressed callback function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputName` | `string` |
| `controller?` | `number` |

#### Returns

`void`

#### Defined in

[modules/input.ts:97](https://github.com/philbgarner/retrolib/blob/5d46b3a/src/modules/input.ts#L97)

___

### onInputReleased

▸ **onInputReleased**(`inputName`, `controller?`): `void`

Input released callback function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputName` | `string` |
| `controller?` | `number` |

#### Returns

`void`

#### Defined in

[modules/input.ts:91](https://github.com/philbgarner/retrolib/blob/5d46b3a/src/modules/input.ts#L91)

___

### resetInputMaps

▸ **resetInputMaps**(): `void`

Reset button mappings to defaults.

#### Returns

`void`

#### Defined in

[modules/input.ts:142](https://github.com/philbgarner/retrolib/blob/5d46b3a/src/modules/input.ts#L142)
