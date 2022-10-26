/**
 * 管理 Home 首页中的状态
 */

import { reqCategoryList, reqSwiperList, reqFloorList } from '@/api/home'

const home = {
  namespaced: true,
  state: {
    categoryList: [], // 三级分类数据
    swiperList: [], // 轮播图数据
    floorList: [] // 楼层数据
  },
  mutations: {
    // 存储三级分类数据
    saveCategory(state, categoryList) {
      state.categoryList = categoryList.slice(0, 15)
    },

    // 存储轮播图数据
    saveSwiperList(state, swiperList) {
      state.swiperList = swiperList
    },

    // 存储楼层区域的数据
    saveFloorList(state, floorList) {
      state.floorList = floorList
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
    },

    // 获取轮播图数据
    async getSwiperList(context) {
      const res = await reqSwiperList()

      // 业务状态码，查看后端是否逻辑正常
      if (res.code === 200) {
        context.commit('saveSwiperList', res.data)
      } else {
        alert(res.message)
      }
    },

    // 获取楼层数据
    async getFloorList(context) {
      const res = await reqFloorList()
      console.log(res)

      if (res.code === 200) {
        context.commit('saveFloorList', res.data)
      } else {
        alert(res.message)
      }
    }
  },
  getters: {}
}

export default home
