import {
  QUERYACTIVITYINFO,
  GETWXCONFIG
} from './mutationTypes.js';
export default {
  //查询活动信息
  [QUERYACTIVITYINFO](state, activeEntity) {
    state.activeEntity = activeEntity;
  },
  //获取微信配置信息
  [GETWXCONFIG](state, wxConfigEntity) {
    state.wxConfigEntity = wxConfigEntity;
  },
};
