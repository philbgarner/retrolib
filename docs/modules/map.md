[retrolib](../README.md) / [Exports](../modules.md) / map

# Namespace: map

## Table of contents

### Interfaces

- [GenerateCellFunction](../interfaces/map.GenerateCellFunction.md)
- [GetCellsFilterFunction](../interfaces/map.GetCellsFilterFunction.md)
- [SelectCellTypesFunction](../interfaces/map.SelectCellTypesFunction.md)

### Type Aliases

- [CellType](map.md#celltype)
- [Connection](map.md#connection)
- [EdgeCoordinate](map.md#edgecoordinate)
- [MapCell](map.md#mapcell)
- [RoomBSP](map.md#roombsp)
- [VoronoiCell](map.md#voronoicell)
- [VoronoiCoordinate](map.md#voronoicoordinate)
- [VoronoiRegion](map.md#voronoiregion)
- [ZoneBSP](map.md#zonebsp)

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
- [setAllExplored](map.md#setallexplored)
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

[modules/map.ts:75](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/map.ts#L75)

___

### Connection

Ƭ **Connection**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `endDoor` | [`Coordinates`](../modules.md#coordinates) |
| `endRoom` | [`RoomBSP`](map.md#roombsp) |
| `floors` | [`Coordinates`](../modules.md#coordinates)[] |
| `startDoor` | [`Coordinates`](../modules.md#coordinates) |
| `startRoom` | [`RoomBSP`](map.md#roombsp) |

#### Defined in

[modules/map.ts:16](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/map.ts#L16)

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

[modules/map.ts:54](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/map.ts#L54)

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

[modules/map.ts:85](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/map.ts#L85)

___

### RoomBSP

Ƭ **RoomBSP**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `connections` | [`Connection`](map.md#connection)[] |
| `doors` | [`Coordinates`](../modules.md#coordinates)[] |
| `floors` | [`Coordinates`](../modules.md#coordinates)[] |
| `h` | `number` |
| `id` | `string` |
| `siblingIds` | `string`[] |
| `siblings` | [`RoomBSP`](map.md#roombsp)[] |
| `w` | `number` |
| `walls` | [`Coordinates`](../modules.md#coordinates)[] |
| `x` | `number` |
| `y` | `number` |

#### Defined in

[modules/map.ts:24](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/map.ts#L24)

___

### VoronoiCell

Ƭ **VoronoiCell**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `distance` | `number` |
| `voronoiId` | `number` |

#### Defined in

[modules/map.ts:70](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/map.ts#L70)

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

[modules/map.ts:48](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/map.ts#L48)

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

[modules/map.ts:61](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/map.ts#L61)

___

### ZoneBSP

Ƭ **ZoneBSP**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `children` | [`ZoneBSP`](map.md#zonebsp)[] |
| `h` | `number` |
| `id` | `string` |
| `parent` | [`ZoneBSP`](map.md#zonebsp) |
| `w` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Defined in

[modules/map.ts:38](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/map.ts#L38)

## Variables

### corners

• **corners**: [`EdgeCoordinate`](map.md#edgecoordinate)[] = `[]`

#### Defined in

[modules/map.ts:12](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/map.ts#L12)

___

### edges

• **edges**: [`EdgeCoordinate`](map.md#edgecoordinate)[] = `[]`

#### Defined in

[modules/map.ts:11](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/map.ts#L11)

___

### exploredCellCache

• **exploredCellCache**: [`MapCell`](map.md#mapcell)[]

#### Defined in

[modules/map.ts:9](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/map.ts#L9)

___

### exploredCells

• **exploredCells**: `boolean`[][] = `[]`

#### Defined in

[modules/map.ts:8](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/map.ts#L8)

___

### height

• **height**: `number`

#### Defined in

[modules/map.ts:6](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/map.ts#L6)

___

### mapCells

• **mapCells**: [`MapCell`](map.md#mapcell)[][] = `[]`

#### Defined in

[modules/map.ts:7](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/map.ts#L7)

___

### middles

• **middles**: [`VoronoiCoordinate`](map.md#voronoicoordinate)[] = `[]`

#### Defined in

[modules/map.ts:13](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/map.ts#L13)

___

### voronoiCells

• **voronoiCells**: [`VoronoiCell`](map.md#voronoicell)[][] = `[]`

#### Defined in

[modules/map.ts:10](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/map.ts#L10)

___

### voronoiRegions

• **voronoiRegions**: [`VoronoiRegion`](map.md#voronoiregion)[] = `[]`

#### Defined in

[modules/map.ts:14](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/map.ts#L14)

___

### width

• **width**: `number`

#### Defined in

[modules/map.ts:5](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/map.ts#L5)

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

[modules/map.ts:106](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/map.ts#L106)

___

### GenerateCellsDungeonBSP

▸ **GenerateCellsDungeonBSP**(`minWidth`, `minHeight`, `maxWidth`, `maxHeight`, `wallCellType?`, `maxIterations?`): ([`RoomBSP`](map.md#roombsp)[] \| [`ZoneBSP`](map.md#zonebsp) \| [`ZoneBSP`](map.md#zonebsp)[])[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `minWidth` | `number` |
| `minHeight` | `number` |
| `maxWidth` | `number` |
| `maxHeight` | `number` |
| `wallCellType?` | [`CellType`](map.md#celltype) |
| `maxIterations?` | `number` |

#### Returns

([`RoomBSP`](map.md#roombsp)[] \| [`ZoneBSP`](map.md#zonebsp) \| [`ZoneBSP`](map.md#zonebsp)[])[]

#### Defined in

[modules/map.ts:133](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/map.ts#L133)

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

[modules/map.ts:391](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/map.ts#L391)

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

[modules/map.ts:546](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/map.ts#L546)

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

[modules/map.ts:539](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/map.ts#L539)

___

### clearMap

▸ **clearMap**(): `void`

#### Returns

`void`

#### Defined in

[modules/map.ts:532](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/map.ts#L532)

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

[modules/map.ts:129](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/map.ts#L129)

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

[modules/map.ts:648](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/map.ts#L648)

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

[modules/map.ts:93](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/map.ts#L93)

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

[modules/map.ts:591](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/map.ts#L591)

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

[modules/map.ts:579](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/map.ts#L579)

___

### getExploredCells

▸ **getExploredCells**(): [`MapCell`](map.md#mapcell)[]

#### Returns

[`MapCell`](map.md#mapcell)[]

#### Defined in

[modules/map.ts:636](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/map.ts#L636)

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

[modules/map.ts:524](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/map.ts#L524)

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

[modules/map.ts:378](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/map.ts#L378)

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

[modules/map.ts:628](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/map.ts#L628)

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

[modules/map.ts:111](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/map.ts#L111)

___

### setAllExplored

▸ **setAllExplored**(): `void`

#### Returns

`void`

#### Defined in

[modules/map.ts:620](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/map.ts#L620)

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

[modules/map.ts:604](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/map.ts#L604)

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

[modules/map.ts:612](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/map.ts#L612)

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

[modules/map.ts:102](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/map.ts#L102)
