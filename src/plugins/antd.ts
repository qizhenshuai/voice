import { App } from 'vue'

import {
  Button,
  message
} from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

export default {
  install(app: App) {
    app.config.globalProperties.$message = message
    app.use(Button)
  }
}
