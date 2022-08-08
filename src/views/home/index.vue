<template>
  <div class="top">
    <van-icon name="wap-nav" color="#666666" size="24" @click="handleUser" />
    <van-search class="search" shape="round" placeholder="搜索歌曲" @click="handleClick" />
  </div>

  <!-- popup - components -->
  <index-sidebar v-model="user" />
  <index-search v-model="search" />
</template>

<script setup>
import { ref } from 'vue'
// import { useStore } from 'vuex'
import IndexSidebar from './IndexSidebar.vue'
import IndexSearch from './IndexSearch.vue'
// const store = useStore()
// const { count } = toRefs(store.state)
// store.dispatch('increment')
// 搜索
const search = ref(false)
const handleClick = () => {
  search.value = true
}

// 用户
const user = ref(false)
const handleUser = () => {
  user.value = true
}
</script>

<style scoped lang="scss">
:deep(.van-search) {
  padding: 6px 18px;
}
:deep(.van-search__field) {
  padding: 8px 12px 8px 0;
}
.top {
  padding: 16px 12px 16px 16px;
  @include flex(center, left);
  .search {
    flex: 1;
  }
}
</style>
