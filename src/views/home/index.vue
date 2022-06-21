<template>
  <!-- Layout -->
  <div class="top">
    <div class="user" @click="handleUser"></div>
    <Search class="search" placeholder="搜索歌曲" @click="handleClick" />
  </div>

  <!-- components -->
  <index-search v-model="search" />
  <index-user v-model="user" />
</template>

<script setup>
import { ref } from 'vue'
// import { useStore } from 'vuex'
import { Search } from 'vant'
import IndexSearch from './components/IndexSearch.vue'
import IndexUser from './components/IndexUser.vue'
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
.top {
  padding: 16px 12px 16px 16px;
  @include layout;
  .user {
    margin-right: 8px;
    @include circle(36px);
    background-color: #f6f7f8;
  }
  .search {
    flex: 1;
  }
}
</style>
