<button
	class="transition-opacity"
	class:opacity-30={!!$selectedEmoji && !($selectedEmoji === emoji)}
	on:click={() => handleClick(emoji)}
>
	{emoji}
</button>

<script>
	import { randomSticker, selectedEmoji, selectedSticker } from '$lib/stores'

	export let emoji, closeDetails

	function handleClick(emoji) {
		randomSticker.set(false)

		!!closeDetails && selectedSticker.set(false)

		if ($selectedEmoji === emoji) {
			selectedEmoji.set(false)
		} else {
			selectedEmoji.set(emoji)
		}
	}
</script>
