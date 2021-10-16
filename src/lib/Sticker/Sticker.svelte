<div class="root">
	<figure data-emoji={sticker.emotion.emoji} on:click={() => selectedSticker.set(sticker)}>
		<img
			src={urlFor(sticker.image.face).height(200).auto('format').url()}
			alt={sticker.meta.description || sticker.emotion.emoji}
		/>

		<div class="emojis">
			{#each emojis as emoji}
				<span class="emoji">{emoji}</span>
			{/each}
		</div>
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

	.emojis {
		position: absolute;
		right: 0;
		bottom: 0;
		display: flex;

		@apply text-2xl transition-opacity;
	}

	.emoji {
		transition: margin-left 0.2s;
	}

	figure:not(:hover) .emojis {
		opacity: 0.3;
		z-index: -1;
	}

	figure:not(:hover) .emoji {
		margin-left: -0.8ch;
	}

	img {
		margin-inline: auto;

		@apply drop-shadow-md;
	}
</style>

<script>
	import { urlFor } from '$lib/sanity'
	import { selectedSticker } from '$lib/stores'
	import runes from 'runes'

	export let sticker

	let emojis = runes(sticker.emotion.emoji).reverse()
</script>
