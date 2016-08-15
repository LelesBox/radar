<template lang="html">
  <div class="label-compomemt">
    <tags class="label-compomemt__tags"></tags>
    <container class="label-compomemt__container label-container" :count="count" @mousewheel="mouseWheel">
      <ul class="label-compomemt__panel" v-el:panel>
        <page :width = 'clientWidth'>
          <label-item class="label-container__item" v-for="key in radarBookmarks[radarBookmarks.length - 1]">{{key.text}}</label-item>
        </page>
        <page v-for="pageOfBookmarks in radarBookmarks" :width = 'clientWidth'>
          <label-item class="label-container__item" v-for="key in pageOfBookmarks">{{key.text}}</label-item>
        </page>
        <page :width = 'clientWidth'>
          <label-item class="label-container__item" v-for="key in radarBookmarks[0]">{{key.text}}</label-item>
        </page>
      </ul>
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
import { once } from '../../util'

export default {
  data: function () {
    return {
      isScroll: false,
      clientWidth: 0,
      onTranslate: false,
      index: 0
    }
  },
  vuex: {
    getters: {
      count: getCount,
      radarBookmarks: state => state.radarBookmarks
    }
  },
  computed: {},
  watch: {
    index: function (oldval, newval) {
      console.log(`oldvalue:${oldval},newvalue:${newval}`)
    }
  },
  ready: function () {
    this.clientWidth = this.$el.clientWidth
    this.$els.panel.style.width = (this.$el.clientWidth * (this.radarBookmarks.length + 2)) + 'px'
  },
  methods: {
    mouseWheel: function (e) {
      if (!this.isScroll) {
        this.isScroll = true
        var deltaX = e.deltaX
        var deltaY = e.deltaY
        if (deltaY > 0 || deltaX > 0) {
          console.log('next page')
        } else if (deltaY < 0 || deltaX < 0) {
          console.log('prev page')
        }
        setTimeout(() => {
          this.isScroll = false
        }, 1000)
      }
    },
    translate: function (offset) {
      let container = this.$els.panel
      if (!this.onTranslate) {
        container.style.webkitTransition = 'transform .2s ease'
        setTimeout(() => { container.style.webkitTransform = `translate3d(${offset * this.clientWidth}px, 0, 0)` }, 50)
        once(container, 'webkitTransitionEnd', () => {
          // container.style.webkitTransition = ''
          // 边界问题
          console.log('done')
        })
      }
    }
  },
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
    transform: scale(.3);
    // transform: translate(-50%,-50%) scale(.5);
    // left: 50%;
    // top:50%;
    left: 0;
    height: 500px;
    width: 1000px;
    background-color: red;
    &__tags {
      height: 50px;
      background-color: green;
    }
    &__container {
      height: 400px;
      background-color: yellow;
    }
    &__panel {
      position: relative;
      margin: 0;
      padding: 0;
      height: 100%;
      left: -100%;
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
