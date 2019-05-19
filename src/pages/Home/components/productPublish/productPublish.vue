<template>
	<div class="publish_container">
    <div class="pub_title">
      <span>新品首发</span>
      <span class="pub_more">更多></span>
    </div>
    <ul class="pub_list">
      <li>
        <img src="https://yanxuan.nosdn.127.net/e75693a49d0f2645513d5ef9489c5ecc.png?imageView&quality=65&thumbnail=330x330">
        <div class="content">
          <span class="content_top">烟台美早大樱桃 2斤装</span>
          <span class="content_price">￥98</span>
        </div>
        <div class="bottom_price">
          <span>好货内部价</span>
        </div>
      </li>
      <li>
        <img src="https://yanxuan.nosdn.127.net/2635f9af5b1547e2b299e4975267d6e9.png?imageView&quality=65&thumbnail=330x330">
        <div class="content">
          <span class="content_top">智能保温特好煮茶 壶</span>
          <span class="content_price">￥249</span>
        </div>
        <div class="bottom_price">
          <span>520特惠</span>
        </div>
      </li>
      <li>
        <img src="https://yanxuan.nosdn.127.net/b9cda216c597fd2297432a893d3da371.png?imageView&quality=65&thumbnail=330x330">
        <div class="content">
          <span class="content_top">美国tezewa筋膜放松按...</span>
          <span class="content_price">￥1699</span>
        </div>
        <!--<div class="bottom_price">-->
          <!--<span></span>-->
        <!--</div>-->
      </li>
      <li>
        <img src="https://yanxuan.nosdn.127.net/75ce66f46c287cc512749f9e8328f0b3.png?imageView&quality=65&thumbnail=330x330">
        <div class="content">
          <span class="content_top">英国摩飞便携式榨汁杯</span>
          <span class="content_price">￥199</span>
        </div>
        <div class="bottom_price">
          <span>特价</span>
        </div>
      </li>
      <li>
        <img src="https://yanxuan.nosdn.127.net/dccb1e4c4bdc95788bfc458dcc5b7d44.png?imageView&quality=65&thumbnail=330x330">
        <div class="content">
          <span class="content_top">60s轻薄便携旅行隔脏睡袋</span>
          <span class="content_price">￥149</span>
        </div>
        <div class="bottom_price">
          <span>每满499减80券</span>
        </div>
      </li>
      <li>
        <img src="https://yanxuan.nosdn.127.net/d5325b2841aeb11423704be19e8fb230.png?imageView&quality=65&thumbnail=330x330">
        <div class="content">
          <span class="content_top">Yessing活力吃货男女...</span>
          <span class="content_price">￥159</span>
        </div>
        <!--<div class="bottom_price">-->
          <!--<span></span>-->
        <!--</div>-->
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "newPublish"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"
  .publish_container
    width 100%
    height 834px
    .pub_title
      width 100%
      height 100px
      line-height 100px
      font-size 32px
      padding 0 30px
      display flex
      justify-content space-between
      .pub_more
        margin-right 60px
    .pub_list
      clearFix()
      margin 0 20px 0 30px
      li
        float left
        width 216px
        height 341px
        padding-bottom 13px
        margin-right 17px
        >img
          width 216px
          height 216px
          background-color #f5f5f5
        .content
          font-size 24px
          .content_top
            line-height 42px
          .content_price
            font-size 22px
            color #b4282d
        .bottom_price
          height 33px
          line-height 33px
          >span
            font-size 14px
            color #b4282d
            border 1px solid #b4282d
            padding 0 10px
            border-radius 2px
</style>
