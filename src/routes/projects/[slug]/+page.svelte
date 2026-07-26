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
                        class="text-5xl md:text-8xl font-bold text-black mb-8 tracking-tight leading-none"
                    >
                        {project.title}
                    </h1>
                    <p
                        class="text-2xl md:text-4xl font-light mb-10 leading-tight text-swiss-muted max-w-4xl italic"
                    >
                        "{project.description}"
                    </p>

                    <div class="flex flex-wrap gap-4 mb-12">
                        {#each project.tech as t}
                            <span
                                class="px-6 py-2 bg-white border border-black/5 shadow-sm rounded-full font-bold text-[10px] uppercase tracking-widest text-black"
                            >
                                {t}
                            </span>
                        {/each}
                    </div>

                    <div class="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-black/5">
                        <h2 class="text-2xl font-bold text-black mb-6">Case Study</h2>
                        <p class="text-lg leading-relaxed text-swiss-muted mb-8">{project.story}</p>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <h3 class="text-sm font-black uppercase tracking-[0.2em] text-swiss-red mb-4">Highlights</h3>
                                <ul class="space-y-3 text-sm font-medium text-black">
                                    {#each project.highlights as item}
                                        <li class="flex gap-3">
                                            <span class="w-2 h-2 rounded-full bg-swiss-red mt-2"></span>
                                            <span>{item}</span>
                                        </li>
                                    {/each}
                                </ul>
                            </div>
                            <div>
                                <h3 class="text-sm font-black uppercase tracking-[0.2em] text-swiss-red mb-4">Impact</h3>
                                <p class="text-sm leading-relaxed text-swiss-muted">{project.impact}</p>
                            </div>
                        </div>

                        <div class="flex flex-wrap gap-4">
                            {#if project.links?.github}
                                <a href={project.links.github} target="_blank" class="inline-flex items-center justify-center px-6 py-3 bg-black text-white font-bold rounded-full no-underline hover:bg-swiss-red transition-colors">View Code</a>
                            {/if}
                            {#if project.links?.demo}
                                <a href={project.links.demo} target="_blank" class="inline-flex items-center justify-center px-6 py-3 border border-black/10 text-black font-bold rounded-full no-underline hover:bg-swiss-gray transition-colors">View Demo</a>
                            {/if}
                            {#if project.links?.article}
                                <a href={project.links.article} target="_blank" class="inline-flex items-center justify-center px-6 py-3 border border-black/10 text-black font-bold rounded-full no-underline hover:bg-swiss-gray transition-colors">Read More</a>
                            {/if}
                        </div>
                    </div>
                </div>

                <div class="col-span-12 md:col-span-4 flex flex-col justify-start">
                    <div class="p-12 bg-white rounded-[3rem] shadow-2xl border border-black/5">
                        <h3 class="text-2xl font-bold mb-8 border-b border-black/5 pb-4">Engineering Specs</h3>
                        <ul class="space-y-6 font-bold uppercase text-[10px] tracking-[0.2em] text-swiss-muted">
                            <li class="flex justify-between gap-4">
                                <span>/ Role</span>
                                <span class="text-black text-right">{project.role}</span>
                            </li>
                            <li class="flex justify-between gap-4">
                                <span>/ Context</span>
                                <span class="text-black text-right">{project.context}</span>
                            </li>
                            <li class="flex justify-between gap-4">
                                <span>/ Timeline</span>
                                <span class="text-black text-right">{project.timeline}</span>
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
