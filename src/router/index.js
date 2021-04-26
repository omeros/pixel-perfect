import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
 import about from '../views/about.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: home
  },
  {
    path: '/about',
    name: 'about',
    component: about
  }
]

const router = new VueRouter({
  routes
})

export default router
