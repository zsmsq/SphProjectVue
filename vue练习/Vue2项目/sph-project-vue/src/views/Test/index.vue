<template>
  <div>
    <button @click="getData">测试网络请求</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'VTest',
  data () {
    return {
      list: []
    }
  },

  methods: {
    async getData () {
      // 如果请求地址以 / 开头，会找 axios 实例配置的 BaseURL
      // 获取轮播图数据
      const swiperres = await axios.get('http://www.baidu.com/swiper')
      console.log(swiperres)

      // 获取楼层数据
      const floorres = await axios.get('http://www.baidu.com/floor')
      console.log(floorres)
    }
  }
}
</script>

<style lang="less" scoped></style>
