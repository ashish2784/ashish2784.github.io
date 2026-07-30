<script>
    import { fly } from "svelte/transition";
    import {
        getLocalPortfolioResponse,
        normalizeChatResponse,
    } from "$lib/chatFallback.js";

    let isOpen = false;
    let query = "";
    let messages = [
        {
            role: "assistant",
            content: "Hi! I'm your AI assistant. How can I help you today?",
        },
    ];
    let isLoading = false;
    /** @type {HTMLDivElement | null} */
    let chatContainer;

    function getBackendBaseUrl() {
        const configuredUrl = import.meta.env.VITE_CHAT_API_URL?.trim();

        if (configuredUrl) {
            return configuredUrl.replace(/\/$/, "");
        }

        if (typeof window !== "undefined") {
            const hostname = window.location.hostname;
            if (hostname === "localhost" || hostname === "127.0.0.1") {
                return "http://127.0.0.1:8000";
            }
        }

        return "";
    }

    async function sendMessage() {
        if (!query.trim() || isLoading) return;

        const userMessage = query;
        query = "";
        messages = [...messages, { role: "user", content: userMessage }];
        isLoading = true;

        const backendBaseUrl = getBackendBaseUrl();

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);

        try {
            if (backendBaseUrl) {
                const response = await fetch(`${backendBaseUrl}/api/chat`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ message: userMessage }),
                    signal: controller.signal,
                });

                if (response.ok) {
                    const data = await response.json();
                    messages = [
                        ...messages,
                        {
                            role: "assistant",
                            content: normalizeChatResponse(data.response),
                        },
                    ];
                    scrollToBottom();
                    return;
                }
            }
        } catch (err) {
            console.warn("Chat backend unavailable, using local fallback.", err);
        } finally {
            clearTimeout(timeoutId);
            isLoading = false;
        }

        messages = [
            ...messages,
            {
                role: "assistant",
                content: getLocalPortfolioResponse(userMessage),
            },
        ];
        scrollToBottom();
    }

    function scrollToBottom() {
        setTimeout(() => {
            if (chatContainer) {
                chatContainer.scrollTop = chatContainer.scrollHeight;
            }
        }, 50);
    }

    function toggleChat() {
        isOpen = !isOpen;
        if (isOpen) scrollToBottom();
    }
</script>

<div class="fixed bottom-8 right-8 z-[200]">
    <!-- Toggle Button -->
    <button
        on:click={toggleChat}
        class="w-16 h-16 bg-swiss-red text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 group"
    >
        {#if isOpen}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                ><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg
            >
        {:else}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="group-hover:rotate-12 transition-transform"
                ><path
                    d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                /></svg
            >
        {/if}
    </button>

    <!-- Chat Window -->
    {#if isOpen}
        <div
            transition:fly={{ y: 20, duration: 400 }}
            class="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] bg-white rounded-[2.5rem] shadow-2xl border border-black/5 flex flex-col overflow-hidden"
        >
            <!-- Header -->
            <div
                class="p-6 bg-black text-white flex items-center justify-between"
            >
                <div class="flex items-center gap-3">
                    <div
                        class="w-8 h-8 bg-swiss-red rounded-lg rotate-45"
                    ></div>
                    <div>
                        <h3 class="font-bold text-sm tracking-widest uppercase">
                            Agent Ashish
                        </h3>
                        <div class="flex items-center gap-1.5">
                            <span
                                class="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"
                            ></span>
                            <span
                                class="text-[10px] opacity-60 uppercase font-black tracking-tighter"
                                >Online</span
                            >
                        </div>
                    </div>
                </div>
            </div>

            <!-- Messages -->
            <div
                bind:this={chatContainer}
                class="flex-1 overflow-y-auto p-6 space-y-4 bg-swiss-gray/30"
            >
                {#each messages as msg}
                    <div
                        class="flex {msg.role === 'user'
                            ? 'justify-end'
                            : 'justify-start'}"
                    >
                        <div
                            class="max-w-[80%] p-4 rounded-2xl text-sm font-medium leading-relaxed
                            {msg.role === 'user'
                                ? 'bg-black text-white rounded-tr-none'
                                : 'bg-white border border-black/5 text-black rounded-tl-none'} shadow-sm"
                        >
                            {msg.content}
                        </div>
                    </div>
                {/each}
                {#if isLoading}
                    <div class="flex justify-start">
                        <div
                            class="bg-white border border-black/5 p-4 rounded-2xl rounded-tl-none shadow-sm flex gap-1"
                        >
                            <span
                                class="w-1.5 h-1.5 bg-swiss-muted rounded-full animate-bounce"
                            ></span>
                            <span
                                class="w-1.5 h-1.5 bg-swiss-muted rounded-full animate-bounce"
                                style="animation-delay: 0.2s"
                            ></span>
                            <span
                                class="w-1.5 h-1.5 bg-swiss-muted rounded-full animate-bounce"
                                style="animation-delay: 0.4s"
                            ></span>
                        </div>
                    </div>
                {/if}
            </div>

            <!-- Input -->
            <div class="p-4 bg-white border-t border-black/5">
                <form on:submit|preventDefault={sendMessage} class="relative">
                    <input
                        bind:value={query}
                        placeholder="Type your message..."
                        class="w-full pl-6 pr-14 py-4 bg-swiss-gray rounded-full text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-swiss-red/20 transition-all border-none"
                    />
                    <button
                        type="submit"
                        aria-label="Send message"
                        disabled={!query.trim() || isLoading}
                        class="absolute right-2 top-2 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-swiss-red transition-colors disabled:opacity-50"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            ><path d="m22 2-7 20-4-9-9-4Z" /><path
                                d="M22 2 11 13"
                            /></svg
                        >
                    </button>
                </form>
            </div>
        </div>
    {/if}
</div>
