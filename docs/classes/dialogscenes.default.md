[retrolib](../README.md) / [Exports](../modules.md) / [dialogscenes](../modules/dialogscenes.md) / default

# Class: default

[dialogscenes](../modules/dialogscenes.md).default

Scene fasses know how to draw themselves with animationFrame and a handleInput callback
for keyboard/gamepad controls.

## Hierarchy

- [`Scene`](Scene.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](dialogscenes.default.md#constructor)

### Properties

- [active](dialogscenes.default.md#active)
- [animationFrame](dialogscenes.default.md#animationframe)
- [characterNumber](dialogscenes.default.md#characternumber)
- [clearFrame](dialogscenes.default.md#clearframe)
- [color](dialogscenes.default.md#color)
- [ctx](dialogscenes.default.md#ctx)
- [dialogNumber](dialogscenes.default.md#dialognumber)
- [dialogPauseTime](dialogscenes.default.md#dialogpausetime)
- [dialogs](dialogscenes.default.md#dialogs)
- [elapsed](dialogscenes.default.md#elapsed)
- [handleInput](dialogscenes.default.md#handleinput)
- [id](dialogscenes.default.md#id)
- [lastLetterTimestamp](dialogscenes.default.md#lastlettertimestamp)
- [lastSpaceNumber](dialogscenes.default.md#lastspacenumber)
- [letterSpeed](dialogscenes.default.md#letterspeed)
- [lineNumber](dialogscenes.default.md#linenumber)
- [linePauseTime](dialogscenes.default.md#linepausetime)
- [nextSceneId](dialogscenes.default.md#nextsceneid)
- [onActivate](dialogscenes.default.md#onactivate)
- [onDeactivate](dialogscenes.default.md#ondeactivate)
- [opacity](dialogscenes.default.md#opacity)
- [pauseInput](dialogscenes.default.md#pauseinput)
- [pauseLetterIncrement](dialogscenes.default.md#pauseletterincrement)

### Methods

- [TransitionTo](dialogscenes.default.md#transitionto)

## Constructors

### constructor

• **new default**(`id`, `active`, `nextSceneId`, `dialogs`): [`default`](dialogscenes.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `active` | `boolean` |
| `nextSceneId` | `string` |
| `dialogs` | [`DialogSceneLines`](../modules/dialogscenes.md#dialogscenelines)[] |

#### Returns

[`default`](dialogscenes.default.md)

#### Overrides

[Scene](Scene.md).[constructor](Scene.md#constructor)

#### Defined in

[modules/dialogscene.ts:39](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/dialogscene.ts#L39)

## Properties

### active

• **active**: `boolean`

#### Inherited from

[Scene](Scene.md).[active](Scene.md#active)

#### Defined in

[modules/scene.ts:13](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/scene.ts#L13)

___

### animationFrame

• **animationFrame**: [`AnimationFrameFunction`](../interfaces/scenes.AnimationFrameFunction.md)

#### Inherited from

[Scene](Scene.md).[animationFrame](Scene.md#animationframe)

#### Defined in

[modules/scene.ts:12](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/scene.ts#L12)

___

### characterNumber

• **characterNumber**: `number` = `0`

#### Defined in

[modules/dialogscene.ts:29](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/dialogscene.ts#L29)

___

### clearFrame

• **clearFrame**: `boolean` = `true`

#### Inherited from

[Scene](Scene.md).[clearFrame](Scene.md#clearframe)

#### Defined in

[modules/scene.ts:23](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/scene.ts#L23)

___

### color

• **color**: [`ColorRGBA`](../modules/font.md#colorrgba)

#### Defined in

[modules/dialogscene.ts:32](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/dialogscene.ts#L32)

___

### ctx

• **ctx**: `CanvasRenderingContext2D`

#### Inherited from

[Scene](Scene.md).[ctx](Scene.md#ctx)

#### Defined in

[modules/scene.ts:11](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/scene.ts#L11)

___

### dialogNumber

• **dialogNumber**: `number` = `0`

#### Defined in

[modules/dialogscene.ts:27](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/dialogscene.ts#L27)

___

### dialogPauseTime

• **dialogPauseTime**: `number` = `3000`

#### Defined in

[modules/dialogscene.ts:37](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/dialogscene.ts#L37)

___

### dialogs

• **dialogs**: [`DialogSceneLines`](../modules/dialogscenes.md#dialogscenelines)[]

#### Defined in

[modules/dialogscene.ts:26](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/dialogscene.ts#L26)

___

### elapsed

• **elapsed**: `number`

#### Inherited from

[Scene](Scene.md).[elapsed](Scene.md#elapsed)

#### Defined in

[modules/scene.ts:21](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/scene.ts#L21)

___

### handleInput

• **handleInput**: [`InputHandlerFunction`](../interfaces/scenes.InputHandlerFunction.md)

Callback function for input directed at the scene.

#### Inherited from

[Scene](Scene.md).[handleInput](Scene.md#handleinput)

#### Defined in

[modules/scene.ts:20](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/scene.ts#L20)

___

### id

• **id**: `string`

#### Inherited from

[Scene](Scene.md).[id](Scene.md#id)

#### Defined in

[modules/scene.ts:10](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/scene.ts#L10)

___

### lastLetterTimestamp

• **lastLetterTimestamp**: `number` = `0`

#### Defined in

[modules/dialogscene.ts:34](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/dialogscene.ts#L34)

___

### lastSpaceNumber

• **lastSpaceNumber**: `number` = `0`

#### Defined in

[modules/dialogscene.ts:30](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/dialogscene.ts#L30)

___

### letterSpeed

• **letterSpeed**: `number` = `60`

#### Defined in

[modules/dialogscene.ts:33](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/dialogscene.ts#L33)

___

### lineNumber

• **lineNumber**: `number` = `0`

#### Defined in

[modules/dialogscene.ts:28](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/dialogscene.ts#L28)

___

### linePauseTime

• **linePauseTime**: `number` = `1500`

#### Defined in

[modules/dialogscene.ts:36](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/dialogscene.ts#L36)

___

### nextSceneId

• **nextSceneId**: `string`

#### Defined in

[modules/dialogscene.ts:31](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/dialogscene.ts#L31)

___

### onActivate

• **onActivate**: [`OnActivateFunction`](../interfaces/scenes.OnActivateFunction.md)

#### Inherited from

[Scene](Scene.md).[onActivate](Scene.md#onactivate)

#### Defined in

[modules/scene.ts:15](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/scene.ts#L15)

___

### onDeactivate

• **onDeactivate**: [`OnDeactivateFunction`](../interfaces/scenes.OnDeactivateFunction.md)

#### Inherited from

[Scene](Scene.md).[onDeactivate](Scene.md#ondeactivate)

#### Defined in

[modules/scene.ts:16](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/scene.ts#L16)

___

### opacity

• **opacity**: `number`

#### Inherited from

[Scene](Scene.md).[opacity](Scene.md#opacity)

#### Defined in

[modules/scene.ts:22](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/scene.ts#L22)

___

### pauseInput

• **pauseInput**: `boolean`

#### Inherited from

[Scene](Scene.md).[pauseInput](Scene.md#pauseinput)

#### Defined in

[modules/scene.ts:14](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/scene.ts#L14)

___

### pauseLetterIncrement

• **pauseLetterIncrement**: `boolean` = `false`

#### Defined in

[modules/dialogscene.ts:35](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/dialogscene.ts#L35)

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

[modules/scene.ts:53](https://github.com/philbgarner/retrolib/blob/cd6f581/src/modules/scene.ts#L53)
