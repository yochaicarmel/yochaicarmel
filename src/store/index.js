import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUnit: "",
    currentSoldier: undefined
  },
  getters: {
  },
  mutations: {
    setCurrentUnit (state, unit) {
      state.currentUnit = unit      
    },
    setCurrentSoldier(state, soldier) {
      state.currentSoldier = soldier
    }
  },
  actions: {
  },
  modules: {
  }
})
