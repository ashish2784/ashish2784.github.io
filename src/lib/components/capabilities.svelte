<script>
  import { capabilities, profileStats } from "$lib/data.js";
</script>

<section id="capabilities" class="py-24 px-8 bg-swiss-gray reveal">
  <div class="max-w-300 mx-auto">
    <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
      <div>
        <span class="text-xs font-semibold uppercase tracking-widest text-swiss-red mb-4 block">Capabilities</span>
        <h2 class="text-4xl md:text-6xl font-bold text-black leading-tight tracking-tight">
          What I build and how I think.
        </h2>
      </div>
      <p class="max-w-xl text-lg text-swiss-muted font-medium leading-relaxed mt-4 md:mt-0">
        A blend of applied AI, analytics, and product-minded engineering for thoughtful, measurable outcomes.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
      {#each capabilities as capability}
        <div class="bg-white rounded-4xl border border-black/5 p-8 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-500">
          <h3 class="text-2xl font-bold text-black mb-4">{capability.title}</h3>
          <p class="text-swiss-muted font-medium leading-relaxed mb-6">{capability.description}</p>
          <ul class="space-y-3 text-sm font-semibold text-black/80">
            {#each capability.highlights as item}
              <li class="flex items-start gap-3">
                <span class="w-2 h-2 bg-swiss-red rounded-full mt-2"></span>
                <span>{item}</span>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {#each profileStats as stat}
        <div class="bg-black text-white rounded-4xl p-8 border border-white/10">
          <div class="text-3xl md:text-4xl font-bold text-swiss-red mb-3">{stat.value}</div>
          <div class="text-sm uppercase tracking-[0.2em] opacity-70">{stat.label}</div>
        </div>
      {/each}
    </div>
  </div>
</section>
