<template>
	<div class="styleOne_container">
    <div class="styleOne_top">
      <img :src="topic.avatar" alt="">
      <span>{{topic.nickname}}</span>
    </div>
    <p class="text">{{topic.title}}</p>
    <div class="img_content">
      <img :src="topic.picUrl" alt="">
    </div>
    <div class="styleOne_bottom">
      <i class="iconfont icon-yanjing"></i>
      <span>{{topic.readCount}}人看过</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "StyleOne",
    data(){
      return {
        topic:Object
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .styleOne_container
    width 100%
    padding 36px 30px
    box-sizing border-box
    background #fff
    margin-bottom 20px
    .styleOne_top
      height 56px
      line-height 56px
      margin-bottom 24px
      >img
        width 54px
        height 54px
        border-radius 50%
        margin-right 12px
        vertical-align middle
      >span
        font-size 30px
    .text
      font-size 36px
      line-height 50px
      color #333
      margin-bottom 16px
    .img_content
      height 376px
      margin-bottom 20px
      >img
        width 100%
        height 376px
    .styleOne_bottom
      font-size 22px
      color #999
      >i
        margin-right 8px
  
</style>
