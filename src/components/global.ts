import { App } from 'vue'

const componentContext = require.context('./', true, /.vue$/)

export default {
  install(app: App) {
    componentContext.keys().forEach(component => {
      const componentConfig = componentContext(component)
      const name = component
        .replace(/^\.\/_/, '')
        .replace(/\.\w+$/, '')
        .replace(/\/[^/]*/, '')
        .replace('./', '')
      // 注册全局组件
      if (name.toLocaleLowerCase().indexOf('global') > -1) {
        app.component(name, componentConfig.default || componentConfig)
      }
    })
  }
}
