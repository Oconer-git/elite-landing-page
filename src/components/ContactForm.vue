<template>
    <form @submit.prevent="validateForm" class="font-sfMedium flex flex-col gap-[2rem] text-gray-700">
        <div class="flex flex-col md:flex-row gap-[2rem] md:gap-[1rem]">
            <div class="flex flex-row gap-[1rem] items-center md:basis-1/2">
                <label for="fullName" class="text-[2.2rem]/[2.4rem] w-[10rem]">Full Name:</label>
                <input v-model="form.fullName" type="text" name="fullName" id="fullName" class="border-[0.1rem] flex-grow py-[0.4rem] px-[1rem] text-[2rem]/[2.2rem] rounded-[0.4rem]" placeholder="First, Middle, Last"/>
            </div>
            <div class="flex flex-row gap-[1rem] items-center md:basis-1/2">
                <label for="email" class="text-[2.2rem]/[2.4rem]">Email:</label>
                <input v-model="form.email" type="email" name="email" id="email" class="border-[0.1rem] flex-grow py-[0.4rem] px-[1rem] text-[2rem]/[2.2rem] rounded-[0.4rem]" placeholder="hi@email.com"/>
            </div>
        </div>
        <div class="flex flex-col gap-[1rem]">
            <label for="message" class="text-[2.2rem]/[2.4rem]">Message:</label>
            <textarea v-model="form.message" name="message" id="message" rows="8" class="border-[0.1rem] w-full text-[1.8rem]/[2rem] p-[1rem] rounded-[0.4rem]" placeholder="Type your message here..."></textarea>
        </div>
        <button type="submit" class="w-full h-[4rem] bg-gray-300 rounded-[0.4rem] text-[2.2rem]/[2.4rem] py-[0.4rem] font-bold hover:scale-95 hover:bg-slate-400">Submit</button>
        <p v-if="error" class="text-red-500 text-[1.8rem]">{{ error }}</p>
    </form>
</template>

<script>
import { createToaster } from "@meforma/vue-toaster";

const toaster = createToaster(
    {
        position: 'bottom-right', 
        type: "success",
        duration: 3000,
        useDefaultCss: false
    });

export default {
    name: 'ContactForm',
    data() {
        return {
            form: {
                fullName: '',
                email: '',
                message: ''
            },
            error: ''
        };
    },
    methods: {
        validateForm() {
            this.error = '';
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!this.form.fullName || !this.form.email || !this.form.message) {
                this.error = 'All fields are required.';
                return;
            }
            if (!emailPattern.test(this.form.email)) {
                this.error = 'Please enter a valid email     address.';
                return;
            }
            toaster.show(`
            <svg xmlns="http://www.w3.org/2000/svg" class="inline fill-current text-white align-middle w-[2.6rem] h-[2.6rem]" viewBox="0 -960 960 960"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
            Successfully submitted`);
        }
    }
};
</script>
