<template lang="html">
  <div class="page" :style="pageStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['width'],
  computed: {
    pageStyle: function () {
      return {
        width: this.width + 'px'
      }
    }
  },
  ready: function () { },
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style lang="scss" scoped>
  .page {
    float: left;
    height: 100%;
    overflow: hidden;
  }
</style>
