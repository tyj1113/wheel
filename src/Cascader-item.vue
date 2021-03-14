<template>
  <div class="cascaderItem">
    <div class="left">
      <div class="label" v-for="item in items" @click="leftSelected = item">
        {{item.name}}
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <t-cascader-item :items="rightItems"></t-cascader-item>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Cascader-item.vue',
  props:{
    items:{
      type:Array
    }
  },
  data () {
    return {
      leftSelected: null
    }
  },
  computed: {
    rightItems () {
      if (this.leftSelected && this.leftSelected.children) {  //如果左边又被选中 并且有下一级 就返回下级对象
        return this.leftSelected.children
      } else {
        return null
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.cascaderItem {
  display: flex;
  align-items: flex-start;
  .left {
    border: 1px solid red;
  }
}
</style>