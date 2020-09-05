import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 自定义antd组件加载
import Antd from './plugins/antd'

createApp(App)
  .use(Antd)
  .use(store)
  .use(router)
  .mount('#app')
