<template>
	<div class="category_container">
    <div class="category_title">
      <div class="title_search" @click="$router.push('/search')">
        <i class="title_icon"></i>
        <span>搜索商品，共22651款好物</span>
      </div>
    </div>
    <div class="category_content">
      <div class="content_left">
        <ul class="left_list">
          <li :class="{active:itemIndex===index}"
              @click="handleC(index)"
              v-for="(item,index) in categoryData"
              :key="index">{{item.name}}
          </li>
        </ul>
      </div>
      <div class="content_right">
        <div>
          <div class="rightImg" v-if="categoryData[itemIndex]">
            <img :src="categoryData[itemIndex].wapBannerUrl">
          </div>
          <ul class="right_list" v-if="categoryData[itemIndex]">
            <li v-for="(subItem,index) in categoryData[itemIndex].subCateList" :key="index">
              <img :src="subItem.wapBannerUrl">
              <p>{{subItem.name}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    name: "Category",
    data(){
      return {
        itemIndex:0
      }
    },
    computed:{
      ...mapState({
        categoryData:state=>state.category.categoryData
      })
    },
    mounted() {
      this.$store.dispatch('getCategoryData')
      this.$nextTick(()=>{
        new BScroll('.content_left',{
          click:true
        })
        new BScroll('.content_right',{
          click:true
        })
      })
    },
    methods:{
      handleC(index){
        this.itemIndex = index
      }
    },
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .category_container
    width 100%
    .category_title
      z-index 99
      position fixed
      top 0
      left 0
      display flex
      align-items center
      height 88px
      padding 0 30px
      background #fff
      border-bottom 1px solid #d9d9d9
      .title_search
        width 690px
        height 56px
        line-height 56px
        text-align center
        background #ededed
        border-radius 10px
        .title_icon
          display inline-block
          width 28px
          height 28px
          background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png")
          background-repeat no-repeat
          background-size 100% 100%
          vertical-align middle
          margin-right 10px
        >span
          color #666
          font-size 28px
          vertical-align middle
          
    .category_content
      clearFix()
      width 100%
      height 1148px
      padding-top 88px
      padding-bottom 98px
      .content_left
        float left
        width 162px
        height 100%
        .left_list
          width 162px
          padding 40px 0
          li
            width 162px
            height 50px
            line-height 50px
            text-align center
            font-size 28px
            margin-top 40px
            &:nth-child(1)
              margin-top 0
            &.active
              color #ab2b2b
              border-left 3px solid #ab2b2b
      .content_right
        float right
        width 588px
        height 100%
        margin-top 30px
        padding 30px 30px 21px 30px
        box-sizing border-box
        .rightImg
          width 100%
          height 192px
          margin-bottom 32px
          >img
            width 100%
            height 100%
        .right_list
          clearFix()
          width 100%
          li
            float left
            width 144px
            height 216px
            margin-right 34px
            &:nth-child(3n)
              margin-right 0px
            >img
              width 144px
              height 144px
            >p
              width 100%
              height 72px
              font-size 24px
              color #333
              text-align center
</style>
