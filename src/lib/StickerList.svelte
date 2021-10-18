<ul>
	{#each filteredStickers() as sticker (sticker)}
		<li class:random>
			<Sticker {sticker} showDetails={random} />
		</li>
	{/each}
</ul>

<style lang="postcss">
	ul {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
		align-items: center;
		padding-bottom: env(safe-area-inset-bottom);

		@apply px-4 gap-4;
	}

	.random {
		grid-column: 1 / -1;
		max-width: 200px;

		@apply mx-auto;
	}

	@media (max-width: 475px) {
		ul {
			@apply grid-cols-4;
		}
	}
</style>

<script>
	import Sticker from '$lib/Stickers/Sticker.svelte'
	import { selectedEmoji, randomSticker } from '$lib/stores'

	export let stickers

	$: filteredStickers = () => {
		if (typeof $randomSticker === 'number') {
			return [stickers[$randomSticker]]
		}

		if (!!$selectedEmoji) {
			return stickers.filter(({ emotion }) => emotion.emoji.includes($selectedEmoji))
		}

		else return stickers
	}

	$: random = typeof $randomSticker === 'number'
</script>
