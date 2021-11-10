<div class="
	root sticky top-2 z-[1] overflow-hidden w-full max-w-3xl mx-auto mb-2 rounded-md
	text-2xl bg-gray-lighter bg-opacity-90 backdrop-blur-sm
	shadow-lg
	dark:bg-gray-dark dark:bg-opacity-90
">
	<EmojiList {expand} />

	<button
		class="more grid place-content-center bg-red text-lg shadow-lg"
		class:expand
		on:click={() => expand = !expand}
		title={expand ? 'Collapse' : 'Expand'}
	>
		{!expand ? '↩️' : '⤴️'}
	</button>
</div>

<style lang="postcss">
	.more.expand {
		@apply w-full rounded-t-md;
	}

	.more:not(.expand) {
		@apply absolute top-0 bottom-0 right-0 p-2 rounded-l-md;
	}
</style>

<script>
	import EmojiList from './EmojiList.svelte'

	let expand = false
</script>
