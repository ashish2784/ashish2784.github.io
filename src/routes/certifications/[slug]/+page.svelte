<script>
    import { page } from "$app/stores";
    import { certifications } from "$lib/data.js";

    $: slug = $page.params.slug;
    $: cert = certifications.find((c) => c.slug === slug);
</script>

{#if cert}
    <section class="min-h-screen py-32 px-8 bg-black text-white">
        <div class="max-w-[1200px] mx-auto w-full">
            <a
                href="/"
                class="inline-flex items-center gap-2 mb-12 text-[11px] font-bold uppercase tracking-[0.2em] text-white hover:text-swiss-red transition-colors no-underline group"
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
                        {cert.issuer} / {cert.date}
                    </span>
                    <h1
                        class="text-5xl md:text-8xl font-bold text-white mb-12 tracking-tight leading-none"
                    >
                        {cert.title}
                    </h1>
                    <p
                        class="text-3xl font-bold mb-16 uppercase tracking-tighter opacity-30 italic"
                    >
                        Professional Authentication.
                    </p>

                    <a
                        href={cert.link}
                        target="_blank"
                        class="inline-flex items-center justify-center px-10 py-5 bg-swiss-red text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-500 no-underline shadow-[0_20px_40px_rgba(254,59,31,0.3)]"
                    >
                        Verify Credentials ↗
                    </a>
                </div>

                <div class="col-span-12 md:col-span-4 self-center">
                    <div
                        class="p-16 border-2 border-white/5 bg-zinc-900 rounded-[5rem] text-center relative overflow-hidden group"
                    >
                        <!-- Subtle glow -->
                        <div
                            class="absolute inset-x-0 top-0 h-full bg-radial-gradient from-swiss-red/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"
                        ></div>

                        <div class="relative z-10">
                            <div
                                class="text-[12rem] leading-none mb-8 font-thin text-swiss-red"
                            >
                                ✓
                            </div>
                            <h3 class="text-2xl font-bold mb-4">
                                AUTHENTICATED
                            </h3>
                            <p
                                class="text-[10px] font-black tracking-[0.3em] uppercase opacity-40"
                            >
                                Verified by {cert.issuer} Authority
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
{:else}
    <div class="min-h-screen flex items-center justify-center">
        <h1 class="text-9xl font-black text-white/5 italic">404</h1>
    </div>
{/if}
