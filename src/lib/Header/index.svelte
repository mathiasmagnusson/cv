<script lang="ts">
    import { onMount } from "svelte";
    import Nav from "./nav.svelte"

    let hh;
    onMount(() => {
        hh = document.querySelector("#site-header").getBoundingClientRect().height;
        window.addEventListener("scroll", () => {
            sm = Math.max(0, 1 - window.scrollY / hh);
            scroll = window.scrollY;
        });
    });
    let sm = 1;
    let scroll = 0;
</script>

<header id="site-header" style="background-color: rgb({sm*217}, {sm*250}, {sm*255});">
    <h1 style="filter: opacity({sm}); transform: scale({(sm+1)/2}); top: {scroll/3}px">CV Mathias Magnusson</h1>
</header>
<Nav />

<style>
    header {
        height: 40vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: #302e46;
        font-size: 30px;
    }
    h1 {
        position: relative;
        text-align: center;
    }
</style>
