<template>
	<div class="personal_container">
    <div class="personal_title">
      <a class="iconfont icon-shouye title_left" href="javascript:;"></a>
      <span class="title_center">网易严选</span>
      <div class="title_right">
        <a class="iconfont icon-fangdajing search" href="javascript:;"></a>
        <a class="iconfont icon-gouwuche2 cart" href="javascript:;"></a>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "Personal"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .personal_container
    width 100%
    .personal_title
      width 100%
      height 88px
      padding 0 8px 0 12px
      background #fafafa
      box-sizing border-box
      display flex
      align-items center
      justify-content space-between
      .title_left
        width 48px
        height 44px
      .title_center
        font-size 36px
      .title_right
        width 148px
        height 64px
        .search
          width 64px
          height 64px
        .cart
          width 64px
          height 64px
  

</style>
