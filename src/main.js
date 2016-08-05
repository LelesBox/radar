import Vue from 'vue'
import VueRouter from 'vue-router'
import route from './route'
Vue.use(VueRouter)

let router = new VueRouter()

router.map(route)
router.start(Vue.extend({}), 'body')
