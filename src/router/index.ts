import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";


let views = import.meta.glob('../views/**/*.vue')

let routes:RouteRecordRaw[] = []
Object.entries(views).forEach(([name,module])=>{
  let [viewName] = (name.slice(9,-4)).split('/')
  routes.push({
    path:viewName,
    name:viewName,
    component:module
  })
})

let router = createRouter({
  history:createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path:'/',
      redirect:'/home',
      component:()=>import('@/layout/base.vue'),
      children:routes
    }
  ]
})


export default router