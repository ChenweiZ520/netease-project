<template>
	<div class="selected_container">
    <div class="swiper-container selected_swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/5dabfaf695b65513493dc29f11727e78.jpg?imageView&quality=75&thumbnail=670x371" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/fe726ef94ce6a26a666e84361dbd6f4d.jpg?imageView&quality=75&thumbnail=670x371" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/5dabfaf695b65513493dc29f11727e78.jpg?imageView&quality=75&thumbnail=670x371" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/fe726ef94ce6a26a666e84361dbd6f4d.jpg?imageView&quality=75&thumbnail=670x371" alt="">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="advice_collect">
      <div class="advice_title">
        <h3>
          <span>建议征集</span>
          <i class="iconfont icon-tiaozhuan icon"></i>
        </h3>
        <p>告诉我们，你的好物标准</p>
      </div>
      <div class="middle">
        <img src="https://yanxuan.nosdn.127.net/ec0377213374de038e810cfffce17130.jpg?imageView&quality=75&thumbnail=272x200" alt="">
        <div class="middle_right">
          <h3>快来给主子挑选靠谱冻干~</h3>
          <div class="right_bottom">
            <div class="bottom_left">
              <i class="iconfont icon-message"></i>
              <span>32条建议</span>
            </div>
            <div class="bottom_right">
              <i class="iconfont icon-yanjing"></i>
              <span>512人看过</span>
            </div>
          </div>
        </div>
      </div>
      <p class="text">铲屎官看过来，如果我们推出冻干猫粮，你会希望有哪些口味呢？比如鸡肉、羊肉、牛肉、鱼肉等；是否会希望推出小克数试吃装？理想的营养配比是怎样呢？快来说一说吧~</p>
      <div class="btn">我要建议</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  export default {
    name: "Selected",
    mounted() {
      this.$nextTick(()=>{
        new Swiper('.swiper-container',{
          loop:true,
          autoplay:true,
          centeredSlides:true,
          slidesOffsetBefore:20,
          spaceBetween:10
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .selected_container
    width 100%
    padding-top 172px
    background #f3f5f7
    .selected_swiper
      width 100%
      height 374px
      padding 24px 0
      margin-top -20px
      margin-bottom 20px
      background #fff
      img
        width 670px
        height 374px
        border-radius 10px
    .advice_collect
      width 100%
      padding 0 30px 40px 30px
      box-sizing border-box
      background #fff
      margin-bottom 20px
      .advice_title
        width 100%
        padding 34px 0
        text-align center
        h3
          font-size 32px
          color #333
          margin-bottom 12px
        p
          color #7f7f7f
          font-size 24px
      .middle
        height 248px
        padding 24px 0 24px 24px
        background #F4F4F4
        box-sizing border-box
        display flex
        justify-content space-between
        img
          width 272px
          height 200px
        .middle_right
          width 384px
          height 200px
          padding 30px 0 30px 20px
          box-sizing border-box
          >h3
            width 346px
            height 96px
            font-size 32px
            line-height 46px
            margin-bottom 14px
          .right_bottom
            display flex
            .bottom_left
              font-size 24px
              color #7F7F7F
              margin-right 32px
            .bottom_right
              font-size 24px
              color #7F7F7F
      .text
        margin-top 32px
        color #7F7F7F
        font-size 24px
        line-height 36px
      .btn
        height 88px
        color #333
        border 1px solid #7f7f7f
        margin-top 40px
        line-height 88px
        text-align center
        font-size 28px
</style>
