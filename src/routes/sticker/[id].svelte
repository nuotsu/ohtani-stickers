<div class="text-center">
	<nav>
		<a href="/">← Back</a>
	</nav>

	{#if embed}
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

	let embed = sticker.image.gettyEmbed
</script>

<script context="module">
	import client from '$lib/sanity'

	export async function load({ page }) {
		let { id } = page.params

		const sticker = await client.getDocument(id)

		return {
			props: {
				sticker,
			},
			redirect: !sticker && '/',
			status: !sticker ? 300 : 200,
		}
	}
</script>
