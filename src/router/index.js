import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'

Vue.use(VueRouter)

const User = {
  template: '<div>User</div>',
}

const routes = [
  {
    path: '/',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/General.vue'),
  },
  {
    path: '/unit/:name',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Unit.vue'),
    /// הסבר בניווט חייל אותו עקרון
    beforeEnter (to, from, next) {
      if (!store.state.currentSoldier) {
        next('/')
      } else {
        next()
      }
    }
  },
  {
    path: '/soldier/:id',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Soldier.vue'),
    /// לפני הניווט למסגרת חייל ספציפי נעשת בדיקה שהסטור מאותחל 
    ///  כדי למנוע כניסה ישירה שלא מדף הבית מסגרת יחידתית או חייל אחר
    /// איתחול הסטור נעשה בעת היצירה של קומפוממטות הניווט
    beforeEnter (to, from, next) {
      if (!store.state.currentSoldier) {
        next('/')
      } else {
        next()
      }
    }
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
