import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    // 服务支持
    {
      // 统一的活动页入口
      path: '/h5/common/active/index/:activityMark',
      name: 'comm',
      component: (resolve) => {
        require(['@/views/comm/index'], resolve);
      },
      meta: {
        title: ''
      }
    }, {
      // 错误页面
      path: '/notFound',
      name: 'notFound',
      component: (resolve) => {
        require(['@/views/notfound'], resolve);
      },
      meta: {
        title: '没有找到'
      }
    }
  ]
});

// 未匹配到路由
router.beforeEach((to, from, next) => {
  let title = to.meta.title;
  document.title = title;
  if (to.matched.length === 0) {
    router.push({
      path: '/notFound'
    });
  } else {
    next();
  }
  next();
});

export default router;
