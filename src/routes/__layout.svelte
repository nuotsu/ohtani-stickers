<svelte:head>
	<title>The Faces of Shohei Ohtani</title>
</svelte:head>

<Header/>

<main class="flex-1 w-full max-w-7xl mx-auto p-4 pt-0">
	<slot></slot>
</main>

<Footer/>

<style global lang="postcss" src="../tailwind.css"></style>

<script>
	import Header from '$lib/Header.svelte'
	import Footer from '$lib/Footer.svelte'
</script>
