<template>
    <div class="container" :class="containerClass">
      <slot></slot>
    </div>
</template>

<script >
import Aside from "./Aside";

export default {
name: "Container",
  data(){
  return {
    containerClass:{
      hasAside:false
    }
  }
  },
  mounted() {
    this.$children.forEach(vm=>{
      if(vm.$options.name==='Aside'){
        this.containerClass.hasAside=true
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.container{
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  &.hasAside{
    flex-direction: row;
  }
}
</style>