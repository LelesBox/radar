<template lang="html">
  <div class="text">
    笔记：
    <ul>
      <li>
        当border为透明色时 应该设定background-clip的属性为 padding-box
      </li>
      <li>
        当border为实色时 则使用默认的background-clip为border-box
      </li>
    </ul>
  </div>
  <div class="container">
    透明边框
  </div>

  <div class="container c2">
    实色边框
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {},
  components: {}
}
</script>

<style lang="css" scoped>
  .container {
    border: 20px solid hsla(0, 0%, 100%, 0.5);
    /*border: 20px solid red;*/
    background: white;
    background-clip: padding-box;
    height: 300px;
    width: 300px;
  }

  .c2 {
    border: 20px solid red;
    background: white;
    background-clip: border-box;
  }
</style>
