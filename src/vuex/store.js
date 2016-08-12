import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  bookmarkTypes: [
    'favorite'
  ],
  radarBookmarks: [
    [
      {
        type: 'default',
        img: '',
        text: '1',
        description: ''
      },
      {
        type: 'default',
        img: '',
        text: '2',
        description: ''
      },
      {
        type: 'default',
        img: '',
        text: '3',
        description: ''
      },
      {
        type: 'default',
        img: '',
        text: '4',
        description: ''
      },
      {
        type: 'default',
        img: '',
        text: '5',
        description: ''
      }
    ],
    [
      {
        type: 'default',
        img: '',
        text: '1',
        description: ''
      },
      {
        type: 'default',
        img: '',
        text: '2',
        description: ''
      },
      {
        type: 'default',
        img: '',
        text: '3',
        description: ''
      },
      {
        type: 'default',
        img: '',
        text: '4',
        description: ''
      },
      {
        type: 'default',
        img: '',
        text: '5',
        description: ''
      }
    ], [
      {
        type: 'default',
        img: '',
        text: '1',
        description: ''
      },
      {
        type: 'default',
        img: '',
        text: '2',
        description: ''
      },
      {
        type: 'default',
        img: '',
        text: '3',
        description: ''
      },
      {
        type: 'default',
        img: '',
        text: '4',
        description: ''
      },
      {
        type: 'default',
        img: '',
        text: '5',
        description: ''
      }
    ]
  ]
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
