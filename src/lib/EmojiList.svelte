<div class="root">
	<button on:click={randomize}>🔀</button>

	{#each [...new Set(emojis)] as emoji}
		<button
			class:active={$selectedEmoji === emoji}
			on:click={() => handleClick(emoji)}
		>
			{emoji}
		</button>
	{/each}
</div>

<style lang="postcss">
	.root {
		display: flex;
		width: 100%;
		overflow-x: auto;
		text-align: center;

		@apply no-scrollbar text-2xl before:m-auto after:m-auto;
	}

	button {
		user-select: none;
		outline: none;

		@apply p-1 rounded hover:bg-gray focus:bg-gray;
	}

	button.active {
		@apply bg-red;
	}
</style>

<script>
	import { selectedEmoji, randomSticker, selectedSticker } from '$lib/stores'
	import { getContext } from 'svelte'

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
