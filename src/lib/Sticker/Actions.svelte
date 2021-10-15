<p class="actions">
	<a href={downloadUrl} class="action text-red">
		<IconDownload/> Download
	</a>
	<a href={image.source || image.original} {...newtab} class="action text-red">
		<IconExternalLink/> Original
	</a>
</p>

<style lang="postcss">
	.actions {
		display: flex;
		justify-content: space-evenly;

		@apply gap-2 mt-2;
	}

	.action {
		flex: 1 1;
		display: flex;
		align-items: center;
		justify-content: center;

		@apply gap-2 p-2 rounded bg-gray-100;
	}
</style>

<script>
	import { selectedSticker } from '$lib/stores'
	import newtab from '$lib/newtab'
	import IconDownload from '$lib/icons/Download.svelte'
	import IconExternalLink from '$lib/icons/ExternalLink.svelte'
	import { urlFor } from '$lib/sanity'

	const { image, emotion } = $selectedSticker

	const downloadUrl = urlFor(image.face)
		.forceDownload(`shohei-ohtani-${emotion.emoji}`)
		.url()
</script>
