<template>
  <div class="cascaderItem" :style="{height: height}">
    <div class="left">
      <div class="label" v-for="item in items" @click="onClickLabel(item)">
        {{item.name}}
        <t-icon name="right" v-if="item.children"></t-icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <cascader-item :items="rightItems" :height="height" :level="level+1" :selected="selected"
      @update:selected="onUpdateSelected"
      ></cascader-item>
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
    },
    selected: {
      type: Array,
      default: () => []
    },
    level: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      leftSelected: null
    }
  },
  methods: {
    onClickLabel (item) {
      let copy = JSON.parse(JSON.stringify(this.selected))
      copy[this.level] = item
      if(JSON.stringify(copy[this.level])===JSON.stringify(this.selected[this.level])){return}
      copy.splice(this.level + 1) // 一句话
      this.$emit('update:selected', copy)
    },
    onUpdateSelected (newSelected) {
      this.$emit('update:selected', newSelected)
    }
  },
  computed: {
    rightItems () {
      let currentSelected = this.selected[this.level]
      if (currentSelected && currentSelected.children) {
        return currentSelected.children
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