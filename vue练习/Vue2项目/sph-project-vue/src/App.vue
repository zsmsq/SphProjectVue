<template>
  <div id="app">
    <!--  头部区域-->
    <Header/>

    <!-- 展示其他区域-->
    <router-view/>

    <!--  底部区域-->
    <Footer/>
  </div>
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Footer,
    Header
  }
}
</script>

<style lang="less"></style>
