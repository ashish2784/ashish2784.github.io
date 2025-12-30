<script>
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";

  /**
   * @param {MouseEvent} e
   * @param {string} targetId
   */
  async function handleScroll(e, targetId) {
    if ($page.url.pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(targetId.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }
</script>

<nav
  class="fixed top-0 left-0 w-full z-[100] backdrop-blur-md bg-white/70 border-b border-black/5"
>
  <div
    class="max-w-[1200px] mx-auto flex justify-between items-center py-5 px-8"
  >
    <a href="/" class="group flex items-center gap-2 no-underline text-black">
      <div
        class="w-7 h-7 bg-swiss-red rounded-lg rotate-45 group-hover:rotate-225 transition-transform duration-500"
      ></div>
      <div class="font-bold text-xl uppercase tracking-tighter ml-2">
        ASHISH <span class="text-swiss-muted font-light">T</span>
      </div>
    </a>

    <div
      class="hidden md:flex items-center gap-10 font-bold uppercase text-[11px] tracking-[0.2em] text-black"
    >
      <a
        href="/#about"
        on:click={(e) => handleScroll(e, "#about")}
        class="hover:text-swiss-red transition-colors no-underline">About</a
      >
      <a
        href="/#projects"
        on:click={(e) => handleScroll(e, "#projects")}
        class="hover:text-swiss-red transition-colors no-underline">Projects</a
      >
      <a
        href="/#certifications"
        on:click={(e) => handleScroll(e, "#certifications")}
        class="hover:text-swiss-red transition-colors no-underline"
        >Certifications</a
      >
      <a
        href="/#contact"
        on:click={(e) => handleScroll(e, "#contact")}
        class="hover:text-swiss-red transition-colors no-underline">Contact</a
      >
    </div>

    <button
      class="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5"
      aria-label="Toggle Menu"
    >
      <div class="w-full h-0.5 bg-black"></div>
      <div class="w-2/3 h-0.5 bg-black"></div>
    </button>
  </div>
</nav>
