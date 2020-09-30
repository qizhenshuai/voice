
<template>
  <div>Capacity: {{ capacity }}</div>
  <p>Spaces Left: {{ spacesLeft }} out of {{ capacity }}</p>
  <button @click="increaseCapacity()">Increase Capacity</button>
  <h2>Attending</h2>
  <ul>
    <li v-for="(name, index) in attending" :key="index">
      {{ name }}
    </li>
  </ul>
</template>

<script>
// import { computed, ref } from 'vue'
import userEventSpace from './capactity'
export default {

  beforeCreate() {
    console.log('beforeCreate')
  },

  setup() {
    return { ...userEventSpace() }
    // const capacity = ref(3)
    // const attending = ref(['Tim', 'Bob', 'Joe'])
    // const spacesLeft = computed(() => {
    //   return capacity.value - attending.value.length
    // })
    // function increaseCapacity() { capacity.value++ }
    // return { capacity, increaseCapacity, attending, spacesLeft }
  },
  created() {
    console.log('created')
  }
}
</script>