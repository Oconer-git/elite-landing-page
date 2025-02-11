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
    },
    metaInfo: {
    title: 'Elite Tech Shop - Your Destination for Premium Tech',
    meta: [
            { 
                name: 'description', 
                content: 'Elite Tech Shop is your one-stop destination for the latest high-performance gaming laptops, iPhones, MacBooks, iPads, smartwatches, and more. We offer premium tech gadgets at unbeatable prices with fast shipping and top-notch customer service. Upgrade your tech today!' 
            },
            { 
                name: 'keywords', 
                content: 'gaming laptops, iPhones, MacBook, iPads, smartwatches, Apple products, tech gadgets, electronics store, best laptops, high-end PCs, premium tech, buy online, fast shipping' 
            },
            { property: 'og:title', content: 'Elite Tech Shop - Your Destination for Premium Tech' },
            { 
                property: 'og:description', 
                content: 'Looking for the latest tech? Elite Tech Shop offers high-end gaming laptops, Apple products, and premium electronics at unbeatable prices. Shop now for the best deals!' 
            },
        
        ]
    }

}
</script>
