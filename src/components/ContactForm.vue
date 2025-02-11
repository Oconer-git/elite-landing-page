<template>
    <form class="py-[2rem] font-sfMedium flex flex-col gap-[2rem] text-gray-700 my-[2rem]">
        <div class="flex flex-row gap-[1rem] items-center">
            <label for="fullName" class="text-[2.2rem]/[2.4rem]">Full Name:</label>
            <input type="text" name="fullName" id="fullName" class="flex-grow py-[0.4rem] px-[1rem] text-[2rem]/[2.2rem] rounded-[0.4rem]" placeholder="First, Middle, Last"/>
        </div>
        <div class="flex flex-row gap-[1rem] items-center">
            <label for="email" class="text-[2.2rem]/[2.4rem]">Email:</label>
            <input type="email" name="email" id="email" class="flex-grow py-[0.4rem] px-[1rem] text-[2rem]/[2.2rem] rounded-[0.4rem]" placeholder="hi@email.com"/>
        </div>
        <div class="flex flex-col gap-[1rem]">
            <label for="message" class="text-[2.2rem]/[2.4rem]">Message:</label>
            <textarea name="message" id="message" rows="8" class="w-full text-[1.8rem]/[2rem] p-[1rem] rounded-[0.4rem]" placeholder="Type your message here..."></textarea>
        </div>
        <button type="submit" class="w-full h-[4rem] bg-gray-300 rounded-[0.4rem] text-[2.2rem]/[2.4rem] py-[0.4rem] font-bold hover:scale-95 hover:bg-slate-400">Submit</button>
    </form>
</template>

<script>
    export default {
        name: 'ContactForm',
    }
</script>
