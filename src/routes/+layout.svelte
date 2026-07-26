<script>
  import Nav from "$lib/components/nav.svelte";
  import Chatbot from "$lib/components/Chatbot.svelte";
  import "../app.css";
  import { onMount, tick } from "svelte";
  import { afterNavigate } from "$app/navigation";

  /** @type {IntersectionObserver | undefined} */
  let observer;

  function initObserver() {
    if (observer) {
      observer.disconnect();
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    const currentObserver = observer;
    if (currentObserver) {
      document
        .querySelectorAll(".reveal")
        .forEach((el) => currentObserver.observe(el));
    }
  }

  onMount(() => {
    initObserver();
  });

  afterNavigate(async () => {
    await tick();
    initObserver();
  });
</script>

<Nav />

<main class="pt-[80px]">
  <div class="animate-[fadeIn_0.45s_ease-out]">
    <slot />
  </div>
  <Chatbot />
</main>

<!-- FOOTER / CONTACT -->
<section
  id="contact"
  class="py-32 px-8 bg-black text-white reveal border-t border-white/5"
>
  <div class="max-w-[1200px] mx-auto grid grid-cols-12 gap-12">
    <div class="col-span-12 md:col-span-7 pr-12">
      <h2
        class="text-4xl md:text-6xl font-bold mb-16 leading-tight tracking-tight"
      >
        Let's build the <br /> future. Sync now.
      </h2>

      <div class="flex flex-wrap gap-x-12 gap-y-6 mt-12">
        <a
          href="mailto:a@gmail.com"
          class="flex items-center gap-3 text-2xl font-normal transition-all no-underline text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 122.88 92.12"
            width="24"
            height="24"
            aria-hidden="true"
          >
            <style type="text/css">
              .st0 {
                fill: #ea4335;
              }
              .st1 {
                fill: #c5221f;
              }
              .st2 {
                fill: #fbbc04;
              }
              .st3 {
                fill: #34a853;
              }
              .st4 {
                fill: #4285f4;
              }
            </style>
            <g>
              <path
                class="st4"
                d="M8.36,92.12h19.54V44.67L0,23.76v60.08C0,88.42,3.78,92.12,8.36,92.12L8.36,92.12z"
              />
              <path
                class="st3"
                d="M94.97,92.12h19.54c4.67,0,8.36-3.78,8.36-8.36v-60L94.97,44.67V92.12L94.97,92.12z"
              />
              <path
                class="st2"
                d="M94.97,8.4v36.27l27.91-20.91V12.58c0-10.37-11.82-16.25-20.11-10.05L94.97,8.4L94.97,8.4z"
              />
              <polygon
                class="st0"
                points="27.9,44.67 27.9,8.4 61.44,33.57 94.97,8.4 94.97,44.67 61.44,69.76 27.9,44.67"
              />
              <path
                class="st1"
                d="M0,12.58v11.18l27.91,20.91V8.4l-7.8-5.87C11.82-3.66,0,2.29,0,12.58L0,12.58z"
              />
            </g>
          </svg>
          Email
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          class="flex items-center gap-3 text-2xl font-normal transition-all no-underline text-white"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.98 3.5C4.98 4.49411 4.17411 5.3 3.18 5.3C2.18589 5.3 1.38 4.49411 1.38 3.5C1.38 2.50589 2.18589 1.7 3.18 1.7C4.17411 1.7 4.98 2.50589 4.98 3.5Z"
              fill="#0077B5"
            />
            <path d="M1.62 18.9999V7.12988H4.74V18.9999H1.62Z" fill="#0077B5" />
            <path
              d="M9.41998 18.9999V12.9899C9.41998 11.5199 9.38998 9.61988 11.41 9.61988C13.46 9.61988 13.78 11.2199 13.78 12.8799V18.9999H16.9V12.8699C16.9 8.78988 16.03 7.12988 12.44 7.12988C11.3934 7.11299 10.3756 7.55163 9.65 8.32988V7.12988H6.53V18.9999H9.41998Z"
              fill="#0077B5"
            />
          </svg>
          LinkedIn
        </a>
        <a
          href="https://github.com"
          target="_blank"
          class="flex items-center gap-3 text-2xl font-normal transition-all no-underline text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            width="24"
            height="24"
            aria-hidden="true"
            fill="currentColor"
          >
            <path
              d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"
            />
          </svg>
          GitHub
        </a>
      </div>
    </div>

    <div
      class="col-span-12 md:col-span-5 bg-white text-black flex flex-col justify-between p-12 rounded-[2.5rem] shadow-[0_50px_100px_rgba(254,59,31,0.15)] relative overflow-hidden group"
    >
      <!-- Subtle Backlight -->
      <div
        class="absolute inset-0 bg-radial-gradient from-swiss-red/10 to-transparent opacity-30 pointer-events-none"
      ></div>

      <div class="relative z-10">
        <span
          class="text-[10px] font-bold uppercase tracking-[0.3em] text-swiss-red mb-4 block"
          >Location</span
        >
        <div class="text-4xl font-bold leading-tight tracking-tighter">
          India / <span class="text-swiss-muted font-light">GMT +5:30</span>
        </div>
      </div>

      <div class="mt-20 relative z-10">
        <p
          class="text-lg font-medium text-swiss-muted mb-8 italic leading-relaxed"
        >
          Open to high-impact internships for the 2026 cohort. Let's engineer
          something meaningful.
        </p>
        <div
          class="pt-8 border-t border-black/5 flex justify-between items-center text-[10px] uppercase font-black tracking-widest opacity-40"
        >
          <span>© 2025 ASHISH T</span>
          <span>ALL RIGHTS RESERVED</span>
        </div>
      </div>
    </div>
  </div>
</section>


