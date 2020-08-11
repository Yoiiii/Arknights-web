import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Main.vue'),
    children:[
      {path:'/',name:'home',component:() => import('../views/Home.vue')},
      {path:'/articles/:id',name:'article',component:() => import('../views/Article.vue'),props:true},
      {path:'/operatorlist',name:'operatorlist',component:() => import('../views/OperatorList.vue')},
      {path:'/articlelist',name:'ArticleList',component:() => import('../views/ArticleList.vue')},
    ]
  },
  {
    path: '/operators/:id',
    name: 'operator',
    component:() => import('../views/Operator.vue'),
    props:true
  },
]

const router = new VueRouter({
  routes
})

export default router
