<template>
  <div class="floor">
    <div class="py-container">
      <div class="title clearfix">
        <h3 class="fl">{{ floor.name }}</h3>
        <div class="fr">
          <ul class="nav-tabs clearfix">
            <li class="active" v-for="(nav, index) in floor.navList" :key="index">
              <a href="#tab1" data-toggle="tab">{{ nav.text }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="tab-content">
        <div class="tab-pane">
          <div class="floor-1">
            <div class="blockgary">
              <ul class="jd-list">
                <li v-for="(item, index) in floor.keywords" :key="index">{{ item }}</li>
              </ul>
              <img :src="floor.imgUrl" />
            </div>

            <!-- 轮播图 -->
            <div class="floorBanner">
              <swiper class="swiper" :options="swiperOption">
                <!-- 轮播图的每一项 -->
                <swiper-slide v-for="item in floor.carouselList" :key="item.id">
                  <img :src="item.imgUrl" alt="" />
                </swiper-slide>

                <!-- 轮播图指示器 -->
                <div class="swiper-pagination" slot="pagination"></div>

                <!-- 轮播图左右箭头 -->
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
              </swiper>
            </div>

            <div class="split">
              <span class="floor-x-line"></span>
              <div class="floor-conver-pit">
                <img :src="floor.recommendList[0]" />
              </div>
              <div class="floor-conver-pit">
                <img :src="floor.recommendList[1]" />
              </div>
            </div>
            <div class="split center">
              <img :src="floor.bigImg" />
            </div>
            <div class="split">
              <span class="floor-x-line"></span>
              <div class="floor-conver-pit">
                <img :src="floor.recommendList[2]" />
              </div>
              <div class="floor-conver-pit">
                <img :src="floor.recommendList[3]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'FloorEl',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    floor: {
      type: Object
    },
    index: {
      type: Number
    }
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1, // 一屏展示几张轮播图
        spaceBetween: 30, // 每个轮播图之间的间隙
        loop: true, // 是否循环展示轮播图

        // 轮播图自动滚动效果
        // autoplay: true
        autoplay: {
          // 使用索引的方式进行操作和处理
          // 0 / 2 === 0  1 / 2 == 0.5
          // 如果等于 0 ，就让 delay = 2000
          // 如果不等于 0， 就让 delay = 3000
          delay: this.index / 2 === 0 ? 2000 : 3000 // 每隔两秒切换一张轮播图
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
  }
}
</script>

<style lang="less" scoped>
.floor {
  margin-top: 15px;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .title {
      .fl {
        float: left;
        color: #c81623;
        font-size: 20px;
        line-height: 30px;
        margin: 9px 0;
        font-weight: 700;
      }

      .fr {
        float: right;

        .nav-tabs {
          margin: 10px 0 0;
          display: inline-block;

          li {
            float: left;
            line-height: 18px;

            a {
              padding-top: 1px;
              font-weight: 400;
              background-color: #fff;

              &::after {
                content: '|';
                padding: 0 10px;
              }
            }

            &:nth-child(7) {
              a {
                &::after {
                  content: '';
                }
              }
            }

            &.active {
              a {
                color: #e1251b;
              }
            }
          }
        }
      }
    }

    .tab-content {
      border-top: 2px solid #c81623;
      border-bottom: 1px solid #e4e4e4;

      .tab-pane {
        .floor-1 {
          height: 360px;
          display: flex;

          .blockgary {
            width: 210px;
            height: 100%;
            background: #f7f7f7;

            .jd-list {
              padding: 15px 0;
              overflow: hidden;

              li {
                list-style-type: none;
                float: left;
                width: 40%;
                margin: 0 10px;
                border-bottom: 1px solid #e4e4e4;
                text-align: center;
                line-height: 26px;
              }
            }

            img {
              width: 100%;
            }
          }

          .floorBanner {
            width: 330px;
            height: 100%;
          }

          .split {
            width: 220px;
            height: 100%;
            position: relative;

            .floor-x-line {
              position: absolute;
              background: #e4e4e4;
              width: 220px;
              height: 1px;
              top: 180px;
            }

            .floor-conver-pit {
              width: 100%;
              height: 50%;

              img {
                width: 100%;
                height: 100%;
                transition: all 400ms;

                &:hover {
                  opacity: 0.8;
                }
              }
            }
          }

          .center {
            border: 1px solid #e4e4e4;
          }
        }
      }
    }
  }
}
</style>
