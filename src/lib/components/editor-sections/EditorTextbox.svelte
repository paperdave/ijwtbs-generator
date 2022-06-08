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
				$scene.namebox_custom_color = '#ff5c5c';
			} else if (chosen_character !== 'Custom') {
				$scene.namebox_color = characters.find((x) => x.name === chosen_character).namebox;
				$scene.namebox_custom_color = null;
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
		<optgroup label="IJWTBS">
			<option value="Narration">Narration</option>
			{#each characters.filter((x) => !x.thirdparty) as char}
				{#if char.name !== 'Classmate'}
					<option value={char.name}>{char.name}</option>
				{/if}
			{/each}
		</optgroup>
		<optgroup label="Custom">
			<option value="Custom">Custom Character</option>
			{#each characters.filter((x) => x.thirdparty) as char}
				{#if char.name !== 'Classmate'}
					<option value={char.name}>{char.name} - from {char.author}</option>
				{/if}
			{/each}
		</optgroup>
	</select>
</div>

{#if chosen_character === 'Custom'}
	<div class="row">
		<input type="color" style="width: 30px" bind:value={$scene.namebox_custom_color} />
		<input type="text" bind:value={$scene.namebox_text} disabled={!$scene.textbox_visible} />
	</div>
{/if}

<div class="row" style="height:4rem">
	<textarea bind:value={$scene.textbox_text} disabled={!$scene.textbox_visible} />
</div>
