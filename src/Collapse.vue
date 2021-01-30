<template>
    <div class="collapse">
      <slot></slot>
    </div>
</template>

<script >

import Vue from "vue";

export default {
name: "Collapse",
  data(){
  return {
    eventHub:new Vue()
  }
  },
  mounted() {
    this.eventHub.$emit('update:selected',this.selected)
    this.eventHub.$on('addItem',(name)=>{
    let selectedCopy=JSON.parse(JSON.stringify(this.selected))
      if(this.single){
        selectedCopy=[name]
      }else{
        selectedCopy.push(name)
      }
      this.eventHub.$emit('update:selected',selectedCopy)
      this.$emit('update:selected',selectedCopy)
    })
    this.eventHub.$on('removeItem',(name)=>{
      let selectedCopy=JSON.parse(JSON.stringify(this.selected))
      let index=selectedCopy.indexOf(name)
      selectedCopy.splice(index,1)
      this.eventHub.$emit('update:selected',selectedCopy)
      this.$emit('update:selected',selectedCopy)
    })


  },
  provide(){
  return {
    eventHub:this.eventHub
  }
  },
  props:{
  selected:{
    type:Array
  },
    single:{
    type:Boolean,
      default:false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>