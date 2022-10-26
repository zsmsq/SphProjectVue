<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div class="nav-left" @mouseleave="showTypeNav">
        <h2 class="all" @mouseenter="isShowNav = true">全部商品分类</h2>
        <transition
          enter-active-class="animate__animated animate__fadeIn"
          leave-active-class="animate__animated animate__fadeOut"
        >
          <div class="sort" v-if="isShowNav">
            <div class="all-sort-list2" @click="toSearch">
              <div class="item" v-for="cate1 in categoryList" :key="cate1.categoryId">
                <h3>
                  <a data-level="1" :data-id="cate1.categoryId">{{ cate1.categoryName }}</a>
                </h3>
                <div class="item-list clearfix">
                  <div class="subitem">
                    <dl class="fore" v-for="cate2 in cate1.categoryChild" :key="cate2.categoryId">
                      <dt>
                        <a data-level="2" :data-id="cate2.categoryId">{{ cate2.categoryName }}</a>
                      </dt>
                      <dd>
                        <em v-for="cate3 in cate2.categoryChild" :key="cate3.categoryId">
                          <a data-level="3" :data-id="cate3.categoryId">{{ cate3.categoryName }}</a>
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import 'animate.css'

export default {
  name: 'SphTypeNav',
  data() {
    return {
      // isShowNav: false
      isShowNav: this.$route.path === '/home'
    }
  },
  created() {
    // 调用 action，获取分类数据
    // this.$store.dispatch('home/getCategoryList')
    this.getCategoryList()
  },
  mounted() {
    // console.log(this)
  },
  methods: {
    ...mapActions('home', ['getCategoryList']),

    // 到搜索页面
    toSearch(e) {
      const { level, id } = e.target.dataset
      const { innerText } = e.target
      const { keyword } = this.$route.query

      console.log(level, id, innerText)

      // 分类的 id  category1Id(一级分类 ID)  category2Id(二级分类 ID)  category3Id(三级分类 ID)
      // categoryName=燃气灶&category3Id=100
      if (level) {
        this.$router.push({
          path: '/search',
          query: {
            keyword,
            categoryName: innerText,
            [`category${level}Id`]: id
          }
        })
      }
    },

    // 控制三级分类的隐藏和展示
    showTypeNav() {
      if (this.$route.path !== '/home') {
        this.isShowNav = false
      }
    }
  },
  computed: {
    ...mapState('home', ['categoryList'])
    // categoryList() {
    //   return this.$store.state.home.categoryList
    // }
  }
}
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;
      animation-duration: 0.3s;

      .all-sort-list2 {
        .item {
          a {
            cursor: pointer;
          }

          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
