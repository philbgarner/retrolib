[retrolib](../README.md) / [Exports](../modules.md) / [cutscenes](../modules/cutscenes.md) / default

# Class: default

[cutscenes](../modules/cutscenes.md).default

Scene fasses know how to draw themselves with animationFrame and a handleInput callback
for keyboard/gamepad controls.

## Hierarchy

- [`Scene`](Scene.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](cutscenes.default.md#constructor)

### Properties

- [active](cutscenes.default.md#active)
- [animationFrame](cutscenes.default.md#animationframe)
- [characterNumber](cutscenes.default.md#characternumber)
- [clearFrame](cutscenes.default.md#clearframe)
- [color](cutscenes.default.md#color)
- [ctx](cutscenes.default.md#ctx)
- [dialogNumber](cutscenes.default.md#dialognumber)
- [dialogPauseTime](cutscenes.default.md#dialogpausetime)
- [dialogs](cutscenes.default.md#dialogs)
- [elapsed](cutscenes.default.md#elapsed)
- [handleInput](cutscenes.default.md#handleinput)
- [id](cutscenes.default.md#id)
- [lastLetterTimestamp](cutscenes.default.md#lastlettertimestamp)
- [lastSpaceNumber](cutscenes.default.md#lastspacenumber)
- [letterSpeed](cutscenes.default.md#letterspeed)
- [lineNumber](cutscenes.default.md#linenumber)
- [linePauseTime](cutscenes.default.md#linepausetime)
- [nextSceneId](cutscenes.default.md#nextsceneid)
- [onActivate](cutscenes.default.md#onactivate)
- [onDeactivate](cutscenes.default.md#ondeactivate)
- [opacity](cutscenes.default.md#opacity)
- [pauseInput](cutscenes.default.md#pauseinput)
- [pauseLetterIncrement](cutscenes.default.md#pauseletterincrement)

### Methods

- [TransitionTo](cutscenes.default.md#transitionto)

## Constructors

### constructor

• **new default**(`id`, `active`, `nextSceneId`, `dialogs`): [`default`](cutscenes.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `active` | `boolean` |
| `nextSceneId` | `string` |
| `dialogs` | [`DialogSceneLines`](../modules/cutscenes.md#cutscenedialog)[] |

#### Returns

[`default`](cutscenes.default.md)

#### Overrides

[Scene](Scene.md).[constructor](Scene.md#constructor)

#### Defined in

[modules/cutscene.ts:38](https://github.com/philbgarner/retrolib/blob/d6d017d/src/modules/cutscene.ts#L38)

## Properties

### active

• **active**: `boolean`

#### Inherited from

[Scene](Scene.md).[active](Scene.md#active)

#### Defined in

[modules/scene.ts:13](https://github.com/philbgarner/retrolib/blob/d6d017d/src/modules/scene.ts#L13)

___

### animationFrame

• **animationFrame**: [`AnimationFrameFunction`](../interfaces/scenes.AnimationFrameFunction.md)

#### Inherited from

[Scene](Scene.md).[animationFrame](Scene.md#animationframe)

#### Defined in

[modules/scene.ts:12](https://github.com/philbgarner/retrolib/blob/d6d017d/src/modules/scene.ts#L12)

___

### characterNumber

• **characterNumber**: `number` = `0`

#### Defined in

[modules/cutscene.ts:28](https://github.com/philbgarner/retrolib/blob/d6d017d/src/modules/cutscene.ts#L28)

___

### clearFrame

• **clearFrame**: `boolean` = `true`

#### Inherited from

[Scene](Scene.md).[clearFrame](Scene.md#clearframe)

#### Defined in

[modules/scene.ts:23](https://github.com/philbgarner/retrolib/blob/d6d017d/src/modules/scene.ts#L23)

___

### color

• **color**: [`ColorRGBA`](../modules/font.md#colorrgba)

#### Defined in

[modules/cutscene.ts:31](https://github.com/philbgarner/retrolib/blob/d6d017d/src/modules/cutscene.ts#L31)

___

### ctx

• **ctx**: `CanvasRenderingContext2D`

#### Inherited from

[Scene](Scene.md).[ctx](Scene.md#ctx)

#### Defined in

[modules/scene.ts:11](https://github.com/philbgarner/retrolib/blob/d6d017d/src/modules/scene.ts#L11)

___

### dialogNumber

• **dialogNumber**: `number` = `0`

#### Defined in

[modules/cutscene.ts:26](https://github.com/philbgarner/retrolib/blob/d6d017d/src/modules/cutscene.ts#L26)

___

### dialogPauseTime

• **dialogPauseTime**: `number` = `3000`

#### Defined in

[modules/cutscene.ts:36](https://github.com/philbgarner/retrolib/blob/d6d017d/src/modules/cutscene.ts#L36)

___

### dialogs

• **dialogs**: [`DialogSceneLines`](../modules/cutscenes.md#cutscenedialog)[]

#### Defined in

[modules/cutscene.ts:25](https://github.com/philbgarner/retrolib/blob/d6d017d/src/modules/cutscene.ts#L25)

___

### elapsed

• **elapsed**: `number`

#### Inherited from

[Scene](Scene.md).[elapsed](Scene.md#elapsed)

#### Defined in

[modules/scene.ts:21](https://github.com/philbgarner/retrolib/blob/d6d017d/src/modules/scene.ts#L21)

___

### handleInput

• **handleInput**: [`InputHandlerFunction`](../interfaces/scenes.InputHandlerFunction.md)

Callback function for input directed at the scene.

#### Inherited from

[Scene](Scene.md).[handleInput](Scene.md#handleinput)

#### Defined in

[modules/scene.ts:20](https://github.com/philbgarner/retrolib/blob/d6d017d/src/modules/scene.ts#L20)

___

### id

• **id**: `string`

#### Inherited from

[Scene](Scene.md).[id](Scene.md#id)

#### Defined in

[modules/scene.ts:10](https://github.com/philbgarner/retrolib/blob/d6d017d/src/modules/scene.ts#L10)

___

### lastLetterTimestamp

• **lastLetterTimestamp**: `number` = `0`

#### Defined in

[modules/cutscene.ts:33](https://github.com/philbgarner/retrolib/blob/d6d017d/src/modules/cutscene.ts#L33)

___

### lastSpaceNumber

• **lastSpaceNumber**: `number` = `0`

#### Defined in

[modules/cutscene.ts:29](https://github.com/philbgarner/retrolib/blob/d6d017d/src/modules/cutscene.ts#L29)

___

### letterSpeed

• **letterSpeed**: `number` = `60`

#### Defined in

[modules/cutscene.ts:32](https://github.com/philbgarner/retrolib/blob/d6d017d/src/modules/cutscene.ts#L32)

___

### lineNumber

• **lineNumber**: `number` = `0`

#### Defined in

[modules/cutscene.ts:27](https://github.com/philbgarner/retrolib/blob/d6d017d/src/modules/cutscene.ts#L27)

___

### linePauseTime

• **linePauseTime**: `number` = `1500`

#### Defined in

[modules/cutscene.ts:35](https://github.com/philbgarner/retrolib/blob/d6d017d/src/modules/cutscene.ts#L35)

___

### nextSceneId

• **nextSceneId**: `string`

#### Defined in

[modules/cutscene.ts:30](https://github.com/philbgarner/retrolib/blob/d6d017d/src/modules/cutscene.ts#L30)

___

### onActivate

• **onActivate**: [`OnActivateFunction`](../interfaces/scenes.OnActivateFunction.md)

#### Inherited from

[Scene](Scene.md).[onActivate](Scene.md#onactivate)

#### Defined in

[modules/scene.ts:15](https://github.com/philbgarner/retrolib/blob/d6d017d/src/modules/scene.ts#L15)

___

### onDeactivate

• **onDeactivate**: [`OnDeactivateFunction`](../interfaces/scenes.OnDeactivateFunction.md)

#### Inherited from

[Scene](Scene.md).[onDeactivate](Scene.md#ondeactivate)

#### Defined in

[modules/scene.ts:16](https://github.com/philbgarner/retrolib/blob/d6d017d/src/modules/scene.ts#L16)

___

### opacity

• **opacity**: `number`

#### Inherited from

[Scene](Scene.md).[opacity](Scene.md#opacity)

#### Defined in

[modules/scene.ts:22](https://github.com/philbgarner/retrolib/blob/d6d017d/src/modules/scene.ts#L22)

___

### pauseInput

• **pauseInput**: `boolean`

#### Inherited from

[Scene](Scene.md).[pauseInput](Scene.md#pauseinput)

#### Defined in

[modules/scene.ts:14](https://github.com/philbgarner/retrolib/blob/d6d017d/src/modules/scene.ts#L14)

___

### pauseLetterIncrement

• **pauseLetterIncrement**: `boolean` = `false`

#### Defined in

[modules/cutscene.ts:34](https://github.com/philbgarner/retrolib/blob/d6d017d/src/modules/cutscene.ts#L34)

## Methods

### TransitionTo

▸ **TransitionTo**(`sceneId`, `effect`, `duration`, `steps`): `Promise`\<`void`\>

Transition from one scene to another using a predefined effect.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sceneId` | `string` | Menu or Scene Id to transition to. |
| `effect` | [`TransitionEffect`](../enums/scenes.TransitionEffect.md) | Which transition effect to take. |
| `duration` | `number` | Time to take applying the effect while deactivating and activating scenes. |
| `steps` | `number` | Amount of steps to divide the duration by and update the effect amount. |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[Scene](Scene.md).[TransitionTo](Scene.md#transitionto)

#### Defined in

[modules/scene.ts:53](https://github.com/philbgarner/retrolib/blob/d6d017d/src/modules/scene.ts#L53)
