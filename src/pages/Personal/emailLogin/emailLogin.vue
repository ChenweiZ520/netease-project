<template>
  <div class="login_container">
    <div class="login_content">
      <div class="logo">
        <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="user_phone">
        <input type="text" placeholder="邮箱账号" v-model="userEmail">
        <p class="email_msg_err">{{emailErrMsg}}</p>
      </div>
      <div class="phone_code">
        <input type="password" placeholder="密码" v-model="emailPwd">
        <p class="pwd_msg_err">{{pwdErrMsg}}</p>
      </div>
      <div class="login_help">
        <span>注册账号</span>
        <span>忘记密码</span>
      </div>
      <div class="btn_login" @click="login">登录</div>
      <div class="other_login" @click="$router.replace('/personal')">其他登录方式</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "emailLogin",
    data(){
      return {
        userEmail:'',
        emailPwd:'',
        emailErrMsg:'',
        pwdErrMsg:''
      }
    },
    watch:{
      userEmail(){
        if(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(this.userEmail)){
          this.emailErrMsg = ''
        }else{
          this.emailErrMsg = '邮箱格式不正确'
        }
      },
      emailPwd(){
        if(/^[a-zA-Z0-9]{8,16}/.test(this.emailPwd)){
          this.pwdErrMsg = ''
        }else{
          this.pwdErrMsg = '密码不能小于8位，大于16位'
        }
      }
    },
    methods:{
      login(){
        if(this.userEmail.trim()==='' || this.emailPwd.trim()===''){
          this.emailErrMsg = '邮箱不能为空'
          this.pwdErrMsg = '密码不能为空'
        }else if(this.emailErrMsg==='' && this.pwdErrMsg===''){
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
        .email_msg_err
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
        .pwd_msg_err
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
          color #7f7f7f
          font-size 28px
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
  
  
</style>
