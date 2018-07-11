module.exports = function(Vue) {
    Vue.prototype.util = {
        // 字符串相关
        // 去空格
        trim: (v) => {
            if (!v) return v;
            return v.replace(/^\s+/g, '').replace(/\s+$/g, '');
        },
        // dom相关
        // 是否含有 class
        hasClass: (dom, className) => {
            className = className.toLowerCase().replace(/^\s|\s$/g, '');
            return (' ' + ((dom || {}).className.toLowerCase() || '').replace(/\s/g, ' ') + ' ').indexOf(' ' + className + ' ') >= 0;
        }
    };
};