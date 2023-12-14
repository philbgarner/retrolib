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
- [resetKeyboardMappings](keyboard.md#resetkeyboardmappings)
- [resetKeysState](keyboard.md#resetkeysstate)
- [setMappedKey](keyboard.md#setmappedkey)

## Type Aliases

### KeyboardInputRelationship

Ƭ **KeyboardInputRelationship**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `inputName` | `string` |
| `key` | `string` |

#### Defined in

modules/input-keyboard.ts:38

## Functions

### getInputKeyState

▸ **getInputKeyState**(`inputName`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputName` | `string` |

#### Returns

`boolean`

#### Defined in

modules/input-keyboard.ts:73

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

modules/input-keyboard.ts:69

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

modules/input-keyboard.ts:23

___

### getMappedKeys

▸ **getMappedKeys**(): [`KeyboardInputRelationship`](keyboard.md#keyboardinputrelationship)[]

#### Returns

[`KeyboardInputRelationship`](keyboard.md#keyboardinputrelationship)[]

#### Defined in

modules/input-keyboard.ts:60

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

modules/input-keyboard.ts:86

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

modules/input-keyboard.ts:95

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

modules/input-keyboard.ts:78

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

modules/input-keyboard.ts:82

___

### resetKeyboardMappings

▸ **resetKeyboardMappings**(): `void`

Keyboard Input Functions

#### Returns

`void`

#### Defined in

modules/input-keyboard.ts:49

___

### resetKeysState

▸ **resetKeysState**(): `void`

#### Returns

`void`

#### Defined in

modules/input-keyboard.ts:15

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

modules/input-keyboard.ts:19
