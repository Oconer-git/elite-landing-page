<template>
    <header class="w-full bg-gradient-to-br from-slate-50 via-white shadow-sm border-b-[0.2rem] to-gray-50 fixed top-0 z-50">
        <div class="container px-[2rem] w-full max-w-[120rem] md:px-[3.2rem] flex flex-row justify-between items-center h-[4.5rem] py-[0.2rem]">
            <router-link to="/">
                <figure class="flex flex-row gap-[0.5rem] items-center">
                    <img src="@/assets/eliteTechLogo.png" alt="logo" class="w-[4rem] h-[4rem]" />
                    <figcaption class="hidden text-[1.8rem]/[2rem]">ELITE TECH</figcaption>
                </figure>
            </router-link>        
            <nav class="flex flex-row items-center justify-center gap-[1rem]">
                <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-black w-[2rem] h-[2rem]" viewBox="0 -960 960 960"><path d="M200-80q-33 0-56.5-23.5T120-160v-480q0-33 23.5-56.5T200-720h80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720h80q33 0 56.5 23.5T840-640v480q0 33-23.5 56.5T760-80H200Zm280-320q83 0 141.5-58.5T680-600h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85h-80q0 83 58.5 141.5T480-400ZM360-720h240q0-50-35-85t-85-35q-50 0-85 35t-35 85Z"/></svg>
                <button 
                    v-for="bookmark in bookmarks" 
                    :key="bookmark.id" 
                    @click="scrollToBookmark(bookmark.bookmark)"
                    class="text-gray-800 hidden sm:block hover:text-gray-700 text-[1.6rem]/[1.8rem] font-sfMedium"
                >
                    {{ bookmark.name }}
                </button>
                <HamburgerDropdown />
            </nav>
        </div>
    </header>
</template>

<script>
import HamburgerDropdown from '@/components/HamburgerDropdown.vue';
import { bookmarks } from '@/data.js';
export default {
    name: 'HeaderSection',
    components: {
        HamburgerDropdown,
    },
    data() {
        return {
            bookmarks
        }
    },
    methods: {
        scrollToBookmark(bookmarkId) {
            const element = document.getElementById(bookmarkId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }
}
</script>
  