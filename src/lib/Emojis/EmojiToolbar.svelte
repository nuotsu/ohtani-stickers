<div class="
	root sticky top-2 z-[1] overflow-hidden max-w-4xl mb-2 mx-auto rounded-md
	text-2xl bg-gray-100 bg-opacity-90 backdrop-blur-sm
">
	<EmojiList {expand} />

	<div class="more absolute right-0 bottom-0 grid place-content-center text-sm" class:expand>
		<button on:click={() => expand = !expand}>
			{!expand ? '↩️' : '⤴️'}
		</button>
	</div>
</div>

<style lang="postcss">
	.more:not(.expand) { @apply top-0 p-1 pl-6 bg-gradient-to-l from-gray-100 via-gray-100; }

	.more.expand { @apply m-1; }
</style>

<script>
	import EmojiList from './EmojiList.svelte'

	let expand = false
</script>
