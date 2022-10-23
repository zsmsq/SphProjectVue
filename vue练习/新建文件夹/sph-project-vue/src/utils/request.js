import axios from 'axios'

// 导入进度条库
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 创建实例
const request = axios.create({
  baseURL: '/sph', // 请求基准路径
  timeout: 5000 // 超时时间
})

// 添加请求拦截器
request.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    // 开启、展示进度条
    NProgress.start()
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
request.interceptors.response.use(
  (response) => {
    // 关闭、隐藏进度条
    NProgress.done()
    console.log(response.data)
    return response.data
  },
  (error) => {
    alert(error.message)
    return new Promise(() => {})
  }
)

export default request
