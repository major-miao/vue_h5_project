let mixin = {
  data() {
   return {};
  },
  props: {
   options: {
     required: false,
     default: function() {
       return {};
     }
   }
  },
  computed: {
     finalOption() {
       return {...this.opt, ...this.options};
     },
     translate() { // 根据props，生成相对应的动画
      if(!this.finalOption.transition) {
       return '';
      }else {
       if(this.finalOption.position === 'top') {
        return 'translate-top';
       }else if(this.finalOption.position === 'middle') {
        return 'translate-middle';
       }else if(this.finalOption.position === 'bottom') {
        return 'translate-bottom';
       }
      }
     },
     fadeIn() { // 同上
      if(!this.finalOption.transition) {
       return '';
      } else{
       return 'fadeIn';
      }
     }
   },
   methods: {}
};

export default mixin;
