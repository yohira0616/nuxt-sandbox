<template>
  <div>
    <v-ons-page>
      <v-ons-toolbar>
        <div class="center">Hello,OnsenUI!</div>
      </v-ons-toolbar>
      <HelloWorld></HelloWorld>

    </v-ons-page>
  </div>
</template>

<script>
  import HelloWorld from '@/components/HelloWorld.vue'
  // Webpack CSS import
  import 'onsenui/css/onsenui.css';
  import 'onsenui/css/onsen-css-components.css';

  // JS import
  import Vue from 'vue';
  import VueOnsen from 'vue-onsenui'; // This already imports 'onsenui'

  Vue.use(VueOnsen);


  export default {
    name: "index",
    components: {
      HelloWorld
    }
  }
</script>

<style scoped>

</style>
