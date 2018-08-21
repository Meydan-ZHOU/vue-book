import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      component:() => import("../components/Home.vue"),
      meta:{keepAlive:true}
    },
    {
      path:'/list',
      component:() => import("../components/List.vue")
    },
    {
      path:'/datail/:bid',
      component:() => import("../components/Detail.vue"),
      name:"Detail"
    },
    {
      path:'/collect',
      component:() => import("../components/Collect.vue")
    },
    {
      path:'/add',
      component:() => import("../components/Add.vue")
    }
  ],
  linkActiveClass:'active'
})
