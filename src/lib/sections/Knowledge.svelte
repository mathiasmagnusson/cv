<script lang="ts">
    const short = false;
</script>

<section>
    <h2>Kunskaper</h2>

    <h3>Programmeringsspråk</h3>

    {#if short}
        <ul>
            <li>Javascript</li>
            <li>HTML/CSS</li>
            <li>Rust</li>
            <li>PHP</li>
            <li>C++</li>
            <li>Java</li>
        </ul>
    {:else}
        <h4>Javascript</h4>
        <p>
            Jag kan Javascript, både i webben och med Node.js. För
            frontend kan jag både <a href="https://svelte.dev">svelte</a> och
            <a href="https://reactjs.org">react</a> och för backend främst
            <a href="https://expressjs.com">express</a> &amp;
            <a href="https://sapper.svelte.dev">sapper</a>.
        </p>

        <h4>HTML/CSS</h4>
        <p>
            Jag har lärt mig modern HTML och CSS både i skolan och på egen hand.
        </p>

        <h4>Rust</h4>
        <p>
            Jag har lärt mig Rust på egen hand och det har varit det
            programmeringsspråk jag tyckt mest om och använt mest sedan dess.
        </p>

        <h4>PHP</h4>
        <p>
            På webbserverprogrammeringen i skolan har jag lärt mig PHP.
        </p>

        <h4>C++</h4>

        <h4>Java</h4>
    {/if}

    <!-- Bättre namn? -->
    <h3>Datorer/Övrigt</h3>

    {#if short}
        <ul>
            <li>Git</li>
            <li>MySQL</li>
            <li>Linux</li>
            <li>Ghidra</li>
        </ul>
    {:else}
        <h4>Git</h4>
        <p>
            Mina kunskaper om git är ganska grundläggande, men jag kan
            tillräkligt mycket för att kunna använda det själv eller i mindre
            grupper.
        </p>

        <h4>MySQL</h4>

        <h4>Linux</h4>
        <p>
            Jag har sedan Augusti 2019 enbart använt linux på min hemmadator.
            Dessutom har jag en server som kör linux och som jag bland annat
            hostar det här CV:t på. Jag är van vid och bekväm med att använda
            terminalen.
        </p>
    {/if}
</section>

<style>
</style>
