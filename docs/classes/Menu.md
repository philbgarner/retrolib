[retrolib](../README.md) / [Exports](../modules.md) / Menu

# Class: Menu

Menu Flavour of Scenes.

## Hierarchy

- [`Scene`](Scene.md)

  ↳ **`Menu`**

## Table of contents

### Constructors

- [constructor](Menu.md#constructor)

### Properties

- [actionInput](Menu.md#actioninput)
- [active](Menu.md#active)
- [animationFrame](Menu.md#animationframe)
- [cancelInput](Menu.md#cancelinput)
- [color](Menu.md#color)
- [ctx](Menu.md#ctx)
- [decrementSecondaryInput](Menu.md#decrementsecondaryinput)
- [decrementSelectionInput](Menu.md#decrementselectioninput)
- [elapsed](Menu.md#elapsed)
- [handleInput](Menu.md#handleinput)
- [id](Menu.md#id)
- [incrementSecondaryInput](Menu.md#incrementsecondaryinput)
- [incrementSelectionInput](Menu.md#incrementselectioninput)
- [offsetX](Menu.md#offsetx)
- [offsetY](Menu.md#offsety)
- [onActivate](Menu.md#onactivate)
- [onDeactivate](Menu.md#ondeactivate)
- [options](Menu.md#options)
- [selectSpeed](Menu.md#selectspeed)
- [selectedColor](Menu.md#selectedcolor)
- [selectedOption](Menu.md#selectedoption)

### Methods

- [Draw](Menu.md#draw)
- [Selected](Menu.md#selected)

## Constructors

### constructor

• **new Menu**(`id`, `active`, `direction`, `options`): [`Menu`](Menu.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Scene id. |
| `active` | `boolean` | Whether or not the scene starts activated. |
| `direction` | [`LayoutDirection`](../enums/menus.LayoutDirection.md) | Layout direction. |
| `options` | [`MenuOption`](../modules.md#menuoption)[] | Menu options (items). |

#### Returns

[`Menu`](Menu.md)

#### Overrides

[Scene](Scene.md).[constructor](Scene.md#constructor)

#### Defined in

[modules/menu.ts:68](https://github.com/philbgarner/retrolib/blob/f0d6031/src/modules/menu.ts#L68)

## Properties

### actionInput

• **actionInput**: `string`

#### Defined in

[modules/menu.ts:55](https://github.com/philbgarner/retrolib/blob/f0d6031/src/modules/menu.ts#L55)

___

### active

• **active**: `boolean`

#### Inherited from

[Scene](Scene.md).[active](Scene.md#active)

#### Defined in

[modules/scene.ts:25](https://github.com/philbgarner/retrolib/blob/f0d6031/src/modules/scene.ts#L25)

___

### animationFrame

• **animationFrame**: [`AnimationFrameFunction`](../interfaces/AnimationFrameFunction.md)

#### Inherited from

[Scene](Scene.md).[animationFrame](Scene.md#animationframe)

#### Defined in

[modules/scene.ts:24](https://github.com/philbgarner/retrolib/blob/f0d6031/src/modules/scene.ts#L24)

___

### cancelInput

• **cancelInput**: `string`

#### Defined in

[modules/menu.ts:56](https://github.com/philbgarner/retrolib/blob/f0d6031/src/modules/menu.ts#L56)

___

### color

• **color**: [`ColorRGBA`](../modules/font.md#colorrgba)

#### Defined in

[modules/menu.ts:48](https://github.com/philbgarner/retrolib/blob/f0d6031/src/modules/menu.ts#L48)

___

### ctx

• **ctx**: `CanvasRenderingContext2D`

#### Defined in

[modules/menu.ts:47](https://github.com/philbgarner/retrolib/blob/f0d6031/src/modules/menu.ts#L47)

___

### decrementSecondaryInput

• **decrementSecondaryInput**: `string`

#### Defined in

[modules/menu.ts:59](https://github.com/philbgarner/retrolib/blob/f0d6031/src/modules/menu.ts#L59)

___

### decrementSelectionInput

• **decrementSelectionInput**: `string`

#### Defined in

[modules/menu.ts:53](https://github.com/philbgarner/retrolib/blob/f0d6031/src/modules/menu.ts#L53)

___

### elapsed

• **elapsed**: `number`

#### Inherited from

[Scene](Scene.md).[elapsed](Scene.md#elapsed)

#### Defined in

[modules/scene.ts:32](https://github.com/philbgarner/retrolib/blob/f0d6031/src/modules/scene.ts#L32)

___

### handleInput

• **handleInput**: [`InputHandlerFunction`](../interfaces/InputHandlerFunction.md)

Callback function for input directed at the scene.

#### Inherited from

[Scene](Scene.md).[handleInput](Scene.md#handleinput)

#### Defined in

[modules/scene.ts:31](https://github.com/philbgarner/retrolib/blob/f0d6031/src/modules/scene.ts#L31)

___

### id

• **id**: `string`

#### Inherited from

[Scene](Scene.md).[id](Scene.md#id)

#### Defined in

[modules/scene.ts:23](https://github.com/philbgarner/retrolib/blob/f0d6031/src/modules/scene.ts#L23)

___

### incrementSecondaryInput

• **incrementSecondaryInput**: `string`

#### Defined in

[modules/menu.ts:58](https://github.com/philbgarner/retrolib/blob/f0d6031/src/modules/menu.ts#L58)

___

### incrementSelectionInput

• **incrementSelectionInput**: `string`

#### Defined in

[modules/menu.ts:52](https://github.com/philbgarner/retrolib/blob/f0d6031/src/modules/menu.ts#L52)

___

### offsetX

• **offsetX**: `number`

#### Defined in

[modules/menu.ts:43](https://github.com/philbgarner/retrolib/blob/f0d6031/src/modules/menu.ts#L43)

___

### offsetY

• **offsetY**: `number`

#### Defined in

[modules/menu.ts:44](https://github.com/philbgarner/retrolib/blob/f0d6031/src/modules/menu.ts#L44)

___

### onActivate

• **onActivate**: [`OnActivateFunction`](../interfaces/OnActivateFunction.md)

#### Inherited from

[Scene](Scene.md).[onActivate](Scene.md#onactivate)

#### Defined in

[modules/scene.ts:26](https://github.com/philbgarner/retrolib/blob/f0d6031/src/modules/scene.ts#L26)

___

### onDeactivate

• **onDeactivate**: [`OnDeactivateFunction`](../interfaces/OnDeactivateFunction.md)

#### Inherited from

[Scene](Scene.md).[onDeactivate](Scene.md#ondeactivate)

#### Defined in

[modules/scene.ts:27](https://github.com/philbgarner/retrolib/blob/f0d6031/src/modules/scene.ts#L27)

___

### options

• **options**: [`MenuOption`](../modules.md#menuoption)[]

#### Defined in

[modules/menu.ts:45](https://github.com/philbgarner/retrolib/blob/f0d6031/src/modules/menu.ts#L45)

___

### selectSpeed

• **selectSpeed**: `number`

#### Defined in

[modules/menu.ts:51](https://github.com/philbgarner/retrolib/blob/f0d6031/src/modules/menu.ts#L51)

___

### selectedColor

• **selectedColor**: [`ColorRGBA`](../modules/font.md#colorrgba)

#### Defined in

[modules/menu.ts:49](https://github.com/philbgarner/retrolib/blob/f0d6031/src/modules/menu.ts#L49)

___

### selectedOption

• **selectedOption**: `number`

#### Defined in

[modules/menu.ts:46](https://github.com/philbgarner/retrolib/blob/f0d6031/src/modules/menu.ts#L46)

## Methods

### Draw

▸ **Draw**(`delta`): `void`

Draw the menu.

#### Parameters

| Name | Type |
| :------ | :------ |
| `delta` | `number` |

#### Returns

`void`

#### Defined in

[modules/menu.ts:112](https://github.com/philbgarner/retrolib/blob/f0d6031/src/modules/menu.ts#L112)

___

### Selected

▸ **Selected**(): [`MenuOption`](../modules.md#menuoption)

Returns the currently selected menu option.

#### Returns

[`MenuOption`](../modules.md#menuoption)

#### Defined in

[modules/menu.ts:103](https://github.com/philbgarner/retrolib/blob/f0d6031/src/modules/menu.ts#L103)
