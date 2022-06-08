<script lang="ts">
	import {
		GUI_HISTORY,
		GUI_LOAD,
		GUI_SAVE,
		GUI_SETTINGS,
		lovebars,
		LOVE_BAR_BG,
		LOVE_BAR_BROKEN_HEART,
		LOVE_BAR_EMPTY,
		nameboxes
	} from '$lib/assets';
	import { hslToRgb, rgbToHsl } from '$lib/color-utils';

	import { loadImage } from '$lib/image-loader';

	import type { Scene } from '$lib/scene-type';

	export let scene: Scene;

	let canvas: HTMLCanvasElement;

	// funny system
	let next_render_id = 0;
	let render_id = -1;

	async function render() {
		let ctx = canvas.getContext('2d');
		if (!ctx) return;

		let my_id = next_render_id++;
		render_id = my_id;

		const [
			bg,
			textbox,
			namebox,
			aya,
			guiSettings,
			guiSave,
			guiLoad,
			guiHistory,
			loveBarBg,
			loveBarBrokenHeart,
			loveBarEmpty,
			loveBarFull,
			loveBarHeart
		] = await Promise.all([
			loadImage(scene.background),
			loadImage(scene.textbox_image),
			scene.namebox_color !== 'Narration' &&
				// load akane's namebox if custom color.
				loadImage(scene.namebox_custom_color ? nameboxes.red : nameboxes[scene.namebox_color]),
			loadImage(scene.aya_image),
			loadImage(GUI_SETTINGS),
			loadImage(GUI_SAVE),
			loadImage(GUI_LOAD),
			loadImage(GUI_HISTORY),
			loadImage(LOVE_BAR_BG),
			loadImage(LOVE_BAR_BROKEN_HEART),
			loadImage(LOVE_BAR_EMPTY),
			loadImage(lovebars[scene.lovebar_color].bar),
			loadImage(lovebars[scene.lovebar_color].heart),
			...scene.characters.map((x) => loadImage(x.image))
		]);

		if (render_id !== my_id) return;

		ctx.fillStyle = 'black';
		ctx.fillRect(0, 0, 1920, 1080);

		ctx.fillStyle = 'white';

		if (scene.background_visible) {
			let xMoveMax = 960 * scene.background_scale - 960;
			let yMoveMax = 540 * scene.background_scale - 540;
			ctx.translate(
				scene.background_offset_x * -xMoveMax - xMoveMax,
				scene.background_offset_y * -yMoveMax - yMoveMax
			);
			ctx.scale(scene.background_scale, scene.background_scale);
			ctx.drawImage(bg, 0, 0, 1920, 1080);
			ctx.resetTransform();
		}

		for (const char of scene.characters) {
			const img = await loadImage(char.image);
			ctx.drawImage(
				img,
				1920 / 2 + char.image_offset_x * (1920 / 2) - (img.width * char.image_offset_scale) / 2,
				char.image_offset_y * (1920 / 2) + img.width - img.width * char.image_offset_scale,
				img.width * char.image_offset_scale,
				img.height * char.image_offset_scale
			);
		}

		if (scene.textbox_visible) {
			ctx.drawImage(textbox, 0, 0);
			if (scene.namebox_color !== 'Narration') {
				if (scene.namebox_custom_color) {
					const parsedHex = [
						parseInt(scene.namebox_custom_color.substring(1, 3), 16),
						parseInt(scene.namebox_custom_color.substring(3, 5), 16),
						parseInt(scene.namebox_custom_color.substring(5, 7), 16)
					] as [number, number, number];
					const hsl = rgbToHsl(...parsedHex);
					const hueShift = hsl[0];
					const satShift = hsl[1] - 0.64;
					const lightShift = hsl[2] - 0.6;
					namebox.crossOrigin = 'Anonymous';

					const secondaryCanvas = document.createElement('canvas');
					secondaryCanvas.width = namebox.width;
					secondaryCanvas.height = namebox.height;
					const secondaryCtx = secondaryCanvas.getContext('2d');
					secondaryCtx.drawImage(namebox, 0, 0);
					const secondaryImageData = secondaryCtx.getImageData(0, 0, namebox.width, namebox.height);
					const secondaryImageDataPixels = secondaryImageData.data;
					for (let i = 0; i < secondaryImageDataPixels.length; i += 4) {
						const [r, g, b] = [
							secondaryImageDataPixels[i],
							secondaryImageDataPixels[i + 1],
							secondaryImageDataPixels[i + 2]
						];
						const [h, s, l] = rgbToHsl(r, g, b);
						const newHue = (hueShift + h) % 360;
						const newSat = Math.min(100, Math.max(satShift + s, 0));
						const newLight = Math.min(100, Math.max(lightShift + l, 0));
						const newRgb = hslToRgb(newHue, newSat, newLight);
						secondaryImageDataPixels[i] = newRgb[0];
						secondaryImageDataPixels[i + 1] = newRgb[1];
						secondaryImageDataPixels[i + 2] = newRgb[2];
					}
					secondaryCtx.putImageData(secondaryImageData, 0, 0);
					ctx.drawImage(secondaryCanvas, 1246, 1000);
					secondaryCanvas.remove();
				} else {
					ctx.drawImage(namebox, 1246, 1000);
				}
			}
		}

		if (scene.gui_elements_visible) {
			ctx.drawImage(guiSettings, 1611, 856);
			ctx.drawImage(guiSave, 1593, 914);
			ctx.drawImage(guiLoad, 1639, 914);
			ctx.drawImage(guiHistory, 1611, 968);
		}

		if (scene.aya_visible) {
			ctx.drawImage(aya, -115, 480, 585, 1390);
		}

		function drawStyledText1(text: string, x: number, y: number) {
			ctx.strokeStyle = '#555453';
			ctx.lineWidth = 8;
			ctx.strokeText(text, x, y);
			ctx.strokeText(text, x + 2, y + 2);
			ctx.strokeStyle = '#000000';
			ctx.lineWidth = 6;
			ctx.strokeText(text, x + 1, y + 1);
			ctx.fillStyle = 'white';
			ctx.strokeStyle = 'black';
			ctx.lineWidth = 1;
			ctx.strokeText(text, x, y);
			ctx.fillText(text, x, y);
		}

		function drawStyledText2(text: string, x: number, y: number) {
			ctx.strokeStyle = '#f04674';
			ctx.lineWidth = 8;
			ctx.strokeText(text, x, y);
			ctx.fillStyle = 'white';
			ctx.fillText(text, x, y);
		}

		function drawWrappedText(text: string, x: number, y: number, wrap = 10000) {
			const words = text.split(' ');

			let offsetX = 0;
			let offsetY = 0;

			for (let i = 0; i < words.length; i++) {
				let newWidth = ctx.measureText(words[i] + ' ').width;

				if (offsetX + newWidth > wrap) {
					offsetX = 0;
					offsetY += 48;
				}

				drawStyledText1(words[i], x + offsetX, y + offsetY);

				offsetX += newWidth;
			}
		}

		if (scene.textbox_visible) {
			if (scene.namebox_color !== 'Narration') {
				ctx.textAlign = 'center';
				ctx.textBaseline = 'middle';
				ctx.font = '32px "MADE Tommy Soft"';
				drawStyledText1(scene.namebox_text, 1372, 1038);
			}

			ctx.textAlign = 'left';
			ctx.textBaseline = 'top';
			ctx.font = '38px "MADE Tommy Soft"';

			drawWrappedText(scene.textbox_text.replace(/\n/g, ' ').replace(/ +/g, ' '), 403, 869, 1114);
		}

		if (scene.lovebar_visible) {
			ctx.drawImage(loveBarBg, 0, -20);
			ctx.drawImage(loveBarEmpty, 777, 10, 315, 38);
			ctx.drawImage(
				loveBarFull,
				0,
				0,
				loveBarFull.width * scene.lovebar_amount,
				loveBarFull.height,
				777,
				10,
				315 * scene.lovebar_amount,
				38
			);
			ctx.drawImage(loveBarBrokenHeart, 762, 6, 49, 45);
			ctx.drawImage(loveBarHeart, 1063, 4);
		}

		if (scene.objective) {
			const y = scene.lovebar_visible ? 81 : 37;
			ctx.textAlign = 'left';
			ctx.textBaseline = 'top';
			ctx.font = '38px "MADE Tommy Soft"';
			drawStyledText2('* ' + scene.objective, 34, y);
		}

		// M requested a watermark so we can tell fake news apart from the actual game.
		// Please do not remove this, or else M will be very sad/mad.
		const extraOffset = scene.lovebar_visible ? 60 : 0;
		ctx.textAlign = 'right';
		ctx.textBaseline = 'top';
		ctx.font = '38px "MADE Tommy Soft"';
		drawStyledText1(
			'this is a fan edit and is not associated with the real game',
			1920 - 16,
			10 + extraOffset
		);
		ctx.font = '18px monospace';
		drawStyledText1('ijwtbs-generator.davecode.net', 1920 - 16, 58 + extraOffset);
	}

	$: canvas && scene && render();
</script>

<canvas bind:this={canvas} width={1920} height={1080} />

<style>
	canvas {
		width: 100%;
	}
</style>
