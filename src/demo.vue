<template>
  <div class="page" style="position:relative;">
    <DatePicker :value="date" @input="date=$event"></DatePicker>
    <p>其他内容</p>
  </div>
</template>
<style>
.page {
  padding: 100px;
}
</style>
<script>
import DatePicker from './Date-picker'
export default {
  name: "demo",
  components: {DatePicker},
  data () {
    return {
      date:new Date()
    }
  },
};
</script>
<style>
* {margin: 0; padding: 0; box-sizing: border-box;}
body {background: white;}
</style>
