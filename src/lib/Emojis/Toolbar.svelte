<div class="root">
	<List {expand} />

	<div class="more" class:expand>
		<button on:click={() => expand = !expand}>
			{!expand ? '↩️' : '⤴️'}
		</button>
	</div>
</div>

<style lang="postcss">
	.root {
		position: sticky;
		z-index: 1;
		overflow: hidden;

		@apply
			my-2 top-2 max-w-screen-sm mx-auto rounded-md text-2xl
			bg-gray-100 bg-opacity-90 backdrop-blur-sm
		;
	}

	.more {
		position: absolute;
		right: 0; bottom: 0;
		display: grid;
		place-content: center;

		@apply text-sm;
	}

	.more:not(.expand) {
		top: 0;

		@apply p-1 pl-6 bg-gradient-to-l from-gray-100 via-gray-100;
	}

	.more.expand {
		@apply m-1;
	}
</style>

<script>
	import List from './List.svelte'

	let expand = false
</script>
