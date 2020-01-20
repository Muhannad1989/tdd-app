import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fetchedData: []
  },
  getters: {
    fetchedData: state => state.fetchedData
  },
  actions: {
    async fetchData({ commit }) {
      const res = await axios("https://api.publicapis.org/entries");
      // sort data randomly
      const data = await res.data.entries.sort(() => Math.random() - 0.5);
      commit("setData", data);
    }
  },
  mutations: {
    setData(state, data) {
      state.fetchedData = data;
    }
  }
});
