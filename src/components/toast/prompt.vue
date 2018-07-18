<template>
 <transition :name="fadeIn">
  <div class="prompt-box" v-if="finalOption.show">
   <div class="prompt-mask" v-show="finalOption.isShowMask"></div>
   <transition :name="finalOption.translate">
    <div class="prompt-content" :class="finalOption.position" v-show="finalOption.show">
     <span class="close" @click="closePrompt">x</span>
     <p class="title" v-if="finalOption.title.show">{{finalOption.title.text}}</p>
     <div class="content-box">
        <div class="content">{{finalOption.text}}</div>
     </div>
     <div class="btn-wrapper" v-if="finalOption.btn.show">
       <span class="btn btn-cancel" @click="closePrompt">取消</span>
       <span class="btn btn-confirm" @click="finalOption.confirmPrompt">确认</span>
     </div>
    </div>
   </transition>
  </div>
 </transition>
</template>

<script>
import common from './common.js';
export default {
 name: 'toast',
 mixins: [common],
 data() {
  return {
    opt: {
      show: false, // 是否显示此toast
      text: 'loading', // 提醒文字
      position: 'center', // 提醒容器位置
      isShowMask: true, // 是否显示遮罩层
      time: 2000, // 显示时间
      transition: true, // 是否开启动画
      title:{
         show:false,
         text:'title'
      },
      btn:{
        show:false
      },
      confirmPrompt: () => {
        this.closePrompt();
      }
    }
  };
 },
  methods: {
    closePrompt() {
      this.options.show = false;
    }
  }
};
</script>
<style lang="scss">
@import "./../../static/css/components/toast/toast";
</style>
