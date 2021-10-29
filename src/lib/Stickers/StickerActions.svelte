<p class="flex flex-wrap items-end justify-evenly gap-2">
	{#await prepareShareData(downloadUrl)}
		<Action>
			<button class="details-action opacity-60" disabled>
				Loading...
			</button>
		</Action>

	{:then shareData}
		{#if navigator.canShare && navigator.canShare(shareData)}
			<Action image={previewImage(image.face)}>
				<button class="details-action" on:click={() => navigator.share(shareData)}>
					<IconShare/> Share
				</button>
			</Action>

		{:else}
			<Action image={previewImage(image.face)}>
				<a href={downloadUrl} class="details-action">
					<IconDownload/> Download
				</a>
			</Action>
		{/if}
	{/await}

	{#key _id}
		<Action image={previewImage(image.original)} className="rotate-2">
			{#if !!image.embed}
				<a href="/sticker/{_id}" class="details-action">
					<IconCode/> Original
				</a>
			{:else}
				<a href={originalUrl} {...newtab} class="details-action">
					<IconExternalLink/> Original
				</a>
			{/if}
		</Action>
	{/key}
</p>

<script>
	import newtab from '$lib/newtab'
	import Action from '$lib/Stickers/StickerActionWrapper.svelte'
	import IconShare from '$lib/icons/Share.svelte'
	import IconDownload from '$lib/icons/Download.svelte'
	import IconCode from '$lib/icons/Code.svelte'
	import IconExternalLink from '$lib/icons/ExternalLink.svelte'
	import { urlFor } from '$lib/sanity'

	export let image, emotion, _id

	async function prepareShareData(url) {
		let response = await fetch(url)
		let blob = await response.blob()
		let ext = blob.type.split('image/')[1]
		let file = new File([blob], `${filename}.${ext}`, {type: blob.type})
		return {files: [file]}
	}

	function previewImage(image) {
		if (!image) return
		return urlFor(image).height(160).url()
	}

	$: image = image

	$: filename = `shohei-ohtani-${emotion.emoji}`

	$: originalUrl = image.source || image.originalUrl

	$: downloadUrl = urlFor(image.face)
		.height(120)
		.forceDownload(filename)
		.url()
</script>
