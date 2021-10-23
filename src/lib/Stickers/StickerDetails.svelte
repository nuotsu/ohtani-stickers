<div class="root" transition:slide={{ y: -100 }}>
	<CloseDetails/>

	<div class="title grid pr-4 gap-2">
		<p class="text-3xl text-red">
			{#each runes(emotion.emoji) as emoji}
				<Emoji {emoji} />
			{/each}
		</p>

		<figure class="relative" in:scale={{ delay: 300 }}>
			<img
				class="absolute right-0 bottom-0 drop-shadow-lg"
				src={previewUrl}
				alt={meta.description || emotion.emoji}
				draggable="false"
			/>
		</figure>
	</div>

	<StickerActions {image} {emotion} />

	<div class="text-sm mt-4">
		<time datetime={meta.date} class="block uppercase text-xs text-white text-opacity-70">
			{formatDate(meta.date)}
		</time>

		{#if meta.description}
			<p class="mt-2">{meta.description}</p>
		{/if}
	</div>
</div>

<style lang="postcss">
	.root {
		padding-bottom: calc(1rem + env(safe-area-inset-bottom));

		@apply
			fixed left-1/2 bottom-0 -translate-x-1/2 w-[400px] sm:w-[calc(100%-2rem)]
			p-4 rounded-t-lg shadow-2xl border-2 border-b-0 border-white bg-red text-white;
	}

	.title {
		grid-template-columns: 4fr 1fr;
	}
</style>

<script>
	import { slide, scale } from 'svelte/transition'
	import { urlFor } from '$lib/sanity'
	import CloseDetails from './CloseDetails.svelte'
	import Emoji from '$lib/Emojis/Emoji.svelte'
	import StickerActions from './StickerActions.svelte'
	import runes from 'runes'

	export let image, emotion, meta

	$: previewUrl = urlFor(image.face).height(100).url()

	function formatDate(date) {
		return new Date(date).toLocaleDateString('en-US', {
			month: 'short',
			day: 'numeric',
			year: 'numeric',
		})
	}
</script>
