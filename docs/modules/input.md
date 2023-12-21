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
- [handleInputPressed](input.md#handleinputpressed)
- [handleInputReleased](input.md#handleinputreleased)
- [initialize](input.md#initialize)
- [inputPressed](input.md#inputpressed)
- [inputReleased](input.md#inputreleased)
- [onInputPressed](input.md#oninputpressed)
- [onInputReleased](input.md#oninputreleased)
- [resetInputMaps](input.md#resetinputmaps)
- [updateInputState](input.md#updateinputstate)

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

[modules/input.ts:70](https://github.com/philbgarner/retrolib/blob/7d31d65/src/modules/input.ts#L70)

___

### InputSettings

Ƭ **InputSettings**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `axisPressedThreshold` | `number` |

#### Defined in

[modules/input.ts:78](https://github.com/philbgarner/retrolib/blob/7d31d65/src/modules/input.ts#L78)

## Variables

### inputMaps

• **inputMaps**: `Object`

#### Index signature

▪ [key: `string`]: [`InputMap`](input.md#inputmap)[]

#### Defined in

[modules/input.ts:40](https://github.com/philbgarner/retrolib/blob/7d31d65/src/modules/input.ts#L40)

___

### inputState

• **inputState**: `Object` = `{}`

Globals

#### Index signature

▪ [key: `string`]: [`InputState`](../enums/input.InputState.md)

#### Defined in

[modules/input.ts:11](https://github.com/philbgarner/retrolib/blob/7d31d65/src/modules/input.ts#L11)

___

### settings

• `Const` **settings**: [`InputSettings`](input.md#inputsettings)

#### Defined in

[modules/input.ts:42](https://github.com/philbgarner/retrolib/blob/7d31d65/src/modules/input.ts#L42)

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

[modules/input.ts:224](https://github.com/philbgarner/retrolib/blob/7d31d65/src/modules/input.ts#L224)

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

[modules/input.ts:215](https://github.com/philbgarner/retrolib/blob/7d31d65/src/modules/input.ts#L215)

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

[modules/input.ts:34](https://github.com/philbgarner/retrolib/blob/7d31d65/src/modules/input.ts#L34)

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

[modules/input.ts:22](https://github.com/philbgarner/retrolib/blob/7d31d65/src/modules/input.ts#L22)

___

### initialize

▸ **initialize**(): `void`

#### Returns

`void`

#### Defined in

[modules/input.ts:89](https://github.com/philbgarner/retrolib/blob/7d31d65/src/modules/input.ts#L89)

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

[modules/input.ts:157](https://github.com/philbgarner/retrolib/blob/7d31d65/src/modules/input.ts#L157)

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

[modules/input.ts:187](https://github.com/philbgarner/retrolib/blob/7d31d65/src/modules/input.ts#L187)

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

[modules/input.ts:86](https://github.com/philbgarner/retrolib/blob/7d31d65/src/modules/input.ts#L86)

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

[modules/input.ts:83](https://github.com/philbgarner/retrolib/blob/7d31d65/src/modules/input.ts#L83)

___

### resetInputMaps

▸ **resetInputMaps**(): `void`

Reset button mappings to defaults.

#### Returns

`void`

#### Defined in

[modules/input.ts:128](https://github.com/philbgarner/retrolib/blob/7d31d65/src/modules/input.ts#L128)

___

### updateInputState

▸ **updateInputState**(): `void`

#### Returns

`void`

#### Defined in

[modules/input.ts:237](https://github.com/philbgarner/retrolib/blob/7d31d65/src/modules/input.ts#L237)
