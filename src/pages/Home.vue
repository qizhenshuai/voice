<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>{{ $store.state.app.name }}</div>
    <a-button type="primary" @click="handleTest">测试</a-button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { queryHome } from '@/api/index'
import { useStore } from 'vuex'

@Options({
  components: {}
})
export default class Home extends Vue {
  mounted() {
    queryHome()
  }

  handleTest() {
    useStore().commit('app/UPDATE_NAME', '测试')
  }
}
</script>
