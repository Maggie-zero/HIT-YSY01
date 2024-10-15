import { createApp } from 'vue'
import App from './App.vue'
import './styles/myTailwind.css'
import store from './store'
import router from './router'
import './router/permission'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router).use(store).use(ElementPlus, { locale: zhCn, }).mount('#app')
