<script context="module" lang="ts">
    export const prerender = true;
</script>

<script lang="ts">
    import WorkExperiences from "$lib/sections/WorkExperiences.svelte";
    import Education from "$lib/sections/Education.svelte";
    import Interests from "$lib/sections/Interests.svelte";
    import Knowledge from "$lib/sections/Knowledge.svelte";
    import Competitions from "$lib/sections/Competitions.svelte";
</script>

<svelte:head>
    <title>CV » Mathias Magnusson</title>
</svelte:head>

<main>
    <WorkExperiences />
    <Education />
    <Interests />
    <Knowledge />
    <!-- <Projects /> -->
    <Competitions />
    <!-- references -->
</main>

<style>
</style>
