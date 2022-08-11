import axios from '@/utils/axios'

/**
 * 首页-发现
 * 可选参数 : refresh: 是否刷新数据,默认为 false; cursor: 上一条数据返回的 cursor
 * 接口地址 : /homepage/block/page
 * 调用例子 : /personalized?limit=1
 */
export function getHomepage(refresh = false) {
  return axios({
    method: 'get',
    url: '/homepage/block/page',
    params: { refresh }
  })
}

/**
 * 首页-发现-圆形图标入口列表
 * 接口地址 : /homepage/dragon/ball
 */
export function getHomepageDragonBall() {
  return axios({
    method: 'get',
    url: '/homepage/dragon/ball'
  })
}
