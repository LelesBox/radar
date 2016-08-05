import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0
}

const mutations = {
  INCREMENT: function (state, mutation) {
    state.count = state.count + mutation.playload
  }
}

export default new Vuex.Store({
  state: state,
  mutations: mutations
})
