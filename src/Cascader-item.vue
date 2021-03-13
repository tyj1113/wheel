<template>
  <div class="cascaderItem">
    {{sourceItem.name}}
    <t-cascader-item v-if="sourceItem.children" v-for="item in sourceItem.children"  :sourceItem="item"></t-cascader-item>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Cascader-item.vue',
  props:{
    sourceItem:{
      type:Object
    }
  }
};
</script>

<style lang="scss" scoped>

</style>