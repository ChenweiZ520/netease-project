<template>
	<div class="header_container">
    <div class="header_top">
      <a class="logo" href="javascript:;"></a>
      <div class="header_search">
        <i class="icon_search"></i>
        <span>搜索商品，共22843款好物</span>
      </div>
      <button class="login">登录</button>
    </div>
    <div class="header_nav">
      <ul class="nav_list">
        <li>推荐</li>
        <li>居家生活</li>
        <li>服饰鞋包</li>
        <li>美食酒水</li>
        <li>个护清洁</li>
        <li>母婴亲子</li>
        <li>运动旅行</li>
        <li>数码家电</li>
        <li>全球特色</li>
      </ul>
      <div class="nav_right">
        <span class="liner"></span>
        <div class="nav_icon">
          <i class="icon_bottom"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "Header"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .header_container
    width 100%
    height 148px
    .header_top
      display flex
      align-items center
      width 100%
      height 88px
      padding 0 30px
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
          margin-right 8px
        >span
          vertical-align middle
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
      width 100%
      height 60px
      .nav_list
        width 100%
        height 60px
        line-height 60px
        overflow hidden
        li
          float left
          height 60px
          font-size 28px
          padding 0 10px
          margin 0 20px
          
          
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
          background-image linear-gradient(to right,rgba(255,255,255,0) 0,#fff 100%)
          vertical-align middle
        .nav_icon
          display inline-block
          width 100px
          height 60px
          line-height 60px
          text-align center
          vertical-align middle
          .icon_bottom
            display inline-block
            width 30px
            height 30px
            background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png")
            margin-top 15px
          
          

</style>
