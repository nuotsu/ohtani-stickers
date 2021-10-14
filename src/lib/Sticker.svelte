<div class="root">
	<figure data-emoji={emotion.emoji}>
		<img
			src={urlFor(image.face).height(200).auto('format').url()}
			alt={meta.description || `${emotion.emoji} ${stars}`}
		/>
	</figure>

	<Details/>
</div>

<style lang="postcss">
	.root {
		position: relative;
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.root:not(:hover) :global(.sticker-details) {
		pointer-events: none;
		opacity: 0;
		transform: scale(0.5);
	}

	figure {
		flex: 1 1;
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
		opacity: 0.4;

		@apply text-2xl;
	}

	img {
		margin-inline: auto;

		@apply drop-shadow-md;
	}
</style>

<script>
	import { setContext } from 'svelte'
	import Details from '$lib/Details.svelte'
	import { urlFor } from '$lib/sanity'

	export let image, emotion, meta

	const stars = new Array(emotion.level).fill`★`.join``

	setContext('sticker', {
		image,
		emotion,
		meta,
		stars,
	})
</script>
