
<template>
  <div style="margin: 20px;">
    <Pager :total-page="10" :current-page.sync="currentPage"></Pager>
  </div>
</template>
<script>
import Pager from './Pager'
export default {
  name: "demo",
  components: {Pager},
  data () {
    return {
      currentPage: 1
    }
  }
};
</script>
<style>
* {margin: 0; padding: 0; box-sizing: border-box;}
body {background: white;}
</style>
