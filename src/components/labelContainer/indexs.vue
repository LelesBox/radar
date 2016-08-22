<template lang="html">
  <div class="index-container">
    <ul>
      <li v-for="key in length" :class="{active: key === index}" @click="select(key)"></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['index', 'length'],
  methods: {
    select: function (index) {
      this.index = index
    }
  }
}
</script>

<style lang="scss" scoped>
  .index-container {
    position: relative;
    ul {
      display: inline-block;
      position: absolute;
      left: 50%;
      top:50%;
      transform: translate(-50%,-50%);
      margin: 0;
      padding: 0;
      list-style: none;
    }
    li{
      float: left;
      height: 20px;
      width: 20px;
      margin: 0 10px;
      border-radius: 50%;
      background-color: gray;
      cursor: pointer;
      &.active{
        background-color: rgba(231, 76, 60, 0.5);
      }
    }
  }
</style>
