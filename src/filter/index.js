/**
 * Created by kongwm.kong on 2018/3/26.
 */
// import Vue from 'vue';
let tool = {
  // 私募产品获取
  getSmValue(list, val) {
    if(list.length < 1 || !val) {
      return'--';
    }
    for(let i = 0; i < list.length; i++) {
      if(val === list[i].itemKey) {
        return list[i].itemName;
      }
    }
    return '--';
  }
};

export default function(Vue) {
  Object.keys(tool).forEach((key) => {
    Vue.filter(key, tool[key]);
  });
};