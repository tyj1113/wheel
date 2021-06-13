<template>
  <div class="t-nav-item" :class="{selected}" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      selected: false
    }
  },
  inject: ['root'],
  created () {
    this.root.addItem(this)
  },
  methods: {
    onClick () {
      this.root.namePath = []
      this.$parent.updateNamePath && this.$parent.updateNamePath()
      this.$emit('add:selected', this.name)
    }
  }
}
</script>

<style scoped lang="scss">
.t-nav-item {
  padding: 10px 20px;
  position: relative;
  &.selected {
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      border-bottom: 2px solid #4a90e2;
      width: 100%;
    }
  }
}
.t-sub-nav .t-nav-item {
  &.selected {
    color: #333;
    background: #eee;
    &::after {
      display: none;
    }
  }
}
</style>
