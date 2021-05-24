<template>
  <div class="cascaderItem" :style="{height: height}">
    <div class="left">
      <div class="label" v-for="item in items" @click="onClickLabel(item)">
        <span class="name">{{item.name}}</span>
        <span class="icons">
          <template v-if="item.name === loadingItem.name">
            <t-icon class="loading" name="loading"></t-icon>
          </template>
          <template v-else>
            <t-icon class="next" v-if="rightArrowVisible(item)" name="right"></t-icon>
          </template>
        </span>
<!--        <t-icon name="right" v-if="rightArrowVisible(item)"></t-icon>-->
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <cascader-item :items="rightItems" :height="height" :level="level+1" :selected="selected"
      @update:selected="onUpdateSelected" :loadData="loadData" :loading-item="loadingItem"
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
    },
    loadData: {
      type: Function
    },
    loadingItem: {
      type: Object,
      default: () => ({})
    },
  },
  data () {
    return {
      leftSelected: null
    }
  },
  methods: {
    rightArrowVisible (item) {
      return this.loadData ? !item.isLeaf : item.children
    },
    onClickLabel (item) {
      let copy = JSON.parse(JSON.stringify(this.selected))
      copy[this.level] = item
      // if(JSON.stringify(copy[this.level])===JSON.stringify(this.selected[this.level])){return} //todo
      copy.splice(this.level + 1) // 一句话
      this.$emit('update:selected', copy)
    },
    onUpdateSelected (newSelected) {
      this.$emit('update:selected', newSelected)
    }
  },
  computed: {
    rightItems () {
      // let currentSelected = this.selected[this.level]
      // if (currentSelected && currentSelected.children) {
      //   return currentSelected.children
      // } else {
      //   return null
      // }
      if (this.selected[this.level]) {
        let selected = this.items.filter((item) => item.name === this.selected[this.level].name)
        if (selected && selected[0].children ) {
          return selected[0].children
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.cascaderItem {
  display: flex;
  align-items: flex-start;
  height: 100px;
  .left {
    height: 100%;
    padding: .5em 0;
    overflow: auto;
  }
  .right{
    height: 100%;
    border-left: 1px solid lighten(#999, 25%);
  }
  .label {
    padding: .3em 1em;
    display: flex;
    align-items: center;
    cursor: pointer;
    white-space: nowrap;
    &:hover{
      background:#eee;
    }
    > .name {
      margin-right: 1em;
      user-select: none;
    }
    .icons {
      margin-left: auto;
      .next {
        transform: scale(0.5);
      }
      .loading {
        animation: spin 2s infinite linear;
      }
    }
  }

}
</style>
