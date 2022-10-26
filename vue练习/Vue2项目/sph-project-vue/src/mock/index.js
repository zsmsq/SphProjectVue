import Mock from 'mockjs'

// 导入模拟的数据
import swiper from './swiper.json'
import floor from './floor.json'

// 通过 mock 方法定拦截规则
// 第一个参数：请求的地址 （自定义，前端程序员自己写的，）
// 第二个参数：请求的方式
// 第三个参数：返回的数据
// Mock.mock('http://www.baidu.com', 'get', [{ id: 1, name: 'Tom' }])

// 必须模拟后端接口返回的所有的数据信息
// 模拟好以后，以后只要后端提供了真正的接口，只要替换真正的地址即可
Mock.mock('http://www.baidu.com/swiper', 'get', {
  code: 200,
  message: '成功',
  data: swiper,
  ok: true
})

Mock.mock('http://www.baidu.com/floor', 'get', {
  code: 200,
  message: '成功',
  data: floor,
  ok: true
})
