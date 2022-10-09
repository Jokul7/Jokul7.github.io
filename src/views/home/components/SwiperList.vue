<template>
  <div class="block" v-if="data.uiElement">
    <div class="head">
      <div class="left">
        <van-icon name="replay" v-if="data.resourceIdList" />
        {{ data.uiElement.subTitle?.title || data.uiElement.mainTitle?.title }}
      </div>
      <van-button
        round
        type="default"
        size="small"
        class="right"
        v-if="data.uiElement.button.action === 'play_all_song'"
      >
        <van-icon name="play" />{{ data.uiElement.button.text }}
      </van-button>
      <van-button
        round
        type="default"
        size="small"
        class="right"
        v-if="data.uiElement.button.actionType === 'orpheus'"
      >
        {{ data.uiElement.button.text }}<van-icon name="arrow" />
      </van-button>
    </div>
    <swiper :slidesPerView="'auto'" class="swipe-music-list">
      <swiper-slide v-for="(obj, idx) in data.creatives" :key="idx">
        <div
          class="music"
          v-for="item in obj.resources"
          :key="item.resourceId"
          @click="palySong(item.resourceId)"
        >
          <img class="image" v-lazy="item.uiElement.image.imageUrl" />
          <div class="info">
            <div class="left">
              <div class="title" v-if="item.uiElement.mainTitle">
                {{ item.uiElement.mainTitle.title }}
                <span class="artists" v-if="item.resourceExtInfo?.artists">
                  - {{ item.resourceExtInfo.artists[0].name }}
                </span>
              </div>
              <div class="sub-title" v-if="item.uiElement.subTitle">
                <span class="yellow-tag" v-if="item.uiElement.subTitle.titleType === 'songRcmdTag'">
                  {{ item.uiElement.subTitle.title }}
                </span>
                <span class="gray-tag" v-if="item.uiElement.labelType === 'gray'">
                  {{ item.uiElement.labelTexts[0] }}
                </span>
                <span class="yellow-tag" v-if="item.uiElement.labelType === 'yellow'">
                  {{ item.uiElement.labelTexts[0] }}
                </span>
                <span class="sub" v-if="!item.uiElement.subTitle.titleType">
                  {{ item.uiElement.subTitle.title }}
                </span>
              </div>
            </div>
            <div class="right"></div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

defineProps({
  data: Object
})

// router
const router = useRouter()

// 音乐详情
const palySong = (id) => {
  router.push({
    name: 'Song',
    query: {
      id
    }
  })
}
</script>

<style lang="scss" scoped>
@import '../style/common.scss';
.swipe-music-list {
  width: 100%;
  height: 100%;
  .swiper-slide {
    @include flex(left, normal, column);
    width: 90%;
  }
  .swiper-slide:last-child {
    width: 100%;
  }
  .music {
    @include flex(center, normal);
    margin: 8px 0 0 16px;
    width: 100%;
    .image {
      width: 50px;
      border-radius: 8px;
      border: 1px solid #f5f5f5;
    }
    .info {
      @include flex;
      position: relative;
      margin-left: 10px;
      width: 100%;
      height: 52px;
      &::before {
        content: '';
        position: absolute;
        bottom: -4px;
        height: 0.8px;
        width: 92%;
        background-color: #f6f7f8;
      }
      .left {
        @include flex(baseline, normal, column);
        .title {
          @include ellipsis;
          width: 260px;
          font-size: 16px;
          .artists {
            font-size: 12px;
            color: #999999;
          }
        }
        .sub-title {
          @include flex;
          margin-top: 4px;
          .yellow-tag {
            padding: 4px 6px;
            font-size: 12px;
            color: #fe894f;
            background-color: #fef9f5;
            zoom: 0.78;
            border-radius: 4px;
          }
          .gray-tag {
            padding: 2px 4px;
            font-size: 12px;
            color: #999999;
            zoom: 0.78;
            border-radius: 4px;
            border: 1px solid #e9e9e9;
          }
          .sub {
            @include ellipsis;
            max-width: 180px;
            margin-left: 4px;
            font-size: 13px;
            color: #999999;
          }
        }
      }
    }
  }
}
</style>
