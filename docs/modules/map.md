[retrolib](../README.md) / [Exports](../modules.md) / map

# Namespace: map

## Table of contents

### Interfaces

- [GenerateCellFunction](../interfaces/map.GenerateCellFunction.md)
- [GetCellsFilterFunction](../interfaces/map.GetCellsFilterFunction.md)
- [SelectCellTypesFunction](../interfaces/map.SelectCellTypesFunction.md)

### Type Aliases

- [CellType](map.md#celltype)
- [DungeonBSP](map.md#dungeonbsp)
- [EdgeCoordinate](map.md#edgecoordinate)
- [MapCell](map.md#mapcell)
- [VoronoiCell](map.md#voronoicell)
- [VoronoiCoordinate](map.md#voronoicoordinate)
- [VoronoiRegion](map.md#voronoiregion)

### Variables

- [corners](map.md#corners)
- [edges](map.md#edges)
- [exploredCellCache](map.md#exploredcellcache)
- [exploredCells](map.md#exploredcells)
- [height](map.md#height)
- [mapCells](map.md#mapcells)
- [middles](map.md#middles)
- [voronoiCells](map.md#voronoicells)
- [voronoiRegions](map.md#voronoiregions)
- [width](map.md#width)

### Functions

- [GenerateCell](map.md#generatecell)
- [GenerateCellsDungeonBSP](map.md#generatecellsdungeonbsp)
- [GenerateCellsVoronoi](map.md#generatecellsvoronoi)
- [Initialize](map.md#initialize)
- [SelectCellTypes](map.md#selectcelltypes)
- [clearMap](map.md#clearmap)
- [distance](map.md#distance)
- [fov](map.md#fov)
- [generateCellFunction](map.md#generatecellfunction)
- [getCell](map.md#getcell)
- [getCells](map.md#getcells)
- [getExploredCells](map.md#getexploredcells)
- [getRegion](map.md#getregion)
- [getVCell](map.md#getvcell)
- [isExplored](map.md#isexplored)
- [selectCellTypes](map.md#selectcelltypes-1)
- [setCell](map.md#setcell)
- [setExplored](map.md#setexplored)
- [setGenerateCellFunction](map.md#setgeneratecellfunction)

## Type Aliases

### CellType

Ƭ **CellType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bgColor` | [`ColorRGBA`](font.md#colorrgba) |
| `blockMovement` | `boolean` |
| `blockVision` | `boolean` |
| `characters` | `string`[] |
| `colors` | [`ColorRGBA`](font.md#colorrgba)[] |
| `group` | `string` |
| `name` | `string` |

#### Defined in

[modules/map.ts:51](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/map.ts#L51)

___

### DungeonBSP

Ƭ **DungeonBSP**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `children` | [`DungeonBSP`](map.md#dungeonbsp)[] |
| `h` | `number` |
| `w` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Defined in

[modules/map.ts:16](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/map.ts#L16)

___

### EdgeCoordinate

Ƭ **EdgeCoordinate**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `neighbouringRegions` | `number`[] |
| `x` | `number` |
| `y` | `number` |

#### Defined in

[modules/map.ts:30](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/map.ts#L30)

___

### MapCell

Ƭ **MapCell**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cellType` | [`CellType`](map.md#celltype) |
| `light` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Defined in

[modules/map.ts:61](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/map.ts#L61)

___

### VoronoiCell

Ƭ **VoronoiCell**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `distance` | `number` |
| `voronoiId` | `number` |

#### Defined in

[modules/map.ts:46](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/map.ts#L46)

___

### VoronoiCoordinate

Ƭ **VoronoiCoordinate**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Defined in

[modules/map.ts:24](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/map.ts#L24)

___

### VoronoiRegion

Ƭ **VoronoiRegion**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `coords` | [`VoronoiCoordinate`](map.md#voronoicoordinate) |
| `corners` | [`EdgeCoordinate`](map.md#edgecoordinate)[] |
| `edges` | [`EdgeCoordinate`](map.md#edgecoordinate)[] |
| `id` | `number` |
| `middles` | [`VoronoiCoordinate`](map.md#voronoicoordinate)[] |
| `neighbours` | `number`[] |

#### Defined in

[modules/map.ts:37](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/map.ts#L37)

## Variables

### corners

• **corners**: [`EdgeCoordinate`](map.md#edgecoordinate)[] = `[]`

#### Defined in

[modules/map.ts:12](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/map.ts#L12)

___

### edges

• **edges**: [`EdgeCoordinate`](map.md#edgecoordinate)[] = `[]`

#### Defined in

[modules/map.ts:11](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/map.ts#L11)

___

### exploredCellCache

• **exploredCellCache**: [`MapCell`](map.md#mapcell)[]

#### Defined in

[modules/map.ts:9](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/map.ts#L9)

___

### exploredCells

• **exploredCells**: `boolean`[][] = `[]`

#### Defined in

[modules/map.ts:8](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/map.ts#L8)

___

### height

• **height**: `number`

#### Defined in

[modules/map.ts:6](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/map.ts#L6)

___

### mapCells

• **mapCells**: [`MapCell`](map.md#mapcell)[][] = `[]`

#### Defined in

[modules/map.ts:7](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/map.ts#L7)

___

### middles

• **middles**: [`VoronoiCoordinate`](map.md#voronoicoordinate)[] = `[]`

#### Defined in

[modules/map.ts:13](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/map.ts#L13)

___

### voronoiCells

• **voronoiCells**: [`VoronoiCell`](map.md#voronoicell)[][] = `[]`

#### Defined in

[modules/map.ts:10](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/map.ts#L10)

___

### voronoiRegions

• **voronoiRegions**: [`VoronoiRegion`](map.md#voronoiregion)[] = `[]`

#### Defined in

[modules/map.ts:14](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/map.ts#L14)

___

### width

• **width**: `number`

#### Defined in

[modules/map.ts:5](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/map.ts#L5)

## Functions

### GenerateCell

▸ **GenerateCell**(`cellTypes`, `x`, `y`): [`CellType`](map.md#celltype)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cellTypes` | [`CellType`](map.md#celltype)[] |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`CellType`](map.md#celltype)

#### Defined in

[modules/map.ts:82](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/map.ts#L82)

___

### GenerateCellsDungeonBSP

▸ **GenerateCellsDungeonBSP**(`minWidth`, `minHeight`, `wallCellType?`): [`DungeonBSP`](map.md#dungeonbsp)

#### Parameters

| Name | Type |
| :------ | :------ |
| `minWidth` | `number` |
| `minHeight` | `number` |
| `wallCellType?` | [`CellType`](map.md#celltype) |

#### Returns

[`DungeonBSP`](map.md#dungeonbsp)

#### Defined in

[modules/map.ts:109](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/map.ts#L109)

___

### GenerateCellsVoronoi

▸ **GenerateCellsVoronoi**(`width`, `height`, `voronoiPointCoords`, `voronoiPointGroups`, `voronoiCellTypes`): `void`

Calculate voronoi regions and populate the map based on the locations of region cells.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `width` | `number` | - |
| `height` | `number` | - |
| `voronoiPointCoords` | [`VoronoiCoordinate`](map.md#voronoicoordinate)[] | Array of centre-points for each region to calculate. |
| `voronoiPointGroups` | `string`[] | Group filter(s) to use from cell types palette for each region (Array position corresponds with coord index in first parameter). Multiple group filters separated by commas. |
| `voronoiCellTypes` | [`CellType`](map.md#celltype)[] | Palette of cell types to use in the generator. Group property allows selecting certain cell types based on voronoi region. |

#### Returns

`void`

#### Defined in

[modules/map.ts:213](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/map.ts#L213)

___

### Initialize

▸ **Initialize**(`mapWidth`, `mapHeight`, `selectCellTypesFunction?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapWidth` | `number` |
| `mapHeight` | `number` |
| `selectCellTypesFunction?` | [`SelectCellTypesFunction`](../interfaces/map.SelectCellTypesFunction.md) |

#### Returns

`void`

#### Defined in

[modules/map.ts:368](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/map.ts#L368)

___

### SelectCellTypes

▸ **SelectCellTypes**(`x`, `y`, `selectFn?`): [`CellType`](map.md#celltype)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `selectFn?` | [`SelectCellTypesFunction`](../interfaces/map.SelectCellTypesFunction.md) |

#### Returns

[`CellType`](map.md#celltype)[]

#### Defined in

[modules/map.ts:361](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/map.ts#L361)

___

### clearMap

▸ **clearMap**(): `void`

#### Returns

`void`

#### Defined in

[modules/map.ts:354](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/map.ts#L354)

___

### distance

▸ **distance**(`x1`, `y1`, `x2`, `y2`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x1` | `number` |
| `y1` | `number` |
| `x2` | `number` |
| `y2` | `number` |

#### Returns

`number`

#### Defined in

[modules/map.ts:105](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/map.ts#L105)

___

### fov

▸ **fov**(`viewRadius`, `x`, `y`): [`MapCell`](map.md#mapcell)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewRadius` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`MapCell`](map.md#mapcell)[]

#### Defined in

[modules/map.ts:462](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/map.ts#L462)

___

### generateCellFunction

▸ **generateCellFunction**(`cellTypes`, `x`, `y`): [`CellType`](map.md#celltype)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cellTypes` | [`CellType`](map.md#celltype)[] |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`CellType`](map.md#celltype)

#### Defined in

[modules/map.ts:69](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/map.ts#L69)

___

### getCell

▸ **getCell**(`x`, `y`): [`MapCell`](map.md#mapcell)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`MapCell`](map.md#mapcell)

#### Defined in

[modules/map.ts:413](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/map.ts#L413)

___

### getCells

▸ **getCells**(`filterFn`): [`MapCell`](map.md#mapcell)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `filterFn` | [`GetCellsFilterFunction`](../interfaces/map.GetCellsFilterFunction.md) |

#### Returns

[`MapCell`](map.md#mapcell)[]

#### Defined in

[modules/map.ts:401](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/map.ts#L401)

___

### getExploredCells

▸ **getExploredCells**(): [`MapCell`](map.md#mapcell)[]

#### Returns

[`MapCell`](map.md#mapcell)[]

#### Defined in

[modules/map.ts:450](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/map.ts#L450)

___

### getRegion

▸ **getRegion**(`id`): [`VoronoiRegion`](map.md#voronoiregion)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

[`VoronoiRegion`](map.md#voronoiregion)

#### Defined in

[modules/map.ts:346](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/map.ts#L346)

___

### getVCell

▸ **getVCell**(`x`, `y`): [`VoronoiCell`](map.md#voronoicell)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`VoronoiCell`](map.md#voronoicell)

#### Defined in

[modules/map.ts:200](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/map.ts#L200)

___

### isExplored

▸ **isExplored**(`x`, `y`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`boolean`

#### Defined in

[modules/map.ts:442](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/map.ts#L442)

___

### selectCellTypes

▸ **selectCellTypes**(`x`, `y`): [`CellType`](map.md#celltype)[]

Default function for selecting the palette of cell types to pass to the generator.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`CellType`](map.md#celltype)[]

#### Defined in

[modules/map.ts:87](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/map.ts#L87)

___

### setCell

▸ **setCell**(`mapCell`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapCell` | [`MapCell`](map.md#mapcell) |

#### Returns

`void`

#### Defined in

[modules/map.ts:426](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/map.ts#L426)

___

### setExplored

▸ **setExplored**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Defined in

[modules/map.ts:434](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/map.ts#L434)

___

### setGenerateCellFunction

▸ **setGenerateCellFunction**(`generateFn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `generateFn` | [`GenerateCellFunction`](../interfaces/map.GenerateCellFunction.md) |

#### Returns

`void`

#### Defined in

[modules/map.ts:78](https://github.com/philbgarner/retrolib/blob/3f51de3/src/modules/map.ts#L78)
