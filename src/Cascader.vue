<template>
  <div class="cascader">
    <div class="trigger">
      <slot></slot>
    </div>
    <div class="popover">
      <div v-for="item in source">
        <t-cascader-item :sourceItem="item"></t-cascader-item>
      </div>
    </div>
  </div>

</template>

<script >

export default {
  name: 'Cascader.vue',
  props:{
    source:{
      type:Array
    }
  }
};
</script>

<style lang="scss" scoped>

</style>