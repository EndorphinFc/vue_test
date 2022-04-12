import { createRouter,createWebHistory } from "vue-router"
// 配置路由对象,懒加载
const Home=()=>import('@/views/home/home')
const Category=()=>import('@/views/category/category')
const Shopcart=()=>import('@/views/shopcart/shopcart')
const Profile=()=>import('@/views/profile/profile')

// 路由配置
const routes=[
  {
    path:'/',//默认路径
    redirect:'/home'
  },
  {
    path:'/home',
    // components：局部组件要放在vue里
    // component：全局组件
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/shopcart',
    component:Shopcart
  },
  {
    path:'/profile',
    component:Profile
  }

]
// 
const routerHistory=createWebHistory()
const router=createRouter({
  history:routerHistory,
  routes,
})
export default router
