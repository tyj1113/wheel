<template>
    <div class="tabs">
      <slot></slot>
    </div>
</template>

<script >
import Vue from 'vue'
export default {
name: "Tabs",
props:{
  selected:{
    type:String,
    required:true
  }
},
  data(){
  return {
    eventHub:new Vue()
  }
  },
  provide(){
  return {
    eventHub:this.eventHub
  }
  },
  mounted() {
    if (this.$children.length === 0) {
      console && console.warn &&
      console.warn('tabs的子组件应该是tabs-head和tabs-nav,但你没有写子组件')
    }
  this.$children.forEach(vm=>{
    if(vm.$options.name==='Tabs-head'){
      vm.$children.forEach(item=>{
        if(item.$options.name==='Tabs-item' && item.name===this.selected){
          this.eventHub.$emit('update:selected',this.selected,item)
        }
      })
    }
    })
  }
}
</script>

<style lang="scss" scoped>

</style>