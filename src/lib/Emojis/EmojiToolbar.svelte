<div class="
	root sticky top-2 z-[1] overflow-hidden w-full max-w-3xl mx-auto mb-2 rounded-md
	text-2xl bg-gray-lighter bg-opacity-90 backdrop-blur-sm
	dark:bg-gray-dark
">
	<EmojiList {expand} />

	<div class="more absolute right-0 bottom-0 grid place-content-center text-sm" class:expand>
		<button on:click={() => expand = !expand}>
			{!expand ? '↩️' : '⤴️'}
		</button>
	</div>
</div>

<style lang="postcss">
	.more:not(.expand) {
		@apply
			top-0 p-1 pl-6 bg-gradient-to-l from-gray-lighter via-gray-lighter
			dark:from-gray-dark dark:via-gray-dark
		;
	}

	.more.expand { @apply m-1; }
</style>

<script>
	import EmojiList from './EmojiList.svelte'

	let expand = false
</script>
