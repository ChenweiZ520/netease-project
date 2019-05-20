<template>
	<div class="shopCart_container">
    <div class="shopCart_title">
      <span class="cart">购物车</span>
      <span class="ticket">领券</span>
    </div>
    <ul class="shopCart_list">
      <li>
        <i></i>
        <span>30天无忧退货</span>
      </li>
      <li>
        <i></i>
        <span>48小时快速退款</span>
      </li>
      <li>
        <i></i>
        <span>满88元免邮费</span>
      </li>
    </ul>
    <div class="shopCart_bottom">
      <div class="shopCart_img">
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png" alt="">
      </div>
      <div class="add_shop">
        <p>去添加点什么吧</p>
        <button>登录</button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "ShopCart"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .shopCart_container
    width 100%
    .shopCart_title
      display flex
      justify-content space-between
      width 100%
      height 88px
      line-height 88px
      background #fff
      padding 0 30px
      box-sizing border-box
      .cart
        font-size 36px
      .ticket
        width 90px
        height 88px
        font-size 32px
        color #B4282D
        
    .shopCart_list
      width 100%
      height 70px
      padding 0 30px
      box-sizing border-box
      background #f4f4f4
      display flex
      align-items center
      justify-content space-between
      li
        font-size 18px
        color #666
        i
          display inline-block
          width 10px
          height 10px
          background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-0ec842d966.png")
          background-repeat no-repeat
          background-size 100% 100%

    .shopCart_bottom
      width 100%
      height 1078px
      background #f4f4f4
      .shopCart_img
        width 100%
        height 300px
        line-height 300px
        margin auto
        img
          width 248px
          height 248px
          margin-top 389px
          margin-left 251px
      .add_shop
        width 100%
        height 169px
        text-align center
        margin-top 320px
        p
          font-family PingFangSC-Light,helvetica,'Heiti SC'
          font-size 28px
          color #999
          margin-bottom 50px
        button
          width 480px
          height 92px
          background #b4282d
          color #fff
          font-size 30px
          border 0px
          outline 0
          border-radius 5px
        
  
</style>
