<template>
    <div class="popover" @click.stop="onClick">
      <div class="content-wrapper" v-if="visible" @click.stop="">
        <slot name="content"></slot>
      </div>
      <slot></slot>
    </div>
</template>

<script >
export default {
name: "Popover",
  data(){
  return {
    visible:false
  }
  },
  methods:{
    onClick(){
      this.visible=!this.visible
      console.log('触发');
      if(this.visible===true){
        let documentClick=()=>{
          this.visible=false
          console.log('触发docu');
          document.removeEventListener('click',documentClick)
        }
          document.addEventListener('click',documentClick)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.popover{
  display: inline-block;
}
.content-wrapper{

}
</style>