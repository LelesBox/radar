const state = {
  engines: [
    {
      name: 'Google',
      url: 'https://www.google.com/search?q=',
      img: require('../../assets/images/google.png')
    },
    {
      name: 'Baidu',
      url: 'https://www.baidu.com/s?ie=UTF-8&wd=',
      img: require('../../assets/images/baidu.png')
    },
    {
      name: 'npm',
      url: 'https://www.npmjs.org/search?q=',
      img: require('../../assets/images/npm.png')
    }
  ],
  current: {
    name: 'Baidu',
    url: 'https://www.baidu.com/s?ie=UTF-8&wd=',
    img: require('../../assets/images/baidu.png')
  },
  isOpenDropdown: false
}

const mutations = {
  CHOOSE_ENGINE (state, engine) {
    state.current = engine
    state.isOpenDropdown = false
  },
  OPEN_DROPDOWN (state) {
    state.isOpenDropdown = true
  }
}

export default {
  state,
  mutations
}
