<template>
	<div class="footer_container">
    <ul class="footer">
      <li class="footer_item" :class="{active:$route.path.includes('/home')}" @click="goto('/home')">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
      </li>
      <li class="footer_item" :class="{active:$route.path.includes('/category')}" @click="goto('/category')">
        <i class="iconfont icon-navicon-kcfl"></i>
        <span>分类</span>
      </li>
      <li class="footer_item" :class="{active:$route.path.includes('/things')}" @click="goto('/things')">
        <i class="iconfont icon-fangxingweixuanzhong"></i>
        <span>识物</span>
      </li>
      <li class="footer_item" :class="{active:$route.path.includes('/shopcart')}" @click="goto('/shopcart')">
        <i class="iconfont icon-gouwuche2"></i>
        <span>购物车</span>
      </li>
      <li class="footer_item" @click="goto('/personal')">
        <i class="iconfont icon-gerenzhongxinxianxing"></i>
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
  
  .footer_container
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
        margin-top 15px
        &.active
          color #b4282d
        i
          font-size 40px
        span
          display block
          font-size 24px
          margin-top 5px
  
</style>
