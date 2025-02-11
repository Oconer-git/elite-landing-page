<template>
    <section :class="[currentWallpaper, 'bg-cover', 'bg-center', 'bg-no-repeat', 'scroll-mt-[15rem]']">
        <!-- for white fade effect -->
        <div class="relative h-full bg-gradient-to-b from-white/70 via-gray-100/75 to-white/70 py-[8rem] z-20">
            <div class="container flex flex-col w-full max-w-[120rem] h-[70.3rem] sm:h-[78rem] md:h-[90rem] lg:h-[95rem] xl:h-[80rem] z-30">
                <section class="flex flex-col px-[2rem] md:px-[3.2rem] space-y-[1rem]">
                    <HeadingText>Upgrade Your Life</HeadingText>
                    <SubHeadingText>Bringing You the Best in iPhone, Android, Mac, and More!</SubHeadingText>
                </section>
                <img src="@/assets/upgrade/upgrade-phone.png" alt="iphone" class="w-3/4 lg:w-1/2 my-[1.2rem] xl:relative xl:right-[10rem]"  />
                <section class="flex flex-col px-[2rem] md:px-[3.2rem] text-right space-y-[1rem]">
                    <HeadingText>Your Destination for Premium Phones & Gadgets</HeadingText>
                    <SubHeadingText>Whether you're upgrading, repairing, or finding the perfect tech, we’ve got you covered with great service.</SubHeadingText>
                </section>
            </div>
        </div>
    </section>
</template>
  
<script>

import HeadingText from '@/components/HeadingText.vue';
import SubHeadingText from '@/components/SubHeadingText.vue';
import { upgradeWallpapers } from '@/data.js';
    
export default {
    name: 'UpgradeSection',
    data() {
        return {
            upgradeWallpapers,
            currentWallpaper: 'bg-upgrade',
            currentIndex: 1, 
        };
    },
    components: {
        HeadingText,
        SubHeadingText
    },
    mounted() {
        this.setWallpaperInterval();
    },
    beforeUnmount() {
        clearInterval(this.wallpaperInterval); // Clean up the interval when the component is destroyed
    },
    methods: {
        setWallpaperInterval() {
            this.wallpaperInterval = setInterval(() => {
            this.currentIndex = (this.currentIndex + 1) % this.upgradeWallpapers.length;
            this.currentWallpaper = this.upgradeWallpapers[this.currentIndex].wallpaper;
            }, 3000); 
        }
    }
}

</script>
  
  
  