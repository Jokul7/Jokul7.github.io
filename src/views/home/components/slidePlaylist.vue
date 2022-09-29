<template>
  <div class="block" v-if="data.uiElement">
    <div class="head">
      <div class="left">{{ data.uiElement?.subTitle?.title.replace('网易云音乐', '你') }}</div>
      <van-button round type="default" size="small" class="right">
        {{ data.uiElement?.button?.text }}<van-icon name="arrow" />
      </van-button>
    </div>
    <div class="content">
      <div class="item" v-for="obj in data.creatives" :key="obj.creativeId">
        <img class="image" v-lazy="obj.resources[0].uiElement.image.imageUrl" />
        <div class="play-num">
          <Play :size="12" />
          <span class="num">{{ countPlayNum(obj.resources[0].resourceExtInfo.playCount) }}</span>
        </div>
        <div class="title">{{ obj.uiElement.mainTitle.title }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Play } from 'lucide-vue-next'

defineProps({
  data: Object
})

// 播放数
const countPlayNum = (num) => {
  if (num > 10 ** 8) {
    return `${parseInt(num / 10 ** 8, 10)}亿`
  }
  return `${parseInt(num / 10 ** 4, 10)}万`
}
</script>

<style lang="scss" scoped>
@import './common.scss';
</style>
