<script>
  function openResume() {
    window.open(
      "https://drive.google.com/file/d/1-bW4M8LgiAhEtRjcC6PfBiKde-UcqsxT/view?usp=sharing",
      "_blank",
    );
  }
</script>

<section id="home" class="min-h-[90vh] flex items-center pt-32 px-8">
  <div class="max-w-[1200px] mx-auto w-full grid grid-cols-12 gap-8">
    <!-- Main Content -->
    <div class="col-span-12 md:col-span-8">
      <span
        class="text-xs font-semibold uppercase tracking-widest text-swiss-red mb-4 block"
        >GEN AI ENGINEER</span
      >
      <h1
        class="text-5xl md:text-8xl font-bold text-black mb-8 leading-[1.05] tracking-tight"
      >
        AI & <br />
        <span class="text-swiss-muted">Data Science.</span>
      </h1>
      <p
        class="text-xl md:text-3xl font-medium text-swiss-muted mb-12 max-w-2xl leading-tight"
      >
        Building intelligent, scalable systems with mathematical precision and
        human-centric design.
      </p>
      <div class="flex flex-wrap gap-6">
        <a
          href="#projects"
          class="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 no-underline"
        >
          Explore Works
        </a>
        <button
          on:click={openResume}
          class="inline-flex items-center justify-center px-8 py-4 border-2 border-black text-black font-semibold rounded-full hover:bg-swiss-gray transition-colors duration-300"
        >
          Resume
        </button>
      </div>
    </div>

    <!-- Side Feature Block -->
    <div class="hidden md:flex col-span-4 flex-col justify-center">
      <div
        class="p-10 bg-swiss-gray rounded-[2.5rem] border border-black/5 relative overflow-hidden group hover:shadow-2xl transition-all duration-700"
      >
        <div
          class="text-[10px] font-bold uppercase tracking-[0.3em] mb-4 text-swiss-red"
        >
          Current Focus
        </div>
        <p class="text-xl font-bold leading-snug text-black">
          "Large Language Models ,Cloud and Agentic AI architectures."
        </p>
        <div class="mt-8 pt-8 border-t border-black/10 flex items-center gap-4">
          <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span
            class="text-[10px] font-bold uppercase tracking-widest text-swiss-muted"
            >Live Project Lab</span
          >
        </div>
        <!-- Subtle Backlight -->
        <div
          class="absolute inset-0 bg-radial-gradient from-swiss-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        ></div>
      </div>
    </div>
  </div>
</section>
