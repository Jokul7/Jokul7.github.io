<template>
  <Popup v-model:show="show" position="left" :style="{ height: '100%', width: '50%' }">
    123 sdsd
  </Popup>
</template>

<script setup>
import { computed } from 'vue'
import { Popup } from 'vant'
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
</script>

<style lang="scss" scoped></style>
