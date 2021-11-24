<svelte:head>
	<title>{sticker.emotion.emoji} | The Faces of Shohei Ohtani</title>
	{#if sticker.meta.description}
		<meta name="description" content={sticker.meta.description}>
	{/if}
</svelte:head>

<div class="max-w-3xl mx-auto">
	<Header {sticker} />

	{#if !!embed}
		<article class="grid md:grid-cols-2 gap-8 mt-8">
			<Embed {embed} />
			<Details {sticker} />
		</article>
	{/if}
</div>

<style lang="postcss">
	article {
		grid-template-areas: 'embed details';
	}

	@screen md- {
		article {
			grid-template-areas: 'details' 'embed';
		}
	}
</style>

<script>
	import Header from '$lib/Original/Header.svelte'
	import Embed from '$lib/Original/Embed.svelte'
	import Details from '$lib/Original/Details.svelte'

	export let sticker

	let { embed } = sticker.image
</script>

<script context="module">
	import client from '$lib/sanity'

	export const prerender = true

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
