[retrolib](../README.md) / [Exports](../modules.md) / sfx

# Namespace: sfx

## Table of contents

### Interfaces

- [OnEndedFunction](../interfaces/sfx.OnEndedFunction.md)

### Functions

- [addSfxToManifest](sfx.md#addsfxtomanifest)
- [getSfx](sfx.md#getsfx)
- [isPlaying](sfx.md#isplaying)
- [loadAllSfx](sfx.md#loadallsfx)
- [loadSfx](sfx.md#loadsfx)
- [playSfx](sfx.md#playsfx)
- [setGlobalVolume](sfx.md#setglobalvolume)
- [setVolume](sfx.md#setvolume)
- [sfxManifestFromJSON](sfx.md#sfxmanifestfromjson)

## Functions

### addSfxToManifest

▸ **addSfxToManifest**(`sfxName`, `filename`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sfxName` | `string` |
| `filename` | `string` |

#### Returns

`void`

#### Defined in

[modules/sfx.ts:30](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/sfx.ts#L30)

___

### getSfx

▸ **getSfx**(`name`): `HTMLAudioElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`HTMLAudioElement`

#### Defined in

[modules/sfx.ts:43](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/sfx.ts#L43)

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

[modules/sfx.ts:35](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/sfx.ts#L35)

___

### loadAllSfx

▸ **loadAllSfx**(): `Promise`\<`PromiseSettledResult`\<`HTMLAudioElement`\>[]\>

#### Returns

`Promise`\<`PromiseSettledResult`\<`HTMLAudioElement`\>[]\>

#### Defined in

[modules/sfx.ts:89](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/sfx.ts#L89)

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

[modules/sfx.ts:76](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/sfx.ts#L76)

___

### playSfx

▸ **playSfx**(`name`, `onEnded?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `onEnded?` | [`OnEndedFunction`](../interfaces/sfx.OnEndedFunction.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[modules/sfx.ts:49](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/sfx.ts#L49)

___

### setGlobalVolume

▸ **setGlobalVolume**(`volume`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `volume` | `number` |

#### Returns

`void`

#### Defined in

[modules/sfx.ts:12](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/sfx.ts#L12)

___

### setVolume

▸ **setVolume**(`name`, `volume`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `volume` | `number` |

#### Returns

`void`

#### Defined in

[modules/sfx.ts:5](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/sfx.ts#L5)

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

[modules/sfx.ts:26](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/sfx.ts#L26)
