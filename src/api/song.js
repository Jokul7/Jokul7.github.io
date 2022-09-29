import axios from '@/utils/axios'

/**
 * 获取歌曲详情
 * 调用此接口 , 传入音乐 id(支持多个 id, 用 , 隔开), 可获得歌曲详情(dt为歌曲时长)
 * 必选参数 : ids: 音乐 id, 如 ids=347230
 * 接口地址 : /song/detail
 */
export function getSongDetail(ids) {
  return axios({
    method: 'get',
    url: '/song/detail',
    params: { ids }
  })
}

/**
 * 获取音乐 url
 * 使用歌单详情接口后 , 能得到的音乐的 id, 但不能得到的音乐 url, 调用此接口, 传入的音乐 id( 可多个 , 用逗号隔开 ), 可以获取对应的音乐的 url,未登录状态或者非会员返回试听片段(返回字段包含被截取的正常歌曲的开始时间和结束时间)
 * 必选参数 : id : 音乐 id
 * 可选参数 : br: 码率,默认设置了 999000 即最大码率,如果要 320k 则可设置为 320000,其他类推
 * 接口地址 : /song/url
 */
export function getSongUrl(id) {
  return axios({
    method: 'get',
    url: '/song/url',
    params: { id }
  })
}

/**
 * 已购单曲
 * 登录后调用此接口可获取已购买的单曲
 * 可选参数 : limit: 取出评论数量 , 默认为 20
 * offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*10, 其中 10 为 limit 的值
 * 接口地址 : /song/purchased
 */
export function getSongPurchased(limit = 20) {
  return axios({
    method: 'get',
    url: '/song/purchased',
    params: { limit }
  })
}
