<template lang="html">
  <div class="tag">
    <slot>
      <ul>
        <li v-for="tag in tags">{{tag}}</li>
      </ul>
    </slot>
  </div>
</template>

<script>
export default {
  vuex: {
    getters: {
      tags: state => state.radarBookmarks.types
    }
  }
}
</script>

<style lang="scss" scoped>
  .tag {
    width: 100%;
    position: relative;
    ul {
      list-style: none;
      display: inline-block;
      margin: 0;
      padding: 0;
      position: absolute;
      left: 50%;
      top:50%;
      transform: translate(-50%,-50%);
      li {
        float: left;
        height: 100%;
        margin: 0 10px;
        font-size: 28px;
      }
    }
  }
</style>
