<div class="root" class:expand>
	<button on:click={randomize}>🔀</button>

	{#if typeof $randomSticker == 'number'}
		<button
			on:click={closeRandom}
			transition:scale
		>❎</button>
	{/if}

	{#each [...new Set(emojis)] as emoji}
		<Emoji {emoji} closeDetails />
	{/each}
</div>

<style lang="postcss">
	.root {
		display: flex;
		overflow-x: auto;

		@apply
			gap-x-2 py-1 px-2 no-scrollbar
		;
	}

	.root:not(.expand) {
		@apply before:m-auto after:m-auto;
	}

	.root.expand {
		flex-wrap: wrap;
	}

	button {
		user-select: none;

		@apply rounded;
	}
</style>

<script>
	import { selectedEmoji, randomSticker, selectedSticker } from '$lib/stores'
	import { getContext } from 'svelte'
	import { scale } from 'svelte/transition'
	import Emoji from './Emoji.svelte'

	export let expand

	const emojis = getContext('emojis')
	const stickerCount = getContext('stickerCount')

	function randomize() {
		selectedEmoji.set(false)
		const random = Math.floor(Math.random() * stickerCount)
		randomSticker.set(random)
		selectedSticker.set(false)
	}

	function closeRandom() {
		randomSticker.set(false)
		selectedSticker.set(false)
	}
</script>
