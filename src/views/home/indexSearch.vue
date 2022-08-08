<template>
  <van-popup v-model:show="show" position="right" :style="{ height: '100%', width: '100%' }">
    <van-search
      v-model="search"
      show-action
      placeholder="搜索歌曲"
      ref="input"
      @search="onSearch"
      @cancel="onCancel"
    />
  </van-popup>
</template>

<script setup>
import { ref, computed, watch, nextTick } from 'vue'
import { getSearch } from '@/api/search'
// init
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['update:modelValue'])
const show = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

// autofocus
const input = ref(null)
watch(show, (val) => {
  if (val) {
    nextTick(() => {
      input.value.focus()
    })
  }
})

// search
const search = ref('')
const onCancel = () => {
  show.value = false
}
const onSearch = () => {
  getSearch({ keywords: search.value }).then((res) => {
    console.log(import.meta.env.DEV)
    console.log(res)
  })
}
</script>

<style lang="scss" scoped></style>
