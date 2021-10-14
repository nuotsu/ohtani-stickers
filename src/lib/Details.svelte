<div class="sticker-details">
	<div>
		<div class="text-red">{emotion.emoji} {stars}</div>

		<hr>
		<a href={downloadUrl} class="link text-red">Download</a>
		<a href={image.source || image.original} {...newtab} class="link text-red">Context</a>

		{#if meta.description}
			<hr>
			<p>{meta.description}</p>
		{/if}
	</div>
</div>

<style lang="postcss">
	.sticker-details {
		position: absolute;
		z-index: 1;
		box-sizing: border-box;
		width: 100%;
		left: 0;
		top: calc(100% - 0.5rem);
		transform-origin: top;

		@apply p-2 bg-white rounded drop-shadow-lg transition;
	}

	.sticker-details::before {
		position: absolute;
		background-color: inherit;

		@apply rounded-tr-sm w-2 h-2;
	}

	hr {
		@apply my-2;
	}
</style>

<script>
	import { getContext } from 'svelte'
	import { urlFor } from './sanity'
	import newtab from '$lib/newtab'

	const { image, emotion, meta, stars } = getContext('sticker')

	const downloadUrl = urlFor(image.face).forceDownload(`shohei-ohtani-${emotion.emoji}`).url()
</script>
