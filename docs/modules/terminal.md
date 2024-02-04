[retrolib](../README.md) / [Exports](../modules.md) / terminal

# Namespace: terminal

## Table of contents

### Type Aliases

- [TerminalCell](terminal.md#terminalcell)

### Variables

- [cellData](terminal.md#celldata)
- [emptyCellData](terminal.md#emptycelldata)

### Functions

- [Dispose](terminal.md#dispose)
- [Draw](terminal.md#draw)
- [Initialize](terminal.md#initialize)
- [clear](terminal.md#clear)
- [columnsCount](terminal.md#columnscount)
- [getCell](terminal.md#getcell)
- [getFont](terminal.md#getfont)
- [rowsCount](terminal.md#rowscount)
- [setCell](terminal.md#setcell)
- [setCells](terminal.md#setcells)
- [setFont](terminal.md#setfont)
- [setRect](terminal.md#setrect)
- [terminalHeight](terminal.md#terminalheight)
- [terminalWidth](terminal.md#terminalwidth)

## Type Aliases

### TerminalCell

Ƭ **TerminalCell**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bgColor` | [`ColorRGBA`](font.md#colorrgba) |
| `character` | `string` |
| `color` | [`ColorRGBA`](font.md#colorrgba) |
| `x` | `number` |
| `y` | `number` |

#### Defined in

[modules/terminal.ts:12](https://github.com/philbgarner/retrolib/blob/9851c78/src/modules/terminal.ts#L12)

## Variables

### cellData

• **cellData**: [`TerminalCell`](terminal.md#terminalcell)[][] = `[]`

#### Defined in

[modules/terminal.ts:20](https://github.com/philbgarner/retrolib/blob/9851c78/src/modules/terminal.ts#L20)

___

### emptyCellData

• **emptyCellData**: [`TerminalCell`](terminal.md#terminalcell)[][] = `[]`

#### Defined in

[modules/terminal.ts:21](https://github.com/philbgarner/retrolib/blob/9851c78/src/modules/terminal.ts#L21)

## Functions

### Dispose

▸ **Dispose**(): `void`

#### Returns

`void`

#### Defined in

[modules/terminal.ts:119](https://github.com/philbgarner/retrolib/blob/9851c78/src/modules/terminal.ts#L119)

___

### Draw

▸ **Draw**(): `void`

#### Returns

`void`

#### Defined in

[modules/terminal.ts:26](https://github.com/philbgarner/retrolib/blob/9851c78/src/modules/terminal.ts#L26)

___

### Initialize

▸ **Initialize**(): `void`

#### Returns

`void`

#### Defined in

[modules/terminal.ts:93](https://github.com/philbgarner/retrolib/blob/9851c78/src/modules/terminal.ts#L93)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[modules/terminal.ts:115](https://github.com/philbgarner/retrolib/blob/9851c78/src/modules/terminal.ts#L115)

___

### columnsCount

▸ **columnsCount**(): `number`

#### Returns

`number`

#### Defined in

[modules/terminal.ts:134](https://github.com/philbgarner/retrolib/blob/9851c78/src/modules/terminal.ts#L134)

___

### getCell

▸ **getCell**(`x`, `y`): [`TerminalCell`](terminal.md#terminalcell)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`TerminalCell`](terminal.md#terminalcell)

#### Defined in

[modules/terminal.ts:87](https://github.com/philbgarner/retrolib/blob/9851c78/src/modules/terminal.ts#L87)

___

### getFont

▸ **getFont**(): [`FontData`](../classes/FontData.md)

#### Returns

[`FontData`](../classes/FontData.md)

#### Defined in

[modules/terminal.ts:130](https://github.com/philbgarner/retrolib/blob/9851c78/src/modules/terminal.ts#L130)

___

### rowsCount

▸ **rowsCount**(): `number`

#### Returns

`number`

#### Defined in

[modules/terminal.ts:141](https://github.com/philbgarner/retrolib/blob/9851c78/src/modules/terminal.ts#L141)

___

### setCell

▸ **setCell**(`x`, `y`, `character`, `color`, `bgColor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `character` | `string` |
| `color` | [`ColorRGBA`](font.md#colorrgba) |
| `bgColor` | [`ColorRGBA`](font.md#colorrgba) |

#### Returns

`void`

#### Defined in

[modules/terminal.ts:62](https://github.com/philbgarner/retrolib/blob/9851c78/src/modules/terminal.ts#L62)

___

### setCells

▸ **setCells**(`startX`, `startY`, `text`, `color`, `bgColor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `startX` | `number` |
| `startY` | `number` |
| `text` | `string` |
| `color` | [`ColorRGBA`](font.md#colorrgba) \| [`ColorRGBA`](font.md#colorrgba)[] |
| `bgColor` | [`ColorRGBA`](font.md#colorrgba) |

#### Returns

`void`

#### Defined in

[modules/terminal.ts:69](https://github.com/philbgarner/retrolib/blob/9851c78/src/modules/terminal.ts#L69)

___

### setFont

▸ **setFont**(`fontData`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fontData` | [`FontData`](../classes/FontData.md) |

#### Returns

`void`

#### Defined in

[modules/terminal.ts:126](https://github.com/philbgarner/retrolib/blob/9851c78/src/modules/terminal.ts#L126)

___

### setRect

▸ **setRect**(`x1`, `x2`, `w`, `h`, `color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x1` | `number` |
| `x2` | `number` |
| `w` | `number` |
| `h` | `number` |
| `color` | [`ColorRGBA`](font.md#colorrgba) |

#### Returns

`void`

#### Defined in

[modules/terminal.ts:81](https://github.com/philbgarner/retrolib/blob/9851c78/src/modules/terminal.ts#L81)

___

### terminalHeight

▸ **terminalHeight**(`height`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | `number` |

#### Returns

`number`

#### Defined in

[modules/terminal.ts:156](https://github.com/philbgarner/retrolib/blob/9851c78/src/modules/terminal.ts#L156)

___

### terminalWidth

▸ **terminalWidth**(`width`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |

#### Returns

`number`

#### Defined in

[modules/terminal.ts:148](https://github.com/philbgarner/retrolib/blob/9851c78/src/modules/terminal.ts#L148)
