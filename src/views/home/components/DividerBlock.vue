<template>
  <div class="block-divider">
    <div class="block-divider__top"></div>
    <div class="block-divider__mid"></div>
    <div class="block-divider__btm"></div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.block-divider {
  margin: 8px 0;
  background-color: #f8f7f7;
  &__top {
    height: 10px;
    background-color: white;
    border-radius: 0 0 10px 10px;
  }
  &__mid {
    height: 10px;
  }
  &__btm {
    height: 10px;
    background-color: white;
    border-radius: 10px 10px 0 0;
  }
}
</style>
