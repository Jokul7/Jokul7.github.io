import { defineStore } from 'pinia'
import { ref } from 'vue'

const usePageCacheStore = defineStore('pageCache', () => {
  const homepage = ref({})

  return { homepage }
})

export default usePageCacheStore
