import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
  },
  getters: {
    todos: state => {
      return state.todos;
    },
  },
  mutations: {
    add(state, payload) {
      state.todos.push(payload);
    },
    remove(state, id) {
      state.todos.splice(id, 1);
    },
    update(state, { id, ...payload }) {
      Vue.set(state.todos, id, payload);
    },
  },
  actions: {
    add({ commit }, payload) {
      commit('add', payload);
    },
    remove({ commit }, payload) {
      commit('remove', payload);
    },
    update({ commit }, payload) {
      commit('update', payload);
    },
  },
});
