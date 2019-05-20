<template>
	<div class="homeFooter">
    <div class="wrap">
      <div class="footer_top">
        <a href="javascript:;">下载APP</a>
        <a href="javascript:;">电脑版</a>
      </div>
      <p>
        <span>网易公司版权所有 © 1997-</span>
        <span>2019</span> <br>
        <span>食品经营许可证：JY13301080111719</span>
      </p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "homeFooter"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .homeFooter
    width 100%
    height 245px
    padding-bottom 98px
    background #414141
    .wrap
      padding 54px 20px 28px 20px
      .footer_top
        height 62px
        padding-left 200px
        margin-bottom 36px
        a
          width 170px
          height 60px
          line-height 60px
          text-align center
          font-size 18px
          color #fff
          border 1px solid #999
          padding 10px 20px
          &:nth-child(1)
            margin-right 50px
          &:nth-child(2)
            padding 10px 40px
      p
        font-size 18px
        color #999
        text-align center
        line-height 36px
</style>
