<template>
  <!--列表-->
  <div class="list-container">
    <div class="sortList clearfix">
      <div v-if="$store.state.home.swiperList.length">
        <!-- <p>{{ $store.state.home.swiperList }}</p>
        <p>{{ $store.state.home.swiperList[0] }}</p> -->

        <!-- 这一行代码控制台会报错，但是页面上数据是成功展示的 -->
        <!-- 这样的错误，一般称为 “假错误” -->

        <!-- 控制台报错原因分析： -->
        <!-- vuex 中轮播图数据是异步获取的，Vue 并不知道数据什么时候返回 -->
        <!-- 所以先去解析模板，这时候没有数据，所以展示的是 undefined ，undefined 不做任何处理 -->
        <!-- 所以：$store.state.home.swiperList[0] 这样代码不会报错的 -->
        <!-- 但是 $store.state.home.swiperList[0] 是 undefined ，undefined.imgUrl 就会报错了！！！ -->
        <!-- 所以这时候控制台就报错了 -->

        <!-- 异步获取数据，数据终究会返回，数据肯定会返回后交给 Vuex 中的 swiperList -->
        <!-- 模板解析的时候数据没有返回：所有  $store.state.home.swiperList[0] 是 undefined  -->
        <!-- 等数据返回以后，有数据了，数据驱动视图更新，就会拿最新的数据渲染的页面 -->
        <!-- 所以页面上就能够展示正常的数据了 -->

        <!-- 解决方案： -->
        <!-- 1. 数据初始化的时候定义好结构：swiperList: [{ imgUrl: '' }] -->
        <!-- 如果数据量小，可以这样定义，但是如果数据量大或者不知道有多少条数据的时候，不能这样定义了 -->

        <!-- 2. 使用 v-if 判断是否有数据，有数据就展示，没有数据就不进行渲染 -->
        <!-- <p>{{ $store.state.home.swiperList[2].imgUrl }}</p> -->

        <!-- 3. 如果是 v-for 不需要做特殊的处理，因为 v-for 能渲染 undefined ，只是不进行任何解析而已 -->
        <ul>
          <!-- <li v-for="item in $store.state.home.swiperList" :key="item.id"></li> -->
        </ul>
      </div>
      <div class="center" v-if="swiperList.length">
        <swiper class="swiper" :options="swiperOption">
          <!-- 轮播图的每一项 -->
          <swiper-slide class="slide-item" v-for="item in swiperList" :key="item.id">
            <img :src="item.imgUrl" alt="" />
          </swiper-slide>

          <!-- 轮播图指示器 -->
          <div class="swiper-pagination" slot="pagination"></div>

          <!-- 轮播图左右箭头 -->
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="right">
        <div class="news">
          <h4>
            <em class="fl">尚品汇快报</em>
            <span class="fr tip">更多 ></span>
          </h4>
          <div class="clearix"></div>
          <ul class="news-list unstyled">
            <li><span class="bold">[特惠]</span>备战开学季 全民半价购数码</li>
            <li><span class="bold">[公告]</span>备战开学季 全民半价购数码</li>
            <li><span class="bold">[特惠]</span>备战开学季 全民半价购数码</li>
            <li><span class="bold">[公告]</span>备战开学季 全民半价购数码</li>
            <li><span class="bold">[特惠]</span>备战开学季 全民半价购数码</li>
          </ul>
        </div>
        <ul class="lifeservices">
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">话费</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">机票</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">电影票</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">游戏</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">彩票</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">加油站</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">酒店</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">火车票</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">众筹</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">理财</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">礼品卡</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">白条</span>
          </li>
        </ul>
        <div class="ads">
          <img src="./images/ad1.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'SphListContainer',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        // 打开页面的时候，指示点默认是最后一个
        // 原因：打开网页的瞬间，是没有数据的，因为数据的获取是异步的
        //      但是这时候，Vue 开始解析模板，因为没有数据，但是又对模板进行了解析，导致了索引顺序的错乱
        // 解决方式：配置一个新的属性 initialSlide ，将其值设置为 1
        // 用来设置 设定初始化时slide的索引是几，默认是 0
        // 这个问题在最新版的 swiper 中解决了，但是最新的版本的是给 Vue3 使用的
        // 但是目前我们是在 Vue2 中使用，只能使用这种 hack 方式实现对应的功能
        // initialSlide: 1,
        slidesPerView: 1, // 一屏展示几张轮播图
        spaceBetween: 30, // 每个轮播图之间的间隙
        loop: true, // 是否循环展示轮播图

        // 轮播图自动滚动效果
        // autoplay: true,
        autoplay: {
          delay: 2000 // 每隔两秒切换一张轮播图
        },

        // 轮播图小圆点指示器
        pagination: {
          el: '.swiper-pagination', // 将小圆点放置到哪一个盒子中
          clickable: true // 小圆点是否能够点击
        },
        navigation: {
          nextEl: '.swiper-button-next', // 向右的箭头存放到容器
          prevEl: '.swiper-button-prev' // 向左的箭头存放到容器
        }
      }
    }
  },
  created() {
    this.$store.dispatch('home/getSwiperList')
  },
  computed: {
    ...mapState('home', ['swiperList'])
  }
}
</script>

<style lang="less" scoped>
.list-container {
  width: 1200px;
  margin: 0 auto;

  .sortList {
    height: 464px;
    padding-left: 210px;

    .center {
      box-sizing: border-box;
      width: 740px;
      height: 100%;
      padding: 5px;
      float: left;
    }

    .right {
      float: left;
      width: 250px;

      .news {
        border: 1px solid #e4e4e4;
        margin-top: 5px;

        h4 {
          border-bottom: 1px solid #e4e4e4;
          padding: 5px 10px;
          margin: 5px 5px 0;
          line-height: 22px;
          overflow: hidden;
          font-size: 14px;

          .fl {
            float: left;
          }

          .fr {
            float: right;
            font-size: 12px;
            font-weight: 400;
          }
        }

        .news-list {
          padding: 5px 15px;
          line-height: 26px;

          .bold {
            font-weight: 700;
          }
        }
      }

      .lifeservices {
        border-right: 1px solid #e4e4e4;
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;

        .life-item {
          border-left: 1px solid #e4e4e4;
          border-bottom: 1px solid #e4e4e4;
          margin-right: -1px;
          height: 64px;
          text-align: center;
          position: relative;
          cursor: pointer;
          width: 25%;

          .list-item {
            background-image: url(./images/icons.png);
            width: 61px;
            height: 40px;
            display: block;
          }

          .service-intro {
            line-height: 22px;
            width: 60px;
            display: block;
          }

          &:nth-child(1) {
            .list-item {
              background-position: 0px -5px;
            }
          }

          &:nth-child(2) {
            .list-item {
              background-position: -62px -5px;
            }
          }

          &:nth-child(3) {
            .list-item {
              background-position: -126px -5px;
            }
          }

          &:nth-child(4) {
            .list-item {
              background-position: -190px -5px;
            }
          }

          &:nth-child(5) {
            .list-item {
              background-position: 0px -76px;
            }
          }

          &:nth-child(6) {
            .list-item {
              background-position: -62px -76px;
            }
          }

          &:nth-child(7) {
            .list-item {
              background-position: -126px -76px;
            }
          }

          &:nth-child(8) {
            .list-item {
              background-position: -190px -76px;
            }
          }

          &:nth-child(9) {
            .list-item {
              background-position: 0px -146px;
            }
          }

          &:nth-child(10) {
            .list-item {
              background-position: -62px -146px;
            }
          }

          &:nth-child(11) {
            .list-item {
              background-position: -126px -146px;
            }
          }

          &:nth-child(12) {
            .list-item {
              background-position: -190px -146px;
            }
          }
        }
      }

      .ads {
        margin-top: 5px;

        img {
          opacity: 0.8;
          transition: all 400ms;

          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>
