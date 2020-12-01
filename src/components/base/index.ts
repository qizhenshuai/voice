import { App } from 'vue'
import Button from './Button.vue'
import Select from './Select.vue'

const install = function (app: App<Element>) {
  app.component(Button.name, Button)
  app.component(Select.name, Select)
}

export default install
