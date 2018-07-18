// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import $axios from './static/js/utils/http';
import utils from './static/js/utils/utils';
import './static/css/index.scss';
Vue.use(utils);
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
