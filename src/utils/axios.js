import Axios from 'axios'

const baseURL = '/api/'

const axios = Axios.create({
  baseURL,
  timeout: 20000 // 请求超时 20s
})

// 前置拦截器（发起请求之前的拦截）
axios.interceptors.request.use(
  (config) => {
    /**
     * 统一设置用户身份
     * 这里对 config 不做任何处理，直接返回
     */
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// 后置拦截器（获取到响应时的拦截）
axios.interceptors.response.use(
  (response) => {
    /**
     * 统一处理接口响应错误，比如token过期无效、服务端异常等
     * 这里对 response 和 error 不做任何处理，直接返回
     */
    return response
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)

export default axios
