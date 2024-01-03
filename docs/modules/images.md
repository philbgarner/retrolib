[retrolib](../README.md) / [Exports](../modules.md) / images

# Namespace: images

## Table of contents

### Functions

- [addImageToManifest](images.md#addimagetomanifest)
- [drawImage](images.md#drawimage)
- [drawImageCtx](images.md#drawimagectx)
- [getContext](images.md#getcontext)
- [getImage](images.md#getimage)
- [getImages](images.md#getimages)
- [imageManifestFromJSON](images.md#imagemanifestfromjson)
- [loadAllImages](images.md#loadallimages)
- [loadImage](images.md#loadimage)
- [setContext](images.md#setcontext)

## Functions

### addImageToManifest

▸ **addImageToManifest**(`imageName`, `filename`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `imageName` | `string` | Image name/id to use for this asset. |
| `filename` | `string` | Filename/path to image asset. |

#### Returns

`void`

#### Defined in

[modules/images.ts:20](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/images.ts#L20)

___

### drawImage

▸ **drawImage**(`name`, `x`, `y`, `srcRect`, `flipped`): `void`

Draws an image at x,y coordinates on the canas.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `x` | `number` |
| `y` | `number` |
| `srcRect` | [`Rect`](../classes/Rect.md) |
| `flipped` | `boolean` |

#### Returns

`void`

#### Defined in

[modules/images.ts:57](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/images.ts#L57)

___

### drawImageCtx

▸ **drawImageCtx**(`context`, `name`, `x`, `y`, `srcRect`, `flipped`): `void`

Raw image drawing function (use drawImage unless you want to draw to another 2d context).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `CanvasRenderingContext2D` | Canvas 2d context. |
| `name` | `string` |  |
| `x` | `number` |  |
| `y` | `number` |  |
| `srcRect` | [`Rect`](../classes/Rect.md) |  |
| `flipped` | `boolean` |  |

#### Returns

`void`

#### Defined in

[modules/images.ts:70](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/images.ts#L70)

___

### getContext

▸ **getContext**(): `CanvasRenderingContext2D`

#### Returns

`CanvasRenderingContext2D`

#### Defined in

[modules/images.ts:34](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/images.ts#L34)

___

### getImage

▸ **getImage**(`name`): `HTMLImageElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`HTMLImageElement`

#### Defined in

[modules/images.ts:39](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/images.ts#L39)

___

### getImages

▸ **getImages**(): [`ImageDefinition`](../classes/ImageDefinition.md)[]

#### Returns

[`ImageDefinition`](../classes/ImageDefinition.md)[]

#### Defined in

[modules/images.ts:45](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/images.ts#L45)

___

### imageManifestFromJSON

▸ **imageManifestFromJSON**(`json`): `void`

Populate images manifest with JSON list of definitions. Manifest is an array of objects
like { "name": "image id ref", "filename": "file_path/filename.ext" }

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `json` | `object`[] | JSON representation of image definitions. |

#### Returns

`void`

#### Defined in

[modules/images.ts:11](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/images.ts#L11)

___

### loadAllImages

▸ **loadAllImages**(): `Promise`\<`PromiseSettledResult`\<`HTMLImageElement`\>[]\>

Load all images in the images list.

#### Returns

`Promise`\<`PromiseSettledResult`\<`HTMLImageElement`\>[]\>

#### Defined in

[modules/images.ts:122](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/images.ts#L122)

___

### loadImage

▸ **loadImage**(`filename`): `Promise`\<`HTMLImageElement`\>

Load Image

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |

#### Returns

`Promise`\<`HTMLImageElement`\>

#### Defined in

[modules/images.ts:104](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/images.ts#L104)

___

### setContext

▸ **setContext**(`context`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `CanvasRenderingContext2D` |

#### Returns

`void`

#### Defined in

[modules/images.ts:29](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/images.ts#L29)
