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
      name: 'NPM',
      url: 'https://www.npmjs.org/search?q=',
      img: require('../../assets/images/npm.png')
    }
  ],
  current: {
    name: 'Google',
    url: 'https://www.google.com/search?q=',
    img: require('../../assets/images/google.png')
  }
}

const mutations = {}

export default {
  state,
  mutations
}
