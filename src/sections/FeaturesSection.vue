<template>
    <section class="bg-whitesmoke scroll-mt-[15rem]">
        <div class="container px-[2rem] py-[8rem] md:px-[3rem] w-full max-w-[120rem]">
            <HeadingText>Our Products</HeadingText> 
            <SubHeadingText>Explore. Experience. Elevate.</SubHeadingText>
            <CarouselContainer :name="macs.name" :products="macs.products"/>
            <CarouselContainer :name="iPhones.name" :products="iPhones.products"/>
            <CarouselContainer :name="iPads.name" :products="iPads.products"/>
            <CarouselContainer :name="watches.name" :products="watches.products"/>
            <CarouselContainer :name="laptops.name" :products="laptops.products"/>
        </div>
    </section>
</template>

<script>

import CarouselContainer from '@/components/CarouselContainer.vue';
import HeadingText from '@/components/HeadingText.vue';
import SubHeadingText from '@/components/SubHeadingText.vue';
import { iPads, iPhones, laptops, macs, watches } from '@/data.js';

export default {
    name: 'ProductsSection',
    components: {
        HeadingText,
        SubHeadingText,
        CarouselContainer,
    },
    data() {
        return {
            carouselConfig: {
                itemsToShow: 3,
                wrapAround: true,
            },
            macs,
            iPhones,
            iPads,
            watches,
            laptops
        };
    }
}

</script>


  