<template lang="html">
  <div class="search-box">
    <div class="search-box__search-engine">
      <img :src="currentEngine.img" alt=""/>
    </div>
    <div class="search-box__input">
      <input type="text" value="" @focus="focus" @blur="blur" v-model="searchText" :placeholder="currentEngine.name">
    </div>
    <div class="search-box__search" :style="{ opacity: opacity }" @click="search" @mouseover="mouseover" @mouseleave="mouseleave">
        <i class="fa fa-search"></i>
    </div>
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
      currentEngine: state => state.search.current
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
        console.log('search ' + this.searchText)
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
</style>
