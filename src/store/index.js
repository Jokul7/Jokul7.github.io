import { createStore } from 'vuex'

// Create a new store instance.
export default createStore({
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    increment(state) {
      state.count += 1
    }
  },
  actions: {
    increment(store) {
      store.commit('increment')
    }
  },
  getters: {
    double(state) {
      return 2 * state.count
    }
  }
})
