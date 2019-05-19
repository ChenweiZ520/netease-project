<template>
	<div class="popularity_container">
    <div class="title">
      <span>人气推荐</span>
      <span class="more">更多></span>
    </div>
    <div class="middle">
      <div class="middle_left">
        <img src="https://yanxuan.nosdn.127.net/042fa68e8179420a9203436256b14a01.png?imageView&quality=65&thumbnail=280x280" alt="">
      </div>
      <div class="middle_right">
        <div class="special">
          <span>520特惠</span>
        </div>
        <p class="nine">九制黑芝麻丸</p>
        <p class="tradition ellipsis">传统工艺，芝麻香浓郁，颗颗精髓</p>
        <span class="price">￥69</span>
      </div>
    </div>
    <ul class="bottom_list">
      <li>
        <img src="https://yanxuan.nosdn.127.net/b3a401594caf734b7fd843df7ffea1a6.png?imageView&quality=65&thumbnail=330x330">
        <div class="content">
          <span class="content_top">多功能 人体工学转椅</span>
          <span class="content_price">￥1399</span>
        </div>
        <div class="bottom_price">
          <span>每满499减80券</span>
        </div>
      </li>
      <li>
        <img src="https://yanxuan.nosdn.127.net/dccb1e4c4bdc95788bfc458dcc5b7d44.png?imageView&quality=65&thumbnail=330x330">
        <div class="content">
          <span class="content_top">网易云音乐氧气蓝牙耳机青春...</span>
          <span class="content_price">￥299</span>
        </div>
        <div class="bottom_price">
          <span>满279减60券</span>
        </div>
      </li>
      <li>
        <img src="https://yanxuan.nosdn.127.net/9d581d4ec02cf86ff2a05cf81868f159.png?imageView&quality=65&thumbnail=330x330">
        <div class="content">
          <span class="content_top">浓缩即食燕窝 70克*3瓶...</span>
          <span class="content_price">￥328</span>
        </div>
        <div class="bottom_price">
          <span>加价购</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "popularity"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .popularity_container
    width 100%
    height 784px
    .title
      width 100%
      height 100px
      line-height 100px
      font-size 32px
      padding 0 30px
      display flex
      justify-content space-between
      .more
        margin-right 60px
    .middle
      display flex
      height 280px
      margin 0 30px 20px 30px
      background #FEF0DF
      .middle_left
        width 280px
        height 280px
        margin-right 30px
        >img
          width 100%
          height 100%
      .middle_right
        width 350px
        height 160px
        margin-top 60px
        .special
          height 33px
          line-height 33px
          margin-bottom 9px
          >span
            border 1px solid #B4282D
            border-radius 2px
            font-size 12px
            color #B4282D
            padding 0 8px
            margin-bottom 5px
        .nine
          font-family PingFangSC-Regular
          font-size 32px
        .tradition
          font-size 24px
          color #7F7F7F
          margin 10px 0
        .price
          color #b4282d
          font-size 32px
      
    .bottom_list
      display flex
      justify-content space-between
      height 354px
      margin 0 30px
      li
        width 216px
        height 341px
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
