
import { computed, reactive } from 'vue'

export default {
  setup() {
    return useEventSpace()
  }
}
function useEventSpace() {
  const event: any = reactive({
    capacity: 4,
    attending: ['Tim', 'Bob', 'Joe'],
    spacesLeft: computed(() => {
      return event.capacity - event.attending.length
    })
  })
  
  function increaseCapacity() { event.capacity++ }
  return { event, increaseCapacity }
}