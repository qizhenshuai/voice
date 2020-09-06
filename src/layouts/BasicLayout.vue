
<template>
  <div>
    <global-header></global-header>
    <router-view></router-view>
    <global-footer></global-footer>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
export default class BasicLayout extends Vue {

}
</script>
