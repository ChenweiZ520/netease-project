<template>
	<div class="picture_container">
    <ul class="picture_content">
      <li v-for="(item,index) in homeDate.sceneLightShoppingGuideModule" :key="index">
        <p class="content_top">{{item.styleItem.title}}</p>
        <p class="content_bottom">{{item.styleItem.desc}}</p>
        <div>
          <img :key="index" v-for="(itemImg,index) in item.styleItem.picUrlList" :src="itemImg" alt="">
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    name: "fourPicture",
    computed:{
      ...mapState({
        homeDate:state=>state.home.homeDate
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .picture_container
    width 100%
    height 576px
    padding 10px 30px 30px 26px
    .picture_content
      clearFix()
      width 100%
      li
        float left
        width 323px
        height 260px
        background #f4f4f4
        margin-bottom 5px
        padding 20px 0 0 20px
        &:nth-child(2n+1)
          margin-right 5px
        .content_top
          font-size 32px
        .content_bottom
          font-size 24px
          color #7f7f7f
          margin 20px 0
        img
          width 150px
          height 150px

</style>
