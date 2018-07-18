import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from 'vue-router';
import qs from 'querystring';
import config from '@/config/serverApi';
import store from '@/store/index';
import {getDomain} from '@/config/domainConfig';

Vue.use(VueAxios, axios);
Vue.use(router);

axios.defaults.timeout = 5000;
axios.defaults.baseURL=getDomain();
// 请求拦截器
axios.interceptors.request.use(config=>{
    return config;
},error=>{
    return Promise.reject(error);
});

// 响应拦截器
axios.interceptors.response.use(function(response) {
    return response;
}, function(error) {
    return Promise.reject(error);
});

export default {
    get(url, params, successCB, errorCB) {
        console.log(getDomain());
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