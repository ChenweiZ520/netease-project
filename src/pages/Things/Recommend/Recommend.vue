<template>
	<div class="recommend_container">
    <div class="recommend_content">
      <ul v-for="(item,index) in commendData" :key="index">
        <li v-for="(topic,index) in item.topics" :key="index">
          <styleOne v-if="topic.style===1" :topic="topic"></styleOne>
          <styleTwo v-if="topic.style===2" :topic="topic"></styleTwo>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import styleOne from './styleOne/styleOne'
  import styleTwo from './styleTwo/styleTwo'
  export default {
    name: "Recommend",
    computed:{
      ...mapState({
        commendData:state=>state.things.commendData
      })
    },
    mounted() {
      this.$store.dispatch('getCommendData')
    },
    components:{
      styleOne,
      styleTwo
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .recommend_container
    width 100%
    padding-top 172px
    background #f3f5f7
    .recommend_content
      width 100%
</style>
