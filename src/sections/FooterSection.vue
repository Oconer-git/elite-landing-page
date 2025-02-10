<template>
    <footer class="bg-gray-900 text-white text-center px-[3rem] py-6">
        <div class="max-w-6xl mx-auto">
            <p class="text-[1.2rem]">&copy; {{ new Date().getFullYear() }} Elite Tech Shop. All rights reserved.</p>
            <nav>
                <ul class="flex justify-center space-x-6 mt-2">
                    <li><a href="/privacy" class="hover:underline">Privacy Policy</a></li>
                    <li><a href="/terms" class="hover:underline">Terms of Service</a></li>
                    <li><a href="/contact" class="hover:underline">Contact</a></li>
                </ul>
            </nav>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'FooterSection',
        components: {
        
        }
    }
</script>


  