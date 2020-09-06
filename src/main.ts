import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 自定义antd组件加载
import Antd from './plugins/antd'
import BcComponents from './components/global'

createApp(App)
  .use(Antd)
  .use(BcComponents)
  .use(store)
  .use(router)
  .mount('#app')
