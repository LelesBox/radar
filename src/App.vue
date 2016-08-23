<style lang="scss">

html {
    height: 100%;
    width: 100%;
}

body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    * {
        box-sizing: border-box;
    }
    .center-container{
      position: absolute;
      top:50%;
      left:50%;
      transform: translate(-50%,-50%);
    }
    .search-box{
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      margin-bottom: 40px;
    }
}

</style>

<template>
  <div class="center-container">
    <search-box class="search-box"></search-box>
    <label-container></label-container>
  </div>
  <corner></corner>
</template>

<script>
import Corner from './components/corner'
import labelContainer from './components/labelContainer'
import searchBox from './components/searchBox'
import store from './vuex/store'

console.log(labelContainer)
export default {
  components: {
    Corner: Corner,
    labelContainer: labelContainer,
    searchBox: searchBox
  },
  store: store
}
</script>
