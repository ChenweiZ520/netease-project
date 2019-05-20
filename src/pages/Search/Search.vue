<template>
	<div class="search_container">
    <div class="search_wrap">
      <div class="search_title">
        <div class="title_left">
          <span class="icon"></span>
          <input @keyup="search" v-model="userInput" type="text" placeholder="英国摩飞榨汁杯 仅199元">
          <i v-if="userInput" @click="handleX"></i>
        </div>
        <span class="cancel" @click="$router.back()">取消</span>
      </div>
      <div class="search_result" v-if="userInput">
        <ul class="result_list">
          <li v-for="(item,index) in searchData" :key="index">
            {{item}}
          </li>
        </ul>
      </div>
      <div class="search_list">
        <div class="list_header">热门搜索</div>
        <ul class="list">
          <li class="on">经典polo衫89元</li>
          <li>拖鞋</li>
          <li>517吃货节低至5折</li>
          <li>风扇</li>
          <li>超静音风扇199元</li>
          <li>袜子</li>
          <li>酵素洗衣液</li>
          <li>凉席</li>
          <li>夏凉床品7折起</li>
          <li>女鞋</li>
          <li>9.9元爆品超值购</li>
          <li>杯子</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    name: "Search",
    data(){
      return {
        userInput:''
      }
    },
    computed:{
      ...mapState({
        searchData:state=>state.home.searchData
      })
    },
    methods:{
      handleX(){
        this.userInput = ''
      },
      search(){
        clearTimeout(this.timerId)
        this.timerId = setTimeout(()=>{
          this.$store.dispatch('getSearchData',this.userInput)
        },300)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .search_container
    width 100%
    height 100%
    background #f4f4f4
    .search_wrap
      width 100%
      background #fff
      .search_title
        width 100%
        height 88px
        box-sizing border-box
        padding 0 30px
        display flex
        align-items center
        justify-content space-between
        .title_left
          width 604px
          height 56px
          line-height 56px
          background #f4f4f4
          border-radius 5px
          padding 0 20px
          box-sizing border-box
          .icon
            display inline-block
            width 28px
            height 28px
            background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png")
            background-repeat no-repeat
            background-size 100% 100%
            margin-right 16px
            margin-bottom 8px
            vertical-align middle
          input
            background #f4f4f4
            font-size 28px
            outline none
          >i
            display inline-block
            width 50px
            height 50px
            background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/clearIpt-0821f71561.png")
            background-repeat no-repeat
            background-size 100% 100%
            vertical-align middle
            margin-left 110px
        .cancel
          font-size 30px
      .search_result
        width 100%
        min-height 1256px
        background #f4f4f4
        position absolute
        left 0
        top 88px
        >ul
          padding-left 30px
          background #fff
          li
            height 90px
            line-height 90px
            font-size 28px
            border-bottom 1px solid #f4f4f4
      .search_list
        width 100%
        padding 0 30px
        margin-bottom 20px
        .list_header
          height 90px
          line-height 90px
          font-size 28px
          color #999
        .list
          clearFix()
          li
            float left
            height 47px
            line-height 47px
            border 1px solid #999
            border-radius 4px
            padding 0 15px
            margin 0 32px 32px 0
            &.on
              color #b4282d
              border 1px solid #b4282d
</style>
