<script>
    import { page } from "$app/stores";
    import { projects } from "$lib/data.js";

    $: slug = $page.params.slug;
    $: project = projects.find((p) => p.slug === slug);
</script>

{#if project}
    <section class="min-h-screen py-32 px-8 bg-swiss-gray">
        <div class="max-w-[1200px] mx-auto w-full">
            <a
                href="/"
                class="inline-flex items-center gap-2 mb-12 text-[11px] font-bold uppercase tracking-[0.2em] text-black hover:text-swiss-red transition-colors no-underline group"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="group-hover:-translate-x-1 transition-transform"
                    ><path d="m15 18-6-6 6-6" /></svg
                >
                Back to Home
            </a>

            <div class="grid grid-cols-12 gap-12">
                <div class="col-span-12 md:col-span-8">
                    <span
                        class="text-xs font-semibold uppercase tracking-widest text-swiss-red mb-4 block"
                    >
                        {project.tag} / {project.year}
                    </span>
                    <h1
                        class="text-5xl md:text-8xl font-bold text-black mb-12 tracking-tight leading-none"
                    >
                        {project.title}
                    </h1>
                    <p
                        class="text-2xl md:text-4xl font-light mb-16 leading-tight text-swiss-muted max-w-4xl italic"
                    >
                        "{project.description}"
                    </p>

                    <div class="flex flex-wrap gap-4 mt-8">
                        {#each project.tech as t}
                            <span
                                class="px-6 py-2 bg-white border border-black/5 shadow-sm rounded-full font-bold text-[10px] uppercase tracking-widest text-black"
                            >
                                {t}
                            </span>
                        {/each}
                    </div>
                </div>

                <div
                    class="col-span-12 md:col-span-4 flex flex-col justify-end"
                >
                    <div
                        class="p-12 bg-white rounded-[3rem] shadow-2xl border border-black/5"
                    >
                        <h3
                            class="text-2xl font-bold mb-8 border-b border-black/5 pb-4"
                        >
                            Engineering Specs
                        </h3>
                        <ul
                            class="space-y-6 font-bold uppercase text-[10px] tracking-[0.2em] text-swiss-muted"
                        >
                            <li class="flex justify-between">
                                <span>/ Role</span>
                                <span class="text-black">Lead Eng</span>
                            </li>
                            <li class="flex justify-between">
                                <span>/ Context</span>
                                <span class="text-black">Research</span>
                            </li>
                            <li class="flex justify-between">
                                <span>/ Timeline</span>
                                <span class="text-black">Q4 2023</span>
                            </li>
                        </ul>
                        <a
                            href="/"
                            class="inline-flex items-center justify-center w-full mt-12 px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-swiss-red transition-colors no-underline"
                        >
                            Back to Works
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
{:else}
    <div class="min-h-screen flex items-center justify-center">
        <h1 class="text-9xl font-black text-black/5 italic">404</h1>
    </div>
{/if}
