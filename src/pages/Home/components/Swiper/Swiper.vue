<template>
	<div class="swiper_content">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/ac28c333645667553b74545c46ba5e7b.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/a1e7ea79a6221552eb0e00e5552bc74f.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/a45c727b09ded1e0554df1fac12b94b1.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/cfdb199489776e89c782eae519645f2f.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/82f1d71773bfd416da55e7facb155b8d.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/68f443a9bcc78b0c46a414a633f66c47.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/2240e726260c2f9f544a9d4dbe743773.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/931e7f847284a387d4725c9409383814.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  export default {
    name: "Swiper",
    mounted() {
      new Swiper('.swiper-container',{
        direction: 'horizontal',
        loop: true,
        autoplay:true,
        speed: 1000,
        pagination: {
          el: '.swiper-pagination',
          type:'custom',
          renderCustom(swiper,current,total){
            let customPaginationHtml = ""
            for(let i = 0; i < total; i++) {
              //判断哪个分页器此刻应该被激活
              if(i === (current - 1)) {
                customPaginationHtml += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
              } else {
                customPaginationHtml += '<span class="swiper-pagination-customs"></span>';
              }
            }
            return customPaginationHtml
          }
        },
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .swiper_content
    width 100%
    height 370px
    padding-top 153px
    .swiper-container
      width 100%
      height 100%
      img
        width 100%
        height 100%
      .swiper-pagination-custom
        width 100%
        height 4px
        bottom 50px
        .swiper-pagination-customs
          width 40px
          height 4px
          display inline-block
          background-color rgba(255, 255, 255, .5)
          margin 0 10px 0 0
        .swiper-pagination-customs-active
          opacity 1
          background-color rgba(255, 255, 255, 1)
      


</style>
