export const state = () => ({
    user: '',
    users: [
        {name: 'abul karim', sel: '01836372473', email: 'abul@test.com', pass: '123456', role: 'user', userId: '1'},
        {name: 'admin', sel: '01836372473', email: 'admin@test.com', pass: '123456', role: 'admin', userId: '2'},
    ],
  })
    
  export const actions = {}
  
  export const mutations = {
    singUp(state, payload) {
      let d = new Date();
      payload.id = d.getTime();
      payload.role = 'user'
      state.user = payload;
      state.users.push(payload)
    },
    login(s,payload){
      s.user = payload;
    },
    logout(s){
      s.user = '';
    }
  }
    
  export const getters = {
  }
  