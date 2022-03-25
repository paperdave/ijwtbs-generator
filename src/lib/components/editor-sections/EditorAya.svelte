<script lang="ts">
	import { characters } from '$lib/assets';

	import type { Scene } from '$lib/scene-type';
	export let scene: SvelteStore<Scene>;
</script>

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
