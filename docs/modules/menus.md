[retrolib](../README.md) / [Exports](../modules.md) / menus

# Namespace: menus

## Table of contents

### Enumerations

- [LayoutDirection](../enums/menus.LayoutDirection.md)

### Type Aliases

- [LayoutExtras](menus.md#layoutextras)

### Functions

- [LayoutMenu](menus.md#layoutmenu)

## Type Aliases

### LayoutExtras

Ƭ **LayoutExtras**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `onInput` | `OnInputFunction` |

#### Defined in

[modules/menus.ts:11](https://github.com/philbgarner/retrolib/blob/7d31d65/src/modules/menus.ts#L11)

## Functions

### LayoutMenu

▸ **LayoutMenu**(`id`, `options`, `direction`, `margin`, `startX`, `startY`, `nextSceneId`, `prevSceneId`, `extras?`): [`Menu`](../classes/Menu.md)

Take a list of strings and create a menu with the options automatically laid out.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | - |
| `options` | `string`[] | Items in the menu list. |
| `direction` | [`LayoutDirection`](../enums/menus.LayoutDirection.md) | TopDown (row) or LeftToRight (column) layout. |
| `margin` | `number` | Number of pixels to add between options. |
| `startX` | `number` | Top left coordinate of starting point. |
| `startY` | `number` | Top left coordinate of starting point. |
| `nextSceneId` | `string` | - |
| `prevSceneId` | `string` | - |
| `extras?` | [`LayoutExtras`](menus.md#layoutextras) | Extra options for layout (optional). |

#### Returns

[`Menu`](../classes/Menu.md)

#### Defined in

[modules/menus.ts:25](https://github.com/philbgarner/retrolib/blob/7d31d65/src/modules/menus.ts#L25)
