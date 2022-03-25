<script lang="ts">
	import type { Scene } from '$lib/scene-type';
	export let scene: SvelteStore<Scene>;
</script>

<h2>Extras</h2>
<div class="row">
	<p>Objective:</p>
	<input type="text" bind:value={$scene.objective} />
</div>
<div class="row">
	<p>Game GUI Visible:</p>
	<input type="checkbox" bind:checked={$scene.gui_elements_visible} />
</div>
