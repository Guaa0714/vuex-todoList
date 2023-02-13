import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: [
      {
        id: 1,
        title: "Uno",
      },
      {
        id: 2,
        title: "Dos",
      },
      {
        id: 3,
        title: "Tres",
      },
    ],
  },
  getters: {
    allTasks :(state) => state.tasks,
  },
  actions: {
    addTask({commit}, task){
      commit("add_task", task);
    },
    delTask({commit}, id){
      commit("del_task", id);
    },
    editTask({commit}, task){
      commit("edit_task", task);
    }
  },
  mutations: {
    add_task(state, task){
      state.tasks.push(task);
      // console.log(task);
    },
    del_task(state, id){
      state.tasks = state.tasks.filter((task) => task.id != id);
    },
    edit_task(state, task){
      let index = state.tasks.findIndex((t) => t.id == task.id);
      if(index != -1){
        state.tasks[index] = task;
      }
    }
  },
  modules: {
  }
})
