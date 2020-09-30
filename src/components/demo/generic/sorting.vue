<script>
export default {
  props: ['input', 'options']
}
</script>

<template>
  <div>
    <slot v-bind="{ options, index, output }" />
  </div>
</template>