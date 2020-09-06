import { App } from 'vue'

import {
  Button,
  message,
  Form,
  Input
} from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

export default {
  install(app: App) {
    app.config.globalProperties.$message = message
    app.use(Button)
    app.use(Form)
    app.use(Input)
  }
}
