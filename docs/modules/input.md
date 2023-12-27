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

Types

#### Type declaration

| Name | Type |
| :------ | :------ |
| `axisCheckDirection` | `number` |
| `axisPlane` | `string` |
| `mapKey` | `string` |
| `parent` | `string` |
| `type` | [`InputType`](../enums/input.InputType.md) |

#### Defined in

[modules/input.ts:68](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/input.ts#L68)

___

### InputSettings

Ƭ **InputSettings**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `axisPressedThreshold` | `number` |

#### Defined in

[modules/input.ts:76](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/input.ts#L76)

## Variables

### inputMaps

• **inputMaps**: `Object`

#### Index signature

▪ [key: `string`]: [`InputMap`](input.md#inputmap)[]

#### Defined in

[modules/input.ts:38](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/input.ts#L38)

___

### inputState

• **inputState**: `Object` = `{}`

Globals

#### Index signature

▪ [key: `string`]: [`InputState`](../enums/input.InputState.md)

#### Defined in

[modules/input.ts:11](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/input.ts#L11)

___

### settings

• `Const` **settings**: [`InputSettings`](input.md#inputsettings)

#### Defined in

[modules/input.ts:40](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/input.ts#L40)

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

[modules/input.ts:191](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/input.ts#L191)

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

[modules/input.ts:173](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/input.ts#L173)

___

### buttonReleased

▸ **buttonReleased**(`inputName`, `gamepadNumber?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputName` | `string` |
| `gamepadNumber?` | `number` |

#### Returns

`boolean`

#### Defined in

[modules/input.ts:182](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/input.ts#L182)

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

[modules/input.ts:33](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/input.ts#L33)

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

[modules/input.ts:22](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/input.ts#L22)

___

### initialize

▸ **initialize**(): `void`

#### Returns

`void`

#### Defined in

[modules/input.ts:87](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/input.ts#L87)

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

[modules/input.ts:157](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/input.ts#L157)

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

[modules/input.ts:168](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/input.ts#L168)

___

### onInputPressed

▸ **onInputPressed**(`inputName`, `controller?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputName` | `string` |
| `controller?` | `number` |

#### Returns

`void`

#### Defined in

[modules/input.ts:84](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/input.ts#L84)

___

### onInputReleased

▸ **onInputReleased**(`inputName`, `controller?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputName` | `string` |
| `controller?` | `number` |

#### Returns

`void`

#### Defined in

[modules/input.ts:81](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/input.ts#L81)

___

### resetInputMaps

▸ **resetInputMaps**(): `void`

Reset button mappings to defaults.

#### Returns

`void`

#### Defined in

[modules/input.ts:126](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/input.ts#L126)
