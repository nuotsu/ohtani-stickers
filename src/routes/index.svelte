<EmojiToolbar {emojis} />
<StickerList {stickers} />

{#if !!$selectedSticker}
	<StickerDetails {...$selectedSticker} />
{/if}

<script>
	import EmojiToolbar from '$lib/Emojis/EmojiToolbar.svelte'
	import StickerList from '$lib/Stickers/StickerList.svelte'
	import StickerDetails from '$lib/Stickers/StickerDetails.svelte'
	import { setContext } from 'svelte'
	import { selectedSticker } from '$lib/stores'

	export let stickers, emojis

	setContext('emojis', emojis)
	setContext('stickerCount', stickers.length)
</script>

<script context="module">
	import client from '$lib/sanity'
	import runes from 'runes'

	export async function load() {
		const stickers = await client.fetch(`
			*[_type == 'sticker'] | order(meta.date desc) {
				_id,
				image {
					face,
					original,
					'originalUrl': original.asset->url,
					source,
					gettyEmbed
				},
				emotion,
				meta
			}
		`)

		const emojis = await client.fetch(`
			*[_type == 'sticker'].emotion.emoji
		`)

		return {
			props: {
				stickers,
				emojis: [...new Set(runes(emojis.join``))].sort(),
			}
		}
	}
</script>
