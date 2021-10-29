<div class="relative pb-4 origin-bottom" transition:scale={{ delay: 300 }}>
	<div class="absolute left-1/2 bottom-0 -translate-x-1/2 text-4xl animate-fadein">
		{#each runes(emoji) as emoji}
			<Emoji {emoji} />
		{/each}
	</div>
</div>

<script>
	import { scale } from 'svelte/transition'
	import Emoji from '$lib/Emojis/Emoji.svelte'
	import runes from 'runes'

	export let emotion

	$: emoji = emotion.emoji
</script>
