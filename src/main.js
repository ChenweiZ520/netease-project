import Vue from 'vue'
import 'lib-flexible'
import router from './router'
import store from './store/index'
import './filter'
import App from './App'
import './mock/mock-server'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
