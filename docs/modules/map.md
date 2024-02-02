[retrolib](../README.md) / [Exports](../modules.md) / map

# Namespace: map

## Table of contents

### Interfaces

- [GenerateCellFunction](../interfaces/map.GenerateCellFunction.md)
- [GetCellsFilterFunction](../interfaces/map.GetCellsFilterFunction.md)
- [SelectCellTypesFunction](../interfaces/map.SelectCellTypesFunction.md)

### Type Aliases

- [CellType](map.md#celltype)
- [MapCell](map.md#mapcell)

### Variables

- [exploredCells](map.md#exploredcells)
- [height](map.md#height)
- [mapCells](map.md#mapcells)
- [width](map.md#width)

### Functions

- [GenerateCell](map.md#generatecell)
- [Initialize](map.md#initialize)
- [SelectCellTypes](map.md#selectcelltypes)
- [clearMap](map.md#clearmap)
- [fov](map.md#fov)
- [generateCellFunction](map.md#generatecellfunction)
- [getCell](map.md#getcell)
- [getCells](map.md#getcells)
- [isExplored](map.md#isexplored)
- [selectCellTypes](map.md#selectcelltypes-1)
- [setCell](map.md#setcell)
- [setExplored](map.md#setexplored)

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

[modules/map.ts:9](https://github.com/philbgarner/retrolib/blob/97cd8c0/src/modules/map.ts#L9)

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

[modules/map.ts:19](https://github.com/philbgarner/retrolib/blob/97cd8c0/src/modules/map.ts#L19)

## Variables

### exploredCells

• **exploredCells**: `boolean`[][] = `[]`

#### Defined in

[modules/map.ts:7](https://github.com/philbgarner/retrolib/blob/97cd8c0/src/modules/map.ts#L7)

___

### height

• **height**: `number`

#### Defined in

[modules/map.ts:5](https://github.com/philbgarner/retrolib/blob/97cd8c0/src/modules/map.ts#L5)

___

### mapCells

• **mapCells**: [`MapCell`](map.md#mapcell)[][] = `[]`

#### Defined in

[modules/map.ts:6](https://github.com/philbgarner/retrolib/blob/97cd8c0/src/modules/map.ts#L6)

___

### width

• **width**: `number`

#### Defined in

[modules/map.ts:4](https://github.com/philbgarner/retrolib/blob/97cd8c0/src/modules/map.ts#L4)

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

[modules/map.ts:35](https://github.com/philbgarner/retrolib/blob/97cd8c0/src/modules/map.ts#L35)

___

### Initialize

▸ **Initialize**(`mapWidth`, `mapHeight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapWidth` | `number` |
| `mapHeight` | `number` |

#### Returns

`void`

#### Defined in

[modules/map.ts:59](https://github.com/philbgarner/retrolib/blob/97cd8c0/src/modules/map.ts#L59)

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

[modules/map.ts:52](https://github.com/philbgarner/retrolib/blob/97cd8c0/src/modules/map.ts#L52)

___

### clearMap

▸ **clearMap**(): `void`

#### Returns

`void`

#### Defined in

[modules/map.ts:47](https://github.com/philbgarner/retrolib/blob/97cd8c0/src/modules/map.ts#L47)

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

[modules/map.ts:127](https://github.com/philbgarner/retrolib/blob/97cd8c0/src/modules/map.ts#L127)

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

[modules/map.ts:27](https://github.com/philbgarner/retrolib/blob/97cd8c0/src/modules/map.ts#L27)

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

[modules/map.ts:98](https://github.com/philbgarner/retrolib/blob/97cd8c0/src/modules/map.ts#L98)

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

[modules/map.ts:86](https://github.com/philbgarner/retrolib/blob/97cd8c0/src/modules/map.ts#L86)

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

[modules/map.ts:121](https://github.com/philbgarner/retrolib/blob/97cd8c0/src/modules/map.ts#L121)

___

### selectCellTypes

▸ **selectCellTypes**(`x`, `y`): [`CellType`](map.md#celltype)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`CellType`](map.md#celltype)[]

#### Defined in

[modules/map.ts:40](https://github.com/philbgarner/retrolib/blob/97cd8c0/src/modules/map.ts#L40)

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

[modules/map.ts:109](https://github.com/philbgarner/retrolib/blob/97cd8c0/src/modules/map.ts#L109)

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

[modules/map.ts:115](https://github.com/philbgarner/retrolib/blob/97cd8c0/src/modules/map.ts#L115)
