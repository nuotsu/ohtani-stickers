<div class="text-sm mt-4">
	{#if date}
		<time datetime={date} class="block uppercase text-xs text-opacity-70">
			{date}
		</time>
	{/if}

	{#if description}
		<p
			class="mt-2" class:line-clamp-3={expandable && !expand}
			on:click={handleClick}
		>
			{description}
		</p>
	{/if}
</div>

<script>
	export let meta, expandable = true

	let expand = false

	function handleClick() {
		if (expandable) {
			expand = !expand
		}
	}

	$: date = new Date(meta.date).toLocaleDateString('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
	})

	$: description = meta.description
</script>
