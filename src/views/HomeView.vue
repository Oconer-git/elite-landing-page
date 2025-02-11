<template>
    <div>
        <HeroSection/>
        <UpgradeSection/>
        <FeaturesSection/>
        <ContactFormSection/>
    </div>
</template>

<script>

import ContactFormSection from '@/sections/ContactFormSection.vue';
import FeaturesSection from '@/sections/FeaturesSection.vue';
import HeroSection from '@/sections/HeroSection.vue';
import UpgradeSection from '@/sections/UpgradeSection.vue';

export default {
    name: 'HomeView',
    components: {
        HeroSection,
        UpgradeSection,
        FeaturesSection,
        ContactFormSection,
    }
}
</script>
