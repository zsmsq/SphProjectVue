/**
 * 首页接口 API 封装
 */
import request from '@/utils/request'
import mockRequest from '@/utils/mockRequest'

/**
 * @desc 首页三级分类
 * @returns Promise
 */
export const reqCategoryList = () => {
  return request.get('/api/product/getBaseCategoryList')
}

/**
 * @desc 首页轮播图数据 (使用的 Mock 模拟的数据)
 * @returns Promise
 */
export const reqSwiperList = () => {
  return mockRequest.get('/swiper')
}

/**
 * @desc 首页楼层数据  (使用的 Mock 模拟的数据)
 * @returns
 */
export const reqFloorList = () => {
  return mockRequest.get('/floor')
}
