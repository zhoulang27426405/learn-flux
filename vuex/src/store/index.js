import Vue from 'vue'
import Vuex from '../minvuex'

Vue.use(Vuex)

const moduleA = {
  state: {
    count : 1
  },
  mutations: {
    incrementA (state, { amount }) {
      state.count += amount
    }
  },
  actions: {
    incrementMoudleA ({ commit }) {
      setTimeout(() => commit('incrementA', { amount: 10 }), 1000)
    }
  }
}

const moduleB = {
  state: {
    count : 2
  },
  mutations: {
    incrementB (state, { amount }) {
      state.count += amount
    }
  },
  actions: {
    incrementMoudleB ({ commit }) {
      setTimeout(() => commit('incrementB', { amount: 20 }), 1000)
    }
  }
}

export default new Vuex.Store({
  strict: true,
  state: {
    count : 3
  },
  mutations: {
    increment (state, { amount }) {
      state.count += amount
    }
  },
  actions: {
    incrementAction ({ commit }) {
      setTimeout(() => commit('increment', { amount: 30 }), 1000)
    }
  },
  modules: {
    a: moduleA,
    b: moduleB
  }
})
