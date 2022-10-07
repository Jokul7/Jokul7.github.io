<template>
  <div class="wrapper">
    <div class="wrapper__input">
      <input class="wrapper__input__content" placeholder="请输入手机号" />
    </div>
    <div class="wrapper__input">
      <input class="wrapper__input__content" placeholder="请输入密码" ref="input" />
    </div>
    <div class="wrapper__login-button">登陆</div>
    <div class="wrapper__login-link">立即注册</div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'

const input = ref(null)
// let autofocus = ref(false)
nextTick(() => {
  // autofocus = true
  input.value.focus()
})
</script>

<style lang="scss" scoped></style>
