<svelte:head>
	<title>The Faces of Shohei Ohtani</title>
</svelte:head>

<Header/>

<main class="max-w-screen-xl mx-auto px-2 md:px-4">
	<slot></slot>
</main>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	@layer utilities {
		.no-scrollbar::-webkit-scrollbar {
			display: none;
		}

		.no-scrollbar {
			-ms-overflow-style: none;	/* IE and Edge */
			scrollbar-width: none;	/* Firefox */
		}

		.link {
			@apply underline active:text-red-dark;
		}

		.link:hover {
			text-decoration-thickness: 2px;
		}
	}
</style>

<script>
	import Header from '$lib/Header.svelte'
</script>
