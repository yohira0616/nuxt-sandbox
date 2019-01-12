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
  import axios from 'axios'

  // JS import
  import Vue from 'vue';
  import VueOnsen from 'vue-onsenui'; // This already imports 'onsenui'

  Vue.use(VueOnsen);


  export default {
    name: "index",
    components: {
      HelloWorld
    },
    created: function () {
      /*
      axios.get('http://localhost:3001').then(tasks => {
        console.log(tasks)
      }).catch(err => {
        console.error(err)
      })*/
    }
  }
</script>

<style scoped>

</style>
