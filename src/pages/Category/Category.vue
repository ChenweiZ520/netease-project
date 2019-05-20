<template>
	<div class="category_container">
    <div class="category_title">
      <div class="title_search">
        <i class="title_icon"></i>
        <span>搜索商品，共22651款好物</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "Category",
    mounted() {
      this.$store.dispatch('getCategoryData')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .category_container
    width 100%
    .category_title
      display flex
      align-items center
      height 88px
      padding 0 30px
      border-bottom 1px solid #d9d9d9
      .title_search
        width 690px
        height 56px
        line-height 56px
        text-align center
        background #ededed
        border-radius 10px
        .title_icon
          display inline-block
          width 28px
          height 28px
          background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png")
          background-repeat no-repeat
          background-size 100% 100%
          vertical-align middle
          margin-right 10px
        >span
          color #666
          font-size 28px
          vertical-align middle
          
</style>
