<template>
    <div class="collapseItem" @click="onClick">
      <div class="title">{{title}}</div>
      <div class="contentWrapper" v-if="show">
        <slot></slot>
      </div>

    </div>
</template>

<script >
export default {
name: "Collapse-item",
  inject:['eventHub'],
  data(){
  return {
    show:false,
  }
  },
  mounted() {
    this.eventHub.$on('update:selected',(names)=>{
      this.show = names.indexOf(this.name) !== -1;
    })
  },
  props:{
  title:{
    type:String
  },
    name:{
      type:String
    }
  },
  methods:{
    onClick(){
      if(this.show){
        this.eventHub.$emit('removeItem',this.name)
      }else{
        this.eventHub.$emit('addItem',this.name)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>