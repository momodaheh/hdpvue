import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
 {
  path:'/',
  name:'empLogin',
  component:()=> import('../views/empLogin.vue')
 },
 {
  path:'/adminLogin',
  name:'adminLogin',
  component:()=> import('../views/adminLogin.vue')
 },
 {
  path:'/teacher',
  name:'teacher',
  component:()=> import('../views/teacher.vue')
 },
 {
  path:'/emp',
  name:'emp',
  component:()=> import('../views/emp.vue'),
 },
 {
  path:'/main',
  name:'main',
  component:()=>import('../views/admin/main.vue'),
  children:[
    {
      path:'user_mgt',
      name:'user_mgt',
      component:()=> import('../views/admin/user_mgt.vue')
    },
    {
      path:'emp_mgt',
      name:'emp_mgt',
      component:()=> import('../views/admin/emp_mgt.vue')
    }
  ]
 }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
