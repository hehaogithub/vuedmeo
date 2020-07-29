// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui' //New Added
import 'element-ui/lib/theme-chalk/index.css' //New Added
import axios from 'axios'
import echarts from 'echarts'
import  'echarts/theme/hh.js'
import DataV from '@jiaminghi/data-view'
Vue.config.productionTip = false
Vue.prototype.$axios=axios
Vue.prototype.$echarts=echarts
Vue.use(ElementUI) //New Added
Vue.use(DataV)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
