import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/styles/reset.css'

// 将组件注册为全局组件
import TypeNav from './components/TypeNav'
Vue.component('TypeNav', TypeNav)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
