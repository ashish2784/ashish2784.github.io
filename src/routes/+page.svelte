<script>
  import Hero from "$lib/components/hero.svelte";
  import About from "$lib/components/about.svelte";
  import Capabilities from "$lib/components/capabilities.svelte";
  import Cert from "$lib/components/cert.svelte";
  import Projects from "$lib/components/projects.svelte";
  import Research from "$lib/components/research.svelte";

  export let data;
</script>

<div class="space-y-20 mb-20">
  <Hero />
  <About />
  <Capabilities />
  <Projects />
  <Research research={data.research} experience={data.experience} />
  <Cert />
</div>
