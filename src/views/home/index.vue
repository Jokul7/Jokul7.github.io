<template>
  <div class="page-flex-box">
    <!-- 搜索和侧栏 -->
    <div class="top">
      <Menu color="#000000" :size="26" @click="handleSidebar" />
      <van-search class="search" shape="round" placeholder="搜索歌曲" @click="handleClick" />
      <Mic color="#000000" :size="26" />
    </div>

    <div class="scroll-content">
      <van-pull-refresh v-model="refreshLoading" @refresh="onRefresh">
        <!-- 轮播 -->
        <van-swipe class="my-swipe" :autoplay="5000" lazy-render>
          <van-swipe-item v-for="obj in banner.extInfo?.banners" :key="obj.encodeId">
            <img :src="obj.pic" />
            <div class="tag" :style="{ backgroundColor: obj.titleColor }">
              <span class="tag-text">{{ obj.typeTitle }}</span>
            </div>
          </van-swipe-item>
        </van-swipe>
        <!-- 金刚区 -->
        <div class="main-icon">
          <div class="item" v-for="item in mainIcon" :key="item.name">
            <div :class="['icon', item.icon]"></div>
            <div class="name">{{ item.name }}</div>
          </div>
        </div>
        <van-divider />
        <div class="block">
          <div class="head">
            <div class="left">推荐歌单</div>
            <div class="right"></div>
          </div>
          <div class="content">
            <div class="item" v-for="obj in recommend.creatives" :key="obj.creativeId">
              <img class="image" :src="obj.uiElement.image.imageUrl" alt="" />
              <div class="title">{{ obj.uiElement.mainTitle.title }}</div>
            </div>
          </div>
        </div>
      </van-pull-refresh>
    </div>
  </div>

  <!-- popup - components -->
  <index-sidebar v-model="sidebar" />
  <index-search v-model="search" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import useStore from '@/store'
import { storeToRefs } from 'pinia'
import { getHomepage } from '@/api/home'
import { Toast } from 'vant'
import { Menu, Mic } from 'lucide-vue-next'
import IndexSidebar from './IndexSidebar.vue'
import IndexSearch from './IndexSearch.vue'

// pinia
const { pageCache } = useStore()
const { homepage } = storeToRefs(pageCache)

// 获取首页信息
const banner = ref({})
const recommend = ref({})
onMounted(() => {
  if (!Object.keys(homepage.value).length) {
    getHomepage().then((res) => {
      const { data } = res
      homepage.value = data
      ;[banner.value, recommend.value] = data.blocks
    })
  } else {
    const { blocks } = homepage.value
    ;[banner.value, recommend.value] = blocks
  }
})
// 刷新首页信息
const refreshLoading = ref(false)
const onRefresh = () => {
  setTimeout(() => {
    Toast('刷新成功')
    refreshLoading.value = false
  }, 1000)
}

// 搜索
const search = ref(false)
const handleClick = () => {
  search.value = true
}

// 侧栏
const sidebar = ref(false)
const handleSidebar = () => {
  sidebar.value = true
}

// 金刚区
const mainIcon = [
  { name: '每日推荐', icon: 'icon01' },
  { name: '私人FM', icon: 'icon02' },
  { name: '歌单', icon: 'icon03' },
  { name: '排行榜', icon: 'icon04' },
  { name: '有声书', icon: 'icon05' },
  { name: '数字专辑', icon: 'icon06' },
  { name: '直播', icon: 'icon07' },
  { name: '关注新歌', icon: 'icon08' },
  { name: '歌房', icon: 'icon09' },
  { name: '游戏专区', icon: 'icon10' }
]
</script>

<style scoped lang="scss">
:deep(.van-search) {
  padding: 6px 18px;
}
:deep(.van-search__field) {
  padding: 8px 12px 8px 0;
}
.my-swipe {
  margin-top: 14px;
  .van-swipe-item {
    font-size: 0;
  }
  .van-swipe-item img {
    position: relative;
    width: 92%;
    left: 4%;
    border-radius: 12px;
  }
  .tag {
    padding: 2px 4px;
    position: absolute;
    bottom: 0;
    right: 4%;
    font-size: 12px;
    color: #ffffff;
    border-radius: 12px 0 12px 0;
    .tag-text {
      display: inline-block;
      transform: scale(0.9);
    }
  }
}
:deep(.van-swipe__indicator) {
  width: 8px;
  height: 2px;
  border-radius: 2px;
}
:deep(.van-swipe__indicator--active) {
  background-color: white;
}
.top {
  @include flex(center, left);
  padding: 8px 12px 0 16px;
  background-color: #ffffff;
  .search {
    flex: 1;
  }
}
.main-icon {
  @include flex(center, normal);
  padding: 16px 0 0 16px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  .item {
    @include flex(center, normal, column);
    padding-right: 21px;
    .icon {
      width: 48px;
      height: 48px;
      &.icon01 {
        background: url('@/assets/home/icon01.png') no-repeat center center / contain;
      }
      &.icon02 {
        background: url('@/assets/home/icon02.png') no-repeat center center / contain;
      }
      &.icon03 {
        background: url('@/assets/home/icon03.png') no-repeat center center / contain;
      }
      &.icon04 {
        background: url('@/assets/home/icon04.png') no-repeat center center / contain;
      }
      &.icon05 {
        background: url('@/assets/home/icon05.png') no-repeat center center / contain;
      }
      &.icon06 {
        background: url('@/assets/home/icon06.png') no-repeat center center / contain;
      }
      &.icon07 {
        background: url('@/assets/home/icon07.png') no-repeat center center / contain;
      }
      &.icon08 {
        background: url('@/assets/home/icon08.png') no-repeat center center / contain;
      }
      &.icon09 {
        background: url('@/assets/home/icon09.png') no-repeat center center / contain;
      }
      &.icon10 {
        background: url('@/assets/home/icon10.png') no-repeat center center / contain;
      }
    }
    .name {
      margin-top: 4px;
      font-size: 12px;
      color: #777777;
      white-space: nowrap;
    }
  }
}
.block {
  .head {
    @include flex;
    padding: 0 0 0 16px;
    .left {
      font-size: 18px;
      font-weight: bold;
    }
    .right {
    }
  }
  .content {
    @include flex(top, normal);
    padding: 16px 0 0 16px;
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    .item {
      padding-right: 16px;
      .image {
        width: 100px;
        border-radius: 8px;
      }
      .title {
        @include m-ellipsis;
        color: #666666;
        font-size: 13px;
        line-height: 18px;
      }
    }
  }
}
</style>
