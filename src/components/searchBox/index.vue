<template lang="html">
  <div class="search-box">
    <div class="search-box__search-engine" @click="increment">
    </div>
    <div class="search-box__input">

    </div>
    <div class="search-box__search">

    </div>
  </div>
</template>

<script>
import { incrementCounter } from '../../vuex/actions'
export default {
  data: function () {
    return {
    }
  },
  vuex: {
    actions: {
      increment: incrementCounter(2)
    }
  },
  computed: {},
  ready: function () {
  },
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style lang="scss">
  .search-box {
    position: absolute;
    left: 50%;
    top:50px;
    transform: translateX(-50%);
    height: 50px;
    width: 600px;
    border-radius: 25px;
    background-color: red;
    &__search-engine {
      float: left;
      width: 70px;
      height: 100%;
      border-radius: 25px 0 0 25px;
      background-color: red;
      background-color: green;
    }
  }
</style>
