<template>
  <div class="t-nav" :class="{vertical}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Nav",
  provide () {
    return {
      root: this,
      vertical: this.vertical
    }
  },
  props: {
    selected: {
      type: String,
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      items: [],
      namePath: []
    }
  },
  mounted () {
    this.updateChildren()
    this.listenToChildren()
  },
  updated () {
    this.updateChildren()
  },
  methods: {
    addItem (vm) {
      this.items.push(vm)
    },
    updateChildren () {
      this.items.forEach(vm => {
        if (this.selected === vm.name) {
          vm.selected = true
        } else {
          vm.selected = false
        }
      })
    },
    listenToChildren () {
      this.items.forEach(vm => {
        vm.$on('update:selected', (name) => {
          this.$emit('update:selected', name)
        })
      })
    }
  }
}
</script>

<style scoped lang="scss">
.t-nav {
  display: flex;
  border-bottom: 1px solid #eee;
  color: #333;
  cursor: default;
  user-select: none;
  &.vertical {
    flex-direction: column;
    border: 1px solid #333;
  }
}
</style>
