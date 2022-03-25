<script lang="ts">
	import { lovebars } from '$lib/assets';

	import type { Scene } from '$lib/scene-type';
	export let scene: SvelteStore<Scene>;
</script>

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
