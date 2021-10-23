<p class="flex flex-wrap justify-evenly gap-2 mt-2">
	<a href={downloadUrl} class="action">
		<IconDownload/> Download
	</a>
	<a href={originalUrl} {...newtab} class="action">
		<IconExternalLink/> Original
	</a>
</p>

<style lang="postcss">
	.action { @apply flex-1 flex items-center justify-center gap-2 p-2 rounded bg-white text-red; }
</style>

<script>
	import newtab from '$lib/newtab'
	import IconDownload from '$lib/icons/Download.svelte'
	import IconExternalLink from '$lib/icons/ExternalLink.svelte'
	import { urlFor } from '$lib/sanity'

	export let image, emotion

	$: originalUrl = image.source || image.original

	$: downloadUrl = urlFor(image.face)
		.forceDownload(`shohei-ohtani-${emotion.emoji}`)
		.url()
</script>
