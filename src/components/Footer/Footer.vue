<template>
	<div class="footer_container">
    <ul class="footer">
      <li class="footer_item" :class="{active:$route.path.includes('/home')}" @click="goto('/home')">
        <i :class="$route.path.includes('/home')?'icon_home_active':'icon_home'"></i>
        <span>首页</span>
      </li>
      <li class="footer_item" :class="{active:$route.path.includes('/category')}" @click="goto('/category')">
        <i :class="$route.path.includes('/category')?'icon_category_active':'icon_category'"></i>
        <span>分类</span>
      </li>
      <li class="footer_item" :class="{active:$route.path.includes('/things')}" @click="goto('/things')">
        <i :class="$route.path.includes('/things')?'icon_things_active':'icon_things'"></i>
        <span>识物</span>
      </li>
      <li class="footer_item" :class="{active:$route.path.includes('/shopcart')}" @click="goto('/shopcart')">
        <i :class="$route.path.includes('/shopcart')?'icon_shopcart_active':'icon_shopcart'"></i>
        <span>购物车</span>
      </li>
      <li class="footer_item" @click="goto('/personal')">
        <i class="icon_personal"></i>
        <span>个人</span>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "Footer",
    methods:{
      goto(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .footer_container
    z-index 99
    position fixed
    bottom 0
    left 0
    width 100%
    height 98px
    background-color #fff
    border-top 1px solid #d9d9d9
    .footer
      display flex
      justify-content space-around
      align-items center
      .footer_item
        text-align center
        margin-top 13px
        &.active
          color #b4282d
        i
          display inline-block
          width 40px
          height 40px
          background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-2a8cea5605.png")
          background-repeat no-repeat
          &.icon_home
            background-position 0 -250px
          &.icon_home_active
            background-position 0 -200px
          &.icon_category
            background-position 0 -150px
          &.icon_category_active
            background-position 0 -100px
          &.icon_things
            background-position 0 -350px
          &.icon_things_active
            background-position 0 -300px
          &.icon_shopcart
            background-position 0 -50px
          &.icon_shopcart_active
            background-position 0 0
          &.icon_personal
            background-position 0 -450px
          &.icon_personal_active
            background-position 0 -400px
        span
          display block
          font-size 24px
          margin-top 5px
  
  
  
</style>
