<div class="root">
	<slot></slot>
</div>

<style lang="postcss">
	.root {
		position: sticky;
		z-index: 1;

		@apply
			my-2 top-2 max-w-screen-sm mx-auto rounded-md text-2xl
			bg-gray-100 bg-opacity-90 backdrop-blur-sm
		;
	}
</style>

<script>

</script>
