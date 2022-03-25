<script lang="ts">
	import { backgrounds } from '$lib/assets';
	import type { Scene } from '$lib/scene-type';
	export let scene: SvelteStore<Scene>;
</script>

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
	<input class="small-input" type="number" bind:value={$scene.background_scale} max="5" min="1" />
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
	Note: 0, 0 is center. 1 or -1 makes image touch edge, based on scale. This makes it so the image
	is always covering the bg.
</p>
