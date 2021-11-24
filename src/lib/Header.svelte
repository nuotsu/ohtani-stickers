<svelte:head>
	<link rel="reload" href="/app-icon-180.png" as="image">
</svelte:head>

<header class="grid gap-6 sm-:gap-4 items-center py-8 px-2 max-w-screen-md mx-auto font-serif font-bold">
	<figure>
		<img
			class="rounded transform -rotate-6 w-[80px] sm-:w-[60px] shadow-lg"
			src="/app-icon-180.png"
			alt="App icon with Shohei Ohtani's face"
			loading="eager" draggable="false"
		/>
	</figure>

	<h1 class="max-w-max mx-auto">
		<span class="relative z-[1]">The Faces of</span>
		<span class="relative block text-3xl">
			<strong class="relative z-[1]">Shohei Ohtani</strong>
		</span>
	</h1>
</header>

<style lang="postcss">
	header {
		grid-template-columns: auto 1fr;
	}
</style>
