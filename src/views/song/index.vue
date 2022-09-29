<template>
  <div>song</div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getSongDetail, getSongUrl } from '@/api/song'

const route = useRoute()

// 获取歌曲详情
const detail = ref({})
const playinfo = ref({})
onMounted(() => {
  const { id } = route.query
  Promise.all([getSongDetail(id), getSongUrl(id)]).then((res) => {
    const [res1, res2] = res
    ;[detail.value] = res1.songs
    ;[playinfo.value] = res2.data
    console.log(detail.value, '---------', playinfo.value)
  })
})
</script>

<style lang="scss" scoped></style>
