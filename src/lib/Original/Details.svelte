<div class="root text-left">
	<StickerActions {image} {emotion} {_id} hideOriginal />

	{#if !!meta.date && !!meta.description}
		<div class="mt-8">
			<StickerMeta {meta} expandable={false} />
		</div>
	{/if}
</div>

<style>
	.root {
		grid-area: details;
	}
</style>

<script>
	import StickerActions from '$lib/Stickers/StickerActions.svelte'
	import StickerMeta from '$lib/Stickers/StickerMeta.svelte'

	export let sticker

	let { emotion, image, _id, meta } = sticker
</script>
