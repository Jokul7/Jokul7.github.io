<template>
  <Popup v-model:show="show" position="right" :style="{ height: '100%', width: '100%' }">
    <Search
      v-model="search"
      show-action
      placeholder="搜索歌曲"
      ref="input"
      @search="onSearch"
      @cancel="onCancel"
    />
  </Popup>
</template>

<script setup>
import { ref, computed, watch, nextTick } from 'vue'
import { Search, Popup } from 'vant'
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
function onCancel() {
  show.value = false
}
</script>

<style lang="scss" scoped></style>
