<svelte:head>
	<title>The Faces of Shohei Ohtani</title>
</svelte:head>

<Header/>

<main class="max-w-7xl mx-auto px-4">
	<slot></slot>
</main>

<Footer/>

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

	:global(#svelte) {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	body {
		@apply bg-gray-border;
	}

	main {
		flex: 1 1;
		width: 100%;
	}
</style>

<script>
	import Header from '$lib/Header.svelte'
	import Footer from '$lib/Footer.svelte'
</script>
