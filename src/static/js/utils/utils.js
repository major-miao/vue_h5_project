module.exports = function(Vue) {
  Vue.prototype.utils = {
    // 字符串相关
    // 去所有的空格
    trim: (str) => {
      let result;
      result = str.replace(/(^\s+)|(\s+$)/g, "");
      return result.replace(/\s/g, "");
    },
    // dom相关
    // 是否含有 class
    hasClass: (dom, className) => {
      className = className.toLowerCase().replace(/^\s|\s$/g, '');
      return (' ' + ((dom || {}).className.toLowerCase() || '').replace(/\s/g, ' ') + ' ').indexOf(' ' + className + ' ') >= 0;
    },
    //检查手机号码是否输入正确
    checkPhone: (phoneNum) => {
      var reg = /^0?(13[0-9]|15[012356789]|18[012346789]|14[57]|17[678]|170[059]|14[57]|166|19[89])[0-9]{8}$/;
      if (reg.test(phoneNum)) {
        return true;
      } else {
        return false;
      }
    },
    //手机号码分割显示
    formatPhoneNumber: (phoneNum) => {
      //手机分割
      if (phoneNum.length == 4) {
        phoneNum = phoneNum.substring(0, 3) + "-" + phoneNum.substring(3, phoneNum.length);
      }
      if (phoneNum.length == 9) {
        phoneNum = phoneNum.substring(0, 8) + "-" + phoneNum.substring(8, phoneNum.length);
      }
      if (phoneNum.length == 14) {
        phoneNum = phoneNum.replace(/-/g, '');
      }
      return phoneNum;
    },
    //判断用户所在的环境
    checkRuntimeEnvironment: () => {
      var userAgent = navigator.userAgent.toLowerCase();
      console.log("userAgent",userAgent);
      // 1-微信（微信、qq）、2-支付宝、3-浏览器、4-丰巢管家app
      if (userAgent.match(/Alipay/i) == "alipay") {
        return 2;
      } else if (userAgent.match(/MicroMessenger/i) == "micromessenger") {
        return 1;
      } else if (userAgent.match(/HiveBoxApp/i) == "hiveboxapp") {
        return 4;
      } else {
        return 3;
      }
    }
  };
};
