<div class="text-sm mt-4">
	{#if date}
		<time datetime={date} class="block uppercase text-xs text-white text-opacity-70">
			{date}
		</time>
	{/if}

	{#if description}
		<p
			class="mt-2" class:line-clamp-3={!expand}
			on:click={() => expand = !expand}
		>
			{description}
		</p>
	{/if}
</div>

<script>
	export let meta

	let expand = false

	$: date = new Date(meta.date).toLocaleDateString('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
	})

	$: description = meta.description
</script>
