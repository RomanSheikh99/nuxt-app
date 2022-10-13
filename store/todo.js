export const state = () => ({
  todos: [],
  editedData: {},
  addedTimeData: {},
});

export const mutations = {
  log(s, payload) {
    const evt = payload.evt;
    const user = payload.user;
    const stage = payload.stage;
    if (evt.added) {
      let d = new Date();
      let addedTodo = evt.added.element;
      let lastTime = addedTodo.updatedTime;
      let lastStage = addedTodo.stage;
      let lastWorkTime_hh = addedTodo.workTime_hh ? addedTodo.workTime_hh : 0;
      let lastWorkTime_mm = addedTodo.workTime_mm ? addedTodo.workTime_mm : 0;
      addedTodo.updatedTime = d.toLocaleTimeString();
      addedTodo.stage = stage;
      addedTodo.workTime_hh = 0;
      addedTodo.workTime_mm = 0;
      addedTodo.changes.push({
        changeBy: user.name,
        userEmail: user.email,
        lastChangeTime: lastTime,
        changeTime: d.toLocaleTimeString(),
        workTime_hh: lastWorkTime_hh,
        workTime_mm: lastWorkTime_mm,
        duration: lastWorkTime_hh + "h" + " " + lastWorkTime_mm + "m",
        fromStage: lastStage,
        toStage: stage,
      });
      let total_hh = 0;
      let total_mm = 0;
      addedTodo.changes.map((t) => {
        total_hh += t.workTime_hh;
        total_mm += t.workTime_mm;
      });
      addedTodo.totalWorkTime_hh =
        total_mm > 59 ? total_hh + Math.floor(total_mm / 60) : total_hh;
      addedTodo.totalWorkTime_mm = total_mm > 59 ? total_mm % 60 : total_mm;
      let findTodo = s.todos.find((todo) => todo.id == addedTodo.id);
      let index = s.todos.indexOf(findTodo);
      s.todos[index] = addedTodo;
    }
  },
  addTodos(s, nv) {
    s.todos = nv;
  },
  addNewTodo(s, todo) {
    s.todos.push(todo);
  },
  deleteTodo(s, id) {
    const targetedTodo = s.todos.find((todo) => todo.id == id);
    const index = s.todos.indexOf(targetedTodo);
    s.todos.splice(index, 1);
  },
  setEditedData(s, id) {
    s.editedData = s.todos.find((d) => d.id == id);
  },
  setAddedTimeData(s, id) {
    s.addedTimeData = s.todos.find((d) => d.id == id);
  },
  editTodo(s, payload) {
    let targetData = s.todos.find((d) => d.id == payload.id);
    let d = new Date();
    targetData.updatedTime = d.toLocaleTimeString();
    let index = s.todos.indexOf(targetData);
    s.todos[index] = payload.data;
  },
  addWorkTime(s, data) {
    let todo = s.todos.find((t) => t.id == data.id);
    let index = s.todos.indexOf(todo);
    s.todos[index] = data;
  },
};
