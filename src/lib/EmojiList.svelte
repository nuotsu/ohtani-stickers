<div class="root">
	<button on:click={randomize}>🔀</button>

	{#if typeof $randomSticker == 'number'}
		<button
			on:click={() => randomSticker.set(false)}
			transition:scale
		>❎</button>
	{/if}

	{#each [...new Set(emojis)] as emoji}
		<button
			class="emoji transition-opacity"
			class:opacity-30={!!$selectedEmoji && !($selectedEmoji === emoji)}
			on:click={() => handleClick(emoji)}
		>
			{emoji}
		</button>
	{/each}
</div>

<style lang="postcss">
	.root {
		position: sticky;
		z-index: 1;
		display: flex;
		overflow-x: auto;
		text-align: center;

		@apply
			gap-2 my-2 p-1 top-2 max-w-screen-sm mx-auto rounded-md text-2xl no-scrollbar
			bg-gray-100 bg-opacity-90 backdrop-blur-sm
			before:m-auto after:m-auto
		;
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

	const stickerCount = getContext('stickerCount')

	export let emojis

	function randomize() {
		selectedEmoji.set(false)
		const random = Math.floor(Math.random() * stickerCount)
		randomSticker.set(random)
		selectedSticker.set(false)
	}

	function handleClick(emoji) {
		randomSticker.set(false)
		selectedSticker.set(false)

		if ($selectedEmoji === emoji) {
			selectedEmoji.set(false)
		} else {
			selectedEmoji.set(emoji)
		}
	}
</script>
