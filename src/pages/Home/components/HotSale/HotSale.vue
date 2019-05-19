<template>
	<div class="hotSale_container">
    <div class="hotSale_title">
      <p>类目热销榜</p>
    </div>
    <div class="hotSale_list">
      <div class="list_top">
        <div class="top_left">
          <div class="text">
            <p>热销榜</p>
            <span></span>
          </div>
          <img src="https://yanxuan.nosdn.127.net/31dc9401203e8e6f99572abfc4e047a3.png?imageView&quality=65&thumbnail=200x200">
        </div>
        <div class="top_right">
          <div class="top_left">
            <div class="text">
              <p>好评榜</p>
              <span></span>
            </div>
            <img src="https://yanxuan.nosdn.127.net/add6e6a6a4ad5a8b7171a02acfa655c2.png?imageView&quality=65&thumbnail=200x200">
          </div>
        </div>
      </div>
      <ul class="list_bottom">
        <li>
          <p>居家生活榜</p>
          <img src="https://yanxuan.nosdn.127.net/08f6e74986069813ab7dab4c2491cf96.png?imageView&quality=65&thumbnail=200x200">
        </li>
        <li>
          <p>服饰鞋包榜</p>
          <img src="https://yanxuan.nosdn.127.net/1770b0b67e511b03c56be97131e18816.png?imageView&quality=65&thumbnail=200x200">
        </li>
        <li>
          <p>美食酒水榜</p>
          <img src="https://yanxuan.nosdn.127.net/e37656ecad9a2494f456e222fe7800a2.png?imageView&quality=65&thumbnail=200x200">
        </li>
        <li>
          <p>个人清洁榜</p>
          <img src="https://yanxuan.nosdn.127.net/e3a108207eb1c518d84b5f24ff6627a3.png?imageView&quality=65&thumbnail=200x200">
        </li>
        <li>
          <p>数码家电榜</p>
          <img src="https://yanxuan.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&quality=65&thumbnail=200x200">
        </li>
        <li>
          <p>运动旅行榜</p>
          <img src="https://yanxuan.nosdn.127.net/83e9f1b99b484885f88b5c5443f87cec.png?imageView&quality=65&thumbnail=200x200">
        </li>
        <li>
          <p>母婴亲子榜</p>
          <img src="https://yanxuan.nosdn.127.net/de44bd49514fcfe4a915cbd901a94016.png?imageView&quality=65&thumbnail=200x200">
        </li>
        <li>
          <p>全球特色榜</p>
          <img src="https://yanxuan.nosdn.127.net/72eb76506fb94adce584c74b930a6a92.png?imageView&quality=65&thumbnail=200x200">
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "HotSale"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"
  .hotSale_container
    width 100%
    height 710px
    .hotSale_title
      width 100%
      height 100px
      line-height 100px
      padding 0 30px
      >p
        font-size 28px
    .hotSale_list
      width 100%
      height 610px
      padding 0 30px
      .list_top
        display flex
        .top_left
          display flex
          width 340px
          height 200px
          background #F9F3E4
          margin 0 10px 10px 0
          .text
            padding-top 70px
            margin 0 30px 0 22px
            >p
              font-size 28px
              margin-bottom 20px
            >span
              display block
              width 60px
              height 3px
              background black
          >img
            width 200px
            height 200px
        .top_right
          width 340px
          height 200px
          background #EBEFF6
          margin 0 10px 10px 0
      .list_bottom
        clearFix()
        li
          float left
          width 165px
          height 180px
          background #F5F5F5
          margin 0 10px 10px 0
          text-align center
          >p
            font-size 26px
            margin-top 15px
          >img
            width 120px
            height 120px
</style>
