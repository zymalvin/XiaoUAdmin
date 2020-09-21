import Vue from 'vue'
import Router from 'vue-router'
import Category from '@/pages/Category/Category'
import Detail from '@/pages/Detail/Detail'
import Home from '@/pages/Home/Home'
import Cart from '@/pages/Home/Cart'
import Index from '@/pages/Home/Index'
import My from '@/pages/Home/My'
import Login from '@/pages/Login/Login'
import Register from '@/pages/Register/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:"/home"
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '/home',
      component: Home,
      children:[
        {
          path:"home",
          redirect:"/home/index"
        },
        {
          path:"index",
          component:Index
        },
        {
          path:"my",
          component:My
        },
        {
          path:"cart",
          component:Cart
        } 
      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    }
  ]
})
