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
    <Floor />

    <!-- 品牌区域 -->
    <Brand />
  </div>
</template>

<script>
import ListContainer from '@/views/Home/ListContainer'
import Recommend from '@/views/Home/Recommend'
import Brand from '@/views/Home/Brand'
import Floor from '@/views/Home/Floor'
import Like from '@/views/Home/Like'
import Rank from '@/views/Home/Rank'
export default {
  name: 'SphHome',
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  }
}
</script>

<style lang="less" scoped></style>
