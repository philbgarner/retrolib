retrolib / [Exports](modules.md)

# What is this?

Render low-res scenes to the canvas in a retro 8-bit era style.  Aseprite exported animation wrapper, scene management, sound and image management, particle support.

![Terminal emulator, map generation framework and field of view (FOV) algorithm.](terminal-map-fov.png)
> Terminal emulator, map generation framework and field of view (FOV) algorithm.

![Terminal emulator box drawing. Supports single, double or empty borders.](terminal-boxes.png)
> Terminal emulator box drawing. Supports single, double or empty borders.

![Sprite controller with image management.  Aseprite JSON Export animation support.](aseprite-animation-image-management.png)
> Sprite controller with image management.  Aseprite JSON Export animation support.

# Resource Management Modules

## Images Module

- Promise-based image resource loaders.
- 'Blit' style functions to draw image resources on the canvas.

### Aseprite Export Animation Controller

- Animation controller class that uses the image module and imported Aseprite JSON to draw the correct frame on the canvas using the image module functions.

## Font Module

- Text 'blit' style function to draw a string on the canvas with a raster (bitmap) font.

## Input Module

- Supports keyboard and gamepad polling.
- Supports input mapping agnostically: 'left' will poll any input mapped to that name regardless of type (keyboard or gamepad).

## Sfx Module

- Promise-based audio resource loaders.  Uses a global audio element and loads files as tracks.
- Play/pause, onended/onplay events, etc.
- Volume control.

## Music Module

- Promise-based audio resource loaders.  Uses a global audio element and loads files as tracks.
- Play pause, onended/onplay events, playlists, etc.
- Volume control.

## Scene Module

- Update/Draw and activation/deactivation event methods given an id and transition logic.

## Menu Module

- Auto-layout options for text labels: single-rows, single-columns, rows-of-columns, multi-column.
- Manual rect layout option.
- Keyboard/gamepad/mouse event handlers with auto-navigation.
- Manually speicify navigation option.

# Getting Started

Import the library into your script:

```
import * as retrolib from './src/retrolib'
```

Or you can import the web bundle in your HTML file:
```
<script src="./dist/retrolib.js"></script>
```

And then draw text using the default font on the specified canvas 2d context.

```
retrolib.font.drawText(0, 0, 'Text', '#f1f1f1ff')
```

## Initialization

Retrolib will create the canvas, set its CSS style for pixel art and resize it to fit the window
if you call the initialize function in your HTML file like this:
```
retrolib.initialize('gamecanvas', 320, 200, true, true) // Creates a <Canvas/> element with pixel resolution 320x200 and resize to fill the window.
```

# Documentation

Generated markdown documentation available in the [docs folder](https://github.com/philbgarner/retrolib/blob/master/docs/modules.md).

## Sample Projects

Some features are demonstrated in the [samples folder](./src/samples/).

# Keywords

retro pixel-art low-res 8-bit library vga-nostalgia
