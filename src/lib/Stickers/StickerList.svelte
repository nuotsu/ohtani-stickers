<ul class="grid gap-[1px] items-center">
	{#each filteredStickers() as sticker (sticker)}
		<li class="h-full" class:random>
			<Sticker {sticker} />
		</li>
	{/each}
</ul>

<style lang="postcss">
	ul {
		grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
		padding-bottom: env(safe-area-inset-bottom);

		@apply sm-:grid-cols-4;
	}

	.random { @apply col-span-full mx-auto; }
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
