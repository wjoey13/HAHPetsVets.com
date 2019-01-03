import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/StaffPage',
      name: 'StaffPage',

      component: () => import('./components/StaffPage.vue')
    },
  ]
})