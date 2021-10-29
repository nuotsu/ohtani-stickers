<div class="flex-1 flex flex-col-reverse">
	<div class="button">
		<slot></slot>
	</div>

	{#if image}
		<figure class="animate-fadein transition-transform px-2">
			<img
				class="mx-auto -mb-1 h-[80px] drop-shadow-lg rounded object-cover {className}"
				{src} alt="" draggable="false"
			/>
		</figure>
	{/if}
</div>

<style lang="postcss">
	.button:hover + figure {
		@apply -translate-y-2;
	}
</style>

<script>
	export let image, className

	$: src = image
</script>
