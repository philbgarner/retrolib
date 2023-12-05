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
| `animationFrame` | `AnimationFrameFunction` | Scene's render/update callback. |
| `active` | `boolean` | Whether or not the scene is initialized active. |
| `onActivate` | `OnActivateFunction` | Call this function when the scene activates. |
| `onDeactivate` | `OnDeactivateFunction` | Call this function when the scene deactivates. |
| `handleInput` | `InputHandlerFunction` | This function gets called when the scene receives input. |

#### Returns

[`Scene`](Scene.md)

#### Defined in

[modules/scene.ts:28](https://github.com/philbgarner/retrolib/blob/61e1edc/src/modules/scene.ts#L28)

## Properties

### active

• **active**: `boolean`

#### Defined in

[modules/scene.ts:13](https://github.com/philbgarner/retrolib/blob/61e1edc/src/modules/scene.ts#L13)

___

### animationFrame

• **animationFrame**: `AnimationFrameFunction`

#### Defined in

[modules/scene.ts:12](https://github.com/philbgarner/retrolib/blob/61e1edc/src/modules/scene.ts#L12)

___

### elapsed

• **elapsed**: `number`

#### Defined in

[modules/scene.ts:17](https://github.com/philbgarner/retrolib/blob/61e1edc/src/modules/scene.ts#L17)

___

### handleInput

• **handleInput**: `InputHandlerFunction`

#### Defined in

[modules/scene.ts:16](https://github.com/philbgarner/retrolib/blob/61e1edc/src/modules/scene.ts#L16)

___

### id

• **id**: `string`

#### Defined in

[modules/scene.ts:11](https://github.com/philbgarner/retrolib/blob/61e1edc/src/modules/scene.ts#L11)

___

### onActivate

• **onActivate**: `OnActivateFunction`

#### Defined in

[modules/scene.ts:14](https://github.com/philbgarner/retrolib/blob/61e1edc/src/modules/scene.ts#L14)

___

### onDeactivate

• **onDeactivate**: `OnDeactivateFunction`

#### Defined in

[modules/scene.ts:15](https://github.com/philbgarner/retrolib/blob/61e1edc/src/modules/scene.ts#L15)
