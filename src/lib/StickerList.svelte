<ul>
	{#each filteredStickers() as sticker (sticker)}
		<li class:single={typeof $randomSticker === 'number'}>
			<Sticker {sticker} />
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

	.single {
		grid-column: 1 / -1;
		max-width: 200px;

		@apply mx-auto;
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
			return stickers.filter(({ emotion }) => emotion.emoji.includes($selectedEmoji))
		}

		else return stickers
	}
</script>
