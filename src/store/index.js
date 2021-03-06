import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import toast from './modules/toast';
import prompt from './modules/prompt';
//全局设置的state值
import {state} from './states';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: state,
  actions,
  mutations,
  getters,
  modules: {
    toast: toast,
    prompt: prompt
  }
});

export default store;
