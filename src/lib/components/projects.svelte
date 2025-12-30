<script>
  import { projects } from "$lib/data.js";
</script>

<section id="projects" class="py-24 px-8 reveal">
  <div class="max-w-[1200px] mx-auto">
    <!-- Header -->
    <div
      class="flex flex-col md:flex-row justify-between items-start md:items-end mb-16"
    >
      <div>
        <span
          class="text-xs font-semibold uppercase tracking-widest text-swiss-red mb-4 block"
          >Portfolio</span
        >
        <h2
          class="text-4xl md:text-6xl font-bold text-black leading-tight tracking-tight"
        >
          Selected <br class="md:hidden" /> Projects.
        </h2>
      </div>
      <div
        class="font-bold text-swiss-muted text-xl mt-4 md:mt-0 italic tracking-tighter"
      >
        01 — 0{projects.length}
      </div>
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-12 gap-8">
      {#each projects as project}
        <div class="col-span-12 md:col-span-4 transition-all duration-700">
          <a
            href="/projects/{project.slug}"
            class="group block h-full bg-white p-10 rounded-[2.5rem] border border-black/5 no-underline relative overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_40px_100px_rgba(0,0,0,0.12)]"
          >
            <div class="relative z-10 flex flex-col h-full">
              <div class="flex justify-between items-start mb-12">
                <div
                  class="bg-swiss-gray px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-swiss-muted"
                >
                  {project.tag.split(" / ")[0]}
                </div>
                <span class="text-xs font-bold text-swiss-red opacity-100"
                  >{project.year}</span
                >
              </div>

              <h3
                class="text-3xl font-bold text-black mb-6 group-hover:text-swiss-red transition-colors leading-tight"
              >
                {project.title}
              </h3>
              <p
                class="text-lg text-swiss-muted font-medium mb-8 line-clamp-3 leading-relaxed"
              >
                {project.short}
              </p>

              <div
                class="mt-auto pt-10 border-t border-black/5 flex justify-between items-center group-hover:border-black/20 transition-colors"
              >
                <span
                  class="font-bold uppercase tracking-widest text-[10px] text-black"
                  >Exploration</span
                >
                <div
                  class="w-10 h-10 rounded-full bg-swiss-gray flex items-center justify-center group-hover:bg-swiss-red group-hover:text-white transition-all duration-500 shadow-sm"
                >
                  <span class="text-xl">→</span>
                </div>
              </div>
            </div>

            <!-- Backlight Effect with Tailwind -->
            <div
              class="absolute inset-x-0 top-0 h-64 bg-radial-gradient from-swiss-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            ></div>
          </a>
        </div>
      {/each}
    </div>
  </div>
</section>
