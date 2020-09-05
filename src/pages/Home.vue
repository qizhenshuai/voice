<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <a-button type="primary" @click="handleTest">测试</a-button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import { fetchHome } from '@/api/index'

@Options({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  mounted() {
    fetchHome()
  }

  handleTest() {
    console.log('test-click--->')
  }
}
</script>
