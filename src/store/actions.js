//引入请求
import $axios from '@/static/js/utils/http';
import servicesApi from '@/config/serverApi';
import {
  QUERYACTIVITYINFO,
  GETWXCONFIG
} from './mutationTypes.js';
export default {
  //获取活动信息
  async queryActivityInfo({
    commit,
    state
  }, paramsData) {
    $axios.get(servicesApi.active.queryActivityInfo, paramsData, (resData) => {
      let resultData = resData.data;
      if (resultData.success) {
        let contentData = resultData.data;
        commit(QUERYACTIVITYINFO, contentData);
      }
    });
  },
  //获取微信分享信息
  async getWxConfig({
    commit,
    state
  }, paramsData) {
    $axios.get(servicesApi.share.getWxConfig, paramsData, (resData) => {
      let resultData = resData.data;
      if (resultData) {
        let contentData = resultData;
        commit(GETWXCONFIG, contentData);
      }
    });
  },
};
