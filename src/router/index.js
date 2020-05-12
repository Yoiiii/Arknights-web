import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Home from '../views/Home.vue'
import Article from '../views/Article.vue'
//import Hero from '../views/Hero.vue'
import Operator from '../views/Operator.vue'
import OperatorList from '../views/OperatorList.vue'
import ArticleList from '../views/ArticleList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    children:[
      {path:'/',name:'home',component:Home},
      {path:'/articles/:id',name:'article',component:Article,props:true},
      {path:'/operatorlist',name:'operatorlist',component:OperatorList},
      {path:'/articlelist',name:'ArticleList',component:ArticleList},
    ]
  },
  {
    path: '/operators/:id',
    name: 'operator',
    component:Operator,
    props:true
  },
]

const router = new VueRouter({
  routes
})

export default router
