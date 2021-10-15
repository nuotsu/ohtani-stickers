<div class="root">
	<figure data-emoji={sticker.emotion.emoji} on:click={() => selectedSticker.set(sticker)}>
		<img
			src={urlFor(sticker.image.face).height(200).auto('format').url()}
			alt={sticker.meta.description || sticker.emotion.emoji}
		/>
	</figure>
</div>

<style lang="postcss">
	.root {
		position: relative;
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	figure {
		flex: 1 1;
		cursor: pointer;
		position: relative;
		display: flex;
		align-items: center;
	}

	figure::after {
		content: attr(data-emoji);
		position: absolute;
		z-index: -1;
		right: 0;
		bottom: 0;

		@apply text-2xl transition-opacity;
	}

	figure:not(:hover)::after {
		opacity: 0.3;
	}

	img {
		margin-inline: auto;

		@apply drop-shadow-md;
	}
</style>

<script>
	import { urlFor } from '$lib/sanity'
	import { selectedSticker } from '$lib/stores'

	export let sticker
</script>
