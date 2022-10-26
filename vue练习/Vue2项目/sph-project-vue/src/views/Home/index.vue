<template>
  <div>
    <!-- 三级分类 -->
    <TypeNav />

    <!-- 轮播图和右侧导航 -->
    <ListContainer />

    <!-- ctrl + → -->
    <!-- 今日推荐 -->
    <Recommend />

    <!-- 商品排行 -->
    <Rank />

    <!-- 猜你喜欢 -->
    <Like />

    <!-- 楼层 -->
    <Floor v-for="(floor, index) in floorList" :key="index" :floor="floor" :index="index" />

    <!-- 品牌区域 -->
    <Brand />
  </div>
</template>

<script>
// import TypeNav from './TypeNav'
import ListContainer from './ListContainer'
import Recommend from './Recommend'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'

export default {
  name: 'SphHome',
  components: {
    // TypeNav,
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  created() {
    this.$store.dispatch('home/getFloorList')
  },
  computed: {
    // ...mapState({ floorList: (state) => state.home.floorList })
    floorList() {
      return this.$store.state.home.floorList
    }
  }
}
</script>

<style lang="less" scoped></style>
