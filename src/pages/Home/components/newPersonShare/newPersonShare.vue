<template>
	<div class="share_container">
    <div class="share_title">
      <span></span>
      <p class="content">新人专享礼</p>
      <span></span>
    </div>
    <div class="share_bottom">
      <div class="share_left">
        <p>新人专享礼包</p>
        <img src="http://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
      </div>
      <div class="share_right">
        <div class="right_top">
          <div class="top_content">
            <p>福利社</p>
            <p class="spe">今日特价</p>
          </div>
          <img src="https://yanxuan.nosdn.127.net/e75693a49d0f2645513d5ef9489c5ecc.png?imageView&thumbnail=200x200&quality=75" alt="">
        </div>
        <div class="right_bottom">
          <div class="newContent">
            <p>新人拼团</p>
            <div class="one">1元起包邮</div>
          </div>
          <img src="https://yanxuan.nosdn.127.net/8ea31d3ee1482b67ed7102332019e0da.png?imageView&thumbnail=200x200&quality=75" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "newPersonShare"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .share_container
    width 100%
    height 558px
    padding 0 30px
    .share_title
      width 690px
      height 90px
      line-height 90px
      text-align center
      span
        display inline-block
        width 30px
        height 5px
        background #333
        vertical-align middle
      .content
        display inline-block
        font-size 32px
        vertical-align middle
        margin 0 10px
    .share_bottom
      display flex
      .share_left
        width 343px
        margin-right 4px
        background #F9E9CF
        >p
          font-size 28px
          padding-left 30px
          padding-top 30px
        >img
          widht 258px
          height 258px
          padding 37px 43px
      .share_right
        width 343px
        height 434px
        .right_top
          width 333px
          height 214px
          background #FBE2D3
          display flex
          margin-bottom 5px
          .top_content
            padding-top 20px
            padding-left 30px
            &:nth-child(1)
              font-size 28px
            .spe
              font-size 12px
              margin-top 10px
          >img
            width 200px
            height 200px
        .right_bottom
          width 333px
          height 214px
          background #FFECC2
          display flex
          .newContent
            padding-top 20px
            padding-left 30px
            p
              font-size 26px
              white-space nowrap
            .one
              font-size 8px
              heigth 30px
              line-height 30px
              white-space nowrap
              background #CBB693
              color #fff
              padding 5px
              margin-top 5px
              text-align center
          >img
            width 200px
            height 200px
          
      
</style>
