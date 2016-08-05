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
}

</style>

<template>
  <search-box></search-box>
  <label-container></label-container>
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
