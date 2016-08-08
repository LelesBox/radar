<template lang="html">
  <div class="label-compomemt">
    <tags class="label-compomemt__tags"></tags>
    <container class="label-compomemt__container label-container">
      <label-item class="label-container__item" v-for="key in count"></label-item>
    </container>
    <foot-indexs class="label-compomemt__foot"></footfoot-indexs>
  </div>
</template>

<script>
import labelItem from './item'
import tags from './tags'
import container from './container'
import page from './page'
import footIndexs from './indexs'
import { getCount } from '../../vuex/getters'

export default {
  data: function () {
    return {
    }
  },
  vuex: {
    getters: {
      count: getCount
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {
    labelItem: labelItem,
    tags: tags,
    container: container,
    page: page,
    footIndexs: footIndexs
  }
}
</script>

<style lang="scss">
  .label-compomemt{
    position: absolute;
    transform: translate(-50%,-50%);
    left: 50%;
    top:50%;
    height: 500px;
    // width: 6rem;
    min-width: 1000px;
    background-color: red;
    &__tags {
      height: 50px;
      background-color: green;
    }
    &__container {
      height: 400px;
      background-color: yellow;
    }
    &__foot {
      height: 50px;
      background-color: pink;
    }
  }

  .label-container{
    &__item{
      width: 16.6%;
      height: 33.33%;
      float: left;
      border: 1px solid red;
    }
  }
</style>
