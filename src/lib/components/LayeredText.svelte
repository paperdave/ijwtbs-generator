<script>
	// export let type = 'normal';
	export let center = false;
</script>

<div class="text-container" class:center>
	<div class="layer grey1"><slot /></div>
	<div class="layer grey2"><slot /></div>
	<div class="layer black"><slot /></div>
	<div class="layer white"><slot /></div>
</div>

<style lang="scss">
	@use 'sass:math';

	@function hardcoded($n) {
		@return calc(math.div($n, 1920) * var(--frame-width));
	}

	.center .layer {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.text-container {
		flex: 1;
		width: 100%;
		height: 100%;
		position: relative;
	}

	.layer {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}

	.white {
		color: white;
		-webkit-text-stroke: hardcoded(1) black;
	}
	.black {
		color: black;
		-webkit-text-stroke: hardcoded(3) black;
		transform: translate(hardcoded(1), hardcoded(1));
	}
	.grey1,
	.grey2 {
		color: #555453;
		-webkit-text-stroke: hardcoded(4) #555453;
	}
	.grey2 {
		transform: translate(hardcoded(2), hardcoded(2));
	}
</style>
