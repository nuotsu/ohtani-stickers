<EmojiList {emojis} />
<StickerList {stickers} />

{#if $selectedSticker}
	<StickerDetails {...$selectedSticker} />
{/if}

<script>
	import EmojiList from '$lib/EmojiList.svelte'
	import StickerList from '$lib/StickerList.svelte'
	import StickerDetails from '$lib/StickerDetails.svelte'
	import client from '$lib/sanity'
	import { setContext } from 'svelte'
	import { selectedSticker } from '$lib/stores'

	export let stickers, emojis

	setContext('stickerCount', stickers.length)
</script>

<script context="module">
	export async function load() {
		const stickers = await client.fetch(`
			*[_type == 'sticker'] | order(meta.date desc) {
				_id,
				image {
					face,
					'original': original.asset->url,
					source
				},
				emotion, meta
			}
		`)

		const emojis = await client.fetch(`
			*[_type == 'sticker'] | order(meta.date desc).emotion.emoji
		`)
		return {
			props: {
				stickers,
				emojis,
			}
		}
	}
</script>
