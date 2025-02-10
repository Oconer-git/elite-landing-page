<template>
    <header class="w-full bg-gradient-to-br from-slate-50 via-white shadow-sm border-b-[0.2rem] to-gray-50 fixed top-0 z-50">
      <div class="container px-[1rem] flex flex-row justify-between items-center h-[4.5rem] py-[0.2rem]">
        <figure class="flex flex-row gap-[0.5rem] items-center">
            <img src="@/assets/eliteTechLogo.png" alt="logo" class="w-[4rem] h-[4rem]" />
            <figcaption class="hidden text-[1.8rem]/[2rem]">ELITE TECH</figcaption>
        </figure>
        <nav class="flex flex-row items-center justify-center">
          <HamburgerDropdown />
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  import HamburgerDropdown from '@/components/HamburgerDropdown.vue';
  
  export default {
    name: 'HeaderSection',
    components: {
      HamburgerDropdown
    }
  }
  </script>
  