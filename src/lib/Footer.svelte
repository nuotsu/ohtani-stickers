<footer class="p-2 text-center text-sm opacity-20">
	<p>© {new Date().getFullYear()} <a href="https://github.com/nuotsu" {...newtab}>nuotsu</a>.</p>
	<p><small>All rights reserved. Original photos are © of their respective owners.</small></p>
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
