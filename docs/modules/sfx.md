[retrolib](../README.md) / [Exports](../modules.md) / sfx

# Namespace: sfx

## Table of contents

### Interfaces

- [OnEndedFunction](../interfaces/sfx.OnEndedFunction.md)

### Functions

- [getSfx](sfx.md#getsfx)
- [isPlaying](sfx.md#isplaying)
- [loadAllSfx](sfx.md#loadallsfx)
- [loadSfx](sfx.md#loadsfx)
- [playSfx](sfx.md#playsfx)
- [sfxManifestFromJSON](sfx.md#sfxmanifestfromjson)

## Functions

### getSfx

▸ **getSfx**(`name`): `HTMLAudioElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`HTMLAudioElement`

#### Defined in

[modules/sfx.ts:27](https://github.com/philbgarner/retrolib/blob/83b44df/src/modules/sfx.ts#L27)

___

### isPlaying

▸ **isPlaying**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

[modules/sfx.ts:19](https://github.com/philbgarner/retrolib/blob/83b44df/src/modules/sfx.ts#L19)

___

### loadAllSfx

▸ **loadAllSfx**(): `Promise`\<`PromiseSettledResult`\<`HTMLAudioElement`\>[]\>

#### Returns

`Promise`\<`PromiseSettledResult`\<`HTMLAudioElement`\>[]\>

#### Defined in

[modules/sfx.ts:72](https://github.com/philbgarner/retrolib/blob/83b44df/src/modules/sfx.ts#L72)

___

### loadSfx

▸ **loadSfx**(`filename`): `Promise`\<`HTMLAudioElement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |

#### Returns

`Promise`\<`HTMLAudioElement`\>

#### Defined in

[modules/sfx.ts:59](https://github.com/philbgarner/retrolib/blob/83b44df/src/modules/sfx.ts#L59)

___

### playSfx

▸ **playSfx**(`name`, `onEnded`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `onEnded` | [`OnEndedFunction`](../interfaces/sfx.OnEndedFunction.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[modules/sfx.ts:33](https://github.com/philbgarner/retrolib/blob/83b44df/src/modules/sfx.ts#L33)

___

### sfxManifestFromJSON

▸ **sfxManifestFromJSON**(`json`): `void`

Populate sfx manifest with JSON list of definitions. Manifest is an arry of
objects matching format { "name": "sfx id ref", "filename": "./file_path/filename.ext" },

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `json` | `object`[] | JSON representation of image definitions. |

#### Returns

`void`

#### Defined in

[modules/sfx.ts:14](https://github.com/philbgarner/retrolib/blob/83b44df/src/modules/sfx.ts#L14)
