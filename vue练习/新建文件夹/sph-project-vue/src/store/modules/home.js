/**
 * 管理 Home 首页中的状态
 */
import { reqCategoryList } from '@/api/home'
const home = {
  namespaced: true,
  state: {
    categoryList: [] // 三级分类数据
  },
  mutations: {
    saveCategory(state, categoryList) {
      state.categoryList = categoryList.slice(0, 15)
    }
  },
  actions: {
    // 获取三级分类的数据
    async getCategoryList(context) {
      const res = await reqCategoryList()

      // 如果 code 等于 200，说明数据返回成功
      if (res.code === 200) {
        // 将返回的数据通过 mutations 对 state 进行赋值
        // 如果在 actions 中调用 mutations 方法不需要加模块名
        // context 就是指当前模块的上下文，能够找到对应的模块名
        // 如果是 mutations 调用 mutations，需要通过 this 调用，这时候需要指定 模块名
        context.commit('saveCategory', res.data)
      } else {
        alert(res.message)
      }
    }
  },
  getters: {}
}

export default home
