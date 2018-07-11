<template>
  <div id="app">
    <router-view/>
    <toast :options="toastMsg"></toast>
    <prompt :options="promptMsg"></prompt>
  </div>
</template>

<script>
import toast from '@/components/toast/toast';
import prompt from '@/components/toast/prompt';
export default {
  name: 'app',
  data() {
    return{};
  },
  computed: {
    toastMsg() {
      return this.$store.getters.getTotastOptions;
    },
    promptMsg() {
      return this.$store.getters.getPromptOptions;
    }
  },
  methods: {},
  components: {
    toast: toast,
    prompt: prompt
  }
};
</script>
