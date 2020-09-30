<script>
import useSearch from './user/search'
import useSorting from './user/sorting'
import GenericSearch from './generic/search'
import GenericSorting from './generic/sorting'
import { ref } from 'vue'

export default {
  components: {
    GenericSearch,
    GenericSorting
  },
  setup() {
    const productSearch = useSearch({})
    const resultSorting = ref('')
    const productSorting = useSorting({ input: 'input', options: 'options' })
    return { productSearch, productSorting, resultSorting }
  }
}
</script>

<template>
  <generic-search :get-results="getProducts" ：v-slot="productSearch"></generic-search>
  <generic-sorting
    :input="productSearch.results"
    :options="resultSortingOptions"
    :v-slot="resultSorting"
  ></generic-sorting>
</template>
