<template lang="html">
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    count: Number
  },
  data: function () {
    return {
      pageCount: 16
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
</style>
