// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { Input } from 'element-ui'
// import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes
})
Vue.config.productionTip = false
//Vue.use(ElementUI)
Vue.prototype.$ELEMENT = { size: 'small'}
Vue.component(Input.name, Input)
/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: `<div id="app">
              <transition name="fade" mode="out-in">
                <router-view class="view"></router-view>
              </trasition>
             </div>`,
  components: {App}
})
