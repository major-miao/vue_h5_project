<template>
  <div>
    <!-- banner -->
    <div class="banner-box">
      <img :src="(activeEntity!=null&&!!activeEntity.bannerUrl)?activeEntity.bannerUrl:defaultImg"/>
    </div>
    <!-- 登录 -->
    <i-login v-show="pageState=='login'" @login-callback="loginCallBack" :activeEntity="activeEntity"></i-login>
    <!-- 结果页面 -->
    <i-result v-show="pageState=='result'">
      <p slot="title">—— 成功领劵 ——</p>
      <p slot="footer">可在【丰巢管家app>个人中心>优惠券】中查看</p>
      <p>领券手机号: {{userPhone}}</p>
    </i-result>
    <!-- 底部 -->
    <div class="rule-box">
      <a @click="openRule()">活动规则</a>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import login from '@/components/login/login';
import result from '@/components/login/result';
import { qqShare } from '@/static/js/libs/qqShare';
import { innerAppShare } from '@/static/js/utils/mUtils';
export default {
  data() {
    return {
      pageState: 'login',
      userPhone: '',
      //添加默认的图片
      defaultImg: require('./../../static/img/comm/default_banner.png'),
      shareEntity: {},
      ConfigEntity: {},

    }
  },
  computed: {
    ...mapState([
      'activeEntity',
      'wxConfigEntity'
    ]),
    shareConfigEntity() {
      console.log(this.ConfigEntity);
      if (!!this.shareEntity.shareTitle && !!this.ConfigEntity.AppId) {
        qqShare(this.shareEntity, this.ConfigEntity);
      } else {
        return 0;
      }
    }
  },
  methods: {
    //获取活动信息
    initFun() {
      //获取路径的参数得到活动信息
      let activityMark = this.$route.params.activityMark;
      let data = {
        activityMark: activityMark
      };
      this.queryActivityInfo(data);
      //获取微信配置信息
      let paramsData = {
        shareUrl: encodeURIComponent(window.location.href.split("#")[0])
      };
      this.getWxConfig(paramsData);
    },
    openRule() {
      //显示弹出框提示语句
      this.$store.dispatch('setPromptOptions', {
        text: this.activeEntity.activityRule,
        show: true,
        title: {
          show: true,
          text: '活动规则'
        },
        btn: {
          show: false
        },
        confirmPrompt: () => {

        }
      });
    },
    loginCallBack(returnData) {
      if (returnData.type == 1) {
        this.pageState = "result";
        this.userPhone = returnData.userPhone;
      }
    },
    ...mapActions([
      'queryActivityInfo',
      'getWxConfig'
    ])
  },
  created() {
    this.initFun();
  },
  mounted() {},
  watch: {
    shareConfigEntity(newValue) {
      if (!newValue) {
        return;
      }
    },
    activeEntity(newValue, oldValue) {
      if (!newValue) {
        return;
      }
      if (newValue.status == 3) {
        //判断活动是否已结束
        this.$store.dispatch('setTotastOptions', {
          show: true,
          keepOn: true,
          text: '活动已结束'
        });
      }
      this.shareEntity = {
        shareTitle: newValue.shareTitle,
        shareDesc: newValue.shareSummary,
        shareLink: window.location.href,
        shareImgUrl: newValue.shareBannerUrl
      };
      //站内分享
      let actionParam = {
        title: newValue.shareTitle,
        icon: newValue.shareBannerUrl,
        desc: newValue.shareSummary,
        link: window.location.href,
        smsDesc: ''
      };
      // innerAppShare(actionParam);
      document.title = newValue.name;
    },
    wxConfigEntity(newValue, oldValue) {
      if (!newValue) {
        return;
      }
      if (newValue == oldValue) {
        return;
      }
      //获取配置信息
      if (newValue.result == 0) {
        return;
      }
      this.ConfigEntity = {
        AppId: newValue.appId,
        Timestamp: newValue.timestamp,
        NonceStr: newValue.nonceStr,
        Signature: newValue.signature
      };
    }
  },
  components: {
    "i-login": login,
    "i-result": result
  }
}

</script>
<style lang="scss">
@import "./../../static/css/pages/comm/index";
</style>
