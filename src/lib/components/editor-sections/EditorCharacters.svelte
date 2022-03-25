<script lang="ts">
	import { characters } from '$lib/assets';

	import type { Scene } from '$lib/scene-type';
	export let scene: SvelteStore<Scene>;
</script>

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
					value={character.character}
					on:change={(ev) => {
						if (ev.currentTarget.value === 'upload') {
						} else {
							character.character = ev.currentTarget.value;
							character.image = characters.find(
								(x) => x.name === ev.currentTarget.value
							).sprites[0].url;
						}
					}}
				>
					{#each characters as char}
						<option value={char.name}>{char.name}</option>
					{/each}
					<!-- <option value={'upload'}>UPLOAD</option> -->
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
				}}
			>
				Remove
			</button>
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
