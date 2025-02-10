<template>
        <HeaderSection/>
        <HeroSection/>
        <UpgradeSection/>
        <FeaturesSection/>
        <ContactFormSection/>
        <FooterSection/>
</template>

<script>
    import HeaderSection from './sections/HeaderSection.vue';
    import HeroSection from './sections/HeroSection.vue';
    import UpgradeSection from './sections/UpgradeSection.vue';
    import FeaturesSection from './sections/FeaturesSection.vue';
    import ContactFormSection from './sections/ContactFormSection.vue';
    import FooterSection from './sections/FooterSection.vue';

    export default {
        name: 'App',
        components: {
            HeaderSection,
            HeroSection,
            UpgradeSection,
            FeaturesSection,
            ContactFormSection,
            FooterSection,
        }
    }
</script>

