<template lang="html">
  <div class="search-box">
    <div class="search-box__search-engine" @click="openDropdown">
      <img :src="currentEngine.img" alt=""/>
    </div>
    <div class="search-box__input">
      <input type="text" value="" @focus="focus" @blur="blur" v-model="searchText" :placeholder="currentEngine.name">
    </div>
    <div class="search-box__search" :style="{ opacity: opacity }" @click="search" @mouseover="mouseover" @mouseleave="mouseleave">
        <i class="fa fa-search"></i>
    </div>
    <ul class="dropdown" v-show="isOpenDropdown">
      <li v-for="engine in engines">
        <div :style="{ 'background-image': 'url(' + engine.img + ')', 'background-size': 'cover'}" @click="chooseEngine(engine)"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      opacity: 0,
      isClick: false,
      isFocus: false,
      searchText: ''
    }
  },
  computed: {},
  ready: function () {
  },
  vuex: {
    getters: {
      engines: state => state.search.engines,
      isOpenDropdown: state => state.search.isOpenDropdown,
      currentEngine: state => state.search.current
    },
    actions: {
      chooseEngine: (state, engine) => state.dispatch('CHOOSE_ENGINE', engine),
      openDropdown: state => state.dispatch('OPEN_DROPDOWN')
    }
  },
  methods: {
    focus: function () {
      this.isFocus = true
      this.opacity = 1
    },
    blur: function () {
      this.isFocus = false
      if (!this.isClick) {
        this.opacity = 0
      }
    },
    mouseover: function () {
      this.isClick = true
      this.opacity = 1
    },
    mouseleave: function () {
      this.isClick = false
      if (!this.isFocus) {
        this.opacity = 0
      }
    },
    search: function () {
      if (this.searchText !== '') {
        window.open(`${this.currentEngine.url}${this.searchText}`)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss">
  .search-box {
    height: 50px;
    width: 600px;
    border-radius: 25px;
    background-color: #ffffff;
    position:relative;
    z-index: 999;
    &__search-engine {
      float: left;
      width: 70px;
      height: 100%;
      border-radius: 25px 0 0 25px;
      text-align: center;
      padding: 10px;
      cursor: pointer;
      img {
        height:30px;
        width:30px;
      }
    }
    &__input{
      float: left;
      width: 430px;
      height: 100%;
      background-color: yellow;
      input {
        width: 100%;
        height: 100%;
        padding: 10px 0;
        font-size: 23px;
        border: 0;
        outline: none;
      }
    }
    &__search{
      font-size: 30px;
      float: left;
      width: 100px;
      height: 100%;
      background-color: rgba(46, 204, 113, 1);
      border-radius: 0 25px 25px 0;
      cursor: pointer;
      position: relative;
      line-height: 45px;
      text-align: center;
      transition: all .2s ease;
      opacity: 0;
      &:hover{
        background-color: rgba(46, 204, 113, .9);
        opacity: 1;
      }
    }
  }
  .dropdown {
    background: rgba(255,192,203,.9);
    position: relative;
    z-index: 9999;
    border-radius: 10px;
    display:inline-block;
    padding:10px 0;
    margin:10px;
    list-style: none;
    cursor: pointer;
    li {
      height: 50px;
      width: 50px;
      padding: 10px;
      cursor: pointer;
      div {
        height: 100%;
        width: 100%;
      }
      &:hover {
        background-color: rgba(255,255,255,.2);
      }
    }
  }
</style>
