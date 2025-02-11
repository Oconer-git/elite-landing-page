<template>
    <section class="bg-whitesmoke scroll-mt-[8rem]" id="contactUs">
        <div class="container px-[2rem] pt-[1rem] md:px-[3rem] pb-[8rem] w-full max-w-[120rem]">
            <HeadingText>Contact Us</HeadingText>
            <SubHeadingText>Have questions? We're here to help! Reach out to us for inquiries, support, or assistance.</SubHeadingText>
            <div class="flex flex-col lg:flex-row gap-[3rem] lg:gap-[1rem] my-[2rem] pt-[2rem]">
                <ContactForm/>
                <GoogleMap/>
            </div>
        </div>
    </section>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue';
import GoogleMap from '@/components/GoogleMap.vue';
import HeadingText from '@/components/HeadingText.vue';
import SubHeadingText from '@/components/SubHeadingText.vue';

export default {
    name: 'ContactFormSection',
    components: {
        HeadingText,
        SubHeadingText,
        ContactForm,
        GoogleMap,
    }
}
</script>


  