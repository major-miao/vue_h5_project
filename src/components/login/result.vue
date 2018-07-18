<template>
  <div class="result-box">
     <header>
      <slot name="title"></slot>
     </header>
     <main>
       <slot></slot>
     </main>
     <footer>
       <slot name="footer"></slot>
     </footer>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
  data() {
    return {

    }
  },
  computed: {},
  methods: {},
  created() {

  },
  mounted() {},
  watch: {

  }
}

</script>
<style lang="scss">
@import "./../../static/css/components/login/result";
</style>