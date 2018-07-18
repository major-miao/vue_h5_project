<template>
  <div class="login-box">
    <div class="login-content-box gray-bottom-border">
      <div class="title-input-box gray-bottom-border">
        <div class="title-box">
          手机号
        </div>
        <div class="input-box">
          <input type="phone" name="" placeholder="请输入手机号" v-model="login.mobilePhone" maxlength="13" />
        </div>
      </div>
      <div class="title-input-box">
        <div class="title-box">
          验证码
        </div>
        <div class="input-box">
          <input type="number" name="" placeholder="请输入验证码" v-model="login.code" maxlength="6" v-on:input="inputNumberMaxLength" />
          <div class="border-line"></div>
          <div class="send-code">
            <button type="button" @click="getCheckCode" class="button-no-style" :disabled="disabled" :class="[disabled?'active':'']">{{btnTxt}}</button>
          </div>
        </div>
      </div>
    </div>
    <div class="login-operate-box">
      <a @click="loginOperate">确定</a>
    </div>
  </div>
</template>
<script>
import config from '@/config/serverApi';
export default {
  data() {
    return {
      login: {
        mobilePhone: '',
        code: ''
      },
      btnTxt: '获取验证码',
      time: 0,
      disabled: false,
      shakeFlag: false
    }
  },
  props: ['activeEntity'],
  computed: {},
  methods: {
    getWxConfig() {

    },
    //获取手机验证码
    getCheckCode() {
      let mobilePhone = this.utils.trim(this.login.mobilePhone);
      if (mobilePhone == "") {
        this.$store.dispatch('setTotastOptions', {
          show: true,
          text: '请输入手机号码！'
        });
      } else if (!this.utils.checkPhone(mobilePhone)) {
        this.$store.dispatch('setTotastOptions', {
          show: true,
          text: '请输入正确的手机号码！'
        });
      } else {
        //获取手机验证码
        this.shakeFlag = true;
        let data = {
          userPhone: mobilePhone
        };
        this.$axios.get(config.login.getVerifyCode, data, (resData) => {
          let resultData = resData.data;
          if (resultData.success) {
            //获取验证码成功
            this.$store.dispatch('setTotastOptions', {
              show: true,
              text: resultData.msg
            });
            this.time = 90;
            this.disabled = true;
            this.timer();
          } else {
            //提示获取验证码失败
            this.$store.dispatch('setTotastOptions', {
              show: true,
              text: resultData.msg
            });
            this.shakeFlag = false;
          }
        });
      }
    },

    loginOperate() {
      //验证手机号码和验证码是否正确
      let mobilePhone = this.utils.trim(this.login.mobilePhone);
      let code = this.login.code;
      if (mobilePhone == "" || !this.utils.checkPhone(mobilePhone)) {
        this.$store.dispatch('setTotastOptions', {
          show: true,
          text: '请输入正确的手机号码！'
        });
      } else if (code == "" || code.length != 6) {
        this.$store.dispatch('setTotastOptions', {
          show: true,
          text: '请输入正确的验证码！'
        });
      } else {
        let data = {
          userPhone: mobilePhone,
          verifyCode: code,
          activityId: this.activeEntity.id,
          channel: this.utils.checkRuntimeEnvironment()
        }
        this.$axios.get(config.login.getCoupon, data, (resData) => {
          let resultData = resData.data;
          if (resultData.success) {
            let contentData = resultData.data;
            let returnData = {
              type: 1,
              userPhone: contentData.userPhone
            }
            this.$emit('login-callback', returnData);
          } else {
            //领取失败
            this.$store.dispatch('setTotastOptions', {
              show: true,
              text: resultData.msg
            });
          }
        });
      }
    },
    timer() {
      if (this.time > 0) {
        this.time--;
        this.btnTxt = this.time + "s";
        setTimeout(this.timer, 1000);
      } else {
        this.time = 0;
        this.btnTxt = "获取验证码";
        this.disabled = false;
        this.shakeFlag = false;
      }
    },
    inputNumberMaxLength() {
      if (this.login.code.length > 6) this.login.code = this.login.code.slice(0, 6)
    }
  },
  created() {
  },
  mounted() {
  },
  computed: {
    loginMobilePhone() {
      return this.login.mobilePhone;
    }
  },
  watch: {
    loginMobilePhone(newValue, oldValue) {
      if (newValue.length > oldValue.length) { // 文本框中输入
        if (newValue.length === 3 || newValue.length === 8) {
          this.login.mobilePhone += ' ';
        }
      } else { // 文本框中删除
        if (newValue.length === 9 || newValue.length === 4) {
          this.login.mobilePhone = this.login.mobilePhone.trim()
        }
      }
    }
  }
}

</script>
<style lang="scss">
@import "./../../static/css/components/login/login";

</style>
