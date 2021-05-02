<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      请选择省
    </div>
    <div class="popoverWrapper" v-if="popoverVisible">
      <t-cascader-item :items="source" class="popover"
       :selected="selected" :height="popoverHeight"
        @update:selected="onUpdateSelected"></t-cascader-item>
    </div>
  </div>

</template>

<script>
import CascaderItem from './Cascader-item'

export default {
  name: 'Cascader.vue',
  components: {
    't-cascader-item': CascaderItem
  },
  data() {
    return {
      popoverVisible: false,
    }
  },
  methods: {
    onUpdateSelected (newSelected) {
      this.$emit('update:selected', newSelected)
    }
  },
  props: {
    source: {
      type: Array
    },
    popoverHeight: {
      type: String
    },
    selected: {
      type: Array,
      default: () => []
    },
  }
};
</script>

<style lang="scss" scoped>
.cascader {
  position: relative;

  .trigger {
    border: 1px solid black;
    width: 80px;
    //height: 32px;
  }

  .popoverWrapper {
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    display: flex;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  }
}
</style>