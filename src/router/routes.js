/*
路由模块
 */

import Home from '../pages/Home/Home'
import Category from '../pages/Category/Category'
import Things from '../pages/Things/Things'
import ShopCart from '../pages/ShopCart/ShopCart'
import Personal from '../pages/Personal/Personal'

export default [
  {
    path:'/home',
    component:Home,
    meta:{
      isShow:true
    }
  },
  {
    path:'/category',
    component:Category,
    meta:{
      isShow:true
    }
  },
  {
    path:'/things',
    component:Things,
    meta:{
      isShow:true
    }
  },
  {
    path:'/shopcart',
    component:ShopCart,
    meta:{
      isShow:true
    }
  },
  {
    path:'/personal',
    component:Personal
  },
  {
    path:'/',
    redirect:'/home'
  }
]
