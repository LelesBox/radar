import Vue from 'vue'
import Vuex from 'vuex'
// import Mutations from './mutations'
import search from './modules/search'
import radarBookmarks from './modules/radarbookmark'

Vue.use(Vuex)

export default new Vuex.Store({
  // state: state,
  // mutations: Mutations
  modules: {
    search,
    radarBookmarks
  }
})
