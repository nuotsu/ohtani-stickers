<div class="text-center">
	<nav>
		<a href="/">← Back</a>
	</nav>

	{#if !!embed}
		<article class="mt-8">{@html embed}</article>
	{/if}
</div>

<svelte:head>
	<title>{sticker.emotion.emoji} | The Faces of Shohei Ohtani</title>
	{#if sticker.meta.description}
		<meta name="description" content={sticker.meta.description}>
	{/if}
</svelte:head>

<script>
	export let sticker

	let { embed } = sticker.image
</script>

<script context="module">
	import client from '$lib/sanity'

	export async function load({ page }) {
		let { id } = page.params

		const sticker = await client.getDocument(id)

		if (!!sticker) {
			return {
				props: {
					sticker,
				},
			}
		}

		return {
			status: 300,
			redirect: '/',
		}
	}
</script>
