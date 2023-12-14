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

### Functions

- [axisPressed](input.md#axispressed)
- [buttonPressed](input.md#buttonpressed)
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
| `type` | [`InputType`](../enums/input.InputType.md) |

#### Defined in

[modules/input.ts:44](https://github.com/philbgarner/retrolib/blob/f0d6031/src/modules/input.ts#L44)

___

### InputSettings

Ƭ **InputSettings**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `axisPressedThreshold` | `number` |

#### Defined in

[modules/input.ts:52](https://github.com/philbgarner/retrolib/blob/f0d6031/src/modules/input.ts#L52)

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

[modules/input.ts:199](https://github.com/philbgarner/retrolib/blob/f0d6031/src/modules/input.ts#L199)

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

[modules/input.ts:190](https://github.com/philbgarner/retrolib/blob/f0d6031/src/modules/input.ts#L190)

___

### initialize

▸ **initialize**(): `void`

#### Returns

`void`

#### Defined in

[modules/input.ts:63](https://github.com/philbgarner/retrolib/blob/f0d6031/src/modules/input.ts#L63)

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

[modules/input.ts:133](https://github.com/philbgarner/retrolib/blob/f0d6031/src/modules/input.ts#L133)

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

[modules/input.ts:165](https://github.com/philbgarner/retrolib/blob/f0d6031/src/modules/input.ts#L165)

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

[modules/input.ts:60](https://github.com/philbgarner/retrolib/blob/f0d6031/src/modules/input.ts#L60)

___

### onInputReleased

▸ **onInputReleased**(`inputName`, `controller?`): `void`

Globals

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputName` | `string` |
| `controller?` | `number` |

#### Returns

`void`

#### Defined in

[modules/input.ts:57](https://github.com/philbgarner/retrolib/blob/f0d6031/src/modules/input.ts#L57)

___

### resetInputMaps

▸ **resetInputMaps**(): `void`

Reset button mappings to defaults.

#### Returns

`void`

#### Defined in

[modules/input.ts:104](https://github.com/philbgarner/retrolib/blob/f0d6031/src/modules/input.ts#L104)

___

### updateInputState

▸ **updateInputState**(): `void`

#### Returns

`void`

#### Defined in

[modules/input.ts:212](https://github.com/philbgarner/retrolib/blob/f0d6031/src/modules/input.ts#L212)
