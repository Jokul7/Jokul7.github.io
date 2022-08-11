import { createApp } from 'vue'
import { Toast } from 'vant'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/index'
import './utils/rem'
import 'normalize.css'
import 'vant/es/toast/style'

const app = createApp(App)
app.use(Toast).use(router).use(createPinia()).mount('#app')
