export const state = () => ({
    projects: []
  })
    
  export const mutations = {
    addProject(state, data) {
      let d = new Date();
      data._id = d.getTime();
      state.projects.push(data)
    },
  }
