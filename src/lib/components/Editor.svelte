<script lang="ts">
	import { backgrounds, characters, textboxes } from '$lib/assets';

	import type { Scene } from '$lib/scene-type';
	import EditorAya from './editor-sections/EditorAya.svelte';
	import EditorBackground from './editor-sections/EditorBackground.svelte';
	import EditorCharacters from './editor-sections/EditorCharacters.svelte';
	import EditorExtras from './editor-sections/EditorExtras.svelte';
	import EditorLoveBar from './editor-sections/EditorLoveBar.svelte';
	import EditorTextbox from './editor-sections/EditorTextbox.svelte';

	export let scene: SvelteStore<Scene>;
</script>

<EditorAya {scene} />
<EditorTextbox {scene} />
<EditorBackground {scene} />
<EditorCharacters {scene} />
<EditorLoveBar {scene} />
<EditorExtras {scene} />
