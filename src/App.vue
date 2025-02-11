<template>
    <HeaderSection/>
    <main>
        <router-view/>
    </main>
    <FooterSection/>
</template>

<script>

import FooterSection from '@/sections/FooterSection.vue';
import HeaderSection from '@/sections/HeaderSection.vue';

export default {
    components: {
        HeaderSection,
        FooterSection
    }
}

</script>
