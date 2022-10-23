import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入路由组件
import Home from '@/views/Home'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Search from '@/views/Search'
import Test from '@/views/Test'

Vue.use(VueRouter)

// VueRouter 实例化 以后产生 $router 实例
// 通过 this.$router.xx 调用一个方法的时候，会现在本身进行查找，
// 如果没有，就会找构造函数的原型
// 所以 push、replace 方法实际上都在 VueRouter 原型上

// const cachePush = VueRouter.prototype.push

// this.$router.push('/', () => {}, () => {})
// this.$router.push('/', () => {})
// this.$router.push('/', undefined, () => {})
// this.$router.push('/')
// VueRouter.prototype.push = function (history, successCb, errorCb) {
//   if (successCb || errorCb) {
//     // cachePush.call(this, ) 类似于 this.$router.push()
//     cachePush.call(this, history, successCb, errorCb)
//   } else {
//     cachePush.call(this, history, () => {})
//   }
// }

const methodArr = ['push', 'replace']
methodArr.forEach((method) => {
  // 将 路由原型上的方法进行缓存
  const cacheMethod = VueRouter.prototype[method]

  VueRouter.prototype[method] = function (history, successCb, errorCb) {
    if (successCb || errorCb) {
      // call() 方法使用一个指定的 this 值和一个或多个参数来调用一个函数。
      // this 指 this.$router.push/replace
      cacheMethod.call(this, history, successCb, errorCb)
    } else {
      cacheMethod.call(this, history, () => {})
    }
  }
})

const routes = [
  {
    path: '/',
    redirect: '/home' // 重定向到 /home 路由
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/login',
    component: Login,
    // 通过 meta 属性定义元信息(程序员自己定义的属性)
    // 面包屑、权限管理
    meta: { isShowFooter: true }
  },
  {
    path: '/register',
    component: Register,
    meta: { isShowFooter: true }
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/test',
    component: Test
  }
]

const router = new VueRouter({
  routes
})

export default router
