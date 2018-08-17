import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home.vue"
import Add from  "../components/Add.vue"
import Collect from "../components/Collect.vue"
import List from "../components/List.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'',
      component:Home
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/list',
      component:List
    },
    {
      path:'/collect',
      component:Collect
    },
    {
      path:'/add',
      component:Add
    }
  ]
})
