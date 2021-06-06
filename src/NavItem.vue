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
      this.$emit('add:selected', this.name)
    }
  }
}
</script>

<style scoped lang="scss">
.t-nav-item {
  padding: 10px 20px;
  &.selected {
    background: red;
  }
}
</style>
