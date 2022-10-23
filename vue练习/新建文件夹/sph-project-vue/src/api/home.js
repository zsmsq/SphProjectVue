import request from '@/utils/request'
/**
 * @desc 首页三级分类
 * @returns Promise
 */
export const reqCategoryList = () => {
  return request.get('/api/product/getBaseCategoryList')
}
