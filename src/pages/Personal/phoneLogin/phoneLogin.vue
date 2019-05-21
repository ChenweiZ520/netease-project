<template>
	<div class="login_container">
    <div class="login_content">
      <div class="logo">
        <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="user_phone">
        <input type="text" placeholder="请输入手机号" v-model="userPhone">
        <p class="phone_msg_err">{{phone_msg_err}}</p>
      </div>
      <div class="phone_code">
        <input type="text" placeholder="请输入短信验证码" v-model="phoneCode">
        <div class="get_code">获取验证码</div>
        <p class="code_msg_err">{{code_msg_err}}</p>
      </div>
      <div class="login_help">
        <span>遇到问题？</span>
        <span>使用密码验证登录</span>
      </div>
      <div class="btn_login" @click="login">登录</div>
      <div class="other_login" @click="$router.replace('/personal')">其他登录方式</div>
      <div class="register">注册账号 > </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "phoneLogin",
    data(){
      return {
        userPhone:'',
        phoneCode:'',
        phone_msg_err:'',
        code_msg_err:''
      }
    },
    watch:{
      userPhone(){
        if(/^1[0-9]{10}$/.test(this.userPhone)){
          this.phone_msg_err = ''
        }else{
          this.phone_msg_err = '请输入正确手机号'
        }
      },
      phoneCode(){
        if (/^[0-9]{4}$/.test(this.phoneCode)){
          this.code_msg_err = ''
        } else {
          this.code_msg_err = '请输入正确验证码'
        }
      }
    },
    methods:{
      login(){
        if(this.userPhone.trim()==='' || this.phoneCode.trim()===''){
          this.phone_msg_err = '手机号不能为空'
          this.code_msg_err = '验证码不能为空'
        }else if(this.phone_msg_err==='' && this.code_msg_err===''){
          console.log('登录成功')
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .login_container
    width 100%
    .login_content
      width 100%
      height 840px
      margin-top 40px
      padding 0 40px
      box-sizing border-box
      .logo
        width 100%
        height 64px
        text-align center
        margin-bottom 156px
        >img
          width 192px
          height 64px
      .user_phone
        position relative
        height 94px
        line-height 94px
        >input
          display block
          width 100%
          height 100%
          outline none
          border 0 none
          font-size 30px
          border-bottom 1px solid #bdbdbd
        .phone_msg_err
          position absolute
          left 0
          bottom -60px
          font-size 28px
          color red
      .phone_code
        position relative
        height 94px
        line-height 94px
        margin-top 32px
        >input
          display block
          width 100%
          height 100%
          outline none
          border 0 none
          font-size 30px
          border-bottom 1px solid #bdbdbd
        .get_code
          position absolute
          right 10px
          bottom 10px
          width 168px
          height 58px
          line-height 58px
          text-align center
          color #333
          font-size 30px
          border 1px solid #000
          border-radius 4px
        .code_msg_err
          position absolute
          left 0
          bottom -60px
          font-size 28px
          color red
        
      .login_help
        width 100%
        padding 40px 0
        display flex
        justify-content space-between
        span
          &:nth-child(1)
            color #7f7f7f
            font-size 28px
          &:nth-child(2)
            color #333
            font-size 30px
      .btn_login
        width 100%
        height 92px
        border 1px solid #b4282d
        border-radius 5px
        background #b4282d
        font-size 30px
        color #fff
        line-height 92px
        text-align center
        margin-bottom 40px
      .other_login
        width 100%
        height 92px
        border 2px solid #b4282d
        border-radius 5px
        color #b4282d
        font-size 30px
        line-height 92px
        text-align center
        margin-bottom 40px
      .register
        width 100%
        color #333
        font-size 28px
        text-align center
</style>
