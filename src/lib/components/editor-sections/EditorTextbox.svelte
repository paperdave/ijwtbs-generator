<script lang="ts">
	import { characters, nameboxes, textboxes } from '$lib/assets';

	import type { Scene } from '$lib/scene-type';
	import { get } from 'svelte/store';

	export let scene: SvelteStore<Scene>;

	let chosen_character = get(scene).namebox_text;

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
