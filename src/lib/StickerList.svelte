<ul>
	{#each filteredStickers() as sticker (sticker)}
		<li>
			<Sticker {sticker} />
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

	@media (max-width: 475px) {
		ul {
			@apply grid-cols-3;
		}
	}
</style>

<script>
	import Sticker from '$lib/Sticker/Sticker.svelte'
	import { selectedEmoji, randomSticker } from '$lib/stores'

	export let stickers

	$: filteredStickers = () => {
		if (typeof $randomSticker === 'number') {
			return [stickers[$randomSticker]]
		}

		if (!!$selectedEmoji) {
			return stickers.filter(({ emotion }) => emotion.emoji === $selectedEmoji)
		}

		else return stickers
	}
</script>
