export const state = () => ({
  filterUser: [],
  filterProject: [],
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
  },
  setFilterUser(s,val){
    s.filterUser = val;
  },
  setFilterProject(s,val){
    s.filterProject = val;
  },
}
  
export const getters = {
  getCounter(state) {
    return state.counter
  }
}
