//vuetify
import '@splidejs/vue-splide'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createApp } from 'vue'


import './style.scss'
import App from './App.vue'

const vuetify = createVuetify({
    components,
    directives,
})

import {router} from './router'

createApp(App).use(router).use(vuetify).mount('#app')
