<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>

<script >
export default {
  name: 'Tabs-body',
  inject:['eventHub'],
  mounted() {
    if (this.$children.length === 0) {
      console && console.warn &&
      console.warn('tabs的子组件应该是tabs-pane,但你没有写子组件')
    }
  }
};
</script>

<style lang="scss" scoped>

</style>