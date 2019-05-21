<template>
	<div class="recommend_container">
    <div class="recommend_content">
      <typeOne/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import typeOne from './typeOne/typeOne'
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
      typeOne
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .recommend_container
    width 100%
    .recommend_content
      width 100%
</style>
