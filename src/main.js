import Vue from 'vue'
import App from './App.vue'
import * as api from './api'

Vue.config.productionTip = false

import '../src/assets/iconfont/iconfont.css'
import '../src/assets/scss/style.scss'
import router from './router'

//轮播
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import Card from './components/Card.vue'
Vue.component('m-card',Card)

import ListCard from './components/ListCard.vue'
Vue.component('m-list-card',ListCard)

import './utils/FastClick'//移动端点击延迟
import './utils/plugin'//屏幕自适应

Vue.prototype.$http=api//引入接口


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
