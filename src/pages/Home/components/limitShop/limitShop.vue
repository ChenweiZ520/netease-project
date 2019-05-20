<template>
	<div class="limitShop_container">
    <div class="limit_title">
      <div class="title_left">
        <span class="left_shop">限时购</span>
        <div class="title_time">
          <span class="one">00</span>
          <span>:</span>
          <span class="one">56</span>
          <span>:</span>
          <span class="one">26</span>
        </div>
      </div>
      <div class="title_right">更多></div>
    </div>
    <ul class="limit_list">
      <li>
        <img src="https://yanxuan.nosdn.127.net/6e45f4da7adf1d322b13e62e08dcea05.png?imageView&thumbnail=216x216&quality=75">
        <div class="limit_price">
          <span class="new_price">￥29.9</span>
          <del class="old_price">￥34</del>
        </div>
      </li>
      <li>
        <img src="https://yanxuan.nosdn.127.net/294f5da2e345b6e8e135627858e7e894.png?imageView&thumbnail=216x216&quality=75">
        <div class="limit_price">
          <span class="new_price">￥139</span>
          <del class="old_price">￥160</del>
        </div>
      </li>
      <li>
        <img src="https://yanxuan.nosdn.127.net/f6bc8bfe8c25579f95f6af484db79fee.png?imageView&thumbnail=216x216&quality=75">
        <div class="limit_price">
          <span class="new_price">￥68</span>
          <del class="old_price">￥85</del>
        </div>
      </li>
      <li>
        <img src="https://yanxuan.nosdn.127.net/75bb66679696364ac25686802f549c7d.png?imageView&thumbnail=216x216&quality=75">
        <div class="limit_price">
          <span class="new_price">￥89</span>
          <del class="old_price">￥120</del>
        </div>
      </li>
      <li>
        <img src="https://yanxuan.nosdn.127.net/6a60fa16414a9f9ee9e5b92cc540183b.png?imageView&thumbnail=216x216&quality=75">
        <div class="limit_price">
          <span class="new_price">￥317</span>
          <del class="old_price">￥360</del>
        </div>
      </li>
      <li>
        <img src="https://yanxuan.nosdn.127.net/5b1300705188b745889d7859864817ab.png?imageView&thumbnail=216x216&quality=75">
        <div class="limit_price">
          <span class="new_price">￥1299</span>
          <del class="old_price">￥1300</del>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "limitShop"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"
  .limitShop_container
    width 100%
    height 698px
    .limit_title
      height 100px
      margin 0 30px
      display flex
      justify-content space-between
      .title_left
        .left_shop
          line-height 100px
          font-size 36px
          vertical-align middle
        .title_time
          display inline-block
          vertical-align center
          margin-left 12px
          span
            display inline-block
            font-size 26px
            color #000
            &.one
              width 36px
              height 36px
              color #fff
              line-height 36px
              text-align center
              background #333
              margin 0 10px
      .title_right
        line-height 100px
        font-size 34px
    .limit_list
      clearFix()
      height 598px
      margin 0 10px 0 30px
      li
        float left
        width 216px
        height 269px
        padding-bottom 20px
        margin-right 20px
        >img
          background #F5F5F5
          width 216px
          height 216px
          margin-bottom 12px
        .limit_price
          padding-left 20px
          .new_price
            font-size 28px
            color #b4282d
            
</style>
