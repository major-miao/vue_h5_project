import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from 'vue-router';
import qs from 'querystring';
import config from '@/config/config';
import store from '@/store/index';

Vue.use(VueAxios, axios);
Vue.use(router);

axios.defaults.timeout = 5000;
// axios.defalut.baseURL = '/webapp';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 请求拦截器
axios.interceptors.request.use(function(config) {
    return config;
}, function(error) {
    return Promise.reject(error);
});

// 响应拦截器
axios.interceptors.response.use(function(response) {
    // let status = (response && response.data) ? response.data.ret : false;
    // switch (status) {
    //   case true:
    //     break;
    //   default:
    //     let errorMsg = response.data.res.errorMsg || '系统错误';
    //     // 显示失败的信息
    //     store.dispatch('setTotastOptions', {
    //       show: true,
    //       text: errorMsg
    //     });
    //     return Promise.reject(errorMsg);
    // }
    return response;
}, function(error) {
    // let errorPage = 错误页面;
    // window.location.href = errorPage;
    return Promise.reject(error);
});

export default {
    get(url, params, successCB, errorCB) {
        axios.get(url, {
                params: params
            })
            .then(successCB)
            .catch(errorCB);
    },

    post(url, params, successCB, errorCB) {
        axios.post(url, qs.stringify(params))
            .then(successCB)
            .catch(errorCB);
    },

    axiosHttp(params, successCB, errorCB) {
        let axiosParmas = params;
        axiosParmas.responseType = 'json';
        axios(axiosParmas)
            .then(successCB)
            .catch(errorCB);
    }
};