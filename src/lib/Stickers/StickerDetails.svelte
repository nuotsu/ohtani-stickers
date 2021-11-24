<div transition:slide={{ y: -100 }} class="
	root fixed z-[1] right-1/2 w-[400px] max-h-[80vh] p-4 bg-blur shadow-2xl
	sm:translate-x-1/2 sm:bottom-8 sm:rounded-2xl
	sm-:w-full sm-:inset-x-0 sm-:bottom-0 sm-:rounded-t-2xl
">
	<CloseDetails/>

	<StickerEmojis {emotion} />

	<StickerActions {image} {emotion} {_id} />

	{#if !!meta.date && !!meta.description}
		<StickerMeta {meta} />
	{/if}
</div>

<style lang="postcss">
	.root {
		padding-bottom: calc(1rem + env(safe-area-inset-bottom));
	}
</style>

<script>
	import { slide } from 'svelte/transition'
	import CloseDetails from './CloseDetails.svelte'
	import StickerEmojis from './StickerEmojis.svelte'
	import StickerActions from './StickerActions.svelte'
	import StickerMeta from './StickerMeta.svelte'

	export let image, emotion, meta, _id
</script>
