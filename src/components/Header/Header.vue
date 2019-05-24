<template>
	<div class="header_container">
    <div class="header_top">
      <a class="logo" href="javascript:;"></a>
      <div class="header_search" @click="$router.push('/search')">
        <i class="icon_search"></i>
        <span>搜索商品，共22843款好物</span>
      </div>
      <button class="login" @click="$router.replace('/personal')">登录</button>
    </div>
    <div class="header_nav">
      <div class="nav_wrap">
        <ul class="nav_list">
          <li class="hight">推荐</li>
          <li>居家生活</li>
          <li>服饰鞋包</li>
          <li>美食酒水</li>
          <li>个护清洁</li>
          <li>母婴亲子</li>
          <li>运动旅行</li>
          <li>数码家电</li>
          <li>全球特色</li>
        </ul>
      </div>
      <div class="nav_right">
        <span class="liner"></span>
        <div class="nav_icon" @click="isShow=!isShow">
          <i class="icon_bottom" :class="{is_open:isShow}"></i>
        </div>
      </div>
      <div class="nav_mark" v-if="isShow">
        <p>全部频道</p>
        <ul class="nav_mark_list">
          <li class="active">推荐</li>
          <li>居家生活</li>
          <li>服饰鞋包</li>
          <li>美食酒水</li>
          <li>个护清洁</li>
          <li>母婴亲子</li>
          <li>运动旅行</li>
          <li>数码家电</li>
          <li>全球特色</li>
        </ul>
      </div>
    </div>
    <div class="mask" v-if="isShow" @click="isShow=!isShow"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    name: "Header",
    data(){
      return {
        isShow:false
      }
    },
    mounted() {
      this.$nextTick(()=>{
        new BScroll('.nav_wrap',{
          scrollX: true,
          click: true
        })
      })
    },
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .header_container
    z-index 99
    position fixed
    top 0
    left 0
    width 100%
    height 148px
    .header_top
      position relative
      z-index 2
      display flex
      align-items center
      width 100%
      height 88px
      padding 0 30px
      background #fff
      .logo
        width 138px
        height 40px
        background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png")
        background-repeat no-repeat
        background-size 100% 100%
        margin-right 10px
      .header_search
        width 442px
        height 56px
        line-height 56px
        text-align center
        background-color #ededed
        border-radius 10px
        .icon_search
          display inline-block
          width 28px
          height 28px
          background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png")
          vertical-align middle
          background-size 100% 100%
          margin-right 6px
        >span
          color #666
      .login
        width 74px
        height 40px
        line-height 40px
        text-align center
        color #b4282d
        font-size 24px
        border 1px solid #b4282d
        border-radius 8px
        background #fff
        margin-left 10px
        
  
    .header_nav
      position relative
      z-index 2
      width 100%
      height 60px
      .nav_wrap
        width 100%
        height 60px
        display flex
        .nav_list
          display flex
          height 60px
          line-height 60px
          padding-right 100px
          white-space nowrap
          background #fff
          li
            height 60px
            padding 0 20px
            text-align center
            font-size 28px
            &:nth-child(1)
              margin-left 30px
            &.hight
              color #b4282d
              border-bottom 5px solid #b4282d
      .nav_right
        z-index 5
        position absolute
        top 0
        right 0
        width 160px
        height 60px
        .liner
          display inline-block
          width 50px
          height 60px
          //background-image linear-gradient(to right,rgba(255,255,255,0) 0,#fff 100%)
          vertical-align middle
        .nav_icon
          display inline-block
          width 100px
          height 60px
          line-height 60px
          text-align center
          vertical-align middle
          background #fff
          .icon_bottom
            display inline-block
            width 30px
            height 30px
            background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png")
            background-size 100% 100%
            margin-top 15px
            transition transform 0.5s
            &.is_open
              transform rotateZ(180deg)
      .nav_mark
        position absolute
        top 0
        left 0
        width 100%
        height 372px
        background #fff
        >p
          height 60px
          line-height 60px
          font-size 28px
          padding-left 30px
        .nav_mark_list
          clearFix()
          width 100%
          padding-top 30px
          li
            float left
            width 148px
            height 54px
            background #fafafa
            margin-left 30px
            margin-bottom 40px
            font-size 28px
            line-height 54px
            text-align center
            box-sizing border-box
            &.active
              border 1px solid #b4282d
              color #b4282d
    .mask
      position absolute
      z-index 1
      left 0
      top 0
      width 100%
      height 1334px
      background rgba(0,0,0,0.5)
</style>
