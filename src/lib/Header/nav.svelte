<script>
    import { onMount } from "svelte";
    import scrollTo, { setup } from "$lib/scroll-to.ts";
    import PhoneSvg from "../../../static/phone.svg";
    import MailSvg from "../../../static/mail.svg";
    import HomeSvg from "../../../static/home.svg";
    import MapSvg from "../../../static/map.svg";
    import GithubSvg from "../../../static/github.svg";
    import LinkedInSvg from "../../../static/linkedin.svg";

    let items = [];

    onMount(() => {
        setup();
        items = Array.from(document.querySelectorAll("main > section > h2"));
    });

    let email = "mathiasmagnussons@gmail.com";
    let page = "https://magnusson.space";
    let gh = "https://github.com/mathiasmagnusson";
    let li = "https://www.linkedin.com/in/mathias-magnusson/";
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
    }
    span {
        margin: 5px;
        color: white;
    }
    span a :global(svg):hover {
        filter: brightness(140%);
    }
    .address {
        display: none;
    }
    @media only screen and (min-width: 500px) {
        .address {
            display: initial;
        }
    }
    @media only screen and (min-width: 1180px) {
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
        <span class="phone"><PhoneSvg />&nbsp;+46793488021</span>
        <span class="address"><MapSvg /> Saltsjö-Boo,&nbsp;Nacka</span>
        <span><a href="mailto:{email}" title={email}><MailSvg /></a></span>
        <span><a href={page} title={page}><HomeSvg /></a></span>
        <span><a href={gh} title={gh}><GithubSvg /></a></span>
        <span><a href={li} title={li}><LinkedInSvg /></a></span>
    </address>
</nav>
