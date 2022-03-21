<script lang="ts">
	import './global.scss';
	import Renderer from '../lib/components/Renderer.svelte';
	import { backgrounds, characters, lovebars, nameboxes, textboxes } from '$lib/assets';
	import { writable } from 'svelte/store';
	import type { Scene } from '$lib/scene-type';

	let chosen_character = 'Katsumi';

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

		objective: "this isn't implemented yet.",

		lovebar_amount: 0.5,
		lovebar_color: 'Shizuka',
		lovebar_visible: false,

		gui_elements_visible: true
	});

	$: chosen_character &&
		(() => {
			if (chosen_character === 'Narration') {
				$scene.namebox_color = 'Narration';
			} else if (chosen_character !== 'Custom') {
				$scene.namebox_color = characters.find((x) => x.name === chosen_character).namebox;
				$scene.namebox_text = chosen_character;
			}
		})();
</script>

<main>
	<div class="editor">
		<h1>I Just Want to Make Fake Dialogue</h1>
		<p>
			This is a mock screenshot / meme generator for the hit video game<br />
			<a href="https://store.steampowered.com/app/1703610/I_Just_Want_to_be_Single/"
				>I Just Want To Be Single</a
			>. Assest ripped from game <a href="/proof.png">with permission.</a>
		</p>

		<h2>Textbox</h2>

		<div class="hsplit">
			<div class="row">
				<p>Is Visible:</p>
				<input type="checkbox" bind:checked={$scene.textbox_visible} />
			</div>
			<div class="row">
				<p>Arrow:</p>
				<select bind:value={$scene.textbox_image} disabled={!$scene.textbox_visible}>
					{#each textboxes as img}
						<option value={img.url}>{img.name}</option>
					{/each}
				</select>
			</div>
		</div>

		<div class="row">
			<p>Speaker:</p>
			<select bind:value={chosen_character} disabled={!$scene.textbox_visible}>
				<option value="Narration">Narration</option>
				{#each characters as char}
					{#if char.name !== 'Classmate'}
						<option value={char.name}>{char.name}</option>
					{/if}
				{/each}
				<option value="Custom">Custom Character</option>
			</select>
			{#if chosen_character === 'Custom'}
				-
				<select bind:value={$scene.namebox_color} disabled={!$scene.textbox_visible}>
					{#each Object.keys(nameboxes) as color}
						<option value={color}
							>{color.slice(0, 1).toUpperCase()}{color.slice(1).toLowerCase()}</option
						>
					{/each}
				</select>
				<input type="text" bind:value={$scene.namebox_text} disabled={!$scene.textbox_visible} />
			{/if}
		</div>

		<div class="row" style="height:4rem">
			<textarea bind:value={$scene.textbox_text} disabled={!$scene.textbox_visible} />
		</div>

		<h2>Aya</h2>
		<div class="hsplit">
			<div class="row">
				<p>Is Visible:</p>
				<input type="checkbox" bind:checked={$scene.aya_visible} />
			</div>
			<div class="row">
				<p>Pose:</p>
				<select bind:value={$scene.aya_image} disabled={!$scene.aya_visible}>
					{#each characters.find((x) => x.name === 'Aya').sprites as spr}
						<option value={spr.url}>{spr.name}</option>
					{/each}
				</select>
			</div>
		</div>

		<h2>Background</h2>

		<div class="hsplit">
			<div class="row">
				<p>Is Visible:</p>
				<input type="checkbox" bind:checked={$scene.background_visible} />
			</div>
			<div class="row">
				<p>BG:</p>
				<select bind:value={$scene.background} disabled={!$scene.background_visible}>
					{#each backgrounds as spr}
						<option value={spr.url}>{spr.name}</option>
					{/each}
				</select>
			</div>
		</div>

		<div class="row">
			<p>Scale:</p>
			<input type="range" bind:value={$scene.background_scale} max="3" min="1" step="0.01" />
			<input
				class="small-input"
				type="number"
				bind:value={$scene.background_scale}
				max="5"
				min="1"
			/>
		</div>
		<div class="hsplit">
			<div class="row">
				<p>X:</p>
				<input type="range" bind:value={$scene.background_offset_x} max="1" min="-1" step="0.01" />
				<input
					class="small-input"
					type="number"
					bind:value={$scene.background_offset_x}
					max="1"
					min="-1"
				/>
			</div>
			<div class="row">
				<p>Y:</p>
				<input type="range" bind:value={$scene.background_offset_y} max="1" min="-1" step="0.01" />
				<input
					class="small-input"
					type="number"
					bind:value={$scene.background_offset_y}
					max="1"
					min="-1"
				/>
			</div>
		</div>

		<p>
			Note: 0, 0 is center. 1 or -1 makes image touch edge, based on scale. This makes it so the
			image is always covering the bg.
		</p>

		<h2>Characters</h2>
		<button
			on:click={() => {
				$scene.characters = $scene.characters.concat({
					character: 'Akane',
					image: characters.find((x) => x.name === 'Akane').sprites[0].url,
					image_offset_scale: 1,
					image_offset_x: 0,
					image_offset_y: 0,
					visible: true
				});
			}}>ADD</button
		>
		{#each $scene.characters as character}
			<div class="character-editor">
				<div class="hsplit">
					<div class="row">
						<select
							bind:value={character.character}
							on:change={(ev) => {
								character.image = characters.find(
									(x) => x.name === ev.currentTarget.value
								).sprites[0].url;
							}}
						>
							{#each characters as char}
								<option value={char.name}>{char.name}</option>
							{/each}
						</select>
						<select bind:value={character.image}>
							{#each characters.find((x) => x.name === character.character).sprites as img}
								<option value={img.url}>{img.name}</option>
							{/each}
						</select>
					</div>
					<div class="row">
						<p>Is Visible:</p>
						<input type="checkbox" bind:checked={character.visible} />
					</div>
				</div>
				<div class="row">
					<button>Bottom</button>
					<button>Back</button>
					<button>Forward</button>
					<button>Top</button>
					-
					<button
						on:click={() => {
							$scene.characters = $scene.characters.filter((x) => x !== character);
						}}>Remove</button
					>
				</div>
				<div class="hsplit">
					<div class="row" style="flex:3">
						<p>X:</p>
						<input
							type="range"
							bind:value={character.image_offset_x}
							max="0.9"
							min="-0.9"
							step="0.01"
						/>
						<input
							class="small-input"
							type="number"
							bind:value={character.image_offset_x}
							max="10"
							min="-10"
						/>
					</div>
				</div>
				<div class="hsplit">
					<div class="row">
						<p>Y:</p>
						<input
							type="range"
							bind:value={character.image_offset_y}
							max="0.5"
							min="-0.5"
							step="0.01"
						/>
						<input
							class="small-input"
							type="number"
							bind:value={character.image_offset_y}
							max="10"
							min="-10"
						/>
					</div>
					<div class="row">
						<p>Scale:</p>
						<input
							type="range"
							bind:value={character.image_offset_scale}
							max="1.5"
							min="0.5"
							step="0.01"
						/>
						<input
							class="small-input"
							type="number"
							bind:value={character.image_offset_scale}
							max="4"
							min="0"
						/>
					</div>
				</div>
			</div>
		{/each}

		<h2>Love Bar</h2>
		<div class="hsplit">
			<div class="row">
				<p>Is Visible:</p>
				<input type="checkbox" bind:checked={$scene.lovebar_visible} />
			</div>
			<div class="row">
				<p>Style</p>
				<select bind:value={$scene.lovebar_color}>
					{#each Object.keys(lovebars) as bar}
						<option value={bar}>{bar}</option>
					{/each}
				</select>
			</div>
		</div>
		<div class="row">
			<input type="range" bind:value={$scene.lovebar_amount} max="1" min="0" step="0.01" />
			<input class="small-input" type="number" bind:value={$scene.lovebar_amount} max="1" min="0" />
		</div>

		<h2>Extras</h2>
		<div class="row">
			<p>Objective:</p>
			<input type="text" bind:value={$scene.objective} />
		</div>
		<div class="row">
			<p>Game GUI Visible:</p>
			<input type="checkbox" bind:checked={$scene.gui_elements_visible} />
		</div>
	</div>
	<div class="renderer">
		<Renderer scene={$scene} />
	</div>
</main>

<style>
	main {
		display: flex;
		height: 100vh;
	}
	h1 {
		white-space: nowrap;
	}
	h1,
	h2,
	p {
		margin: 0;
	}
	h1,
	h2 {
		color: #ff83a5;
		text-align: center;
		text-shadow: 2px 2px 0 black, -2px 2px 0 black, -2px -2px 0 black, 2px -2px 0 black;
	}
	p {
		color: white;
		text-shadow: 1px 1px 0 black, -1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black;
	}
	input,
	textarea,
	select,
	button {
		background-color: white;
		border: 1px solid black;
		border-radius: 2px;
	}
	.hsplit {
		display: flex;
		gap: 1rem;
	}
	.hsplit > * {
		flex: 1;
	}
	.row {
		display: flex;
		height: 20px;
		gap: 1rem;
	}
	.row > :where(input, textarea, select, button) {
		flex: 1;
	}
	:where(input, textarea, select, button):focus {
		outline: none;
		background-color: #ddd;
	}
	textarea {
		resize: none;
		height: 4rem;
	}
	a {
		color: #fff;
	}
	.editor {
		width: 600px;
		overflow-y: scroll;
		background: #555;
		padding: 2rem 2rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.renderer {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: black;
	}
	.small-input {
		flex: 0 0 50px !important;
		width: 50px;
		-moz-appearance: textfield;
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}

	.character-editor {
		border-left: 0.25rem solid #ff83a5;
		padding-left: 0.5rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin: 1rem 0;
	}
</style>
