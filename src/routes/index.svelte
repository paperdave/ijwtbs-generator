<script lang="ts">
	import './global.scss';
	import Renderer from '../lib/components/Renderer.svelte';
	import { backgrounds, characters, lovebars, nameboxes, textboxes } from '$lib/assets';
	import { writable } from 'svelte/store';
	import type { Scene } from '$lib/scene-type';
	import Editor from '$lib/components/Editor.svelte';

	const scene = writable<Scene>({
		background_visible: true,
		background: backgrounds[0].url,
		background_offset_x: 0,
		background_offset_y: 0,
		background_scale: 1.2,

		aya_visible: true,
		aya_image: characters[0].sprites[1].url,

		textbox_visible: true,
		textbox_image: textboxes[5].url,
		textbox_text: '"Clearly you do not own an airfryer, Aya."',

		namebox_color: 'blue',
		namebox_custom_color: '#ff5c5c',
		namebox_text: 'Katsumi',

		characters: [
			{
				visible: true,
				character: 'Katsumi',
				image: characters[3].sprites[0].url,
				image_offset_scale: 1,
				image_offset_x: 0,
				image_offset_y: 0
			}
		],

		objective: '',

		lovebar_amount: 0.5,
		lovebar_color: 'Shizuka',
		lovebar_visible: false,

		gui_elements_visible: true
	});

	let width: number = 10000;
</script>

<svelte:window bind:innerWidth={width} />

<main>
	<div class="editor">
		<h1>I Just Want to Make Fake Dialogue</h1>
		<p>
			This is a mock screenshot / meme generator for the hit video game
			<a href="https://store.steampowered.com/app/1703610/I_Just_Want_to_be_Single/"
				>I Just Want To Be Single</a
			>. Assest ripped from game <a href="/proof.png">with permission.</a>
		</p>

		<p class="mobile-warn">use on your computer for best results</p>

		{#if width <= 800}
			<div class="renderer inline-renderer">
				<Renderer scene={$scene} />
			</div>
		{/if}

		<Editor {scene} />
	</div>
	{#if width > 800}
		<div class="renderer">
			<Renderer scene={$scene} />
		</div>
	{/if}
</main>
