[retrolib](../README.md) / [Exports](../modules.md) / music

# Namespace: music

## Table of contents

### Interfaces

- [OnEndedFunction](../interfaces/music.OnEndedFunction.md)

### Functions

- [getTrack](music.md#gettrack)
- [isPlaying](music.md#isplaying)
- [loadAllTracks](music.md#loadalltracks)
- [loadTrack](music.md#loadtrack)
- [musicManifestFromJSON](music.md#musicmanifestfromjson)
- [playTrack](music.md#playtrack)

## Functions

### getTrack

▸ **getTrack**(`name`): `HTMLAudioElement`

Get the named audio element.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Music track asset id. |

#### Returns

`HTMLAudioElement`

#### Defined in

[modules/music.ts:37](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/music.ts#L37)

___

### isPlaying

▸ **isPlaying**(`name`): `boolean`

Whether or not the named track is currently playing.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Music track asset id. |

#### Returns

`boolean`

#### Defined in

[modules/music.ts:24](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/music.ts#L24)

___

### loadAllTracks

▸ **loadAllTracks**(): `Promise`\<`PromiseSettledResult`\<`HTMLAudioElement`\>[]\>

Load all tracks that have been loaded into the manifest.

#### Returns

`Promise`\<`PromiseSettledResult`\<`HTMLAudioElement`\>[]\>

#### Defined in

[modules/music.ts:96](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/music.ts#L96)

___

### loadTrack

▸ **loadTrack**(`filename`): `Promise`\<`HTMLAudioElement`\>

Load track from location.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filename` | `string` | Path to audio asset. |

#### Returns

`Promise`\<`HTMLAudioElement`\>

#### Defined in

[modules/music.ts:79](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/music.ts#L79)

___

### musicManifestFromJSON

▸ **musicManifestFromJSON**(`json`): `void`

Populate sfx manifest with JSON list of definitions.  Manifest is an arry of
objects matching format { "name": "track id ref", "filename": "./file_path/filename.ext" },

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `json` | `object`[] | JSON representation of image definitions. |

#### Returns

`void`

#### Defined in

[modules/music.ts:14](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/music.ts#L14)

___

### playTrack

▸ **playTrack**(`name`, `onEnded?`): `Promise`\<`void`\>

Play specified track.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Music track asset id. |
| `onEnded?` | [`OnEndedFunction`](../interfaces/music.OnEndedFunction.md) | Optional callback for when the track ends. |

#### Returns

`Promise`\<`void`\>

#### Defined in

[modules/music.ts:48](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/music.ts#L48)
