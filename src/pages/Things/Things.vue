<template>
	<div class="things_container">
    <div class="fixed_container">
      <div class="things_title">
        <a @click="$router.replace('/home')" class="iconfont icon-shouye title_left" href="javascript:;"></a>
        <div class="title_center">
          <span :class="{on:$route.path==='/things/recommend'}" @click="findOrSearch(true)">发现</span>
          <span :class="{on:$route.path==='/things/selected'}" @click="findOrSearch(false)">甄选家</span>
        </div>
        <div class="title_right">
          <a @click="$router.push('/search')" class="iconfont icon-fangdajing search" href="javascript:;"></a>
          <a @click="$router.replace('/shopcart')" class="iconfont icon-gouwuche2 cart" href="javascript:;"></a>
        </div>
      </div>
      <div class="things_tab">
        <ul class="tab_list">
          <li :class="{active:itemIndex===index}"
              @click="handler(index)"
              v-for="(item,index) in thingsTabData"
              :key="index">
            {{item.tabName}}
          </li>
        </ul>
      </div>
    </div>
    <Split/>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import Split from '@/components/Split/Split'
  export default {
    name: "Things",
    data(){
      return {
        itemIndex:0,
      }
    },
    computed:{
      ...mapState({
        thingsTabData:state=>state.things.thingsTabData
      })
    },
    mounted() {
      this.$store.dispatch('getThingsTabData')
      this.$nextTick(()=>{
        new BScroll('.things_tab',{
          click:true,
          scrollX:true
        })
      })
    },
    methods:{
      handler(index){
        this.itemIndex = index
      },
      findOrSearch(boolean){
        if(boolean===true){
          this.$router.replace('/things/recommend')
        }else{
          this.$router.replace('/things/selected')
        }
      }
    },
    components:{
      Split
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .things_container
    width 100%
    position relative
    .fixed_container
      position fixed
      top 0
      left 0
      width 100%
      .things_title
        width 100%
        height 100px
        background #fafafa
        padding 0 26px 0 24px
        box-sizing border-box
        border-bottom 2px solid #d9d9d9
        display flex
        align-items center
        justify-content space-between
        .title_left
          font-size 48px
          width 46px
          height 50px
          color #000
        .title_center
          width 320px
          height 100px
          line-height 100px
          text-align center
          margin-left 60px
          span
            font-size 30px
            color #999
            &:nth-child(1)
              padding 0 16px
            &:nth-child(2)
              padding 0 16px
            &.on
              color #b4282d
              font-size 40px
              font-weight bold
        .title_right
          width 140px
          height 100px
          display flex
          align-items center
          justify-content space-between
          .search
            font-size 42px
            color #333
            margin-right 20px
          .cart
            font-size 44px
            margin-right 20px
            color #000
      .things_tab
        display flex
        width 100%
        height 72px
        background #fafafa
        border-bottom 2px solid #d9d9d9
        .tab_list
          height 72px
          line-height 72px
          display flex
          white-space nowrap
          li
            height 72px
            padding 0 8px
            margin 0 20px
            font-size 30px
            color #999
            &.active
              color #B4282D
              border-bottom 3px solid #B4282D

</style>
