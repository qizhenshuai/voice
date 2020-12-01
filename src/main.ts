import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
// 自定义element plus组件加载
import BcComponents from './components/global'
import ElementPlus from './plugins/element'

const app = createApp(App)

app
  .use(BcComponents)
  .use(ElementPlus)
  .use(store)
  .use(router)

app.mount('#app')
