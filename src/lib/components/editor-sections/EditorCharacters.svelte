<script lang="ts">
	import { characters } from '$lib/assets';
	import { showFilePicker } from '$lib/file-picker';

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
{#each $scene.characters as character, i}
	<div class="character-editor">
		<div class="hsplit">
			<div class="row">
				<select
					value={character.character}
					on:change={(ev) => {
						if (ev.currentTarget.value === 'upload') {
							showFilePicker().then((file) => {
								$scene.characters[i].character = file.name;
								$scene.characters[i].image = URL.createObjectURL(file);
								console.log(file, $scene.characters[i].image);
								character.is_custom = true;
							});
						} else {
							character.character = ev.currentTarget.value;
							character.is_custom = false;
							character.image = characters.find(
								(x) => x.name === ev.currentTarget.value
							).sprites[0].url;
						}
					}}
				>
					{#if character.is_custom}
						<option value={character.character}>custom: {character.character}</option>
					{/if}
					<optgroup label="IJWTBS">
						<option value="Narration">Narration</option>
						{#each characters.filter((x) => !x.thirdparty) as char}
							{#if char.name !== 'Classmate'}
								<option value={char.name}>{char.name}</option>
							{/if}
						{/each}
					</optgroup>
					<optgroup label="Custom">
						<option value={'upload'}>UPLOAD IMAGE</option>
						{#each characters.filter((x) => x.thirdparty) as char}
							{#if char.name !== 'Classmate'}
								<option value={char.name}>{char.name} - from {char.author}</option>
							{/if}
						{/each}
					</optgroup>
				</select>
				{#if !character.is_custom}
					<select bind:value={character.image}>
						{#each characters.find((x) => x.name === character.character).sprites as img}
							<option value={img.url}>{img.name}</option>
						{/each}
					</select>
				{/if}
			</div>
			<div class="row">
				<p>Visible:</p>
				<input type="checkbox" bind:checked={character.visible} />
			</div>
		</div>
		<div class="row">
			<button
				disabled={i === 0}
				on:click={() => {
					$scene.characters = [character].concat($scene.characters.filter((x) => x !== character));
				}}>Bottom</button
			>
			<button
				disabled={i === 0}
				on:click={() => {
					$scene.characters = [
						...$scene.characters.slice(0, i - 1),
						character,
						$scene.characters[i - 1],
						...$scene.characters.slice(i + 1, $scene.characters.length)
					];
				}}>Back</button
			>
			<button
				disabled={i === $scene.characters.length - 1}
				on:click={() => {
					$scene.characters = [
						...$scene.characters.slice(0, i),
						$scene.characters[i + 1],
						character,
						...$scene.characters.slice(i + 2, $scene.characters.length)
					];
				}}>Forward</button
			>
			<button
				disabled={i === $scene.characters.length - 1}
				on:click={() => {
					$scene.characters = $scene.characters.filter((x) => x !== character).concat(character);
				}}>Top</button
			>
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
