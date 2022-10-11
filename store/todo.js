export const state = () => ({
  todos: [],
})

export const mutations = {
  log(s,payload){
    const evt = payload.evt;
    const user = payload.user;
    const stage = payload.stage;
    console.log(evt);
          if(evt.added){
            let d = new Date();
            let addedTodo = evt.added.element
            let lastTime = addedTodo.updatedTime;
            let lastStage = addedTodo.stage;
            let lastWorkTime_hh = addedTodo.workTime_hh
            let lastWorkTime_mm = addedTodo.workTime_mm
            addedTodo.updatedTime = d.toLocaleTimeString();
            addedTodo.stage = stage
            addedTodo.workTime_hh = ''
            addedTodo.workTime_mm = ''
            addedTodo.changes.push({
              changeBy: user.name,
              userEmail: user.email,
              lastChangeTime: lastTime,
              changeTime: d.toLocaleTimeString(),
              workTime_hh: lastWorkTime_hh,
              workTime_mm: lastWorkTime_mm,
              duration: lastWorkTime_hh + 'h' + ' ' + lastWorkTime_mm + 'm',
              fromStage: lastStage,
              toStage: stage,
            })
            let findTodo = s.todos.find(todo => todo.id == addedTodo.id)
            let index = s.todos.indexOf(findTodo);
            s.todos[index] = addedTodo; 
            console.log(addedTodo)
          }
  },
  addTodos(s,nv){
    s.todos = nv;
  },
}
