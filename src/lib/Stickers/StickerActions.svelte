<p class="flex flex-wrap justify-evenly gap-2 mt-2">
	{#await prepareShareData(downloadUrl)}
		<button class="details-action opacity-60" disabled>
			Loading...
		</button>
	{:then shareData}
		{#if navigator.canShare && navigator.canShare(shareData)}
			<button class="details-action" on:click={() => navigator.share(shareData)}>
				<IconShare/> Share
			</button>
		{:else}
			<a href={downloadUrl} class="details-action">
				<IconDownload/> Download
			</a>
		{/if}
	{/await}

	<a href={originalUrl} {...newtab} class="details-action">
		<IconExternalLink/> Original
	</a>
</p>

<script>
	import newtab from '$lib/newtab'
	import IconShare from '$lib/icons/Share.svelte'
	import IconDownload from '$lib/icons/Download.svelte'
	import IconExternalLink from '$lib/icons/ExternalLink.svelte'
	import { urlFor } from '$lib/sanity'

	export let image, emotion

	async function prepareShareData(url) {
		let blob = (await fetch(url)).blob()
		let file = new File([blob], filename, {type: blob.type})
		return {files: [file]}
	}

	$: filename = `shohei-ohtani-${emotion.emoji}`

	$: originalUrl = image.source || image.original

	$: downloadUrl = urlFor(image.face)
		.forceDownload(filename)
		.url()
</script>
