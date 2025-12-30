<script>
  export let research = [];
  export let experience = [];
</script>

<section id="experience" class="py-24 px-8 reveal bg-white">
  <div class="max-w-[1200px] mx-auto grid grid-cols-12 gap-12">
    <!-- LEFT: RESEARCH -->
    <div class="col-span-12 md:col-span-6 pr-0 md:pr-12">
      <span
        class="text-xs font-semibold uppercase tracking-widest text-swiss-red mb-4 block"
        >Academic Research</span
      >
      <h2 class="text-4xl md:text-5xl font-bold text-black mb-10 leading-tight">
        Thinking.
      </h2>

      <div class="space-y-8">
        {#each research as item}
          <div
            class="p-12 bg-swiss-gray rounded-[2.5rem] border border-black/5 hover:bg-white hover:shadow-2xl transition-all duration-700 group"
          >
            <p class="text-2xl font-bold italic mb-10 leading-snug text-black">
              "{item.title}"
            </p>
            <div class="flex flex-col gap-6">
              <p class="text-swiss-muted font-medium leading-relaxed">
                {item.description}
              </p>
              {#if item.link}
                <a
                  href={item.link}
                  target="_blank"
                  class="inline-flex items-center justify-center px-10 py-4 bg-black text-white font-bold rounded-full hover:scale-105 transition-transform no-underline"
                >
                  Read Publication
                </a>
              {/if}
            </div>
          </div>
        {/each}
      </div>
    </div>

    <!-- RIGHT: EXPERIENCE -->
    <div class="col-span-12 md:col-span-6 mt-12 md:mt-0">
      <span
        class="text-xs font-semibold uppercase tracking-widest text-swiss-red mb-4 block"
        >Professional Stage</span
      >
      <h2 class="text-4xl md:text-5xl font-bold text-black mb-10 leading-tight">
        Doing.
      </h2>

      <div class="space-y-8">
        {#each experience as job}
          <div
            class="p-10 border border-black/5 bg-white rounded-[2.5rem] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
          >
            <div class="flex justify-between items-center mb-6">
              <span class="font-bold text-swiss-red text-sm tracking-tighter"
                >{job.duration}</span
              >
              <span
                class="px-4 py-1.5 bg-swiss-gray rounded-full text-[10px] font-black uppercase tracking-[0.2em] leading-none text-swiss-muted"
                >{job.type}</span
              >
            </div>
            <h3
              class="text-2xl font-bold mb-4 group-hover:text-swiss-red transition-colors"
            >
              {job.title}
            </h3>
            <p class="text-swiss-muted font-medium leading-relaxed">
              {job.description}
            </p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
