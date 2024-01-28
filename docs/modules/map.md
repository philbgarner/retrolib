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

- [mapCells](map.md#mapcells)

### Functions

- [GenerateCell](map.md#generatecell)
- [GetCells](map.md#getcells)
- [Initialize](map.md#initialize)
- [SelectCellTypes](map.md#selectcelltypes)
- [generateCellFunction](map.md#generatecellfunction)
- [selectCellTypes](map.md#selectcelltypes-1)

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

[modules/map.ts:4](https://github.com/philbgarner/retrolib/blob/9942244/src/modules/map.ts#L4)

___

### MapCell

Ƭ **MapCell**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cellType` | [`CellType`](map.md#celltype) |
| `x` | `number` |
| `y` | `number` |

#### Defined in

[modules/map.ts:14](https://github.com/philbgarner/retrolib/blob/9942244/src/modules/map.ts#L14)

## Variables

### mapCells

• **mapCells**: [`CellType`](map.md#celltype)[][] = `[]`

#### Defined in

[modules/map.ts:48](https://github.com/philbgarner/retrolib/blob/9942244/src/modules/map.ts#L48)

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

[modules/map.ts:29](https://github.com/philbgarner/retrolib/blob/9942244/src/modules/map.ts#L29)

___

### GetCells

▸ **GetCells**(`filterFn`): [`MapCell`](map.md#mapcell)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `filterFn` | [`GetCellsFilterFunction`](../interfaces/map.GetCellsFilterFunction.md) |

#### Returns

[`MapCell`](map.md#mapcell)[]

#### Defined in

[modules/map.ts:66](https://github.com/philbgarner/retrolib/blob/9942244/src/modules/map.ts#L66)

___

### Initialize

▸ **Initialize**(`width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Defined in

[modules/map.ts:50](https://github.com/philbgarner/retrolib/blob/9942244/src/modules/map.ts#L50)

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

[modules/map.ts:41](https://github.com/philbgarner/retrolib/blob/9942244/src/modules/map.ts#L41)

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

[modules/map.ts:21](https://github.com/philbgarner/retrolib/blob/9942244/src/modules/map.ts#L21)

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

[modules/map.ts:34](https://github.com/philbgarner/retrolib/blob/9942244/src/modules/map.ts#L34)
