<script>
    import { onMount } from "svelte";
    import scrollTo, { setup } from "$lib/scroll-to.ts";

    let items = [];

    onMount(() => {
        setup();
        items = Array.from(document.querySelectorAll("main > section > h2"));
    });

    let email = "mathiasmagnussons@gmail.com";
    let page = "https://magnusson.space";
    let gh = "https://github.com/mathiasmagnusson";
</script>

<style>
    nav {
        position: sticky;
        height: 50px;
        background-color: #26252e;
        top: 0;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: row;
    }
    ul {
        display: none;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        height: 100%;
        width: 50%;
        padding: 0;
    }
    li {
        list-style-type: none;
        color: white;
        height: 100%;
        font-size: 20px;
        padding: 15px;
        line-height: 20px;
        transition: background-color 0.2s linear;
        user-select: none;
    }
    li:hover {
        background-color: rgb(100, 100, 100);
    }
    address {
        display: flex;
        justify-content: center;
        padding: 20px;
        width: 100%;
    }
    span {
        margin: 5px;
        color: white;
    }
    i {
        color: #1e70bf;
    }
    i:hover {
        color: #7ab4ea;
    }
    @media only screen and (min-width: 1350px) {
        ul {
            display: flex;
        }
        address {
            width: 50%;
        }
    }
</style>

<nav>
    <ul>
        {#each items as item}
            <li on:click={e => scrollTo(item)}>{item.textContent}</li>
        {/each}
    </ul>
    <address>
        <span><i class="fas fa-phone"></i> +46793488021</span>
        <span><i class="fas fa-map-marked-alt"></i> Lövdalsvägen 42, 132 41, Saltsjö-Boo</span>
        <span><a href="mailto:{email}" title={email}><i class="far fa-envelope"></i></a></span>
        <span><a href={page} title={page}><i class="fas fa-home"></i></a></span>
        <span><a href={gh} title={gh}><i class="fab fa-github"></i></a></span>
    </address>
</nav>
