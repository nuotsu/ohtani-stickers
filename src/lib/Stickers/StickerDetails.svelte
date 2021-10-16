<div class="root" transition:slide={{ y: -100 }}>
	<button class="close" on:click={() => selectedSticker.set(false)}>×</button>

	<div class="title gap-2 pr-1">
		<p class="text-2xl text-red">
			{#each runes(emotion.emoji) as emoji}
				<Emoji {emoji} />
			{/each}
		</p>

		<figure class="preview relative" in:scale={{ delay: 300 }}>
			<img
				src={urlFor(image.face).height(100).url()}
				alt={meta.description || emotion.emoji}
				draggable="false"
			/>
		</figure>
	</div>

	<StickerActions/>

	<div class="meta">
		<time datetime={meta.date} class="text-gray-400">{formatDate(meta.date)}</time>
		{#if meta.description}
			<p class="mt-2">{meta.description}</p>
		{/if}
	</div>
</div>

<style lang="postcss">
	.root {
		@apply
			p-4 rounded-t-lg shadow-2xl border border-gray-border bg-white;

		position: fixed;
		left: 50%;
		bottom: 0;
		transform: translateX(-50%);
		width: 300px;
		padding-bottom: calc(1rem + env(safe-area-inset-bottom));
		border-bottom: 0;
	}

	.title {
		display: grid;
		grid-template-columns: 4fr 1fr;
		padding-right: 1rem;
	}

	.preview img {
		position: absolute;
		right: 0; bottom: 0;
	}

	.meta {
		font-size: smaller;

		@apply mt-4;
	}

	time {
		display: block;
		text-transform: uppercase;
		font-size: smaller;
	}

	.close {
		position: absolute;
		top: 0;
		right: 0;
		display: grid;
		place-content: center;
		outline: none;

		@apply p-3 w-3 h-3 rounded-full transition-opacity;
	}

	.close:not(:hover):not(:focus) {
		opacity: 0.3;
	}
</style>

<script>
	import { slide, scale } from 'svelte/transition'
	import { selectedSticker } from '$lib/stores'
	import { urlFor } from '$lib/sanity'
	import Emoji from '$lib/Emojis/Emoji.svelte'
	import StickerActions from './StickerActions.svelte'
	import runes from 'runes'

	export let image, emotion, meta

	function formatDate(date) {
		return new Date(date).toLocaleDateString('en-US', {
			month: 'short',
			day: 'numeric',
			year: 'numeric',
		})
	}
</script>
