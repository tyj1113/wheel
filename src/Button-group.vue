<template>
  <div class="group">
    <slot></slot>
  </div>
</template>

<script >
export default {
  name: 'Button-group',
  mounted() {
    for(let node of this.$el.children){
      let name=node.localName.toLocaleLowerCase()
      if(name!=='button'){
        console.warn(`g-button-group 的子元素应该全是 g-button，但是你写的是 ${name}`)
      }
    }

  }
};
</script>

<style lang="scss" >
.group{
  display: inline-flex;
  .t-button{
    border-radius: 0;
    &:not(:first-child){
      margin-left: -1px;
    }
    &:first-child{
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius:var(--border-radius);
    }
    &:last-child{
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius:var(--border-radius) ;
    }
    &:hover{
      position: relative;
      z-index:1;
    }
  }
}
</style>