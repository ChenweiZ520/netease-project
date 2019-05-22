<template>
	<div class="styleTwo_container">
    <div class="styleTwo_left">
      <div class="styleTwo_top">
        <img :src="topic.avatar" alt="">
        <span>{{topic.nickname}}</span>
      </div>
      <p class="text">{{topic.title}}</p>
      <div class="desc ellipsis">{{topic.subTitle}}</div>
      <div class="styleTwo_bottom">
        <i class="iconfont icon-yanjing"></i>
        <span>{{topic.readCount}}看过</span>
      </div>
    </div>
    <div class="styleTwo_right">
      <img :src="topic.picUrl" alt="">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "StyleTwo",
    data(){
      return {
        topic:Object
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .styleTwo_container
    width 100%
    padding 32px 30px
    box-sizing border-box
    background #fff
    margin-bottom 20px
    display flex
    justify-content space-between
    .styleTwo_left
      width 400px
      .styleTwo_top
        height 56px
        line-height 56px
        margin-bottom 12px
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
        padding-top 20px
        margin-bottom 10px
      .desc
        color #7f7f7f
        font-size 28px
      .styleTwo_bottom
        font-size 22px
        color #999
        margin-top 18px
    .styleTwo_right
      width 272px
      height 272px
      >img
        width 272px
        height 272px
        border-radius 10px
</style>
