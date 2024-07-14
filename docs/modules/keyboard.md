[retrolib](../README.md) / [Exports](../modules.md) / keyboard

# Namespace: keyboard

## Table of contents

### Interfaces

- [KeyboardDownFunction](../interfaces/keyboard.KeyboardDownFunction.md)
- [KeyboardReleaseFunction](../interfaces/keyboard.KeyboardReleaseFunction.md)

### Type Aliases

- [KeyboardInputRelationship](keyboard.md#keyboardinputrelationship)

### Functions

- [getInputKeyState](keyboard.md#getinputkeystate)
- [getKeyState](keyboard.md#getkeystate)
- [getMappedKey](keyboard.md#getmappedkey)
- [getMappedKeys](keyboard.md#getmappedkeys)
- [keyboardDown](keyboard.md#keyboarddown)
- [keyboardRelease](keyboard.md#keyboardrelease)
- [onKeyboardDown](keyboard.md#onkeyboarddown)
- [onKeyboardRelease](keyboard.md#onkeyboardrelease)
- [resetKeysState](keyboard.md#resetkeysstate)

## Type Aliases

### KeyboardInputRelationship

Ƭ **KeyboardInputRelationship**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `inputName` | `string` |
| `key` | `string` |

#### Defined in

[modules/input-keyboard.ts:38](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/input-keyboard.ts#L38)

## Functions

### getInputKeyState

▸ **getInputKeyState**(`inputName`): [`InputState`](../enums/input.InputState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputName` | `string` |

#### Returns

[`InputState`](../enums/input.InputState.md)

#### Defined in

[modules/input-keyboard.ts:58](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/input-keyboard.ts#L58)

___

### getKeyState

▸ **getKeyState**(`stateKey`): [`InputState`](../enums/input.InputState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `stateKey` | `string` |

#### Returns

[`InputState`](../enums/input.InputState.md)

#### Defined in

[modules/input-keyboard.ts:54](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/input-keyboard.ts#L54)

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

[modules/input-keyboard.ts:22](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/input-keyboard.ts#L22)

___

### getMappedKeys

▸ **getMappedKeys**(): [`KeyboardInputRelationship`](keyboard.md#keyboardinputrelationship)[]

#### Returns

[`KeyboardInputRelationship`](keyboard.md#keyboardinputrelationship)[]

#### Defined in

[modules/input-keyboard.ts:43](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/input-keyboard.ts#L43)

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

[modules/input-keyboard.ts:77](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/input-keyboard.ts#L77)

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

[modules/input-keyboard.ts:88](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/input-keyboard.ts#L88)

___

### onKeyboardDown

▸ **onKeyboardDown**(`fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`KeyboardDownFunction`](../interfaces/keyboard.KeyboardDownFunction.md) |

#### Returns

`void`

#### Defined in

[modules/input-keyboard.ts:69](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/input-keyboard.ts#L69)

___

### onKeyboardRelease

▸ **onKeyboardRelease**(`fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`KeyboardReleaseFunction`](../interfaces/keyboard.KeyboardReleaseFunction.md) |

#### Returns

`void`

#### Defined in

[modules/input-keyboard.ts:73](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/input-keyboard.ts#L73)

___

### resetKeysState

▸ **resetKeysState**(): `void`

#### Returns

`void`

#### Defined in

[modules/input-keyboard.ts:14](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/input-keyboard.ts#L14)
