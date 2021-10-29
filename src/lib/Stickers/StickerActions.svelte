<p class="flex flex-wrap justify-evenly gap-2 mt-2">
	{#if navigator.canShare && navigator.canShare(shareData())}
		<button class="action" on:click={() => navigator.share(shareData())}>
			<IconShare/> Share
		</button>
	{:else}
		<a href={downloadUrl} class="action">
			<IconDownload/> Download
		</a>
	{/if}

	<a href={originalUrl} {...newtab} class="action">
		<IconExternalLink/> Original
	</a>
</p>

<style lang="postcss">
	.action { @apply flex-1 flex items-center justify-center gap-2 p-2 rounded bg-white text-red; }
</style>

<script>
	import newtab from '$lib/newtab'
	import IconShare from '$lib/icons/Share.svelte'
	import IconDownload from '$lib/icons/Download.svelte'
	import IconExternalLink from '$lib/icons/ExternalLink.svelte'
	import { urlFor } from '$lib/sanity'

	export let image, emotion

	let filename = `shohei-ohtani-${emotion.emoji}`

	$: async () => {
		let u = await fetch(downloadUrl)
		console.log({ u })
	}

	async function shareData() {
		let blob = (await fetch(downloadUrl)).blob()
		let file = new File([blob], filename, {type: blob.type})
		return {files: [file]}
	}

	$: originalUrl = image.source || image.original

	$: downloadUrl = urlFor(image.face)
		.forceDownload(filename)
		.url()
</script>
