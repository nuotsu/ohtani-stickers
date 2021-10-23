<ul class="grid gap-[1px] items-center">
	{#each filteredStickers() as sticker (sticker)}
		<li class="h-full" class:random>
			<Sticker {sticker} showDetails={random} />
		</li>
	{/each}
</ul>

<style lang="postcss">
	ul {
		grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
		padding-bottom: env(safe-area-inset-bottom);
	}

	.random { @apply col-span-full max-w-[200px] mx-auto; }

	@media (max-width: 475px) {
		ul { @apply grid-cols-4; }
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
