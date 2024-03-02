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

[modules/terminal.ts:12](https://github.com/philbgarner/retrolib/blob/2787147/src/modules/terminal.ts#L12)

## Variables

### cellData

• **cellData**: [`TerminalCell`](terminal.md#terminalcell)[][] = `[]`

#### Defined in

[modules/terminal.ts:20](https://github.com/philbgarner/retrolib/blob/2787147/src/modules/terminal.ts#L20)

___

### emptyCellData

• **emptyCellData**: [`TerminalCell`](terminal.md#terminalcell)[][] = `[]`

#### Defined in

[modules/terminal.ts:21](https://github.com/philbgarner/retrolib/blob/2787147/src/modules/terminal.ts#L21)

## Functions

### Dispose

▸ **Dispose**(): `void`

#### Returns

`void`

#### Defined in

[modules/terminal.ts:170](https://github.com/philbgarner/retrolib/blob/2787147/src/modules/terminal.ts#L170)

___

### Draw

▸ **Draw**(): `void`

#### Returns

`void`

#### Defined in

[modules/terminal.ts:30](https://github.com/philbgarner/retrolib/blob/2787147/src/modules/terminal.ts#L30)

___

### Initialize

▸ **Initialize**(): `void`

#### Returns

`void`

#### Defined in

[modules/terminal.ts:144](https://github.com/philbgarner/retrolib/blob/2787147/src/modules/terminal.ts#L144)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[modules/terminal.ts:166](https://github.com/philbgarner/retrolib/blob/2787147/src/modules/terminal.ts#L166)

___

### columnsCount

▸ **columnsCount**(): `number`

#### Returns

`number`

#### Defined in

[modules/terminal.ts:185](https://github.com/philbgarner/retrolib/blob/2787147/src/modules/terminal.ts#L185)

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

[modules/terminal.ts:107](https://github.com/philbgarner/retrolib/blob/2787147/src/modules/terminal.ts#L107)

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

[modules/terminal.ts:137](https://github.com/philbgarner/retrolib/blob/2787147/src/modules/terminal.ts#L137)

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

[modules/terminal.ts:93](https://github.com/philbgarner/retrolib/blob/2787147/src/modules/terminal.ts#L93)

___

### getFont

▸ **getFont**(): [`FontData`](../classes/FontData.md)

#### Returns

[`FontData`](../classes/FontData.md)

#### Defined in

[modules/terminal.ts:181](https://github.com/philbgarner/retrolib/blob/2787147/src/modules/terminal.ts#L181)

___

### rowsCount

▸ **rowsCount**(): `number`

#### Returns

`number`

#### Defined in

[modules/terminal.ts:192](https://github.com/philbgarner/retrolib/blob/2787147/src/modules/terminal.ts#L192)

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

[modules/terminal.ts:66](https://github.com/philbgarner/retrolib/blob/2787147/src/modules/terminal.ts#L66)

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

[modules/terminal.ts:75](https://github.com/philbgarner/retrolib/blob/2787147/src/modules/terminal.ts#L75)

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

[modules/terminal.ts:177](https://github.com/philbgarner/retrolib/blob/2787147/src/modules/terminal.ts#L177)

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

[modules/terminal.ts:87](https://github.com/philbgarner/retrolib/blob/2787147/src/modules/terminal.ts#L87)

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

[modules/terminal.ts:26](https://github.com/philbgarner/retrolib/blob/2787147/src/modules/terminal.ts#L26)

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

[modules/terminal.ts:207](https://github.com/philbgarner/retrolib/blob/2787147/src/modules/terminal.ts#L207)

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

[modules/terminal.ts:199](https://github.com/philbgarner/retrolib/blob/2787147/src/modules/terminal.ts#L199)
