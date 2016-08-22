<template lang="html">
  <div class="tag">
    <slot>

    </slot>
  </div>
</template>

<script>
export default {
  vuex: {
    getters: {
      tags: state => state.bookmarkTypes
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
