import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: true,
  },
  getters: {
    STATUS(state) {
      return state.status;
    },
  },
  mutations: {
    // Изменяем status
    CHANGE_STATUS(state) {
      state.status = !state.status;
    },
  },
  actions: {},
});
