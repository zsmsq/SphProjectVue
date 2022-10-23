<template>
  <div>
    <button @click="getData">测试网络请求</button>
  </div>
</template>

<script>
import { reqCategoryList } from '@/api/test'
export default {
  name: 'VTest',
  methods: {
    async getData () {
      const res = await reqCategoryList()
      console.log(res)
    }
  }
}
</script>

<style lang="less" scoped></style>
