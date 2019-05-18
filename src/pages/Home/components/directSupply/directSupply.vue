<template>
	<div class="supply_container">
    <div class="supply_title">
      <span class="title_left">品牌制造商直供</span>
      <span class="title_right"> 更多> </span>
    </div>
    <ul class="supply_content">
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
    name: "directSupply",
    computed:{
      ...mapState({
        homeDate:state=>state.home.homeDate
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"
  .supply_container
    width 100%
    height 682px
    .supply_title
      width 100%
      height 100px
      line-height 100px
      font-size 36px
      padding 0 30px
      .title_right
        float right
        margin-right 70px
    .supply_content
      clearFix()
      width 100%
      padding 0 26px 26px 30px
      li
        float left
        width 343px
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
