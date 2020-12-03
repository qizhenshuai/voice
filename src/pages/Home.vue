<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>{{ $store.state.app.name }}</div>
    <el-button type="primary" @click="handleTest">测试</el-button>
    <el-button type="primary" @click="handleLogin">登录</el-button>
  </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  name: 'home',
  setup() {
    const store = useStore()
    const router = useRouter()
    const handleTest = () => {
      if (store.state.app.name === 'app') {
        store.commit('app/UPDATE_NAME', '测试')
      } else {
        store.commit('app/UPDATE_NAME', 'app')
      }
    }
    const handleLogin = () => {
      console.log('router===>', router)
      router.push('/login')
    }
    return {
      handleTest,
      handleLogin
    }
  }
}
</script>
