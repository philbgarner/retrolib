[retrolib](../README.md) / [Exports](../modules.md) / Scene

# Class: Scene

Scene fasses know how to draw themselves with animationFrame and a handleInput callback
for keyboard/gamepad controls.

## Hierarchy

- **`Scene`**

  ↳ [`default`](dialogscenes.default.md)

  ↳ [`default`](menu.default.md)

## Table of contents

### Constructors

- [constructor](Scene.md#constructor)

### Properties

- [active](Scene.md#active)
- [animationFrame](Scene.md#animationframe)
- [clearFrame](Scene.md#clearframe)
- [ctx](Scene.md#ctx)
- [elapsed](Scene.md#elapsed)
- [handleInput](Scene.md#handleinput)
- [id](Scene.md#id)
- [onActivate](Scene.md#onactivate)
- [onDeactivate](Scene.md#ondeactivate)
- [opacity](Scene.md#opacity)
- [pauseInput](Scene.md#pauseinput)

### Methods

- [TransitionTo](Scene.md#transitionto)

## Constructors

### constructor

• **new Scene**(`id`, `animationFrame`, `active`, `onActivate`, `onDeactivate`, `handleInput`): [`Scene`](Scene.md)

Create a new scene object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Scene name, unique identifier to fetch with. |
| `animationFrame` | [`AnimationFrameFunction`](../interfaces/scenes.AnimationFrameFunction.md) | Scene's render/update callback. |
| `active` | `boolean` | Whether or not the scene is initialized active. |
| `onActivate` | [`OnActivateFunction`](../interfaces/scenes.OnActivateFunction.md) | Call this function when the scene activates. |
| `onDeactivate` | [`OnDeactivateFunction`](../interfaces/scenes.OnDeactivateFunction.md) | Call this function when the scene deactivates. |
| `handleInput` | [`InputHandlerFunction`](../interfaces/scenes.InputHandlerFunction.md) | This function gets called when the scene receives input. |

#### Returns

[`Scene`](Scene.md)

#### Defined in

[modules/scene.ts:34](https://github.com/philbgarner/retrolib/blob/97cd8c0/src/modules/scene.ts#L34)

## Properties

### active

• **active**: `boolean`

#### Defined in

[modules/scene.ts:13](https://github.com/philbgarner/retrolib/blob/97cd8c0/src/modules/scene.ts#L13)

___

### animationFrame

• **animationFrame**: [`AnimationFrameFunction`](../interfaces/scenes.AnimationFrameFunction.md)

#### Defined in

[modules/scene.ts:12](https://github.com/philbgarner/retrolib/blob/97cd8c0/src/modules/scene.ts#L12)

___

### clearFrame

• **clearFrame**: `boolean` = `true`

#### Defined in

[modules/scene.ts:23](https://github.com/philbgarner/retrolib/blob/97cd8c0/src/modules/scene.ts#L23)

___

### ctx

• **ctx**: `CanvasRenderingContext2D`

#### Defined in

[modules/scene.ts:11](https://github.com/philbgarner/retrolib/blob/97cd8c0/src/modules/scene.ts#L11)

___

### elapsed

• **elapsed**: `number`

#### Defined in

[modules/scene.ts:21](https://github.com/philbgarner/retrolib/blob/97cd8c0/src/modules/scene.ts#L21)

___

### handleInput

• **handleInput**: [`InputHandlerFunction`](../interfaces/scenes.InputHandlerFunction.md)

Callback function for input directed at the scene.

#### Defined in

[modules/scene.ts:20](https://github.com/philbgarner/retrolib/blob/97cd8c0/src/modules/scene.ts#L20)

___

### id

• **id**: `string`

#### Defined in

[modules/scene.ts:10](https://github.com/philbgarner/retrolib/blob/97cd8c0/src/modules/scene.ts#L10)

___

### onActivate

• **onActivate**: [`OnActivateFunction`](../interfaces/scenes.OnActivateFunction.md)

#### Defined in

[modules/scene.ts:15](https://github.com/philbgarner/retrolib/blob/97cd8c0/src/modules/scene.ts#L15)

___

### onDeactivate

• **onDeactivate**: [`OnDeactivateFunction`](../interfaces/scenes.OnDeactivateFunction.md)

#### Defined in

[modules/scene.ts:16](https://github.com/philbgarner/retrolib/blob/97cd8c0/src/modules/scene.ts#L16)

___

### opacity

• **opacity**: `number`

#### Defined in

[modules/scene.ts:22](https://github.com/philbgarner/retrolib/blob/97cd8c0/src/modules/scene.ts#L22)

___

### pauseInput

• **pauseInput**: `boolean`

#### Defined in

[modules/scene.ts:14](https://github.com/philbgarner/retrolib/blob/97cd8c0/src/modules/scene.ts#L14)

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

#### Defined in

[modules/scene.ts:53](https://github.com/philbgarner/retrolib/blob/97cd8c0/src/modules/scene.ts#L53)
