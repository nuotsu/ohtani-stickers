<button
	class="close
		absolute z-[1] top-0 right-0 grid place-content-center outline-none
		p-4 w-3 h-3 rounded-full transition-opacity
	"
	on:click={() => selectedSticker.set(false)}
>
	×
</button>

<style>
	.close:not(:hover):not(:focus) {
		opacity: 0.3;
	}
</style>

<script>
	import { selectedSticker } from '$lib/stores'
</script>
