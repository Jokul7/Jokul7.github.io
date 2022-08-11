import axios from '@/utils/axios'

/**
 * 搜索歌曲
 * 可选参数 : keywords: 取出数量 , 默认为 30 (不支持 offset)
 * 接口地址 : /search
 */
export function getSearch(keywords) {
  return axios({
    method: 'get',
    url: '/search',
    params: { keywords }
  })
}

/**
 * 推荐新音乐
 * 说明 : 调用此接口 , 可获取推荐新音乐
 * 可选参数 : limit: 取出数量 , 默认为 10 (不支持 offset)
 * 接口地址 : /personalized/newsong
 */
export function getPersonalizedNewsong(limit = 10) {
  return axios({
    method: 'get',
    url: '/personalized/newsong',
    params: { limit }
  })
}
