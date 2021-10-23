<div
	class="
		root cursor-pointer relative flex flex-col h-full p-2 rounded-md transition-colors select-none
		hover:bg-white hover:bg-opacity-40
	"
	on:click={() => selectedSticker.set(sticker)}
>
	<figure
		class="flex-1 relative flex items-center"
		data-emoji={sticker.emotion.emoji}
	>
		<img
			class="mx-auto drop-shadow-md"
			src={urlFor(sticker.image.face).height(200).auto('format').url()}
			alt={sticker.meta.description || sticker.emotion.emoji}
			draggable="false"
		/>

		<div class="emojis absolute right-0 bottom-0 flex text-2xl transition-opacity">
			{#each emojis as emoji}
				<span class="emoji">{emoji}</span>
			{/each}
		</div>
	</figure>
</div>

<style lang="postcss">
	.root:not(:hover) .emojis { @apply opacity-40 z-[-1] }
	.root:not(:hover) .emoji { @apply ml-[-0.8ch]; }

	.emoji { transition: margin-left 0.2s; }
</style>

<script>
	import { urlFor } from '$lib/sanity'
	import { selectedSticker } from '$lib/stores'
	import runes from 'runes'

	export let sticker, showDetails

	let emojis = runes(sticker.emotion.emoji).reverse()

	$: !!showDetails && selectedSticker.set(sticker)
</script>
