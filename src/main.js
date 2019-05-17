import Vue from 'vue'
import 'lib-flexible'
import router from './router'
import App from './App'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
