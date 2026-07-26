<script>
  import { certifications, projects } from "$lib/data.js";
  /** @type {HTMLDivElement | null} */
  let scrollContainer = null;

  /**
   * @param {"left" | "right"} direction
   */
  function scroll(direction) {
    if (scrollContainer) {
      const scrollAmount = scrollContainer.clientWidth;
      scrollContainer.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  }
</script>

<section id="certifications" class="py-24 px-8 bg-swiss-gray reveal">
  <div class="max-w-[1200px] mx-auto relative group/slider">
    <div
      class="flex flex-col md:flex-row justify-between items-start md:items-end mb-16"
    >
      <div>
        <span
          class="text-xs font-semibold uppercase tracking-widest text-swiss-red mb-4 block"
          >Academic & Professional</span
        >
        <h2
          class="text-4xl md:text-6xl font-bold text-black leading-tight tracking-tight"
        >
          Verified <br class="md:hidden" /> Skills.
        </h2>
      </div>
      <div
        class="font-bold text-swiss-muted text-xl mt-4 md:mt-0 italic tracking-tighter"
      >
        01 — 0{certifications.length}
      </div>
    </div>

    <!-- Container with extra vertical padding for hover clearance -->
    <div class="relative">
      <!-- Arrows -->
      <button
        on:click={() => scroll("left")}
        class="absolute left-2 sm:left-[-50px] top-1/2 -translate-y-1/2 w-11 h-11 bg-white rounded-full shadow-lg items-center justify-center flex z-20 hover:scale-110 active:scale-95 transition-all text-black hover:text-swiss-red"
        aria-label="Previous"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"><path d="m15 18-6-6 6-6" /></svg
        >
      </button>

      <button
        on:click={() => scroll("right")}
        class="absolute right-2 sm:right-[-50px] top-1/2 -translate-y-1/2 w-11 h-11 bg-white rounded-full shadow-lg items-center justify-center flex z-20 hover:scale-110 active:scale-95 transition-all text-black hover:text-swiss-red"
        aria-label="Next"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg
        >
      </button>

      <div
        bind:this={scrollContainer}
        class="flex overflow-x-auto gap-4 sm:gap-6 md:gap-8 pt-10 pb-20 snap-x snap-mandatory no-scrollbar scroll-smooth px-2 sm:px-0"
      >
        {#each certifications as cert}
          <div
            class="w-[80vw] sm:w-[300px] md:w-[calc((100%-24px*3)/4)] flex-shrink-0 snap-start"
          >
            <a
              href="/certifications/{cert.slug}"
              class="group block h-full bg-white p-6 sm:p-8 md:p-10 rounded-[1.5rem] sm:rounded-[2rem] shadow-sm no-underline border border-black/5 transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
            >
              <div class="flex flex-col h-full justify-between">
                <div>
                  <div class="flex items-center gap-3 mb-8">
                    <div
                      class="w-8 h-8 rounded-lg bg-swiss-red/10 flex items-center justify-center"
                    >
                      <div class="w-2 h-2 bg-swiss-red rounded-full"></div>
                    </div>
                    <span
                      class="font-bold text-[10px] uppercase tracking-[0.3em] text-swiss-muted"
                    >
                      {cert.issuer}
                    </span>
                  </div>
                  <h3
                    class="text-2xl font-bold leading-tight text-black group-hover:text-swiss-red transition-colors"
                  >
                    {cert.title}
                  </h3>
                </div>

                <div class="mt-12 flex justify-between items-end">
                  <span class="text-xs font-bold uppercase text-swiss-muted"
                    >{cert.date}</span
                  >
                  <span
                    class="text-[10px] font-black text-swiss-red opacity-0 group-hover:opacity-100 transition-opacity tracking-widest"
                    >VERIFY</span
                  >
                </div>
              </div>
            </a>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
