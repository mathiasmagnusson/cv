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
        margin: 20px 5%;
        border-radius: 5px;
        width: 90%;
        padding: 20px;
        background-color: white;
    }
	main > :global(:not(:last-child)) {
		margin-bottom: 30px;
	}
	footer {
		background-color: #26252e;
		height: 60px;
		box-shadow: 0 5px 20px black;
	}
    @media only screen and (min-width: 800px) {
        main {
            margin: 40px 15%;
            width: 70%;
        }
        footer {
            height: 100px;
        }
    }
	@media only screen and (min-width: 1400px) {
		main {
			width: 980px;
			margin: 40px calc(50vw - 490px);
		}
	}
</style>
