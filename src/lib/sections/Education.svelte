<script lang="ts">
    const short = false;
</script>

<section>
    <h2>Utbildning</h2>

    {#if short}
        <ul>
            <li>Grundskola</li>
            <li>Gymnasium - Teknikprogrammet</li>
            <li>Ledarutbildning Patrull</li>
            <li>Leda scouting</li>
        </ul>
    {:else}
        <h3>Grundskola</h3>
        <p>Björknässkolan</p>
        <p>2007 till 2017</p>

        <h3>Gymnasium Teknikprogrammet</h3>
        <p>Nacka Gymnasium</p>
        <p>2017 till 2020</p>
        <p>
            Jag gick teknikprogrammet med inriktning informations- och
            medieteknik. Jag har bland annat läst Matematik 1c
            till 5 samt Matematik - specialisering (linjär algebra),
            Webbutveckling 1, Programmering 1 (som jag dock tentade av) och 2,
            Webbserverprogrammering 1 och Dator- och nätverksteknik 1.
        </p>

        <!--
            <h3>Millitär grundutbildning</h3>
            <p>Dalregementsgruppen?</p>
        -->

        <h3>Ledarutbildning Patrull</h3>
        <p>Scouternas folkhögskola</p>
        <p>Påsken 2016</p>
        <p>
            Ledarutbildningen Patrull ger erfarenheter i att leda sig själv och
            jämnåriga kamrater i en patrull. Scouten får en chans att utvecklas
            och reflektera kring den egna ledarrollen.
        </p>

        <h3>Leda scouting</h3>
        <p>Scouternas folkhögskola</p>
        <p>September 2017</p>
        <p>
            Utbildningen Leda scouting är en grundläggande scoutledarutbildning
            där deltagaren lär sig om Scouternas program, lyssnande och
            stödjande ledarskap samt får förståelse för vad det är som gör
            scouting till scouting.
        </p>
    {/if}
</section>

<style>
</style>
