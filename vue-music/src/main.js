// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import 'common/stylus/index.styl'
import VueLazyLoad from 'vue-lazyload'

fastclick.attach(document.body)//对以下所有div// 的点击都没有300毫秒的延迟
Vue.use(VueLazyLoad,{
  loading:require('common/image/default.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
