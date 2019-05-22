/*
路由模块
 */

import Home from '../pages/Home/Home'
import Category from '../pages/Category/Category'
import Things from '../pages/Things/Things'
import ShopCart from '../pages/ShopCart/ShopCart'
import Personal from '../pages/Personal/Personal'
import Search from '../pages/Search/Search'
import phoneLogin from '../pages/Personal/phoneLogin/phoneLogin'
import emailLogin from '../pages/Personal/emailLogin/emailLogin'
import Recommend from '../pages/Things/Recommend/Recommend'
import Selected from '../pages/Things/Selected/Selected'

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
    children:[
      {
        path:'/things/recommend',
        component:Recommend,
        meta:{
          isShow:true
        }
      },
      {
        path:'/things/selected',
        component:Selected
      },
      {
        path:'/things',
        redirect: '/things/recommend'
      }

    ],
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
    component:Personal,
    children:[
      {
        path:'/personal/phoneLogin',
        component:phoneLogin
      },
      {
        path:'/personal/emailLogin',
        component:emailLogin
      }
    ]
  },
  {
    path:'/search',
    component:Search
  },
  {
    path:'/',
    redirect:'/home'
  }
]
