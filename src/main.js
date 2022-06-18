import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './utils/rem'
import 'normalize.css'
import 'vant/lib/index.css'

createApp(App).use(router).use(store).mount('#app')
