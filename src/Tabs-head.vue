<template>
  <div class="tabs-head" ref="head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabs-head",
  inject: ['eventHub'],
  mounted() {
    if (this.$children.length === 0) {
      console && console.warn &&
      console.warn('tabs-head的子组件应该是tabs-item,但你没有写子组件')
    }
    this.eventHub.$on('update:selected', (name, vm) => {
      let {width, left} = vm.$el.getBoundingClientRect()
      let {left:left2}=this.$refs.head.getBoundingClientRect()
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left = `${left-left2}px`
    })
  }
}
</script>

<style lang="scss" scoped>
.tabs-head {
  display: flex;
  height: 40px;
  border-bottom: 1px solid #ddd;
  position: relative;

  > .actions {
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1em;
  }
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid blue;
    transition: all 350ms;
  }
}
</style>