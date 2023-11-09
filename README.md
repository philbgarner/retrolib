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

## HTML Boilerplate

After your project has been built, you need to load the script in your game's HTML file.

Here's some sample boilerplate that will create a canvas and load your media and then waiting for user input before proceeding with starting the game library.

```
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Knight's Peril</title>
		<style>
			body { margin: 0; }

			canvas {
				height: 100%;
				image-rendering: pixelated;
				background-color: black;
			}

			body {
				overflow: hidden;
				margin: 0;
				padding: 0;
				background-color: black;
				text-align: center;
			}
		</style>
		<script src="./game.js"></script>
        <script>
            function start() {
				var gamecanvas = document.createElement('canvas')
				gamecanvas.id = 'gamecanvas'
				document.body.prepend(gamecanvas)
				ctx = gamecanvas.getContext('2d')
				gamecanvas.width = 200 // Set your pixel-art resolution.
				gamecanvas.height = 187

				addEventListener('resize', () => resize())
				resize()

				game.LoadMedia(gamecanvas)
						.catch((err) => {
							console.log('load media failed', err)
						})
						.then(() => {
							game.PrepareLevel('level1')
							isLoading = false
						})

				function onGameActivate(e) {
					if (!isLoading) {
						gameActivated = true
						game.Start()
					}

					gamecanvas.removeEventListener('click', onGameActivate)
				}
				gamecanvas.addEventListener('click', onGameActivate)

				function animationFrame() {
					ctx.clearRect(0, 0, gamecanvas.width, gamecanvas.height)
					window.requestAnimationFrame(animationFrame)
					if (!loadError) {
						let message = isLoading ? 'Loading...' : 'Click to Begin'
						let width = bfontjs.CalculateTextWidth(message, eighties)
						let height = bfontjs.CalculateTextHeight(message, eighties)
						bfontjs.DrawText(ctx, parseInt(gamecanvas.width / 2 - width / 2), parseInt(gamecanvas.height / 2 - height / 2), message, '#f1f10aff', eighties, { gradient: { colour: '#090909ff' } })
					} else {
						
						console.log('loadError', loadError, loadErrorMessage)
						bfontjs.DrawText(ctx, 0, 0, 'Load Error:\n' + loadErrorMessage, '#f10a0aff', eighties)
					}
				}
				window.requestAnimationFrame(animationFrame)
			}
        </script>
    </head>
	<body onload="start()">
		<script src="./bfontjs.js"></script>
		<script src="./bfont-imui.js"></script>
		<script src="./fonts/tinyfont.js"></script>
		<script src="./fonts/eighties.js"></script>
	</body>
</html>    
```

