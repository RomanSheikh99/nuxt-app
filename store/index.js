export const state = () => ({
  counter: 0
})
  
export const actions = {}

export const mutations = {
  increment(state) {
    state.counter++
  },
  decrement(state) {
    state.counter--
  }
}
  
export const getters = {
  getCounter(state) {
    return state.counter
  }
}
