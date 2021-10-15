{#key _id}
	<div class="root" transition:slide={{ y: -100 }}>
		<button class="close" on:click={() => selectedSticker.set(false)}>×</button>

		<div class="title gap-2 pr-1">
			<p class="text-2xl text-red">{emotion.emoji} {stars}</p>

			<figure class="preview relative" transition:scale={{ delay: 600 }}>
				<img
					src={urlFor(image.face).height(100).url()}
					alt={meta.description || `${emotion.emoji} ${stars}`}
					draggable="false"
				/>
			</figure>
		</div>

		<p>
			<a href={downloadUrl} class="link text-red">Download</a>
			<a href={image.source || image.original} {...newtab} class="link text-red">Context</a>
		</p>

		<div>
			{#if meta.description}
				<p>{meta.description}</p>
			{/if}
			<time datetime={meta.date}>{formatDate(meta.date)}</time>
		</div>
	</div>
{/key}

<style lang="postcss">
	.root {
		@apply p-4 rounded-t-lg shadow-lg border border-gray-border bg-white;

		position: fixed;
		left: 50%;
		bottom: 0;
		transform: translateX(-50%);
		width: 300px;
		padding-bottom: calc(1rem + env(safe-area-inset-bottom));
		border-bottom: 0;
	}

	.title {
		display: grid;
		grid-template-columns: 4fr 1fr;
		padding-right: 1rem;
	}

	.preview img {
		position: absolute;
		right: 0; bottom: 0;
	}

	.close {
		position: absolute;
		top: 0;
		right: 0;

		@apply m-2;
	}
</style>

<script>
	import { slide, scale } from 'svelte/transition'
	import { selectedSticker } from '$lib/stores'
	import { urlFor } from '$lib/sanity'
	import newtab from '$lib/newtab'

	export let _id, image, emotion, meta, stars

	function formatDate(date) {
		return new Date(date).toLocaleDateString('en-US', {
			month: 'short',
			day: 'numeric',
			year: 'numeric',
		})
	}

	const downloadUrl = urlFor(image.face)
		.forceDownload(`shohei-ohtani-${emotion.emoji}`)
		.url()
</script>
