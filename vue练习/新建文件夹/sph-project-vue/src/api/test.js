/**
 * Test 组件中使用的 Ajax 网络请求封装
 */

// 导入封装好的 request.js 文件
import request from '@/utils/request'

/**
 * @desc 请求三级分类分类数据
 * @params {} xxxx
 * @returns Promise
 */
export const reqCategoryList = () => {
  return request.get('/api/product/getBaseCategoryList').then()
}
