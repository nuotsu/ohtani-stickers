<footer class="p-2 text-center text-sm opacity-20">
	© {new Date().getFullYear()} <a href="https://github.com/nuotsu" {...newtab}>nuotsu</a>.
</footer>

<style>
	footer {
		padding-bottom: calc(0.5rem + env(safe-area-inset-bottom));
	}
</style>

<script>
	import newtab from '$lib/newtab'

	let hidden = true
</script>
