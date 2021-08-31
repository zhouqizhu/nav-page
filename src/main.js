import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/styles/style.scss'

const app = createApp(App)
app.use(store)
app.use(ElementPlus)
app.mount('#app')
