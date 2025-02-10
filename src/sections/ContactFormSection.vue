<template>
    <section class="bg-whitesmoke">
        <div class="container px-[2rem] pt-[1rem] pb-[8rem]">
            <HeadingText>Contact Us</HeadingText>
            <SubHeadingText>Have questions? We're here to help! Reach out to us for inquiries, support, or assistance.</SubHeadingText>
            <form></form>
        </div>
    </section>
</template>

<script>
    import HeadingText from '@/components/HeadingText.vue'
    import SubHeadingText from '@/components/SubHeadingText.vue'

    export default {
        name: 'ContactFormSection',
        components: {
            HeadingText,
            SubHeadingText,
        }
    }
</script>


  