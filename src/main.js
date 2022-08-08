import { createApp } from 'vue'
import { Search, Popup } from 'vant'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './utils/rem'
import 'normalize.css'

const app = createApp(App)
app.use(Popup).use(Search).use(router).use(store).mount('#app')
