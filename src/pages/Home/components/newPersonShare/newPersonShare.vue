<template>
	<div class="share_container">
    <div class="share_title">
      <span></span>
      <p class="content">新人专享礼</p>
      <span></span>
    </div>
    <div class="share_left"></div>
    <div class="share_right"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "newPersonShare"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .share_container
    width 100%
    height 558px
    background pink
    .share_title
      width 690px
      height 90px
      padding 0 30px
      .content
        font-size 32px
</style>
