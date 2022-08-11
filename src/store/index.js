import usePageCacheStore from './pageCache'

// 统一导出useStore方法
const useStore = () => {
  return {
    pageCache: usePageCacheStore()
  }
}

export default useStore
