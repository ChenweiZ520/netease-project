<template>
	<div class="home_container">
    <Header/>
    <Swiper/>
    <div class="grow_container">
      <ul class="grow_list">
        <li class="grow_item" v-for="(item,index) in growList" :key="index">
          <img :src="item.icon">
          <span>{{item.desc}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {reqHomeGrow} from '@/api'
  import Header from '@/components/Header/Header'
  import Swiper from './components/Swiper/Swiper'
  export default {
    name: "Home",
    data(){
      return {
        growList:[]
      }
    },
    async mounted(){
      const result = await reqHomeGrow()
      //console.log(result.data.policyDescList)
      this.growList = result.data.policyDescList
    },
    components:{
      Header,
      Swiper
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
