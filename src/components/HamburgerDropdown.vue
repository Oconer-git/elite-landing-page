<template>
    <div>
        <!-- Button to Open Modal -->
        <button @click="showModal = true" class="py-[1rem] block sm:hidden">        
            <svg xmlns="http://www.w3.org/2000/svg" class="fill-current font-[300] text-gray-500 w-[2.4rem] h-[2.4rem]" viewBox="0 -960 960 960"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
        </button>

        <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-black/90">
            <div class="bg-white p-6 rounded-lg shadow-lg w-11/12">
                <div class="flex justify-between items-center">
                    <img src="@/assets/logo.svg" alt="logo" class="w-[3rem] h-[3rem]" />
                    <button @click="showModal = false" class="text-gray-500 hover:text-gray-700 text-[2rem]">&times;</button>
                </div>
                <div class="flex flex-col gap-[1rem] font-bold text-[1.6rem]/[2rem]">
                    <button v-for="bookmark in bookmarks" :key="bookmark.id" class="text-gray-800 hover:text-gray-700">
                        {{bookmark.name}}
                    </button>
                </div>
                <button @click="showModal = false" class="px-4 py-2 bg-red-500 text-white text-[1.6rem]/[1.8rem] mt-[1.6rem] font-bold rounded w-full bg-gradient-to-br from-[#32bef0] via-[#00adee] to-[#0182b3]">
                    Contact
                </button>
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
    }
}
</script>

  