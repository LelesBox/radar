<template lang="html">
  <div class="label-compomemt">
    <tags class="label-compomemt__tags"></tags>
    <container class="label-compomemt__container label-container" :count="count" @mousewheel="mouseWheel">
      <ul class="label-compomemt__panel" v-el:panel>
        <page :width = 'clientWidth'>
          <div class="label-container__item" v-for="key in radarBookmarks[radarBookmarks.length - 1]">{{key.text}}</div>
        </page>
        <page v-for="pageOfBookmarks in radarBookmarks" :width = 'clientWidth'>
          <div class="label-container__item" v-for="key in pageOfBookmarks">{{key.text}}</div>
        </page>
        <page :width = 'clientWidth'>
          <div class="label-container__item" v-for="key in radarBookmarks[0]">{{key.text}}</div>
        </page>
      </ul>
    </container>
    <foot-indexs class="label-compomemt__foot" :index.sync="index" :length="radarBookmarks.length"></footfoot-indexs>
  </div>
</template>

<script>
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
      radarBookmarks: state => state.radarBookmarks.bookmarks
    }
  },
  computed: {},
  watch: {
    index: function (newval, oldval) {
      if (oldval === this.radarBookmarks.length && newval === 0) {
        return
      } else if (oldval === -1 && newval === this.radarBookmarks.length - 1) {
        return
      } else {
        this.translate(newval)
      }
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
          this.next()
        } else if (deltaY < 0 || deltaX < 0) {
          this.prev()
        }
        setTimeout(() => {
          this.isScroll = false
        }, 200)
      }
    },
    next: function () {
      if (!this.onTranslate) {
        this.index ++
      }
    },
    prev: function () {
      if (!this.onTranslate) {
        this.index --
      }
    },
    translate: function (offset) {
      let container = this.$els.panel
      if (!this.onTranslate) {
        this.onTranslate = true
        var index = this.index
        if (this.index === this.radarBookmarks.length) {
          this.index = 0
        } else if (this.index === -1) {
          this.index = this.radarBookmarks.length - 1
        }
        container.style.webkitTransition = 'transform .2s ease-in'
        setTimeout(() => { container.style.webkitTransform = `translate3d(${-offset * this.clientWidth}px, 0, 0)` }, 50)
        once(container, 'webkitTransitionEnd', () => {
          container.style.webkitTransition = ''
          if (index === this.radarBookmarks.length) {
            container.style.webkitTransform = 'translate3d(0, 0, 0)'
          } else if (index === -1) {
            container.style.webkitTransform = `translate3d(${-this.index * this.clientWidth}px, 0, 0)`
          }
          this.onTranslate = false
        })
      }
    }
  },
  components: {
    tags: tags,
    container: container,
    page: page,
    footIndexs: footIndexs
  }
}
</script>

<style lang="scss">
  .label-compomemt {
    height: 500px;
    width: 1000px;
    background: yellow;
    &__tags {
      height: 50px;
      margin-bottom: 20px;
    }
    &__container {
      height: 400px;
      overflow: hidden;
    }
    &__panel {
      position: relative;
      z-index: 1;
      margin: 0;
      padding: 0;
      left: -100%;
      height: 100%;
      font-size: 50px;
      background-color: green;
    }
    &__foot {
      height: 50px;
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
