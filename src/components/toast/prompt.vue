<template>
 <transition :name="fadeIn">
  <div class="alertBox" v-if="finalOption.show">
   <div class="alert-mask" v-show="finalOption.isShowMask"></div>
   <transition :name="finalOption.translate">
    <div class="box" :class="finalOption.position" v-show="finalOption.show">
     <span class="close" @click="closePrompt">x</span>
     <span class="text">{{finalOption.text}}</span>
     <div class="btn-wrapper">
       <span class="btn btn-confirm" @click="finalOption.confirmPrompt">确认</span>
       <span class="btn btn-cancel" @click="closePrompt">取消</span>
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

<style lang="scss" scoped>
 .box{
    position: fixed;
    top: 50%;
    left: 50%;
    padding:20px 0 55px;
    max-width: 60%;
    min-width: 40%;
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
  .text{
    display: inline-block;
    padding: 10px 20px 0;
  }
  .close{
    position: absolute;
    top: 2%;
    right: 2%;
    width: 10%;
  }
  .btn-wrapper{
    position: absolute;
    width: 100%;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%, 0);
    .btn{
      padding: 5px 7px;
      background: #fff;
      color: #333;
      border-radius: 5px;
      margin:0 7px;
    }
    .btn:hover, .btn:focus{
      color: #333;
      background-color: #e6e6e6;
      border-color: #adadad;
    }
    .btn-confirm{
      color: #fff;
      background-color: #5bc0de;
      border-color: #46b8da;
    }
    .btn-confirm:focus,.btn-confirm:hover{
      color: #fff;
      background-color: #31b0d5;
      border-color: #269abc;
    }
  }
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
