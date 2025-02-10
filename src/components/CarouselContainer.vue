<template>
    <div class="my-[2rem] py-[2rem]">
        <h2 class="font-sfBold text-[2rem]/[2.2rem] pl-[0.5rem]">{{name}}</h2>
        <Carousel v-bind="carouselConfig">
            <Slide v-for="product in products" :key="product.id">
                <div class="shadow-md rounded-b-[1rem]">
                    <img class="rounded-t-[1rem]" v-bind:src="product.imageSrc" :alt="product.name" />
                    <div class="px-[1rem] py-[0.5rem] bg-gray-200 rounded-b-[1rem]">
                        <p class="font-sfBold text-[1.6rem]/[1.8rem]">{{product.name}}</p>
                        <p class="font-sfMedium text-[1.4rem]/[1.6rem]">{{product.price}}</p>
                    </div>
                </div>
            </Slide>
            <template #addons>
                <Navigation />
            </template>
        </Carousel>
    </div>
</template>

<script>
    import { Carousel, Navigation, Slide } from 'vue3-carousel';
import 'vue3-carousel/carousel.css';
    export default {
        name: 'ProductsSection',
        components: {
            Carousel,
            Slide,
            Navigation,
        },
        props: {
            name: {
                type: String,
                required: true
            },
            products: {
                type: Array,
                required: true
            },
        },
        data() {
            return {
                carouselConfig: {
                    itemsToShow: 3,
                    wrapAround: true,
                },
            };
        }
    }
</script>


  