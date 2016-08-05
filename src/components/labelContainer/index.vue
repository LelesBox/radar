<template lang="html">
  <div class="label-compomemt">
    <tags class="label-compomemt__tags"></tags>
    <container class="label-compomemt__container lable-container">
      {{count}}
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
    width: 6rem;
    min-width: 600px;
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
</style>
