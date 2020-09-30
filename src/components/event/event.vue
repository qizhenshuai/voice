<template>
  <div>
    Search for <input v-model="searchInput" />
    <div>
      <p>Number of events: {{ results }}</p>
    </div>
  </div>
</template>

<script>
// import { ref, watchEffect, watch } from 'vue'
import { ref, watch } from 'vue'
import eventApi from 'api/event.ts'
import usePromise from './use-promise'

// export default {
//   setup() {
//     const searchInput = ref('')
//     const results = ref(0)
//     // watchEffect(() => {
//     //   results.value = eventApi.getEventCount(searchInput.value)
//     // })
//     watch(searchInput, () => {
//       results.value = eventApi.getEventCount(searchInput.value)
//     }, { immediate: true })
//     return { searchInput, results }
//   }
// }
export default {
  setup() {
    const searchInput = ref('')
    const getEvents = usePromise(search => eventApi.getEventCount(search.value))
    watch(searchInput, () => {
      if (searchInput.value !== '') {
        getEvents.createPromise(searchInput)
      } else {
        getEvents.results.value = null
      }
    })
    return { searchInput, getEvents } // 模板中用 getEvents.xx 展示
  }
}
</script>