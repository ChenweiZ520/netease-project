<template>
	<div class="shopList_container">
    <ul class="shop_list" v-if="homeDate.kingKongModule">
      <li v-for="(item,index) in homeDate.kingKongModule.kingKongList" :key="index">
        <a href="javascript:;">
          <img :src="item.picUrl" alt="">
          <span>{{item.text}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  
  import {mapState} from 'vuex'
  export default {
    name: "ShopList",
    computed:{
      ...mapState({
        homeDate:state=>state.home.homeDate
      }),
    },
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"
  .shopList_container
    width 100%
    /*padding-bottom 20px*/
    .shop_list
      clearFix()
      width 100%
      li
        float left
        width 110px
        height 156px
        margin 10px 20px
        text-align center
        img
          width 110px
          height 110px
        span
          font-size 24px
          line-height 26px
          color #333
          margin-top 10px
</style>
