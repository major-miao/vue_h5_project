// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import $axios from './public/js/utils/http';
import './public/css/index.scss';

require('./public/js/utils/utils')(Vue);

Vue.config.productionTip = false;
Vue.config.devtools = (process.env.NODE_ENV !== 'production');

Vue.prototype.$axios = $axios;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});