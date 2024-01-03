[retrolib](../README.md) / [Exports](../modules.md) / Scene

# Class: Scene

Scene fasses know how to draw themselves with animationFrame and a handleInput callback
for keyboard/gamepad controls.

## Hierarchy

- **`Scene`**

  ↳ [`default`](menu.default.md)

## Table of contents

### Constructors

- [constructor](Scene.md#constructor)

### Properties

- [active](Scene.md#active)
- [animationFrame](Scene.md#animationframe)
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
| `animationFrame` | [`AnimationFrameFunction`](../interfaces/AnimationFrameFunction.md) | Scene's render/update callback. |
| `active` | `boolean` | Whether or not the scene is initialized active. |
| `onActivate` | [`OnActivateFunction`](../interfaces/OnActivateFunction.md) | Call this function when the scene activates. |
| `onDeactivate` | [`OnDeactivateFunction`](../interfaces/OnDeactivateFunction.md) | Call this function when the scene deactivates. |
| `handleInput` | [`InputHandlerFunction`](../interfaces/InputHandlerFunction.md) | This function gets called when the scene receives input. |

#### Returns

[`Scene`](Scene.md)

#### Defined in

[modules/scene.ts:54](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/scene.ts#L54)

## Properties

### active

• **active**: `boolean`

#### Defined in

[modules/scene.ts:34](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/scene.ts#L34)

___

### animationFrame

• **animationFrame**: [`AnimationFrameFunction`](../interfaces/AnimationFrameFunction.md)

#### Defined in

[modules/scene.ts:33](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/scene.ts#L33)

___

### ctx

• **ctx**: `CanvasRenderingContext2D`

#### Defined in

[modules/scene.ts:32](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/scene.ts#L32)

___

### elapsed

• **elapsed**: `number`

#### Defined in

[modules/scene.ts:42](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/scene.ts#L42)

___

### handleInput

• **handleInput**: [`InputHandlerFunction`](../interfaces/InputHandlerFunction.md)

Callback function for input directed at the scene.

#### Defined in

[modules/scene.ts:41](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/scene.ts#L41)

___

### id

• **id**: `string`

#### Defined in

[modules/scene.ts:31](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/scene.ts#L31)

___

### onActivate

• **onActivate**: [`OnActivateFunction`](../interfaces/OnActivateFunction.md)

#### Defined in

[modules/scene.ts:36](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/scene.ts#L36)

___

### onDeactivate

• **onDeactivate**: [`OnDeactivateFunction`](../interfaces/OnDeactivateFunction.md)

#### Defined in

[modules/scene.ts:37](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/scene.ts#L37)

___

### opacity

• **opacity**: `number`

#### Defined in

[modules/scene.ts:43](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/scene.ts#L43)

___

### pauseInput

• **pauseInput**: `boolean`

#### Defined in

[modules/scene.ts:35](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/scene.ts#L35)

## Methods

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

#### Defined in

[modules/scene.ts:73](https://github.com/philbgarner/retrolib/blob/5caf158/src/modules/scene.ts#L73)
