[retrolib](../README.md) / [Exports](../modules.md) / [menu](../modules/menu.md) / default

# Class: default

[menu](../modules/menu.md).default

Menu Flavour of Scenes.

## Hierarchy

- [`Scene`](Scene.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](menu.default.md#constructor)

### Properties

- [actionInput](menu.default.md#actioninput)
- [active](menu.default.md#active)
- [animationFrame](menu.default.md#animationframe)
- [cancelInput](menu.default.md#cancelinput)
- [clearFrame](menu.default.md#clearframe)
- [color](menu.default.md#color)
- [ctx](menu.default.md#ctx)
- [decrementSecondaryInput](menu.default.md#decrementsecondaryinput)
- [decrementSelectionInput](menu.default.md#decrementselectioninput)
- [elapsed](menu.default.md#elapsed)
- [handleInput](menu.default.md#handleinput)
- [id](menu.default.md#id)
- [incrementSecondaryInput](menu.default.md#incrementsecondaryinput)
- [incrementSelectionInput](menu.default.md#incrementselectioninput)
- [itemInputHandler](menu.default.md#iteminputhandler)
- [offsetX](menu.default.md#offsetx)
- [offsetY](menu.default.md#offsety)
- [onActivate](menu.default.md#onactivate)
- [onDeactivate](menu.default.md#ondeactivate)
- [opacity](menu.default.md#opacity)
- [options](menu.default.md#options)
- [pauseInput](menu.default.md#pauseinput)
- [selectSpeed](menu.default.md#selectspeed)
- [selectedColor](menu.default.md#selectedcolor)
- [selectedOption](menu.default.md#selectedoption)

### Methods

- [DecrementSelection](menu.default.md#decrementselection)
- [Draw](menu.default.md#draw)
- [IncrementSelection](menu.default.md#incrementselection)
- [Selected](menu.default.md#selected)
- [TransitionTo](menu.default.md#transitionto)

## Constructors

### constructor

• **new default**(`id`, `active`, `direction`, `options`, `handleItemInput?`): [`default`](menu.default.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Scene id. |
| `active` | `boolean` | Whether or not the scene starts activated. |
| `direction` | [`LayoutDirection`](../enums/menus.LayoutDirection.md) | Layout direction. |
| `options` | [`MenuOption`](../modules/menu.md#menuoption)[] | Menu options (items). |
| `handleItemInput?` | [`OnInputFunction`](../interfaces/menu.OnInputFunction.md) | (Optional) Callback that executes when an input event occurs. |

#### Returns

[`default`](menu.default.md)

#### Overrides

[Scene](Scene.md).[constructor](Scene.md#constructor)

#### Defined in

[modules/menu.ts:75](https://github.com/philbgarner/retrolib/blob/ffca896/src/modules/menu.ts#L75)

## Properties

### actionInput

• **actionInput**: `string`

#### Defined in

[modules/menu.ts:59](https://github.com/philbgarner/retrolib/blob/ffca896/src/modules/menu.ts#L59)

___

### active

• **active**: `boolean`

#### Inherited from

[Scene](Scene.md).[active](Scene.md#active)

#### Defined in

[modules/scene.ts:34](https://github.com/philbgarner/retrolib/blob/ffca896/src/modules/scene.ts#L34)

___

### animationFrame

• **animationFrame**: [`AnimationFrameFunction`](../interfaces/AnimationFrameFunction.md)

#### Inherited from

[Scene](Scene.md).[animationFrame](Scene.md#animationframe)

#### Defined in

[modules/scene.ts:33](https://github.com/philbgarner/retrolib/blob/ffca896/src/modules/scene.ts#L33)

___

### cancelInput

• **cancelInput**: `string`

#### Defined in

[modules/menu.ts:60](https://github.com/philbgarner/retrolib/blob/ffca896/src/modules/menu.ts#L60)

___

### clearFrame

• **clearFrame**: `boolean`

#### Defined in

[modules/menu.ts:53](https://github.com/philbgarner/retrolib/blob/ffca896/src/modules/menu.ts#L53)

___

### color

• **color**: [`ColorRGBA`](../modules/font.md#colorrgba)

#### Defined in

[modules/menu.ts:51](https://github.com/philbgarner/retrolib/blob/ffca896/src/modules/menu.ts#L51)

___

### ctx

• **ctx**: `CanvasRenderingContext2D`

#### Inherited from

[Scene](Scene.md).[ctx](Scene.md#ctx)

#### Defined in

[modules/scene.ts:32](https://github.com/philbgarner/retrolib/blob/ffca896/src/modules/scene.ts#L32)

___

### decrementSecondaryInput

• **decrementSecondaryInput**: `string`

#### Defined in

[modules/menu.ts:63](https://github.com/philbgarner/retrolib/blob/ffca896/src/modules/menu.ts#L63)

___

### decrementSelectionInput

• **decrementSelectionInput**: `string`

#### Defined in

[modules/menu.ts:57](https://github.com/philbgarner/retrolib/blob/ffca896/src/modules/menu.ts#L57)

___

### elapsed

• **elapsed**: `number`

#### Inherited from

[Scene](Scene.md).[elapsed](Scene.md#elapsed)

#### Defined in

[modules/scene.ts:42](https://github.com/philbgarner/retrolib/blob/ffca896/src/modules/scene.ts#L42)

___

### handleInput

• **handleInput**: [`InputHandlerFunction`](../interfaces/InputHandlerFunction.md)

Callback function for input directed at the scene.

#### Inherited from

[Scene](Scene.md).[handleInput](Scene.md#handleinput)

#### Defined in

[modules/scene.ts:41](https://github.com/philbgarner/retrolib/blob/ffca896/src/modules/scene.ts#L41)

___

### id

• **id**: `string`

#### Inherited from

[Scene](Scene.md).[id](Scene.md#id)

#### Defined in

[modules/scene.ts:31](https://github.com/philbgarner/retrolib/blob/ffca896/src/modules/scene.ts#L31)

___

### incrementSecondaryInput

• **incrementSecondaryInput**: `string`

#### Defined in

[modules/menu.ts:62](https://github.com/philbgarner/retrolib/blob/ffca896/src/modules/menu.ts#L62)

___

### incrementSelectionInput

• **incrementSelectionInput**: `string`

#### Defined in

[modules/menu.ts:56](https://github.com/philbgarner/retrolib/blob/ffca896/src/modules/menu.ts#L56)

___

### itemInputHandler

• **itemInputHandler**: [`OnInputFunction`](../interfaces/menu.OnInputFunction.md)

#### Defined in

[modules/menu.ts:65](https://github.com/philbgarner/retrolib/blob/ffca896/src/modules/menu.ts#L65)

___

### offsetX

• **offsetX**: `number`

#### Defined in

[modules/menu.ts:47](https://github.com/philbgarner/retrolib/blob/ffca896/src/modules/menu.ts#L47)

___

### offsetY

• **offsetY**: `number`

#### Defined in

[modules/menu.ts:48](https://github.com/philbgarner/retrolib/blob/ffca896/src/modules/menu.ts#L48)

___

### onActivate

• **onActivate**: [`OnActivateFunction`](../interfaces/OnActivateFunction.md)

#### Inherited from

[Scene](Scene.md).[onActivate](Scene.md#onactivate)

#### Defined in

[modules/scene.ts:36](https://github.com/philbgarner/retrolib/blob/ffca896/src/modules/scene.ts#L36)

___

### onDeactivate

• **onDeactivate**: [`OnDeactivateFunction`](../interfaces/OnDeactivateFunction.md)

#### Inherited from

[Scene](Scene.md).[onDeactivate](Scene.md#ondeactivate)

#### Defined in

[modules/scene.ts:37](https://github.com/philbgarner/retrolib/blob/ffca896/src/modules/scene.ts#L37)

___

### opacity

• **opacity**: `number`

#### Inherited from

[Scene](Scene.md).[opacity](Scene.md#opacity)

#### Defined in

[modules/scene.ts:43](https://github.com/philbgarner/retrolib/blob/ffca896/src/modules/scene.ts#L43)

___

### options

• **options**: [`MenuOption`](../modules/menu.md#menuoption)[]

#### Defined in

[modules/menu.ts:49](https://github.com/philbgarner/retrolib/blob/ffca896/src/modules/menu.ts#L49)

___

### pauseInput

• **pauseInput**: `boolean`

#### Inherited from

[Scene](Scene.md).[pauseInput](Scene.md#pauseinput)

#### Defined in

[modules/scene.ts:35](https://github.com/philbgarner/retrolib/blob/ffca896/src/modules/scene.ts#L35)

___

### selectSpeed

• **selectSpeed**: `number`

#### Defined in

[modules/menu.ts:55](https://github.com/philbgarner/retrolib/blob/ffca896/src/modules/menu.ts#L55)

___

### selectedColor

• **selectedColor**: [`ColorRGBA`](../modules/font.md#colorrgba)

#### Defined in

[modules/menu.ts:52](https://github.com/philbgarner/retrolib/blob/ffca896/src/modules/menu.ts#L52)

___

### selectedOption

• **selectedOption**: `number`

#### Defined in

[modules/menu.ts:50](https://github.com/philbgarner/retrolib/blob/ffca896/src/modules/menu.ts#L50)

## Methods

### DecrementSelection

▸ **DecrementSelection**(`speed?`): `void`

Decrement the selection (move up or left depending on orientation).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `speed?` | `number` | Adjust the selectSpeed specified on the menu by this factor. |

#### Returns

`void`

#### Defined in

[modules/menu.ts:136](https://github.com/philbgarner/retrolib/blob/ffca896/src/modules/menu.ts#L136)

___

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

[modules/menu.ts:161](https://github.com/philbgarner/retrolib/blob/ffca896/src/modules/menu.ts#L161)

___

### IncrementSelection

▸ **IncrementSelection**(`speed?`): `void`

Increment the selection (move down or right depending on orientation).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `speed?` | `number` | Adjust the selectSpeed specified on the menu by this factor. |

#### Returns

`void`

#### Defined in

[modules/menu.ts:148](https://github.com/philbgarner/retrolib/blob/ffca896/src/modules/menu.ts#L148)

___

### Selected

▸ **Selected**(): [`MenuOption`](../modules/menu.md#menuoption)

Returns the currently selected menu option.

#### Returns

[`MenuOption`](../modules/menu.md#menuoption)

#### Defined in

[modules/menu.ts:128](https://github.com/philbgarner/retrolib/blob/ffca896/src/modules/menu.ts#L128)

___

### TransitionTo

▸ **TransitionTo**(`sceneId`, `effect`, `duration`, `steps`): `Promise`\<`void`\>

Transition from one scene to another using a predefined effect.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sceneId` | `string` | Menu or Scene Id to transition to. |
| `effect` | `TransitionEffect` | Which transition effect to take. |
| `duration` | `number` | Time to take applying the effect while deactivating and activating scenes. |
| `steps` | `number` | Amount of steps to divide the duration by and update the effect amount. |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[Scene](Scene.md).[TransitionTo](Scene.md#transitionto)

#### Defined in

[modules/scene.ts:73](https://github.com/philbgarner/retrolib/blob/ffca896/src/modules/scene.ts#L73)
