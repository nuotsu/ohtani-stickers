<div class="root text-left">
	<Actions {image} {emotion} {_id} hideOriginal />

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
	import Actions from '$lib/Stickers/Actions.svelte'
	import StickerMeta from '$lib/Stickers/StickerMeta.svelte'

	export let sticker

	let { emotion, image, _id, meta } = sticker
</script>
