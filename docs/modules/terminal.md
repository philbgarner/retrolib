[retrolib](../README.md) / [Exports](../modules.md) / terminal

# Namespace: terminal

## Table of contents

### Enumerations

- [BoxBorder](../enums/terminal.BoxBorder.md)

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
- [drawBox](terminal.md#drawbox)
- [drawTitleBox](terminal.md#drawtitlebox)
- [getCell](terminal.md#getcell)
- [getFont](terminal.md#getfont)
- [rowsCount](terminal.md#rowscount)
- [setCell](terminal.md#setcell)
- [setCells](terminal.md#setcells)
- [setChangeTimestamp](terminal.md#setchangetimestamp)
- [setFont](terminal.md#setfont)
- [setRect](terminal.md#setrect)
- [setTerminalBackground](terminal.md#setterminalbackground)
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

[modules/terminal.ts:16](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/terminal.ts#L16)

## Variables

### cellData

• **cellData**: [`TerminalCell`](terminal.md#terminalcell)[][] = `[]`

#### Defined in

[modules/terminal.ts:24](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/terminal.ts#L24)

___

### emptyCellData

• **emptyCellData**: [`TerminalCell`](terminal.md#terminalcell)[][] = `[]`

#### Defined in

[modules/terminal.ts:25](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/terminal.ts#L25)

## Functions

### Dispose

▸ **Dispose**(): `void`

#### Returns

`void`

#### Defined in

[modules/terminal.ts:174](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/terminal.ts#L174)

___

### Draw

▸ **Draw**(): `void`

#### Returns

`void`

#### Defined in

[modules/terminal.ts:34](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/terminal.ts#L34)

___

### Initialize

▸ **Initialize**(): `void`

#### Returns

`void`

#### Defined in

[modules/terminal.ts:148](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/terminal.ts#L148)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[modules/terminal.ts:170](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/terminal.ts#L170)

___

### columnsCount

▸ **columnsCount**(): `number`

#### Returns

`number`

#### Defined in

[modules/terminal.ts:189](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/terminal.ts#L189)

___

### drawBox

▸ **drawBox**(`x`, `y`, `w`, `h`, `color`, `bgColor`, `borderStyle?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `w` | `number` |
| `h` | `number` |
| `color` | [`ColorRGBA`](font.md#colorrgba) |
| `bgColor` | [`ColorRGBA`](font.md#colorrgba) |
| `borderStyle?` | [`BoxBorder`](../enums/terminal.BoxBorder.md) |

#### Returns

`void`

#### Defined in

[modules/terminal.ts:111](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/terminal.ts#L111)

___

### drawTitleBox

▸ **drawTitleBox**(`title`, `x`, `y`, `w`, `h`, `color`, `bgColor`, `borderStyle?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |
| `x` | `number` |
| `y` | `number` |
| `w` | `number` |
| `h` | `number` |
| `color` | [`ColorRGBA`](font.md#colorrgba) |
| `bgColor` | [`ColorRGBA`](font.md#colorrgba) |
| `borderStyle?` | [`BoxBorder`](../enums/terminal.BoxBorder.md) |

#### Returns

`void`

#### Defined in

[modules/terminal.ts:141](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/terminal.ts#L141)

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

[modules/terminal.ts:97](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/terminal.ts#L97)

___

### getFont

▸ **getFont**(): [`FontData`](../classes/FontData.md)

#### Returns

[`FontData`](../classes/FontData.md)

#### Defined in

[modules/terminal.ts:185](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/terminal.ts#L185)

___

### rowsCount

▸ **rowsCount**(): `number`

#### Returns

`number`

#### Defined in

[modules/terminal.ts:196](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/terminal.ts#L196)

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

[modules/terminal.ts:70](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/terminal.ts#L70)

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

[modules/terminal.ts:79](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/terminal.ts#L79)

___

### setChangeTimestamp

▸ **setChangeTimestamp**(): `void`

#### Returns

`void`

#### Defined in

[modules/terminal.ts:12](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/terminal.ts#L12)

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

[modules/terminal.ts:181](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/terminal.ts#L181)

___

### setRect

▸ **setRect**(`x`, `y`, `w`, `h`, `color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `w` | `number` |
| `h` | `number` |
| `color` | [`ColorRGBA`](font.md#colorrgba) |

#### Returns

`void`

#### Defined in

[modules/terminal.ts:91](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/terminal.ts#L91)

___

### setTerminalBackground

▸ **setTerminalBackground**(`color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`ColorRGBA`](font.md#colorrgba) |

#### Returns

`void`

#### Defined in

[modules/terminal.ts:30](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/terminal.ts#L30)

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

[modules/terminal.ts:211](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/terminal.ts#L211)

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

[modules/terminal.ts:203](https://github.com/philbgarner/retrolib/blob/d7cbf0a/src/modules/terminal.ts#L203)
