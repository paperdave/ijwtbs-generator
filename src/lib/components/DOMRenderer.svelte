<script lang="ts">
	import { backgrounds, characters, nameboxes, textboxes } from '../assets';
	import LayeredText from './LayeredText.svelte';

	let clientWidth = 0;
</script>

<main bind:clientWidth style="--frame-width: {clientWidth}px">
	<div class="layer bg" style="background-image:url("{backgrounds[6].url}")" />
	<div class="layer textbox" style="background-image:url("{textboxes[1].url}")" />

	<img src={nameboxes.white} alt="Namebox" class="element namebox" />
	<div class="element namebox-text">
		<LayeredText center>Aya</LayeredText>
	</div>

	<div class="element textbox-text">
		<LayeredText>
			"The FitnessGram<sup>TM</sup> Pacer Test is a multistage aerobic capacity test that progressively
			gets more difficult as it continues..."
		</LayeredText>
	</div>

	<img class="element aya-overlay" alt="Aya" src={characters[0].sprites[0].url} />
</main>

<style lang="scss">
	@use 'sass:math';

	@function hardcoded($n) {
		@return calc(math.div($n, 1920) * var(--frame-width));
	}

	main {
		aspect-ratio: 16 / 9;
		background-color: black;
		width: 100%;
		flex: 1;
		position: relative;
		overflow: hidden;
	}

	.layer,
	.element {
		position: absolute;
		top: 0;
		left: 0;
	}

	.layer {
		width: 100%;
		height: 100%;

		background-position: 50% 50%;
		background-size: 100%;
	}

	.namebox {
		left: hardcoded(1252);
		top: hardcoded(1005);
		width: hardcoded(250);
	}

	.namebox-text {
		left: hardcoded(1260);
		top: hardcoded(1013);
		width: hardcoded(232);
		height: hardcoded(53);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: hardcoded(32);
	}

	.textbox-text {
		top: hardcoded(867);
		left: hardcoded(403);
		width: hardcoded(1114);
		height: hardcoded(160);
		font-size: hardcoded(38);
	}

	.aya-overlay {
		left: hardcoded(-115);
		top: hardcoded(480);
		width: hardcoded(584);
	}

	sup {
		font-size: 50%;
	}
</style>
