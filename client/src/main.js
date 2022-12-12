import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/base.css'
import './assets/mobile.css'
import './assets/prime.css'
import './assets/prueba.css'
import './assets/validacionCIF.css'
import './assets/font.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
