import { createApp } from 'vue';
import App from './App.vue';

import '@/assets/index.css';
import Toaster from "@meforma/vue-toaster";
import router from './router';

createApp(App).use(Toaster).use(router).mount('#app')

