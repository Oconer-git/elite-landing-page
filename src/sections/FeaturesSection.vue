<template>
    <section class="bg-whitesmoke">
        <div class="container px-[2rem] py-[8rem]">
            <HeadingText>Our Products</HeadingText>
            <SubHeadingText>Explore. Experience. Elevate.</SubHeadingText>
            <CarouselContainer :name="macs.name" :products="macs.products"/>
            <CarouselContainer :name="iPhones.name" :products="iPhones.products"/>
            <CarouselContainer :name="iPads.name" :products="iPads.products"/>
        </div>
    </section>
</template>

<script>
    import HeadingText from '@/components/HeadingText.vue'
    import SubHeadingText from '@/components/SubHeadingText.vue'
    import CarouselContainer from '@/components/CarouselContainer.vue'
    import {macs} from '@/data.js'
    import {iPhones} from '@/data.js'
    import {iPads} from '@/data.js'

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
            };
        }
    }
</script>


  