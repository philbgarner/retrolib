[retrolib](../README.md) / [Exports](../modules.md) / Scene

# Class: Scene

Scene classes know how to draw themselves with animationFrame and a handleInput callback
for keyboard/gamepad controls.

## Hierarchy

- **`Scene`**

  ↳ [`Menu`](Menu.md)

## Table of contents

### Constructors

- [constructor](Scene.md#constructor)

### Properties

- [active](Scene.md#active)
- [animationFrame](Scene.md#animationframe)
- [elapsed](Scene.md#elapsed)
- [handleInput](Scene.md#handleinput)
- [id](Scene.md#id)
- [onActivate](Scene.md#onactivate)
- [onDeactivate](Scene.md#ondeactivate)

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

[modules/scene.ts:43](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/scene.ts#L43)

## Properties

### active

• **active**: `boolean`

#### Defined in

[modules/scene.ts:25](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/scene.ts#L25)

___

### animationFrame

• **animationFrame**: [`AnimationFrameFunction`](../interfaces/AnimationFrameFunction.md)

#### Defined in

[modules/scene.ts:24](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/scene.ts#L24)

___

### elapsed

• **elapsed**: `number`

#### Defined in

[modules/scene.ts:32](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/scene.ts#L32)

___

### handleInput

• **handleInput**: [`InputHandlerFunction`](../interfaces/InputHandlerFunction.md)

Callback function for input directed at the scene.

#### Defined in

[modules/scene.ts:31](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/scene.ts#L31)

___

### id

• **id**: `string`

#### Defined in

[modules/scene.ts:23](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/scene.ts#L23)

___

### onActivate

• **onActivate**: [`OnActivateFunction`](../interfaces/OnActivateFunction.md)

#### Defined in

[modules/scene.ts:26](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/scene.ts#L26)

___

### onDeactivate

• **onDeactivate**: [`OnDeactivateFunction`](../interfaces/OnDeactivateFunction.md)

#### Defined in

[modules/scene.ts:27](https://github.com/philbgarner/retrolib/blob/567c4cd/src/modules/scene.ts#L27)
