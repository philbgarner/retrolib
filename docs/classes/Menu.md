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

- [active](Menu.md#active)
- [animationFrame](Menu.md#animationframe)
- [color](Menu.md#color)
- [ctx](Menu.md#ctx)
- [decrementSelectionInput](Menu.md#decrementselectioninput)
- [elapsed](Menu.md#elapsed)
- [handleInput](Menu.md#handleinput)
- [id](Menu.md#id)
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

## Constructors

### constructor

• **new Menu**(`id`, `active`, `direction`, `options`, `nextSceneId`, `prevSceneId`): [`Menu`](Menu.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `active` | `boolean` |
| `direction` | [`LayoutDirection`](../enums/menus.LayoutDirection.md) |
| `options` | `MenuOption`[] |
| `nextSceneId` | `string` |
| `prevSceneId` | `string` |

#### Returns

[`Menu`](Menu.md)

#### Overrides

[Scene](Scene.md).[constructor](Scene.md#constructor)

#### Defined in

[modules/menu.ts:30](https://github.com/philbgarner/retrolib/blob/61e1edc/src/modules/menu.ts#L30)

## Properties

### active

• **active**: `boolean`

#### Inherited from

[Scene](Scene.md).[active](Scene.md#active)

#### Defined in

[modules/scene.ts:13](https://github.com/philbgarner/retrolib/blob/61e1edc/src/modules/scene.ts#L13)

___

### animationFrame

• **animationFrame**: `AnimationFrameFunction`

#### Inherited from

[Scene](Scene.md).[animationFrame](Scene.md#animationframe)

#### Defined in

[modules/scene.ts:12](https://github.com/philbgarner/retrolib/blob/61e1edc/src/modules/scene.ts#L12)

___

### color

• **color**: [`ColorRGBA`](../modules/font.md#colorrgba)

#### Defined in

[modules/menu.ts:23](https://github.com/philbgarner/retrolib/blob/61e1edc/src/modules/menu.ts#L23)

___

### ctx

• **ctx**: `CanvasRenderingContext2D`

#### Defined in

[modules/menu.ts:22](https://github.com/philbgarner/retrolib/blob/61e1edc/src/modules/menu.ts#L22)

___

### decrementSelectionInput

• **decrementSelectionInput**: `string`

#### Defined in

[modules/menu.ts:28](https://github.com/philbgarner/retrolib/blob/61e1edc/src/modules/menu.ts#L28)

___

### elapsed

• **elapsed**: `number`

#### Inherited from

[Scene](Scene.md).[elapsed](Scene.md#elapsed)

#### Defined in

[modules/scene.ts:17](https://github.com/philbgarner/retrolib/blob/61e1edc/src/modules/scene.ts#L17)

___

### handleInput

• **handleInput**: `InputHandlerFunction`

#### Inherited from

[Scene](Scene.md).[handleInput](Scene.md#handleinput)

#### Defined in

[modules/scene.ts:16](https://github.com/philbgarner/retrolib/blob/61e1edc/src/modules/scene.ts#L16)

___

### id

• **id**: `string`

#### Inherited from

[Scene](Scene.md).[id](Scene.md#id)

#### Defined in

[modules/scene.ts:11](https://github.com/philbgarner/retrolib/blob/61e1edc/src/modules/scene.ts#L11)

___

### incrementSelectionInput

• **incrementSelectionInput**: `string`

#### Defined in

[modules/menu.ts:27](https://github.com/philbgarner/retrolib/blob/61e1edc/src/modules/menu.ts#L27)

___

### offsetX

• **offsetX**: `number`

#### Defined in

[modules/menu.ts:18](https://github.com/philbgarner/retrolib/blob/61e1edc/src/modules/menu.ts#L18)

___

### offsetY

• **offsetY**: `number`

#### Defined in

[modules/menu.ts:19](https://github.com/philbgarner/retrolib/blob/61e1edc/src/modules/menu.ts#L19)

___

### onActivate

• **onActivate**: `OnActivateFunction`

#### Inherited from

[Scene](Scene.md).[onActivate](Scene.md#onactivate)

#### Defined in

[modules/scene.ts:14](https://github.com/philbgarner/retrolib/blob/61e1edc/src/modules/scene.ts#L14)

___

### onDeactivate

• **onDeactivate**: `OnDeactivateFunction`

#### Inherited from

[Scene](Scene.md).[onDeactivate](Scene.md#ondeactivate)

#### Defined in

[modules/scene.ts:15](https://github.com/philbgarner/retrolib/blob/61e1edc/src/modules/scene.ts#L15)

___

### options

• **options**: `MenuOption`[]

#### Defined in

[modules/menu.ts:20](https://github.com/philbgarner/retrolib/blob/61e1edc/src/modules/menu.ts#L20)

___

### selectSpeed

• **selectSpeed**: `number`

#### Defined in

[modules/menu.ts:26](https://github.com/philbgarner/retrolib/blob/61e1edc/src/modules/menu.ts#L26)

___

### selectedColor

• **selectedColor**: [`ColorRGBA`](../modules/font.md#colorrgba)

#### Defined in

[modules/menu.ts:24](https://github.com/philbgarner/retrolib/blob/61e1edc/src/modules/menu.ts#L24)

___

### selectedOption

• **selectedOption**: `number`

#### Defined in

[modules/menu.ts:21](https://github.com/philbgarner/retrolib/blob/61e1edc/src/modules/menu.ts#L21)

## Methods

### Draw

▸ **Draw**(`delta`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `delta` | `number` |

#### Returns

`void`

#### Defined in

[modules/menu.ts:50](https://github.com/philbgarner/retrolib/blob/61e1edc/src/modules/menu.ts#L50)
