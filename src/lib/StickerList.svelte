<ul>
	{#each filteredStickers() as sticker (sticker)}
		<li class="h-full hover:relative" transition:scale={animOptions} animate:flip={animOptions}>
			<Sticker {...sticker} />
		</li>
	{/each}
</ul>

<style lang="postcss">
	ul {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
		align-items: center;

		@apply px-4 gap-4;
	}
</style>

<script>
	import { scale } from 'svelte/transition'
	import { flip } from 'svelte/animate'
	import Sticker from '$lib/Sticker.svelte'
	import { selectedEmoji, selectedSticker } from '$lib/stores'

	const animOptions = {
		duration: 400
	}

	export let stickers

	$: filteredStickers = () => {
		if (typeof $selectedSticker === 'number') {
			return [stickers[$selectedSticker]]
		}

		if (!!$selectedEmoji) {
			return stickers.filter(({ emotion }) => emotion.emoji === $selectedEmoji)
		}

		else return stickers
	}
</script>
