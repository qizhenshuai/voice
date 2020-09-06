import { App } from 'vue'

import {
  Button,
  message,
  Form,
  Input
} from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

const ANTD_NAMES = [
  Button,
  Form,
  Input
]

export default {
  install(app: App) {
    app.config.globalProperties.$message = message
    ANTD_NAMES.forEach(item => {
      /**
       * 如果使用 use.component(item.name, item) 会出现有的组件未export
       * 比如: FormItem组件未导出
       */
      app.use(item)
    })
  }
}
