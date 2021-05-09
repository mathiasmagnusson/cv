<script lang="ts">
    import Header from '$lib/Header/index.svelte';
    import '../app.css';
</script>

<Header />

<main>
    <slot />
</main>
<footer />

<style>
    main {
        margin: 40px 15%;
        border-radius: 5px;
        width: 70%;
        padding: 20px;
        background-color: white;
    }
	main > :global(:not(:last-child)) {
		margin-bottom: 30px;
	}
	footer {
		background-color: #26252e;
		height: 100px;
		box-shadow: 0 5px 20px black;
	}
	@media only screen and (min-width: 1400px) {
		main {
			width: 980px;
			margin: 40px calc(50vw - 490px);
		}
	}
</style>
