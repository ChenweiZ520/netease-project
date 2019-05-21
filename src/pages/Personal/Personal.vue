<template>
	<div class="personal_container">
    <div class="personal_title">
      <a @click="$router.replace('/home')" class="iconfont icon-shouye title_left" href="javascript:;"></a>
      <span class="title_center"></span>
      <div class="title_right">
        <a @click="$router.replace('/search')" class="iconfont icon-fangdajing search" href="javascript:;"></a>
        <a @click="$router.replace('/shopcart')" class="iconfont icon-gouwuche2 cart" href="javascript:;"></a>
      </div>
    </div>
    
    <div class="personal_content" v-if="$route.path==='/personal'">
      <div class="content_top">
        <div class="content_logo">
          <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
        <div class="content_btn">
          <div class="phone_btn" @click="$router.replace('/personal/phoneLogin')">
            <i class="iconfont icon-shouji"></i>
            <span>手机号码登录</span>
          </div>
          <div class="email_btn" @click="$router.replace('/personal/emailLogin')">
            <i class="iconfont icon-youxiang"></i>
            <span>邮箱账号登录</span>
          </div>
          <div class="phone_quick">
            <span>手机号快捷注册</span>
            <i class="iconfont icon-dayuhao"></i>
          </div>
        </div>
      </div>
      <div class="more_type">
        <div class="wx">
          <i class="iconfont icon-weixin"></i>
          <span>微信</span>
        </div>
        <div class="qq">
          <i class="iconfont icon-QQ"></i>
          <span>QQ</span>
        </div>
        <div class="wb">
          <i class="iconfont icon-weibo"></i>
          <span>微博</span>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "Personal"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .personal_container
    width 100%
    .personal_title
      width 100%
      height 88px
      padding 0 16px 0 24px
      background #fafafa
      box-sizing border-box
      display flex
      align-items center
      justify-content space-between
      .title_left
        font-size 48px
        width 48px
        height 44px
        color #000
      .title_center
        width 166px
        height 48px
        background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png")
        background-repeat no-repeat
        background-size 100% 100%
        font-size 36px
        margin-left 60px
      .title_right
        width 148px
        height 64px
        display flex
        align-items center
        justify-content space-between
        .search
          font-size 48px
          color #333
        .cart
          font-size 48px
          margin-right 20px
          color #000
          
  

    .personal_content
      position relative
      width 100%
      height 1246px
      background #F2F5F4
      .content_top
        width 100%
        height 702px
        .content_logo
          width 100%
          height 410px
          line-height 410px
          text-align center
          img
            width 268px
            height 90px
        .content_btn
          width 100%
          height 292px
          padding 0 20px
          box-sizing border-box
          .phone_btn
            height 94px
            line-height 94px
            text-align center
            background #b4282d
            border 1px solid #b4282d
            border-radius 5px
            color #fff
            font-size 28px
            margin-bottom 32px
            >i
              vertical-align middle
              margin-right 12px
            >span
              vertical-align middle
          .email_btn
            height 94px
            line-height 94px
            text-align center
            border 2px solid #b4282d
            border-radius 5px
            color #b4282d
            font-size 30px
            margin-bottom 32px
            >i
              font-size 40px
              vertical-align middle
              margin-right 12px
            >span
              vertical-align middle
          .phone_quick
            text-align center
            font-size 28px
            color #333
            >i
              vertical-align middle
            
      .more_type
        position absolute
        left 0
        bottom 100px
        width 100%
        height 40px
        display flex
        justify-content center
        color #7F7F7F
        font-size 28px
        .wx
          padding 0 40px
          border-right 1px solid #979797
          >span
            margin-left 2px
        .qq
          padding 0 40px
          border-right 1px solid #979797
          >span
            margin-left 2px
        .wb
          padding 0 40px
          >span
            margin-left 2px
        
</style>
