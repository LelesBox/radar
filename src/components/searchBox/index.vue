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
import { updateRadarBookmarks } from '../../vuex/actions'
export default {
  data: function () {
    return {
    }
  },
  vuex: {
    actions: {
      increment: updateRadarBookmarks(
        {
          type: 'default',
          img: '',
          text: '666',
          description: ''
        }
      )
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
    &__input{
      float: left;
      width: 460px;
      height: 100%;
      background-color: yellow;
    }
  }
</style>
