<svelte:head>
	<title>The Faces of Shohei Ohtani</title>
</svelte:head>

<Header/>

<main class="flex-1 w-full max-w-7xl mx-auto p-4 pt-0">
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

	@layer components {
		.details-action {
			@apply flex-1 flex items-center justify-center gap-2 p-2 rounded bg-white text-red;
		}
	}

	:global(#svelte) {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	body {
		@apply
			bg-gray-light
			dark:bg-gray-darker dark:text-white
		;
	}
</style>

<script>
	import Header from '$lib/Header.svelte'
	import Footer from '$lib/Footer.svelte'
</script>
