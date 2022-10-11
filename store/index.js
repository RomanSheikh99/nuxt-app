export const state = () => ({
  counter: 0,
  headers: [
    { text: 'Change By', value: 'changeBy' },
    { text: 'Start Time', value: 'lastChangeTime' },
    { text: 'End Time', value: 'changeTime' },
    { text: 'Duration', value: 'duration' },
    { text: 'From Stage', value: 'fromStage' },
    { text: 'To Stage', value: 'toStage' },
  ],
  importancy: ['Immediate','High', 'Medium', 'Low'],
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
