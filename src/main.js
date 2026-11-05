import { createApp } from 'vue'
import 'animate.css';
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import vueLazyload from 'vue-lazyload'
const pinia = createPinia()
createApp(App).use(pinia).use(vueLazyload).use(router).mount('#app')
