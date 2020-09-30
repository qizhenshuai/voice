<script>
export default {
  props: ['getResults']
}
</script>

<template>
  <div>
    <slot v-bind="{ query, results, run }" />
  </div>
</template>