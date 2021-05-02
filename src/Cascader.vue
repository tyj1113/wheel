<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      {{ result  || '请选择'}}
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
  },
  computed: {
    result () {
      return this.selected.map((item) => item.name).join('/')
    }
  }
};
</script>

<style lang="scss" scoped>
.cascader {
  position: relative;

  .trigger {
    border: 1px solid black;
    min-width: 10em;
    height: 32px;
    border-radius: 2px;
    display: inline-flex;
    align-items: center;
    padding: 0 1em;
  }

  .popoverWrapper {
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    display: flex;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
    margin-top: 8px;
  }
}
</style>