# Keywords

retro pixel-art low-res 8-bit library

# What is this?

Render low-res scenes to the canvas in a retro 8-bit era style.  Aseprite exported animation wrapper, scene management, sound and image management, particle support.

# Resource Management Modules

## Images Module

- Promise-based image resource loaders.
- 'Blit' style functions to draw image resources on the canvas.

### Animation Controller

- Animation controller class that uses the image module and imported Aseprite JSON to draw the correct frame on the canvas using the image module functions.

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

## Font Module

- Text 'blit' style function to draw a string on the canvas with a raster (bitmap) font

# Getting Started

Import the module and function you need to use in your script:

```
import { drawImage } from 'retrolib/images'

```

And then draw an image to the current canvas.

```
drawImage(x, y, imageId, { x: 0, y: 0, w: 8, h: 8 }, options)

```

## Sample Projects

There are some sample projects in the samples folder to demonstrate each module and how they're used.