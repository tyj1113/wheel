<template>
  <div class="cascaderItem" :style="{height: height}">
    <div class="left">
      <div class="label" v-for="item in items" @click="leftSelected = item">
        {{item.name}}
        <t-icon name="right" v-if="item.children"></t-icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <cascader-item :items="rightItems" :height="height"></cascader-item>
    </div>
  </div>
</template>

<script >
import Icon from './Icon'
export default {
  name: 'CascaderItem',
  components: {
    't-icon':Icon
  },
  props:{
    items:{
      type:Array
    },
    height: {
      type: String
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
  height: 100px;
  .left {
    height: 100%;
    padding: .3em 0;
  }
  .right{
    height: 100%;
    border-left: 1px solid lighten(#999, 25%);
  }
  .label {
    padding: .3em 1em;
    display: flex;
    align-items: center;
    .t-icon {
      margin-left: 1em;
      transform: scale(0.5);
    }
  }

}
</style>