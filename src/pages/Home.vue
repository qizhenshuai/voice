<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>{{ $store.state.app.name }}</div>
    <a-button type="primary" @click="handleTest">测试</a-button>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex'

export default {
  name: 'home',
  setup() {
    const store = useStore()
    const handleTest = () => {
      if (store.state.app.name === 'app') {
        store.commit('app/UPDATE_NAME', '测试')
      } else {
        store.commit('app/UPDATE_NAME', 'app')
      }
    }
    return {
      handleTest
    }
  }
}
</script>
