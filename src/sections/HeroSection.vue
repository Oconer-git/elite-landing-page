<template>
    <section class="bg-hero bg-cover bg-center bg-no-repeat bg-opacity-20">
        <!-- for white fade effect -->
        <div class="relative bg-gradient-to-b from-white via-white/90 to-white z-20"> 
            <div class="container font-sfBold flex flex-col h-[70rem] w-full  pt-[8rem] pb-[4rem] px-[2rem] z-30">
                <img src="@/assets/eliteTechLogo.png" alt="logo" class="w-1/2" />
                <p class="text-[4.8rem]/[5rem] font-bold text-gray-800">Buy your gadgets at </p>
                <h1 
                    :class="['font-[800] text-[6.4rem]/[6.6rem] drop-shadow-xl bg-clip-text text-transparent', currentGradient]"
                >
                    Elite Tech Shop
                </h1>
                <p class="text-[1.8rem]/[2.2rem] font-[500] text-gray-800 my-[1rem]">
                    {{ eliteShopMessage }}
                </p>

                <button 
                    :class="['rounded-[4rem] w-1/2 h-[5rem] text-[2.4rem]/[2.8rem] mt-[2rem] py-[1.2rem] shadow-xl text-white', currentGradient]"
                    @mouseover="hovered = true"
                    @mouseleave="hovered = false"
                >
                    Contact Us
                </button>

                <div 
                    class="bg-black/90 text-white text-[1.2rem] text-center relative w-1/2 left-[20rem] bottom-[3.2rem] z-30 p-[1rem] font-[300] rounded-[4rem]" 
                    v-show="hovered"
                    @mouseover="hovered = true"
                    @mouseleave="hovered = false"
                >
                    You can also message us at our phone number
                    <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-[1rem] h-[1rem] inline align-middle" viewBox="0 -960 960 960">
                        <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/>
                    </svg>
                    {{ phoneNumber }}
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HeroSection',
    data() {
        return {
            eliteShopMessage: "Whether you're upgrading, repairing, or looking for the perfect gadget, we bring you top-quality tech with unbeatable service.",
            gradients: [
                'bg-gradient-to-br from-cyan-700 via-purple-800 to-pink-900',
                'bg-gradient-to-br from-blue-700 via-indigo-800 to-violet-900',
                'bg-gradient-to-br from-green-700 via-teal-800 to-blue-900',
                'bg-gradient-to-br from-emerald-700 via-lime-800 to-green-900',
                'bg-gradient-to-br from-yellow-700 via-pink-800 to-purple-900',
                'bg-gradient-to-br from-orange-700 via-amber-800 to-red-900',
                'bg-gradient-to-br from-gray-700 via-zinc-800 to-neutral-900'
            ],
            currentIndex: 0,
            phoneNumber: '0945 183 0445',
            currentGradient: 'bg-gradient-to-br from-cyan-700 via-purple-800 to-pink-900',
            hovered: false // Controls visibility
        };
    },
    mounted() {
        this.startGradientChange();
    },
    beforeUnmount() {
        clearInterval(this.gradientInterval);
    },
    methods: {
        startGradientChange() {
            this.gradientInterval = setInterval(() => {
                this.currentIndex = (this.currentIndex + 1) % this.gradients.length;
                this.currentGradient = this.gradients[this.currentIndex];
            }, 4000); // Changing colors every 4 seconds
        }
    }
};
</script>
