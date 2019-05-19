<template>
	<div class="home_container">
    <Header/>
    <div class="home_wrap">
      <Swiper/>
      <div class="grow_container">
        <ul class="grow_list">
          <li class="grow_item" v-for="(item,index) in homeDate.policyDescList" :key="index">
            <img :src="item.icon">
            <span>{{item.desc}}</span>
          </li>
        </ul>
      </div>
      <ShopList/>
      <Split/>
      <newPersonShare/> <!--新人专享礼-->
      <Split/>
      <directSupply/>  <!--制造厂直供-->
      <Split/>
      <HotSale/>  <!--热销榜-->
      <Split/>
      <popularity/>  <!--人气推荐-->
      <Split/>
      <limitShop/>   <!--限时购-->
      <Split/>
      <productPublish/>  <!--新品首发-->
      <Split/>
      <fourPicture/>  <!--四个图-->
      <Split/>
      <sweetList/>
      <homeFooter/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import Header from '@/components/Header/Header'
  import Swiper from './components/Swiper/Swiper'
  import ShopList from './components/ShopLsit/ShopList'
  import Split from '@/components/Split/Split'
  import newPersonShare from './components/newPersonShare/newPersonShare'
  import directSupply from './components/directSupply/directSupply'
  import HotSale from './components/HotSale/HotSale'
  import popularity from './components/popularity/popularity'
  import limitShop from './components/limitShop/limitShop'
  import productPublish from './components/productPublish/productPublish'
  import fourPicture from './components/fourPicture/fourPicture'
  import sweetList from './components/sweetList/sweetList'
  import homeFooter from './components/homeFooter/homeFooter'
  export default {
    name: "Home",
    computed:{
      ...mapState({
        homeDate:state=>state.home.homeDate
      }),
    },
    mounted(){
      this.$store.dispatch('getHomeDate')
      // this.$nextTick(()=>{
      //   new BScroll('.home_wrap',{
      //     click:true
      //   })
      // })
    },
    components:{
      Header,
      Swiper,
      ShopList,
      Split,
      newPersonShare,
      directSupply,
      HotSale,
      popularity,
      limitShop,
      productPublish,
      fourPicture,
      sweetList,
      homeFooter
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .home_container
    width 100%
    .grow_container
      width 100%
      height 72px
      border-bottom 1px solid #eee
      .grow_list
        width 100%
        height 72px
        padding 0 30px
        display flex
        align-items center
        color #B4282D
        font-size 24px
        .grow_item
          margin-right 40px
          >img
            width 32px
            height 32px
            vertical-align middle
</style>
