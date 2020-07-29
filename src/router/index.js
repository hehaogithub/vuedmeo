import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main'
import Userinfo from '@/components/Userinfo'
import Navbar from '@/components/Navbar.vue'
import Login from '@/components/login.vue'
import Echart from '@/components/Echarts.vue'
import datav from '@/components/datav.vue'
import dig from '@/components/digitalFlop.vue'
import card from '@/components/card.vue'


Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },{
     path: '/main',
     name: 'Main',
     component: Main,
     children:[
       {
           path: '/',
           component:Userinfo
       },{
       path: 'ec',
       component:Echart
     },{
       path: 'blog',
       component:Userinfo

     }



     ]
    },{
      path: '/dv',
      component:datav
     },{
       path: '/dig',
       component:dig
     },{
       path: '/card',
       component:card
     }]
})
