<template>
  <div>
    <h1 @click="handleClick">{{ count }}</h1>
    <IndexSearch v-model="search" />
  </div>
</template>

<script setup>
import { ref, toRefs } from 'vue'
import { useStore } from 'vuex'
import IndexSearch from './components/IndexSearch.vue'

const search = ref(false)
const store = useStore()
const { count } = toRefs(store.state)
const handleClick = () => {
  // store.dispatch('increment')
  search.value = true
}
</script>

<style scoped lang="scss">
.title {
  font-size: 16px;
  width: 375px;
  height: 375px;
  border-radius: 20px;
  border: 1px solid #333333;
  background-color: #e1e1e1;
  display: flex;
}
</style>
