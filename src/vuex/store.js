import Vue from 'vue'
import Vuex from 'vuex'
import Mutations from './mutations'

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

export default new Vuex.Store({
  state: state,
  mutations: Mutations
})
