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

Import the library into your script:

```
import retrolib from './src/retrolib'
```

Or you can import the web bundle in your HTML file:
```
<script src="./dist/retrolib.js"></script>
```

And then draw text using the default font on the current canvas.

```
retrolib.font.drawText(ctx, 0, 0, 'Text', '#f1f1f1ff')
```

## Initialization

Retrolib will create the canvas, set its CSS style for pixel art and resize it to fit the window
if you call the initialize function in your HTML file like this:
```
retrolib.initialize('gamecanvas', 320, 200, true, true) // Creates a <Canvas/> element with pixel resolution 320x200 and resize to fill the window.
```

## Sample Projects

A hello world example exists for drawing using the font on the canvas both with and without the scene management module.