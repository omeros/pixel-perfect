import Vue from 'vue'
import App from './app.vue'
import router from './router'
import './assets/styles/main.scss'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
