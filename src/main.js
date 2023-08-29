import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import '@splidejs/vue-splide'
import {router} from './router'

createApp(App).use(router).mount('#app')
