<template>
    <div class="collapseItem"  >
      <div class="title" @click="onClick"  :data-name="name">{{title}}</div>
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
.collapseItem {
  > .title {
    border: 1px solid #bbb;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    margin-bottom: -1px;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;
  }

  &:first-child {
    > .title {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }

  &:last-child {
    > .title:last-child {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
  .contentWrapper{
    padding: 8px;
  }
}
</style>