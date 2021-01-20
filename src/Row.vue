<template>
  <div class="row" :style="{marginLeft:-gutter/2+'px',marginRight:-gutter/2+'px'}">
<slot></slot>
  </div>
</template>

<script >
export default {
name: "Row",
  props:{
    gutter:{
      type:[String,Number]
}
  },
  mounted() {
  console.log(this.gutter)
    this.$children.forEach(vm=>{
      console.log(vm)
      vm.gutter=this.gutter
    })
  }
}
</script>

<style lang="scss" scoped>
.row{
  display: flex;
}
</style>