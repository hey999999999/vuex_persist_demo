import '@babel/polyfill'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.mixin({cancan:true});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
