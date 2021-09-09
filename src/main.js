import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/styles/style.scss'

// iconPicker
import eIconPicker from 'e-icon-picker';
import "e-icon-picker/lib/symbol.js"; //基本彩色图标库
import 'e-icon-picker/lib/index.css'; // 基本样式，包含基本图标
import 'font-awesome/css/font-awesome.min.css'; //font-awesome 图标库


const app = createApp(App)

app.use(eIconPicker, {
    FontAwesome: true,
    // ElementUI: true,
    eIcon: true,//自带的图标，来自阿里妈妈
    eIconSymbol: true,//是否开启彩色图标
    addIconList: [],
    removeIconList: [],
    zIndex: 3100//选择器弹层的最低层,全局配置
})

app.use(store)
app.use(ElementPlus)
app.mount('#app')

