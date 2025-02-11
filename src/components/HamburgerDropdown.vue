<template>
    <div>
        <!-- Button to Open Modal -->
        <button @click="showModal = true" class="py-[1rem] block sm:hidden">        
            <svg xmlns="http://www.w3.org/2000/svg" class="fill-current font-[300] text-gray-500 w-[2.4rem] h-[2.4rem]" viewBox="0 -960 960 960"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
        </button>

        <div v-if="showModal" class="fixed inset-0 flex items-center justify-center font-sfBold bg-black bg-black/90">
            <div class="bg-white p-6 rounded-lg shadow-lg w-11/12">
                <div class="flex justify-between items-center">
                    <img src="@/assets/eliteTechLogo.png" alt="logo" class="w-[3rem] h-[3rem]" />
                    <button @click="showModal = false" class="text-gray-500 hover:text-gray-700 text-[2rem]">&times;</button>
                </div>
                <div class="flex flex-col gap-[1rem] font-bold text-[2.4rem]/[2.6rem]">
                    <button                     
                        v-for="bookmark in bookmarks" 
                        :key="bookmark.id"
                        @click="scrollToBookmark(bookmark.bookmark)" 
                        class="text-gray-800 hover:text-gray-700 hover:bg-gray-100">
                        {{bookmark.name}}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { bookmarks } from '@/data.js';

export default {
    name: 'HamburgerDropdown',
    data() {
        return {
            showModal: false,
            bookmarks,
        };
    },
    methods: {
        scrollToBookmark(bookmarkId) {
            const element = document.getElementById(bookmarkId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                this.showModal= false;
            }
        }
    }
}
</script>

  