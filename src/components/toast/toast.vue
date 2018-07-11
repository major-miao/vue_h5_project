<template>
 <transition :name="fadeIn">
  <div class="alertBox" v-if="finalOption.show">
   <div class="alert-mask" v-show="finalOption.isShowMask"></div>
   <transition :name="finalOption.translate">
    <div class="box" :class="finalOption.position" v-show="finalOption.show">
     {{finalOption.text}}
    </div>
   </transition>
  </div>
 </transition>
</template>

<script>
import common from './common.js';
var timer = null;
export default {
    name: 'toast',
    mixins: [common],
    data() {
    return {
      opt: {
        show: false, // 是否显示此toast
        text: 'loading', // 提醒文字
        position: 'center', // 提醒容器位置
        isShowMask: false, // 是否显示遮罩层
        time: 2000, // 显示时间
        transition: true // 是否开启动画
      },
      timer: null
    };
    },
    computed: {
      finalOption() {
        this.closeToast({...this.opt, ...this.options});
        return {...this.opt, ...this.options};
      }
    },
    methods: {
      closeToast(options) {
        // 时间控制
        if(options.show === true) {
          clearTimeout(timer);
          timer = setTimeout(() => {
            this.options.show = false;
          }, options.time);
        }
      }
    }
};
</script>

<style lang="scss" scoped>
 .box{
  position: fixed;
  top: 50%;
  left: 50%;
  padding:5px 10px;
  max-width: 70%;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  background: rgba(0,0,0,.5);
  text-align: center;
  color: #fff;
  font-size: 1.3rem;
  z-index: 5000;
  color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
 }
 .box.top{
  top: 50px;
  margin-top: 0;
 }
 .box.center{
  top: 50%;
  margin-top: -100px;
 }
 .box.bottom{
  top: auto;
  bottom: 50px;
  margin-top: 0;
 }
 .alert-mask{
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(0,0,0,.5);
  z-index: 4999;
 }
 .fadeIn-enter-active, .fadeIn-leave-active{
  transition: opacity .3s;
 }
 .fadeIn-enter, .fadeIn-leave-active{
  opacity: 0;
 }
 .translate-top-enter-active, .translate-top-leave-active{
  transition: all 0.3s cubic-bezier(.36,.66,.04,1);
 }
 .translate-top-enter, .translate-top-leave-active{
  transform: translateY(-50%);
  opacity: 0;
 }
 .translate-middle-enter-active, .translate-middle-leave-active{
  transition: all 0.3s cubic-bezier(.36,.66,.04,1);
 }
 .translate-middle-enter, .translate-middle-leave-active{
  transform: translateY(80%);
  opacity: 0;
 }
 .translate-bottom-enter-active, .translate-bottom-leave-active{
  transition: all 0.3s cubic-bezier(.36,.66,.04,1);
 }
 .translate-bottom-enter, .translate-bottom-leave-active{
  transform: translateY(100%);
  opacity: 0;
 }
</style>
